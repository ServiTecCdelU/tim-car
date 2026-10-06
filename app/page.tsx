import { CityMarquee } from "@/components/city-marquee"
import { ColdChain } from "@/components/cold-chain"
import { ContactCta } from "@/components/contact-cta"
import { Hero } from "@/components/hero"
import { Network } from "@/components/network"
import { News } from "@/components/news"
import { Stats } from "@/components/stats"
import { WhyUs } from "@/components/why-us"

export default function Page() {
  return (
    <main className="overflow-x-clip">
      <Hero />
      <CityMarquee />
      <Stats />
      <WhyUs />
      <Network />
      <ColdChain />
      <News />
      <ContactCta />
    </main>
  )
}
