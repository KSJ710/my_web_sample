/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        lusi: ['Lusitana']
      },
      colors: {
        main: '#007B43'
      }
    },
    container: {
      center: true
    },
    screens: {
      sm: '540px',
      // => @media (min-width: 540px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px'
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      white: '#FFFFFF',
      black: '#000000',
      main: '#007B43',
      accent: '#EDBA19',
      subaccent: '#ED6447',
      success: '#119DAD',
      danger: '872225'
    }
  },
  variants: {
    extend: {}
  },
  plugins: [],
  important: true
}
