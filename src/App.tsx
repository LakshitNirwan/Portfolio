import { useState } from "react";

import ScrollTracker from "./components/ScrollTracker";
import Navbar from "./components/Navbar";
import ProjectModal from "./components/ProjectModal";

import Works from "./sections/Work.tsx";
import Home from "./sections/Home";

import type { Project } from "./types/projects.ts";

function App() {
  const [isInkMode, setIsInkMode] = useState(false);

  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);

  return (
    <div
      className={`
        min-h-screen
        overflow-x-hidden
        ${
          isInkMode
            ? "bg-gray-100 text-black"
            : "bg-[#f8f3e8] text-black"
        }
      `}
    >
      <ScrollTracker isInkMode={isInkMode} />

      <Navbar isInkMode={isInkMode} />

      <main className="pt-28">
        <div className="flex justify-center mb-8">
          <button
            onClick={() =>
              setIsInkMode((prev) => !prev)
            }
            className="
              border-4
              border-black
              px-6
              py-2
              font-display
              bg-white
              shadow-[4px_4px_0px_rgba(0,0,0,1)]
            "
          >
            {isInkMode
              ? "COLOR MODE"
              : "INK MODE"}
          </button>
        </div>

        <Works
          isInkMode={isInkMode}
          onOpenModal={setSelectedProject}
        />
      </main>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isInkMode={isInkMode}
          onClose={() =>
            setSelectedProject(null)
          }
        />
      )}
    </div>
  );
}

export default App;