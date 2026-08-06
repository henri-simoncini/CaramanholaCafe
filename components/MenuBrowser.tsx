"use client";

import { useMemo, useState } from "react";
import { categories, highlightedItems, menuItems } from "@/data/menu";
import ProductCard from "./ProductCard";

const ALL = "todos" as const;

export default function MenuBrowser({
  highlightOnly = false,
  sticky = false,
}: {
  // Quando true, a aba "Todos" mostra só os itens marcados como destaque (usado na prévia da landing)
  highlightOnly?: boolean;
  sticky?: boolean;
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
        className={`-mx-5 flex gap-2 overflow-x-auto px-5 pb-3 ${
          sticky ? "sticky top-[64px] z-30 bg-cream/95 py-3 backdrop-blur" : ""
        }`}
      >
        <button
          type="button"
          onClick={() => setActive(ALL)}
          className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition ${
            active === ALL ? "bg-coffee text-cream" : "bg-white text-coffee/70 ring-1 ring-coffee/10"
          }`}
        >
          Todos
        </button>
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setActive(cat.id)}
            className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition ${
              active === cat.id ? "bg-coffee text-cream" : "bg-white text-coffee/70 ring-1 ring-coffee/10"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {filtered.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
