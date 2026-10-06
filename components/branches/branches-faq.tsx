import { Plus } from "lucide-react"

const faqs = [
  {
    q: "¿Cómo se determina el precio del envío?",
    a: "El precio se determina por el peso (kilogramos) o el volumen (metros cúbicos), dependiendo de cuál de los dos es mayor. Además, se considera el seguro de la mercadería, que se calcula como un porcentaje del valor declarado.",
  },
  {
    q: "¿Cómo pido un presupuesto?",
    a: "Escribinos por WhatsApp a la sucursal más cercana o a casa central. Presupuestamos cualquier tipo de carga y trabajo en poco tiempo y a cualquier punto del país.",
  },
  {
    q: "¿Trabajan con particulares y empresas?",
    a: "Sí. Contamos con servicios para clientes particulares y empresas, con opción de envío contra reembolso.",
  },
]

export function BranchesFaq() {
  return (
    <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:px-8 md:py-28 lg:grid-cols-[1fr_1.5fr]">
      <div>
        <p className="font-mono text-[10px] tracking-widest text-primary uppercase md:text-xs">Preguntas frecuentes</p>
        <h2 className="mt-3 text-balance text-3xl font-black tracking-tight uppercase sm:text-5xl md:mt-4 [font-stretch:115%]">
          Lo que más nos consultan
        </h2>
      </div>
      <div className="flex flex-col gap-3">
        {faqs.map((f, i) => (
          <details
            key={f.q}
            open={i === 0}
            className="group rounded-2xl border border-border bg-card px-5 transition-colors open:border-primary md:px-7"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-base font-bold md:text-lg [&::-webkit-details-marker]:hidden">
              {f.q}
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-muted transition-transform duration-300 group-open:rotate-45 group-open:bg-primary">
                <Plus className="size-4" aria-hidden="true" />
              </span>
            </summary>
            <p className="pb-5 text-pretty leading-relaxed text-muted-foreground">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
