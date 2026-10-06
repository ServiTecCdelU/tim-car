import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Archivo, IBM_Plex_Mono } from 'next/font/google'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import './globals.css'

const archivo = Archivo({
  subsets: ['latin'],
  variable: '--font-archivo',
  axes: ['wdth'],
})

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-plex-mono',
})

const siteUrl = 'https://tim-car.vercel.app'
const siteName = 'Expreso Tim Car'
const title = 'Expreso Tim Car | Transporte de cargas y logística en el centro del país'
const description =
  'Más de 40 años transportando sus cargas con seguridad y compromiso. Cadena de frío, entrega puerta a puerta y 9 sucursales entre Entre Ríos, Santa Fe, Córdoba y Buenos Aires.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s | ${siteName}`,
  },
  description,
  keywords: [
    'transporte de cargas',
    'logística',
    'cadena de frío',
    'Entre Ríos',
    'Concepción del Uruguay',
    'Expreso Tim Car',
    'transporte puerta a puerta',
  ],
  authors: [{ name: siteName }],
  applicationName: siteName,
  category: 'Transporte y logística',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: siteUrl,
    siteName,
    title,
    description,
    images: [
      {
        url: '/opengraph-image.jpg',
        width: 1200,
        height: 630,
        alt: siteName,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/opengraph-image.jpg'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon-light-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-icon.png',
    shortcut: '/favicon.ico',
  },
  manifest: '/site.webmanifest',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#060a18',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${archivo.variable} ${plexMono.variable}`}>
      <body className="antialiased">
        <SiteHeader />
        {children}
        <SiteFooter />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
