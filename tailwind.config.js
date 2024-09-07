/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.html",
  ],
  theme: {
    colors : {
      white : '#fff',
    },
    fontFamily : {
      redhat : ['Red Hat Display', 'sans']
    },
    extend: {
      backgroundImage: {
        'mobile': "linear-gradient(rgba(77, 150, 169, 0.9), rgba(77, 150, 169, 0.9)), url('/assets/img/mobile/image-footer.jpg')",
        'tablet': "linear-gradient(rgba(77, 150, 169, 0.9), rgba(77, 150, 169, 0.9)), url('/assets/img/tablet/image-footer.jpg')",
        'desktop': "linear-gradient(rgba(77, 150, 169, 0.9), rgba(77, 150, 169, 0.9)), url('/assets/img/desktop/image-footer.jpg')",
      }
    },
  },
  plugins: [],
}

