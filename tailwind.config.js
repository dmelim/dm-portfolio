/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggleRight: {
          "0%": { transform: "translate(-5rem); opacity:0; " },
          "100%": { transform: "translate(0); opacity:1 ;" },
        },
        wiggleLeft: {
          "0%": { transform: "translate(5rem); opacity:0; " },
          "100%": { transform: "translate(0); opacity:1 ;" },
        },
      },
      animation: {
        wiggleRight: "wiggleRight 2s ease-in-out",
        wiggleLeft: "wiggleLeft 2s ease-in-out",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["business"],
  },
};
