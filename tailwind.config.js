/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E83667",
        primaryDark: "#BB2C51",
        secondary: "#21D4B9",
        dark: "#303030",
      },
      fontFamily: {
        cursive: ["Ephesis", "cursive"],
        logos: ["Rubik Scribble", "system-ui"],
        hero: ["Allerta Stencil", "sans-serif"]

      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          md: "3rem",
          lg: "4rem",
        },
      },
    },
  },
  plugins: [],
};