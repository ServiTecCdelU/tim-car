import Image from "next/image"
import Link from "next/link"
import { contact, navLinks } from "@/lib/site"

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-[1.5fr_1fr_1fr] md:px-8">
        <div>
          <div className="relative h-14 w-32">
            <Image src="/images/logo_blanco.png" alt="Expreso Tim Car S.R.L." fill sizes="128px" className="object-contain object-left" />
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Transporte de cargas y logística con raíces familiares. Más de 40 años uniendo el centro del país.
          </p>
        </div>
        <nav aria-label="Menú rápido">
          <h2 className="font-mono text-xs tracking-widest text-muted-foreground uppercase">Menú rápido</h2>
          <ul className="mt-4 flex flex-col gap-2">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm hover:text-primary">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <h2 className="font-mono text-xs tracking-widest text-muted-foreground uppercase">Contacto</h2>
          <ul className="mt-4 flex flex-col gap-2 text-sm">
            <li>
              <a href={contact.phoneHref} className="hover:text-primary">{contact.phone}</a>
            </li>
            <li>
              <a href={`mailto:${contact.email}`} className="break-all hover:text-primary">{contact.email}</a>
            </li>
            <li className="text-muted-foreground">{contact.address}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-5 py-6 md:px-8">
          <p className="font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} Expreso Tim Car S.R.L.
          </p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://visitor-badge.laobi.icu/badge?page_id=expresotimcar.vercel.app&left_text=visitas"
            alt="Contador de visitas"
            width={110}
            height={20}
            className="h-5 w-auto opacity-70"
            loading="lazy"
          />
        </div>
      </div>
    </footer>
  )
}
