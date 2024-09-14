import DesignCard from './src/components/additional/DesignCard.vue';

/** @type {import('tailwindcss').Config} */
export default {
     content: [
      './index.html',
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors:{
        peach:'#E7816B',
        black:'#1D1C1E',
        white:'#FFFFFF',
        lightpeach:'#FFAD9B',
        darkgray:'#333136',
        lightgray:'#F1F3F5'
      },
      fontFamily:{
                'jost': ['Jost', 'sans-serif'],
      },
      content:{
        DesignCardHover: 'relative w-full h-full bg-peach opacity-50 '
      }
    },
  },
  plugins: [],
}

