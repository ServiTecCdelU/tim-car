"use client"

import { useState } from "react"
import { AnimatePresence, LayoutGroup, motion } from "motion/react"
import { MapPin, MessageCircle, Navigation, Phone, Star } from "lucide-react"
import { branches, mapsLink, whatsappLink, type Province } from "@/lib/site"
import { cn } from "@/lib/utils"

const filters: ("Todas" | Province)[] = ["Todas", "Entre Ríos", "Santa Fe", "Córdoba", "Buenos Aires"]

export function BranchesExplorer() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("Todas")
  const visible = filter === "Todas" ? branches : branches.filter((b) => b.province === filter)

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-28">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-mono text-[10px] tracking-widest text-primary uppercase md:text-xs">
            {branches.length} puntos de atención
          </p>
          <h2 className="mt-3 text-balance text-3xl font-black tracking-tight uppercase sm:text-5xl md:mt-4 md:text-6xl [font-stretch:115%]">
            Encontrá tu sucursal
          </h2>
        </div>

        <LayoutGroup>
          <div role="tablist" aria-label="Filtrar por provincia" className="flex flex-wrap gap-2">
            {filters.map((f) => {
              const active = filter === f
              return (
                <button
                  key={f}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setFilter(f)}
                  className={cn(
                    "relative rounded-full border px-4 py-2 text-sm font-semibold transition-colors",
                    active ? "border-primary text-primary-foreground" : "border-border text-foreground/75 hover:text-foreground",
                  )}
                >
                  {active && (
                    <motion.span
                      layoutId="branch-filter"
                      className="absolute inset-0 rounded-full bg-primary"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className="relative">{f}</span>
                </button>
              )
            })}
          </div>
        </LayoutGroup>
      </div>

      <motion.ul layout className="mt-10 grid gap-4 sm:grid-cols-2 md:mt-14 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((b, i) => (
            <motion.li
              key={b.city}
              layout
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: i * 0.05, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className={cn(
                "group relative flex flex-col overflow-hidden rounded-2xl border p-5 transition-colors md:p-6",
                b.hub
                  ? "border-primary bg-primary/10 sm:col-span-2 lg:col-span-1"
                  : "border-border bg-card hover:border-foreground/30",
              )}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase md:text-[11px]">
                    {b.province}
                  </p>
                  <h3 className="mt-1 text-2xl font-black tracking-tight uppercase [font-stretch:115%]">{b.city}</h3>
                </div>
                {b.hub ? (
                  <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-primary px-2.5 py-1 text-[10px] font-bold tracking-wide text-primary-foreground uppercase">
                    <Star className="size-3" aria-hidden="true" />
                    Casa central
                  </span>
                ) : (
                  <span className="relative mt-1 flex size-2.5 shrink-0">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-secondary opacity-60" />
                    <span className="relative inline-flex size-2.5 rounded-full bg-secondary" />
                  </span>
                )}
              </div>

              <ul className="mt-5 flex flex-col gap-2.5 text-sm">
                <li className="flex items-start gap-2.5">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                  <span>{b.address}</span>
                </li>
                {b.phones.map((p) => (
                  <li key={p.href} className="flex items-center gap-2.5">
                    <Phone className="size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                    <a href={p.href} className="hover:text-primary">
                      {p.label}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex gap-2 pt-1 md:mt-auto md:pt-6">
                <a
                  href={whatsappLink(b.whatsapp, `Hola Tim Car ${b.city}, quiero hacer una consulta`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-foreground px-4 py-2.5 text-sm font-semibold text-background transition-transform hover:scale-[1.03]"
                >
                  <MessageCircle className="size-4" aria-hidden="true" />
                  WhatsApp
                </a>
                <a
                  href={mapsLink(`${b.address}, ${b.city}, ${b.province}, Argentina`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-border px-4 py-2.5 text-sm font-semibold transition-colors hover:border-foreground"
                >
                  <Navigation className="size-4 transition-transform group-hover:rotate-45" aria-hidden="true" />
                  Cómo llegar
                </a>
              </div>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </section>
  )
}
