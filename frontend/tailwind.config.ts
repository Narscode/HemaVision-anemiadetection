import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0284c7", // primary interaction blue
          600: "#0369a1",
          700: "#075985",
          800: "#0c4a6e",
          900: "#0a3654",
          950: "#082f49",
        },
        clinical: {
          teal: "#0f766e",
          slate: "#1e293b",
          light: "#f8fafc",
          border: "#e2e8f0",
        },
        risk: {
          low: {
            bg: "#ecfdf5",
            text: "#047857",
            border: "#a7f3d0",
          },
          moderate: {
            bg: "#fffbebfb",
            text: "#b45309",
            border: "#fde68a",
          },
          high: {
            bg: "#fef2f2",
            text: "#b91c1c",
            border: "#fecaca",
          },
          inconclusive: {
            bg: "#f1f5f9",
            text: "#475569",
            border: "#cbd5e1",
          },
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};

export default config;
