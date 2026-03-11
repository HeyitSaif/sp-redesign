'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function HeroCarousel({ locale }: { locale: string }) {
  const isDe = locale === 'de'
  const slides = [
    {
      headline: isDe ? 'Eine Idee, aber kein Tech-Team?' : 'Have an idea but no tech team?',
      subtext: isDe
        ? 'Wir bauen Ihr MVP; schnell, zuverlässig und pitch-bereit.'
        : "We'll build your MVP; fast, reliable, and pitch-ready.",
      cta: isDe ? 'So funktioniert unser Modell' : 'See how our model works',
      href: `/${locale}#contact`,
      image: '/images/Hero-Img-1-2-scaled.jpg',
    },
    {
      headline: isDe
        ? 'Sie arbeiten an Produktzielen mit der halben Besetzung.'
        : "You're sprinting toward product goals with half a crew.",
      subtext: isDe
        ? 'Ein zuverlässiges Entwicklerteam, ohne Zeit, Budget oder Momentum zu verlieren.'
        : 'Get dependable dev team without draining time, budget, or momentum.',
      cta: isDe ? 'Über Skalierung sprechen' : "Let's talk scale",
      href: `/${locale}#contact`,
      image: '/images/Hero-Img-12-scaled.jpg',
    },
    {
      headline: isDe
        ? 'Ihr nächstes Release sollte nicht auf Einstellungsprozesse warten.'
        : "Your next release shouldn't wait on hiring red tape.",
      subtext: isDe
        ? 'Bringen Sie erfahrene Senior-Ingenieure an Bord, auf die Sie sich verlassen können – ohne Overhead.'
        : 'Bring in senior engineers you can rely on, with none of the overhead.',
      cta: isDe ? 'Schneller entwickeln' : 'Start building faster',
      href: `/${locale}#contact`,
      image: '/images/Hero-Img-3-1-scaled.jpg',
    },
  ]

  const [current, setCurrent] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (isHovered) return
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [isHovered])

  return (
    <div
      className="bg-sp-bg-dark relative flex min-h-[100svh] items-center overflow-x-clip"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slides[current].image})` }}
          />
          {/* Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-black/50 mix-blend-multiply" />
          <div className="from-sp-bg-dark/80 via-sp-bg-dark/40 absolute inset-0 bg-gradient-to-r to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 container mx-auto grid items-center gap-10 px-5 py-12 md:px-12 md:py-16 lg:grid-cols-12 lg:gap-24">
        <div className="lg:col-span-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            >
              <h1 className="mb-10 text-3xl md:text-4xl leading-[1.1] font-black tracking-tight text-white sm:text-3xl md:text-4xl md:text-5xl md:text-7xl lg:text-8xl">
                {slides[current].headline}
              </h1>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="lg:col-span-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="max-w-sm"
            >
              <p className="mb-8 text-lg leading-relaxed text-white md:text-xl">
                {slides[current].subtext}
              </p>
              <Link
                href={slides[current].href}
                className="group border-sp-accent hover:bg-sp-accent inline-flex items-center gap-3 rounded-full border bg-transparent px-5 py-3 md:px-6 text-base font-medium text-white transition-colors md:px-8 md:py-4 md:text-lg"
              >
                {slides[current].cta}
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-12 left-1/2 z-20 flex -translate-x-1/2 gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="group relative flex h-3 w-12 items-center justify-center overflow-x-clip rounded-full"
          >
            <div className="absolute inset-0 bg-white/20 transition-colors group-hover:bg-white/40" />
            {i === current && (
              <motion.div
                layoutId="heroIndicator"
                className="bg-sp-accent absolute inset-0"
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  )
}
