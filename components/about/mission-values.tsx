"use client"

import { motion } from "motion/react"
import { Check, Eye, Target } from "lucide-react"

const pillars = [
  {
    icon: Target,
    title: "Misión",
    body: "Brindar soluciones logísticas eficientes, seguras y personalizadas, con un enfoque en la mejora continua y la satisfacción del cliente.",
  },
  {
    icon: Eye,
    title: "Visión",
    body: "Ser una empresa líder en transporte y logística, reconocida por su innovación, compromiso y excelencia en el servicio.",
  },
]

const values = [
  "Orientación al cliente",
  "Innovación permanente",
  "Compromiso con la calidad",
  "Contribución a la sociedad",
  "Desarrollo del capital humano",
  "Responsabilidad con los clientes",
  "Cuidado de los productos y mercadería",
  "Entregas en tiempo correcto",
]

export function MissionValues() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-32">
      <p className="font-mono text-[10px] tracking-widest text-primary uppercase md:text-xs">Lo que nos mueve</p>
      <h2 className="mt-3 max-w-3xl text-balance text-3xl font-black tracking-tight uppercase sm:text-5xl md:mt-4 md:text-6xl [font-stretch:115%]">
        Misión, visión y valores
      </h2>

      <div className="mt-10 grid gap-4 md:mt-14 md:grid-cols-2 md:gap-6">
        {pillars.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.7 }}
            whileHover={{ y: -6 }}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 md:rounded-3xl md:p-10"
          >
            <span
              aria-hidden="true"
              className="absolute -top-6 -right-2 text-[9rem] leading-none font-black text-foreground/[0.04] uppercase [font-stretch:120%] md:text-[12rem]"
            >
              {p.title}
            </span>
            <div className="relative flex size-12 items-center justify-center rounded-xl bg-secondary text-secondary-foreground transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110">
              <p.icon className="size-6" aria-hidden="true" />
            </div>
            <h3 className="relative mt-6 text-2xl font-black tracking-tight uppercase md:text-3xl [font-stretch:115%]">
              {p.title}
            </h3>
            <p className="relative mt-3 max-w-md text-pretty leading-relaxed text-muted-foreground md:text-lg">{p.body}</p>
          </motion.article>
        ))}

        <motion.article
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl bg-primary p-6 text-primary-foreground md:col-span-2 md:rounded-3xl md:p-10"
        >
          <h3 className="text-2xl font-black tracking-tight uppercase md:text-3xl [font-stretch:115%]">Valores</h3>
          <ul className="mt-6 flex flex-wrap gap-2 md:gap-3">
            {values.map((v, i) => (
              <motion.li
                key={v}
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 + i * 0.06, type: "spring", stiffness: 260, damping: 20 }}
                className="inline-flex items-center gap-2 rounded-full bg-background/15 px-4 py-2 text-sm font-semibold transition-colors hover:bg-background hover:text-foreground md:text-base"
              >
                <Check className="size-4" aria-hidden="true" />
                {v}
              </motion.li>
            ))}
          </ul>
        </motion.article>
      </div>
    </section>
  )
}
