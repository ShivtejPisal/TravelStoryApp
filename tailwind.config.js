/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: ["Poppins", "sans-serif"],
    extend: {
      //Colors use in the project
      primary: "#05B6D3",
      secondary: "#EF863E",
    },
  },
  plugins: [],
}