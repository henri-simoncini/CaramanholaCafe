/**
 * Ícones da barra de navegação inferior, cada um em duas variantes.
 *
 * `filled` marca a seção ativa; sem ele o ícone fica só no contorno. São
 * desenhos próprios em SVG (e não as imagens enviadas) porque assim herdam a
 * cor via currentColor, escalam sem borrar e não custam requisição.
 */
type Props = { filled?: boolean; className?: string };

const contorno = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function HomeNavIcon({ filled, className }: Props) {
  if (filled) {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
        <path d="M11.48 2.87a.79.79 0 0 1 1.04 0l9.17 8.03a.6.6 0 0 1-.39 1.05h-2.2v7.87c0 .68-.55 1.23-1.23 1.23h-3.32v-6.2h-3.1v6.2H8.13a1.23 1.23 0 0 1-1.23-1.23v-7.87H4.7a.6.6 0 0 1-.4-1.05z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" {...contorno} className={className} aria-hidden="true">
      <path d="M2.7 11.6 12 3.3l9.3 8.3" />
      <path d="M5.6 9.9v10.4h4.3v-6.2h4.2v6.2h4.3V9.9" />
    </svg>
  );
}

export function InfoNavIcon({ filled, className }: Props) {
  // Balão + rabinho à esquerda. No cheio o "i" é um furo (fillRule evenodd),
  // então ele mostra o fundo da barra em vez de uma cor fixa.
  const balao =
    "M12 3.1c-5.1 0-9.2 3.4-9.2 7.6 0 2 .9 3.8 2.4 5.1.3 1.4-.3 2.8-1.4 3.8-.3.3-.1.8.3.8 1.8-.1 3.5-.7 4.9-1.7 1 .3 2 .4 3 .4 5.1 0 9.2-3.4 9.2-7.6S17.1 3.1 12 3.1Z";

  if (filled) {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
        <path fillRule="evenodd" clipRule="evenodd" d={`${balao} M12 5.9a1.15 1.15 0 1 1 0 2.3 1.15 1.15 0 0 1 0-2.3Z M11 10.2h2v5.2h-2z`} />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" {...contorno} className={className} aria-hidden="true">
      <path d={balao} />
      <path d="M12 6.6v1.2M12 10.5v4.6" />
    </svg>
  );
}

export function CardapioNavIcon({ filled, className }: Props) {
  if (filled) {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
        {/* página esquerda com a colher vazada */}
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.3 6.1c0-1.2-1-2.2-2.2-2.2H4.4c-1.2 0-2.2 1-2.2 2.2v10.6c0 1.2 1 2.2 2.2 2.2h4.7c1 0 1.9.6 2.2 1.5V6.1ZM6.75 6.6c1 0 1.8 1.4 1.8 2.9 0 1-.4 1.9-1 2.4v3.5c0 .7-.35 1.2-.8 1.2s-.8-.5-.8-1.2v-3.5c-.6-.5-1-1.4-1-2.4 0-1.5.8-2.9 1.8-2.9Z"
        />
        {/* página direita com as linhas vazadas */}
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.7 6.1c0-1.2 1-2.2 2.2-2.2h4.7c1.2 0 2.2 1 2.2 2.2v10.6c0 1.2-1 2.2-2.2 2.2h-4.7c-1 0-1.9.6-2.2 1.5V6.1Zm2 1.3h3.6v1.1h-3.6zm0 2.6h3.6v1.1h-3.6zm0 2.6h3.6v1.1h-3.6zm0 2.6h3.6v1.1h-3.6zm5.1-7.8h1.1v1.1h-1.1zm0 2.6h1.1v1.1h-1.1zm0 2.6h1.1v1.1h-1.1zm0 2.6h1.1v1.1h-1.1z"
        />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" {...contorno} className={className} aria-hidden="true">
      <path d="M12 6.1c0-1.2-1-2.2-2.2-2.2H4.4c-1.2 0-2.2 1-2.2 2.2v10.6c0 1.2 1 2.2 2.2 2.2h5.4c1.2 0 2.2 1 2.2 2.2" />
      <path d="M12 6.1c0-1.2 1-2.2 2.2-2.2h5.4c1.2 0 2.2 1 2.2 2.2v10.6c0 1.2-1 2.2-2.2 2.2h-5.4c-1.2 0-2.2 1-2.2 2.2" />
      {/* colher */}
      <path d="M7.1 12.1c.8-.4 1.4-1.4 1.4-2.6 0-1.5-.8-2.7-1.8-2.7s-1.8 1.2-1.8 2.7c0 1.2.6 2.2 1.4 2.6v3.6c0 .6.2 1 .4 1s.4-.4.4-1z" />
      {/* linhas da direita */}
      <path d="M14.6 8h3.6M14.6 10.6h3.6M14.6 13.2h3.6M14.6 15.8h3.6M20.1 8h.4M20.1 10.6h.4M20.1 13.2h.4M20.1 15.8h.4" />
    </svg>
  );
}

export function PhoneNavIcon({ filled, className }: Props) {
  const fone =
    "M6.6 3.3c-.5-.35-1.2-.28-1.62.16L3.3 5.2c-.53.55-.72 1.35-.5 2.06.75 2.5 2.5 5.2 4.9 7.6s5.1 4.15 7.6 4.9c.7.22 1.5.03 2.05-.5l1.74-1.68c.44-.42.5-1.1.16-1.62l-2.36-3.4a1.2 1.2 0 0 0-1.5-.4l-2.5 1.24a19 19 0 0 1-3.5-3.5l1.24-2.5a1.2 1.2 0 0 0-.4-1.5z";

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
