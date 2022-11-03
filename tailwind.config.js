/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/views/*.html'],
  theme: {
    screens:{
      sm:'375px',
      xl:'1440px',
    },
    extend: {
      colors:{
        White: 'hsl(0 , 0% ,100%)',
        Lightgray: 'hsl(212 , 45% ,89%)',
        Grayishblue: 'hsl(220 , 15% ,55%)',
        DarkBlue: 'hsl(218 , 44% ,22%)',
      },
      fontSize :{
        paragraph : '15px',
      },
      fontFamily: {
        custom: ['Outfit' ,'sans-serif'] ,
      
    },
    },
  },
  plugins: [],
}
