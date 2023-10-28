/** @type {import('tailwindcss').Config} */
module.exports = {
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
      }
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp")],
}
