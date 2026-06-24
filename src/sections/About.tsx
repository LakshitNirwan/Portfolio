import { useState } from "react";
import { motion } from "framer-motion";

import ScrambleText from "../components/ScrambleText";
import BeltPouch from "../components/BeltPouch";

import sheetChar from "../assets/Sheet-Char.png";

interface AboutProps {
  isInkMode: boolean;
}
export default function About({
  isInkMode,
}: AboutProps) {
        const [isDeclassified, setIsDeclassified] = useState(false);

        const themeCyanBox = isInkMode ? "bg-white" : "bg-comic-cyan";
        const themeYellowBox = isInkMode ? "bg-gray-200" : "bg-comic-yellow";
        const themePurpleBox = isInkMode
          ? "bg-black text-white"
          : "bg-comic-purple text-white";
        const themeRedText = isInkMode
          ? "text-gray-800 underline"
          : "text-comic-red";
        const themePurpleText = isInkMode
          ? "text-gray-800 underline"
          : "text-comic-purple";
        const themeBeltStrap = isInkMode
          ? "bg-gray-500 border-gray-700"
          : "bg-[#E5C100] border-black";
        const imageFilter = isInkMode
          ? "grayscale contrast-150 sepia-[.1]"
          : "";

        const timelineData = [
          {
            id: 1,
            title: "THE ACADEMY",
            desc: "Began training at VIT Vellore.",
            color: "bg-comic-cyan",
          },
          {
            id: 2,
            title: "JOINING THE RANKS",
            desc: "Became a core member of the Creativity Club and VinnovateIT Club.",
            color: "bg-comic-red text-white",
          },
          {
            id: 3,
            title: "YANTRA'26",
            desc: "Forged promotional materials for the B³ Hackathon.",
            color: "bg-comic-yellow",
          },
          {
            id: 4,
            title: "THE BUNKBUDDIES INITIATIVE",
            desc: "Engineered an app to solve the ultimate roommate crisis.",
            color: "bg-comic-purple text-white",
          },
          {
            id: 5,
            title: "THE PROMOTION ",
            desc: "Became the 'Events Head' at Creativity Club.",
            color: "bg-comic-sand text-comic-brown",
          },
        ];

        return (
          <motion.div
            id="about"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="pt-12 w-full max-w-5xl mx-auto p-4 flex flex-col relative z-10"
          >
            <div className="bg-comic-paper border-4 border-black p-8 shadow-comic relative overflow-hidden mb-16">
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-8 border-b-4 border-black inline-block">
                WHO IS THE CODER?
              </h1>
              <div className="grid md:grid-cols-2 gap-6 md:gap-12">
                <div className="space-y-6 text-xl font-body leading-relaxed">
                  <div
                    className={`p-6 border-4 border-black transition-colors duration-500 relative overflow-hidden ${isDeclassified ? (isInkMode ? "bg-white" : "bg-comic-green") : isInkMode ? "bg-gray-300" : "bg-comic-paper"}`}
                  >
                    <div className="absolute inset-0 belt-stripes opacity-10 pointer-events-none"></div>
                    <div className="relative z-10 space-y-4">
                      <p className="flex flex-col md:flex-row md:items-center">
                        <span className="font-bold text-xl mr-2 bg-black text-white px-2 inline-block mb-1 md:mb-0">
                          SUBJECT:
                        </span>
                        <ScrambleText
                          reveal={isDeclassified}
                          realText="LAKSHIT NIRWAN"
                          fakeText="[ CLASSIFIED ]"
                        />
                      </p>
                      <p className="flex flex-col md:flex-row md:items-center">
                        <span className="font-bold text-xl mr-2 bg-black text-white px-2 inline-block mb-1 md:mb-0">
                          BASE:
                        </span>
                        <ScrambleText
                          reveal={isDeclassified}
                          realText="VIT VELLORE"
                          fakeText="[ UNKNOWN ORIGIN ]"
                        />
                      </p>
                    </div>
                    {!isDeclassified && (
                      <button
                        onClick={() => setIsDeclassified(true)}
                        className={`mt-8 w-full flex items-center justify-center gap-3 font-display text-2xl px-6 py-4 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-none transition-all duration-200 group ${isInkMode ? "bg-white text-black" : "bg-comic-red text-white"}`}
                      >
                        <span className="text-3xl group-hover:rotate-12 transition-transform">
                          ⚠️
                        </span>
                        <span>OVERRIDE SECURITY</span>
                      </button>
                    )}
                  </div>
                  <p className="mt-8">
                    <span className="font-bold text-2xl">MISSION:</span> To rid
                    the internet of boring, corporate designs.
                  </p>
                  <div className="bg-white border-4 border-black p-6 transform -rotate-1 shadow-sm relative">
                    <p className="italic">
                      "I was bitten by a radioactive keyboard at a young age.
                      Since then, I have dedicated my life to mastering the MERN
                      stack."
                    </p>
                  </div>
                  <p>
                    It wasn't always easy. I battled the{" "}
                    <span className={`font-bold ${themeRedText}`}>
                      Great 404 Error of '24
                    </span>{" "}
                    and survived the{" "}
                    <span className={`font-bold ${themePurpleText}`}>
                      Callback Hell
                    </span>{" "}
                    pits. Now, I use my powers for good.
                  </p>
                </div>
                <div className="bg-black p-4 transform rotate-1 shadow-comic h-fit relative z-10">
                  <div
                    className={`${themeCyanBox} transition-colors duration-300 h-full w-full border-4 border-white p-6 flex flex-col items-center`}
                  >
                    <h2 className="font-display text-3xl sm:text-4xl text-center text-white text-shadow mb-6 tracking-widest bg-black px-4 py-1 -rotate-2">
                      CHARACTER STATS
                    </h2>
                    <div className="w-full bg-white border-4 border-black p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6 relative">
                      <img
                        src={sheetChar}
                        alt="Character Power Radar Chart"
                        className={`w-full h-auto object-contain transition-all duration-300 ${imageFilter}`}
                      />
                    </div>
                    <div className="w-full space-y-3 font-body text-black text-sm md:text-base font-bold">
                      <div
                        className={`${themeYellowBox} transition-colors duration-300 border-2 border-black p-2 transform -rotate-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]`}
                      >
                        Runs on night energy, codes on MERN, and forgets food
                        exists.
                      </div>
                      <div className="bg-white border-2 border-black p-2 transform rotate-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                        Main character energy with NPC sleep schedule.
                      </div>
                      <div
                        className={`${themePurpleBox} transition-colors duration-300 border-2 border-black p-2 transform rotate-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]`}
                      >
                        Built on vibes, held together by playlists.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-20 w-full">
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-white text-shadow text-center mb-10">
                THE ORIGIN TIMELINE
              </h2>
              <div className="timeline-root relative border-l-8 border-dashed border-white ml-4 space-y-8 py-8">
                {timelineData.map((node, i) => (
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    key={node.id}
                    className="relative pl-8 md:pl-12"
                  >
                    <div
                      className={`absolute -left-[20px] top-4 w-8 h-8 rounded-full border-4 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] z-10 ${isInkMode ? "bg-white" : "bg-comic-yellow"}`}
                    ></div>
                    <div
                      className={`border-4 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform ${i % 2 === 0 ? "-rotate-1" : "rotate-1"} transition-colors duration-300 ${isInkMode ? "bg-white text-black" : node.color}`}
                    >
                      <span className="font-bold text-lg border-2 border-current px-2 mb-2 inline-block bg-black text-white">
                        ISSUE #{node.id}
                      </span>
                      <h3 className="font-display text-2xl sm:text-3xl md:text-4xl tracking-wide">
                        {node.title}
                      </h3>
                      <p className="font-body text-xl font-bold mt-2 bg-white/80 text-black px-2 border-black border inline-block">
                        {node.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mb-24 w-full relative">
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-white text-shadow text-center mb-12">
                EQUIPMENT
              </h2>
              <div className="relative w-full flex justify-center items-center px-4 md:px-0 py-6">
                <div
                  className={`absolute inset-x-0 h-12 md:h-16 border-y-4 ${themeBeltStrap} belt-stripes shadow-[0px_6px_0px_0px_rgba(0,0,0,0.5)]`}
                ></div>
                <div className="relative z-10 flex flex-wrap justify-center items-center gap-4 md:gap-6 w-full max-w-4xl">
                  <BeltPouch
                    text="VS CODE"
                    rotate="-rotate-2"
                    isInkMode={isInkMode}
                  />
                  <BeltPouch
                    text="GIT & GITHUB"
                    rotate="rotate-1"
                    isInkMode={isInkMode}
                  />
                  <div
                    className={`z-20 border-4 border-black rounded-full h-32 w-32 md:h-40 md:w-40 flex flex-col items-center justify-center p-2 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform hover:scale-105 transition-all duration-300 ${isInkMode ? "bg-black text-white" : "bg-comic-red text-white"}`}
                  >
                    <span className="text-4xl mb-1">🛠️</span>
                    <span className="font-display text-2xl md:text-3xl text-center leading-none">
                      UTILITY
                      <br />
                      BELT
                    </span>
                  </div>
                  <BeltPouch
                    text="FIGMA"
                    rotate="-rotate-1"
                    isInkMode={isInkMode}
                  />
                  <BeltPouch
                    text="POSTMAN"
                    rotate="rotate-2"
                    isInkMode={isInkMode}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        );
      };