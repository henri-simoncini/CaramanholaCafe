import type { Metadata } from "next";
import Image from "next/image";
import CardapioHeader from "@/components/CardapioHeader";
import MenuBrowser from "@/components/MenuBrowser";
import { siteConfig } from "@/data/site";
import { featuredItem, formatPrice, mostOrdered } from "@/data/menu";

export const metadata: Metadata = {
  title: "Cardápio | Caramanhola Lanches & Café",
  description: "Confira o cardápio completo da Caramanhola: cafés, salgados, doces, bebidas e combos.",
};

export default function CardapioPage() {
  return (
    <>
      <CardapioHeader />

      <main className="mx-auto max-w-3xl px-5 pb-16">
        <div className="pt-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-olive-dark">Cardápio</p>
          <h1 className="mt-2 font-title text-3xl font-bold text-coffee">Sabor em cada detalhe</h1>
          <p className="mt-1 font-script text-2xl text-olive-dark">
            Cafés especiais, lanches artesanais e doces que acolhem.
          </p>
        </div>

        {/* Produto em destaque */}
        <section className="mt-8 overflow-hidden rounded-3xl bg-coffee text-cream shadow-lg">
          <div className="relative h-48 w-full">
            {/* Imagem placeholder do Unsplash — trocar pela foto real do produto em destaque */}
            <Image
              src={featuredItem.image}
              alt={featuredItem.name}
              fill
              sizes="(max-width: 768px) 100vw, 700px"
              className="object-cover"
            />
            <div className="absolute left-4 top-4 rounded-full bg-olive px-3 py-1 text-xs font-semibold uppercase tracking-wide">
              Destaque
            </div>
          </div>
          <div className="p-5">
            <div className="flex items-start justify-between gap-3">
              <h2 className="font-title text-xl font-bold">{featuredItem.name}</h2>
              <span className="whitespace-nowrap font-sans text-xl font-semibold text-olive-light">
                {formatPrice(featuredItem.price)}
              </span>
            </div>
            <p className="mt-2 text-sm text-cream/80">{featuredItem.description}</p>
          </div>
        </section>

        {/* Mais pedidos */}
        <section className="mt-10">
          <h2 className="font-title text-xl font-bold text-coffee">Mais pedidos</h2>
          <ol className="mt-4 space-y-3">
            {mostOrdered.map((item, index) => (
              <li
                key={item.id}
                className="flex items-center gap-4 rounded-2xl bg-white p-3 shadow-sm ring-1 ring-coffee/5"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-olive/10 font-sans text-sm font-bold text-olive-dark">
                  {index + 1}
                </span>
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl">
                  <Image src={item.image} alt={item.name} fill sizes="56px" className="object-cover" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate font-medium text-coffee">{item.name}</p>
                  <p className="truncate text-xs text-coffee/60">{item.description}</p>
                </div>
                <span className="shrink-0 font-sans text-sm font-semibold text-olive-dark">
                  {formatPrice(item.price)}
                </span>
              </li>
            ))}
          </ol>
        </section>

        {/* Cardápio completo */}
        <section className="mt-10">
          <h2 className="font-title text-xl font-bold text-coffee">Cardápio completo</h2>
          <div className="mt-4">
            <MenuBrowser sticky maxColumns={3} />
          </div>
        </section>
      </main>

      <footer className="border-t border-coffee/10 bg-cream-dark py-8 text-center text-sm text-coffee/70">
        <p>{siteConfig.address}</p>
        <p className="mt-1">Seg-Sex 7h-19h · Sáb 7h-14h · Dom fechado</p>
      </footer>
    </>
  );
}
