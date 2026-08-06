"use client";

import Link from "next/link";
import { useState } from "react";
import { CloseIcon, MenuIcon, WhatsAppIcon } from "./icons";
import { whatsappLink } from "@/data/site";

export default function CardapioHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-coffee text-cream shadow-md">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-5 py-4">
        <Link href="/" className="font-serif text-lg font-semibold tracking-wide">
          Caramanhola
        </Link>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-cream/10 bg-coffee px-5 pb-5">
          <nav className="flex flex-col gap-3 pt-4 text-sm font-medium">
            <Link href="/" onClick={() => setOpen(false)} className="text-cream/90 hover:text-olive-light">
              Início
            </Link>
            <Link href="/#sobre" onClick={() => setOpen(false)} className="text-cream/90 hover:text-olive-light">
              Sobre
            </Link>
            <Link href="/#contato" onClick={() => setOpen(false)} className="text-cream/90 hover:text-olive-light">
              Contato
            </Link>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-flex items-center gap-2 rounded-full bg-olive px-4 py-2 text-cream"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Fale conosco
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
