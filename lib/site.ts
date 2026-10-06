export const contact = {
  phone: "+54 3442 307130",
  phoneHref: "tel:+543442307130",
  whatsappHref:
    "https://wa.me/543442307130?text=Hola%20Tim%20Car%2C%20quiero%20cotizar%20un%20env%C3%ADo",
  email: "consultas@expresotimcar.com.ar",
  address: "Av. Uncal 279 - Concepción del Uruguay ER (3260)",
  mapsHref: "https://maps.google.com/?q=Av.+Uncal+279+Concepci%C3%B3n+del+Uruguay",
}

export const navLinks = [
  { label: "Inicio", href: "/" },
  { label: "Quiénes somos", href: "/quienes-somos" },
  { label: "Sucursales", href: "/sucursales" },
  { label: "Servicios", href: "/servicios" },
  { label: "Destinos", href: "/destinos" },
  { label: "Contacto", href: "#contacto" },
]

export const cities = [
  "Concepción del Uruguay",
  "Gualeguaychú",
  "Concordia",
  "Paraná",
  "Buenos Aires",
  "Rosario",
  "Santa Fe",
  "Córdoba",
  "San Francisco",
]

export function whatsappLink(number: string, text = "Hola Tim Car, quiero hacer una consulta") {
  return `https://wa.me/${number.replace(/\D/g, "")}?text=${encodeURIComponent(text)}`
}

export function mapsLink(query: string) {
  return `https://maps.google.com/?q=${encodeURIComponent(query)}`
}

export type Province = "Entre Ríos" | "Santa Fe" | "Córdoba" | "Buenos Aires"

export type Branch = {
  city: string
  province: Province
  address: string
  phones: { label: string; href: string }[]
  whatsapp: string
  hub?: boolean
}

export const branches: Branch[] = [
  {
    city: "Concepción del Uruguay",
    province: "Entre Ríos",
    address: "Av. Uncal 279",
    phones: [{ label: "+54 3442 307130", href: "tel:+543442307130" }],
    whatsapp: "543442307130",
    hub: true,
  },
  {
    city: "Buenos Aires",
    province: "Buenos Aires",
    address: "Av. Fernández de la Cruz 2340, Villa Soldati",
    phones: [
      { label: "011 4919-3653", href: "tel:+541149193653" },
      { label: "011 4919-3669", href: "tel:+541149193669" },
    ],
    whatsapp: "541165029093",
  },
  {
    city: "Rosario",
    province: "Santa Fe",
    address: "Virasoro 3340",
    phones: [{ label: "341 353-1290", href: "tel:+543413531290" }],
    whatsapp: "543417761628",
  },
  {
    city: "Santa Fe Capital",
    province: "Santa Fe",
    address: "Javier de la Rosa 4051",
    phones: [{ label: "342 478-7005", href: "tel:+543424787005" }],
    whatsapp: "543424787005",
  },
  {
    city: "Córdoba Capital",
    province: "Córdoba",
    address: "Rincón 1459",
    phones: [{ label: "351 684-5791", href: "tel:+543516845791" }],
    whatsapp: "543516845791",
  },
  {
    city: "San Francisco",
    province: "Córdoba",
    address: "Salta 270",
    phones: [{ label: "3564 572250", href: "tel:+543564572250" }],
    whatsapp: "543564572250",
  },
  {
    city: "Paraná",
    province: "Entre Ríos",
    address: "Almafuerte 2792",
    phones: [
      { label: "3442 628363", href: "tel:+543442628363" },
      { label: "3442 648591", href: "tel:+543442648591" },
    ],
    whatsapp: "543442628363",
  },
  {
    city: "Concordia",
    province: "Entre Ríos",
    address: "Nogoyá 1770",
    phones: [{ label: "345 427-0380", href: "tel:+543454270380" }],
    whatsapp: "543442623237",
  },
  {
    city: "Gualeguaychú",
    province: "Entre Ríos",
    address: "Bv. Isidoro de María 126",
    phones: [{ label: "3446 608325", href: "tel:+543446608325" }],
    whatsapp: "543446623123",
  },
]

export const destinations = [
  "Caseros",
  "Villa Mantero",
  "Basavilbaso",
  "Gilbert",
  "Urdinarrain",
  "Larroque",
  "Herrera",
  "Pronunciamiento",
  "Gualeguay",
  "Galarza",
  "Mansilla",
  "Lucas González",
  "Estación Solá",
  "Rosario del Tala",
  "Maciá",
  "Villaguay",
  "Las Moscas",
  "Gdor. Urquiza",
  "San Marcial",
  "Aldea San Antonio",
  "Santa Anita",
  "Colón",
  "San José",
  "Villa Elisa",
  "1º de Mayo",
  "Ubajay",
  "Federación",
  "Chajarí",
  "San Salvador",
  "Gral. Campos",
  "Viale",
  "Crespo",
  "Seguí",
]
