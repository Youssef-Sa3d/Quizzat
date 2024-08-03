/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: '#071952',
        seaDark: '#088395',
        seaLight: '#37B7C3',
        offWhite: '#EBF4F6'
      },
    },
  },
  plugins: [],
}