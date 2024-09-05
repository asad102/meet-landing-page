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
        'mobile': "linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/assets/img/mobile/image-footer.jpg')",
        'tablet': "linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/assets/img/tablet/image-footer.jpg')",
        'desktop': "linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/assets/img/desktop/image-footer.jpg')",
        'custom-dual' : "url('/assets/img/desktop/image-hero-left.png'), url('/assets/img/desktop/image-hero-right.png')",
      }
    },
  },
  plugins: [],
}

