'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import {
  ChevronDown,
  Rocket,
  Users,
  RefreshCw,
  TrendingUp,
  Target,
  Globe,
  Briefcase,
  ShieldCheck,
  Zap,
  ArrowRight,
} from 'lucide-react'
import { cn } from '@/lib/utils'

const NAV_DATA_EN = [
  {
    name: 'Services',
    items: [
      {
        name: 'MVP Sprint Package',
        description: 'Validate fast and enter the market with confidence.',
        href: '/mvp-sprint-package',
        icon: Rocket,
      },
      {
        name: 'Dedicated Teams',
        description: 'Scale your engineering with our managed remote teams.',
        href: '/dedicated-delivery-teams',
        icon: Users,
      },
      {
        name: 'Product Modernization',
        description: 'Refactor and upgrade legacy code securely.',
        href: '/product-modernization',
        icon: RefreshCw,
      },
    ],
    footerMessage: 'Engineered for performance & scale.',
  },
  {
    name: 'Who We Serve',
    items: [
      {
        name: 'Startups',
        description: 'Agile engineering for early-stage companies.',
        href: '/startup',
        icon: Target,
      },
      {
        name: 'Scale-Ups',
        description: 'Expand features and capacity without losing momentum.',
        href: '/scale-up',
        icon: TrendingUp,
      },
      {
        name: 'Entrepreneurs',
        description: 'Transform your vision into a scalable product.',
        href: '/entrepreneur-with-an-idea',
        icon: Briefcase,
      },
    ],
    footerMessage: 'Trusted by growing tech companies.',
  },
  {
    name: 'Company',
    items: [
      {
        name: 'About Us',
        description: 'German leadership, elite Pakistani engineering talent.',
        href: '/about-team',
        icon: Globe,
      },
      {
        name: 'Careers',
        description: 'Join our mission to build products that matter.',
        href: '/careers',
        icon: Zap,
      },
    ],
    footerMessage: 'Quality-driven global delivery.',
  },
]

const NAV_DATA_DE = [
  {
    name: 'Leistungen',
    items: [
      {
        name: 'MVP Sprint Paket',
        description: 'Schnelle Validierung und sicherer Markteintritt.',
        href: '/mvp-sprint-paket',
        icon: Rocket,
      },
      {
        name: 'Dedizierte Teams',
        description: 'Skalieren Sie Ihre Entwicklung mit unseren Teams.',
        href: '/dedizierte-teams',
        icon: Users,
      },
      {
        name: 'Software Modernisierung',
        description: 'Legacy-Code sicher refaktorieren und upgraden.',
        href: '/software-modernisierung',
        icon: RefreshCw,
      },
    ],
    footerMessage: 'Für Performance & Skalierung entwickelt.',
  },
  {
    name: 'Für Wen',
    items: [
      {
        name: 'Startups',
        description: 'Agile Entwicklung für junge Unternehmen.',
        href: '/startups',
        icon: Target,
      },
      {
        name: 'Scale-Ups',
        description: 'Erweitern Sie Features ohne Momentum zu verlieren.',
        href: '/scaleups',
        icon: TrendingUp,
      },
      {
        name: 'Gründer',
        description: 'Verwandeln Sie Ihre Vision in ein skalierbares Produkt.',
        href: '/gruender-idee-startup-partner',
        icon: Briefcase,
      },
    ],
    footerMessage: 'Vertrauen von wachsenden Tech-Unternehmen.',
  },
  {
    name: 'Unternehmen',
    items: [
      {
        name: 'Über Uns',
        description: 'Deutsche Führung, pakistanische Top-Entwickler.',
        href: '/ueber-solutionplus',
        icon: Globe,
      },
      {
        name: 'Karriere',
        description: 'Werden Sie Teil unseres High-Performance-Teams.',
        href: '/karriere',
        icon: Zap,
      },
    ],
    footerMessage: 'Qualitätsgetriebene globale Umsetzung.',
  },
]

// Spring configurations for buttery smooth animations
const springConfig = { type: 'spring' as const, stiffness: 300, damping: 30, mass: 0.8 }
const menuSpringConfig = { type: 'spring' as const, stiffness: 350, damping: 25, mass: 0.5 }

export function Header({ locale }: { locale: string }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null)
  const [expandedMobileSection, setExpandedMobileSection] = useState<string | null>(null)

  const navData = locale === 'de' ? NAV_DATA_DE : NAV_DATA_EN

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileMenuOpen) {
        setMobileMenuOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [mobileMenuOpen])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  return (
    <header
      className={cn(
        'fixed top-0 z-50 w-full transition-all duration-500 will-change-transform',
        scrolled ? 'py-3' : 'py-6'
      )}
    >
      {/* Blurred background pill that appears on scroll */}
      <div
        className={cn(
          'pointer-events-none absolute inset-0 mx-auto max-w-[1200px] transition-all duration-500 ease-out',
          scrolled
            ? 'top-3 right-4 bottom-3 left-4 rounded-2xl border border-white/[0.08] bg-black/40 shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-2xl md:right-8 md:left-8 md:rounded-[2rem] lg:right-12 lg:left-12'
            : 'top-0 right-0 bottom-0 left-0 bg-transparent'
        )}
      />

      <div
        className={cn(
          'relative z-10 container mx-auto flex items-center justify-between transition-all duration-500',
          scrolled ? 'px-8 md:px-14 lg:px-20' : 'px-6 md:px-12 lg:px-12'
        )}
      >
        <Link
          href={`/${locale}`}
          className="group relative flex items-center rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-white/50"
        >
          <Image
            src="/logo.png"
            alt="SolutionPlus"
            width={180}
            height={60}
            className="h-6 w-auto object-contain opacity-90 brightness-0 invert transition-opacity duration-300 group-hover:opacity-100 md:h-7 lg:h-8"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="relative hidden items-center gap-1 md:flex"
          onMouseLeave={() => setHoveredMenu(null)}
        >
          {navData.map((section) => (
            <div
              key={section.name}
              className="relative"
              onMouseEnter={() => setHoveredMenu(section.name)}
            >
              <button
                className={cn(
                  'relative z-10 flex items-center gap-1.5 rounded-full px-4 py-2.5 text-sm font-medium transition-colors duration-200 outline-none',
                  hoveredMenu === section.name ? 'text-white' : 'text-white/70 hover:text-white'
                )}
                aria-expanded={hoveredMenu === section.name}
              >
                {section.name}
                <ChevronDown
                  size={14}
                  className={cn(
                    'transition-transform duration-300 ease-[0.23,1,0.32,1]',
                    hoveredMenu === section.name ? 'rotate-180 text-white' : 'text-white/40'
                  )}
                />
              </button>

              {/* Animated hover pill background */}
              {hoveredMenu === section.name && (
                <motion.div
                  layoutId="desktop-nav-pill"
                  className="absolute inset-0 z-0 rounded-full border border-white/[0.05] bg-white/[0.06]"
                  transition={springConfig}
                />
              )}

              {/* Dropdown Menu */}
              <AnimatePresence>
                {hoveredMenu === section.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 12, filter: 'blur(8px)', scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }}
                    exit={{ opacity: 0, y: 8, filter: 'blur(4px)', scale: 0.98 }}
                    transition={menuSpringConfig}
                    className="absolute top-[calc(100%+0.5rem)] left-1/2 z-50 w-[360px] origin-top -translate-x-1/2 rounded-2xl border border-white/[0.08] bg-[#0c0c0e]/95 p-2.5 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8),0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur-3xl lg:w-[400px]"
                  >
                    <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-white/[0.03] to-transparent" />

                    <div className="relative z-10 flex flex-col gap-1">
                      {section.items.map((item, idx) => {
                        const Icon = item.icon
                        return (
                          <motion.div
                            key={item.name}
                            initial={{ opacity: 0, x: -8 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.04, duration: 0.3, ease: 'easeOut' }}
                          >
                            <Link
                              href={`/${locale}${item.href}`}
                              className="group/item flex items-start gap-4 rounded-xl p-3 transition-all duration-300 outline-none hover:bg-white/[0.04] focus-visible:bg-white/[0.06]"
                              onClick={() => setHoveredMenu(null)}
                            >
                              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/[0.05] bg-gradient-to-br from-white/[0.08] to-white/[0.02] text-white/80 shadow-inner transition-all duration-300 group-hover/item:border-white/20 group-hover/item:from-white/[0.12] group-hover/item:to-white/[0.05] group-hover/item:text-white">
                                <Icon
                                  size={18}
                                  strokeWidth={2}
                                  className="transition-transform duration-300 group-hover/item:scale-110"
                                />
                              </div>
                              <div className="flex-1">
                                <div className="mb-0.5 flex items-center justify-between">
                                  <span className="text-sm font-semibold tracking-tight text-white/90 transition-colors group-hover/item:text-white">
                                    {item.name}
                                  </span>
                                  <ArrowRight
                                    size={14}
                                    className="-translate-x-2 text-white/40 opacity-0 transition-all duration-300 group-hover/item:translate-x-0 group-hover/item:text-white group-hover/item:opacity-100"
                                  />
                                </div>
                                <div className="text-xs leading-relaxed font-medium text-white/50 transition-colors group-hover/item:text-white/70">
                                  {item.description}
                                </div>
                              </div>
                            </Link>
                          </motion.div>
                        )
                      })}
                    </div>

                    {/* Sub-footer */}
                    <div className="group/footer relative z-10 mt-2 overflow-hidden rounded-xl border border-white/[0.03] bg-black/40 px-4 py-3">
                      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-white/0 via-white/5 to-white/0 group-hover/footer:animate-[shimmer_2s_infinite]" />
                      <div className="relative z-10 flex items-center gap-2.5 text-xs font-medium text-white/60">
                        <ShieldCheck size={14} className="text-white/40" />
                        <span>{section.footerMessage}</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}

          <div className="ml-2 flex items-center border-l border-white/10 pl-4">
            <Link
              href={locale === 'de' ? `/${locale}/kontakt-solutionplus` : `/${locale}/contact-us`}
              className="group relative overflow-hidden rounded-full bg-white px-5 py-2.5 text-sm font-semibold tracking-wide text-black shadow-[0_0_0_0_rgba(255,255,255,0)] transition-all duration-300 outline-none hover:scale-[1.02] hover:shadow-[0_0_20px_0_rgba(255,255,255,0.3)] focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black active:scale-[0.98] lg:px-6"
            >
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-black/5 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
              <span className="relative z-10 flex items-center gap-2">
                {locale === 'de' ? 'Gespräch buchen' : 'Book a Call'}
                <ArrowRight
                  size={16}
                  className="opacity-70 transition-transform group-hover:translate-x-0.5"
                />
              </span>
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="relative z-50 -mr-2 flex h-10 w-10 flex-col items-center justify-center rounded-full p-2 text-white transition-colors outline-none hover:bg-white/10 md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
        >
          <motion.div
            animate={mobileMenuOpen ? 'open' : 'closed'}
            className="flex h-4 w-5 flex-col justify-between"
          >
            <motion.span
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: 45, y: 7.5 },
              }}
              className="block h-[1.5px] w-full origin-left bg-white transition-all"
            />
            <motion.span
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 },
              }}
              className="block h-[1.5px] w-full bg-white transition-all"
            />
            <motion.span
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: -45, y: -7.5 },
              }}
              className="block h-[1.5px] w-full origin-left bg-white transition-all"
            />
          </motion.div>
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(20px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 flex flex-col overflow-hidden bg-black/95 pt-24 md:hidden"
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent" />

            <div className="no-scrollbar flex-1 overflow-y-auto px-6 pb-32">
              <div className="flex flex-col gap-3">
                {navData.map((section, idx) => (
                  <motion.div
                    key={section.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.1 + idx * 0.05,
                      duration: 0.4,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02]"
                  >
                    <button
                      onClick={() =>
                        setExpandedMobileSection(
                          expandedMobileSection === section.name ? null : section.name
                        )
                      }
                      className="flex w-full items-center justify-between p-5 text-lg font-semibold text-white/90 transition-colors outline-none hover:bg-white/[0.04]"
                    >
                      {section.name}
                      <motion.div
                        animate={{ rotate: expandedMobileSection === section.name ? 180 : 0 }}
                        transition={springConfig}
                      >
                        <ChevronDown size={20} className="text-white/40" />
                      </motion.div>
                    </button>
                    <AnimatePresence>
                      {expandedMobileSection === section.name && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        >
                          <div className="flex flex-col gap-2 px-3 pb-4">
                            {section.items.map((item, itemIdx) => {
                              const Icon = item.icon
                              return (
                                <motion.div
                                  key={item.name}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: itemIdx * 0.05 }}
                                >
                                  <Link
                                    href={`/${locale}${item.href}`}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="flex items-center gap-4 rounded-xl border border-transparent p-3 transition-colors outline-none hover:bg-white/[0.06] focus-visible:bg-white/[0.08]"
                                  >
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.05] text-white/80">
                                      <Icon size={20} />
                                    </div>
                                    <div className="flex-1">
                                      <div className="mb-0.5 text-[15px] font-semibold text-white">
                                        {item.name}
                                      </div>
                                      <div className="line-clamp-1 text-xs text-white/50">
                                        {item.description}
                                      </div>
                                    </div>
                                  </Link>
                                </motion.div>
                              )
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Mobile Bottom CTA Area */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="pointer-events-none absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-black/90 to-transparent p-6 pt-12"
            >
              <div className="pointer-events-auto mx-auto max-w-sm">
                <Link
                  href={
                    locale === 'de' ? `/${locale}/kontakt-solutionplus` : `/${locale}/contact-us`
                  }
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex h-14 w-full items-center justify-center gap-2 rounded-full bg-white text-base font-semibold tracking-wide text-black shadow-[0_0_30px_rgba(255,255,255,0.15)] transition-all outline-none hover:bg-white/90 active:scale-95"
                >
                  {locale === 'de' ? 'Kostenlose Beratung anfragen' : 'Request a Free Consultation'}
                  <ArrowRight size={18} />
                </Link>
                <div className="mt-4 flex items-center justify-center gap-2 text-xs font-medium text-white/40">
                  <ShieldCheck size={14} className="text-white/30" />
                  <span>
                    {locale === 'de'
                      ? 'Enterprise-Grade Qualität'
                      : 'Enterprise-grade quality & security'}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
