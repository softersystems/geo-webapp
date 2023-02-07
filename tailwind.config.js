/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        dropcap: [
          "4rem",
          {
            float: "left",
            lineHeight: "4.8rem",
          },
        ],
        "3xl": [
          "1.875rem",
          {
            lineHeight: "2.25rem",
            letterSpacing: "-0.02em",
            fontWeight: "700",
          },
        ],
      },
      colors: {
        "dark-brown-grey": "#624F54",
        "lighter-brown-grey": "#2B2324",
        "layers-pink": "#F2ACB3",
        "layers-pink-light": "#FDC6CC",
      },
      backgroundImage: {
        "logo-gradient":
          "radial-gradient(43.57% 47.2% at 96.26% 87.08%, rgb(97 0 255 / 8%) 6.42%, rgba(255, 255, 255, 0.2) 82.47%), linear-gradient(191.87deg, #f5aabc 9.02%, #87FDD2 152.67%)",
        "title-gradient":
          "linear-gradient(90.69deg, #C3CEC9 26.71%, #C2A3C6 121.52%)",
        "white-planet": "url('/logo-white.svg')",
      },
    },
  },
  plugins: [],
};
