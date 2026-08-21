"use client";

import { useMemo, useState } from "react";
import { categories, highlightedItems, menuItems } from "@/data/menu";
import CategoryTabs, { type CategoryTab } from "./CategoryTabs";
import ProductCard from "./ProductCard";
import Reveal from "./Reveal";

const ALL = "todos" as const;

// "Todos" na frente das categorias reais, na ordem em que aparecem na barra
const abas: CategoryTab[] = [
  { id: ALL, label: "Todos" },
  ...categories.map((c) => ({ id: c.id, label: c.label })),
];

export default function MenuBrowser({
  highlightOnly = false,
  sticky = false,
  maxColumns = 4,
  horizontal = false,
}: {
  // Quando true, a aba "Todos" mostra só os itens marcados como destaque (usado na prévia da landing)
  highlightOnly?: boolean;
  sticky?: boolean;
  // A landing usa container largo (max-w-6xl) e comporta 4 colunas; a página
  // /cardapio é estreita (max-w-3xl) e com 4 o card fica tão apertado que o
  // preço chega a ser cortado — daí 3.
  maxColumns?: 3 | 4;
  /**
   * Cards largos com a foto ao lado do texto: duas colunas no desktop, uma só
   * no celular. Substitui a grade estreita de vários cards por linha.
   */
  horizontal?: boolean;
}) {
  const [active, setActive] = useState<string>(ALL);

  const filtered = useMemo(() => {
    if (active === ALL) {
      return highlightOnly ? highlightedItems : menuItems;
    }
    return menuItems.filter((item) => item.category === active);
  }, [active, highlightOnly]);

  return (
    <div>
      <div
        className={
          sticky ? "sticky top-[68px] z-30 -mx-5 bg-cream/95 px-5 py-3 backdrop-blur" : "pb-1"
        }
      >
        {horizontal ? (
          <Reveal delay={220}>
            <CategoryTabs tabs={abas} active={active} onChange={setActive} centered />
          </Reveal>
        ) : (
          <CategoryTabs tabs={abas} active={active} onChange={setActive} />
        )}
      </div>

      {horizontal ? (
        // Uma coluna no celular ocupando a largura toda, duas no desktop
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
          {filtered.map((item, i) => (
            // key com a categoria ativa: sem isso o React reaproveita os nós ao
            // trocar de aba e os cards novos aparecem prontos, sem animar
            <Reveal key={`${active}-${item.id}`} from="cima" delay={i * 90}>
              <ProductCard item={item} horizontal />
            </Reveal>
          ))}
        </div>
      ) : (
        // 2 colunas já no mobile: evita que o cardápio completo vire uma
        // rolagem interminável no celular (o uso principal, via QR code)
        <div
          className={`mt-4 grid grid-cols-2 gap-3 sm:gap-5 ${
            maxColumns === 4 ? "lg:grid-cols-4" : "md:grid-cols-3"
          }`}
        >
          {filtered.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}
