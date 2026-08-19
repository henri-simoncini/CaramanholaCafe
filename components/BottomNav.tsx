"use client";

import type { ComponentType } from "react";
import { CardapioNavIcon, HomeNavIcon, InfoNavIcon, PhoneNavIcon } from "./nav-icons";

type IconeNav = ComponentType<{ filled?: boolean; className?: string }>;

const icones: Record<string, IconeNav> = {
  inicio: HomeNavIcon,
  sobre: InfoNavIcon,
  cardapio: CardapioNavIcon,
  contato: PhoneNavIcon,
};

/**
 * Barra de navegação colada no rodapé, ocupando a largura toda. Só no mobile.
 *
 * Substitui o menu sanfona: com quatro seções, deixar tudo à mão custa um
 * toque em vez de dois, e o polegar alcança sem esticar.
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
  return (
    <nav
      role="tablist"
      aria-label="Seções do site"
      // O padding da safe-area fica no <nav>, que tem o fundo, e não num filho:
      // assim a faixa da barra de gestos do iPhone também sai colorida, em vez
      // de aparecer uma tira do conteúdo por baixo.
      className="fixed inset-x-0 bottom-0 z-50 border-t border-cream/10 bg-coffee-bar pb-[env(safe-area-inset-bottom)] md:hidden"
    >
      <div className="flex w-full">
        {tabs.map((tab) => {
          const Icone = icones[tab.id];
          const ativo = tab.id === active;
          if (!Icone) return null;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={ativo}
              aria-controls={`painel-${tab.id}`}
              onClick={() => onSelect(tab.id)}
              className={`flex flex-1 flex-col items-center gap-1 pb-2 pt-2.5 transition-colors duration-200 ${
                ativo ? "text-cream" : "text-cream/55"
              }`}
            >
              <span className="relative flex h-9 w-9 items-center justify-center">
                {/* Círculo que cresce de zero até preencher, como no exemplo do
                    Uiverse. Fica atrás do ícone e some encolhendo ao sair. */}
                <span
                  aria-hidden="true"
                  className={`absolute rounded-full bg-cream/15 transition-all duration-500 ease-out ${
                    ativo ? "h-9 w-9" : "h-0 w-0"
                  }`}
                />
                <Icone filled={ativo} className="relative h-[22px] w-[22px]" />
              </span>
              <span className="text-[10px] font-medium leading-none tracking-wide">
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
