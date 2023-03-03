/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        satisfy: ["Satisfy", "cursive"],
      },
      colors: {
        cookLime: "#C5FA2E",
        cookLightYellow: "#F0FF92",
        cookGreen: "#79B100",
        cookDarkGreen: "#00652C",
        cookTextDark: "#383838",
        cookTextLight: "#656565",
        cookDarkBg: "#1B1B1B",
        cookGrayBg: "#CCCCCC",
        cookLightBg: "#E0E0E0",
      },
      fontSize: {
        heading: "4.2rem",
        small: "9px",
      },
    },
  },
  plugins: [],
};
