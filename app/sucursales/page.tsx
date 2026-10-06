import type { Metadata } from "next"
import { BranchesExplorer } from "@/components/branches/branches-explorer"
import { BranchesFaq } from "@/components/branches/branches-faq"
import { ContactCta } from "@/components/contact-cta"
import { Network } from "@/components/network"
import { PageHero } from "@/components/page-hero"

export const metadata: Metadata = {
  title: "Sucursales | Expreso Tim Car",
  description:
    "Direcciones, teléfonos y WhatsApp de nuestras sucursales en Concepción del Uruguay, Buenos Aires, Rosario, Santa Fe, Córdoba, San Francisco, Paraná, Concordia y Gualeguaychú.",
}

export default function SucursalesPage() {
  return (
    <main className="overflow-x-clip">
      <PageHero
        eyebrow="Sucursales"
        title="Siempre cerca de su"
        accent="carga."
        description="Amplia cobertura y ubicación estratégica en Entre Ríos, Santa Fe, Córdoba y Buenos Aires para que su envío llegue rápido."
        video="/videos/camion-deposito.mp4"
        poster="/images/poster-deposito.jpg"
      />
      <BranchesExplorer />
      <Network />
      <BranchesFaq />
      <ContactCta />
    </main>
  )
}
