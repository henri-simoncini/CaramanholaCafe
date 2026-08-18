"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";

export type CategoryTab = { id: string; label: string };

/**
 * Barra de categorias com a pílula que desliza até o item ativo.
 *
 * O estado da categoria vive no componente pai (MenuBrowser) — aqui só se
 * mede onde o botão ativo está e move-se a pílula até lá.
 */
export default function CategoryTabs({
  tabs,
  active,
  onChange,
  ariaLabel = "Categorias do cardápio",
}: {
  tabs: CategoryTab[];
  active: string;
  onChange: (id: string) => void;
  ariaLabel?: string;
}) {
  const trilhoRef = useRef<HTMLDivElement>(null);
  const botoesRef = useRef<Record<string, HTMLButtonElement | null>>({});
  const [pilula, setPilula] = useState<{ left: number; width: number } | null>(null);
  // Sem isso a pílula desliza do canto esquerdo até o item ativo assim que a
  // página abre, como se alguém tivesse clicado.
  const [animar, setAnimar] = useState(false);

  const medir = useCallback(() => {
    const el = botoesRef.current[active];
    if (!el) return;
    setPilula({ left: el.offsetLeft, width: el.offsetWidth });
  }, [active]);

  // useLayoutEffect: mede antes da pintura, então a pílula nunca aparece no
  // lugar errado por um quadro.
  useLayoutEffect(() => {
    medir();
  }, [medir]);

  // Efeito simples, sem requestAnimationFrame: no modo dev o React monta duas
  // vezes e o cleanup cancelava o quadro agendado, então a transição nunca era
  // ligada. Aqui o efeito roda depois da primeira pintura — a pílula já
  // apareceu no lugar certo — e só então habilita a animação.
  useEffect(() => {
    setAnimar(true);
  }, []);

  useEffect(() => {
    const trilho = trilhoRef.current;
    if (!trilho) return;

    // Redimensionar a janela muda a largura dos botões e a pílula fica
    // deslocada — no celular isso acontece só de girar a tela.
    const observer = new ResizeObserver(medir);
    observer.observe(trilho);

    // As fontes carregam depois do primeiro render e mudam a largura do texto,
    // então é preciso medir de novo quando elas chegam.
    document.fonts?.ready.then(medir).catch(() => {});

    return () => observer.disconnect();
  }, [medir]);

  return (
    <div
      className="-mx-5 overflow-x-auto px-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      role="tablist"
      aria-label={ariaLabel}
    >
      {/* relative aqui: é deste elemento que o offsetLeft dos botões é medido,
          e é ele que rola junto com a pílula quando a barra passa da tela */}
      <div
        ref={trilhoRef}
        className="relative flex w-fit items-center gap-1 rounded-full border border-coffee/10 bg-white/70 p-1.5 backdrop-blur-sm"
      >
        <span
          aria-hidden="true"
          className={`absolute top-1/2 -translate-y-1/2 rounded-full bg-coffee ${
            animar ? "transition-[left,width] duration-300 ease-out" : ""
          }`}
          style={{
            left: pilula ? `${pilula.left}px` : 0,
            width: pilula ? `${pilula.width}px` : 0,
            height: "calc(100% - 0.75rem)",
            opacity: pilula ? 1 : 0,
          }}
        />

        {tabs.map((tab) => {
          const ativo = tab.id === active;
          return (
            <button
              key={tab.id}
              ref={(el) => {
                botoesRef.current[tab.id] = el;
              }}
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
