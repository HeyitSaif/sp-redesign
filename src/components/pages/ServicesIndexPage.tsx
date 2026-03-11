'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Cpu, PenTool, Code, Smartphone, Layers } from 'lucide-react'
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
import { cn } from '@/lib/utils'

const SERVICE_ICONS: Record<string, typeof Cpu> = {
  'ai-automation': Cpu,
  'ui-ux-design': PenTool,
  'web-app-development': Code,
  'mobile-app-development': Smartphone,
}

const MAX_TILT = 10

function TiltCard({
  href,
  children,
  className,
}: {
  href: string
  children: React.ReactNode
  className: string
}) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    const tiltX = (y - 0.5) * -2 * MAX_TILT
    const tiltY = (x - 0.5) * 2 * MAX_TILT
    setTilt({ x: tiltX, y: tiltY })
  }

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 })

  return (
    <div
      className="h-full"
      style={{ perspective: '1000px' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        href={href}
        className={className}
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: 'transform 0.15s ease-out',
        }}
      >
        {children}
      </Link>
    </div>
  )
}

export function ServicesIndexPage({ locale }: { locale: string }) {
  const isDe = locale === 'de'

  const allServices = Object.values(servicesData).map((s) => ({
    title: s.title[isDe ? 'de' : 'en'],
    tagline: s.tagline[isDe ? 'de' : 'en'],
    slug: s.slugs[isDe ? 'de' : 'en'],
    description: s.heroDescription[isDe ? 'de' : 'en'],
    key: s.slugs.en,
  }))

  const getGraphic = (key: string) => {
    switch (key) {
      case 'ai-automation':
        return <ProceduralAIAutomation animated />
      case 'ui-ux-design':
        return <ProceduralUIDesign animated />
      case 'web-app-development':
        return <ProceduralWebDev animated />
      case 'mobile-app-development':
        return <ProceduralMobileDev animated />
      default:
        return <ProceduralGeometricMesh variant="mixed" animated />
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: { delay: i * 0.08, staggerChildren: 0.06 },
    }),
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <div className="relative flex w-full flex-col overflow-x-clip pt-28 pb-24">
      <FloatiesBackground />

      {/* Hero — Bold, editorial */}
      <section className="relative flex min-h-[55vh] flex-col items-center justify-center px-6 py-24 text-center md:px-12 lg:py-32">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="bg-sp-accent/[0.07] absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(255,112,67,0.06),transparent)]" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 mb-6"
        >
          <span className="border-sp-accent/30 bg-sp-accent/10 text-sp-accent inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold tracking-wide">
            <Layers size={16} strokeWidth={2.5} />
            {isDe ? 'Unsere Leistungen' : 'Our Services'}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 mb-8 max-w-4xl text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05] font-black tracking-tight"
        >
          {isDe ? 'Von der Idee zur ' : 'From idea to '}
          <span className="relative">
            <span className="text-sp-accent relative z-10">
              {isDe ? 'skalierbaren Realität' : 'scalable reality'}
            </span>
            <span className="bg-sp-accent/30 absolute right-0 -bottom-1 left-0 h-1" />
          </span>
          .
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
          className="text-sp-text-muted relative z-10 mx-auto max-w-2xl text-lg leading-relaxed md:text-xl"
        >
          {isDe
            ? 'Wir entwerfen, entwickeln und automatisieren digitale Produkte, die branchenweit Maßstäbe setzen.'
            : 'We design, build, and automate digital products that set industry standards. Scalable, reliable, and innovative.'}
        </motion.p>
      </section>

      {/* Section divider */}
      <div className="container mx-auto px-6 md:px-12">
        <div className="via-sp-border-dark h-px bg-gradient-to-r from-transparent to-transparent" />
      </div>

      {/* Services Grid — Premium cards */}
      <section className="relative z-10 container mx-auto px-6 py-16 md:px-12 lg:py-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-12% 0px' }}
          className="grid gap-6 md:grid-cols-2 lg:gap-8"
        >
          {allServices.map((service, i) => {
            const Icon = SERVICE_ICONS[service.key] ?? Layers
            return (
              <motion.div key={service.slug} variants={itemVariants} className="pt-2">
                <TiltCard
                  href={`/${locale}/${service.slug}`}
                  className={cn(
                    'group relative flex h-full flex-col overflow-hidden rounded-[1.75rem]',
                    'border-sp-border-dark bg-sp-surface-elevated border',
                    '-mt-2',
                    'transition-[border-color,box-shadow] duration-200 ease-out',
                    'hover:border-sp-accent/40 hover:shadow-xl',
                    'focus-visible:ring-sp-accent/50 focus-visible:ring-offset-sp-bg-dark focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none'
                  )}
                >
                  {/* Hover glow overlay */}
                  <div className="bg-sp-accent/[0.06] pointer-events-none absolute inset-0 rounded-[1.75rem] opacity-0 transition-opacity duration-200 ease-out group-hover:opacity-100" />
                  {/* Graphic container */}
                  <div className="relative h-52 overflow-hidden md:h-56">
                    <div className="from-sp-surface-subtle to-sp-surface-elevated absolute inset-0 bg-gradient-to-b" />
                    <div className="absolute inset-0 flex items-center justify-center p-4">
                      {getGraphic(service.key)}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-6 md:p-8">
                    <div className="mb-3 flex items-center gap-3">
                      <div className="bg-sp-accent/10 text-sp-accent group-hover:bg-sp-accent/20 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-colors duration-200">
                        <Icon size={18} strokeWidth={2} />
                      </div>
                      <h2 className="group-hover:text-sp-accent text-2xl font-bold tracking-tight text-white transition-colors duration-200 ease-out md:text-3xl">
                        {service.title}
                      </h2>
                    </div>
                    <p className="text-sp-text-muted mb-4 text-base font-medium">
                      {service.tagline}
                    </p>
                    <p className="text-sp-text-muted mb-6 line-clamp-3 grow text-sm leading-relaxed">
                      {service.description.slice(0, 150)}…
                    </p>

                    {/* CTA */}
                    <span className="text-sp-accent mb-1 flex items-center gap-2 text-sm font-semibold tracking-wide">
                      {isDe ? 'Mehr erfahren' : 'Learn more'}
                      <ArrowRight
                        size={18}
                        className="shrink-0 transition-transform duration-200 ease-out group-hover:translate-x-1"
                        strokeWidth={2.5}
                      />
                    </span>
                  </div>
                </TiltCard>
              </motion.div>
            )
          })}
        </motion.div>
      </section>

      {/* Contact Section — Refined */}
      <section className="bg-sp-bg-medium relative mt-24 overflow-x-clip py-24 md:py-32 lg:py-40">
        <div className="pointer-events-none absolute inset-0">
          <div className="bg-sp-accent/6 absolute top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[150px]" />
        </div>

        <div className="relative z-10 container mx-auto grid items-start gap-16 px-6 md:px-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="max-w-xl">
              <h2 className="text-sp-text-dark mb-6 text-4xl font-black tracking-tight md:text-5xl lg:text-6xl">
                {isDe ? 'Lassen Sie uns zusammenarbeiten' : "Let's work together"}
              </h2>
              <p className="text-sp-text-on-light text-xl leading-relaxed md:text-2xl">
                {isDe
                  ? 'Buchen Sie eine Beratung und erfahren Sie, wie wir Ihr Produkt voranbringen.'
                  : 'Book a consultation to see how we can push your product forward.'}
              </p>
            </div>
          </Reveal>

          <Reveal direction="left" delay={0.15}>
            <ContactFormSection locale={locale} />
          </Reveal>
        </div>
      </section>
    </div>
  )
}
