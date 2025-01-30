'use client';

import React, { useEffect, useState } from 'react';
import { Inter, Unbounded } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion'; // Import Framer Motion

const inter = Inter({ subsets: ['latin'] });
const unbounded = Unbounded({ subsets: ['latin'] });

const videoLinks = [
  'https://moksha2025.b-cdn.net/7b2f0a8c9e3d1b5a4f6c8e2d0b7a9c3f1e4d8b5a2c6f9e3d1b5a4f6c8e2d0b7.mp4',
  'https://moksha2025.b-cdn.net/e9c7a01e4ac489c13f44573d38fa1265983c8f3fb4c538f289fdc6612c2e9519.mp4',
  'https://moksha2025.b-cdn.net/f1d8e4b5a2c6f9e3d1b5a4f6c8e2d0b7a9c3f1e4d8b5a2c6f9e3d1b5a4f6c8e.mp4',
];

const CommingSoon = () => {
  const [videoSrc, setVideoSrc] = useState<string | undefined>(undefined);

  useEffect(() => {
    // Select a random video from the array
    const randomVideo = videoLinks[Math.floor(Math.random() * videoLinks.length)];
    setVideoSrc(randomVideo);
  }, []);

  useEffect(() => {
    const box = document.querySelector('.text-container') as HTMLElement;
    const playBtn = document.querySelector('.play_btn') as HTMLElement;

    if (!box || !playBtn) return;

    playBtn.style.setProperty('--final-x', `${box.clientWidth}px`);

    requestAnimationFrame(() => {
      playBtn.classList.add('animate');
    });
  }, []);

  return (
    <div className="relative w-full min-h-screen h-full bg-black">
      {/* Video Background */}
      <video autoPlay loop className="absolute top-0 left-0 w-full h-full object-cover" src={videoSrc} />
      {/* Tint Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-10" />

      <div className="absolute flex-1 h-full w-full flex flex-col z-20">
        {/* Header Section */}
        <div
          className={`px-4 sm:px-10 flex flex-col sm:flex-row justify-between items-center w-full ${inter.className} pb-4 sm:pb-6 px-4 sm:px-6 md:px-8`}
        >
          <div className="mb-4 sm:mb-0">
            <Image src={'/mokshaSmall.png'} alt="logoSmall" width={100} height={100} className="w-12 sm:w-16" />
          </div>
          <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4">
            <Link
              href="/cl-register"
              className="px-4 sm:px-6 py-3 sm:py-4 bg-transparent border border-white rounded-xl text-white italic font-bold cursor-pointer text-sm sm:text-base"
            >
              Registration
            </Link>
          </div>
        </div>

        {/* Logo Section */}
        <div className="w-full px-4 sm:px-6 md:px-8 flex flex-col items-center justify-center flex-1">
          {/* <Image
            src={'/mokshalogo.png'}
            alt="moksha logo"
            width={1000}
            height={1000}
            className="invert w-full max-w-[40rem] sm:max-w-[50rem] md:max-w-[65rem] mx-auto"
          /> */}
          <div
            className={`relative text-container font-serif text-white font-black text-4xl md:text-5xl lg:text-7xl md:-mt-10 uppercase space-x-2 xs:space-x-4 md:space-x-6`}
          >
            <div className="animated_fade_in">WE</div>
            <div className="animated_fade_in">ARE</div>
            <div className="animated_fade_in">BACK</div>
            <div className="play_btn">
              <svg width={100} height={100} viewBox="0 0 64 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="play">
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
                  <mask
                    id="mask0_0_1"
                    style={{ maskType: 'alpha' }}
                    maskUnits="userSpaceOnUse"
                    x={13}
                    y={14}
                    width={40}
                    height={39}
                  >
                    <ellipse id="Ellipse 20" cx={33} cy="33.5" rx={20} ry="19.5" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_0_1)">
                    <path
                      id="path3785"
                      d="M47.9999 32.2817L23.9999 48.4226V16.1408L47.9999 32.2817ZM31.9999 0.00585938C14.3505 0.00585938 0.00585938 14.4769 0.00585938 32.2818C0.00585938 50.0867 14.3505 64.5577 31.9999 64.5577C49.6493 64.5577 63.994 50.0867 63.994 32.2818C63.994 14.4769 49.6493 0.00585938 31.9999 0.00585938ZM31.9999 4.02909C47.4876 4.02909 60.0059 16.6577 60.0059 32.2818C60.0059 47.9058 47.4876 60.5344 31.9999 60.5344C16.5122 60.5344 3.99396 47.9058 3.99396 32.2818C3.99396 16.6577 16.5122 4.02909 31.9999 4.02909Z"
                      fill="white"
                    />
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div
          className={`px-4 sm:px-6 md:px-8 pt-8 pb-2 sm:pt-16 sm:pb-4  mx-auto text-white flex flex-col md:flex-row justify-between w-full gap-8 sm:gap-0 mt-auto ${unbounded.className}`}
        >
          <div className="border-t-4 border-white py-4 px-4 sm:px-0">
            <h1 className="font-black text-sm sm:text-base md:text-lg">Netaji Subhas University Of Technology</h1>
            <p className="text-[#C9C9C9] text-xs sm:text-sm">
              Azad Hind Fauj Marg, Dwarka Sector-3, Dwarka, Delhi, 110078
            </p>
          </div>
          <div className="flex space-x-4 sm:space-x-6 items-center justify-center sm:justify-start px-4 sm:px-0">
            <Image src={'/gmail.png'} alt="gmail" width={40} height={40} className="w-8 sm:w-10" />
            <Image src={'/instagram.png'} alt="instagram" width={40} height={40} className="w-8 sm:w-10" />
            <Image src={'/facebook.png'} alt="facebook" width={40} height={40} className="w-8 sm:w-10" />
            <Image src={'/x.png'} alt="x " width={40} height={40} className="w-8 sm:w-10" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommingSoon;
