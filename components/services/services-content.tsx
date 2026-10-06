"use client"

import { BadgeCheck, Building2, HandCoins, MapPinned, Satellite, ShieldCheck, Snowflake, Thermometer } from "lucide-react"
import { ProcessSteps } from "@/components/services/process-steps"
import { ServiceBlock } from "@/components/services/service-block"

const depots = ["Buenos Aires", "Rosario", "Santa Fe", "Paraná", "Concordia", "San Francisco", "Córdoba"]

export function ServicesContent() {
  return (
    <>
      <ServiceBlock
        index="01"
        eyebrow="Servicio de cargas generales"
        title="Su mercadería, segura en cada kilómetro"
        description="Realizamos el transporte de cargas generales desde nuestros depósitos hacia todo el centro del país, con distribución y logística en la provincia de Entre Ríos."
        image="/images/puerta-a-puerta.png"
        imageAlt="Entrega de mercadería puerta a puerta con camión de Expreso Tim Car"
        features={[
          { icon: Satellite, title: "Tránsito monitoreado", body: "Seguimiento de la carga durante todo el viaje." },
          { icon: Building2, title: "Particulares y empresas", body: "Servicios pensados para cada tipo de cliente." },
          { icon: HandCoins, title: "Contra reembolso", body: "Cobramos en destino por usted." },
          { icon: MapPinned, title: "Distribución en Entre Ríos", body: "Logística y reparto en toda la provincia." },
        ]}
        chipsLabel="Despachamos desde nuestros depósitos en"
        chips={depots}
        ctaText="Hola Tim Car, quiero pedir presupuesto para una carga general"
      />
      <ProcessSteps />
      <ServiceBlock
        index="02"
        reverse
        eyebrow="Carga refrigerada"
        title="Cadena de frío, sin cortes"
        description="Contamos con camiones térmicos de gran porte, con dispositivos de control de temperatura y monitoreo en ruta, garantizando la cadena de frío durante toda la estadía en tránsito."
        image="/images/cadena-frio.png"
        imageAlt="Interior de un camión térmico con pallets refrigerados"
        features={[
          { icon: Snowflake, title: "Cadena de frío garantizada", body: "Temperatura estable durante todo el tránsito." },
          { icon: Thermometer, title: "Control de temperatura", body: "Dispositivos de medición en cada unidad." },
          { icon: BadgeCheck, title: "Habilitación SENASA", body: "Aptos para transportar alimentos." },
          { icon: ShieldCheck, title: "VTV Nacional", body: "Verificación Técnica Vehicular al día." },
        ]}
        ctaText="Hola Tim Car, quiero pedir presupuesto para una carga refrigerada"
      />
    </>
  )
}
