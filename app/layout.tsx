import type { Metadata } from "next";
import { Caveat, Montserrat, Poppins } from "next/font/google";
import "./globals.css";

/**
 * TÍTULOS — Montserrat
 *
 * Uma única família para todos os títulos: 900 no hero, 700 nos demais. A
 * Caviar Dreams foi removida daqui (e os .woff2 de app/fonts/ junto), o que
 * de quebra encerra a dúvida de licença comercial que ela carregava.
 */
const title = Montserrat({
  subsets: ["latin"],
  weight: ["700", "900"],
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
