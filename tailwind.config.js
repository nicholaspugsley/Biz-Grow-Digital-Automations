module.exports = {
  content: [
    "./*.{html,js}", // Adjusted to include HTML and JS files under the pages directory
    "./pages/**/*.{html,js}", // Adjusted to include HTML and JS files under the pages directory
    "./assets/js/**/*.{html,js}", // Specifically targeting JS files in the assets/js directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

