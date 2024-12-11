/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html", "./src/**/*.{vue,js}", ],
  theme: {
    colors: {
      'bg-color': '#1B001E',
      'b-nav': '#8cb7eb;'
    },
    fontFamily: {
      jaro: [ 'Jaro', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}