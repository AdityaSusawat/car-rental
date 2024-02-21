/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#38BDF8",
        dark: "black",
        darkBackground: "#000000",
        darkBackgroundAlt: "#050301",
        darkText: "#35A29F",
        darkTextHover: "#97FEED",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
    },
  },
  plugins: [],
};
