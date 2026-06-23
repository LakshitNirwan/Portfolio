import { useEffect, useState } from "react";

interface ScrambleTextProps {
  reveal: boolean;
  realText: string;
  fakeText: string;
}

export default function ScrambleText({
  reveal,
  realText,
  fakeText,
}: ScrambleTextProps) {
  const [text, setText] = useState(fakeText);

  useEffect(() => {
    if (!reveal) {
      setText(fakeText);
      return;
    }

    let iterations = 0;

    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*";

    const interval = setInterval(() => {
      setText(
        realText
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";

            if (index < iterations) {
              return realText[index];
            }

            return chars[
              Math.floor(Math.random() * chars.length)
            ];
          })
          .join("")
      );

      if (iterations >= realText.length) {
        clearInterval(interval);
      }

      iterations += 0.5;
    }, 30);

    return () => clearInterval(interval);
  }, [reveal, realText, fakeText]);

  return (
    <span className="font-bold text-2xl uppercase tracking-wider">
      {text}
    </span>
  );
}