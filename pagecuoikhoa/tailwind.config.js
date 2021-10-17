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
            500: '#0B0D17',
            600: '#18191F',
            400: '#474A57'
        }
      },
      fontSize: {
        'h1': [ "72px", "98px"],
        'h2': ["48px", "64px"],
        'h3': ["40px", "54px"],
        'h4': ["24px", "32px"],
        'h5':["18px", "28px"],
        'p':["16px", "24px"],
      },
      width: {
        1024: '1024px'
      },
      height: {
        1024: '1024px'
      },
      
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}