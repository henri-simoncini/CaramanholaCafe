"use client";

import Image from "next/image";
import { useSlidingIndicator } from "./useSlidingIndicator";

/**
 * Ícones enviados pelo cliente, em PNG, servidos como estão.
 *
 * Não mudam entre ativo e inativo — quem indica a seção é a pílula que desliza
 * atrás e o peso do rótulo. Por isso também não passam por currentColor: a cor
 * é a do arquivo.
 */
const icones: Record<string, string> = {
  inicio: "/icones/inicio.png",
  sobre: "/icones/sobre.png",
  cardapio: "/icones/cardapio.png",
  contato: "/icones/contato.png",
};

// Folga lateral da pílula. Sem ela, como os itens são flex-1 e preenchem a
// largura toda, a pílula encostaria na vizinha e o conjunto viraria um bloco.
const FOLGA = 10;

/**
 * Barra de navegação colada no rodapé, ocupando a largura toda. Só no mobile.
 *
 * A pílula desliza até o item ativo, o mesmo movimento do header no desktop e
 * da barra de categorias — pelo useSlidingIndicator, compartilhado com eles.
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
      // O padding da safe-area fica no <nav>, que tem o fundo, e não num filho:
      // assim a faixa da barra de gestos do iPhone também sai colorida, em vez
      // de aparecer uma tira do conteúdo por baixo.
      className="fixed inset-x-0 bottom-0 z-50 border-t border-cream/10 bg-coffee-bar pb-[env(safe-area-inset-bottom)] md:hidden"
    >
      <div ref={trilhoRef as React.RefObject<HTMLDivElement>} className="relative flex w-full">
        <span
          aria-hidden="true"
          className={`absolute top-1/2 -translate-y-1/2 rounded-2xl bg-cream/15 ${
            animar ? "transition-[left,width] duration-300 ease-out" : ""
          }`}
          style={{
            left: medida ? `${medida.left + FOLGA}px` : 0,
            width: medida ? `${Math.max(0, medida.width - FOLGA * 2)}px` : 0,
            height: "calc(100% - 0.5rem)",
            opacity: medida ? 1 : 0,
          }}
        />

        {tabs.map((tab) => {
          const src = icones[tab.id];
          const ativo = tab.id === active;
          if (!src) return null;
          return (
            <button
              key={tab.id}
              ref={registrar(tab.id)}
              type="button"
              role="tab"
              aria-selected={ativo}
              aria-controls={`painel-${tab.id}`}
              onClick={() => onSelect(tab.id)}
              className={`relative z-10 flex flex-1 flex-col items-center gap-1 pb-2 pt-2.5 transition-colors duration-200 ${
                ativo ? "text-cream" : "text-cream/60"
              }`}
            >
              {/* alt vazio: o rótulo logo abaixo já nomeia o item, e repetir
                  faria o leitor de tela anunciar a seção duas vezes */}
              <Image
                src={src}
                alt=""
                width={100}
                height={100}
                className="h-[22px] w-[22px]"
                unoptimized
              />
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
