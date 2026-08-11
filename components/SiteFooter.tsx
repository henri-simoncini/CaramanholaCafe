import Image from "next/image";
import Link from "next/link";
import { FacebookIcon, InstagramIcon, MapPinIcon } from "./icons";
import { siteConfig } from "@/data/site";

const navLinks = [
  { href: "/#inicio", label: "Início" },
  { href: "/#sobre", label: "Sobre" },
  { href: "/#cardapio", label: "Cardápio" },
  { href: "/#contato", label: "Contato" },
];

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-coffee text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-4">
        <div>
          <Image
            src="/logo.png"
            alt="Logotipo da Caramanhola Café"
            width={274}
            height={274}
            className="h-20 w-20 rounded-full"
          />
          <p className="mt-3 text-sm text-cream/70">
            Café, lanches e boas histórias para o seu dia ser melhor.
          </p>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-olive-light">Navegação</p>
          <ul className="space-y-2 text-sm text-cream/80">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-olive-light">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-olive-light">Horário</p>
          <ul className="space-y-1.5 text-sm text-cream/80">
            {siteConfig.hours.map((h) => (
              <li key={h.days} className="flex justify-between gap-4">
                <span>{h.days}</span>
                <span>{h.time}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-olive-light">Onde estamos</p>
          <a
            href={siteConfig.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-2 text-sm text-cream/80 transition hover:text-olive-light"
          >
            <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0" />
            {siteConfig.address}
          </a>
          <div className="mt-4 flex gap-3">
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da Caramanhola"
              className="rounded-full border border-cream/20 p-2 transition hover:border-olive-light hover:text-olive-light"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
            <a
              href={siteConfig.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook da Caramanhola"
              className="rounded-full border border-cream/20 p-2 transition hover:border-olive-light hover:text-olive-light"
            >
              <FacebookIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-cream/10 px-5 py-5 text-center text-xs text-cream/60">
        © {year} Caramanhola Lanches &amp; Café. Todos os direitos reservados.
      </div>
    </footer>
  );
}
