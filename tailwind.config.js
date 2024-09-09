/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{html,js}",
  ],
  theme: {
    colors : {
      cyan : {
        300 : '##8FE3F9',
        600 : '#4D96A9'
      },
      purple : {
        300 : "#D9B8FF",
        600 : '#855FB1'
      },
      slate : {
        300 : '#D1D1DF',
        600 : '#87879D',
        900 : '#28283D'
      },
      white : '#FAFAFA',
    },
    fontFamily : {
      redhat : ['Red Hat Display', 'sans']
    },
    fontSize: {
      'preset-1': ['64px', {
        lineHeight: '110%', // 110% of 64px = 70.4px
        letterSpacing: '0px',
        fontWeight: '900',  // Black font weight
      }],
      'preset-2' : [ '40px', {
        lineHeight : '110%',
        letterSpacing : '0px',
        fontWeight : '900',
      }],
      'preset-3' : ['16px', {
        lineHeight : '110%',
        letterSpacing : '4px',
        fontWeight : '900',
      }],
      'preset-4' : ['18px', {
        lineHeight : '150%',
        letterSpacing : '0px',
        fontWeight : '700',
      }],
      'preset-5' : ['16px', {
        lineHeight : '150%',
        letterSpacing : '0px',
        fontWeight : '900',
      }],
    },
    extend: {
      // backgroundImage: {
      //   'mobile': "linear-gradient(rgba(77, 150, 169, 0.9), rgba(77, 150, 169, 0.9)), url('./assets/img/mobile/image-footer.jpg')",
      //   'tablet': "linear-gradient(rgba(77, 150, 169, 0.9), rgba(77, 150, 169, 0.9)), url('./assets/img/tablet/image-footer.jpg')",
      //   'desktop': "linear-gradient(rgba(77, 150, 169, 0.9), rgba(77, 150, 169, 0.9)), url('./assets/img/desktop/image-footer.jpg')",
      // }
    },
  },
  plugins: [],
}

