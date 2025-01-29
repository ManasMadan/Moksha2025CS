'use client';

import React, { useEffect, useState } from 'react';
import { Inter, Unbounded } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion'; // Import Framer Motion

const inter = Inter({ subsets: ['latin'] });
const unbounded = Unbounded({ subsets: ['latin'] });

const videoLinks = ['https://moksha2025.b-cdn.net/7b2f0a8c9e3d1b5a4f6c8e2d0b7a9c3f1e4d8b5a2c6f9e3d1b5a4f6c8e2d0b7.mp4','https://moksha2025.b-cdn.net/e9c7a01e4ac489c13f44573d38fa1265983c8f3fb4c538f289fdc6612c2e9519.mp4','https://moksha2025.b-cdn.net/f1d8e4b5a2c6f9e3d1b5a4f6c8e2d0b7a9c3f1e4d8b5a2c6f9e3d1b5a4f6c8e.mp4'];

const CommingSoon = () => {
  const [videoSrc, setVideoSrc] = useState<string | undefined>(undefined);

  useEffect(() => {
    // Select a random video from the array
    const randomVideo = videoLinks[Math.floor(Math.random() * videoLinks.length)];
    setVideoSrc(randomVideo);
  }, []);

  return (
    <div className="relative w-full min-h-screen h-full bg-black">
      {/* Video Background */}
      <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover" src={videoSrc} />
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
          <Image
            src={'/mokshalogo.png'}
            alt="moksha logo"
            width={1000}
            height={1000}
            className="invert w-full max-w-[40rem] sm:max-w-[50rem] md:max-w-[65rem] mx-auto"
          />
          <div className={`font-serif text-white font-black text-3xl sm:text-4xl md:text-5xl lg:text-7xl md:-mt-10 uppercase space-x-6 flex`}>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              We
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Are
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Back
            </motion.span>
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