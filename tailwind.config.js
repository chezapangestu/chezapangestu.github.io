/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    // spacing:{
    //   'res-y': '7%',
    //   'res-md-y': '5%',
    //   'res-sm-y': '2%',
    //   'res-x': '15%',
    //   'res-md-x': '13%',
    //   'res-sm-x': '10%'
    // },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
  darkMode: 'class',
}
