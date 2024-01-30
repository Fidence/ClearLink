/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        lg:"1024px"
      },
      colors:{
        primary:"#175CD3",
        secondary:"#667085",
        tartiary:"#98A2B3",
        textColor:"#475467",
        nav:"#D0D5DD"
      }
    },
  },
  plugins: [],
}
