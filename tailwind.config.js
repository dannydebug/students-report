module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.vue"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: "#4c55a5",
        copy: "#2c3e50"
      },
      fontFamily: {
        sans: "Gotham, Helvetica, Arial, sans-serif"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
