module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./slices/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        default: "#37474F",
      },
      boxShadow: {
        ServiceCard: "2px 4px 10px 2px rgba(55, 71, 79, 0.3)",
        realisationCard:
          "0.970276px 1.94055px 4.85138px rgba(55, 71, 79, 0.3);",
      },
      dropShadow: {
        contact: "0px 4px 4px rgba(55, 71, 79, 0.42)",
      },
      backgroundImage: {
        "hero-service": "url('/assets/background/vector.svg')",
      },
    },
  },
  plugins: [],
};
