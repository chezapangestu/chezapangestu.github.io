/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      "fontFamily":{
        "circular": ["CircularStd", "sans-serif"],
        "mark": ["MarkPro", "sans-serif"],
        "montserrat": ["Montserrat", "sans-serif"]
      },
      "colors": {
        "gold": {
          50: "#FFFAEB",
          100: "#FFF5D6",
          200: "#FFE9A8",
          300: "#FFDF80",
          400: "#FFD452",
          500: "#FFCA28",
          600: "#EBB000",
          700: "#B38600",
          800: "#755800",
          900: "#3D2E00"
        },
        "night": {
          50: "#E3E3EE",
          100: "#C6C6DC",
          200: "#8A8AB7",
          300: "#57578E",
          400: "#343455",
          500: "#10101A",
          600: "#0E0E16",
          700: "#0A0A10",
          800: "#060609",
          900: "#040406"
        }
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
  darkMode: 'class',
}
