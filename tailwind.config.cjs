/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          900: '#437ba0', // Customize bg-gray-900
          800: '#5185a7', // Customize bg-gray-800
          700: '#6694b2', // Customize bg-gray-700
          600: '#7ba3bc', // Customize bg-gray-600
          500: '#91b1c7', // Customize bg-gray-600
          400: '#a6c0d2', // Customize bg-gray-600
          300: '#bbcfdc', // Customize bg-gray-600
          200: '#d0dee7', // Customize bg-gray-600  
        },
        green: {
          900: '#00bb7b', // Customize bg-gray-900
          800: '#19c288', // Customize bg-gray-800
          700: '#32c895', // Customize bg-gray-700
          600: '#4bcfa2', // Customize bg-gray-600
          500: '#64d5af', // Customize bg-gray-600
          400: '#7cdcbc', // Customize bg-gray-600
          300: '#95e3c8', // Customize bg-gray-600
          200: '#a6e7d1', // Customize bg-gray-600  
          100: '#d9f5eb', // Customize bg-gray-600  
        },
        orange: {
          900: '#ffcf08', // Customize bg-gray-900
          800: '#ffd420', // Customize bg-gray-800
          700: '#ffd838', // Customize bg-gray-700
          600: '#ffdd50', // Customize bg-gray-600
          500: '#ffe269', // Customize bg-gray-600
          400: '#ffe681', // Customize bg-gray-600
          300: '#ffeb99', // Customize bg-gray-600
          200: '#fff1b5', // Customize bg-gray-600  
          100: '#fff8da', // Customize bg-gray-600  
        },
      },
    },
  },
  plugins: [],
});
