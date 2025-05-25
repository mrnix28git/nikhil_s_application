module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: {
          DEFAULT: '#6a0dad',
          light: '#ad13ca',
          dark: '#34243b',
          medium: '#501a77'
        },
        pink: {
          DEFAULT: '#cc2d74',
          dark: '#c92872'
        },
        gold: '#ffcc22',
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
        'card': '4px 5px 12px #6a0dad'
      }
    },
  },
  plugins: [],
}