// tailwind.config.js
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-strong': '0px 0px 5px 0px rgba(0, 0, 0, 0.75)',
        'search-boxshadow' : '0px 0px 5px 0px rgba(26,26,26,1)'
      },
    },
  },
  plugins: [],
}
