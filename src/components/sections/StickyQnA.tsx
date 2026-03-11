'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Reveal } from '@/components/animations/Reveal'

interface FaqItem {
  q: string
  a: string
}

export function StickyQnA({ items, locale }: { items: FaqItem[]; locale: string }) {
  const isDe = locale === 'de'

  return (
    <section className="bg-sp-bg-dark relative border-y border-white/5 pb-24 lg:pb-0">
      <div className="container mx-auto px-6 md:px-12">
        <div className="relative flex flex-col gap-16 lg:flex-row lg:gap-24 lg:py-40">
          {/* Sticky Left Column */}
          <div className="z-10 self-start pt-24 lg:sticky lg:top-40 lg:w-[45%] lg:pt-0">
            <Reveal direction="up">
              <h2 className="text-5xl leading-[1.1] font-black tracking-tight text-white md:text-6xl lg:text-7xl">
                {isDe
                  ? 'Sie sind nicht der Erste, der fragt, und wir sind bereit.'
                  : 'You’re not the first to ask, and we’re ready.'}
              </h2>
            </Reveal>
            <Reveal direction="up" delay={0.2} className="mt-12 hidden lg:block">
              <Link
                href={`/${locale}/${isDe ? 'kontakt-solutionplus' : 'contact-us'}`}
                className="hover:text-sp-link-hover group inline-flex items-center gap-4 text-2xl font-medium text-white transition-all"
              >
                {isDe ? 'Lassen Sie uns darüber sprechen.' : 'Let’s talk it out.'}
                <ArrowRight
                  size={28}
                  className="text-sp-accent transition-transform group-hover:translate-x-2"
                />
              </Link>
            </Reveal>
          </div>

          {/* Scrolling Right Column: Stacked Cards */}
          <div className="relative z-20 flex flex-col gap-6 lg:w-[55%] lg:gap-12 lg:pb-[20vh]">
            {items.map((item, i) => (
              <StackedCard key={i} item={item} index={i} total={items.length} />
            ))}
          </div>

          <Reveal direction="up" className="mt-8 block lg:hidden">
            <Link
              href={`/${locale}/${isDe ? 'kontakt-solutionplus' : 'contact-us'}`}
              className="hover:text-sp-link-hover group inline-flex items-center gap-4 text-2xl font-medium text-white transition-all"
            >
              {isDe ? 'Lassen Sie uns darüber sprechen.' : 'Let’s talk it out.'}
              <ArrowRight
                size={28}
                className="text-sp-accent transition-transform group-hover:translate-x-2"
              />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function StackedCard({ item, index, total }: { item: FaqItem; index: number; total: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="hover:border-sp-accent/30 bg-sp-bg-medium sticky overflow-x-clip rounded-[2.5rem] border border-white/5 p-10 shadow-2xl transition-colors duration-500 md:p-14"
      style={{
        top: `calc(140px + ${index * 30}px)`,
        zIndex: index,
      }}
    >
      {/* Decorative gradient blob */}
      <div className="bg-sp-accent/5 pointer-events-none absolute top-0 right-0 h-64 w-64 translate-x-1/3 -translate-y-1/2 rounded-full blur-3xl" />

      <div className="relative z-10 flex h-full flex-col justify-between gap-8">
        <div className="flex items-center justify-between">
          <span className="text-sp-accent font-mono text-lg font-bold tracking-wider">
            0{index + 1}
          </span>
          <div className="h-px w-16 bg-black/10" />
        </div>

        <div>
          <h3 className="text-sp-text-dark mb-6 text-2xl leading-[1.3] font-bold tracking-tight md:text-3xl lg:text-4xl">
            {item.q}
          </h3>
          <p className="text-sp-text-on-light text-lg leading-relaxed font-light md:text-xl">{item.a}</p>
        </div>
      </div>
    </motion.div>
  )
}
