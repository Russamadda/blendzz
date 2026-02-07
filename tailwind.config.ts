import type { Config } from "tailwindcss";

const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

const config: Config = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        trueGray: colors.neutral,
        brand: {
          bg: "var(--bg)",
          surface: "var(--surface)",
          text: "var(--text)",
          muted: "var(--muted)",
          gold: "var(--gold)",
          "gold-strong": "var(--gold-strong)",
          border: "var(--border)",
        },
      },
      borderRadius: {
        brand: "18px",
      },
      boxShadow: {
        brand: "0 15px 45px rgba(201, 167, 106, 0.18)",
        glow: "0 0 0 2px rgba(201, 167, 106, 0.35)",
      },
    },
    fontFamily: {
      sans: ["var(--font-body)", ...defaultTheme.fontFamily.sans],
      display: ["var(--font-display)", ...defaultTheme.fontFamily.sans],
      stock: [defaultTheme.fontFamily.sans],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
export default config;
