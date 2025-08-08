import bg from "./src/assets/img/Bg/pokedex Bg.webp"

/** @type {import('tailwindcss').Config} */
export default {
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionTimingFunction:{
        custom:'cubic-bezier(0, 0.33, 0.75, 1.01)'
      },
      colors:{
        'brandColors':{
          'yellow':'#FBD743',
          'red':'#FF1F1F',
          'lightBlue':'#5CB9FF',
          'darkBlue':'#363A81',
          'black':'#242424',
          'white':'#f2f6f7'}},
      fontFamily:{
        'headings':'radeny',
        'paragraph': "Poppins, sans-serif"}
    },
  },
  plugins: [],
}

