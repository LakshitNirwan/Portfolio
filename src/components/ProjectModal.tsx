import { useEffect } from "react";
import { motion } from "framer-motion";
import type { Project } from "../types/projects.ts";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  isInkMode: boolean;
}

export default function ProjectModal({
  project,
  onClose,
  isInkMode,
}: ProjectModalProps) {
  useEffect(() => {
    document.body.classList.add("no-scroll");

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center p-4 backdrop-blur-md bg-black/10"
      onClick={onClose}
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 50,
          scale: 0.95,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        exit={{
          opacity: 0,
          scale: 0.95,
          y: 20,
        }}
        transition={{
          type: "spring",
          damping: 25,
          stiffness: 300,
        }}
        onClick={(e) => e.stopPropagation()}
        className={`
          modal-inner
          relative
          w-full
          max-w-2xl
          border-[6px]
          border-black
          p-6
          md:p-10
          shadow-[16px_16px_0px_rgba(0,0,0,1)]
          ${
            isInkMode
              ? "bg-white text-black"
              : "bg-comic-paper text-black"
          }
        `}
      >
        <button
          onClick={onClose}
          className="
            absolute
            top-4
            right-4
            border-4
            border-black
            px-3
            py-1
            font-display
            text-xl
            bg-comic-red
            text-white
            hover:scale-105
            transition
          "
        >
          X
        </button>

        <div className="mb-6">
          <h2 className="font-display text-4xl md:text-5xl mb-2">
            {project.title}
          </h2>

          <p className="font-bold text-xl text-gray-600">
            {project.desc}
          </p>
        </div>

        <div className="border-y-4 border-black py-6 mb-6">
          <p className="text-lg leading-relaxed">
            {project.fullDesc}
          </p>
        </div>

        <div className="mb-8">
          <h3 className="font-display text-2xl mb-4">
            TECH STACK
          </h3>

          <div className="flex flex-wrap gap-3">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="
                  border-4
                  border-black
                  px-4
                  py-2
                  bg-comic-yellow
                  font-bold
                "
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="
              border-4
              border-black
              px-6
              py-3
              font-display
              text-xl
              bg-comic-cyan
              hover:translate-y-1
              transition
            "
          >
            GITHUB
          </a>

          {project.liveLink !== "#" && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="
                border-4
                border-black
                px-6
                py-3
                font-display
                text-xl
                bg-comic-red
                text-white
                hover:translate-y-1
                transition
              "
            >
              LIVE DEMO
            </a>
          )}
        </div>
      </motion.div>
    </div>
  );
}