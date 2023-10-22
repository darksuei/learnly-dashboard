/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      sm: { min: "0px", max: "767px" },
      md: { min: "768px", max: "1123px" },
      lg: { min: "1124px", max: "1535px" },
      "2xl": { min: "1536px" },
    },
  },
  plugins: [],
};
