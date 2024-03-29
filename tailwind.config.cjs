/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xsm: "427px",
        xsm_2: "394px",
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        satisfy: ["Satisfy", "cursive"],
        pacifico: ["Pacifico", "cursive"],
      },
      colors: {
        cookLime: "#C5FA2E",
        cookLightYellow: "#F0FF92",
        cookGreen: "#79B100",
        cookDarkGreen: "#00652C",
        cookTextDark: "#383838",
        cookTextLight: "#656565",
        cookDarkBg: "#1B1B1B",
        cookCardGrayBg: "#B7B7B7",
        cookCardGrayBg_two: "#E0E0E0",
        cookGrayBg: "#CCCCCC",
        cookLightBg: "#E0E0E0",
      },
      fontSize: {
        heading: "4.2rem",
        small: "9px",
      },
      zIndex: {
        "-1": "-1",
        "-2": "-2",
      },
    },
  },
  plugins: [],
};
