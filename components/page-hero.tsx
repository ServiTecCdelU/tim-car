"use client"

import Link from "next/link"
import { useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"
import { ChevronRight } from "lucide-react"

type PageHeroProps = {
  eyebrow: string
  title: string
  accent: string
  description: string
  video: string
  poster: string
  children?: React.ReactNode
}

const ease = [0.22, 1, 0.36, 1] as const

export function PageHero({ eyebrow, title, accent, description, video, poster, children }: PageHeroProps) {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -80])
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0])
  const words = title.split(" ")

  return (
    <section ref={ref} className="relative flex min-h-[80svh] items-end overflow-hidden pt-32 pb-16 md:min-h-[88svh] md:pb-24">
      <motion.div style={{ y }} className="absolute inset-0">
        <video
          src={video}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          className="size-full animate-kenburns object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-background/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-background/40" />

      <motion.div style={{ opacity, y: contentY }} className="relative mx-auto w-full max-w-7xl px-4 md:px-8">
        <motion.nav
          aria-label="Ruta de navegación"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-1.5 font-mono text-[10px] tracking-widest text-muted-foreground uppercase md:text-xs"
        >
          <Link href="/" className="hover:text-foreground">
            Inicio
          </Link>
          <ChevronRight className="size-3" aria-hidden="true" />
          <span className="text-primary" aria-current="page">
            {eyebrow}
          </span>
        </motion.nav>

        <h1 className="mt-5 max-w-5xl text-5xl leading-[0.92] font-black tracking-tight uppercase sm:text-7xl md:text-8xl [font-stretch:120%]">
          {words.map((word, i) => (
            <span key={`${word}-${i}`} className="mr-[0.22em] inline-block overflow-hidden pb-1 align-bottom">
              <motion.span
                className="inline-block"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.15 + i * 0.08, duration: 0.8, ease }}
              >
                {word}
              </motion.span>
            </span>
          ))}
          <span className="inline-block overflow-hidden pb-1 align-bottom">
            <motion.span
              className="inline-block text-primary"
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ delay: 0.15 + words.length * 0.08, duration: 0.8, ease }}
            >
              {accent}
            </motion.span>
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-foreground/85 md:text-lg"
        >
          {description}
        </motion.p>

        {children && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
            className="mt-8"
          >
            {children}
          </motion.div>
        )}
      </motion.div>

      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1 overflow-hidden">
        <div className="road-lines h-full w-[200%] animate-road opacity-30" />
      </div>
    </section>
  )
}
