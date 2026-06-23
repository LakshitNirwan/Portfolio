import { motion } from "framer-motion";
import React from "react";

import { projects } from "../data/projects";
import { hoverEffect } from "../utils/hoverEffect";
import type { Project } from "../types/projects.ts";

import secretIdentity from "../assets/secret-identity.jpg";

interface HomeProps {
  isInkMode: boolean;
  setIsInkMode: React.Dispatch<
    React.SetStateAction<boolean>
  >;
  setSelectedProject: (
    project: Project | null
  ) => void;
}

export default function Home({
  isInkMode,
  setIsInkMode,
  setSelectedProject,
}: HomeProps) {
  const themeHero = isInkMode
    ? "bg-gray-900"
    : "bg-comic-red";

  const themeYellowBox = isInkMode
    ? "bg-white"
    : "bg-comic-yellow";

  const themeCyanBox = isInkMode
    ? "bg-white text-black"
    : "bg-comic-cyan text-white";

  const themePurpleBadge = isInkMode
    ? "bg-black text-white"
    : "bg-comic-purple text-white";

  const themeRedText = isInkMode
    ? "text-black underline"
    : "text-comic-red";

  return (
    <motion.div
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-24 max-w-6xl mx-auto px-4 w-full"
    >
      <div className="flex justify-end w-full mb-8 z-10 relative pr-10">
        <button
          onClick={() => setIsInkMode(!isInkMode)}
          className={`flex items-center gap-2 border-4 border-black px-3 sm:px-4 py-2 font-display text-sm sm:text-lg md:text-xl transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-none ${
            isInkMode
              ? "bg-comic-black text-white transform rotate-1"
              : "bg-white text-comic-black transform -rotate-1"
          }`}
        >
          {isInkMode
            ? "🔴 REVERT TO COLOR EDITION"
            : "🖨️ VIEW INK VARIANT COVER"}
        </button>
      </div>

      <header className="min-h-[60vh] sm:min-h-[80vh] flex items-center justify-center pb-12 pr-4 md:pr-10">
        <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-6">

          <motion.div
            initial={{
              y: -100,
              opacity: 0,
              rotate: 1,
            }}
            animate={{
              y: 0,
              opacity: 1,
              rotate: 1,
            }}
            transition={{
              type: "spring",
              stiffness: 120,
            }}
            className={`md:col-span-12 flex justify-between items-center ${themeYellowBox} border-4 border-black p-2 shadow-comic transition-colors duration-300`}
          >
            <span className="font-display text-xl">
              ISSUE #01
            </span>

            <span className="font-bold border-l-4 border-black pl-4 text-center md:text-left">
              {isInkMode
                ? "THE ORIGIN STORY (INK VARIANT)"
                : "THE ORIGIN STORY"}
            </span>

            <span className="font-display text-xl hidden md:inline">
              FEB 2026
            </span>
          </motion.div>

          <motion.div
            initial={{
              scale: 3,
              opacity: 0,
              rotate: -1,
            }}
            animate={{
              scale: 1,
              opacity: 1,
              rotate: -1,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
              delay: 0.25,
            }}
            className={`md:col-span-8 ${themeHero} border-4 border-black p-8 md:p-16 shadow-comic relative overflow-hidden origin-center transition-colors duration-300`}
          >
            <div
              className={`stripes absolute inset-0 ${
                isInkMode
                  ? "opacity-20"
                  : "opacity-10"
              }`}
            />

            <div className="relative z-10">
              <motion.div
                initial={{
                  x: -100,
                  opacity: 0,
                }}
                animate={{
                  x: 0,
                  opacity: 1,
                }}
                transition={{
                  delay: 0.6,
                }}
                className="bg-white text-black border-4 border-black inline-block px-4 py-1 mb-4 transform -rotate-2"
              >
                <span className="font-bold text-lg">
                  INTRODUCING...
                </span>
              </motion.div>

              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white text-shadow leading-none tracking-wide mb-4">
                THE CODER
                <br />
              </h2>

              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-9xl text-white text-shadow leading-none tracking-wide mb-4">
                LAKSHIT NIRWAN
              </h1>

              <motion.p
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: 0.8,
                  type: "spring",
                }}
                className={`p-4 text-base sm:text-lg md:text-xl lg:text-2xl font-bold inline-block transform rotate-1 border-2 border-white ${
                  isInkMode
                    ? "bg-white text-black border-black"
                    : "bg-black text-white"
                }`}
              >
                "BUILDING THE WEB,
                ONE PIXEL AT A TIME!"
              </motion.p>
            </div>
          </motion.div>
                    <div className="md:col-span-4 flex flex-col gap-6">

            <motion.div
              initial={{
                x: 100,
                opacity: 0,
                rotate: 2,
              }}
              animate={{
                x: 0,
                opacity: 1,
                rotate: 2,
              }}
              transition={{
                delay: 0.3,
                type: "spring",
              }}
              whileHover={hoverEffect(2)}
              className={`${themeCyanBox} transition-colors duration-300 border-4 border-black p-6 h-full flex flex-col justify-center items-center text-center shadow-comic relative z-0 hover:z-10`}
            >
              <h2
                className={`font-display text-2xl sm:text-3xl md:text-4xl mb-2 ${
                  isInkMode
                    ? "text-black"
                    : "text-white text-shadow"
                }`}
              >
                POWER LEVEL
              </h2>

              <div className="w-full bg-white border-4 border-black h-8 mb-2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "85%" }}
                  transition={{
                    delay: 0.5,
                    duration: 1,
                  }}
                  className={`${
                    isInkMode
                      ? "bg-gray-500"
                      : "bg-comic-yellow"
                  } h-full border-r-4 border-black transition-colors`}
                />
              </div>

              <p className="font-bold">
                FULL STACK CAPABILITIES
              </p>
            </motion.div>

            <motion.div
              initial={{ rotate: 1 }}
              animate={{ rotate: 1 }}
              whileHover={{
                scale: 1.05,
                rotate: -2,
              }}
              onClick={(e) => {
                e.stopPropagation();

                window.open(
                  "https://github.com/LakshitNirwan",
                  "_blank"
                );
              }}
              className="bg-white border-4 border-black p-6 h-full flex flex-col justify-center shadow-comic group cursor-pointer relative z-0 hover:z-10 transition-colors duration-300 text-black"
            >
              <span
                className={`absolute -top-4 -right-4 ${themePurpleBadge} border-4 border-black px-3 py-1 font-display rotate-12 group-hover:scale-110 transition-all duration-300`}
              >
                CLICK ME!
              </span>

              <p className="font-bold text-lg">
                "Does he deploy on Fridays?"
              </p>

              <p
                className={`text-right mt-2 font-display text-xl transition-colors duration-300 ${themeRedText}`}
              >
                ACCESS GITHUB REPOSITORY
              </p>
            </motion.div>

          </div>

        </div>
      </header>

      <section className="p-4 py-20 pr-4 md:pr-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

          <motion.div
            initial={{
              x: -50,
              opacity: 0,
              rotate: -1,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
              rotate: -1,
            }}
            viewport={{ once: true }}
            transition={{ type: "spring" }}
            className="bg-white border-4 border-black p-6 shadow-comic relative"
          >
            <div
              className={`absolute -top-3 left-4 ${
                isInkMode
                  ? "bg-gray-200"
                  : "bg-comic-yellow"
              } border-4 border-black px-2 text-sm font-bold transition-colors`}
            >
              NARRATOR BOX
            </div>

            <p className="text-xl leading-relaxed">
              It started with a single line of HTML.
              Our hero, just a mild-mannered student,
              discovered the ancient artifact known as{" "}
              <span
                className={`font-bold px-1 transition-colors ${
                  isInkMode
                    ? "bg-gray-300"
                    : "bg-comic-cyan"
                }`}
              >
                The Documentation
              </span>
              .
              <br />
              <br />
              By day, they blend in with society.
              But by night? They fight bugs,
              wrestle with CSS grids,
              and bring static designs to life!
            </p>
          </motion.div>

          <motion.div
            initial={{
              scale: 0,
              rotate: 0,
            }}
            whileInView={{
              scale: 1,
              rotate: 0,
            }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
            }}
            whileHover="hover"
            className="border-4 border-black text-center shadow-comic relative overflow-hidden cursor-pointer bg-white"
          >
            <div className="p-8 opacity-0 pointer-events-none">
              <div className="border-4 border-white border-dashed p-8 h-full flex items-center justify-center">
                <h3 className="font-display text-5xl transform -rotate-6 text-shadow">
                  SECRET
                  <br />
                  IDENTITY
                  <br />
                  REVEALED
                </h3>
              </div>
            </div>

            <img
              src={secretIdentity}
              alt="Lakshit Nirwan"
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-300 ${
                isInkMode
                  ? "grayscale contrast-150 sepia-[.1]"
                  : ""
              }`}
            />
                        <motion.div
              variants={{
                hover: {
                  x: "-60%",
                  y: "-60%",
                  rotate: -15,
                  opacity: 0,
                },
              }}
              transition={{ duration: 0.4 }}
              className={`absolute inset-0 ${
                isInkMode
                  ? "bg-black"
                  : "bg-comic-purple"
              } z-10 transition-colors duration-300`}
              style={{
                clipPath:
                  "polygon(0 0, 52% 0, 52% 48%, 0 48%)",
              }}
            >
              <div className="absolute inset-0 p-8">
                <div className="border-4 border-white border-dashed h-full flex items-center justify-center">
                  <h3 className="font-display text-5xl transform -rotate-6 text-shadow text-white">
                    SECRET
                    <br />
                    IDENTITY
                    <br />
                    REVEALED
                  </h3>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={{
                hover: {
                  x: "60%",
                  y: "-60%",
                  rotate: 15,
                  opacity: 0,
                },
              }}
              transition={{ duration: 0.4 }}
              className={`absolute inset-0 ${
                isInkMode
                  ? "bg-black"
                  : "bg-comic-purple"
              } z-10 transition-colors duration-300`}
              style={{
                clipPath:
                  "polygon(52% 0, 100% 0, 100% 48%, 52% 48%)",
              }}
            >
              <div className="absolute inset-0 p-8">
                <div className="border-4 border-white border-dashed h-full flex items-center justify-center">
                  <h3 className="font-display text-5xl transform -rotate-6 text-shadow text-white">
                    SECRET
                    <br />
                    IDENTITY
                    <br />
                    REVEALED
                  </h3>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={{
                hover: {
                  x: "-60%",
                  y: "60%",
                  rotate: -15,
                  opacity: 0,
                },
              }}
              transition={{ duration: 0.4 }}
              className={`absolute inset-0 ${
                isInkMode
                  ? "bg-black"
                  : "bg-comic-purple"
              } z-10 transition-colors duration-300`}
              style={{
                clipPath:
                  "polygon(0 48%, 52% 48%, 52% 100%, 0 100%)",
              }}
            >
              <div className="absolute inset-0 p-8">
                <div className="border-4 border-white border-dashed h-full flex items-center justify-center">
                  <h3 className="font-display text-5xl transform -rotate-6 text-shadow text-white">
                    SECRET
                    <br />
                    IDENTITY
                    <br />
                    REVEALED
                  </h3>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={{
                hover: {
                  x: "60%",
                  y: "60%",
                  rotate: 15,
                  opacity: 0,
                },
              }}
              transition={{ duration: 0.4 }}
              className={`absolute inset-0 ${
                isInkMode
                  ? "bg-black"
                  : "bg-comic-purple"
              } z-10 transition-colors duration-300`}
              style={{
                clipPath:
                  "polygon(52% 48%, 100% 48%, 100% 100%, 52% 100%)",
              }}
            >
              <div className="absolute inset-0 p-8">
                <div className="border-4 border-white border-dashed h-full flex items-center justify-center">
                  <h3 className="font-display text-5xl transform -rotate-6 text-shadow text-white">
                    SECRET
                    <br />
                    IDENTITY
                    <br />
                    REVEALED
                  </h3>
                </div>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </section>

      <section className="p-4 py-20 pr-4 md:pr-10">

        <motion.div
          initial={{
            scaleX: 0,
            rotate: 2,
          }}
          whileInView={{
            scaleX: 1,
            rotate: 2,
          }}
          viewport={{ once: true }}
          className={`${
            isInkMode
              ? "bg-white text-black border-black"
              : "bg-black text-white border-white"
          } border-4 inline-block px-6 py-2 mb-10 origin-left transition-colors`}
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl">
            THE MISSION LOG
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <motion.div
            initial={{
              opacity: 0,
              y: 50,
              rotate: -1,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              rotate: -1,
            }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
              rotate: 0,
              zIndex: 10,
            }}
            className="bg-white border-4 border-black p-0 shadow-comic relative z-0 hover:z-10"
          >
            <div
              className={`${
                isInkMode
                  ? "bg-gray-800"
                  : "bg-comic-red"
              } border-b-4 border-black p-3 flex justify-between items-center transition-colors`}
            >
              <span className="font-display text-white text-xl">
                MISSION #01
              </span>

              <span className="bg-white border-2 border-black px-2 text-xs font-bold">
                SUCCESS
              </span>
            </div>

            <div className="p-6">
              <h3 className="font-display text-3xl mb-2">
                ATLAS
              </h3>

              <p className="mb-4 font-bold text-gray-600">
                TARGET: MERN STACK
              </p>

              <p className="mb-6">
                Built a campus navigation web-app.
                Implemented Dijkstra's algorithm
                for efficient pathfinding.
              </p>

              <button
                onClick={() =>
                  setSelectedProject(projects[2])
                }
                className={`block text-center w-full ${
                  isInkMode
                    ? "bg-black text-white"
                    : "bg-comic-yellow text-black"
                } border-4 border-black py-2 font-display text-xl transition-colors hover:bg-black hover:text-white`}
              >
                VIEW FULL DETAILS
              </button>
            </div>
          </motion.div>
          <motion.div
                  initial={{ opacity: 0, y: 50, rotate: 1 }}
                  whileInView={{ opacity: 1, y: 0, rotate: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
                  className="bg-white border-4 border-black p-0 shadow-comic mt-8 md:mt-0 relative z-0 hover:z-10"
                >
                  <div
                    className={`${isInkMode ? "bg-gray-600" : "bg-comic-cyan"} border-b-4 border-black p-3 flex justify-between items-center transition-colors`}
                  >
                    <span className="font-display text-white text-xl">
                      MISSION #02
                    </span>
                    <span className="bg-white border-2 border-black px-2 text-xs font-bold">
                      LIVE
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-3xl mb-2">
                      CHAT APP 3000
                    </h3>
                    <p className="mb-4 font-bold text-gray-600">
                      TARGET: SOCKET.IO
                    </p>
                    <p className="mb-6">
                      Real-time communication achieved. Slayed latency issues
                      with WebSockets. It talks back!
                    </p>
                    <a
                      href="#works"
                      className={`block text-center w-full ${isInkMode ? "bg-white text-black" : "bg-comic-purple text-white"} border-4 border-black py-2 font-display text-xl transition-colors hover:bg-black hover:text-white`}
                    >
                      VIEW FULL DETAILS
                    </a>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 50, rotate: -1 }}
                  whileInView={{ opacity: 1, y: 0, rotate: -1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
                  className="bg-white border-4 border-black p-0 shadow-comic relative z-0 hover:z-10"
                >
                  <div
                    className={`${isInkMode ? "bg-gray-200" : "bg-comic-yellow"} border-b-4 border-black p-3 flex justify-between items-center transition-colors`}
                  >
                    <span className="font-display text-black text-xl">
                      MISSION #03
                    </span>
                    <span className="bg-white border-2 border-black px-2 text-xs font-bold">
                      W.I.P.
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-3xl mb-2">AI COMPANION</h3>
                    <p className="mb-4 font-bold text-gray-600">
                      TARGET: OPENAI API
                    </p>
                    <p className="mb-6">
                      Attempting to create digital life. Currently, it just tels
                      bad dad jokes. Progress is slow.
                    </p>
                    <a
                      href="#works"
                      className={`block text-center w-full ${isInkMode ? "bg-black text-white" : "bg-comic-red text-white"} border-4 border-black py-2 font-display text-xl transition-colors hover:bg-black hover:text-white`}
                    >
                      VIEW FULL DETAILS
                    </a>
                  </div>
                </motion.div>
              </div>
              <div className="flex flex-wrap justify-center gap-4 mt-12">
                <a
                  href="#works"
                  className={`${isInkMode ? "bg-white text-black" : "bg-comic-pink text-white"} border-4 border-black px-6 sm:px-8 py-4 font-display text-xl sm:text-2xl hover:translate-y-1 hover:shadow-none shadow-comic transition-colors w-full sm:w-auto text-center`}
                >
                  VIEW COMPLETE ARCHIVE
                </a>
              </div>
            </section>

            <section className="p-4 py-20 text-center pr-4 md:pr-10">
              <motion.h2
                initial={{ scale: 0.8, opacity: 0, rotate: -2 }}
                whileInView={{ scale: 1, opacity: 1, rotate: -2 }}
                viewport={{ once: true }}
                className="font-display text-4xl sm:text-5xl md:text-6xl text-white text-shadow mb-12"
              >
                SUPERPOWERS
              </motion.h2>
              <div className="flex flex-wrap justify-center gap-6">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  className="bg-white border-4 border-black p-4 shadow-comic cursor-pointer transition-colors"
                >
                  <span
                    className={`font-display text-2xl ${isInkMode ? "text-black" : "text-comic-red"}`}
                  >
                    JAVASCRIPT
                  </span>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: -1 }}
                  className={`${isInkMode ? "bg-gray-200" : "bg-comic-yellow"} border-4 border-black p-4 shadow-comic cursor-pointer transition-colors`}
                >
                  <span className="font-display text-2xl">REACT.JS</span>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 3 }}
                  className={`${isInkMode ? "bg-white" : "bg-comic-cyan"} border-4 border-black p-4 shadow-comic cursor-pointer transition-colors`}
                >
                  <span className="font-display text-2xl">NODE.JS</span>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: -2 }}
                  className={`${isInkMode ? "bg-black text-white" : "bg-comic-purple text-white"} border-4 border-black p-4 shadow-comic cursor-pointer transition-colors`}
                >
                  <span className="font-display text-2xl">TAILWIND</span>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 1 }}
                  className="bg-white border-4 border-black p-4 shadow-comic cursor-pointer"
                >
                  <span className="font-display text-2xl">POSTGRES</span>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 3 }}
                  className={`${isInkMode ? "bg-white" : "bg-comic-silver"} border-4 border-black p-4 shadow-comic cursor-pointer transition-colors`}
                >
                  <span
                    className={`font-display text-2xl ${isInkMode ? "text-black" : "text-black"}`}
                  >
                    EXPRESS.JS
                  </span>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 3 }}
                  className={`${isInkMode ? "bg-gray-200" : "bg-comic-sand"} border-4 border-black p-4 shadow-comic cursor-pointer transition-colors`}
                >
                  <span
                    className={`font-display text-2xl ${isInkMode ? "text-black" : "text-comic-brown"}`}
                  >
                    POSTMAN
                  </span>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: -1 }}
                  className={`${isInkMode ? "bg-black text-white" : "bg-comic-blue text-white"} border-4 border-black p-4 shadow-comic cursor-pointer transition-colors`}
                >
                  <span
                    className={`font-display text-2xl ${isInkMode ? "text-white" : "text-comic-yellow"}`}
                  >
                    REST API
                  </span>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 4 }}
                  className={`${isInkMode ? "bg-gray-800 text-white" : "bg-comic-brown text-white"} border-4 border-black p-4 shadow-comic cursor-pointer transition-colors`}
                >
                  <span
                    className={`font-display text-2xl ${isInkMode ? "text-white" : "text-comic-sand"}`}
                  >
                    FIGMA
                  </span>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  className={`${isInkMode ? "bg-gray-200" : "bg-comic-green"} border-4 border-black p-4 shadow-comic cursor-pointer transition-colors`}
                >
                  <span
                    className={`font-display text-2xl ${isInkMode ? "text-black" : "text-black"}`}
                  >
                    FLUTTER
                  </span>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: -2 }}
                  className={`${isInkMode ? "bg-gray-200" : "bg-white"} border-4 border-black p-4 shadow-comic cursor-pointer transition-colors`}
                >
                  <span
                    className={`font-display text-2xl ${isInkMode ? "text-black" : "text-comic-silver"}`}
                  >
                    C Programming
                  </span>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 1 }}
                  className={`${isInkMode ? "bg-gray-200" : "bg-comic-cyan"} border-4 border-black p-4 shadow-comic cursor-pointer transition-colors`}
                >
                  <span
                    className={`font-display text-2xl ${isInkMode ? "text-black" : "text-comic-brown"}`}
                  >
                    C++ Programming
                  </span>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: -4 }}
                  className={`${isInkMode ? "bg-gray-200" : "bg-black"} border-4 border-black p-4 shadow-comic cursor-pointer transition-colors`}
                >
                  <span
                    className={`font-display text-2xl ${isInkMode ? "text-black" : "text-comic-silver"}`}
                  >
                    JAVA
                  </span>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 3 }}
                  className={`${isInkMode ? "bg-gray-200" : "bg-comic-sand"} border-4 border-black p-4 shadow-comic cursor-pointer transition-colors`}
                >
                  <span
                    className={`font-display text-2xl ${isInkMode ? "text-black" : "text-comic-purple"}`}
                  >
                    Python
                  </span>
                </motion.div>
              </div>
            </section>
          </motion.div>
        );
      };