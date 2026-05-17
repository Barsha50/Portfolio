/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Cabinet Grotesk"', "sans-serif"],
        sans: ['"Outfit"', "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      colors: {
        ink: {
          950: "#050505",
          900: "#0a0a0a",
          800: "#121212",
          700: "#1a1a1a",
        },
        pink: {
          DEFAULT: "#FF107A",
          deep: "#E6007A",
          soft: "#FFA3D4",
        },
      },
    },
  },
  plugins: [],
};
