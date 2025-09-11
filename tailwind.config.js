/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./Pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
    "./Entities/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'brutal': ['Arial Black', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        'brutalist': '8px 8px 0px 0px #000000',
        'brutalist-sm': '4px 4px 0px 0px #000000',
      },
      textShadow: {
        'brutalist': '4px 4px 0px #000000',
      }
    },
  },
  plugins: [],
}
