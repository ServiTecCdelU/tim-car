"use client"

import { useState } from "react"
import { motion } from "motion/react"
import { MapPin } from "lucide-react"
import { cn } from "@/lib/utils"

type Node = { name: string; x: number; y: number; hub?: boolean }

const nodes: Node[] = [
  { name: "Córdoba", x: 70, y: 190 },
  { name: "San Francisco", x: 220, y: 160 },
  { name: "Santa Fe", x: 370, y: 120 },
  { name: "Paraná", x: 440, y: 175 },
  { name: "Rosario", x: 330, y: 300 },
  { name: "Concordia", x: 680, y: 70 },
  { name: "Concepción del Uruguay", x: 640, y: 235, hub: true },
  { name: "Gualeguaychú", x: 610, y: 335 },
  { name: "Buenos Aires", x: 470, y: 450 },
]

const routes = [
  { path: "M640 235 Q 690 150 680 70", dur: 4 },
  { path: "M640 235 Q 600 290 610 335 Q 560 420 470 450", dur: 6 },
  { path: "M640 235 Q 540 170 440 175 Q 410 130 370 120 Q 290 120 220 160 Q 140 200 70 190", dur: 9 },
  { path: "M640 235 Q 480 250 330 300", dur: 6 },
]

export function Network() {
  const [active, setActive] = useState<string | null>(null)

  return (
    <section id="red" className="relative overflow-hidden border-y border-border bg-muted/40 py-16 md:py-32">
      <div aria-hidden="true" className="grain absolute inset-0" />
      <div className="relative mx-auto grid max-w-7xl gap-8 px-4 md:gap-12 md:px-8 lg:grid-cols-[1fr_1.4fr] lg:items-center">
        <div>
          <p className="font-mono text-[10px] tracking-widest text-primary uppercase md:text-xs">Nuestra red</p>
          <h2 className="mt-3 text-balance text-3xl font-black tracking-tight uppercase sm:text-5xl md:mt-4 md:text-6xl [font-stretch:115%]">
            Siempre en movimiento por el centro del país
          </h2>
          <p className="mt-4 max-w-md text-pretty text-sm leading-relaxed text-muted-foreground md:mt-6 md:text-base">
            Conocé toda nuestra red de sucursales: amplia cobertura y ubicación estratégica para que tu carga
            llegue rápido.
          </p>
          <ul className="mt-6 grid grid-cols-2 gap-1.5 md:mt-8 md:gap-2">
            {nodes.map((n) => (
              <li key={n.name}>
                <button
                  type="button"
                  onMouseEnter={() => setActive(n.name)}
                  onMouseLeave={() => setActive(null)}
                  onFocus={() => setActive(n.name)}
                  onBlur={() => setActive(null)}
                  className={cn(
                    "flex w-full items-center gap-1.5 rounded-lg border px-2.5 py-2 text-left text-xs transition-colors md:gap-2 md:rounded-xl md:px-3 md:py-2.5 md:text-sm",
                    active === n.name
                      ? "border-primary bg-primary/15 text-foreground"
                      : "border-border text-foreground/80 hover:border-foreground/40",
                  )}
                >
                  <MapPin className={cn("size-4 shrink-0", n.hub ? "text-primary" : "text-secondary")} aria-hidden="true" />
                  {n.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative rounded-2xl border border-border bg-background/60 p-2 md:rounded-3xl md:p-8">
          <svg viewBox="0 0 760 500" className="h-auto w-full" role="img" aria-label="Esquema de rutas desde Concepción del Uruguay hacia nuestras sucursales">
            {routes.map((r, i) => (
              <g key={i}>
                <path d={r.path} fill="none" stroke="currentColor" strokeWidth="10" className="text-foreground/5" strokeLinecap="round" />
                <motion.path
                  d={r.path}
                  fill="none"
                  stroke="var(--secondary)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray="1 0"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.6, delay: i * 0.25, ease: "easeInOut" }}
                />
                <path d={r.path} fill="none" stroke="white" strokeOpacity="0.5" strokeWidth="1.5" strokeDasharray="6 10">
                  <animate attributeName="stroke-dashoffset" from="0" to="-32" dur="1s" repeatCount="indefinite" />
                </path>
                {[0, 0.5].map((offset) => (
                  <circle key={offset} r="6" fill="var(--primary)">
                    <animateMotion
                      dur={`${r.dur}s`}
                      begin={`${offset * r.dur}s`}
                      repeatCount="indefinite"
                      path={r.path}
                      rotate="auto"
                    />
                  </circle>
                ))}
              </g>
            ))}

            {nodes.map((n) => {
              const isActive = active === n.name
              return (
                <g key={n.name} transform={`translate(${n.x} ${n.y})`}>
                  {(n.hub || isActive) && (
                    <circle r="10" fill="var(--primary)" opacity="0.4">
                      <animate attributeName="r" from="10" to="34" dur="1.6s" repeatCount="indefinite" />
                      <animate attributeName="opacity" from="0.5" to="0" dur="1.6s" repeatCount="indefinite" />
                    </circle>
                  )}
                  <circle
                    r={n.hub ? 12 : isActive ? 10 : 7}
                    fill={n.hub || isActive ? "var(--primary)" : "var(--foreground)"}
                    stroke="var(--background)"
                    strokeWidth="3"
                    style={{ transition: "r 0.3s" }}
                  />
                  <text
                    y={n.y > 400 ? 34 : -20}
                    textAnchor="middle"
                    className={cn("text-[15px] font-semibold transition-opacity", isActive || n.hub ? "fill-foreground" : "fill-foreground/60")}
                  >
                    {n.name}
                  </text>
                </g>
              )
            })}
          </svg>
          <p className="mt-2 text-center font-mono text-[11px] tracking-widest text-muted-foreground uppercase">
            Esquema ilustrativo de rutas
          </p>
        </div>
      </div>
    </section>
  )
}
