/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      fontFamily: {
        Pop: ["var(--font-Pop)", "sans-serif"],
        Montser: ["var(--font-montser)", "sans-serif"],
      },
      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#863E96",
        primaryDark: "#58E6D9",
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
      },

      backgroundImage: {
        circularLight:
          "repeating-radial-gradient(rgba(0,0,0,0.5),2px, #f5f5f5 5px,#f5f5f5 100px);",
          circularDark:
          "repeating-radial-gradient(rgba(0,0,0,0.4),2px, #1b1b1b 5px,#1b1b1b 100px);",
      },
    },
  },
  plugins: [],
};
