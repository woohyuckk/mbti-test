/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#B7B1F2",
        secondary: "#FDB7EA",
        sub_color: "#FFDCCC",
        text_primary: "#444",
      }
    },
  },
  plugins: [],
};