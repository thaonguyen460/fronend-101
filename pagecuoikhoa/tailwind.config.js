module.exports = {
  mode: 'jit',
  purge: [
    "**/*.html"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      'body': ["'Inter', sans-serif;"]
    },

    extend: {
      colors: {
        'brand-purple': {
            DEFAULT: '#8C30F5',
            800: '#D6B1FF',
            200: '#D5FAFC',
            100: '#F4F5F7',
            500: '#0B0D17'
        }
      },
      fontSize: {
        'h1': [ "72px", "98px"]
      }  
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}