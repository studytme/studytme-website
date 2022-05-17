const { defaultStyles } = require("./src/styles/default-styles");

module.exports = {
  ...defaultStyles,
  content: ["./src/**/*.{ts,tsx}"],
  plugins: [],
};
