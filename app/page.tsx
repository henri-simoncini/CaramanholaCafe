import Image from "next/image";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import MenuBrowser from "@/components/MenuBrowser";
import Reveal from "@/components/Reveal";
import SiteFooter from "@/components/SiteFooter";
import SiteShell, { type Tab } from "@/components/SiteShell";
import {
  ClockIcon,
  FacebookIcon,
  HomeHeartIcon,
  InstagramIcon,
  LeafIcon,
  MapPinIcon,
  StarIcon,
  WhatsAppIcon,
} from "@/components/icons";
import { mapsEmbedUrl, siteConfig, whatsappLink } from "@/data/site";

const differentiators = [
  {
    icon: LeafIcon,
    title: "Ingredientes de qualidade",
    text: "Selecionamos fornecedores locais e produtos frescos todos os dias.",
  },
  {
    icon: ClockIcon,
    title: "Preparo na hora",
    text: "Cada pedido é preparado no momento, sem pressa, com atenção ao detalhe.",
  },
  {
    icon: HomeHeartIcon,
    title: "Ambiente acolhedor",
    text: "Um cantinho pensado para você relaxar, trabalhar ou encontrar amigos.",
  },
  {
    icon: StarIcon,
    title: "Atendimento especial",
    text: "Nossa equipe trata cada cliente como parte da família Caramanhola.",
  },
];

function SobreSection() {
  return (
    <section className="bg-cream py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-dark">Sobre a loja</p>
              <h2 className="mt-3 font-title text-3xl font-black uppercase leading-tight text-coffee sm:text-4xl">
                Muito mais que café e lanches
              </h2>
            </Reveal>

            <Reveal delay={140}>
              <p className="mt-4 text-base leading-relaxed text-coffee/75">
                Nascemos do desejo de criar um lugar onde cada xícara de café e cada lanche contam uma
                história. Na Caramanhola, unimos receitas afetivas, ingredientes selecionados e um ambiente
                pensado para acolher — porque acreditamos que os melhores momentos merecem o melhor sabor.
              </p>
            </Reveal>

            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {differentiators.map(({ icon: Icon, title, text }, i) => (
                <Reveal key={title} delay={260 + i * 100} className="flex gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand-dark">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-bold uppercase tracking-wide text-coffee">{title}</p>
                    <p className="mt-1 text-sm text-coffee/70">{text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={200}>
            <div className="relative h-80 w-full overflow-hidden rounded-t-3xl shadow-lg sm:h-[28rem]">
              {/* Imagem placeholder da fachada — trocar pela foto real da loja */}
              <Image
                src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80"
                alt="Fachada da Caramanhola"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-wrap items-center justify-between gap-3 rounded-b-3xl bg-brand px-6 py-4 text-coffee">
              <span className="text-sm font-semibold">Redes sociais</span>
              <div className="flex items-center gap-3">
                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram da Caramanhola"
                  className="rounded-full bg-coffee/10 p-2 transition hover:bg-coffee/20"
                >
                  <InstagramIcon className="h-4 w-4" />
                </a>
                <a
                  href={siteConfig.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook da Caramanhola"
                  className="rounded-full bg-coffee/10 p-2 transition hover:bg-coffee/20"
                >
                  <FacebookIcon className="h-4 w-4" />
                </a>
              </div>
              <span className="text-xs text-coffee/70">e muito mais</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function CardapioSection() {
  return (
    <section className="bg-cream-dark py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-dark">Cardápio</p>
            <h2 className="mt-3 font-title text-3xl font-black uppercase leading-tight text-coffee sm:text-4xl">
              Sabores para todos os momentos
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-3 font-script text-2xl text-brand-dark sm:text-3xl">
              Do cafezinho da manhã ao lanche da tarde, prepare-se para se apaixonar por cada item.
            </p>
          </Reveal>
        </div>

        <Reveal delay={260} className="mt-10">
          <MenuBrowser highlightOnly />
        </Reveal>

        <Reveal delay={360} className="mt-10 text-center">
          <Link
            href="/cardapio"
            className="inline-flex rounded-full bg-coffee px-8 py-4 text-xs font-bold uppercase tracking-wide text-cream transition hover:bg-coffee-light"
          >
            Ver mais itens
          </Link>
        </Reveal>

        {/* Banner QR code */}
        <Reveal className="mt-16 flex flex-col items-center gap-6 rounded-3xl bg-coffee px-6 py-10 text-center text-cream sm:flex-row sm:justify-between sm:text-left">
          <div>
            <h3 className="font-title text-2xl font-bold uppercase">
              Veja o cardápio completo na mesa!
            </h3>
            <p className="mt-2 max-w-md text-sm text-cream/80">
              Aponte a câmera do seu celular para o QR Code e explore todos os nossos produtos.
            </p>
          </div>
          {/* QR code placeholder — trocar pelo QR code real gerado para /cardapio */}
          <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-2xl bg-cream p-3">
            <svg viewBox="0 0 100 100" className="h-full w-full text-coffee" aria-hidden="true">
              <rect x="0" y="0" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="6" />
              <rect x="10" y="10" width="10" height="10" fill="currentColor" />
              <rect x="70" y="0" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="6" />
              <rect x="80" y="10" width="10" height="10" fill="currentColor" />
              <rect x="0" y="70" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="6" />
              <rect x="10" y="80" width="10" height="10" fill="currentColor" />
              <rect x="40" y="0" width="8" height="8" fill="currentColor" />
              <rect x="55" y="10" width="8" height="8" fill="currentColor" />
              <rect x="40" y="20" width="8" height="8" fill="currentColor" />
              <rect x="40" y="40" width="8" height="8" fill="currentColor" />
              <rect x="55" y="40" width="8" height="8" fill="currentColor" />
              <rect x="70" y="40" width="8" height="8" fill="currentColor" />
              <rect x="85" y="45" width="8" height="8" fill="currentColor" />
              <rect x="40" y="55" width="8" height="8" fill="currentColor" />
              <rect x="55" y="60" width="8" height="8" fill="currentColor" />
              <rect x="70" y="65" width="8" height="8" fill="currentColor" />
              <rect x="40" y="75" width="8" height="8" fill="currentColor" />
              <rect x="55" y="85" width="8" height="8" fill="currentColor" />
              <rect x="70" y="80" width="8" height="8" fill="currentColor" />
              <rect x="85" y="85" width="8" height="8" fill="currentColor" />
            </svg>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ContatoSection() {
  return (
    <section className="bg-cream py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-dark">Contato</p>
              <h2 className="mt-3 font-title text-3xl font-black uppercase leading-tight text-coffee sm:text-4xl">
                Fale com a gente
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-4 text-base leading-relaxed text-coffee/75">
                Dúvidas, encomendas ou sugestões? Nossa equipe está pronta para te atender pelo WhatsApp.
              </p>
            </Reveal>
            <Reveal delay={260}>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-brand px-8 py-4 text-xs font-bold uppercase tracking-wide text-coffee transition hover:bg-brand-light"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Conversar no WhatsApp
              </a>

              {/* Número visível: quem quer salvar o contato ou ligar não
                  consegue fazer isso a partir de um botão só */}
              <p className="mt-4 text-sm text-coffee/75">
                Ou ligue para{" "}
                <a
                  href={`tel:+${siteConfig.whatsappNumber}`}
                  className="font-semibold text-brand-dark underline-offset-2 hover:underline"
                >
                  {siteConfig.whatsappDisplay}
                </a>
              </p>

              <div className="mt-8 flex items-start gap-2 text-sm text-coffee/75">
                <MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-dark" />
                <span>
                  {siteConfig.address}
                  <br />
                  CEP {siteConfig.cep}
                </span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200} className="h-80 overflow-hidden rounded-3xl shadow-lg lg:h-full lg:min-h-[24rem]">
            {/* Google Maps sem necessidade de chave de API */}
            <iframe
              title="Localização da Caramanhola no Google Maps"
              src={mapsEmbedUrl}
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const tabs: Tab[] = [
  { id: "inicio", label: "Início", content: <HeroSection /> },
  { id: "sobre", label: "Sobre", content: <SobreSection /> },
  { id: "cardapio", label: "Cardápio", content: <CardapioSection /> },
  { id: "contato", label: "Contato", content: <ContatoSection /> },
];

export default function HomePage() {
  return (
    <>
      <SiteShell tabs={tabs} />
      <SiteFooter />
      {/* Folga para a barra fixa do mobile não cobrir o fim do rodapé. Fica
          aqui, e não dentro do SiteShell, porque o rodapé é irmão dele. */}
      <div aria-hidden="true" className="h-20 bg-coffee md:hidden" />
    </>
  );
}
