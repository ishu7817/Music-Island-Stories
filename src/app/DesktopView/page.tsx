"use client";

import { useEffect, useState } from "react";
import HeroImage from "@public/Music.jpg";
import Image from "next/image";

const DesktopView = () => {
  const Title = "Music Island Stories";
  return (
    <>
      <div className="flex relative w-full min-h-screen ">
        {/*  */}
        <div className="  fixed inset-0 pointer-events-none z-40 bg-gradient-to-r from-black-70 to-black-20 opacity-[0.02]  "></div>
        <div className=" fixed inset-0 mix-blend-soft-light  pointer-events-none z-50 bg-[url('/grain.jpg')] bg-repeat  opacity-[0.03] "></div>
        <div className="absolute inset-0 bg-radial-[at_center] from-transparent via-transparent black/40" />
        {/*  */}

        <div className=" black30 bg-[#2a2a2a]/50   inset-y-0 w-full  md:w-[45%] lg:[w-] min-[1115px]:max-w-[35%] xl:w-[30%] fixed ">
          <div className="w-full h-full flex ">
            {/*  */}
            <div className="flex-1 h-full flex flex-col justify-start items-center overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <div className="w-full h-fit flex flex-col items-start gap-24 pt-32 scroll">
                {/*headlines*/}
                <div className=" ">
                  <div className="  eyebrow ml-4.5 font-chillax font-extralight text-[12px] lg:text-[14px] text-white/50 tracking-widest">
                    ON TAPE // Acoustic Imperfection{" "}
                  </div>
                  <div className=" HeadText flex justify-center  items-center w-fit h-fit ">
                    <h1 className=" shrink-0 w-fit h-max text-[26px] md:text-[clamp(26px,3.5vw,32px)]  2xl:text-[32px] font-regular font-chillax text-start ml-4 leading-tight mt-3 mb-5 ">
                      Half Interview,
                      <br />
                      Half Narrative,
                    </h1>
                    <h1 className=" shrink-0 w-fit h-max text-[26px] md:text-[clamp(26px,3.5vw,32px)] font-bold font-chillax text-start  leading-tight ">
                      &nbsp;All <br />
                      &nbsp;Ear.
                    </h1>
                  </div>

                  <div className=" Sub-HeadText flex justify-center  items-center w-fit h-fit ">
                    {" "}
                    <h2 className=" h-fit text-[14px] font-light md:max-w-[300px] text-white/80 font- font-chillax text-start ml-4.5  ">
                      How bedroom producers are capturing the ephemeral beauty
                      of tape hiss, dust, and mechanical flaws...
                    </h2>
                  </div>
                </div>
                {/*headlines*/}

                {/* Navs */}
                <div className=" w-full h-fit flex items-center justify-around pt ">
                  <button className=" cursor-pointer font-['Array'] text-sm hover:text-white text-white/60  transition-colors duration-200">
                    [Editions]
                  </button>
                  <button className=" cursor-pointer font-['Array'] text-sm hover:text-white text-white/60  transition-colors duration-200">
                    [Dispatches]
                  </button>
                  <button className=" cursor-pointer font-['Array'] text-sm hover:text-white text-white/60  transition-colors duration-200">
                    [The Room]
                  </button>
                </div>
                {/* Navs */}

                {/* CTA */}
                <div className=" mt h-fit w-full flex flex-col items-end gap-1">
                  <div className=" text-sm tracking-wide font-light font-chillax  text-white/90 ml-4.5 ">
                    CURRENT • _ISSUE 051
                  </div>
                  <button className=" tracking-wider font-['array'] font-light underline underline-offset-2 text-white-70 hover:text-white/80 transition-all cursor-pointer ">
                    Unwind ›
                  </button>
                </div>
                {/* CTA */}
              </div>
            </div>

            {/* title reel */}
            <div className=" Title overflow-hidden  w-fit h-full mix-blend-color-burn">
              <div className=" flex-col flex  h-max items-end  animate-marquee gap-y-[1.2rem] ">
                {[0, 1, 2, 3].map((i) => (
                  <h1
                    key={i}
                    className=" select-none text-neutral-500/80 w-full  font-['Array'] rotate-180  text-nowrap [word-spacing:-0.3rem] [writing-mode:vertical-rl] text-[64px] font-bold  tracking-tight -mr-4.5 "
                  >
                    {Title}
                  </h1>
                ))}
              </div>
            </div>
            {/* title reel */}
            {/* Logo */}
            <div className="  bg-blur-xs select-none absolute left-4 top-4 font-pencerio mix-blend-soft-light text-shadow-neutral-800  ">
              theaffairs
            </div>
            <div className="absolute top-10  bg-neutral-500 blur-xs rounded-full  h-[1px] w-[80%]  mix-blend-color-burn "></div>
            {/* Logo */}
          </div>
        </div>

        {/*
         */}
        <div className=" HeroImage flex justify-end items-start  fixed right-0 z-3  h-screen md:w-[55%] min-[1115px]:min-w-[65%] xl:w-[70%] hidden md:block">
          <Image
            src="/music.webp"
            alt="Editorial background"
            fill
            priority
            placeholder="blur"
            unoptimized
            blurDataURL="/music.webp"
            className="object-cover object-[30%_center] lg:object-center -z-10 select-none pointer-events-none"
          />
          <div className="flex justify-self-end m-10 hidden xl:flex ">
            <h1 className=" mt-2 w-fit h-fit rotate-180 [writing-mode:vertical-rl] text-[32px] tracking-tight leading-tight mix-blend-soft-light  font-['chillax'] font-bold">
              CHASING
            </h1>
            <div className=" flex flex-col items-start">
              <h1 className=" w-fit h-fit  text-[32px] tracking-tight leading-tight  mix-blend-soft-light  font-['chillax'] font-extrabold">
                SHADOWS
              </h1>
              <h1 className=" ml-1 w-20 h-fit text-m tracking-wider text-white/80  mix-blend-hard-light    font-['chillax'] ">
                THE RISE OF SOUNDSCAPE BRUTALISM
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopView;