/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#102A56",
        "deep-navy": "#0A1930",
        ink: "#07111F",
        accent: "#C9A25B",
        "accent-strong": "#A87E34",
        "light-bg": "#F5F7FA",
        "body-text": "#344054",
        "subtle-border": "#E3E8EF",
        muted: "#64748B",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-manrope)", "var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        soft: "0 22px 50px -34px rgba(7, 17, 31, 0.4)",
        lift: "0 36px 80px -46px rgba(7, 17, 31, 0.55)",
      },
    },
  },
  plugins: [],
}
