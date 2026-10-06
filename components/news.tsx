"use client"

import Image from "next/image"
import { motion } from "motion/react"
import { ArrowUpRight } from "lucide-react"
import { contact } from "@/lib/site"

export function News() {
  return (
    <section id="novedades" className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-32">
      <p className="font-mono text-[10px] tracking-widest text-primary uppercase md:text-xs">Novedades</p>
      <motion.a
        href={contact.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="group mt-4 grid overflow-hidden rounded-2xl border border-border bg-card md:mt-6 md:grid-cols-2 md:rounded-3xl"
      >
        <div className="relative aspect-[16/9] overflow-hidden md:aspect-auto">
          <Image
            src="/images/nueva-sucursal-02.jpg"
            alt="Nueva sucursal de Expreso Tim Car vista desde el aire"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <span className="absolute top-3 left-3 rounded-full bg-primary px-3 py-1 text-[10px] font-bold tracking-wide text-primary-foreground uppercase md:top-5 md:left-5 md:px-4 md:py-1.5 md:text-xs">
            Nuevo
          </span>
        </div>
        <div className="flex flex-col justify-between gap-6 p-5 md:gap-10 md:p-12">
          <div>
            <h2 className="text-balance text-2xl font-black tracking-tight uppercase sm:text-4xl md:text-5xl [font-stretch:115%]">
              ¡Abrimos una nueva sucursal!
            </h2>
            <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground md:mt-5 md:text-base">
              Ahora estamos más cerca: reducimos distancias, mejoramos los tiempos de entrega y hacemos que tus
              envíos lleguen más rápido y de forma eficiente.
            </p>
          </div>
          <span className="inline-flex items-center gap-2 font-semibold">
            Consultá por tu zona
            <span className="flex size-10 items-center justify-center rounded-full bg-foreground text-background transition-transform group-hover:rotate-45">
              <ArrowUpRight className="size-5" aria-hidden="true" />
            </span>
          </span>
        </div>
      </motion.a>
    </section>
  )
}
