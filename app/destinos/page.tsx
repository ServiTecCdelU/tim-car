import type { Metadata } from "next"
import { ContactCta } from "@/components/contact-cta"
import { DestinationsExplorer } from "@/components/destinations/destinations-explorer"
import { DestinationsMarquee } from "@/components/destinations/destinations-marquee"
import { PageHero } from "@/components/page-hero"

export const metadata: Metadata = {
  title: "Destinos | Expreso Tim Car",
  description:
    "Distribución en 33 localidades de Entre Ríos: Colón, San José, Villaguay, Chajarí, Federación, Crespo, Rosario del Tala, Basavilbaso y más.",
}

export default function DestinosPage() {
  return (
    <main className="overflow-x-clip">
      <PageHero
        eyebrow="Destinos"
        title="Llegamos a cada rincón de"
        accent="Entre Ríos."
        description="Distribución y logística en toda la provincia, desde Concepción del Uruguay hasta su puerta."
        video="/videos/camion-ruta.mp4"
        poster="/images/poster-ruta.jpg"
      />
      <DestinationsMarquee />
      <DestinationsExplorer />
      <ContactCta />
    </main>
  )
}
