import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import ScrollTracker from "./components/ScrollTracker";
import ProjectModal from "./components/ProjectModal";

import Home from "./sections/Home";
import About from "./sections/About";
import Works from "./sections/Work.tsx";
import Contact from "./sections/Contact";

import type { Project } from "./types/projects.ts";

import {
  ACTION_WORDS,
  ACTION_COLORS,
} from "./data/actionEffects";

interface ClickEffect {
  id: number;
  x: number;
  y: number;
  text: string;
  colorClass: string;
  rotation: number;
}

function App() {
  const [isInkMode, setIsInkMode] =
    useState(false);

  const [clicks, setClicks] = useState<
    ClickEffect[]
  >([]);

  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);

  const handlePageClick = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    const target = e.target as HTMLElement;

    if (
      target.closest("a") ||
      target.closest("button") ||
      target.closest(".cursor-pointer") ||
      selectedProject !== null
    ) {
      return;
    }

    const newClick: ClickEffect = {
      id: Date.now() + Math.random(),
      x: e.clientX,
      y: e.clientY,
      text:
        ACTION_WORDS[
          Math.floor(
            Math.random() *
              ACTION_WORDS.length
          )
        ],
      colorClass:
        ACTION_COLORS[
          Math.floor(
            Math.random() *
              ACTION_COLORS.length
          )
        ],
      rotation:
        Math.floor(Math.random() * 40) -
        20,
    };

    setClicks((prev) => [
      ...prev,
      newClick,
    ]);

    setTimeout(() => {
      setClicks((prev) =>
        prev.filter(
          (click) =>
            click.id !== newClick.id
        )
      );
    }, 1000);
  };

  return (
    <div
      onClick={handlePageClick}
      className="relative min-h-screen flex flex-col overflow-x-hidden cursor-crosshair"
    >
      <ScrollTracker isInkMode={isInkMode} />

      <nav className="fixed top-0 left-0 w-full z-50 px-4 md:px-12 py-4 flex justify-center pointer-events-none">
        <div className="nav-inner bg-white border-4 border-black p-2 shadow-comic flex gap-2 sm:gap-4 pointer-events-auto transform -rotate-1 transition-colors duration-300 text-black">
          <a
            href="#home"
            className="font-display text-base sm:text-xl hover:text-comic-red hover:underline px-1 sm:px-2"
          >
            HOME
          </a>

          <span className="nav-sep font-bold text-black">
            |
          </span>

          <a
            href="#about"
            className="font-display text-base sm:text-xl hover:text-comic-cyan hover:underline px-1 sm:px-2"
          >
            ABOUT ME
          </a>

          <span className="nav-sep font-bold text-black">
            |
          </span>

          <a
            href="#works"
            className="font-display text-base sm:text-xl hover:text-comic-yellow hover:underline px-1 sm:px-2"
          >
            WORKS
          </a>
        </div>
      </nav>

      <Home
        isInkMode={isInkMode}
        setIsInkMode={setIsInkMode}
        setSelectedProject={
          setSelectedProject
        }
      />

      <About isInkMode={isInkMode} />

      <Works
        isInkMode={isInkMode}
        onOpenModal={
          setSelectedProject
        }
      />

      <Contact isInkMode={isInkMode} />

      <footer className="w-full px-4 md:px-12 bg-black text-white text-center py-6 border-t-4 border-comic-yellow mt-auto relative z-10">
        <p className="font-display tracking-widest">
          {isInkMode
            ? "TO BE CONTINUED IN COLOR..."
            : "TO BE CONTINUED..."}
        </p>
      </footer>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            isInkMode={isInkMode}
            onClose={() =>
              setSelectedProject(null)
            }
          />
        )}
      </AnimatePresence>

      <div className="fixed inset-0 pointer-events-none z-[9999]">
        {clicks.map((click) => (
          <motion.div
            key={click.id}
            initial={{
              scale: 0,
              opacity: 1,
              x: "-50%",
              y: "-50%",
              rotate: click.rotation,
            }}
            animate={{
              scale: [0, 1.2, 1],
              opacity: [1, 1, 0],
            }}
            transition={{
              duration: 0.9,
              times: [0, 0.2, 1],
            }}
            className="absolute origin-center"
            style={{
              left: click.x,
              top: click.y,
            }}
          >
            <div
              className={`relative px-4 py-1 border-4 border-black ${
                isInkMode
                  ? "bg-white"
                  : click.colorClass
              } shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform -skew-x-12`}
            >
              <span
                className={`font-display text-3xl md:text-4xl tracking-widest ${
                  isInkMode
                    ? "text-black"
                    : "text-white text-shadow"
                }`}
              >
                {click.text}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default App;