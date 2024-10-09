const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");
const svgToDataUri = require("mini-svg-data-uri");

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(Object.entries(allColors).map(([key, val]) => [`--${key}`, val]));

  addBase({
    ":root": newVars,
  });
}

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Merged content paths for both JavaScript and TypeScript files
  darkMode: "class", // Include dark mode class
  theme: {
    extend: {}, // Extend if you have custom theme settings later
  },
  plugins: [
    addVariablesForColors, // Existing plugin for adding CSS variables for colors
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "bg-grid": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
        },
        { values: theme("backgroundColor"), type: "color" }
      );
    },
  ],
};
