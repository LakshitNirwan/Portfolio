import { motion, useScroll, useTransform } from "framer-motion";

interface Props {
  isInkMode: boolean;
}

export default function ScrollTracker({ isInkMode }: Props) {
  const { scrollYProgress } = useScroll();

  const topPosition = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "100%"]
  );

  return (
    <div className="spider-tracker fixed top-0 right-2 md:right-6 bottom-0 w-8 md:w-12 z-[100] flex justify-center pointer-events-none">

      <div
        className={`absolute top-0 bottom-0 w-[4px] border-l-4 border-dashed ${
          isInkMode
            ? "border-gray-500"
            : "border-white"
        }`}
      />

      <div className="absolute top-0 bottom-12 w-full flex justify-center">
        <motion.div
          style={{ top: topPosition }}
          className={`spider-icon absolute
            w-8 h-8
            md:w-12 md:h-12
            flex items-center justify-center
            border-4 border-black
            rounded-full
            shadow-[4px_4px_0px_rgba(0,0,0,1)]
            ${
              isInkMode
                ? "bg-white grayscale"
                : "bg-comic-yellow"
            }`}
        >
          <span className="text-lg md:text-2xl rotate-180">
            🕷️
          </span>
        </motion.div>
      </div>
    </div>
  );
}