"use client";

/**
 * Botão do menu mobile: dois traços que giram e viram X ao abrir.
 *
 * O estado fica no componente pai — o mesmo booleano que abre o painel
 * controla a animação, então os dois nunca saem de sincronia (por exemplo
 * quando o menu fecha sozinho ao trocar de aba).
 *
 * A animação é uma transição CSS, não framer-motion. A versão com
 * framer-motion aplicava o transform na primeira renderização e nunca mais
 * atualizava neste Next 14 + React 18 — testado nas versões 13 e 11, com o
 * .next limpo e o servidor reiniciado. O CSS entrega o mesmo movimento, sem
 * dependência e sem JS extra.
 */
export default function MenuToggleButton({
  open,
  onToggle,
  controls,
  className = "",
}: {
  open: boolean;
  onToggle: () => void;
  /** id do elemento que o botão abre, para aria-controls */
  controls?: string;
  className?: string;
}) {
  // borderTop com currentColor: o traço herda a cor do texto do botão, então o
  // mesmo componente serve no header creme e no header café sem variante.
  const traco: React.CSSProperties = {
    width: "20px",
    borderTop: "2px solid currentColor",
    transformOrigin: "center",
    transition: "transform 150ms ease-out",
  };

  return (
    <button
      type="button"
      aria-expanded={open}
      aria-controls={controls}
      aria-label={open ? "Fechar menu" : "Abrir menu"}
      onClick={onToggle}
      className={`flex aspect-square h-10 w-10 select-none flex-col items-center justify-center rounded-full transition-colors ${className}`}
    >
      {/* translateY antes do rotate: os traços primeiro se encontram no centro
          e só então giram — invertida, a ordem espalha as pontas do X */}
      <span
        aria-hidden="true"
        style={{
          ...traco,
          transform: open ? "translateY(1px) rotate(45deg)" : "translateY(-3px)",
        }}
      />
      <span
        aria-hidden="true"
        style={{
          ...traco,
          transform: open ? "translateY(-1px) rotate(-45deg)" : "translateY(3px)",
        }}
      />
    </button>
  );
}
