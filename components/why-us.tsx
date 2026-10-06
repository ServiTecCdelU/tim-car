"use client"

import Image from "next/image"
import { useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"
import { Truck } from "lucide-react"

const reasons = [
  {
    n: "01",
    title: "Una familia de transportistas",
    body: "Nacida hace más de 40 años, Expreso Tim Car es una empresa con raíces familiares. Hoy estamos distribuidos en 7 oficinas y contamos con más de 10 móviles. Nuestro objetivo: que su carga llegue a destino lo más rápido posible.",
    image: "/images/flota.png",
    alt: "Flota de camiones de Tim Car en el depósito al anochecer",
  },
  {
    n: "02",
    title: "Somos rápidos y confiables",
    body: "Nuestra red de cobertura asegura una entrega rápida y eficiente en más de 2000 km. Nuestro sistema logístico garantiza la entrega en un tiempo mínimo, y además disponemos de entrega puerta a puerta.",
    image: "/images/puerta-a-puerta.png",
    alt: "Operario descargando mercadería puerta a puerta",
  },
  {
    n: "03",
    title: "Unimos varios destinos",
    body: "Cubrimos el centro del país, pionero en el desarrollo agroindustrial e industrial de la república. Llevamos cargas varios días a la semana a todos los puntos neurálgicos.",
    image: "/images/nueva-sucursal-02.jpg",
    alt: "Vista aérea de un centro logístico con camiones",
  },
]

function ScrollTruck() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const x = useTransform(scrollYProgress, [0, 1], ["-10%", "100%"])

  return (
    <div ref={ref} aria-hidden="true" className="relative my-8 h-12 overflow-hidden md:my-16 md:h-16">
      <div className="absolute inset-x-0 top-1/2 h-px bg-border" />
      <div className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 road-lines opacity-30" />
      <motion.div style={{ x }} className="absolute top-1/2 left-0 flex -translate-y-1/2 items-center">
        <div className="h-1 w-24 bg-gradient-to-r from-transparent to-primary md:w-40" />
        <div className="flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_0_40px] shadow-primary/60 md:size-14">
          <Truck className="size-5 md:size-7" />
        </div>
      </motion.div>
    </div>
  )
}

export function WhyUs() {
  return (
    <section id="nosotros" className="relative mx-auto max-w-7xl px-4 pb-16 md:px-8 md:pb-32">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between md:gap-6">
        <motion.h2
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-balance text-3xl font-black tracking-tight uppercase sm:text-5xl md:text-7xl [font-stretch:115%]"
        >
          ¿Por qué elegir <span className="text-primary">Tim Car</span>?
        </motion.h2>
        <p className="max-w-sm text-pretty text-sm text-muted-foreground md:text-base">
          Experiencia de familia, logística profesional y una red que no para de crecer.
        </p>
      </div>

      <ScrollTruck />

      <div className="-mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-2 [scrollbar-width:none] md:mx-0 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0 md:pb-0">
        {reasons.map((r, i) => (
          <motion.article
            key={r.n}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: i * 0.12 }}
            className="group relative flex min-h-[20rem] w-[78%] shrink-0 snap-start flex-col justify-end overflow-hidden rounded-2xl border border-border md:min-h-[28rem] md:w-auto md:rounded-3xl"
          >
            <Image
              src={r.image}
              alt={r.alt}
              fill
              sizes="(min-width: 768px) 33vw, 80vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/10 transition-opacity duration-500 group-hover:via-background/70" />
            <div className="relative p-5 md:p-7">
              <span className="font-mono text-xs text-primary md:text-sm">{r.n}</span>
              <h3 className="mt-1 text-lg font-bold tracking-tight md:mt-2 md:text-2xl">{r.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-foreground/75 md:mt-3 md:text-sm">{r.body}</p>
            </div>
            <div className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-primary transition-transform duration-500 group-hover:scale-x-100" />
          </motion.article>
        ))}
      </div>
    </section>
  )
}
