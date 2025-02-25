'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Inter, Unbounded } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import Player from 'video.js/dist/types/player';

const inter = Inter({ subsets: ['latin'] });
const unbounded = Unbounded({ subsets: ['latin'] });

const videoLinks = [
  'https://cdn.mokshansut.com/7b2f0a8c9e3d1b5a4f6c8e2d0b7a9c3f1e4d8b5a2c6f9e3d1b5a4f6c8e2d0b1/output.m3u8',
  'https://cdn.mokshansut.com/e9c7a01e4ac489c13f44573d38fa1265983c8f3fb4c538f289fdc6612c2e9511/output.m3u8',
  'https://cdn.mokshansut.com/f1d8e4b5a2c6f9e3d1b5a4f6c8e2d0b7a9c3f1e4d8b5a2c6f9e3d1b5a4f6c8e/output.m3u8',
];

const CommingSoon = () => {
  const [width, setWidth] = useState(0);
  const [videoMuted, setVideoMuted] = useState(true);
  const videoRef = useRef(null);
  const playerRef = useRef<Player>(null);

  useEffect(() => {
    // Select a random video from the array
    const randomVideo = videoLinks[Math.floor(Math.random() * videoLinks.length)];

    if (videoRef.current) {
      playerRef.current = videojs(videoRef.current, {
        autoplay: true,
        controls: false,
        loop: true,
        muted: videoMuted,
        fill: true,
        responsive: true,
        controlBar: false,
        bigPlayButton: false,
        loadingSpinner: false,
        textTrackDisplay: false,
        errorDisplay: false,
        sources: [
          {
            src: randomVideo,
            type: 'application/x-mpegURL',
          },
        ],
        html5: {
          hls: {
            enableLowInitialPlaylist: true,
            smoothQualityChange: true,
            overrideNative: true,
          },
        },
      });
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.dispose();
      }
    };
  }, []);

  useEffect(() => {
    if (playerRef.current) {
      playerRef.current.muted(videoMuted);
    }
  }, [videoMuted]);

  useEffect(() => {
    const text_container = document.querySelector('.text-container') as HTMLElement;
    const playBtn = document.querySelector('.play_btn') as HTMLElement;
    if (!text_container || !playBtn) return;
    playBtn.style.setProperty('--initial-x', `${text_container.offsetLeft - text_container.clientWidth / 2 - 100}px`);
    playBtn.style.setProperty('--initial-y', `40%`);
    playBtn.style.setProperty('--final-x', `${text_container.offsetLeft + text_container.clientWidth / 2 + 100}px`);
    playBtn.style.setProperty(
      '--settle-y',
      `calc(${text_container.offsetTop + text_container.clientHeight / 2}px + 3rem)`
    );
    setWidth(text_container.clientWidth - 20);
    requestAnimationFrame(() => {
      playBtn.classList.add('animate');
    });
  }, []);

  return (
    <div className="w-full min-h-[100dvh] h-full bg-black">
      {/* Video Background */}
      <div className="absolute overflow-hidden inset-0 max-w-screen max-h-screen">
        <div data-vjs-player className="w-full h-full overflow-hidden inset-0 max-w-screen max-h-screen">
          <video
            ref={videoRef}
            playsInline
            className="video-js vjs-default-skin vjs-fullscreen vjs-big-play-centered"
            style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </div>
      {/* Tint Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-10" />

      <div className="absolute flex-1 h-full w-full flex flex-col z-20">
        {/* Header Section */}
        <div
          className={`px-4 sm:px-10 flex flex-col xs:flex-row justify-between items-center w-full ${inter.className} pb-4 sm:pb-6 px-4 sm:px-6 md:px-8`}
        >
          <div className="mb-4 sm:mb-0">
            <Image src={'/mokshaSmall.png'} alt="logoSmall" width={100} height={100} className="w-12 sm:w-16" />
          </div>
          {/* <div className="flex flex-row items-center space-x-4 pb-4"> */}
          {/* <Link
              href="/cl-register"
              className="px-4 sm:px-6 py-3 sm:py-4 bg-transparent border border-white rounded-xl text-white italic font-bold cursor-pointer text-sm sm:text-base"
            >
              Registration
            </Link> */}
          <Link
            href="/cl-leaderboard"
            className="px-4 sm:px-6 py-3 sm:py-4 bg-transparent border border-white rounded-xl text-white italic font-bold cursor-pointer text-sm sm:text-base"
          >
            Leaderboard
          </Link>
          {/* </div> */}
        </div>

        {/* Logo Section */}
        <div className="w-full px-4 sm:px-6 md:px-8 flex flex-col items-center justify-center flex-1">
          <div
            className={`flex gap-4 justify-center items-center text-container font-serif text-white font-black text-4xl md:text-5xl lg:text-7xl uppercase`}
          >
            <div className="animated_fade_in">WE</div>
            <div className="animated_fade_in">ARE</div>
            <div className="animated_fade_in">BACK</div>
          </div>
          <PlayPauseButton setVideoMuted={setVideoMuted} videoMuted={videoMuted} />
          <img className="moksha_logo" src={'/mokshalogo.png'} alt="moksha logo" width={width} />
        </div>

        {/* Footer Section */}
        <div
          className={`px-4 flex-wrap sm:px-6 md:px-8 pt-8 mb-6 mx-auto text-white flex flex-row justify-center lg:justify-between w-full gap-4 ${unbounded.className}`}
        >
          <div className="border-t-4 border-white py-4 px-4 hidden sm:block">
            <h1 className="font-black text-sm sm:text-base md:text-lg">Netaji Subhas University Of Technology</h1>
            <p className="text-[#C9C9C9] text-xs sm:text-sm">
              Azad Hind Fauj Marg, Dwarka Sector-3, Dwarka, Delhi, 110078
            </p>
          </div>
          <div className="flex space-x-6 items-center justify-center px-4">
            <Link href="mailto:moksha@nsut.ac.in" target="_blank">
              <Image src="/gmail.png" alt="Gmail" width={40} height={40} className="w-7 md:w-10 cursor-pointer" />
            </Link>
            <Link href="https://instagram.com/mokshansut" target="_blank">
              <Image
                src="/instagram.png"
                alt="Instagram"
                width={40}
                height={40}
                className="w-7 md:w-10 cursor-pointer"
              />
            </Link>
            <Link href="https://facebook.com/mokshansut" target="_blank">
              <Image src="/facebook.png" alt="Facebook" width={40} height={40} className="w-7 md:w-10 cursor-pointer" />
            </Link>
            <Link href="https://x.com/mokshansut" target="_blank">
              <Image src="/x.png" alt="X (Twitter)" width={40} height={40} className="w-7 md:w-10 cursor-pointer" />
            </Link>{' '}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommingSoon;

const PlayPauseButton = ({
  videoMuted,
  setVideoMuted,
}: {
  videoMuted: boolean;
  setVideoMuted: (muted: boolean) => void;
}) => {
  return (
    <div
      className="play_btn z-50 grid place-items-center"
      onClick={() => {
        setVideoMuted(!videoMuted);
      }}
    >
      <svg width={100} height={100} viewBox="0 0 64 65" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="icon">
          <circle
            id="circle"
            cx={32}
            cy={32}
            r="28.5"
            stroke="white"
            strokeWidth={3}
            strokeMiterlimit="4.81765"
            strokeDasharray="6 6"
          />
          {videoMuted ? (
            <g id="play">
              <polygon points="25,18 25,46 45,32" fill="white" />
            </g>
          ) : (
            <g id="pause">
              <rect x={22} y={17} width={6} height={30} rx={3} fill="white" />
              <rect x={36} y={17} width={6} height={30} rx={3} fill="white" />
            </g>
          )}
        </g>
      </svg>
    </div>
  );
};
