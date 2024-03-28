/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-blue": "#E1F8FD",
        "light-orange": "#FF7E03",
        "blue-link": "#00A4FF",
        "dark-blue": "#004D78",
      },
    },
  },
  plugins: [],
};
