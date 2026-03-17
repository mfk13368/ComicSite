/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        comic: {
          yellow: '#FFDE03',
          red: '#FF0000',
          blue: '#0336FF',
          green: '#4CAF50',
          orange: '#FF9800',
          paper: '#FDFCF0',
        }
      },
      boxShadow: {
        'comic': '8px 8px 0px 0px rgba(0,0,0,1)',
        'comic-sm': '4px 4px 0px 0px rgba(0,0,0,1)',
        'comic-lg': '12px 12px 0px 0px rgba(0,0,0,1)',
      },
      borderWidth: {
        '3': '3px',
        '6': '6px',
      }
    },
  },
  plugins: [],
}
