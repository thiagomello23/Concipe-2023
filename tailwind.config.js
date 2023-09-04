/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#8DC641',
        'gray-light': '#FAFAFA',
        'gray-bold': '#ECEAEA',
        'orange': '#FCB03C',
        'black': '#242021'
      }
    },
  },
  plugins: [],
}