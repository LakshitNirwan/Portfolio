/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
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

        newpurple: "#5B3DF5",
        newyellow: "#FCD34D",
        newpink: "#F472B6",
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