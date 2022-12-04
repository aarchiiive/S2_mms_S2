/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        't1': "url('../src/templates/template1.jpg')",
        't2': "url('../src/templates/template2.jpg')",
        't3': "url('../src/templates/template3.jpg')",
        't4': "url('../src/templates/template4.jpg')"
      }
    },
  },
  plugins: [],
}
