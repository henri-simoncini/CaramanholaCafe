"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Revela o conteúdo subindo e aparecendo quando ele entra na tela.
 *
 * Use `delay` para escalonar: título em 0, os blocos seguintes em 100, 200...
 * Assim o olho pousa no título antes de o resto chegar.
 */
export default function Reveal({
  children,
  delay = 0,
  from = "baixo",
  className = "",
}: {
  children: ReactNode;
  /** Atraso em milissegundos, para escalonar os elementos de uma seção */
  delay?: number;
  /** De onde o conteúdo entra: subindo (padrão) ou descendo */
  from?: "baixo" | "cima";
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Quem pediu menos movimento no sistema recebe o conteúdo já posto, sem
    // deslize nem fade.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisivel(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entradas) => {
        for (const entrada of entradas) {
          if (entrada.isIntersecting) {
            setVisivel(true);
          } else if (el.offsetParent === null) {
            // offsetParent nulo = o elemento está em display:none, ou seja, a
            // aba dele foi trocada. Só nesse caso rearmamos a animação: sair da
            // tela por rolagem não deve fazer o conteúdo sumir de novo.
            setVisivel(false);
          }
        }
      },
      // A margem negativa segura o disparo até o bloco entrar de fato, em vez
      // de animar quando só a primeira linha aparece na borda.
      { threshold: 0.05, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none ${
        visivel
          ? "translate-y-0 opacity-100"
          : `opacity-0 ${from === "cima" ? "-translate-y-8" : "translate-y-8"}`
      } ${className}`}
    >
      {children}
    </div>
  );
}
