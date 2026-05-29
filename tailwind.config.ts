import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif"
        ]
      },
      colors: {
        ink: "#102a2e",
        graphite: "#263638",
        bone: "#faf6ed",
        paper: "#fffdf7",
        forest: "#183727",
        teal: "#075267",
        leaf: "#7a9b54",
        gold: "#f1c857",
        clay: "#c86639"
      },
      boxShadow: {
        soft: "0 24px 70px rgba(16, 42, 46, 0.14)"
      }
    }
  },
  plugins: []
};

export default config;
