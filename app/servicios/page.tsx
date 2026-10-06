import type { Metadata } from "next"
import { ContactCta } from "@/components/contact-cta"
import { PageHero } from "@/components/page-hero"
import { ServicesContent } from "@/components/services/services-content"

export const metadata: Metadata = {
  title: "Servicios | Expreso Tim Car",
  description:
    "Cargas generales con tránsito monitoreado y contra reembolso, y carga refrigerada con cadena de frío garantizada, habilitación SENASA y VTV Nacional.",
}

export default function ServiciosPage() {
  return (
    <main className="overflow-x-clip">
      <PageHero
        eyebrow="Servicios"
        title="Cargas generales y"
        accent="refrigeradas."
        description="Transporte seguro, monitoreado y a la temperatura justa. Presupuestamos cualquier tipo de carga a cualquier punto del país."
        video="/videos/camion-noche.mp4"
        poster="/images/poster-noche.jpg"
      />
      <ServicesContent />
      <ContactCta />
    </main>
  )
}
