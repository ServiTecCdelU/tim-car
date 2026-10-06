"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react"
import { ArrowRight, ChevronLeft, ChevronRight, Pause, Play, Truck } from "lucide-react"
import { contact } from "@/lib/site"
import { cn } from "@/lib/utils"

const SLIDE_MS = 7000

const slides = [
  {
    video: "/videos/camion-ruta.mp4",
    poster: "/images/poster-ruta.jpg",
    tag: "En ruta desde hace más de 40 años",
    title: ["La", "solución", "integral", "para", "su"],
    accent: "logística.",
    body: "Transportamos sus cargas con máxima seguridad, confianza y un compromiso inigualable.",
  },
  {
    video: "/videos/camion-rural.mp4",
    poster: "/images/poster-rural.jpg",
    tag: "+2000 km de cobertura",
    title: ["Unimos", "el", "centro", "del"],
    accent: "país.",
    body: "Córdoba, Santa Fe, Entre Ríos y Buenos Aires, varios días a la semana.",
  },
  {
    video: "/videos/camion-deposito.mp4",
    poster: "/images/poster-deposito.jpg",
    tag: "Entrega puerta a puerta",
    title: ["Su", "carga,", "directo", "a"],
    accent: "destino.",
    body: "Retiramos y entregamos donde lo necesite, en el menor tiempo posible.",
  },
  {
    video: "/videos/camion-noche.mp4",
    poster: "/images/poster-noche.jpg",
    tag: "Seguimiento satelital",
    title: ["Día", "y", "noche,", "siempre"],
    accent: "en movimiento.",
    body: "Monitoreo en ruta y control de temperatura en cada viaje.",
  },
  {
    video: "/videos/camion-niebla.mp4",
    poster: "/images/poster-niebla.jpg",
    tag: "Cadena de frío garantizada",
    title: ["Llueva", "o", "truene,", "llegamos"],
    accent: "a tiempo.",
    body: "Camiones térmicos habilitados por SENASA para cargas refrigeradas y secas.",
  },
]

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
  const mediaScale = useTransform(scrollYProgress, [0, 1], [1, 1.2])
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 160])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  const go = useCallback((dir: number) => setIndex((i) => (i + dir + slides.length) % slides.length), [])

  useEffect(() => {
    if (paused) return
    const id = setTimeout(() => go(1), SLIDE_MS)
    return () => clearTimeout(id)
  }, [index, paused, go])

  useEffect(() => {
    videoRefs.current.forEach((v, i) => {
      if (!v) return
      if (i === index) {
        v.currentTime = 0
      } else {
        v.pause()
      }
    })
  }, [index])

  useEffect(() => {
    const v = videoRefs.current[index]
    if (!v) return
    if (paused) v.pause()
    else v.play().catch(() => {})
  }, [index, paused])

  const slide = slides[index]

  return (
    <section
      id="inicio"
      ref={ref}
      aria-roledescription="carrusel"
      aria-label="Expreso Tim Car en movimiento"
      className="relative flex h-svh min-h-[560px] items-end overflow-hidden pb-24 md:items-center md:pb-0"
    >
      <motion.div style={{ scale: mediaScale }} className="absolute inset-0 bg-background">
        {slides.map((s, i) => (
          <video
            key={s.video}
            ref={(el) => {
              videoRefs.current[i] = el
            }}
            src={s.video}
            poster={s.poster}
            muted
            loop
            playsInline
            preload={i === 0 ? "auto" : "metadata"}
            aria-hidden="true"
            className={cn(
              "absolute inset-0 size-full object-cover transition-all duration-[1200ms] ease-out",
              i === index ? "scale-100 opacity-100" : "scale-110 opacity-0",
            )}
          />
        ))}
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/30 to-transparent" />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative mx-auto w-full max-w-7xl px-5 pt-28 md:px-8"
      >
        <AnimatePresence mode="wait">
          <motion.div key={index} exit={{ opacity: 0, y: -24, transition: { duration: 0.35 } }}>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-background/40 px-3 py-1 font-mono text-[10px] tracking-widest text-foreground/85 uppercase backdrop-blur md:mb-6 md:px-4 md:py-1.5 md:text-xs"
            >
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-primary" />
              </span>
              {slide.tag}
            </motion.p>

            <h1 className="max-w-4xl text-balance text-[2.5rem] leading-[0.95] font-black tracking-tight uppercase sm:text-6xl lg:text-8xl [font-stretch:115%]">
              {[...slide.title, slide.accent].map((word, i, arr) => (
                <span key={`${index}-${i}`} className="inline-block overflow-hidden pr-[0.22em] align-bottom">
                  <motion.span
                    className={cn("inline-block", i === arr.length - 1 && "text-primary")}
                    initial={{ y: "110%", rotate: 4 }}
                    animate={{ y: 0, rotate: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-4 max-w-md text-pretty text-base leading-relaxed text-foreground/85 md:mt-6 md:max-w-xl md:text-xl"
            >
              {slide.body}
            </motion.p>
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-7 flex flex-wrap gap-3 md:mt-10 md:gap-4"
        >
          <a
            href={contact.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105 md:gap-3 md:px-7 md:py-4 md:text-base"
          >
            Cotizá tu envío
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1 md:size-5" />
          </a>
          <a
            href="#red"
            className="inline-flex items-center rounded-full border border-foreground/30 bg-background/30 px-5 py-3 text-sm font-semibold backdrop-blur transition-colors hover:bg-foreground hover:text-background md:px-7 md:py-4 md:text-base"
          >
            Ver nuestra red
          </a>
        </motion.div>

        <div className="mt-8 flex items-center gap-3 md:mt-14 md:gap-4">
          <div className="flex flex-1 gap-1.5 md:max-w-md md:gap-2">
            {slides.map((s, i) => (
              <button
                key={s.video}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Ir al video ${i + 1}`}
                aria-current={i === index}
                className="group relative h-6 flex-1"
              >
                <span className="absolute inset-x-0 top-1/2 h-1 -translate-y-1/2 overflow-hidden rounded-full bg-foreground/20 transition-colors group-hover:bg-foreground/35">
                  {i < index && <span className="absolute inset-0 bg-foreground/70" />}
                  {i === index && (
                    <span
                      key={`${index}-${paused}`}
                      className="absolute inset-0 origin-left bg-primary"
                      style={{
                        animation: `hero-progress ${SLIDE_MS}ms linear forwards`,
                        animationPlayState: paused ? "paused" : "running",
                      }}
                    />
                  )}
                </span>
              </button>
            ))}
          </div>
          <span className="font-mono text-xs tabular-nums text-foreground/70">
            {String(index + 1).padStart(2, "0")}/{String(slides.length).padStart(2, "0")}
          </span>
          <div className="flex gap-1.5">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Video anterior"
              className="hidden size-10 items-center justify-center rounded-full border border-border bg-background/40 backdrop-blur transition-colors hover:bg-foreground hover:text-background sm:inline-flex"
            >
              <ChevronLeft className="size-4" />
            </button>
            <button
              type="button"
              onClick={() => setPaused((p) => !p)}
              aria-label={paused ? "Reproducir" : "Pausar"}
              className="inline-flex size-9 items-center justify-center rounded-full border border-border bg-background/40 backdrop-blur transition-colors hover:bg-foreground hover:text-background md:size-10"
            >
              {paused ? <Play className="size-4" /> : <Pause className="size-4" />}
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Video siguiente"
              className="hidden size-10 items-center justify-center rounded-full border border-border bg-background/40 backdrop-blur transition-colors hover:bg-foreground hover:text-background sm:inline-flex"
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
        </div>
      </motion.div>

      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-10 overflow-hidden bg-background/70 backdrop-blur-sm md:h-12">
        <div className="absolute inset-x-0 top-1/2 h-1 -translate-y-1/2 road-lines animate-road" />
        <div className="absolute bottom-1 left-0 w-full animate-drive">
          <Truck className="size-7 animate-bounce-truck text-primary md:size-9" />
        </div>
        <div className="absolute bottom-1 left-0 w-full animate-drive [animation-delay:-7s]">
          <Truck className="size-6 animate-bounce-truck text-secondary md:size-7" />
        </div>
      </div>
    </section>
  )
}
