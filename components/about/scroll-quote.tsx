"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, type MotionValue } from "motion/react"

const quote =
  "La esencia de Tim-Car se mantiene intacta: compromiso, innovación y calidad en cada servicio. Seguimos trabajando para conectar personas y negocios, con la misma pasión de siempre."

function Word({ word, progress, range }: { word: string; progress: MotionValue<number>; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.15, 1])
  return (
    <motion.span style={{ opacity }} className="mr-[0.25em] inline-block">
      {word}
    </motion.span>
  )
}

export function ScrollQuote() {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 45%"] })
  const words = quote.split(" ")

  return (
    <section className="mx-auto max-w-6xl px-4 py-20 md:px-8 md:py-36">
      <p className="font-mono text-[10px] tracking-widest text-primary uppercase md:text-xs">El futuro de Tim-Car</p>
      <p
        ref={ref}
        className="mt-6 text-balance text-3xl leading-tight font-black tracking-tight sm:text-4xl md:text-6xl [font-stretch:110%]"
      >
        <span className="sr-only">{quote}</span>
        <span aria-hidden="true">
          {words.map((w, i) => (
            <Word key={i} word={w} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]} />
          ))}
        </span>
      </p>
    </section>
  )
}
