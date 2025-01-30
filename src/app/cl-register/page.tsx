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
          className={`${playfair.className} max-w-7xl mx-auto bg-[#233678CC] rounded-lg sm:rounded-2xl border border-[#00EAE399] px-6 sm:px-8 py-8 sm:py-10 text-white text-base sm:text-xl md:text-2xl lg:text-3xl font-bold space-y-8 sm:space-y-10 md:space-y-14`}
        >
          <div className="space-y-3 sm:space-y-4">
            <h1
              className={`${cinzel.className} text-[#20F2ED] tracking-wide font-[549] text-3xl sm:text-4xl md:text-5xl lg:text-6xl`}
            >
              Contingent Leader Register
            </h1>
            <p className="text-base sm:text-xl md:text-2xl lg:text-3xl">
              The Moksha&apos;s dynamic community, is well-known. Accepting the job of Contingent Leader not only
              elevates you to the ranks of this group, but it also grants you access to a plethora of benefits:
            </p>
            <ul className="list-disc list-inside text-base sm:text-xl md:text-2xl lg:text-3xl ml-2">
              <li>Certificate of appreciation</li>
              <li>Gift hampers</li>
              <li>Official social media shoutout</li>
              <li>Access to VIP passes</li>
              <li>Letter of Recommendation and many more surprises</li>
            </ul>
          </div>
          <div className="space-y-3 sm:space-y-4">
            <h1
              className={`${cinzel.className} text-[#20F2ED] tracking-wide font-[549] text-3xl sm:text-4xl md:text-5xl lg:text-6xl`}
            >
              Requirements of CLs
            </h1>
            <ul className="list-disc list-inside text-base sm:text-xl md:text-2xl lg:text-3xl ml-2">
              <li>College Student</li>
              <li>Strong communication skills</li>
              <li>Efficient decision maker</li>
              <li>Approachable and team player</li>
              <li>Accountable and reliable</li>
              <li>Should be active on social media</li>
              <li>Approachable and team player</li>
              <li>Should not have disciplinary action against them</li>
            </ul>
          </div>
          <div className="space-y-3 sm:space-y-4">
            <h1
              className={`${cinzel.className} text-[#20F2ED] tracking-wide font-[549] text-3xl sm:text-4xl md:text-5xl lg:text-6xl`}
            >
              Duties as the Contingent Leader
            </h1>
            <ul className="list-disc list-inside text-base sm:text-xl md:text-2xl lg:text-3xl ml-2">
              <li>Act as the bridge between Moksha&apos;25 and your college.</li>
              <li>
                Amplify the buzz about Moksha&apos;25 through your active social media presence and word of mouth.
              </li>
              <li>Ensure active participation from your college in Moksha&apos;25.</li>
            </ul>
          </div>
          <div className="space-y-3 sm:space-y-4">
            <h1
              className={`${cinzel.className} text-[#20F2ED] tracking-wide font-[549] text-3xl sm:text-4xl md:text-5xl lg:text-6xl`}
            >
              Point Of Contact
            </h1>
            <ul className="list-disc list-inside text-base sm:text-xl md:text-2xl lg:text-3xl ml-2">
              <li>Aditya 7250880898</li>
              <li>Dipesh 9650538213</li>
              <li>Lalit Panghal 8178634241</li>
            </ul>
          </div>
          <Link href="https://bit.ly/40o1RTs" className="block" target="_blank">
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
