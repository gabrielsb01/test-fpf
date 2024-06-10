/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: "#2D2D2D",
          light: "#E0E0E0",
          white: "#FFFFFF",
        },
        accent: {
          blue: "#007BFF",
          green: "#28A745",
          red: "#DC3545",
          orange: "#FFC107",
        },
        secondary: {
          mediumGray: "#6C757D",
          black: "#000000",
        },
      },
    },
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
