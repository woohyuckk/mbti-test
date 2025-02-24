/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F7A8C4",
        secondary: "#F37199",
        tertiary: '#AC1754',
        hover_color: "#E53888",
      },
      boxShadow: {
        custom: '0 0 2px #444', 
      }
    },
  },
  plugins: [],
};