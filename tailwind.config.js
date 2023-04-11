/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue'
  ],
  theme: {
    extend: {
      fontSize: {
        xs: 14,
        sm: 16,
        md: 18,
        lg: 20,
        xl: 24,
        '2xl': 32
      },

      colors: {
        transparent: 'transparent',

        black: '#000',
        white: '#FFF',

        primary: {
          500: '#00DC82',
          300: '#06B26C'
        },

        secondary: {
          900: '#121214',
          800: '#202024',
          400: '#7C7C8A',
          200: '#C4C4CC',
          100: '#E1E1E6'
        }
      },

      extend: {
        fontFamily: {
          sans: 'Roboto, sans-serif'
        }
      }
    }
  },
  plugins: []
}
