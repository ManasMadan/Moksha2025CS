"use client";

import React from "react";
import { Cinzel, Playfair } from "next/font/google";

const cinzel = Cinzel({
  subsets: ["latin"],
});

const playfair = Playfair({
  subsets: ["latin"],
});

const CLRegister = () => {
  return (
    <div className="min-h-screen w-full relative">     
      <div className="fixed inset-0 bg-[url('/cl_bg.png')] bg-cover bg-center bg-no-repeat" />     
      <div className="fixed inset-0 bg-gradient-to-b from-[#1A3BAA] to-transparent opacity-60 mix-blend-overlay" />     
      <div className="relative z-10 w-full py-4 sm:py-6 md:py-8 px-2 sm:px-4">
        <div
          className={`${playfair.className} max-w-7xl mx-auto bg-[#233678CC] rounded-lg sm:rounded-2xl border border-[#00EAE399] px-6 sm:px-8 py-8 sm:py-10 text-white text-base sm:text-xl md:text-2xl lg:text-3xl font-bold space-y-8 sm:space-y-10 md:space-y-14`}
        >
          <div className="space-y-3 sm:space-y-4">
            <h1
              className={`${cinzel.className} text-[#20F2ED] tracking-wide font-[549] text-3xl sm:text-4xl md:text-5xl lg:text-6xl`}
            >
              CL Register
            </h1>
            <p className="text-base sm:text-xl md:text-2xl lg:text-3xl">
              The Moksha&apos;s dynamic community, is well-known. Accepting the
              job of Contingent Leader not only elevates you to the ranks of
              this group, but it also grants you access to a plethora of
              benefits:
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
              <li>Regular college student</li>
              <li>No disciplinary action</li>
              <li>Strong communication skills</li>
              <li>Crowd puller</li>
              <li>Should be active on social media</li>
              <li>Efficient decision maker</li>
              <li>Approachable and team player</li>
              <li>Accountability and reliability</li>
            </ul>
          </div>
          <div className="space-y-3 sm:space-y-4">
            <h1
              className={`${cinzel.className} text-[#20F2ED] tracking-wide font-[549] text-3xl sm:text-4xl md:text-5xl lg:text-6xl`}
            >
              Duties as the Contingent Leader
            </h1>
            <ul className="list-disc list-inside text-base sm:text-xl md:text-2xl lg:text-3xl ml-2">
              <li>
                Act as the bridge between Moksha&apos;25 and your college.
              </li>
              <li>
                Amplify the buzz about Moksha&apos;25 through your active social
                media presence and word of mouth.
              </li>
              <li>
                Ensure active participation from your college in Moksha&apos;25.
              </li>
            </ul>
          </div>
          <p className="text-base sm:text-xl md:text-2xl lg:text-3xl">
            Google Form:-{" "}
            <a className="text-[#20F2ED] hover:underline cursor-pointer">
              https://bit.ly/40o1RTs
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CLRegister;
