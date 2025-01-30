'use client';

import React from 'react';
import { Cinzel, Playfair } from 'next/font/google';
import Link from 'next/link';

const cinzel = Cinzel({
  subsets: ['latin'],
});

const playfair = Playfair({
  subsets: ['latin'],
});

const CLRegister = () => {
  return (
    <div className="min-h-screen w-full relative">
      <div className="fixed inset-0 bg-[url('/cl_bg.png')] bg-cover bg-center bg-no-repeat" />
      <div className="fixed inset-0 bg-gradient-to-b from-[#1A3BAA] to-transparent mix-blend-overlay" />
      <div className="relative z-10 w-full py-6 sm:py-10 md:py-16 px-4 sm:px-6 md:px-10">
        <div
          className={`${playfair.className} max-w-7xl flex flex-col mx-auto bg-[#233678CC] rounded-lg sm:rounded-2xl border border-[#00EAE399] px-6 sm:px-8 py-8 sm:py-10 text-white text-base sm:text-xl md:text-2xl lg:text-3xl font-bold space-y-8 sm:space-y-10 md:space-y-14`}
        >
          <div className="space-y-3 sm:space-y-4">
            <h1
              className={`${cinzel.className} text-[#20F2ED] tracking-wide font-[549] text-3xl sm:text-4xl md:text-5xl lg:text-6xl`}
            >
              Contingent Leader Registration
            </h1>
            <div className="text-base sm:text-xl md:text-2xl lg:text-3xl space-y-2 sm:space-y-4">
              <p>
                Are you ready to lead your squad to ultimate glory and create a legacy that will echo through the ages?
                Moksha&apos;25 presents a golden opportunity for you to become a Contingent Leader. This is your moment
                to rise, lead, and leave an everlasting mark.
              </p>
              <p>
                Step into the spotlight, the first step is here‼ Legends aren&apos;t discovered; they are forged through
                perseverance, brilliance, and courage.
              </p>
              <p> Let&apos;s tap into your destiny and lead the way.</p>
            </div>
          </div>
          <div className="space-y-3 sm:space-y-4">
            <h1
              className={`${cinzel.className} text-[#20F2ED] tracking-wide font-[549] text-3xl sm:text-4xl md:text-5xl lg:text-6xl`}
            >
              Requirements for Contingent Leaders
            </h1>
            <ul className="list-disc list-inside text-base sm:text-xl md:text-2xl lg:text-3xl ml-2">
              <li>Accountable and reliable</li>
              <li>Approachable and a team player</li>
              <li>An efficient decision-maker</li>
              <li>No disciplinary actions against them</li>
              <li>A regular college student</li>
              <li>Strong communication skills</li>
              <li>Active on social media</li>
            </ul>
          </div>
          <div className="space-y-3 sm:space-y-4">
            <h1
              className={`${cinzel.className} text-[#20F2ED] tracking-wide font-[549] text-3xl sm:text-4xl md:text-5xl lg:text-6xl`}
            >
              Duties of a Contingent Leader
            </h1>
            <ul className="list-disc list-inside text-base sm:text-xl md:text-2xl lg:text-3xl ml-2">
              <li>Act as the bridge between Moksha&apos;25 and your college.</li>
              <li>Amplify the buzz about Moksha&apos;25 through active social media presence and word-of-mouth.</li>
              <li>Ensure active participation from your college in Moksha&apos;25.</li>
              <li>Keep your team and participants informed about schedules, rules, and announcements.</li>
            </ul>
          </div>
          <div className="space-y-3 sm:space-y-4">
            <h1
              className={`${cinzel.className} text-[#20F2ED] tracking-wide font-[549] text-3xl sm:text-4xl md:text-5xl lg:text-6xl`}
            >
              Perks of Being a Contingent Leader
            </h1>
            <ul className="list-disc list-inside text-base sm:text-xl md:text-2xl lg:text-3xl ml-2">
              <li>Access to VIP areas</li>
              <li>Certificate of appreciation</li>
              <li>Gift hampers</li>
              <li>Social media shoutout & many more surprises!</li>
            </ul>
          </div>
          <div className="space-y-3 sm:space-y-4">
            <h1
              className={`${cinzel.className} text-[#20F2ED] tracking-wide font-[549] text-3xl sm:text-4xl md:text-5xl lg:text-6xl`}
            >
              For Any Queries:-
            </h1>
            <ul className="list-disc list-inside text-base sm:text-xl md:text-2xl lg:text-3xl ml-2">
              <li>Aditya:- 7250880898</li>
              <li>Dipesh:- 9650538213</li>
              <li>Lalit Panghal:- 8178634241</li>
            </ul>
          </div>
          <Link href="https://forms.gle/kCgoDgecqEbNwB4M6" className="block mx-auto" target="_blank">
            <button className="text-xl md:text-2xl lg:text-3xl bg-[#20F2ED] text-black px-4 py-2 lg:py-4 rounded-md cursor-pointer">
              Register Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CLRegister;
