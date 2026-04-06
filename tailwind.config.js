module.exports = {
  content: [
    "./index.html",
    "./about/**/*.html",
    "./cinet/**/*.html",
    "./gallery/**/*.html",
    "./partials/**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          50: "#f6f8f4",
          100: "#e9efe4",
          200: "#d3dfca",
          300: "#b4c8ac",
          400: "#8daa85",
          500: "#6e8f67",
          600: "#56724f",
          700: "#445b3f",
          800: "#394b35",
          900: "#313f2e"
        },
        sand: {
          50: "#fdfbf7",
          100: "#f8f2e7",
          200: "#f1e4cb",
          300: "#e8d3a7",
          400: "#ddbb79",
          500: "#d1a257",
          600: "#bf8846",
          700: "#9f6b39",
          800: "#835733",
          900: "#6b492d"
        }
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.08)"
      }
    }
  },
  plugins: []
};