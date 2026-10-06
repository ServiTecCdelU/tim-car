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
  const inView = useInView(ref, { once: true, margin: "-60px" })
  const [value, setValue] = useState(from)

  useEffect(() => {
    if (!inView) return
    const controls = animate(from, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setValue(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, from, to, duration])

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value}
      {suffix}
    </span>
  )
}
