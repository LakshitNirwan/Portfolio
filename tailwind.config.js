/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      boxShadow: {
      comic: "8px 8px 0px 0px rgba(0,0,0,1)",
      },

    backgroundImage: {
      "halftone-gray":
        "radial-gradient(circle, #555 1px, transparent 1.5px)",
      "halftone-color":
        "radial-gradient(circle, rgba(0,0,0,0.3) 1px, transparent 1.5px)",
      "dots-gray":
        "radial-gradient(#aaa 1px, transparent 1px)",
      "dots-color":
        "radial-gradient(rgba(255,255,255,0.4) 1px, transparent 1px)",
    },

    backgroundSize: {
      halftone: "8px 8px",
      dots: "10px 10px",
    },
      colors: {
        comic: {
          red: "#FF4F4F",
          yellow: "#FFD84D",
          cyan: "#4DDCFF",
          purple: "#8B5CF6",
          blue: "#3B82F6",
          pink: "#EC4899",
          green: "#22C55E",
          orange: "#F97316",
          paper: "#F8F3E8",
          silver: "#D1D5DB",
          black: "#111827",
          sand: "#D4A373",
          brown: "#7C4F2A",
        },

        "comic-paper": "#f4f4f0",
newpurple: "#2e0457",
newyellow: "#fcf008",
newbrown: "#733205",
newpink: "#db5a9f",
comicdpurp: "#21023b",
      },

      fontFamily: {
        display: [
          "Bangers",
          "cursive",
        ],

        body: [
          "Comic Neue",
          "sans-serif",
        ],
      },
    },
  },

  plugins: [],
};