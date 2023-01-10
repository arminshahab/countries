/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "#ffffff",
      "dark-mode-element": "hsl(209, 23%, 22%)",
      "light-mode-bg": "hsl(0, 0%, 98%)",
      "dark-mode-bg": "hsl(207, 26%, 17%)",
    },
    extend: {},
  },
  plugins: [],
};
