/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./**/*.html"],
  theme: {
    extend: {
      colors: {
        main: "#6f4e37",
        secondary: "#f8e1cc",
      },
      fontFamily: {
        main: ["Afacad Flux", "sans-serif"],
      },
    },
  },
  plugins: [],
};
