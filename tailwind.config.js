/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./user/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        main: "#947255",
        secondary: "#fff7ed",
      },
      fontFamily: {
        main: ["Afacad Flux", "sans-serif"],
      },
    },
  },
  plugins: [],
};
