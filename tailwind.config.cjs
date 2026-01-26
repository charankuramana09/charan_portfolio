module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eef2ff",
          500: "#6366f1",
        },
        accent: {
          500: "#10b981",
        },
      },
      fontFamily: {
        body: ["Inter", "system-ui", "sans-serif"],
        heading: ["Poppins", "ui-sans-serif", "sans-serif"],
      },
      backgroundImage: {
        "gradient-light":
          "linear-gradient(180deg, rgba(249,250,251,1) 0%, rgba(255,255,255,1) 100%)",
        "gradient-dark":
          "linear-gradient(180deg, rgba(15,23,42,1) 0%, rgba(2,6,23,1) 100%)",
      },
      boxShadow: {
        soft: "0 6px 18px rgba(15,23,42,0.06)",
      },
    },
  },
  plugins: [],
};
