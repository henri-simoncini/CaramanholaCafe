import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import { TabLink } from "./SiteShell";
import {
  ClockIcon,
  FacebookIcon,
  HomeHeartIcon,
  InstagramIcon,
  LeafIcon,
  MapPinIcon,
  StarIcon,
  WhatsAppIcon,
} from "./icons";
import { formatPrice, mostOrdered } from "@/data/menu";
import { siteConfig, whatsappLink } from "@/data/site";

const perks = [
  {
    icon: LeafIcon,
    title: "Ingredientes de qualidade",
    text: "Fornecedores locais e produtos frescos todos os dias.",
  },
  {
    icon: ClockIcon,
    title: "Preparo na hora",
    text: "Cada pedido feito no momento, com atenção ao detalhe.",
  },
  {
    icon: HomeHeartIcon,
    title: "Ambiente acolhedor",
    text: "Um cantinho para relaxar, trabalhar ou encontrar amigos.",
  },
];

export default function HeroSection() {
  return (
    <section className="overflow-hidden bg-cream">
      <div className="mx-auto max-w-7xl px-5 pb-10 pt-10 lg:pt-16">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-8">
          {/* Coluna do título.
              min-w-0 é obrigatório: os itens de grid nascem com min-width:auto e
              se recusam a encolher abaixo do conteúdo. Como o card de mais
              pedidos usa truncate (white-space:nowrap), o texto sem quebra
              esticava a coluna para ~634px numa tela de 375px, e o
              overflow-hidden da seção só escondia o estrago. */}
          <div className="min-w-0">
            {/* O título sai primeiro; o resto vem em escada atrás dele */}
            <Reveal>
              <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-brand-dark">
                <span aria-hidden="true" className="inline-flex gap-1">
                  <span className="h-2 w-2 rounded-full bg-brand" />
                  <span className="h-2 w-2 rounded-full bg-brand/40" />
                </span>
                Café · pão de queijo e mais
              </p>

              {/* font-black (900) só aqui: é o peso que sustenta o tipo gigante.
                  Os demais títulos usam a mesma Montserrat em 700. */}
              <h1 className="mt-5 font-title text-[3.5rem] font-black uppercase leading-[0.92] tracking-tight text-coffee sm:text-7xl lg:text-[5.5rem]">
                <span className="block">Pare.</span>
                <span className="block text-brand">Respire.</span>
                <span className="block">Repita.</span>
              </h1>
            </Reveal>

            <Reveal delay={140}>
              <p className="mt-6 max-w-md text-base leading-relaxed text-coffee/75">
                Café fresco, pão de queijo quentinho e lanches feitos na hora — numa
                parada tranquila no Centro de São Pedro da Aldeia.
              </p>
            </Reveal>

            <Reveal delay={260} className="mt-8 flex flex-wrap gap-3">
              <TabLink
                to="cardapio"
                className="rounded-full bg-brand-dark px-8 py-4 text-xs font-bold uppercase tracking-wide text-white transition hover:bg-brand-darkest"
              >
                Ver cardápio
              </TabLink>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-brand/50 px-8 py-4 text-xs font-bold uppercase tracking-wide text-brand-dark transition hover:bg-brand/5"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Fale conosco
              </a>
            </Reveal>
          </div>

          {/* Coluna da foto com o card de mais pedidos sobreposto */}
          <Reveal delay={380} className="relative min-w-0">
            {/* Formas decorativas atrás da foto, como no modelo */}
            <div
              aria-hidden="true"
              className="absolute -top-6 right-6 h-56 w-56 rounded-full bg-brand/20 lg:h-72 lg:w-72"
            />
            <div
              aria-hidden="true"
              className="absolute -top-2 left-2 h-40 w-40 rounded-full bg-brand/10 lg:h-52 lg:w-52"
            />

            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-xl">
              {/* Imagem placeholder — trocar pela foto real do balcão/produtos */}
              <Image
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1600&q=80"
                alt="Café coado e lanches servidos na Caramanhola"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
              />
            </div>

            <div className="relative z-10 mx-auto -mt-10 w-[92%] rounded-2xl bg-coffee p-5 text-cream shadow-2xl lg:absolute lg:-bottom-6 lg:right-0 lg:mt-0 lg:w-[19rem]">
              <div className="flex items-center justify-between">
                <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-brand-lightest">
                  Mais pedidos
                </p>
                <TabLink
                  to="cardapio"
                  className="text-[11px] font-semibold uppercase tracking-wide text-cream/70 transition hover:text-cream"
                >
                  Ver tudo
                </TabLink>
              </div>

              <ul className="mt-3 divide-y divide-cream/10">
                {mostOrdered.slice(0, 4).map((item) => (
                  <li key={item.id} className="flex items-center gap-3 py-2.5">
                    <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full">
                      <Image src={item.image} alt="" fill sizes="44px" className="object-cover" />
                    </div>
                    {/* line-clamp em vez de truncate: deixa o nome quebrar em
                        duas linhas ("CAPPUCCINO TRADI…" não informava nada) e,
                        por não usar white-space:nowrap, não infla a largura
                        mínima do card */}
                    <div className="min-w-0 flex-1">
                      <p className="line-clamp-2 text-xs font-bold uppercase leading-tight tracking-wide">
                        {item.name}
                      </p>
                      <p className="line-clamp-1 text-[11px] leading-snug text-cream/60">
                        {item.description}
                      </p>
                    </div>
                    <span className="shrink-0 text-sm font-semibold text-brand-lightest">
                      {formatPrice(item.price)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* Diferenciais — cada um entra logo depois do anterior */}
        <div className="mt-16 grid gap-8 border-t border-coffee/10 pt-10 sm:grid-cols-3 lg:mt-24">
          {perks.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 120} className="flex gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-brand/30 text-brand-dark">
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-coffee">{title}</p>
                <p className="mt-1 text-sm leading-relaxed text-coffee/65">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Barra escura de informações */}
      <div className="mx-auto max-w-7xl px-5 pb-16">
        <Reveal className="grid overflow-hidden rounded-3xl bg-coffee lg:grid-cols-[minmax(0,1fr)_auto]">
          <div className="grid gap-6 p-7 sm:grid-cols-3">
            <div className="flex items-center gap-3">
              <ClockIcon className="h-6 w-6 shrink-0 text-brand-lightest" />
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wide text-cream">Aberto hoje</p>
                <p className="text-xs text-cream/65">{siteConfig.hoursShort}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPinIcon className="h-6 w-6 shrink-0 text-brand-lightest" />
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wide text-cream">Onde estamos</p>
                <p className="text-xs text-cream/65">Campo Redondo, São Pedro da Aldeia</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <StarIcon className="h-6 w-6 shrink-0 text-brand-lightest" />
              <div>
                {/* O @ visível importa: é por ele que as pessoas procuram a
                    loja na busca do Instagram, não pelo ícone */}
                <p className="text-[11px] font-bold uppercase tracking-wide text-cream">
                  {siteConfig.instagramHandle}
                </p>
                <div className="mt-1 flex gap-2">
                  <a
                    href={siteConfig.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram da Caramanhola"
                    className="rounded-full bg-cream/10 p-1.5 text-cream transition hover:bg-cream/20"
                  >
                    <InstagramIcon className="h-3.5 w-3.5" />
                  </a>
                  <a
                    href={siteConfig.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook da Caramanhola"
                    className="rounded-full bg-cream/10 p-1.5 text-cream transition hover:bg-cream/20"
                  >
                    <FacebookIcon className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Branco, não cream: o fundo da seção também é cream e o card sumia
              contra ele — parecia que a barra escura acabava e sobrava texto
              solto no meio do nada. */}
          <div className="flex items-center gap-4 bg-white p-7 lg:rounded-l-3xl">
            <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand-dark sm:flex">
              <LeafIcon className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-coffee">
                Cardápio na mesa
              </p>
              <p className="mt-0.5 max-w-[15rem] text-xs leading-snug text-coffee/65">
                Aponte a câmera para o QR Code e peça sem sair do lugar.
              </p>
              <Link
                href="/cardapio"
                className="mt-1.5 inline-block text-xs font-bold uppercase tracking-wide text-brand-dark hover:underline"
              >
                Abrir cardápio →
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
