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
        // Cor de acento da marca. Os três tons do meio vieram do cliente e
        // formam uma rampa da mesma cor — por isso substituíram o oliva
        // esverdeado antigo (#6b7a4a) em vez de conviver com ele: dois verdes
        // parecidos na mesma página leem como erro, não como paleta.
        olive: {
          // Só para texto sobre o café escuro: o DEFAULT ali dá contraste 2.6:1
          // e fica ilegível.
          lightest: "#c6b98d",
          light: "#8c7f4e",
          DEFAULT: "#71663d",
          dark: "#5d532d",
          darkest: "#4e472b",
        },
        cream: {
          DEFAULT: "#f5ede1",
          dark: "#ece0cf",
        },
      },
      fontFamily: {
        // Corpo de texto (padrão) — Poppins
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        // Títulos — Montserrat: 900 no hero, 700 nos demais
        title: ["var(--font-title)", "system-ui", "sans-serif"],
        // Subtítulos — Caveat
        script: ["var(--font-script)", "cursive"],
      },
    },
  },
  plugins: [],
};

export default config;
