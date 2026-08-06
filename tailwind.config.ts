import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        coffee: {
          DEFAULT: "#2b1810",
          light: "#3d241a",
        },
        olive: {
          DEFAULT: "#6b7a4a",
          light: "#8a9a63",
          dark: "#556138",
        },
        cream: {
          DEFAULT: "#f5ede1",
          dark: "#ece0cf",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
