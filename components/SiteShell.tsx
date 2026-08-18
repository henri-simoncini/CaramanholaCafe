"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState, type ReactNode } from "react";
import { CloseIcon, MenuIcon, WhatsAppIcon } from "./icons";
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
  const [menuOpen, setMenuOpen] = useState(false);

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
    setMenuOpen(false);
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

          <nav
            role="tablist"
            aria-label="Seções do site"
            className="hidden items-center gap-7 md:flex"
          >
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                id={`tab-${tab.id}`}
                role="tab"
                type="button"
                aria-selected={active === tab.id}
                aria-controls={`painel-${tab.id}`}
                tabIndex={active === tab.id ? 0 : -1}
                onClick={() => openTab(tab.id)}
                onKeyDown={(e) => onKeyDown(e, index)}
                className={`relative py-1 text-sm font-semibold uppercase tracking-wide transition ${
                  active === tab.id
                    ? "text-olive"
                    : "text-coffee/70 hover:text-coffee"
                }`}
              >
                {tab.label}
                {active === tab.id && (
                  <span className="absolute -bottom-0.5 left-0 right-0 h-0.5 rounded-full bg-olive" />
                )}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-full bg-olive px-6 py-3 text-xs font-bold uppercase tracking-wide text-cream transition hover:bg-olive-dark sm:inline-flex"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Fale conosco
            </a>
            <button
              type="button"
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
              className="p-1 text-coffee md:hidden"
              onClick={() => setMenuOpen((v) => !v)}
            >
              {menuOpen ? <CloseIcon className="h-7 w-7" /> : <MenuIcon className="h-7 w-7" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav
            role="tablist"
            aria-label="Seções do site"
            className="border-t border-coffee/10 bg-cream px-5 pb-5 md:hidden"
          >
            <div className="flex flex-col pt-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  role="tab"
                  type="button"
                  aria-selected={active === tab.id}
                  aria-controls={`painel-${tab.id}`}
                  onClick={() => openTab(tab.id)}
                  className={`border-b border-coffee/5 py-3 text-left text-sm font-semibold uppercase tracking-wide transition ${
                    active === tab.id ? "text-olive" : "text-coffee/70"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-olive px-6 py-3 text-xs font-bold uppercase tracking-wide text-cream"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Fale conosco
              </a>
            </div>
          </nav>
        )}
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
