import type { Metadata } from "next"
import { AboutIntro } from "@/components/about/about-intro"
import { AboutTimeline } from "@/components/about/about-timeline"
import { MissionValues } from "@/components/about/mission-values"
import { ScrollQuote } from "@/components/about/scroll-quote"
import { ContactCta } from "@/components/contact-cta"
import { PageHero } from "@/components/page-hero"

export const metadata: Metadata = {
  title: "Quiénes somos | Expreso Tim Car",
  description:
    "Desde 1980 en Concepción del Uruguay, Entre Ríos. Conocé la historia, misión, visión y valores de Expreso Tim-Car S.R.L.",
}

export default function QuienesSomosPage() {
  return (
    <main className="overflow-x-clip">
      <PageHero
        eyebrow="Quiénes somos"
        title="Una familia que nunca dejó de"
        accent="avanzar."
        description="Más de 40 años transportando cargas con el mismo espíritu humano y cercano con el que empezamos en 1980."
        video="/videos/camion-rural.mp4"
        poster="/images/poster-rural.jpg"
      />
      <AboutIntro />
      <AboutTimeline />
      <MissionValues />
      <ScrollQuote />
      <ContactCta />
    </main>
  )
}
