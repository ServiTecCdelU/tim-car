"use client"

import Image from "next/image"
import { useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"
import { CountUp } from "@/components/count-up"

const stats = [
  { value: 1980, from: 1940, label: "Año de fundación" },
  { value: 40, prefix: "+", label: "Años en ruta" },
  { value: 33, label: "Destinos en Entre Ríos" },
]

export function AboutIntro() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const imgY = useTransform(scrollYProgress, [0, 1], [60, -60])
  const rotate = useTransform(scrollYProgress, [0, 1], [-3, 3])

  return (
    <section ref={ref} className="mx-auto grid max-w-7xl gap-12 px-4 py-16 md:px-8 md:py-32 lg:grid-cols-2 lg:items-center lg:gap-20">
      <div>
        <p className="font-mono text-[10px] tracking-widest text-primary uppercase md:text-xs">Historia y trayectoria</p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-3 text-balance text-3xl font-black tracking-tight uppercase sm:text-5xl md:mt-4 md:text-6xl [font-stretch:115%]"
        >
          Cuatro décadas de compromiso y crecimiento
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="mt-6 text-pretty leading-relaxed text-muted-foreground md:text-lg"
        >
          Expreso Tim-Car S.R.L. fue fundada el 1 de julio de 1980 por{" "}
          <strong className="font-semibold text-foreground">Don Osvaldo René Timón</strong> en Concepción del
          Uruguay, Entre Ríos. Lo que comenzó como un pequeño emprendimiento familiar se transformó en una empresa
          referente en transporte y logística, sin perder su espíritu humano y cercano.
        </motion.p>

        <dl className="mt-10 grid grid-cols-3 gap-3 md:gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="border-l-2 border-primary pl-3 md:pl-5"
            >
              <dt className="sr-only">{s.label}</dt>
              <dd className="text-3xl font-black tabular-nums md:text-5xl [font-stretch:115%]">
                <CountUp to={s.value} from={s.from} prefix={s.prefix} />
              </dd>
              <dd className="mt-1 text-xs text-muted-foreground md:text-sm">{s.label}</dd>
            </motion.div>
          ))}
        </dl>
      </div>

      <motion.div style={{ y: imgY, rotate }} className="relative">
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border md:rounded-3xl">
          <Image
            src="/images/flota.png"
            alt="Flota de camiones de Expreso Tim Car"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200, damping: 18 }}
          className="absolute -bottom-6 -left-3 rounded-2xl bg-primary p-4 text-primary-foreground shadow-2xl md:-left-8 md:p-6"
        >
          <p className="font-mono text-[10px] tracking-widest uppercase opacity-80 md:text-xs">Desde</p>
          <p className="text-4xl font-black md:text-6xl [font-stretch:120%]">1980</p>
          <p className="text-xs font-semibold md:text-sm">Concepción del Uruguay, ER</p>
        </motion.div>
      </motion.div>
    </section>
  )
}
