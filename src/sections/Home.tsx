import { motion } from "framer-motion";

interface HomeProps {
  isInkMode: boolean;
  setIsInkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Home({
  isInkMode,
  setIsInkMode,
}: HomeProps) {
  return (
    <section
      id="home"
      className="max-w-7xl mx-auto px-4 md:px-12 pt-24 pb-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="bg-white border-4 border-black shadow-comic p-8">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div>
              <p className="font-display text-xl mb-4">
                ISSUE #001
              </p>

              <h1 className="font-display text-5xl md:text-7xl">
                LAKSHIT
              </h1>

              <h2 className="font-display text-4xl md:text-6xl text-comic-red">
                NIRWAN
              </h2>

              <p className="mt-6 text-xl">
                Full Stack Developer
              </p>
            </div>

            <div>
              <button
                onClick={() =>
                  setIsInkMode((prev) => !prev)
                }
                className="
                  border-4
                  border-black
                  px-6
                  py-3
                  font-display
                  bg-comic-yellow
                "
              >
                {isInkMode
                  ? "COLOR MODE"
                  : "INK MODE"}
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}