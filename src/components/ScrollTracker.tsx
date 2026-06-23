import { motion, useScroll, useTransform } from "framer-motion";

interface ScrollTrackerProps {
  isInkMode: boolean;
}

export default function ScrollTracker({
  isInkMode,
}: ScrollTrackerProps) {
  const { scrollYProgress } = useScroll();

  const topPosition = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "100%"]
  );

  return (
    <div className="spider-tracker fixed top-0 right-2 md:right-6 bottom-0 w-8 md:w-12 z-[100] flex justify-center pointer-events-none">
      {/* The Web / Rope Line */}
      <div
        className={`absolute top-0 bottom-0 w-[4px] border-l-4 border-dashed transition-colors duration-300 ${
          isInkMode
            ? "border-gray-500"
            : "border-white"
        }`}
      />

      {/* Inner track wrapper */}
      <div className="absolute top-0 bottom-12 w-full flex justify-center">
        <motion.div
          className={`spider-icon absolute w-8 h-8 md:w-12 md:h-12 flex items-center justify-center border-4 border-black rounded-full shadow-[4px_4px_0px_rgba(0,0,0,1)] transition-colors duration-300 ${
            isInkMode
              ? "bg-white grayscale"
              : "bg-comic-yellow"
          }`}
          style={{ top: topPosition }}
        >
          <span className="text-lg md:text-2xl transform rotate-180">
            🕷️
          </span>
        </motion.div>
      </div>
    </div>
  );
}