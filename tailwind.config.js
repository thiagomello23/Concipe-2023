/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#5EA752',
        'secondary': '#46654E',
        'gray-light': '#FAFAFA',
        'gray-bold': '#ECEAEA',
        'orange': '#FCB03C',
        'black': '#242021',
        'green': '#B6EC37'
      }
    },
  },
  plugins: [],
}