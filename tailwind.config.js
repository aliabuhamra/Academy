module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors:{
      'orange' : '#FBD675',
      'white': '#ffffff',
      'black': '#000000',
    },
    extend: {
      backgroundImage: {
        'background': "url('../public/assets/images/map.svg')",
      }
    },
  },
  plugins: [],
}
