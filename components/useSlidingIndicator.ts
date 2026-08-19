"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";

/**
 * Mede onde está o item ativo de uma barra horizontal para que um indicador
 * (pílula, sublinhado) possa deslizar até ele.
 *
 * Fica separado do componente porque o header e a barra de categorias precisam
 * exatamente da mesma medição, mas desenham indicadores diferentes e têm
 * marcação e acessibilidade próprias.
 */
export function useSlidingIndicator(active: string) {
  const trilhoRef = useRef<HTMLElement | null>(null);
  const itensRef = useRef<Record<string, HTMLElement | null>>({});
  const [medida, setMedida] = useState<{ left: number; width: number } | null>(null);
  // Sem isso o indicador desliza do canto esquerdo até o item ativo assim que a
  // página abre, como se alguém tivesse clicado.
  const [animar, setAnimar] = useState(false);

  const registrar = useCallback(
    (id: string) => (el: HTMLElement | null) => {
      itensRef.current[id] = el;
    },
    []
  );

  const medir = useCallback(() => {
    const el = itensRef.current[active];
    if (!el) return;
    setMedida({ left: el.offsetLeft, width: el.offsetWidth });
  }, [active]);

  // Antes da pintura, para o indicador não aparecer no lugar errado por um quadro.
  useLayoutEffect(() => {
    medir();
  }, [medir]);

  // Efeito simples, sem requestAnimationFrame: no modo dev o React monta duas
  // vezes e o cleanup cancelaria o quadro agendado, deixando a transição
  // desligada para sempre.
  useEffect(() => {
    setAnimar(true);
  }, []);

  useEffect(() => {
    const trilho = trilhoRef.current;
    if (!trilho) return;

    // Redimensionar muda a largura dos itens e o indicador fica deslocado — no
    // celular basta girar a tela.
    const observer = new ResizeObserver(() => medir());
    observer.observe(trilho);

    // As fontes carregam depois do primeiro render e mudam a largura do texto,
    // então a medida inicial nasce errada sem isto.
    document.fonts?.ready.then(() => medir()).catch(() => {});

    return () => observer.disconnect();
  }, [medir]);

  return { trilhoRef, registrar, medida, animar };
}
