/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF6900",
        heading: "#191208",
        dark: "#191208",
        success: "#219653",
        grey: "#EDEDED",
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
