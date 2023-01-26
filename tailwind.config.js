/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
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
        }
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
  darkMode: 'class',
}
