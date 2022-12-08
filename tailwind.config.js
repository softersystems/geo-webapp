/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-brown-grey": "#221c1c",
        "layers-pink": "#F2ACB3",
        "layers-pink-light": "#FDC6CC",
      },
    },
  },
  plugins: [],
};
