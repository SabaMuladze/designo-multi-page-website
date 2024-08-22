/** @type {import('tailwindcss').Config} */
export default {
     purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      colors:{
        peach:'#E7816B',
        black:'#1D1C1E',
        white:'#FFFFFF',
        lightpeach:'#FFAD9B',
        darkgray:'#333136',
        lightgray:'#F1F3F5'
      }
    },
  },
  plugins: [],
}

