"use client"

import { useRef } from "react"
import { motion, useScroll, useSpring, useTransform } from "motion/react"
import { MessageCircle, PackageCheck, Truck, Warehouse } from "lucide-react"

const steps = [
  { icon: MessageCircle, title: "Cotizás", body: "Nos escribís por WhatsApp y te pasamos presupuesto en poco tiempo." },
  { icon: Warehouse, title: "Recibimos", body: "Retiramos tu carga o la recibís en cualquiera de nuestros depósitos." },
  { icon: Truck, title: "Viaja", body: "Tránsito monitoreado con seguimiento satelital durante todo el recorrido." },
  { icon: PackageCheck, title: "Entregamos", body: "Llega a destino en tiempo y forma, puerta a puerta." },
]

export function ProcessSteps() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 60%"] })
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })
  const truckLeft = useTransform(progress, [0, 1], ["0%", "100%"])

  return (
    <section className="relative overflow-hidden border-y border-border bg-muted/40 py-16 md:py-28">
      <div aria-hidden="true" className="grain absolute inset-0" />
      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <p className="font-mono text-[10px] tracking-widest text-primary uppercase md:text-xs">Cómo trabajamos</p>
        <h2 className="mt-3 text-balance text-3xl font-black tracking-tight uppercase sm:text-5xl md:mt-4 md:text-6xl [font-stretch:115%]">
          De su depósito al destino
        </h2>

        <div ref={ref} className="mt-12 md:mt-16">
          <div aria-hidden="true" className="relative mx-6 hidden h-10 md:block">
            <div className="absolute inset-x-0 top-1/2 h-1 -translate-y-1/2 rounded-full bg-border" />
            <motion.div
              style={{ scaleX: progress }}
              className="absolute inset-x-0 top-1/2 h-1 origin-left -translate-y-1/2 rounded-full bg-primary"
            />
            <motion.div style={{ left: truckLeft }} className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2">
              <span className="flex size-10 animate-bounce-truck items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/40">
                <Truck className="size-5" />
              </span>
            </motion.div>
          </div>

          <ol className="grid gap-4 sm:grid-cols-2 md:mt-8 md:grid-cols-4">
            {steps.map((s, i) => (
              <motion.li
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                className="rounded-2xl border border-border bg-background/70 p-5 backdrop-blur-md md:p-6"
              >
                <div className="flex items-center justify-between">
                  <s.icon className="size-6 text-primary" aria-hidden="true" />
                  <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
                </div>
                <h3 className="mt-5 text-xl font-black tracking-tight uppercase [font-stretch:115%]">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
