"use client";

import type { ComponentType } from "react";
import { useSlidingIndicator } from "./useSlidingIndicator";
import { CardapioNavIcon, HomeNavIcon, InfoNavIcon, PhoneNavIcon } from "./nav-icons";

type IconeNav = ComponentType<{ filled?: boolean; className?: string }>;

const icones: Record<string, IconeNav> = {
  inicio: HomeNavIcon,
  sobre: InfoNavIcon,
  cardapio: CardapioNavIcon,
  contato: PhoneNavIcon,
};

/**
 * Barra de navegação fixa no rodapé, só no mobile.
 *
 * Substitui o menu sanfona: com quatro seções, deixar tudo à mão o tempo todo
 * custa um toque em vez de dois, e o polegar alcança sem esticar.
 */
export default function BottomNav({
  tabs,
  active,
  onSelect,
}: {
  tabs: { id: string; label: string }[];
  active: string;
  onSelect: (id: string) => void;
}) {
  const { trilhoRef, registrar, medida, animar } = useSlidingIndicator(active);

  return (
    <nav
      role="tablist"
      aria-label="Seções do site"
      // pb com env(safe-area-inset-bottom): no iPhone a barra de gestos comeria
      // a parte de baixo da barra sem isso.
      className="fixed inset-x-0 bottom-0 z-50 flex justify-center px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] md:hidden"
    >
      <div
        ref={trilhoRef as React.RefObject<HTMLDivElement>}
        className="relative flex items-center gap-1 rounded-full bg-coffee-bar p-1.5 shadow-[0_8px_30px_rgba(0,0,0,0.25)] ring-1 ring-cream/10"
      >
        <span
          aria-hidden="true"
          className={`absolute top-1/2 -translate-y-1/2 rounded-full bg-cream/15 ${
            animar ? "transition-[left,width] duration-300 ease-out" : ""
          }`}
          style={{
            left: medida ? `${medida.left}px` : 0,
            width: medida ? `${medida.width}px` : 0,
            height: "calc(100% - 0.75rem)",
            opacity: medida ? 1 : 0,
          }}
        />

        {tabs.map((tab) => {
          const Icone = icones[tab.id];
          const ativo = tab.id === active;
          if (!Icone) return null;
          return (
            <button
              key={tab.id}
              ref={registrar(tab.id)}
              type="button"
              role="tab"
              aria-selected={ativo}
              aria-controls={`painel-${tab.id}`}
              // O rótulo não aparece na tela, mas é o que o leitor de tela
              // anuncia — sem ele o botão seria só "botão".
              aria-label={tab.label}
              onClick={() => onSelect(tab.id)}
              className={`relative z-10 flex h-14 w-16 items-center justify-center rounded-full transition-colors duration-200 ${
                ativo ? "text-cream" : "text-cream/55 hover:text-cream/80"
              }`}
            >
              <Icone filled={ativo} className="h-6 w-6" />
            </button>
          );
        })}
      </div>
    </nav>
  );
}
