"use client"

import { useRef } from "react"
import { motion, useScroll, useSpring } from "motion/react"
import { Cpu, Leaf, Rocket, Satellite, Truck } from "lucide-react"
import { cn } from "@/lib/utils"

const milestones = [
  {
    tag: "1980",
    icon: Rocket,
    title: "El comienzo",
    body: "Don Osvaldo René Timón funda Expreso Tim-Car en Concepción del Uruguay, Entre Ríos, como un emprendimiento familiar.",
  },
  {
    tag: "Los inicios",
    icon: Truck,
    title: "Un vehículo, una visión",
    body: "Con un Mercedes Benz 1114 y mucho esfuerzo, la empresa comenzó a trazar su camino en el transporte de cargas.",
  },
  {
    tag: "Crecimiento",
    icon: Satellite,
    title: "Tecnología en ruta",
    body: "Incorporamos rastreo satelital, sistemas de planificación de rutas y capacitaciones continuas. Diversificamos servicios hacia cargas especializadas.",
  },
  {
    tag: "Compromiso",
    icon: Leaf,
    title: "Sustentabilidad y comunidad",
    body: "Impulsamos un modelo de negocio consciente, que minimiza el impacto ambiental y fortalece el vínculo con la comunidad.",
  },
  {
    tag: "Hoy",
    icon: Cpu,
    title: "Hacia el futuro",
    body: "Con más de 40 años de trayectoria, apostamos a la digitalización, la inteligencia artificial y la sostenibilidad para ofrecer soluciones más ágiles y precisas.",
  },
]

export function AboutTimeline() {
  const ref = useRef<HTMLOListElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 55%"] })
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })

  return (
    <section className="relative overflow-hidden border-y border-border bg-muted/40 py-16 md:py-32">
      <div aria-hidden="true" className="grain absolute inset-0" />
      <div className="relative mx-auto max-w-6xl px-4 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-[10px] tracking-widest text-primary uppercase md:text-xs">Nuestro recorrido</p>
          <h2 className="mt-3 text-balance text-3xl font-black tracking-tight uppercase sm:text-5xl md:mt-4 md:text-6xl [font-stretch:115%]">
            Kilómetro a kilómetro
          </h2>
        </div>

        <ol ref={ref} className="relative mt-14 flex flex-col gap-10 md:mt-20 md:gap-16">
          <div aria-hidden="true" className="absolute top-0 bottom-0 left-5 w-0.5 -translate-x-1/2 bg-border md:left-1/2" />
          <motion.div
            aria-hidden="true"
            style={{ scaleY }}
            className="absolute top-0 bottom-0 left-5 w-0.5 origin-top -translate-x-1/2 bg-primary md:left-1/2"
          />

          {milestones.map((m, i) => {
            const right = i % 2 === 1
            return (
              <li key={m.title} className="relative grid pl-14 md:grid-cols-2 md:gap-20 md:pl-0">
                <motion.span
                  aria-hidden="true"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: "-30% 0px" }}
                  transition={{ type: "spring", stiffness: 260, damping: 16 }}
                  className="absolute top-1 left-5 z-10 flex size-10 -translate-x-1/2 items-center justify-center rounded-full border-4 border-background bg-primary text-primary-foreground md:left-1/2 md:size-12"
                >
                  <m.icon className="size-4 md:size-5" />
                </motion.span>

                <motion.div
                  initial={{ opacity: 0, x: right ? 60 : -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-20% 0px" }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className={cn(
                    "rounded-2xl border border-border bg-background/70 p-5 backdrop-blur-md transition-colors hover:border-primary md:p-7",
                    right ? "md:col-start-2" : "md:col-start-1 md:text-right",
                  )}
                >
                  <p className="font-mono text-xs tracking-widest text-primary uppercase">{m.tag}</p>
                  <h3 className="mt-2 text-xl font-black tracking-tight uppercase md:text-2xl [font-stretch:110%]">
                    {m.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">{m.body}</p>
                </motion.div>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
