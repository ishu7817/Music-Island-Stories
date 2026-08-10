"use client";
import React from "react";
import Image from "next/image";
const MobileView = () => {
  const Title = "Music Island Stories";
  return (
    <>
      <div className="flex relative w-full min-h-screen ">
        {/*  */}
        <div className="  fixed inset-0 pointer-events-none z-40 bg-gradient-to-r from-black-70 to-black-20 opacity-[0.02]  "></div>
        <div className=" fixed inset-0 mix-blend-soft-light  pointer-events-none z-50 bg-[url('/grain.jpg')] bg-repeat  opacity-[0.03] "></div>
        <div className="absolute inset-0 bg-radial-[at_center] from-transparent via-transparent black/40" />
        {/*  */}

        <div className="  black30 bg-[#2a2a2a]/50  h-screen relative inset-y-0 w-full  ">
          <div className="w-full h-full flex ">
            {/*  */}

            <div className=" relative flex-1 h-full flex flex-col justify-cetner items-center overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                    {/* Logo */}
                <div className="  bg-blur-xs select-none sticky left-4 top-4 font-pencerio mix-blend-soft-light text-shadow-neutral-800  ">
                  theaffairs
                </div>
                <div className="sticky top-10  bg-neutral-500 blur-xs rounded-full  h-[1px] w-[80%]  mix-blend-color-burn "></div>
                {/* Logo */}
              <div className="w-full h-fit flex flex-col items-center gap-24 pt-32 scroll">
                
                {/*headlines*/}
                <div className=" w-full h-fit flex flex-col items-center ">
                  <div className=" text-center  eyebrow ml-4.5 font-chillax font-extralight text-[12px] text-white/50 tracking-widest">
                    ON TAPE // Acoustic Imperfection{" "}
                  </div>
                  <div className=" HeadText flex justify-center  items-center w-fit h-fit ">
                    <h1 className=" text-center shrink-0 w-fit h-max text-[clamp(30px,5vw,34px)] sm:text-[40px] font-chillax  ml-4 leading-tight mt-3 mb-5 ">
                      Half Interview,
                      <br />
                      Half Narrative,
                    </h1>
                    <h1 className=" text-center shrink-0 w-fit h-max  sm:text-[40px] text-[clamp(30px,3vw,40px)] font-bold font-chillax leading-tight ">
                      All <br />
                      &nbsp;Ear.
                    </h1>
                  </div>

                  <div className=" Sub-HeadText flex justify-center  items-center w-fit h-fit ">
                    {" "}
                    <h2 className=" max-w-[70%]  text-center h-fit sm:text-[20px] text-[14px] font-light text-white/80 font- font-chillax  ml-4.5  ">
                      How bedroom producers are capturing the ephemeral beauty
                      of tape hiss, dust, and mechanical flaws...
                    </h2>
                  </div>
                </div>
                {/*headlines*/}

                {/* Navs */}
                <div className=" w-full h-fit flex items-center justify-around pt ">
                  <button className=" cursor-pointer font-['Array'] sm:text-md hover:text-white text-white/60  transition-colors duration-200">
                    [Editions]
                  </button>
                  <button className=" cursor-pointer font-['Array'] sm:text-md hover:text-white text-white/60  transition-colors duration-200">
                    [Dispatches]
                  </button>
                  <button className=" cursor-pointer font-['Array'] sm:text-md hover:text-white text-white/60  transition-colors duration-200">
                    [The Room]
                  </button>
                </div>
                {/* Navs */}

                {/* CTA */}
                <div className=" mt h-fit w-full flex flex-col items-center gap-1 pb-10">
                  <div className=" text-center text-lg font-light tracking-wide  font-chillax  text-white/90 ml-4.5 ">
                    CURRENT • _ISSUE 051
                  </div>
                  <button className=" text-center tracking-wider font-['array'] font-light underline underline-offset-2 text-white-70 hover:text-white/80 transition-all cursor-pointer ">
                    Unwind ›
                  </button>
                </div>
                {/* CTA */}
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileView;