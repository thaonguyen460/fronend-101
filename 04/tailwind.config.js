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
        "body": "'Inter', sans-serif"
    },
    extend: {
        width: {
          1200: '1200px'
        },
        height: {
          1200: '1200px'
        },
        colors: {
          'brand-purple': {
              DEFAULT: '#8C30F5',
              800: '#D6B1FF'
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