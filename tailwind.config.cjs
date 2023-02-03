const a = require("tailwindcss");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/nui/index.html", "./src/nui/**/*.{js,ts,jsx,tsx,css,md,mdx,html,json,scss}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: "#16365c",
          light: "#3175bf",
        },
      },
      fontFamily: {
        sans: "ChaletLondon",
        header: "ChaletComprime",
      },
      borderWidth: {
        3: "3px",
        6: "6px",
      },
      rotate: {
        135: "135deg",
      },
    },
  },
  plugins: [],
};
