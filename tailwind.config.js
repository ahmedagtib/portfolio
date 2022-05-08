module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode:'class',
  theme: {
    extend: {
      colors: {
        'primary' : '#282747',
        'gold'    : '#fec803'
      },
      fontFamily: {
        'latino': ['Merriweather','serif'],
        'arbic' : ['Noto Naskh Arabic','serif']
      }
    },
  },
  plugins: [],
}