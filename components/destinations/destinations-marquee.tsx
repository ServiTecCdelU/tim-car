import { destinations } from "@/lib/site"

function Row({ items, reverse }: { items: string[]; reverse?: boolean }) {
  const doubled = [...items, ...items]
  return (
    <div className="flex overflow-hidden">
      <ul
        className="flex shrink-0 animate-marquee items-center gap-6 pr-6 md:gap-10 md:pr-10"
        style={reverse ? { animationDirection: "reverse" } : undefined}
      >
        {doubled.map((d, i) => (
          <li
            key={`${d}-${i}`}
            className="flex items-center gap-6 text-3xl font-black whitespace-nowrap uppercase md:gap-10 md:text-6xl [font-stretch:120%]"
          >
            <span className={i % 2 === 0 ? "text-foreground" : "text-transparent [-webkit-text-stroke:1px_var(--color-foreground)]"}>
              {d}
            </span>
            <span className="size-2 rounded-full bg-primary md:size-3" />
          </li>
        ))}
      </ul>
    </div>
  )
}

export function DestinationsMarquee() {
  const half = Math.ceil(destinations.length / 2)
  return (
    <section aria-label="Localidades destacadas" className="flex flex-col gap-4 overflow-hidden border-y border-border py-10 md:gap-6 md:py-16">
      <Row items={destinations.slice(0, half)} />
      <Row items={destinations.slice(half)} reverse />
    </section>
  )
}
