"use client"

import { motion } from "motion/react"
import { Mail, MapPin, MessageCircle, Phone, Truck } from "lucide-react"
import { contact } from "@/lib/site"

const channels = [
  { icon: MessageCircle, label: "WhatsApp", value: contact.phone, href: contact.whatsappHref, external: true },
  { icon: Phone, label: "Teléfono", value: contact.phone, href: contact.phoneHref },
  { icon: Mail, label: "Email", value: contact.email, href: `mailto:${contact.email}` },
  { icon: MapPin, label: "Casa central", value: contact.address, href: contact.mapsHref, external: true },
]

export function ContactCta() {
  return (
    <section id="contacto" className="relative overflow-hidden bg-secondary py-16 text-secondary-foreground md:py-32">
      <div aria-hidden="true" className="pointer-events-none absolute bottom-6 left-0 w-full">
        <div className="animate-drive">
          <Truck className="size-16 text-secondary-foreground/15 md:size-24" />
        </div>
      </div>
      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl text-balance text-4xl font-black tracking-tight uppercase sm:text-6xl md:text-8xl [font-stretch:115%]"
        >
          ¿Tenés una carga? <span className="text-background">La llevamos.</span>
        </motion.h2>
        <p className="mt-4 max-w-xl text-pretty text-sm text-secondary-foreground/85 md:mt-6 md:text-lg">
          Presupuestamos cualquier tipo de carga y trabajo en poco tiempo y a cualquier punto del país.
        </p>

        <ul className="mt-8 grid grid-cols-2 gap-2.5 md:mt-14 md:gap-4 lg:grid-cols-4">
          {channels.map((c, i) => (
            <motion.li
              key={c.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <a
                href={c.href}
                {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group flex h-full flex-col gap-3 rounded-xl bg-background/15 p-3.5 transition-colors hover:bg-background hover:text-foreground md:gap-6 md:rounded-2xl md:p-6"
              >
                <c.icon className="size-5 md:size-6" aria-hidden="true" />
                <div className="min-w-0">
                  <p className="font-mono text-[10px] tracking-widest uppercase opacity-70 md:text-[11px]">{c.label}</p>
                  <p className="mt-0.5 text-xs font-semibold break-words md:mt-1 md:text-[0.95rem]">{c.value}</p>
                </div>
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
