/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'
],
  theme: {
    extend: {
      colors: {
        'body-bg': '#f7f8fa',
        'nav-header': '#0a71c6',
        'profile': '#41a4f5',
        'hire-btn': '#b8d4ea'
      },
       backgroundImage: {
        'weeve': "url('../Images/WEEVE LOGO 6 ADJ 1.png')",
        'autoproctor': "url('../Images/autoproctor.svg')",
        'vturecharge': "url('../Images/Vturecharge.png')",
        'weatherbot' : "url('../Images/telegram weather.png')",
        'worldXplorer' : "url('../Images/worldXplorer.png')",
        'eVoting' : "url('../Images/evoting.png')",
        'dommyheritage' : "url('../Images/dommyheritage.png')",
        'relokonnect' : "url('../Images/Relokonnect.png')",
        "eps+": "url('../Images/EPS+.png')",
        "portal": "url('../Images/portal.png')",
        "pexialDigitalSolution": "url('../Images/Pexial-digital-solution.jpg')",
"quickVtu": "url('../Images/quickVtu.jpg')"
       }
    },  },
  plugins: [
    require('tailwind-animatecss')
  ],
}
