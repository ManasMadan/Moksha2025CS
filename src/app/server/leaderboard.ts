/* eslint-disable @typescript-eslint/no-explicit-any */
'use server';

import { kv } from '@vercel/kv';
import { JWT } from 'google-auth-library';
import { google } from 'googleapis';

interface LeaderboardEntry {
  id: number;
  name: string;
  points: number;
}

interface CachedData {
  data: LeaderboardEntry[];
  timestamp: number;
}

interface ILeaderboardResponse {
  data: string;
  error: string | null;
  status: string;
}

// Memory cache with proper typing
let memoryCache: {
  data: LeaderboardEntry[] | null;
  timestamp: number;
} = {
  data: null,
  timestamp: 0,
};

const CACHE_DURATION = 15 * 60 * 1000; // 15 minutes in milliseconds
const CACHE_KEY = 'leaderboard_data';

export async function getLeaderboardData(): Promise<ILeaderboardResponse> {
  try {
    const now = Date.now();

    // Check memory cache first
    if (memoryCache.data && now - memoryCache.timestamp < CACHE_DURATION) {
      console.log('Serving from memory cache');
      return {
        data: JSON.stringify(memoryCache.data),
        error: null,
        status: 'success'
      };
    }

    // Try Vercel KV
    try {
      const cachedData = await kv.get<CachedData>(CACHE_KEY);
      if (cachedData && (now - cachedData.timestamp < CACHE_DURATION)) {
        console.log('Serving from KV cache');
        memoryCache = {
          data: cachedData.data,
          timestamp: cachedData.timestamp
        };
        return {
          data: JSON.stringify(cachedData.data),
          error: null,
          status: 'success'
        };
      }
    } catch (kvError) {
      console.error('KV cache error:', kvError);
    }

    // If no cache hit or cache expired, fetch from Google Sheets
    console.log('Fetching from Google Sheets');
    const freshData = await fetchFromGoogleSheets();
    const timestamp = Date.now();

    // Update both caches
    try {
      await kv.set(CACHE_KEY, { data: freshData, timestamp }, { ex: CACHE_DURATION / 1000 });
    } catch (kvError) {
      console.error('KV cache update error:', kvError);
    }

    // Always update memory cache
    memoryCache = { data: freshData, timestamp };

    return {
      data: JSON.stringify(freshData),
      error: null,
      status: 'success'
    };

  } catch (error) {
    console.error('Leaderboard data fetch error:', error);
    
    if (memoryCache.data) {
      console.log('Serving stale memory cache due to error');
      return {
        data: JSON.stringify(memoryCache.data),
        error: 'Using stale data due to fetch error',
        status: 'partial_success'
      };
    }

    // If all else fails, return empty data with error
    return {
      data: "[]",
      error: error instanceof Error ? error.message : 'Unknown error occurred',
      status: 'error'
    };
  }
}

async function fetchFromGoogleSheets(): Promise<LeaderboardEntry[]> {
  if (!process.env.GOOGLE_CLIENT_EMAIL || !process.env.GOOGLE_PRIVATE_KEY || !process.env.SHEET_ID) {
    throw new Error('Missing required Google Sheets credentials');
  }

  try {
    const jwt = new JWT({
      email: process.env.GOOGLE_CLIENT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
    });

    const sheets = google.sheets({ version: 'v4', auth: jwt });

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.SHEET_ID,
      range: 'Sheet1!A3:B',
    });

    if (!response.data.values) {
      return [];
    }

    return response.data.values.map((row: any[], index: number) => {
      if (!Array.isArray(row) || row.length < 2) {
        console.warn(`Skipping invalid row data at index ${index}`);
        return null;
      }

      const points = parseInt(row[1]);
      if (isNaN(points)) {
        console.warn(`Skipping row with invalid points at index ${index}`);
        return null;
      }

      return {
        id: index + 1,
        name: String(row[0]).slice(0, 100),
        points: points
      };
    }).filter((entry): entry is LeaderboardEntry => entry !== null);
    
  } catch (error) {
    console.error('Google Sheets fetch error:', error);
    throw new Error('Failed to fetch data from Google Sheets');
  }
}