/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter-Bureau', 'sans-serif'], // Define custom text font
        serif: ['Suez One', 'serif'], // Define custom heading font
      },
      colors: {
        primary: '#ff0000', // Define a custom primary color
      },
      // Add more custom CSS variables as needed
    },
  },
  plugins: [],
}
