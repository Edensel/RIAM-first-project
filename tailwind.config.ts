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
        background: "rgb(var(--background) / <alpha-value>)",
        foreground: "rgb(var(--foreground) / <alpha-value>)",
        primary: "rgb(var(--primary) / <alpha-value>)",
        "primary-light": "rgb(var(--primary-light) / <alpha-value>)",
        "primary-dark": "rgb(var(--primary-dark) / <alpha-value>)",
        secondary: "rgb(var(--secondary) / <alpha-value>)",
        "secondary-light": "rgb(var(--secondary-light) / <alpha-value>)",
        accent: "rgb(var(--accent) / <alpha-value>)",
        neutral: {
          50: "rgb(var(--neutral-50) / <alpha-value>)",
          100: "rgb(var(--neutral-100) / <alpha-value>)",
          200: "rgb(var(--neutral-200) / <alpha-value>)",
          300: "rgb(var(--neutral-300) / <alpha-value>)",
          400: "rgb(var(--neutral-400) / <alpha-value>)",
          500: "rgb(var(--neutral-500) / <alpha-value>)",
          600: "rgb(var(--neutral-600) / <alpha-value>)",
          700: "rgb(var(--neutral-700) / <alpha-value>)",
          800: "rgb(var(--neutral-800) / <alpha-value>)",
          900: "rgb(var(--neutral-900) / <alpha-value>)",
        },
        success: "rgb(var(--success) / <alpha-value>)",
        warning: "rgb(var(--warning) / <alpha-value>)",
        error: "rgb(var(--error) / <alpha-value>)",
        info: "rgb(var(--info) / <alpha-value>)",
        border: "rgb(var(--border) / <alpha-value>)",
      },
      borderRadius: {
        DEFAULT: "var(--radius)",
      },
      boxShadow: {
        sm: "var(--shadow-sm)",
        DEFAULT: "var(--shadow)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
        soft: "0 24px 70px rgba(31, 97, 141, 0.14)"
      },
      typography: {
        DEFAULT: {
          css: {
            color: "rgb(var(--foreground))",
            a: {
              color: "rgb(var(--primary))",
              "&:hover": {
                color: "rgb(var(--primary-light))",
              },
            },
            h1: {
              color: "rgb(var(--foreground))",
              fontWeight: "700",
            },
            h2: {
              color: "rgb(var(--foreground))",
              fontWeight: "600",
            },
            h3: {
              color: "rgb(var(--foreground))",
              fontWeight: "600",
            },
            strong: {
              color: "rgb(var(--foreground))",
            },
            code: {
              color: "rgb(var(--primary))",
              backgroundColor: "rgb(var(--neutral-100))",
            },
          },
        },
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in",
        "slide-in": "slideIn 0.5s ease-out",
        "bounce-slow": "bounce 2s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideIn: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    }
  },
  plugins: []
};

export default config;
