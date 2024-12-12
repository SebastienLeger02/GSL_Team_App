/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html", "./src/**/*.{vue,js}", ],
  theme: {
    extend: {
      colors: {
        'background-default': 'rgb(62 11 66 / var(--tw-bg-opacity, 1))',
        'background-secondary': '#8cb7eb',
        'background-thirty': '#1c0823',
        'background-fourth': '#1B001E',
      },
      fontFamily: {
        jaro: [ 'Jaro', 'sans-serif'],
      },
    },
  },
  plugins: [],
}