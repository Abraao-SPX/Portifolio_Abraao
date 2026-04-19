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
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-syne)", "sans-serif"],
      },
      colors: {
        background: "#050505",
        surface: "#111111",
        surfaceHover: "#181818",
        primary: "#ffffff",
        secondary: "#a1a1aa",
        accent: "#ffffff",
      },
      backgroundImage: {
        'noisy': "url('/noise.png')",
      }
    },
  },
  plugins: [],
};
export default config;

