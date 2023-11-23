/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Primary': '#00AAE8',
        'white': '#ffffff',
        'grey-1': '#F8F8F8',
        'Neutral/500': '#64748B',
        'Neutral/100': '#E7EAEE',
        'GreyOverlay': 'rgba(56, 56, 56, 0.20)',
        'Neutral/800': '#191D23',
        'video1': '#3C3C3C',
        'video2': '#D9D9D9',
        'darkest': '#090A0A',
        'lightest': '#6C7072',
      },
      boxShadow: {
        'box1': '0px 0px 17px 17px rgba(0, 0, 0, 0.25)',
      },
      fontFamily: {
        manrope: ['Manrope', 'sans']
      }
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp")],
}
