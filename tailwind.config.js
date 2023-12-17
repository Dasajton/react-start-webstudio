/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        lightgreen: '#74C69D',
        lightblack: '#212529'
      },
      fontFamily: {
        crimson: ['Crimson Text', 'serif'],
        work: ['Work Sans', 'sans-serif']
      }
    }
  },
  plugins: []
};
