import { motion } from "framer-motion";

interface ContactProps {
  isInkMode: boolean;
}

export default function Contact({
  isInkMode,
}: ContactProps) {
  return (
    <section className="max-w-4xl w-full mx-auto px-4 md:px-12 py-20 pb-40 relative z-10">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring" }}
        className="bubble bg-white p-10 shadow-comic text-center mb-10 text-black"
      >
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl mb-4">
          CITIZEN IN DISTRESS?
        </h2>

        <p className="text-lg sm:text-xl md:text-2xl font-bold mb-6">
          Need a website saved? A bug squashed? Or just
          want to talk about the latest issue?
        </p>

        <p className="text-xl">
          SEND A SIGNAL!
        </p>
      </motion.div>

      <div className="contact-btn-group flex flex-wrap justify-center gap-4 mt-12">
        <a
          href="mailto:lakshitnirwan5@gmail.com"
          className={`${
            isInkMode
              ? "bg-black text-white"
              : "bg-comic-red text-white"
          } border-4 border-black px-6 sm:px-8 py-4 font-display text-xl sm:text-2xl hover:translate-y-1 hover:shadow-none shadow-comic transition-colors w-full sm:w-auto text-center`}
        >
          EMAIL ME
        </a>

        <a
          href="./Lakshit_Nirwan_Resume.pdf"
          download="Lakshit_Nirwan_Resume.pdf"
          className={`${
            isInkMode
              ? "bg-white text-black"
              : "bg-comic-yellow text-black"
          } border-4 border-black px-6 sm:px-8 py-4 font-display text-xl sm:text-2xl hover:translate-y-1 hover:shadow-none shadow-comic transition-colors w-full sm:w-auto text-center`}
        >
          DOWNLOAD DOSSIER
        </a>

        <a
          href="https://www.linkedin.com/in/lakshit-nirwan/"
          target="_blank"
          rel="noopener noreferrer"
          className={`${
            isInkMode
              ? "bg-gray-400 text-black"
              : "bg-comic-blue text-white"
          } border-4 border-black px-6 sm:px-8 py-4 font-display text-xl sm:text-2xl hover:translate-y-1 hover:shadow-none shadow-comic transition-colors w-full sm:w-auto text-center`}
        >
          LINKEDIN
        </a>
      </div>
    </section>
  );
}