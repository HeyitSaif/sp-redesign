'use client'

import { ProceduralIsometricBlocks } from '@/components/graphics/ProceduralIsometricBlocks'
import { ProceduralNetwork } from '@/components/graphics/ProceduralNetwork'
import { ProceduralDataGrid } from '@/components/graphics/ProceduralDataGrid'
import { ProceduralProcessPipeline } from '@/components/graphics/ProceduralProcessPipeline'
import { ProceduralGeometricMesh } from '@/components/graphics/ProceduralGeometricMesh'
import { ProceduralAIAutomation } from '@/components/graphics/ProceduralAIAutomation'
import { ProceduralUIDesign } from '@/components/graphics/ProceduralUIDesign'
import { ProceduralWebDev } from '@/components/graphics/ProceduralWebDev'
import { ProceduralMobileDev } from '@/components/graphics/ProceduralMobileDev'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

import { Reveal } from '@/components/animations/Reveal'
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Layers,
  Lightbulb,
  ShieldCheck,
  Zap,
} from 'lucide-react'
import { FloatiesBackground } from '@/components/ui/FloatiesBackground'
import { ContactFormSection } from '@/components/sections/ContactFormSection'
import { StickyQnA } from '@/components/sections/StickyQnA'
import { servicesData } from '@/data/services-content'

export function ServiceDetailPage({ locale, serviceKey }: { locale: string; serviceKey: string }) {
  const isDe = locale === 'de'
  const data = servicesData[serviceKey]

  if (!data) {
    return <div>Service not found.</div>
  }

  // Choose an appropriate graphic for the hero based on the service
  let HeroGraphic = <ProceduralGeometricMesh variant="mixed" animated={true} />
  if (serviceKey === 'ai-automation') {
    HeroGraphic = <ProceduralAIAutomation animated={true} />
  } else if (serviceKey === 'ui-ux-design') {
    HeroGraphic = <ProceduralUIDesign animated={true} />
  } else if (serviceKey === 'web-app-development') {
    HeroGraphic = <ProceduralWebDev animated={true} />
  } else if (serviceKey === 'mobile-app-development') {
    HeroGraphic = <ProceduralMobileDev animated={true} />
  }

  return (
    <div className="relative flex w-full flex-col overflow-x-clip pt-24 pb-16 md:pt-32 md:pb-24">
      <FloatiesBackground />
      {/* Hero */}
      <section className="relative flex min-h-[70vh] items-center overflow-x-clip py-12 md:py-16 lg:py-20">
        <div className="pointer-events-none absolute inset-0 noise-overlay opacity-10 mix-blend-overlay" />
        <div className="bg-sp-accent/10 pointer-events-none absolute top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[150px]" />

        <div className="relative z-10 container mx-auto grid items-center gap-10 px-5 md:gap-16 md:px-8 lg:grid-cols-2 lg:px-12">
          <div>
            <Reveal>
              <div className="mb-8 flex flex-wrap items-center gap-3">
                <div className="bg-sp-accent/10 border-sp-accent/20 text-sp-accent inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium">
                  <Layers size={16} />
                  {data.title[isDe ? 'de' : 'en']}
                </div>
              </div>
              <h1 className="mb-8 text-3xl leading-[1.1] font-bold md:text-3xl md:text-4xl md:text-5xl md:text-6xl lg:text-7xl">
                {data.tagline[isDe ? 'de' : 'en']}
              </h1>
              <p className="text-sp-text-muted mb-10 max-w-xl text-xl leading-relaxed">
                {data.heroDescription[isDe ? 'de' : 'en']}
              </p>

              <div className="flex flex-wrap gap-4">
                <Button
                  variant="primary"
                  size="md"
                  href={`/${locale}/${isDe ? 'kontakt-solutionplus' : 'contact-us'}`}
                >
                  {isDe ? 'Jetzt anfragen' : 'Get Started'}{' '}
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Button>
                <Button variant="secondary" size="md" href="#how-it-works">
                  {isDe ? 'Mehr erfahren' : 'Learn more'}
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal direction="left">
            <div className="bg-sp-bg-medium relative h-64 w-full rotate-2 overflow-hidden rounded-3xl border border-black/10 p-2 shadow-2xl transition-transform duration-500 hover:rotate-0 md:h-80 lg:h-[400px]">
              {HeroGraphic}
            </div>
          </Reveal>
        </div>
      </section>

      {/* What We Deliver */}
      <section className="bg-sp-bg-dark border-sp-border-dark relative border-y py-12 md:py-16 lg:py-24">
        <div className="container mx-auto px-5 md:px-8 lg:px-12">
          <Reveal>
            <h2 className="mb-10 text-center text-3xl font-bold md:mb-16 md:text-3xl md:text-4xl md:text-5xl">
              {data.whatWeDeliver.sectionTitle[isDe ? 'de' : 'en']}
            </h2>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-2 md:gap-8">
            {data.whatWeDeliver.items.map((item, i) => (
              <Reveal key={i} delay={0.1 * (i + 1)} direction="up">
                <div className="bg-sp-bg-medium group relative flex h-full flex-col overflow-hidden rounded-3xl border border-black/10 p-5 text-left shadow-lg transition-all duration-300 hover:border-black/10 hover:shadow-[0_32px_80px_-20px_rgba(0,0,0,0.15)] md:p-8">
                  <div className="bg-sp-surface-elevated relative mb-6 aspect-[16/10] min-h-[160px] w-full shrink-0 overflow-hidden rounded-xl border border-black/10 md:min-h-[200px] md:rounded-2xl">
                    <div className="absolute inset-0 [&>*]:h-full [&>*]:w-full">
                      {i % 4 === 0 && <ProceduralIsometricBlocks layers={2} animated />}
                      {i % 4 === 1 && <ProceduralNetwork nodeCount={10} animated />}
                      {i % 4 === 2 && <ProceduralDataGrid animated compact />}
                      {i % 4 === 3 && <ProceduralGeometricMesh variant="circle" animated />}
                    </div>
                  </div>
                  <h3 className="text-sp-text-dark relative z-10 mb-4 text-xl font-bold">
                    {item.title[isDe ? 'de' : 'en']}
                  </h3>
                  <p className="text-sp-text-on-light relative z-10 leading-relaxed">
                    {item.description[isDe ? 'de' : 'en']}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Works */}
      <section className="relative overflow-x-clip py-12 md:py-16 lg:py-24">
        <div className="bg-sp-accent/5 pointer-events-none absolute top-1/2 left-0 h-[500px] w-[500px] -translate-y-1/2 rounded-full blur-[120px]" />
        <div className="container mx-auto grid items-center gap-10 px-5 md:gap-16 md:px-8 lg:grid-cols-2 lg:px-12">
          <Reveal direction="right">
            <div className="bg-sp-bg-medium relative h-64 overflow-hidden rounded-3xl border border-black/10 p-2 md:h-80 lg:h-[400px]">
              <ProceduralProcessPipeline steps={4} animated={true} />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <h2 className="mb-10 text-3xl font-bold md:text-3xl md:text-4xl md:text-5xl">
                {data.whyItWorks.sectionTitle[isDe ? 'de' : 'en']}
              </h2>
            </Reveal>
            <div className="space-y-6">
              {data.whyItWorks.items.map((item, i) => (
                <Reveal key={i} delay={0.1 * i} direction="left">
                  <div className="hover:border-sp-accent/40 bg-sp-bg-medium flex items-start gap-4 overflow-hidden rounded-2xl border border-black/5 p-5 transition-colors md:p-6">
                    <CheckCircle2 className="text-sp-accent mt-1 shrink-0" />
                    <div>
                      <h4 className="text-sp-text-dark mb-1 font-bold">
                        {item.title[isDe ? 'de' : 'en']}
                      </h4>
                      <p className="text-sp-text-on-light leading-relaxed font-medium">
                        {item.description[isDe ? 'de' : 'en']}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section
        id="how-it-works"
        className="bg-sp-bg-dark border-sp-border-dark relative border-y py-12 md:py-16 lg:py-24"
      >
        <div className="container mx-auto px-5 md:px-8 lg:px-12">
          <Reveal>
            <div className="mb-10 text-center md:mb-16">
              <h2 className="text-3xl font-bold text-white md:text-3xl md:text-4xl md:text-5xl">
                {data.howWeWork.sectionTitle[isDe ? 'de' : 'en']}
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-2 md:gap-8">
            {data.howWeWork.items.map((step, i) => (
              <Reveal
                key={i}
                delay={0.1 * i}
                direction="up"
                className={cn(
                  data.howWeWork.items.length % 2 !== 0 && i === data.howWeWork.items.length - 1
                    ? 'w-full md:col-span-2 md:mx-auto md:w-[calc(50%-1rem)]'
                    : ''
                )}
              >
                <div className="hover:border-sp-accent/40 group border-sp-border-dark bg-sp-surface-subtle flex h-full flex-col overflow-hidden rounded-2xl border p-5 shadow-xl transition-all duration-300 md:p-8">
                  <div className="bg-sp-accent/20 text-sp-accent mb-6 flex h-14 w-14 items-center justify-center rounded-[1.25rem] text-xl font-bold transition-transform group-hover:scale-110">
                    {i + 1}
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-white">
                    {step.title[isDe ? 'de' : 'en']}
                  </h3>
                  <p className="text-sp-text-muted grow leading-relaxed">
                    {step.description[isDe ? 'de' : 'en']}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      {data.technologyStack && data.technologyStack.categories.length > 0 && (
        <section className="relative overflow-hidden py-12 md:py-16 lg:py-24">
          <div className="container mx-auto px-5 text-center md:px-12">
            <Reveal>
              <h2 className="mb-10 text-3xl font-bold md:mb-16 md:text-3xl md:text-4xl md:text-5xl">
                {data.technologyStack.sectionTitle[isDe ? 'de' : 'en']}
              </h2>
            </Reveal>
            <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-4">
              {data.technologyStack.categories.map((cat, i) => (
                <Reveal key={i} delay={0.1 * i} direction="up">
                  <div className="bg-sp-bg-medium flex flex-col items-center justify-center gap-2 overflow-hidden rounded-2xl border border-black/5 px-5 py-4 shadow-sm md:px-6">
                    <span className="text-sp-text-dark font-bold">
                      {cat.category[isDe ? 'de' : 'en']}
                    </span>
                    <span className="text-sp-text-on-light text-sm">{cat.items}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact Section */}
      <section className="bg-sp-bg-medium relative overflow-x-clip py-12 md:py-16 lg:py-24 xl:py-32">
        <div className="bg-sp-accent/10 absolute top-1/2 left-1/2 h-[1200px] w-[1200px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[150px]" />

        <div className="relative z-10 container mx-auto grid items-start gap-10 px-5 md:gap-16 md:px-8 lg:grid-cols-2 lg:px-12">
          <Reveal>
            <div className="max-w-xl">
              <h2 className="text-sp-text-dark mb-10 text-3xl leading-[1.1] font-black tracking-tight md:text-3xl md:text-4xl md:text-5xl md:text-6xl">
                {data.ctaTitle[isDe ? 'de' : 'en']}
              </h2>
              <p className="text-sp-text-on-light text-2xl leading-relaxed font-light">
                {data.ctaSubtitle[isDe ? 'de' : 'en']}
              </p>
            </div>
          </Reveal>

          <Reveal direction="left" delay={0.2}>
            <ContactFormSection locale={locale} />
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      {data.faqs && data.faqs.length > 0 && (
        <StickyQnA
          locale={locale}
          items={data.faqs.map((f) => ({
            q: f.q[isDe ? 'de' : 'en'],
            a: f.a[isDe ? 'de' : 'en'],
          }))}
        />
      )}
    </div>
  )
}
