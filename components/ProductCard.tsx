import Image from "next/image";
import { formatPrice, type MenuItem } from "@/data/menu";

export default function ProductCard({ item }: { item: MenuItem }) {
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
