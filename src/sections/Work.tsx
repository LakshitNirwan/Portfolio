import { motion } from "framer-motion";
import { projects } from "../data/projects.ts";
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
    <section
      id="works"
      className="max-w-7xl mx-auto px-4 md:px-12 py-20 relative z-10"
    >
      <motion.div
        initial={{ scaleX: 0, rotate: 2 }}
        whileInView={{ scaleX: 1, rotate: 2 }}
        viewport={{ once: true }}
        className={`
          ${
            isInkMode
              ? "bg-white text-black border-black"
              : "bg-black text-white border-white"
          }
          border-4
          inline-block
          px-6
          py-2
          mb-10
          origin-left
        `}
      >
        <h2 className="font-display text-4xl md:text-5xl">
          THE ARCHIVES
        </h2>
      </motion.div>

      <div
        className="
          works-grid
          relative
          aspect-square
          w-full
          border-4
          border-black
          bg-white
          overflow-hidden
        "
      >
        {projects.map((project) => (
          <div
            key={project.id}
            className={`
              absolute
              inset-0
              ${project.clipClass}
              cursor-pointer
            `}
            onClick={() => onOpenModal(project)}
          >
            <div
              className={`
                h-full
                w-full
                transition-all
                duration-300
                hover:brightness-110
                ${isInkMode ? project.bgGray : project.bgColor}
              `}
            >
              <div
                className={`
                  absolute
                  ${project.textXY}
                  -translate-x-1/2
                  -translate-y-1/2
                  text-center
                `}
              >
                <h3
                  className={`
                    font-display
                    text-xl
                    md:text-3xl
                    ${project.textColor}
                  `}
                >
                  {project.title}
                </h3>

                <p
                  className={`
                    font-bold
                    text-sm
                    md:text-lg
                    ${project.textColor}
                  `}
                >
                  {project.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <p className="font-display text-xl text-center">
          CLICK ANY PANEL TO OPEN CASE FILE
        </p>
      </div>
    </section>
  );
}