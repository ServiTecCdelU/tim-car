"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { MapPin, Search, X } from "lucide-react"
import { CountUp } from "@/components/count-up"
import { destinations, whatsappLink } from "@/lib/site"

const normalize = (s: string) =>
  s
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()

export function DestinationsExplorer() {
  const [query, setQuery] = useState("")
  const q = normalize(query.trim())
  const results = q ? destinations.filter((d) => normalize(d).includes(q)) : destinations

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-28">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="font-mono text-[10px] tracking-widest text-primary uppercase md:text-xs">Distribución en Entre Ríos</p>
          <p className="mt-4 text-8xl leading-none font-black tabular-nums md:text-9xl [font-stretch:125%]">
            <CountUp to={destinations.length} />
          </p>
          <h2 className="mt-2 text-balance text-2xl font-black tracking-tight uppercase md:text-4xl [font-stretch:115%]">
            Localidades a las que llegamos
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Desde nuestra casa central en Concepción del Uruguay distribuimos a toda la provincia. ¿No encontrás tu
            localidad? Consultanos igual: presupuestamos envíos a cualquier punto del país.
          </p>

          <label htmlFor="destino-search" className="sr-only">
            Buscar localidad
          </label>
          <div className="relative mt-8">
            <Search className="pointer-events-none absolute top-1/2 left-4 size-5 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
            <input
              id="destino-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscá tu localidad..."
              autoComplete="off"
              className="w-full rounded-full border border-border bg-card py-4 pr-12 pl-12 text-base outline-none transition-colors placeholder:text-muted-foreground focus:border-primary [&::-webkit-search-cancel-button]:hidden"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                className="absolute top-1/2 right-3 flex size-8 -translate-y-1/2 items-center justify-center rounded-full bg-muted hover:bg-primary"
              >
                <X className="size-4" aria-hidden="true" />
                <span className="sr-only">Limpiar búsqueda</span>
              </button>
            )}
          </div>
          <p className="mt-3 text-sm text-muted-foreground" aria-live="polite">
            {q ? `${results.length} resultado${results.length === 1 ? "" : "s"}` : "Mostrando todas las localidades"}
          </p>
        </div>

        <div>
          <motion.ul layout className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:gap-3">
            <AnimatePresence mode="popLayout">
              {results.map((d, i) => (
                <motion.li
                  key={d}
                  layout
                  initial={{ opacity: 0, scale: 0.85, y: 16 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.85 }}
                  transition={{ delay: q ? 0 : Math.min(i * 0.025, 0.6), type: "spring", stiffness: 300, damping: 26 }}
                >
                  <a
                    href={whatsappLink("543442307130", `Hola Tim Car, quiero cotizar un envío a ${d}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 rounded-xl border border-border bg-card px-3 py-3 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:border-primary hover:bg-primary hover:text-primary-foreground md:px-4 md:py-4 md:text-base"
                  >
                    <MapPin className="size-4 shrink-0 text-primary transition-colors group-hover:text-primary-foreground" aria-hidden="true" />
                    <span className="truncate">{d}</span>
                  </a>
                </motion.li>
              ))}
            </AnimatePresence>
          </motion.ul>

          {results.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-2xl border border-dashed border-border p-8 text-center"
            >
              <p className="font-semibold">{`No encontramos "${query}" en la lista`}</p>
              <a
                href={whatsappLink("543442307130", `Hola Tim Car, ¿llegan a ${query}?`)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
              >
                Consultar por WhatsApp
              </a>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}
