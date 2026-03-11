'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Layers } from 'lucide-react'
import Link from 'next/link'
import { Reveal } from '@/components/animations/Reveal'
import { FloatiesBackground } from '@/components/ui/FloatiesBackground'
import { servicesData } from '@/data/services-content'
import { ContactFormSection } from '@/components/sections/ContactFormSection'
import { ProceduralGeometricMesh } from '@/components/graphics/ProceduralGeometricMesh'
import { ProceduralAIAutomation } from '@/components/graphics/ProceduralAIAutomation'
import { ProceduralUIDesign } from '@/components/graphics/ProceduralUIDesign'
import { ProceduralWebDev } from '@/components/graphics/ProceduralWebDev'
import { ProceduralMobileDev } from '@/components/graphics/ProceduralMobileDev'

export function ServicesIndexPage({ locale }: { locale: string }) {
  const isDe = locale === 'de'

  const allServices = Object.values(servicesData).map((s) => ({
    title: s.title[isDe ? 'de' : 'en'],
    tagline: s.tagline[isDe ? 'de' : 'en'],
    slug: s.slugs[isDe ? 'de' : 'en'],
    description: s.heroDescription[isDe ? 'de' : 'en'],
    key: s.slugs.en, // Use EN slug as key
  }))

  const getGraphic = (key: string, index: number) => {
    switch (key) {
      case 'ai-automation':
        return <ProceduralAIAutomation animated={true} />
      case 'ui-ux-design':
        return <ProceduralUIDesign animated={true} />
      case 'web-app-development':
        return <ProceduralWebDev animated={true} />
      case 'mobile-app-development':
        return <ProceduralMobileDev animated={true} />
      default:
        return <ProceduralGeometricMesh variant="mixed" animated={true} />
    }
  }

  return (
    <div className="relative flex w-full flex-col overflow-x-clip pt-32 pb-24">
      <FloatiesBackground />

      <section className="relative flex min-h-[50vh] flex-col items-center justify-center px-6 py-20 text-center md:px-12">
        <div className="bg-sp-accent/10 pointer-events-none absolute top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[150px]" />

        <Reveal>
          <div className="border-sp-accent/20 bg-sp-accent/10 text-sp-accent mb-8 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium">
            <Layers size={16} />
            {isDe ? 'Unsere Leistungen' : 'Our Services'}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="mb-6 max-w-4xl text-5xl leading-[1.1] font-bold tracking-tight md:text-7xl">
            {isDe ? 'Von der Idee zur skalierbaren ' : 'From idea to scalable '}
            <span className="text-sp-accent">{isDe ? 'Realität.' : 'reality.'}</span>
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="text-foreground/70 mx-auto max-w-2xl text-xl leading-relaxed">
            {isDe
              ? 'Wir entwerfen, entwickeln und automatisieren digitale Produkte, die branchenweit Maßstäbe setzen. Skalierbar, zuverlässig und innovativ.'
              : 'We design, build, and automate digital products that set industry standards. Scalable, reliable, and innovative.'}
          </p>
        </Reveal>
      </section>

      {/* Services Grid */}
      <section className="relative z-10 container mx-auto px-6 py-12 md:px-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {allServices.map((service, i) => (
            <Reveal key={service.slug} delay={0.1 * i} direction="up">
              <Link
                href={`/${locale}/${service.slug}`}
                className="group bg-sp-bg-dark/50 flex h-full flex-col overflow-hidden rounded-[2rem] border border-white/5 p-8 backdrop-blur-sm transition-all duration-500 hover:border-white/20 hover:bg-white/5 hover:shadow-[0_32px_80px_-20px_rgba(0,0,0,0.2)]"
              >
                <div className="relative mb-8 h-48 w-full overflow-hidden rounded-2xl border border-white/5 bg-black/20 group-hover:border-white/10">
                  <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                    {getGraphic(service.key, i)}
                  </div>
                </div>
                <h2 className="group-hover:text-sp-accent mb-4 text-3xl font-bold text-white transition-colors">
                  {service.title}
                </h2>
                <h3 className="mb-4 text-xl font-semibold text-white/80">{service.tagline}</h3>
                <p className="mb-8 flex-grow leading-relaxed text-white/60">
                  {service.description.slice(0, 150)}...
                </p>
                <div className="text-sp-accent mt-auto flex items-center gap-2 font-medium">
                  {isDe ? 'Mehr erfahren' : 'Learn more'}
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-2"
                  />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-sp-bg-medium relative mt-24 overflow-x-clip py-24 md:py-32 lg:py-40">
        <div className="bg-sp-accent/10 absolute top-1/2 left-1/2 h-[1200px] w-[1200px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[200px]" />

        <div className="relative z-10 container mx-auto grid items-start gap-16 px-6 md:px-12 lg:grid-cols-2">
          <Reveal>
            <div className="max-w-xl">
              <h2 className="text-sp-text-dark mb-10 text-5xl leading-[1.1] font-black tracking-tight md:text-6xl">
                {isDe ? 'Lassen Sie uns zusammenarbeiten' : "Let's work together"}
              </h2>
              <p className="text-sp-text-on-light text-2xl leading-relaxed font-light">
                {isDe
                  ? 'Buchen Sie eine Beratung und erfahren Sie, wie wir Ihr Produkt voranbringen.'
                  : 'Book a consultation to see how we can push your product forward.'}
              </p>
            </div>
          </Reveal>

          <Reveal direction="left" delay={0.2}>
            <ContactFormSection locale={locale} />
          </Reveal>
        </div>
      </section>
    </div>
  )
}
