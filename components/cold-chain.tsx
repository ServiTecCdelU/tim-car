"use client"

import Image from "next/image"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"
import { BadgeCheck, Satellite, Snowflake, Truck } from "lucide-react"

const features = [
  {
    icon: Snowflake,
    title: "Cadena de frío garantizada",
    body: "Mantenemos la temperatura durante toda la estadía en tránsito de la mercadería.",
  },
  {
    icon: Truck,
    title: "Camiones térmicos de gran porte",
    body: "Unidades cerradas preparadas para cargas refrigeradas y secas.",
  },
  {
    icon: Satellite,
    title: "Seguimiento satelital",
    body: "Monitoreo en ruta y dispositivos de control de temperatura en cada viaje.",
  },
  {
    icon: BadgeCheck,
    title: "Habilitación SENASA y VTV",
    body: "Contamos con habilitación de SENASA y Verificación Técnica Vehicular Nacional.",
  },
]

export function ColdChain() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"])
  const imgY = useTransform(scrollYProgress, [0, 1], [80, -80])

  return (
    <section id="servicios" ref={ref} className="relative overflow-hidden py-16 md:py-40">
      <motion.div style={{ y }} className="absolute -inset-y-[15%] inset-x-0">
        <video
          src="/videos/camion-noche.mp4"
          poster="/images/poster-noche.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          className="size-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-background/75" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 md:gap-14 md:px-8 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="font-mono text-[10px] tracking-widest text-primary uppercase md:text-xs">Nuestros servicios de cargas</p>
          <h2 className="mt-3 text-balance text-3xl font-black tracking-tight uppercase sm:text-5xl md:mt-4 md:text-6xl [font-stretch:115%]">
            Su carga, a la temperatura justa
          </h2>
          <ul className="mt-6 grid grid-cols-2 gap-2.5 md:mt-10 md:gap-4">
            {features.map((f, i) => (
              <motion.li
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group rounded-xl border border-border bg-background/60 p-3.5 backdrop-blur-md transition-colors hover:border-primary md:rounded-2xl md:p-5"
              >
                <div className="flex size-8 items-center justify-center rounded-lg bg-secondary text-secondary-foreground transition-transform group-hover:-rotate-6 group-hover:scale-110 md:size-11 md:rounded-xl">
                  <f.icon className="size-4 md:size-5" aria-hidden="true" />
                </div>
                <h3 className="mt-3 text-sm leading-snug font-bold md:mt-4 md:text-base">{f.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground md:mt-1.5 md:text-sm">{f.body}</p>
              </motion.li>
            ))}
          </ul>
        </div>

        <motion.div style={{ y: imgY }} className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border md:aspect-[4/5] md:rounded-3xl">
          <Image
            src="/images/cadena-frio.png"
            alt="Interior de un camión térmico con pallets refrigerados"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-x-3 bottom-3 flex items-center gap-3 rounded-xl border border-border bg-background/70 p-3 backdrop-blur-md md:inset-x-5 md:bottom-5 md:gap-4 md:rounded-2xl md:p-4">
            <span className="relative flex size-3">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-secondary opacity-75" />
              <span className="relative inline-flex size-3 rounded-full bg-secondary" />
            </span>
            <div>
              <p className="font-mono text-[11px] tracking-widest text-muted-foreground uppercase">Control de temperatura</p>
              <p className="text-sm font-bold md:text-lg">Monitoreo activo en ruta</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
