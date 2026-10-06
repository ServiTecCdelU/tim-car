"use client"

import Image from "next/image"
import { useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"
import { ArrowUpRight, type LucideIcon } from "lucide-react"
import { whatsappLink } from "@/lib/site"
import { cn } from "@/lib/utils"

type ServiceBlockProps = {
  index: string
  eyebrow: string
  title: string
  description: string
  image: string
  imageAlt: string
  features: { icon: LucideIcon; title: string; body: string }[]
  chipsLabel?: string
  chips?: string[]
  ctaText: string
  reverse?: boolean
}

export function ServiceBlock({
  index,
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  features,
  chipsLabel,
  chips,
  ctaText,
  reverse,
}: ServiceBlockProps) {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const imgY = useTransform(scrollYProgress, [0, 1], [70, -70])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1.15, 1])
  const indexX = useTransform(scrollYProgress, [0, 1], reverse ? ["10%", "-10%"] : ["-10%", "10%"])

  return (
    <section ref={ref} className="relative overflow-hidden py-16 md:py-32">
      <motion.span
        aria-hidden="true"
        style={{ x: indexX }}
        className={cn(
          "pointer-events-none absolute top-6 text-[10rem] leading-none font-black text-foreground/[0.04] md:text-[22rem] [font-stretch:125%]",
          reverse ? "right-0" : "left-0",
        )}
      >
        {index}
      </motion.span>

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 md:px-8 lg:grid-cols-2 lg:items-center lg:gap-16">
        <motion.div style={{ y: imgY }} className={cn("relative", reverse && "lg:order-2")}>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border md:aspect-[5/6] md:rounded-3xl">
            <motion.div style={{ scale }} className="absolute inset-0">
              <Image src={image} alt={imageAlt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
          </div>
        </motion.div>

        <div>
          <p className="font-mono text-[10px] tracking-widest text-primary uppercase md:text-xs">{eyebrow}</p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-3 text-balance text-3xl font-black tracking-tight uppercase sm:text-5xl md:mt-4 md:text-6xl [font-stretch:115%]"
          >
            {title}
          </motion.h2>
          <p className="mt-5 text-pretty leading-relaxed text-muted-foreground md:text-lg">{description}</p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {features.map((f, i) => (
              <motion.li
                key={f.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="group flex gap-3 rounded-xl border border-border bg-card/60 p-4 transition-colors hover:border-primary"
              >
                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-secondary text-secondary-foreground transition-transform group-hover:-rotate-6 group-hover:scale-110">
                  <f.icon className="size-4" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-sm font-bold">{f.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground md:text-sm">{f.body}</p>
                </div>
              </motion.li>
            ))}
          </ul>

          {chips && (
            <div className="mt-8">
              <p className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase md:text-[11px]">
                {chipsLabel}
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {chips.map((c, i) => (
                  <motion.li
                    key={c}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.05, type: "spring", stiffness: 300, damping: 20 }}
                    className="rounded-full border border-border px-3 py-1.5 text-xs font-semibold md:text-sm"
                  >
                    {c}
                  </motion.li>
                ))}
              </ul>
            </div>
          )}

          <a
            href={whatsappLink("543442307130", ctaText)}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-10 inline-flex items-center gap-3 rounded-full bg-primary py-2 pr-2 pl-6 font-semibold text-primary-foreground transition-transform hover:scale-105"
          >
            Pedir presupuesto
            <span className="flex size-10 items-center justify-center rounded-full bg-background text-foreground transition-transform group-hover:rotate-45">
              <ArrowUpRight className="size-5" aria-hidden="true" />
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
