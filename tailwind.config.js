module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: {
          DEFAULT: '#f52d59',        // updated to your red-pink
          light: '#fdc56c',          // updated to your yellow-orange
          dark: '#c01c3f',           // deeper tone of #f52d59
          medium: '#e52c50'          // slightly deeper mid variant
        },
        pink: {
          DEFAULT: '#fdc56c',        // updated to your orange-yellow
          dark: '#e4b159'            // a darker tone of fdc56c
        },
        gold: '#ffcc22',             // unchanged (still usable)
        black: {
          DEFAULT: '#000000',
          light: '#1e293b'
        }
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        caudex: ['Caudex', 'serif'],
        opensans: ['Open Sans', 'sans-serif']
      },
      boxShadow: {
        'custom': '0px 5px 5px rgba(66, 133, 244, 0.3)',
        'card': '4px 5px 12px #f52d59' // updated to match new purple default
      }
    },
  },
  plugins: [],
}
