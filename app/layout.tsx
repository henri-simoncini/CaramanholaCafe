import type { Metadata } from "next";
import { Caveat, Montserrat, Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

/**
 * TÍTULOS — Caviar Dreams
 *
 * Auto-hospedada: a fonte não existe no Google Fonts. Os .woff2 em app/fonts/
 * foram convertidos dos .ttf originais (62% menores) e são servidos pelo
 * próprio domínio, sem requisição externa.
 *
 * Só existem os pesos 400 e 700 — a família não tem intermediários, então
 * evite font-semibold (600) em títulos: o navegador simularia o peso e o
 * traço sairia deformado.
 */
const title = localFont({
  src: [
    { path: "./fonts/CaviarDreams-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/CaviarDreams-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-title",
  display: "swap",
});

/**
 * TÍTULO DO HERO — Montserrat Black
 *
 * Só o peso 900. A Caviar Dreams continua nos demais títulos: ela é leve e
 * aberta demais para o tipo gigante do hero, onde o modelo pede peso.
 */
const display = Montserrat({
  subsets: ["latin"],
  weight: ["900"],
  variable: "--font-display",
  display: "swap",
});

// SUBTÍTULOS — Caveat (manuscrita, conversa com o "café" cursivo do logotipo)
const script = Caveat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-script",
  display: "swap",
});

// CORPO DE TEXTO — Poppins
const body = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Caramanhola Lanches & Café",
  description:
    "O sabor que acompanha seus melhores momentos. Cafés, lanches e doces feitos com carinho na Caramanhola.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${display.variable} ${title.variable} ${script.variable} ${body.variable}`}
    >
      <body className="font-sans bg-cream text-coffee antialiased">{children}</body>
    </html>
  );
}
