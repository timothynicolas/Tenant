/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'theme-gray': '#D9D9D9',
        'theme-grey': '#737373',
        'theme-green': '#1CA684',
      }
    },
  },
  plugins: [],
}