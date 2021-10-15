module.exports = {
  mode: 'jit',
  purge: [
    "**/*.html"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true
    },
    fontFamily: {
      'body': ["'Inter', sans-serif;"]
    },

    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}