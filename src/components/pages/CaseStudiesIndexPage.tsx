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
    <div className="relative flex w-full flex-col overflow-x-clip pt-32 pb-24">
      <FloatiesBackground />

      {/* Hero */}
      <section className="relative flex min-h-[50vh] items-center overflow-x-clip py-20">
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="pointer-events-none absolute inset-0 z-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay" />

        {/* Ambient Backgrounds */}
        <div className="absolute top-0 left-1/2 -z-10 h-full w-full max-w-[1400px] -translate-x-1/2">
          <div className="bg-sp-accent/5 absolute top-[10%] left-[-10%] h-[40%] w-[40%] rounded-full blur-[120px]" />
          <div className="bg-sp-accent/8 absolute right-[-5%] bottom-[20%] h-[30%] w-[30%] rounded-full blur-[100px]" />
        </div>

        <div className="bg-sp-accent/10 pointer-events-none absolute top-1/2 left-1/2 z-0 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[150px]" />

        <div className="relative z-20 container mx-auto px-6 text-center md:px-12">
          {/* Floaties */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-10 left-10 hidden items-center gap-3 rounded-3xl border border-white/20 bg-white/10 p-4 shadow-2xl backdrop-blur-xl lg:left-32 lg:flex"
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
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute right-10 bottom-10 hidden items-center gap-3 rounded-3xl border border-white/20 bg-white/10 p-4 shadow-2xl backdrop-blur-xl lg:right-32 lg:flex"
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
            <div className="bg-sp-accent/10 border-sp-accent/20 text-sp-accent mx-auto mb-8 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium backdrop-blur-md">
              <Briefcase size={16} />
              {isDe ? 'Fallstudien' : 'Case Studies'}
            </div>
            <h1 className="mb-8 text-4xl leading-[1.1] font-bold md:text-6xl lg:text-7xl">
              {isDe ? 'Wie wir ' : 'How we helped clients from '}{' '}
              <span className="text-sp-accent">
                {isDe ? 'Idee bis zur Produktion' : 'idea to production'}
              </span>
              {isDe && ' begleitet haben'}
            </h1>
            <p className="text-foreground/85 mx-auto mb-10 max-w-2xl text-xl leading-relaxed">
              {isDe
                ? 'Erfahren Sie, wie wir Start-ups, Scale-ups und etablierten Unternehmen geholfen haben, ihre Visionen durch strukturiertes Engineering, klare Prozesse und fokussierte Technologie umzusetzen.'
                : 'Explore how we helped start-ups, scale-ups, and established enterprises turn their vision into reality through structured engineering, clear processes, and focused technology.'}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Procedural Divider */}
      <div className="pointer-events-none relative z-0 -mt-24 mb-12 h-32 w-full opacity-50 md:h-48">
        <div className="mask-image-gradient-b absolute inset-0">
          <ProceduralDataGrid animated={true} />
        </div>
      </div>

      {/* Grid */}
      <section className="relative z-10 container mx-auto px-6 pb-24 md:px-12">
        <div className="grid gap-8 md:grid-cols-2">
          {data.map((cs, i) => (
            <Reveal key={cs.slug} delay={0.1 * i} direction="up">
              <Link
                href={`/${locale}/${isDe ? 'fallstudien' : 'case-studies'}/${cs.slug}`}
                className="bg-sp-bg-medium group hover:border-sp-accent/30 flex h-full flex-col overflow-hidden rounded-[2rem] border border-black/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_32px_80px_-20px_rgba(0,0,0,0.15)]"
              >
                <div className="flex h-full flex-col p-8 md:p-10">
                  <div className="mb-6 flex items-center justify-between">
                    <span className="text-sp-accent/80 bg-sp-accent/10 rounded-full px-4 py-1.5 text-sm font-semibold tracking-wide">
                      {cs.industryBadge}
                    </span>
                    <ArrowRight className="text-sp-accent/50 group-hover:text-sp-accent transition-all group-hover:translate-x-1" />
                  </div>

                  <h2 className="text-sp-text-dark group-hover:text-sp-accent mb-4 text-3xl leading-tight font-bold transition-colors">
                    {cs.clientName}
                  </h2>

                  <p className="text-sp-text-on-light mb-8 flex-1 text-lg leading-relaxed font-medium">
                    {cs.tagline}
                  </p>

                  {(cs.duration || cs.deliveryModel) && (
                    <div className="mb-8 flex flex-wrap gap-2">
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
                    <div className="mb-8 grid grid-cols-2 gap-4 border-t border-black/5 pt-6">
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

      {/* Related reading */}
      <section className="relative z-10 container mx-auto px-6 pb-24 md:px-12">
        <Reveal>
          <div className="border-t border-black/10 pt-16 text-center">
            <h3 className="text-sp-text-dark mb-8 text-2xl font-bold">
              {supportData[isDe ? 'de' : 'en'].caseStudies.readMore}
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href={`/${locale}/${isDe ? 'mvp-sprint-paket' : 'mvp-sprint-package'}`}
                className="text-sp-text-dark hover:border-sp-accent hover:text-sp-accent rounded-full border border-black/10 bg-white/5 px-6 py-2 text-sm font-semibold tracking-wide uppercase transition-colors"
              >
                MVP Sprint
              </Link>
              <Link
                href={`/${locale}/${isDe ? 'dedizierte-teams' : 'dedicated-delivery-teams'}`}
                className="text-sp-text-dark hover:border-sp-accent hover:text-sp-accent rounded-full border border-black/10 bg-white/5 px-6 py-2 text-sm font-semibold tracking-wide uppercase transition-colors"
              >
                {isDe ? 'Dedizierte Teams' : 'Dedicated Teams'}
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Final CTA */}
      <section className="bg-sp-bg-medium border-sp-accent/10 relative overflow-x-clip border-t py-32">
        <div className="relative z-10 container mx-auto max-w-4xl px-6 text-center md:px-12">
          <Reveal>
            <h2 className="text-sp-text-dark mb-8 text-4xl font-bold md:text-6xl">
              {isDe ? 'Bereit für Ihr ' : 'Ready for your '}{' '}
              <span className="text-sp-accent">{isDe ? 'nächstes Projekt?' : 'next project?'}</span>
            </h2>
            <p className="text-sp-text-on-light mb-12 text-xl">
              {isDe
                ? 'Lassen Sie uns darüber sprechen, wie wir Ihre Idee strukturiert und erfolgreich umsetzen können.'
                : "Let's talk about how we can build your idea with structure and success."}
            </p>
            <Link
              href={`/${locale}/${isDe ? 'kontakt-solutionplus' : 'contact-us'}`}
              className="bg-sp-accent group hover:bg-sp-accent-dark relative inline-block overflow-x-clip rounded-full px-10 py-5 text-lg font-bold tracking-wide text-white shadow-[0_4px_20px_-4px_rgba(255,112,67,0.4)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_40px_-4px_rgba(255,112,67,0.6)] active:scale-95"
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
