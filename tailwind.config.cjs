module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Manrope'],
      },
      colors: {
        basecolor: '#08131D',
        primarycolor: '#00dc96',
        secondarycolor: '#08131D',
        black100color: '#151515'
      },
      screens: {
        'proseriesLandscape': '900px',
        'proseries': '400px'
      },
    },
  },
  plugins: [],
}
