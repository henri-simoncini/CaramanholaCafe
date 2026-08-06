export const siteConfig = {
  name: "Caramanhola",
  fullName: "Caramanhola Lanches & Café",
  tagline: "Lanches & café",
  slogan: "O sabor que acompanha seus melhores momentos.",
  // Placeholder — trocar pelo número real do WhatsApp da loja.
  whatsappNumber: "5511999998888",
  whatsappMessage: "Olá! Vim pelo site da Caramanhola e gostaria de mais informações.",
  address: "Rua das Flores, 123 — Centro, São Paulo/SP",
  // Placeholder — trocar pelo link real do Google Maps da loja.
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Rua+das+Flores+123+Sao+Paulo",
  instagramUrl: "https://instagram.com/caramanhola",
  facebookUrl: "https://facebook.com/caramanhola",
  hours: [
    { days: "Segunda a sexta", time: "7h às 19h" },
    { days: "Sábado", time: "7h às 14h" },
    { days: "Domingo", time: "Fechado" },
  ],
};

export function whatsappLink(message?: string) {
  const text = encodeURIComponent(message ?? siteConfig.whatsappMessage);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`;
}
