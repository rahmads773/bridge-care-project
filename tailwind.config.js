/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary": "#006C9B",
        "accent": "#3cc680",
      }
    },
  },
  plugins: [],
  variants: {
    extend: {
        display: ["group-hover"],
    },
  },
};

