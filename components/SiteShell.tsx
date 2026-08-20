"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState, type ReactNode } from "react";
import BottomNav from "./BottomNav";
import { useSlidingIndicator } from "./useSlidingIndicator";
import { WhatsAppIcon } from "./icons";
import { whatsappLink } from "@/data/site";

export type TabId = "inicio" | "sobre" | "cardapio" | "contato";

export type Tab = {
  id: TabId;
  label: string;
  content: ReactNode;
};

const DEFAULT_TAB: TabId = "inicio";

function isTabId(value: string, tabs: Tab[]): value is TabId {
  return tabs.some((t) => t.id === value);
}

export default function SiteShell({ tabs }: { tabs: Tab[] }) {
  const [active, setActive] = useState<TabId>(DEFAULT_TAB);
  const { trilhoRef, registrar, medida, animar } = useSlidingIndicator(active);

  // O hash da URL manda: assim /#cardapio abre direto na aba certa, o link
  // continua compartilhável e o botão voltar do navegador funciona.
  useEffect(() => {
    const sync = () => {
      const hash = window.location.hash.replace("#", "");
      setActive(isTabId(hash, tabs) ? hash : DEFAULT_TAB);
    };
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, [tabs]);

  const openTab = useCallback((id: TabId) => {
    // Empurra o hash em vez de trocar o estado direto: o hashchange acima faz a
    // troca, então clique e botão voltar seguem exatamente o mesmo caminho.
    window.location.hash = id;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Navegação por setas dentro do menu, como manda o padrão de abas do WAI-ARIA
  const onKeyDown = (event: React.KeyboardEvent, index: number) => {
    const delta = event.key === "ArrowRight" ? 1 : event.key === "ArrowLeft" ? -1 : 0;
    if (!delta) return;
    event.preventDefault();
    const next = tabs[(index + delta + tabs.length) % tabs.length];
    openTab(next.id);
    document.getElementById(`tab-${next.id}`)?.focus();
  };

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-coffee/10 bg-cream/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3">
          <button
            type="button"
            onClick={() => openTab("inicio")}
            className="flex items-center gap-3"
            aria-label="Caramanhola — ir para o início"
          >
            <Image
              src="/logo.png"
              alt=""
              width={274}
              height={274}
              priority
              className="h-12 w-12 rounded-full"
            />
            <span className="hidden text-left leading-tight sm:block">
              <span className="block font-title text-lg font-bold tracking-wide text-coffee">
                CARAMANHOLA
              </span>
              <span className="block text-[11px] font-medium tracking-wide text-coffee/60">
                Lanches &amp; Café
              </span>
            </span>
          </button>

          {/* relative: o offsetLeft dos botões é medido a partir daqui, e é
              onde a linha que desliza fica ancorada */}
          <nav
            ref={trilhoRef as React.RefObject<HTMLElement>}
            role="tablist"
            aria-label="Seções do site"
            className="relative hidden items-center gap-7 md:flex"
          >
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                id={`tab-${tab.id}`}
                ref={registrar(tab.id)}
                role="tab"
                type="button"
                aria-selected={active === tab.id}
                aria-controls={`painel-${tab.id}`}
                tabIndex={active === tab.id ? 0 : -1}
                onClick={() => openTab(tab.id)}
                onKeyDown={(e) => onKeyDown(e, index)}
                className={`py-1 text-sm font-semibold uppercase tracking-wide transition-colors duration-200 ${
                  active === tab.id ? "text-brand-dark" : "text-coffee/70 hover:text-coffee"
                }`}
              >
                {tab.label}
              </button>
            ))}

            {/* Uma linha só, que escorrega entre os itens — em vez de uma por
                botão aparecendo e sumindo */}
            <span
              aria-hidden="true"
              className={`absolute -bottom-1 h-0.5 rounded-full bg-brand-dark ${
                animar ? "transition-[left,width] duration-300 ease-out" : ""
              }`}
              style={{
                left: medida ? `${medida.left}px` : 0,
                width: medida ? `${medida.width}px` : 0,
                opacity: medida ? 1 : 0,
              }}
            />
          </nav>

          {/* Sem o sanfona no mobile, o WhatsApp cabe no header desde a menor
              tela — antes ele só aparecia a partir de sm */}
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-brand-dark px-4 py-2.5 text-[11px] font-bold uppercase tracking-wide text-white transition hover:bg-brand-darkest sm:px-6 sm:py-3 sm:text-xs"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Fale conosco
          </a>
        </div>
      </header>

      <main>
        {/* Todos os painéis ficam no HTML e só o inativo é escondido: assim o
            buscador continua lendo o conteúdo inteiro da página, o Ctrl+F do
            visitante acha o que está em outra aba e nada precisa recarregar. */}
        {tabs.map((tab) => (
          <div
            key={tab.id}
            id={`painel-${tab.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${tab.id}`}
            hidden={active !== tab.id}
          >
            {tab.content}
          </div>
        ))}
      </main>

      <BottomNav tabs={tabs} active={active} onSelect={(id) => openTab(id as TabId)} />
    </>
  );
}

/** Link que troca de aba a partir de qualquer lugar do conteúdo. */
export function TabLink({
  to,
  className,
  children,
}: {
  to: TabId;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Link href={`#${to}`} className={className} scroll={false}>
      {children}
    </Link>
  );
}
