/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'custom-pink':'#fd36df'
      },
      fontFamily:{
        shopify:['Mystery']
      },
    },
  },
  plugins: [],
}