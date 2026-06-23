interface BeltPouchProps {
  text: string;
  rotate: string;
  isInkMode: boolean;
}

export default function BeltPouch({
  text,
  rotate,
}: BeltPouchProps) {
  return (
    <div
      className={`
        z-10
        border-4
        border-black
        rounded-full
        h-24
        w-24
        md:h-28
        md:w-28
        flex
        items-center
        justify-center
        p-2
        text-center
        shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
        transform
        hover:scale-110
        transition-all
        duration-300
        bg-white
        ${rotate}
      `}
    >
      <span className="font-display text-lg md:text-xl leading-none">
        {text}
      </span>
    </div>
  );
}