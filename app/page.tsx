import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import MenuBrowser from "@/components/MenuBrowser";
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
import { siteConfig, whatsappLink } from "@/data/site";

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

export default function HomePage() {
  return (
    <>
      <SiteHeader />

      <main>
        {/* Hero */}
        <section id="inicio" className="relative flex min-h-[90vh] items-center justify-center overflow-hidden pt-20">
          {/* Foto de fundo placeholder — trocar pela foto real da loja/ambiente */}
          <Image
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1800&q=80"
            alt="Ambiente da Caramanhola"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-coffee/70" />
          <div className="relative z-10 mx-auto max-w-3xl px-5 text-center text-cream">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-olive-light">Seja bem-vindo</p>
            <h1 className="mt-4 font-serif text-5xl font-bold sm:text-7xl">Caramanhola</h1>
            <p className="mt-3 font-serif text-2xl sm:text-3xl">Lanches &amp; café</p>
            <p className="mx-auto mt-5 max-w-xl text-base text-cream/85 sm:text-lg">{siteConfig.slogan}</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/cardapio"
                className="rounded-full bg-olive px-7 py-3 text-sm font-semibold text-cream transition hover:bg-olive-dark"
              >
                Ver cardápio
              </Link>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/40 px-7 py-3 text-sm font-semibold text-cream transition hover:bg-cream/10"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Fale conosco
              </a>
            </div>
          </div>
        </section>

        {/* Sobre a loja */}
        <section id="sobre" className="bg-cream py-20">
          <div className="mx-auto max-w-6xl px-5">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-olive-dark">Sobre a loja</p>
                <h2 className="mt-3 font-serif text-3xl font-bold text-coffee sm:text-4xl">
                  Muito mais que café e lanches
                </h2>
                <p className="mt-4 text-base leading-relaxed text-coffee/75">
                  Nascemos do desejo de criar um lugar onde cada xícara de café e cada lanche contam uma
                  história. Na Caramanhola, unimos receitas afetivas, ingredientes selecionados e um ambiente
                  pensado para acolher — porque acreditamos que os melhores momentos merecem o melhor sabor.
                </p>

                <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {differentiators.map(({ icon: Icon, title, text }) => (
                    <div key={title} className="flex gap-3">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-olive/10 text-olive-dark">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="font-semibold text-coffee">{title}</p>
                        <p className="mt-1 text-sm text-coffee/70">{text}</p>
                      </div>
                    </div>
                  ))}
                </div>

              </div>

              <div>
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
                <div className="flex flex-wrap items-center justify-between gap-3 rounded-b-3xl bg-olive px-6 py-4 text-cream">
                  <span className="text-sm font-semibold">Redes sociais</span>
                  <div className="flex items-center gap-3">
                    <a
                      href={siteConfig.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram da Caramanhola"
                      className="rounded-full bg-cream/15 p-2 transition hover:bg-cream/25"
                    >
                      <InstagramIcon className="h-4 w-4" />
                    </a>
                    <a
                      href={siteConfig.facebookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook da Caramanhola"
                      className="rounded-full bg-cream/15 p-2 transition hover:bg-cream/25"
                    >
                      <FacebookIcon className="h-4 w-4" />
                    </a>
                  </div>
                  <span className="text-xs text-cream/75">e muito mais</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cardápio preview */}
        <section id="cardapio" className="bg-cream-dark py-20">
          <div className="mx-auto max-w-6xl px-5">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-olive-dark">Cardápio</p>
              <h2 className="mt-3 font-serif text-3xl font-bold text-coffee sm:text-4xl">
                Sabores para todos os momentos
              </h2>
              <p className="mt-4 text-base text-coffee/75">
                Do cafezinho da manhã ao lanche da tarde, prepare-se para se apaixonar por cada item.
              </p>
            </div>

            <div className="mt-10">
              <MenuBrowser highlightOnly />
            </div>

            <div className="mt-10 text-center">
              <Link
                href="/cardapio"
                className="inline-flex rounded-full bg-coffee px-8 py-3 text-sm font-semibold text-cream transition hover:bg-coffee-light"
              >
                Ver mais itens
              </Link>
            </div>

            {/* Banner QR code */}
            <div className="mt-16 flex flex-col items-center gap-6 rounded-3xl bg-coffee px-6 py-10 text-center text-cream sm:flex-row sm:justify-between sm:text-left">
              <div>
                <h3 className="font-serif text-2xl font-semibold">
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
            </div>
          </div>
        </section>

        {/* Contato */}
        <section id="contato" className="py-20">
          <div className="mx-auto max-w-6xl px-5">
            <div className="grid gap-10 lg:grid-cols-2">
              <div className="flex flex-col justify-center">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-olive-dark">Contato</p>
                <h2 className="mt-3 font-serif text-3xl font-bold text-coffee sm:text-4xl">Fale com a gente</h2>
                <p className="mt-4 text-base leading-relaxed text-coffee/75">
                  Dúvidas, encomendas ou sugestões? Nossa equipe está pronta para te atender pelo WhatsApp.
                </p>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-olive px-7 py-3 text-sm font-semibold text-cream transition hover:bg-olive-dark"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  Conversar no WhatsApp
                </a>

                <div className="mt-8 flex items-start gap-2 text-sm text-coffee/75">
                  <MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-olive-dark" />
                  <span>{siteConfig.address}</span>
                </div>
              </div>

              <div className="h-80 overflow-hidden rounded-3xl shadow-lg lg:h-full">
                {/* Placeholder do Google Maps — sem necessidade de chave de API */}
                <iframe
                  title="Localização da Caramanhola no Google Maps"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(siteConfig.address)}&output=embed`}
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
