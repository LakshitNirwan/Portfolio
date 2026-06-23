import { useState } from "react";
import type { Project } from "../types/projects.ts";

interface ComicBlockProps {
  project: Project;
  isInkMode: boolean;
  onOpenModal: (project: Project) => void;
}

export default function ComicBlock({
  project,
  isInkMode,
  onOpenModal,
}: ComicBlockProps) {
  const [isHovered, setIsHovered] = useState(false);

  const activeBgColor = isInkMode
    ? "bg-white"
    : project.bgColor;

  const activeTextColor = isInkMode
    ? "text-comic-black"
    : project.textColor;

  const activeTextureColor = isInkMode
    ? "dots-gray"
    : project.textureColor;

  const imageFilter = isInkMode
    ? "grayscale contrast-150 sepia-[.1]"
    : "";
console.log("IMAGE:", project.bgImage);
  return (
    <div
      tabIndex={0}
      onClick={(e) => {
        e.stopPropagation();
        onOpenModal(project);
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          e.stopPropagation();
          onOpenModal(project);
        }
      }}
      className={`absolute inset-0 transition-colors duration-300 cursor-pointer focus:outline-none focus:ring-4 focus:ring-comic-yellow focus:z-[20] ${project.clipClass}  ${project.bgSettings} bg-blend-multiply ${imageFilter} ${isHovered ? activeBgColor : project.bgGray}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      style={{
        zIndex: isHovered ? 10 : 1,
        backgroundImage: `url(${project.bgImage})`,
        }}
    >
      <div
        className={`absolute inset-0 opacity-40 transition-opacity duration-300 ${
          isHovered
            ? activeTextureColor
            : project.textureGray
        }`}
      />

      <div
        className={`absolute ${project.textXY} -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center w-[80%] text-center transition-all duration-300 ${
          isHovered
            ? activeTextColor
            : "text-gray-900"
        }`}
      >
        <span
          className={`text-xs font-bold border-2 border-current px-1 mb-1 bg-white/70 backdrop-blur-md transition-opacity duration-300 ${
            isHovered
              ? "opacity-100"
              : "opacity-100 md:opacity-0"
          }`}
        >
          #
          {project.id < 10
            ? `0${project.id}`
            : project.id}
        </span>

        <h3
          className={`font-display uppercase tracking-wide transition-all duration-300 ${
            isHovered
              ? "text-3xl sm:text-4xl md:text-5xl scale-110 drop-shadow-md"
              : "text-2xl sm:text-3xl md:text-4xl"
          }`}
        >
          {project.title}
        </h3>

        <p
          className={`font-bold text-sm mt-1 bg-white/80 text-black px-2 border-black border transition-opacity duration-300 ${
            isHovered
              ? "opacity-100"
              : "opacity-100 md:opacity-0"
          }`}
        >
          {project.desc}
        </p>
      </div>
    </div>
  );
}