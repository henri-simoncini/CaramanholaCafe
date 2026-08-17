export const siteConfig = {
  name: "Caramanhola",
  fullName: "Caramanhola Lanches & Café",
  tagline: "Lanches & café",
  slogan: "O sabor que acompanha seus melhores momentos.",
  // Placeholder — trocar pelo número real do WhatsApp da loja.
  whatsappNumber: "5511999998888",
  whatsappMessage: "Olá! Vim pelo site da Caramanhola e gostaria de mais informações.",
  // O logradouro ("Rua das Flores, 123") ainda é placeholder — só a cidade está
  // correta. Trocar pelo endereço real da loja.
  address: "Rua das Flores, 123 — Centro, São Pedro da Aldeia/RJ",
  cep: "28940-000",
  // Query usada no embed e no link do mapa. Fica separada do texto exibido
  // porque o CEP e o "Brasil" ajudam o Google a acertar a cidade — sem eles
  // "Rua das Flores" cai em qualquer uma das centenas de ruas homônimas.
  mapsQuery: "Centro, São Pedro da Aldeia - RJ, 28940-000, Brasil",
  instagramUrl: "https://instagram.com/caramanhola",
  facebookUrl: "https://facebook.com/caramanhola",
  hours: [
    { days: "Segunda a sexta", time: "7h às 19h" },
    { days: "Sábado", time: "7h às 14h" },
    { days: "Domingo", time: "Fechado" },
  ],
};

/** Link "Ver no Google Maps" (abre o app/site do Maps). */
export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  siteConfig.mapsQuery
)}`;

/** Iframe do mapa embutido na seção de contato. */
export const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
  siteConfig.mapsQuery
)}&output=embed`;

export function whatsappLink(message?: string) {
  const text = encodeURIComponent(message ?? siteConfig.whatsappMessage);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`;
}
