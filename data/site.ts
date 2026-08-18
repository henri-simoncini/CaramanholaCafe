export const siteConfig = {
  name: "Caramanhola",
  fullName: "Caramanhola Lanches & Café",
  tagline: "Lanches & café",
  slogan: "O sabor que acompanha seus melhores momentos.",
  // Formato exigido pelo wa.me: só dígitos, com país (55) e DDD (22), sem
  // espaços nem traços.
  whatsappNumber: "5522988272205",
  // Mesmo número, formatado para leitura humana.
  whatsappDisplay: "(22) 98827-2205",
  whatsappMessage: "Olá! Vim pelo site da Caramanhola e gostaria de mais informações.",
  address: "R. Silva Jardim, 1001 — Campo Redondo, São Pedro da Aldeia/RJ",
  cep: "28942-206",
  // Query usada no embed e no link do mapa. Fica separada do texto exibido
  // porque o CEP e o "Brasil" ajudam o Google a cravar o ponto certo.
  mapsQuery: "R. Silva Jardim, 1001, Campo Redondo, São Pedro da Aldeia - RJ, 28942-206, Brasil",
  instagramHandle: "@caramanholacafe",
  instagramUrl: "https://instagram.com/caramanholacafe",
  facebookUrl: "https://facebook.com/caramanholacafe",
  hours: [
    { days: "Segunda a sábado", time: "7h30 às 19h30" },
    { days: "Domingo", time: "Fechado" },
  ],
  // Versão curta para a barra do hero e o rodapé do cardápio, que não têm
  // espaço para a tabela inteira. Fica aqui para não repetir o horário
  // solto em três arquivos e ele acabar divergindo.
  hoursShort: "Seg a sáb, 7h30 às 19h30",
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
