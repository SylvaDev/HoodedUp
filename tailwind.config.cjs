/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        hooded: {
          midnight: "#0B0A4F",
          electric: "#1E7BFF",
          neon: "#23E6FF",
          charcoal: "#050510",
          ice: "#E6ECF5",
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)"],
        body: ["var(--font-body)"],
      },
      boxShadow: {
        glow: "0 0 0.75rem rgba(35, 230, 255, 0.45)",
        glowStrong: "0 0 1.25rem rgba(35, 230, 255, 0.65)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
};