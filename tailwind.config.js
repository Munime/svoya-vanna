module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ["Montserrat Alternates", "sans-serif"],
      latin: ["Space Grotesk", "sans-serif"],
    },
    colors: {
      primary: "#393B44",
      secondary: "#8D93AB",
      sky: "#D6E0F0",
      light: "#F1F3F8",
    },
    extend: {
      lineHeight: {
        12: "3rem",
        14: "3.5rem",
        16: "4rem",
      },
    },
  },
  variants: {
    extend: {
      textDecoration: ["focus-visible"],
      translate: ["motion-safe"],
    },
  },
  plugins: [],
}
