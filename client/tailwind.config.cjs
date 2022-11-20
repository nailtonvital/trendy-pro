/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    fontFamily: {
      sans: ["Poppins", "ui-sans-serif", "system-ui"],
    },
    colors: {
      glass: 'rgba(255, 255, 255, 0.15);',
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};