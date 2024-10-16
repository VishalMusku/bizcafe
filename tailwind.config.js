// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gradientStart: '#A2C2E6', // Light Sky Blue
        gradientEnd: '#D9D9D9',   // Light Gray
        buttonGradientStart: '#6B7C93', // Soft Blue
        buttonGradientEnd: '#FFB74D', // Soft Gold
      },
    },
  },
  plugins: [],
}
