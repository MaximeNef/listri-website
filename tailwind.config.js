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
        default: "#6E6E73",
        darkBlue: "#283445",
        orangeLight: "#F8A65E",
        rougeLight: "#FC1E60",
        saumon: "#F36F5F",
        lightGrey: "#F5F5F7",
      },
      backdropFilter: {
        none: "none",
        blur: "blur(20px)",
      },
      boxShadow: {
        ServiceCard: "2px 4px 10px 2px rgba(55, 71, 79, 0.3)",
        realisationCard: "2px 4px 16px rgb(0 0 0 / 10%)",
        blog: "3px 4px 10px 1px rgba(37, 37, 37, 0.05)",
        client: "3px 4px 10px 1px rgba(37, 37, 37, 0.1)",
        clientss: "1px 1px 22px 0px  rgba(0, 0, 0, 0.1)",
        apple: "2px 4px 16px rgb(0 0 0 / 12%)",
        business: "0 -4px 25px 0 rgba(37, 37, 37, 0.2);",
        slider: "2px 4px 12px rgba(0, 0, 0, 0.08)",
      },
      dropShadow: {
        contact: "0px 4px 4px rgba(55, 71, 79, 0.42)",
        shadow: "0 -4px 25px 0 rgba(37, 37, 37, 0.2);",
      },
      backgroundImage: {
        "hero-service": "url('/assets/background/vector.svg')",
      },
    },
  },
  plugins: [],
};
