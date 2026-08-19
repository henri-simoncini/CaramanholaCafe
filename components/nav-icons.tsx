/**
 * Ícones da barra de navegação inferior, cada um em duas variantes.
 *
 * `filled` marca a seção ativa; sem ele o ícone fica só no contorno. São
 * desenhos próprios em SVG porque assim herdam a cor via currentColor,
 * escalam sem borrar e não custam requisição.
 *
 * Nas versões cheias os vazios (o "i" da informação, as linhas do cardápio)
 * são furos de verdade — fillRule="evenodd" —, então mostram o fundo da barra
 * em vez de uma cor chapada que quebraria se o fundo mudasse.
 */
type Props = { filled?: boolean; className?: string };

const contorno = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function HomeNavIcon({ filled, className }: Props) {
  if (filled) {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
        <path d="M12.6 2.9a1 1 0 0 0-1.2 0l-8.2 6.4a1 1 0 0 0-.4.8v9.3c0 .9.7 1.6 1.6 1.6h4.3v-5.6c0-.6.4-1 1-1h2.6c.6 0 1 .4 1 1v5.6h4.3c.9 0 1.6-.7 1.6-1.6v-9.3a1 1 0 0 0-.4-.8z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" {...contorno} className={className} aria-hidden="true">
      <path d="M3.4 9.9 12 3.2l8.6 6.7v9.1a1.5 1.5 0 0 1-1.5 1.5h-3.4v-5.4a1 1 0 0 0-1-1h-3.4a1 1 0 0 0-1 1v5.4H4.9a1.5 1.5 0 0 1-1.5-1.5z" />
    </svg>
  );
}

export function InfoNavIcon({ filled, className }: Props) {
  if (filled) {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 2.6a9.4 9.4 0 1 1 0 18.8 9.4 9.4 0 0 1 0-18.8Zm0 3.7a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Zm-1.05 4.4h2.1v6.6h-2.1z"
        />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" {...contorno} className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9.1" />
      <path d="M12 7.4v.9M12 11.1v5.6" />
    </svg>
  );
}

export function CardapioNavIcon({ filled, className }: Props) {
  if (filled) {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.6 2.4h10.8c1.5 0 2.7 1.2 2.7 2.7v13.8c0 1.5-1.2 2.7-2.7 2.7H6.6a2.7 2.7 0 0 1-2.7-2.7V5.1c0-1.5 1.2-2.7 2.7-2.7Zm2.3 3.7a1 1 0 0 0 0 2h6.2a1 1 0 1 0 0-2zm-.5 4.4a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2Zm3.2.1a1 1 0 0 0 0 2h3.5a1 1 0 1 0 0-2zm-3.2 3.9a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2Zm3.2.1a1 1 0 1 0 0 2h3.5a1 1 0 1 0 0-2z"
        />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" {...contorno} className={className} aria-hidden="true">
      <rect x="4.2" y="2.7" width="15.6" height="18.6" rx="2.5" />
      <path d="M8.9 7.1h6.2" />
      <path d="M11.8 11.6h3.3M11.8 16h3.3" />
      <circle cx="8.6" cy="11.6" r="1" fill="currentColor" stroke="none" />
      <circle cx="8.6" cy="16" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function PhoneNavIcon({ filled, className }: Props) {
  const fone =
    "M8.1 4.2c-.4-.9-1.5-1.2-2.3-.7l-1.5 1c-.9.6-1.3 1.7-1 2.7a19.6 19.6 0 0 0 13.5 13.5c1 .3 2.1-.1 2.7-1l1-1.5c.5-.8.2-1.9-.7-2.3l-3.2-1.5a1.7 1.7 0 0 0-2 .4l-1 1.1a14.4 14.4 0 0 1-5.5-5.5l1.1-1c.6-.5.8-1.3.4-2z";

  if (filled) {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
        <path d={fone} />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" {...contorno} className={className} aria-hidden="true">
      <path d={fone} />
    </svg>
  );
}
