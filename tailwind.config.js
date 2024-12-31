/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        markazi: ['"Markazi Serif"', 'serif'],
        karla: ['"Karla"', 'sans-serif'],
      },
      colors: {
        primary: '#495E57', // Dark green
        secondary: '#F4CE14', // Yellow
        white: '#FFFFFF',
        highlight: '#EDEFEE',
      },
    },
  },
  plugins: [],
};