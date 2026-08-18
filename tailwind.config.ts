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
        // Acento quente do hero: puxa o âmbar do logotipo e é a cor que carrega
        // a palavra destacada do título e os botões principais.
        terracotta: {
          DEFAULT: "#b5603a",
          light: "#d08a5f",
          dark: "#8f4a2c",
        },
        cream: {
          DEFAULT: "#f5ede1",
          dark: "#ece0cf",
        },
      },
      fontFamily: {
        // Corpo de texto (padrão) — Poppins
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        // Títulos — Caviar Dreams (auto-hospedada, ver app/layout.tsx). Só 400 e 700.
        title: ["var(--font-title)", "system-ui", "sans-serif"],
        // Subtítulos — Caveat
        script: ["var(--font-script)", "cursive"],
      },
    },
  },
  plugins: [],
};

export default config;
