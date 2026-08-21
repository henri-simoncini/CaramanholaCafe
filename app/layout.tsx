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

/**
 * Endereço público do site, usado para montar as URLs absolutas que as prévias
 * de link exigem. Em produção a Vercel injeta VERCEL_PROJECT_PRODUCTION_URL;
 * quando houver domínio próprio, basta definir NEXT_PUBLIC_SITE_URL.
 */
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

const descricao =
  "Café fresco, pão de queijo quentinho e lanches feitos na hora, em São Pedro da Aldeia. Veja o cardápio completo.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Caramanhola Lanches & Café",
    // As páginas internas viram "Cardápio | Caramanhola Lanches & Café"
    template: "%s | Caramanhola Lanches & Café",
  },
  description: descricao,
  applicationName: "Caramanhola Lanches & Café",
  // Sem isto, o link colado no WhatsApp aparece como texto seco, sem imagem
  // nem título — e é assim que uma cafeteria divulga o endereço.
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Caramanhola Lanches & Café",
    title: "Caramanhola Lanches & Café",
    description: descricao,
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "Caramanhola Lanches & Café",
    description: descricao,
  },
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
