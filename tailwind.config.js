/** @type {import('tailwindcss').Config} */
module.exports = {
   darkMode:"class",
  content: ["./src/**/*.{html,js}","./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      
      fontFamily:{
      "title":"cursive"
    },
    backgroundImage:{
      "mybg":"url('https://hdwallpapers2013.com/wp-content/uploads/2013/03/Sky-Wallpaper.jpg')"
    },
    
    
  },
  plugins: [require('flowbite/plugin')],
},
}
