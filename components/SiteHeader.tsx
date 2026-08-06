"use client";

import Link from "next/link";
import { useState } from "react";
import { CloseIcon, MenuIcon, WhatsAppIcon } from "./icons";
import { whatsappLink } from "@/data/site";

const navLinks = [
  { href: "/#inicio", label: "Início" },
  { href: "/#sobre", label: "Sobre" },
  { href: "/#cardapio", label: "Cardápio" },
  { href: "/#contato", label: "Contato" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-coffee/95 backdrop-blur text-cream shadow-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link href="/#inicio" className="font-serif text-xl font-semibold tracking-wide">
          Caramanhola
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium tracking-wide text-cream/90 transition hover:text-olive-light"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 rounded-full bg-olive px-5 py-2 text-sm font-semibold text-cream transition hover:bg-olive-dark md:inline-flex"
        >
          <WhatsAppIcon className="h-4 w-4" />
          Fale conosco
        </a>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="text-cream md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon className="h-7 w-7" /> : <MenuIcon className="h-7 w-7" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-cream/10 bg-coffee px-5 pb-6 md:hidden">
          <nav className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-cream/90 transition hover:text-olive-light"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-olive px-5 py-2.5 text-sm font-semibold text-cream"
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
