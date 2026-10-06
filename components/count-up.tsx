"use client"

import { useEffect, useRef, useState } from "react"
import { animate, useInView } from "motion/react"

type CountUpProps = {
  to: number
  from?: number
  duration?: number
  prefix?: string
  suffix?: string
  className?: string
}

export function CountUp({ to, from = 0, duration = 1.8, prefix = "", suffix = "", className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0, margin: "0px 0px 200px 0px" })
  const [value, setValue] = useState(from)

  useEffect(() => {
    // Safety net: if the viewport observer never fires (seen on some mobile
    // browsers), still show the real number instead of leaving it stuck.
    const fallback = setTimeout(() => setValue(to), 2500)

    if (!inView) return () => clearTimeout(fallback)

    clearTimeout(fallback)
    const controls = animate(from, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setValue(Math.round(v)),
    })
    return () => {
      clearTimeout(fallback)
      controls.stop()
    }
  }, [inView, from, to, duration])

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value}
      {suffix}
    </span>
  )
}
