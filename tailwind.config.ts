import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-display)", "sans-serif"],
        display: ["var(--font-display)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      colors: {
        background: "#FAFAF8",
        surface: "#FFFFFF",
        surfaceAlt: "#F2F0EC",
        surfaceHover: "#F5F3EF",
        border: "#E8E5DF",
        borderHover: "#D4D0C8",
        primary: "#1A1814",
        secondary: "#6B665C",
        muted: "#A8A299",
        accent: "#4338CA",
        accentLight: "#6366F1",
        coral: "#E85D4A",
        coralLight: "#F08573",
        elegant: "#059669",
        elegantLight: "#10B981",
      },
    },
  },
  plugins: [],
};
export default config;
