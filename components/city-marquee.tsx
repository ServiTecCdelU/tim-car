import { Truck } from "lucide-react"
import { cities } from "@/lib/site"

export function CityMarquee() {
  const loop = [...cities, ...cities]

  return (
    <section id="cobertura" aria-label="Destinos que cubrimos" className="relative -rotate-1 overflow-hidden bg-primary py-5">
      <div className="flex w-max animate-marquee items-center gap-10 whitespace-nowrap">
        {loop.map((city, i) => (
          <span
            key={i}
            aria-hidden={i >= cities.length}
            className="flex items-center gap-10 text-2xl font-black tracking-tight text-primary-foreground uppercase md:text-4xl [font-stretch:115%]"
          >
            {city}
            <Truck className="size-7 shrink-0 md:size-9" aria-hidden="true" />
          </span>
        ))}
      </div>
    </section>
  )
}
