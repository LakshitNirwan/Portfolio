interface NavbarProps {
  isInkMode: boolean;
}

export default function Navbar({
  isInkMode,
}: NavbarProps) {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-4 md:px-12 py-4 flex justify-center pointer-events-none">
      <div
        className="
          nav-inner
          bg-white
          border-4
          border-black
          p-2
          shadow-comic
          flex
          gap-2
          sm:gap-4
          pointer-events-auto
          transform
          -rotate-1
          text-black
        "
      >
        <a
          href="#home"
          className="font-display text-base sm:text-xl hover:text-comic-red hover:underline px-1 sm:px-2"
        >
          HOME
        </a>

        <span className="nav-sep font-bold">
          |
        </span>

        <a
          href="#about"
          className="font-display text-base sm:text-xl hover:text-comic-cyan hover:underline px-1 sm:px-2"
        >
          ABOUT ME
        </a>

        <span className="nav-sep font-bold">
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
  );
}