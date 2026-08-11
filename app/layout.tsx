import type { Metadata } from "next";
import { Caveat, Poppins, Quicksand } from "next/font/google";
import "./globals.css";

/**
 * TÍTULOS — Caviar Dreams
 *
 * A Caviar Dreams não existe no Google Fonts (é distribuída como arquivo
 * avulso), então aqui usamos a Quicksand — geométrica arredondada, o
 * substituto livre mais próximo — até que o arquivo da fonte seja adicionado.
 *
 * Para trocar pela definitiva:
 *   1. salve CaviarDreams.woff2 e CaviarDreams-Bold.woff2 em app/fonts/
 *   2. substitua este bloco por:
 *
 *      import localFont from "next/font/local";
 *      const title = localFont({
 *        src: [
 *          { path: "./fonts/CaviarDreams.woff2", weight: "400", style: "normal" },
 *          { path: "./fonts/CaviarDreams-Bold.woff2", weight: "700", style: "normal" },
 *        ],
 *        variable: "--font-title",
 *        display: "swap",
 *      });
 *
 * Nenhuma outra mudança é necessária: os títulos já usam só os pesos 400 e
 * 700, que são os únicos que a Caviar Dreams tem.
 */
const title = Quicksand({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-title",
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
      className={`${title.variable} ${script.variable} ${body.variable}`}
    >
      <body className="font-sans bg-cream text-coffee antialiased">{children}</body>
    </html>
  );
}
