import Image from "next/image";
import { formatPrice, type MenuItem } from "@/data/menu";

/**
 * Card de produto em dois formatos.
 *
 * `horizontal` põe a foto à esquerda e o texto ao lado, para grades largas de
 * poucas colunas. Sem ele, a foto fica em cima e o texto embaixo, que é o que
 * cabe numa grade de três ou quatro colunas.
 */
export default function ProductCard({
  item,
  horizontal = false,
}: {
  item: MenuItem;
  horizontal?: boolean;
}) {
  if (horizontal) {
    return (
      <div className="group flex overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-coffee/5 transition hover:shadow-md">
        {/* self-stretch em vez de proporção fixa: a foto acompanha a altura do
            card, senão uma descrição longa deixa um vazio ao lado dela.
            O min-h garante altura decente quando o texto é curto. */}
        <div className="relative w-32 shrink-0 self-stretch overflow-hidden sm:w-40 min-h-[8rem] sm:min-h-[10rem]">
          {/* Imagem placeholder do Unsplash — trocar pela foto real do produto */}
          <Image
            src={item.image}
            alt={item.name}
            fill
            sizes="(max-width: 768px) 40vw, 200px"
            className="object-cover transition duration-300 group-hover:scale-105"
          />
        </div>

        {/* min-w-0: sem isso o texto se recusa a encolher e empurra o preço
            para fora do card */}
        <div className="flex min-w-0 flex-1 flex-col justify-center gap-1.5 p-4 sm:p-5">
          <h3 className="font-title text-base font-bold leading-snug text-coffee sm:text-lg">
            {item.name}
          </h3>
          <p className="text-xs leading-relaxed text-coffee/70 sm:text-sm">{item.description}</p>
          <span className="mt-0.5 font-sans text-base font-bold text-brand-dark sm:text-lg">
            {formatPrice(item.price)}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-coffee/5 transition hover:shadow-md">
      <div className="relative h-32 w-full overflow-hidden sm:h-44">
        {/* Imagem placeholder do Unsplash — trocar pela foto real do produto */}
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-1 p-3 sm:gap-1.5 sm:p-4">
        {/* No mobile o card tem ~180px: nome e preço empilham para não espremer */}
        <div className="flex flex-col gap-0.5 sm:flex-row sm:items-start sm:justify-between sm:gap-2">
          {/* min-w-0 deixa o nome encolher; sem isso ele empurra o preço para
              fora do card e o valor aparece cortado ("R$ 12,") */}
          <h3 className="font-title text-sm font-bold leading-snug text-coffee sm:min-w-0 sm:text-base">
            {item.name}
          </h3>
          <span className="whitespace-nowrap font-sans text-sm font-semibold text-brand-dark sm:shrink-0 sm:text-base">
            {formatPrice(item.price)}
          </span>
        </div>
        <p className="text-xs leading-relaxed text-coffee/70 sm:text-sm">{item.description}</p>
      </div>
    </div>
  );
}
