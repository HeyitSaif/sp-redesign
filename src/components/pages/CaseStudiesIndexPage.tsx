'use client'

import { Reveal } from '@/components/animations/Reveal'
import { ArrowRight, Briefcase, BarChart, Rocket } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FloatiesBackground } from '@/components/ui/FloatiesBackground'
import { ProceduralDataGrid } from '@/components/graphics/ProceduralDataGrid'
import { caseStudies } from '@/data/case-studies'
import { supportData } from '@/data/support-content'

export function CaseStudiesIndexPage({ locale }: { locale: string }) {
  const isDe = locale === 'de'
  const data = caseStudies[isDe ? 'de' : 'en']

  return (
    <div className="relative flex w-full flex-col overflow-x-clip pt-24 pb-16 md:pt-32 md:pb-24">
      <FloatiesBackground />

      {/* Hero */}
      <section className="relative flex min-h-[40vh] items-center overflow-x-clip py-12 md:min-h-[50vh] md:py-20">
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="pointer-events-none absolute inset-0 z-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay" />

        {/* Ambient Backgrounds */}
        <div className="absolute top-0 left-1/2 -z-10 h-full w-full max-w-[1400px] -translate-x-1/2">
          <div className="bg-sp-accent/5 absolute top-[10%] left-[-10%] h-[40%] w-[40%] rounded-full blur-[120px]" />
          <div className="bg-sp-accent/8 absolute right-[-5%] bottom-[20%] h-[30%] w-[30%] rounded-full blur-[100px]" />
        </div>

        <div className="bg-sp-accent/10 pointer-events-none absolute top-1/2 left-1/2 z-0 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[150px]" />

        <div className="relative z-20 container mx-auto px-4 text-center sm:px-6 md:px-12">
          {/* Floaties */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="border-sp-border-dark bg-sp-surface-elevated absolute top-10 left-10 hidden items-center gap-3 rounded-3xl border p-4 shadow-2xl lg:left-32 lg:flex"
          >
            <div className="bg-sp-accent/20 text-sp-accent rounded-xl p-2">
              <BarChart size={24} />
            </div>
            <div className="text-left">
              <p className="mb-1 text-sm leading-none font-bold text-white">Proven Results</p>
              <p className="text-xs text-white/70">Measurable outcomes</p>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="border-sp-border-dark bg-sp-surface-elevated absolute top-10 right-10 hidden items-center gap-3 rounded-3xl border p-4 shadow-2xl lg:right-32 lg:flex"
          >
            <div className="rounded-xl bg-blue-500/20 p-2 text-blue-400">
              <Rocket size={24} />
            </div>
            <div className="text-left">
              <p className="mb-1 text-sm leading-none font-bold text-white">Fast Delivery</p>
              <p className="text-xs text-white/70">6-8 weeks typical</p>
            </div>
          </motion.div>

          <Reveal>
            <div className="bg-sp-accent/10 border-sp-accent/30 text-sp-accent mx-auto mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium md:mb-8">
              <Briefcase size={16} />
              {isDe ? 'Fallstudien' : 'Case Studies'}
            </div>
            <h1 className="mb-6 text-2xl leading-[1.15] font-bold sm:text-3xl md:mb-8 md:text-5xl lg:text-6xl">
              {isDe ? 'Wie wir ' : 'How we helped clients from '}{' '}
              <span className="text-sp-accent">
                {isDe ? 'Idee bis zur Produktion' : 'idea to production'}
              </span>
              {isDe && ' begleitet haben'}
            </h1>
            <p className="text-foreground/85 mx-auto mb-8 max-w-2xl text-base leading-relaxed sm:mb-10 sm:text-lg md:text-xl">
              {isDe
                ? 'Erfahren Sie, wie wir Start-ups, Scale-ups und etablierten Unternehmen geholfen haben, ihre Visionen durch strukturiertes Engineering, klare Prozesse und fokussierte Technologie umzusetzen.'
                : 'Explore how we helped start-ups, scale-ups, and established enterprises turn their vision into reality through structured engineering, clear processes, and focused technology.'}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Procedural Divider */}
      <div className="pointer-events-none relative z-0 -mt-16 mb-8 h-24 w-full opacity-50 md:-mt-24 md:mb-12 md:h-32 lg:h-48">
        <div className="mask-image-gradient-b absolute inset-0">
          <ProceduralDataGrid animated={true} />
        </div>
      </div>

      {/* Grid */}
      <section className="relative z-10 container mx-auto px-4 pb-16 sm:px-6 md:px-12 md:pb-24">
        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {data.map((cs, i) => (
            <Reveal key={cs.slug} delay={0.1 * i} direction="up">
              <Link
                href={`/${locale}/${isDe ? 'fallstudien' : 'case-studies'}/${cs.slug}`}
                className="bg-sp-bg-medium group hover:border-sp-accent/30 flex h-full flex-col overflow-hidden rounded-[2rem] border border-black/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_32px_80px_-20px_rgba(0,0,0,0.15)]"
              >
                <div className="flex h-full flex-col p-6 sm:p-8 md:p-10">
                  <div className="mb-4 flex items-center justify-between md:mb-6">
                    <span className="text-sp-accent/80 bg-sp-accent/10 rounded-full px-4 py-1.5 text-sm font-semibold tracking-wide">
                      {cs.industryBadge}
                    </span>
                    <ArrowRight className="text-sp-accent/50 group-hover:text-sp-accent transition-all group-hover:translate-x-1" />
                  </div>

                  <h2 className="text-sp-text-dark group-hover:text-sp-accent mb-3 text-xl leading-tight font-bold transition-colors sm:text-2xl md:mb-4 md:text-3xl">
                    {cs.clientName}
                  </h2>

                  <p className="text-sp-text-on-light mb-6 flex-1 text-base leading-relaxed font-medium sm:mb-8 sm:text-lg">
                    {cs.tagline}
                  </p>

                  {(cs.duration || cs.deliveryModel) && (
                    <div className="mb-6 flex flex-wrap gap-2 md:mb-8">
                      {cs.duration && (
                        <span className="text-sp-text-dark rounded-full border border-black/10 bg-black/5 px-3 py-1 text-xs font-semibold tracking-wide uppercase">
                          {cs.duration}
                        </span>
                      )}
                      {cs.deliveryModel && (
                        <span className="text-sp-text-dark rounded-full border border-black/10 bg-black/5 px-3 py-1 text-xs font-semibold tracking-wide uppercase">
                          {cs.deliveryModel}
                        </span>
                      )}
                    </div>
                  )}

                  {cs.keyMetricsPreview && cs.keyMetricsPreview.length > 0 && (
                    <div className="mb-6 grid grid-cols-2 gap-3 border-t border-black/5 pt-4 md:mb-8 md:gap-4 md:pt-6">
                      {cs.keyMetricsPreview.map((metric, j) => (
                        <div key={j}>
                          <div className="text-sp-accent text-sm font-bold">{metric.value}</div>
                          <div className="text-sp-text-on-light text-xs font-medium tracking-wider uppercase">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="mt-auto border-t border-black/10 pt-4 md:pt-6">
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

      {/* Related reading */}
      <section className="relative z-10 container mx-auto px-4 pb-16 sm:px-6 md:px-12 md:pb-24">
        <Reveal>
          <div className="border-t border-black/10 pt-12 text-center md:pt-16">
            <h3 className="text-sp-text-dark mb-6 text-xl font-bold md:mb-8 md:text-2xl">
              {supportData[isDe ? 'de' : 'en'].caseStudies.readMore}
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href={`/${locale}/${isDe ? 'mvp-sprint-paket' : 'mvp-sprint-package'}`}
                className="text-sp-text-dark hover:border-sp-accent hover:text-sp-accent bg-sp-bg-light rounded-full border border-black/10 px-6 py-2 text-sm font-semibold tracking-wide uppercase transition-colors"
              >
                MVP Sprint
              </Link>
              <Link
                href={`/${locale}/${isDe ? 'dedizierte-teams' : 'dedicated-delivery-teams'}`}
                className="text-sp-text-dark hover:border-sp-accent hover:text-sp-accent bg-sp-bg-light rounded-full border border-black/10 px-6 py-2 text-sm font-semibold tracking-wide uppercase transition-colors"
              >
                {isDe ? 'Dedizierte Teams' : 'Dedicated Teams'}
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Final CTA */}
      <section className="bg-sp-bg-medium border-sp-accent/10 relative overflow-x-clip border-t py-16 md:py-24 lg:py-32">
        <div className="relative z-10 container mx-auto max-w-4xl px-4 text-center sm:px-6 md:px-12">
          <Reveal>
            <h2 className="text-sp-text-dark mb-6 text-2xl font-bold sm:text-3xl md:mb-8 md:text-4xl lg:text-5xl">
              {isDe ? 'Bereit für Ihr ' : 'Ready for your '}{' '}
              <span className="text-sp-accent">{isDe ? 'nächstes Projekt?' : 'next project?'}</span>
            </h2>
            <p className="text-sp-text-on-light mb-8 text-base sm:mb-10 md:mb-12 md:text-lg lg:text-xl">
              {isDe
                ? 'Lassen Sie uns darüber sprechen, wie wir Ihre Idee strukturiert und erfolgreich umsetzen können.'
                : "Let's talk about how we can build your idea with structure and success."}
            </p>
            <Link
              href={`/${locale}/${isDe ? 'kontakt-solutionplus' : 'contact-us'}`}
              className="bg-sp-accent group hover:bg-sp-accent-dark relative inline-block overflow-x-clip rounded-full px-8 py-4 text-base font-bold tracking-wide text-white shadow-[0_4px_20px_-4px_rgba(255,112,67,0.4)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_40px_-4px_rgba(255,112,67,0.6)] active:scale-95 md:px-10 md:py-5 md:text-lg"
            >
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_2s_infinite]" />
              {isDe ? 'Lassen Sie uns sprechen' : "Let's talk"}
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
