"use client";

import { useSlidingIndicator } from "./useSlidingIndicator";

export type CategoryTab = { id: string; label: string };

/**
 * Barra de categorias com a pílula que desliza até o item ativo.
 *
 * O estado da categoria vive no componente pai (MenuBrowser) — aqui só se
 * desenha e se posiciona a pílula.
 */
export default function CategoryTabs({
  tabs,
  active,
  onChange,
  centered = false,
  ariaLabel = "Categorias do cardápio",
}: {
  tabs: CategoryTab[];
  active: string;
  onChange: (id: string) => void;
  /** Centraliza a barra quando ela cabe na tela; rolando, volta a alinhar à esquerda */
  centered?: boolean;
  ariaLabel?: string;
}) {
  const { trilhoRef, registrar, medida, animar } = useSlidingIndicator(active);

  return (
    <div
      className="-mx-5 overflow-x-auto px-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      role="tablist"
      aria-label={ariaLabel}
    >
      {/* relative aqui: é deste elemento que o offsetLeft dos botões é medido,
          e é ele que rola junto com a pílula quando a barra passa da tela.
          mx-auto centraliza sem quebrar a rolagem: com w-fit, quando a barra
          nao cabe ele deixa de ter efeito e o conteudo volta a comecar da
          esquerda, em vez de ficar com o primeiro item cortado. */}
      <div
        ref={trilhoRef as React.RefObject<HTMLDivElement>}
        className={`relative flex w-fit items-center gap-1 rounded-full border border-coffee/10 bg-white/70 p-1.5 backdrop-blur-sm ${
          centered ? "mx-auto" : ""
        }`}
      >
        <span
          aria-hidden="true"
          className={`absolute top-1/2 -translate-y-1/2 rounded-full bg-brand-dark ${
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
          const ativo = tab.id === active;
          return (
            <button
              key={tab.id}
              ref={registrar(tab.id)}
              type="button"
              role="tab"
              aria-selected={ativo}
              onClick={() => onChange(tab.id)}
              className={`relative z-10 shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                ativo ? "text-cream" : "text-coffee/70 hover:text-coffee"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
