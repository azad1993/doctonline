module.exports = {
  theme: {
    borderRadius: {
      DEFAULT: "4px",
      large: "8px",
    },
    extend: {
      colors: {
        green: "#4CB147",
        black: "#101825",
        gray: "#1F2937",
        gray2: "#848B98",
        izzi: {
          light: "#5920bc", // try not to use
          DEFAULT: "#5920BC", // normal
          dark: "#4C13AE", // hover
          darkest: "#3D0A95",
        },
      },
      fontFamily: {
        serif: ["HK Grotesk"],
      },
      variants: ['responsive', 'hover', 'focus','active']
      ,
    },
  },
};
