import Image from "next/image";
import { formatPrice, type MenuItem } from "@/data/menu";

export default function ProductCard({ item }: { item: MenuItem }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-coffee/5 transition hover:shadow-md">
      <div className="relative h-40 w-full overflow-hidden sm:h-44">
        {/* Imagem placeholder do Unsplash — trocar pela foto real do produto */}
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-1.5 p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-title text-base font-bold leading-snug text-coffee">{item.name}</h3>
          <span className="shrink-0 whitespace-nowrap font-sans text-base font-semibold text-olive-dark">
            {formatPrice(item.price)}
          </span>
        </div>
        <p className="text-sm leading-relaxed text-coffee/70">{item.description}</p>
      </div>
    </div>
  );
}
