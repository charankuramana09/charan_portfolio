/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Single signature brand system (indigo → violet → cyan)
        brand: {
          50: "#eef2ff",
          100: "#e0e7ff",
          200: "#c7d2fe",
          300: "#a5b4fc",
          400: "#818cf8",
          500: "#6366f1",
          600: "#4f46e5",
          700: "#4338ca",
          800: "#3730a3",
          900: "#312e81",
        },
        accent: {
          400: "#22d3ee", // cyan
          500: "#06b6d4",
        },
        violet: {
          400: "#a78bfa",
          500: "#8b5cf6",
        },
        ink: {
          DEFAULT: "#0b1020",
          soft: "#111729",
        },
      },
      fontFamily: {
        body: ["Inter", "system-ui", "sans-serif"],
        heading: ["Sora", "Poppins", "ui-sans-serif", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        glass: "0 8px 32px rgba(2, 6, 23, 0.10)",
        "glass-lg": "0 24px 64px -16px rgba(2, 6, 23, 0.22)",
        glow: "0 0 40px -8px rgba(99, 102, 241, 0.45)",
        "glow-cyan": "0 0 40px -8px rgba(34, 211, 238, 0.45)",
      },
      backgroundImage: {
        "brand-gradient":
          "linear-gradient(120deg, #6366f1 0%, #8b5cf6 45%, #22d3ee 100%)",
        "mesh-dark":
          "radial-gradient(60% 60% at 20% 10%, rgba(99,102,241,0.16) 0%, transparent 60%), radial-gradient(50% 50% at 90% 20%, rgba(139,92,246,0.14) 0%, transparent 55%), radial-gradient(60% 60% at 50% 100%, rgba(34,211,238,0.10) 0%, transparent 60%)",
        "mesh-light":
          "radial-gradient(60% 60% at 20% 10%, rgba(99,102,241,0.10) 0%, transparent 60%), radial-gradient(50% 50% at 90% 20%, rgba(139,92,246,0.08) 0%, transparent 55%), radial-gradient(60% 60% at 50% 100%, rgba(34,211,238,0.07) 0%, transparent 60%)",
      },
      keyframes: {
        aurora: {
          "0%, 100%": { transform: "translate(0,0) scale(1)", opacity: "0.55" },
          "33%": { transform: "translate(4%, -6%) scale(1.12)", opacity: "0.75" },
          "66%": { transform: "translate(-5%, 4%) scale(0.95)", opacity: "0.6" },
        },
        floaty: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
        gradientpan: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "spin-slow": {
          to: { transform: "rotate(360deg)" },
        },
        progressbar: {
          from: { width: "0%" },
          to: { width: "100%" },
        },
      },
      animation: {
        aurora: "aurora 18s ease-in-out infinite",
        floaty: "floaty 6s ease-in-out infinite",
        marquee: "marquee 32s linear infinite",
        shimmer: "shimmer 2.2s infinite",
        gradientpan: "gradientpan 6s ease infinite",
        "spin-slow": "spin-slow 22s linear infinite",
        progressbar: "progressbar 7s linear forwards",
      },
    },
  },
  plugins: [],
};
