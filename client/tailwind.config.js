/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "work-sans": ['"Work Sans"', "system-ui"],
      },
      colors: {
        customBlue: "#5250ff",
        lightText: "#f0f0f0", // for light mode
        darkText: "#333333", // for light mode general text
        lightHeading: "#ffffff", // for headings in light mode
        darkModeText: "#d0d0d0", // for dark mode general text
        darkHeading: "#a3a0ff", // for headings in dark mode
        darkSubHeading: "#c0c0c0",
        customBlueHover: "#4040e0",
        darkModeButton: "#a3a0ff",
        darkModeButtonHover: "#3938c9",
        buttonText: "#ffffff",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
