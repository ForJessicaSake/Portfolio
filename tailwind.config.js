/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#C778DD",
        secondary: "#ABB2BF",
        background: "#282c33"
      },  
      fontFamily:{
        font:["Fira Code", "monospace"],
      },    
    },
  },
  plugins: [],
}