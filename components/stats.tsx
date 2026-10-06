"use client"

import { useEffect, useRef } from "react"
import { animate, motion, useInView } from "motion/react"

const stats = [
  { value: 40, prefix: "+", suffix: "", label: "años en la ruta" },
  { value: 7, prefix: "", suffix: "", label: "oficinas propias" },
  { value: 10, prefix: "+", suffix: "", label: "móviles en servicio" },
  { value: 2000, prefix: "+", suffix: " km", label: "de red de cobertura" },
]

function Counter({ to, prefix, suffix }: { to: number; prefix: string; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  useEffect(() => {
    if (!inView || !ref.current) return
    const node = ref.current
    const controls = animate(0, to, {
      duration: 2,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => {
        node.textContent = `${prefix}${Math.round(v).toLocaleString("es-AR")}${suffix}`
      },
    })
    return () => controls.stop()
  }, [inView, to, prefix, suffix])

  return (
    <span ref={ref}>
      {prefix}0{suffix}
    </span>
  )
}

export function Stats() {
  return (
    <section aria-label="Tim Car en números" className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-32">
      <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:rounded-3xl lg:grid-cols-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="flex flex-col gap-1 bg-background p-4 md:gap-2 md:p-10"
          >
            <dt className="order-2 font-mono text-[10px] tracking-widest text-muted-foreground uppercase md:text-xs">{stat.label}</dt>
            <dd className="order-1 text-3xl font-black tracking-tight tabular-nums md:text-6xl [font-stretch:115%]">
              <Counter to={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
            </dd>
          </motion.div>
        ))}
      </dl>
    </section>
  )
}
