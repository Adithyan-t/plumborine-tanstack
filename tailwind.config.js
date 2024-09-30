/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        grotesk: ['"Space Grotesk"', 'sans-serif'], 
      },
      colors: {
        primary: '#011751',   
        secondary: '#2A5486',  
        blue: '#8BE3FF',
        lightblue: '#8BE3FF4D',
      },
    },
  },
  plugins: [],
};
