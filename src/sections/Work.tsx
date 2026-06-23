import { motion } from "framer-motion";

import { projects } from "../data/projects";
import ComicBlock from "../components/ComicBlock";

import type { Project } from "../types/projects.ts";

interface WorksProps {
  isInkMode: boolean;
  onOpenModal: (project: Project) => void;
}

export default function Works({
  isInkMode,
  onOpenModal,
}: WorksProps) {
  return (
    <motion.div
      id="works"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="w-full flex flex-col items-center px-4 md:px-10 pt-32 pb-12 relative z-10"
    >
      <div className="w-full max-w-3xl flex flex-col">
        <div className="text-center mb-6 relative z-10">
          <span
            className="border-4 border-black px-4 sm:px-8 py-3 font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl shadow-comic inline-block transform -rotate-1 transition-colors bg-white text-black"
          >
            {isInkMode
              ? "THE ARCHIVES (RAW INK)"
              : "THE ARCHIVES"}
          </span>
        </div>

        <div className="works-grid relative w-full aspect-square md:aspect-[2/3] max-h-[1000px] bg-black border-[6px] border-black shadow-[20px_20px_0px_rgba(0,0,0,0.5)] overflow-hidden z-10">
          {projects.map((p) => (
            <ComicBlock
              key={p.id}
              project={p}
              isInkMode={isInkMode}
              onOpenModal={onOpenModal}
            />
          ))}
        </div>

        <div className="text-right mt-6 relative z-10 pr-6">
          <span className="text-white font-display text-xl opacity-50 tracking-widest">
            {isInkMode
              ? "VARIANT ISSUE 1 OF 1"
              : "PAGE 1 OF 1"}
          </span>
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <p className="font-display text-xl text-center">
          CLICK ANY PANEL TO OPEN CASE FILE
        </p>
      </div>
    </motion.div>
  );
}

