'use client'

import { Reveal } from '@/components/animations/Reveal'
import { ArrowRight, Briefcase } from 'lucide-react'
import Link from 'next/link'
import { FloatiesBackground } from '@/components/ui/FloatiesBackground'
import { caseStudies } from '@/data/case-studies'

export function CaseStudiesIndexPage({ locale }: { locale: string }) {
  const isDe = locale === 'de'
  const data = caseStudies[isDe ? 'de' : 'en']

  return (
    <div className="relative flex w-full flex-col overflow-x-hidden pt-32 pb-24">
      <FloatiesBackground />
      
      {/* Hero */}
      <section className="relative flex min-h-[50vh] items-center overflow-x-hidden py-20">
        <div className="pointer-events-none absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay" />
        <div className="bg-sp-accent/10 pointer-events-none absolute top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[150px]" />

        <div className="relative z-10 container mx-auto px-6 text-center md:px-12">
          <Reveal>
            <div className="bg-sp-accent/10 border-sp-accent/20 text-sp-accent mx-auto mb-8 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium">
              <Briefcase size={16} />
              {isDe ? 'Fallstudien' : 'Case Studies'}
            </div>
            <h1 className="mb-8 text-4xl leading-[1.1] font-bold md:text-6xl lg:text-7xl">
              {isDe ? 'Wie wir ' : 'How we helped clients from '}{' '}
              <span className="text-sp-accent">{isDe ? 'Kunden von der Idee bis zur Produktion' : 'idea to production'}</span>
              {isDe && ' begleitet haben'}
            </h1>
            <p className="text-foreground/70 mx-auto mb-10 max-w-2xl text-xl leading-relaxed">
              {isDe 
                ? 'Erfahren Sie, wie wir Start-ups, Scale-ups und etablierten Unternehmen geholfen haben, ihre Visionen durch strukturiertes Engineering, klare Prozesse und fokussierte Technologie umzusetzen.' 
                : 'Explore how we helped start-ups, scale-ups, and established enterprises turn their vision into reality through structured engineering, clear processes, and focused technology.'}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Grid */}
      <section className="relative z-10 container mx-auto px-6 pb-24 md:px-12">
        <div className="grid gap-8 md:grid-cols-2">
          {data.map((cs, i) => (
            <Reveal key={cs.slug} delay={0.1 * i} direction="up">
              <Link
                href={`/${locale}/${isDe ? 'fallstudien' : 'case-studies'}/${cs.slug}`}
                className="bg-sp-bg-medium group hover:border-sp-accent/30 flex h-full flex-col overflow-hidden rounded-[2rem] border border-white/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="p-8 md:p-10 flex flex-col h-full">
                  <div className="mb-6 flex items-center justify-between">
                    <span className="text-sp-accent/80 bg-sp-accent/10 rounded-full px-4 py-1.5 text-sm font-semibold tracking-wide">
                      {cs.industryBadge}
                    </span>
                    <ArrowRight className="text-sp-accent/50 group-hover:text-sp-accent transition-all group-hover:translate-x-1" />
                  </div>
                  
                  <h2 className="mb-4 text-3xl font-bold leading-tight text-sp-text-dark group-hover:text-sp-accent transition-colors">
                    {cs.clientName}
                  </h2>
                  
                  <p className="text-sp-text-on-light mb-8 flex-1 text-lg font-medium leading-relaxed">
                    {cs.tagline}
                  </p>
                  
                  <div className="mt-auto border-t border-black/10 pt-6">
                    <span className="text-sp-accent inline-flex items-center gap-2 font-medium">
                      {isDe ? 'Fallstudie lesen' : 'Read Case Study'}
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-sp-bg-medium border-sp-accent/10 relative overflow-x-hidden border-t py-32">
        <div className="relative z-10 container mx-auto max-w-4xl px-6 text-center md:px-12">
          <Reveal>
            <h2 className="text-sp-text-dark mb-8 text-4xl font-bold md:text-6xl">
              {isDe ? 'Bereit für Ihr ' : 'Ready for your '}{' '}
              <span className="text-sp-accent">{isDe ? 'nächstes Projekt?' : 'next project?'}</span>
            </h2>
            <p className="text-sp-text-on-light mb-12 text-xl">
              {isDe
                ? 'Lassen Sie uns darüber sprechen, wie wir Ihre Idee strukturiert und erfolgreich umsetzen können.'
                : 'Let\'s talk about how we can build your idea with structure and success.'}
            </p>
            <Link
              href={`/${locale}/${isDe ? 'kontakt-solutionplus' : 'contact-us'}`}
              className="bg-sp-accent group hover:bg-sp-accent-dark relative inline-block overflow-x-hidden rounded-full px-10 py-5 text-lg font-bold tracking-wide text-white shadow-[0_4px_20px_-4px_rgba(255,112,67,0.4)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_40px_-4px_rgba(255,112,67,0.6)] active:scale-95"
            >
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_2s_infinite]" />
              {isDe ? 'Lassen Sie uns sprechen' : 'Let\'s talk'}
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
