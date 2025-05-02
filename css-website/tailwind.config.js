/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        carletonRed: '#E91C24',
        darkGray: '#121212',
        mediumGray: '#1E1E1E',
        lightGray: '#2A2A2A',
        white: '#FFFFFF',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'space': ['Space Grotesk', 'sans-serif'],
      },
    }
  },
  plugins: [],
}
