/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.8)',
        '4xl': '5px 10px 20px rgba(0, 0, 0, 0.8)'
      },
    },
  },
  plugins: [],
}