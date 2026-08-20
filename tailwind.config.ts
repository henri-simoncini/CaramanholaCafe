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
          // Barra de navegação inferior do mobile: mais clara que o café do
          // texto, para a barra se destacar do rodapé em vez de fundir com ele.
          bar: "#4d2d18",
        },
        /**
         * Cor de acento da marca. Chama-se "brand" e não pelo tom porque já
         * mudou de oliva para caramelo uma vez; o nome sobrevive à próxima.
         *
         * O DEFAULT é o #B28151 escolhido pelo cliente. Ele rende bem como
         * fundo, como preenchimento decorativo e no título gigante do hero,
         * mas sobre o creme dá só 2.94:1 — reprova em AA até para texto
         * grande. Por isso texto pequeno em fundo claro usa `dark`, e texto
         * sobre o café escuro usa `light` ou `lightest`.
         */
        brand: {
          lightest: "#dbb994", // 9.2:1 sobre o café — texto em fundo escuro
          light: "#c9a175", // 7.1:1 sobre o café
          DEFAULT: "#b28151", // fundos, decoração e o título do hero
          dark: "#7f5430", // 5.6:1 sobre o creme; fundo dos botões, branco dá 6.5:1
          darkest: "#6b4628", // hover dos botões — escurece, branco sobe para 8.3:1
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
