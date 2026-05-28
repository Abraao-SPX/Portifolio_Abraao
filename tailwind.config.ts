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
        background: "#080b12",
        surface: "#0e1219",
        surfaceHover: "#141824",
        primary: "#e0e6f0",
        secondary: "#6b7fa0",
        muted: "#3a4a60",
      },
      backgroundImage: {
        noisy: "url('/noise.png')",
      },
    },
  },
  plugins: [],
};
export default config;
