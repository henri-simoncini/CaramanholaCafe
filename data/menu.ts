export type CategoryId = "cafes" | "salgados" | "doces" | "bebidas" | "combos";

export interface Category {
  id: CategoryId;
  label: string;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: CategoryId;
  // Placeholder do Unsplash — trocar pela foto real do produto antes de publicar.
  image: string;
  featured?: boolean;
  popularRank?: number;
  // Aparece na prévia de destaques da landing page (seção "Cardápio")
  highlight?: boolean;
}

export const categories: Category[] = [
  { id: "cafes", label: "Cafés" },
  { id: "salgados", label: "Salgados" },
  { id: "doces", label: "Doces" },
  { id: "bebidas", label: "Bebidas" },
  { id: "combos", label: "Combos" },
];

export const menuItems: MenuItem[] = [
  // Cafés
  {
    id: "cappuccino-tradicional",
    name: "Cappuccino Tradicional",
    description: "Espresso encorpado, leite vaporizado e uma camada generosa de espuma cremosa.",
    price: 12,
    category: "cafes",
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=80",
    popularRank: 1,
    highlight: true,
  },
  {
    id: "espresso",
    name: "Espresso",
    description: "Extração curta e intensa, direto do grão torrado na casa.",
    price: 7,
    category: "cafes",
    image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "latte",
    name: "Latte",
    description: "Café suave com bastante leite vaporizado e um toque de arte no topo.",
    price: 13.5,
    category: "cafes",
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "mocha",
    name: "Mocha",
    description: "Espresso, chocolate meio amargo e leite vaporizado, finalizado com chantilly.",
    price: 14,
    category: "cafes",
    image: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?auto=format&fit=crop&w=800&q=80",
  },

  // Salgados
  {
    id: "pao-de-queijo",
    name: "Pão de Queijo",
    description: "Receita mineira tradicional, quentinho e com casquinha crocante.",
    price: 6.5,
    category: "salgados",
    image: "https://images.unsplash.com/photo-1619691416728-2b7c4d0c8a5b?auto=format&fit=crop&w=800&q=80",
    popularRank: 2,
    highlight: true,
  },
  {
    id: "misto-quente",
    name: "Misto Quente",
    description: "Pão de forma, presunto e queijo prensados até derreter por dentro.",
    price: 11,
    category: "salgados",
    image: "https://images.unsplash.com/photo-1528736235302-52922df5c122?auto=format&fit=crop&w=800&q=80",
    popularRank: 3,
    highlight: true,
  },
  {
    id: "coxinha",
    name: "Coxinha de Frango",
    description: "Massa cremosa recheada com frango desfiado temperado, frita na hora.",
    price: 8,
    category: "salgados",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "ciabatta-especial",
    name: "Ciabatta Especial",
    description: "Pão ciabatta artesanal, queijo brie, rúcula e tomate seco no azeite.",
    price: 18.5,
    category: "salgados",
    image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80",
    featured: true,
  },

  // Doces
  {
    id: "bolo-de-chocolate",
    name: "Bolo de Chocolate",
    description: "Massa fofinha com cobertura de ganache de chocolate meio amargo.",
    price: 9,
    category: "doces",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
    highlight: true,
  },
  {
    id: "brownie",
    name: "Brownie com Nozes",
    description: "Textura densa e úmida, com pedaços generosos de nozes.",
    price: 8.5,
    category: "doces",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "torta-de-limao",
    name: "Torta de Limão",
    description: "Base amanteigada, creme de limão e merengue maçaricado.",
    price: 10,
    category: "doces",
    image: "https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "cookie",
    name: "Cookie de Chocolate",
    description: "Crocante por fora, macio por dentro, recheado de gotas de chocolate.",
    price: 6,
    category: "doces",
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=800&q=80",
  },

  // Bebidas
  {
    id: "suco-natural",
    name: "Suco Natural",
    description: "Frutas frescas selecionadas do dia, sem adição de açúcar.",
    price: 8,
    category: "bebidas",
    image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "cha-gelado",
    name: "Chá Gelado",
    description: "Blend da casa servido bem gelado, com toque cítrico.",
    price: 7.5,
    category: "bebidas",
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "agua-com-gas",
    name: "Água com Gás",
    description: "Gelada, servida com rodela de limão.",
    price: 5,
    category: "bebidas",
    image: "https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "refrigerante",
    name: "Refrigerante Lata",
    description: "Opções variadas, sempre geladas.",
    price: 6,
    category: "bebidas",
    image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?auto=format&fit=crop&w=800&q=80",
  },

  // Combos
  {
    id: "combo-cafe-da-manha",
    name: "Combo Café da Manhã",
    description: "Cappuccino, pão de queijo e suco natural do dia.",
    price: 25,
    category: "combos",
    image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=800&q=80",
    popularRank: 4,
  },
  {
    id: "combo-tarde",
    name: "Combo da Tarde",
    description: "Latte, fatia de bolo do dia e água com gás.",
    price: 22,
    category: "combos",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
  },
];

export const featuredItem = menuItems.find((item) => item.featured) ?? menuItems[0];

export const highlightedItems = menuItems.filter((item) => item.highlight);

export const mostOrdered = [...menuItems]
  .filter((item) => item.popularRank)
  .sort((a, b) => (a.popularRank ?? 0) - (b.popularRank ?? 0));

export function formatPrice(price: number): string {
  return price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}
