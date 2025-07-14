/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // ← this line is important for React
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
