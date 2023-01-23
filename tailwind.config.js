/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html"],
  theme: {
    extend: {
      colors: {
        'body-bg': '#f7f8fa',
        'nav-header': '#0a71c6',
        'profile': '#41a4f5',
        'hire-btn': '#b8d4ea'
      },
       backgroundImage: {
        'weeve': "url('WEEVE LOGO 6 ADJ 1.png')",
        'autoproctor': "url('autoproctor.svg')"
       }
    },
  },
  plugins: [
    require('tailwind-animatecss')
  ],
}
