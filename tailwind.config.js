/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: theme => ({
        'grayish-blue' : 'var(--grayish-blue)' ,
        'strong-cyan' : 'var(--strong-cyan)' ,
        'light-blue' : 'var(--light-blue)' ,
      }),
      textColor: theme => ({
        'grayish-blue' : 'var(--grayish-blue)' ,        
      }),
      fontFamily: theme => ({
        'BaiJamjuree':['Bai Jamjuree', 'sans-serif'] ,
        'Overpass':['Overpass', 'sans-serif'] ,
      })
    },
  },
  plugins: [],
}