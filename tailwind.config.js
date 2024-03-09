module.exports = {
  content: [
    "./pages/**/*.{html,js}", // Adjusted to include HTML and JS files under the pages directory
    "./assets/js/**/*.{html,js}", // Specifically targeting JS files in the assets/js directory
  ],
  theme: {
    extend: {
      colors: {
        'light-blue': '#ebf8ff', // Light blue for hover states
        'aquatic-blue': '#0077CC',
        'shrimp-red': '#FF4136',
        'seaweed-green': '#2ECC40',
        'sandy-yellow': '#FFDC00',
        'off-white': '#F0F0F0',
      },
    },
  },
  plugins: [],
}

