'use client'

import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import type { ComponentType } from 'react'
import {
  ArrowRight,
  Briefcase,
  ChevronDown,
  Globe,
  Menu,
  RefreshCw,
  Rocket,
  Target,
  TrendingUp,
  Users,
  X,
  Zap,
  BookOpen,
  Cpu,
  PenTool,
  Code,
  Smartphone,
  ChevronRight,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { caseStudies } from '@/data/case-studies'

interface NavChild {
  name: string
  description?: string
  href: string
}

interface NavItem {
  name: string
  description: string
  href: string
  icon: ComponentType<{ size?: number; className?: string }>
  badge?: string
  children?: NavChild[]
}

interface NavSection {
  name: string
  items: NavItem[]
}

const NAV_DATA_EN: NavSection[] = [
  {
    name: 'What We Do',
    items: [
      {
        name: 'Product Modernization',
        description: 'Upgrade legacy platforms without losing stability.',
        href: '/product-modernization',
        icon: RefreshCw,
      },
      {
        name: 'MVP Sprint Package',
        description: 'Validate faster and go to market with confidence.',
        href: '/mvp-sprint-package',
        icon: Rocket,
      },
      {
        name: 'Dedicated Teams',
        description: 'Scale delivery with managed remote engineering teams.',
        href: '/dedicated-delivery-teams',
        icon: Users,
      },
    ],
  },
  {
    name: 'Services',
    items: [
      {
        name: 'AI Automation',
        description: 'Automate workflows and optimize processes.',
        href: '/ai-automation',
        icon: Cpu,
      },
      {
        name: 'UI/UX Design',
        description: 'Intuitive, accessible, and user-centered design.',
        href: '/ui-ux-design',
        icon: PenTool,
      },
      {
        name: 'Web App Development',
        description: 'Scalable platforms built with modern stacks.',
        href: '/web-app-development',
        icon: Code,
      },
      {
        name: 'Mobile App Development',
        description: 'Cross-platform and native mobile solutions.',
        href: '/mobile-app-development',
        icon: Smartphone,
      },
    ],
  },
  {
    name: 'Who We Serve',
    items: [
      {
        name: 'Entrepreneur with an Idea',
        description: 'Turn your product idea into a scalable business asset.',
        href: '/entrepreneur-with-an-idea',
        icon: Briefcase,
      },
      {
        name: 'Startups',
        description: 'Agile execution for early-stage product teams.',
        href: '/startup',
        icon: Target,
      },
      {
        name: 'Scale-ups',
        description: 'Increase speed and capacity while maintaining quality.',
        href: '/scale-up',
        icon: TrendingUp,
      },
    ],
  },
  {
    name: 'Who We Are',
    items: [
      {
        name: 'About SolutionPlus',
        description: 'German leadership with elite Pakistani engineering talent.',
        href: '/about-team',
        icon: Globe,
      },
      {
        name: 'Case Studies',
        description: 'Explore how we helped clients from idea to production.',
        href: '/case-studies',
        icon: BookOpen,
        badge: 'New',
        children: [
          { name: 'All Case Studies', href: '/case-studies' },
          ...caseStudies.en.map((cs) => ({
            name: cs.clientName,
            description: cs.tagline,
            href: `/case-studies/${cs.slug}`,
          })),
        ],
      },
      {
        name: 'Careers at SolutionPlus',
        description: 'Join a team that builds business-critical products.',
        href: '/careers',
        icon: Zap,
      },
    ],
  },
]

const NAV_DATA_DE: NavSection[] = [
  {
    name: 'Was wir tun',
    items: [
      {
        name: 'Software Modernisierung',
        description: 'Bestehende Plattformen stabil modernisieren.',
        href: '/software-modernisierung',
        icon: RefreshCw,
      },
      {
        name: 'MVP Sprint Paket',
        description: 'Schnell validieren und sicher in den Markt starten.',
        href: '/mvp-sprint-paket',
        icon: Rocket,
      },
      {
        name: 'Dedizierte Teams',
        description: 'Ihre Delivery mit unseren Remote-Teams skalieren.',
        href: '/dedizierte-teams',
        icon: Users,
      },
    ],
  },
  {
    name: 'Services',
    items: [
      {
        name: 'KI-Automatisierung',
        description: 'Workflows automatisieren und Prozesse optimieren.',
        href: '/ki-automatisierung',
        icon: Cpu,
      },
      {
        name: 'UI/UX Design',
        description: 'Intuitives, barrierefreies und nutzerzentriertes Design.',
        href: '/ui-ux-design',
        icon: PenTool,
      },
      {
        name: 'Web-Entwicklung',
        description: 'Skalierbare Plattformen mit modernen Stacks.',
        href: '/web-entwicklung',
        icon: Code,
      },
      {
        name: 'Mobile App-Entwicklung',
        description: 'Plattformübergreifende und native mobile Lösungen.',
        href: '/mobile-app-entwicklung',
        icon: Smartphone,
      },
    ],
  },
  {
    name: 'Für Wen',
    items: [
      {
        name: 'Gründer mit Idee',
        description: 'Von der Idee zum skalierbaren digitalen Produkt.',
        href: '/gruender-idee-startup-partner',
        icon: Briefcase,
      },
      {
        name: 'Startups',
        description: 'Agile Produktentwicklung für junge Unternehmen.',
        href: '/startups',
        icon: Target,
      },
      {
        name: 'Scale-ups',
        description: 'Mehr Delivery-Speed bei konstanter Qualität.',
        href: '/scaleups',
        icon: TrendingUp,
      },
    ],
  },
  {
    name: 'Wer wir sind',
    items: [
      {
        name: 'Über SolutionPlus',
        description: 'Deutsche Führung mit pakistanischen Top-Ingenieuren.',
        href: '/ueber-solutionplus',
        icon: Globe,
      },
      {
        name: 'Fallstudien',
        description: 'Wie wir Kunden von der Idee bis zur Produktion begleitet haben.',
        href: '/fallstudien',
        icon: BookOpen,
        badge: 'Neu',
        children: [
          { name: 'Alle Fallstudien', href: '/fallstudien' },
          ...caseStudies.de.map((cs) => ({
            name: cs.clientName,
            description: cs.tagline,
            href: `/fallstudien/${cs.slug}`,
          })),
        ],
      },
      {
        name: 'Karriere bei SolutionPlus',
        description: 'Werden Sie Teil unseres High-Performance-Teams.',
        href: '/karriere',
        icon: Zap,
      },
    ],
  },
]

export function Header({ locale }: { locale: string }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [desktopOpen, setDesktopOpen] = useState<string | null>(null)
  const [hoveredSubmenu, setHoveredSubmenu] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)

  const navData = locale === 'de' ? NAV_DATA_DE : NAV_DATA_EN
  const contactHref = locale === 'de' ? `/${locale}/kontakt-solutionplus` : `/${locale}/contact-us`

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24)
    const onResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false)
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : 'unset'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileOpen])

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-8 lg:px-10">
      <div
        className={cn(
          'mx-auto w-full max-w-7xl rounded-2xl border transition-all duration-300',
          isScrolled
            ? 'bg-sp-bg-dark/90 border-white/10 shadow-[0_18px_40px_-20px_rgba(0,0,0,0.9)] backdrop-blur-xl'
            : 'bg-sp-bg-dark/70 border-white/5 backdrop-blur-lg'
        )}
      >
        <div
          className={cn(
            'flex items-center justify-between gap-3 px-4 transition-all md:px-6 lg:px-8',
            isScrolled ? 'h-16' : 'h-20'
          )}
        >
          <Link
            href={`/${locale}`}
            className="group flex items-center gap-3 rounded-xl p-1.5 transition-colors outline-none hover:bg-white/5 focus-visible:ring-2 focus-visible:ring-white/40"
          >
            <Image
              src="/logo.png"
              alt="SolutionPlus"
              width={170}
              height={56}
              className="h-8 w-auto object-contain brightness-0 invert transition duration-300 group-hover:opacity-100 md:h-9"
              priority
            />
            <span className="hidden text-xs font-medium tracking-[0.16em] text-white/55 uppercase xl:inline-block">
              {locale === 'de' ? 'Engineering Partner' : 'Product Engineering'}
            </span>
          </Link>

          <nav
            className="relative hidden items-center gap-1 lg:flex"
            onMouseLeave={() => setDesktopOpen(null)}
          >
            {navData.map((section) => (
              <div
                key={section.name}
                className="relative"
                onMouseEnter={() => setDesktopOpen(section.name)}
              >
                <button
                  type="button"
                  className={cn(
                    'flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold tracking-wide transition-colors outline-none',
                    desktopOpen === section.name
                      ? 'text-sp-accent bg-white/10'
                      : 'text-white/80 hover:bg-white/5 hover:text-white'
                  )}
                  aria-haspopup="true"
                  aria-expanded={desktopOpen === section.name}
                >
                  {section.name}
                  <ChevronDown
                    size={16}
                    className={cn(
                      'transition-transform duration-200',
                      desktopOpen === section.name && 'rotate-180'
                    )}
                  />
                </button>

                <AnimatePresence>
                  {desktopOpen === section.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.98 }}
                      transition={{ duration: 0.18, ease: 'easeOut' }}
                      className="bg-sp-bg-dark/95 absolute top-[calc(100%+10px)] left-1/2 z-50 w-[560px] -translate-x-1/2 rounded-2xl border border-white/10 p-3 shadow-[0_24px_65px_-28px_rgba(0,0,0,0.95)] backdrop-blur-xl"
                    >
                      <div className="grid grid-cols-2 gap-2">
                        {section.items.map((item) => {
                          const Icon = item.icon
                          return (
                            <div
                              key={item.name}
                              className="group/item flex flex-col gap-1"
                              onMouseEnter={() => setHoveredSubmenu(item.name)}
                              onMouseLeave={() => setHoveredSubmenu(null)}
                            >
                              <Link
                                href={`/${locale}${item.href}`}
                                className="group h-full rounded-xl border border-transparent bg-white/2 p-3 transition-all outline-none hover:border-white/10 hover:bg-white/5 focus-visible:border-white/20"
                                onClick={() => setDesktopOpen(null)}
                              >
                                <div className="mb-2.5 flex items-center gap-2.5">
                                  <div className="group-hover:text-sp-accent group-hover:border-sp-accent/30 flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/85">
                                    <Icon size={15} />
                                  </div>
                                  <span className="flex items-center gap-2 text-sm font-semibold text-white/90 transition-colors group-hover:text-white">
                                    {item.name}
                                    {item.badge && (
                                      <span className="bg-sp-accent/20 text-sp-accent rounded-full px-2 py-0.5 text-[10px] font-bold tracking-wider uppercase">
                                        {item.badge}
                                      </span>
                                    )}
                                  </span>
                                </div>
                                <p className="text-xs leading-relaxed text-white/55 group-hover:text-white/70">
                                  {item.description}
                                </p>
                              </Link>

                              {item.children && (
                                <div
                                  className={cn(
                                    'grid transition-all duration-300 ease-in-out',
                                    hoveredSubmenu === item.name
                                      ? 'grid-rows-[1fr] opacity-100'
                                      : 'grid-rows-[0fr] opacity-0'
                                  )}
                                >
                                  <div className="overflow-hidden">
                                    <div className="mt-1 ml-4 flex flex-col gap-1 border-l border-white/10 pl-3">
                                      {item.children.slice(1).map((child) => (
                                        <Link
                                          key={child.name}
                                          href={`/${locale}${child.href}`}
                                          className="hover:text-sp-accent group/child flex items-center justify-between py-1.5 text-xs text-white/60 transition-colors"
                                          onClick={() => setDesktopOpen(null)}
                                        >
                                          <span className="truncate pr-2">{child.name}</span>
                                          <ChevronRight
                                            size={12}
                                            className="text-sp-accent -translate-x-2 opacity-0 transition-all group-hover/child:translate-x-0 group-hover/child:opacity-100"
                                          />
                                        </Link>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          )
                        })}
                      </div>
                      {section.name === 'Services' && (
                        <div className="mt-2 border-t border-white/10 pt-2">
                          <Link
                            href={`/${locale}/${locale === 'de' ? 'leistungen' : 'services'}`}
                            className="group hover:text-sp-accent flex w-full items-center justify-between rounded-xl bg-white/5 p-3 text-sm font-semibold text-white/90 transition-all outline-none hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white/40"
                            onClick={() => setDesktopOpen(null)}
                          >
                            {locale === 'de' ? 'Alle Leistungen ansehen' : 'View All Services'}
                            <ArrowRight
                              size={16}
                              className="text-sp-accent transition-transform group-hover:translate-x-1"
                            />
                          </Link>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href={contactHref}
              className="group border-sp-accent bg-sp-accent hover:bg-sp-accent-dark hover:border-sp-accent-dark hover:shadow-sp-accent/20 flex items-center gap-2 rounded-full border px-6 py-2.5 text-sm font-semibold tracking-wide text-white shadow-sm transition-colors outline-none"
            >
              {locale === 'de' ? 'Kontaktieren Sie uns' : 'Get in touch'}
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white/40 lg:hidden"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-[2px] lg:hidden"
              onClick={() => setMobileOpen(false)}
              aria-label="Close mobile menu backdrop"
            />
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              className="bg-sp-bg-dark/98 relative z-50 mt-3 overflow-hidden rounded-2xl border border-white/10 px-4 pt-3 pb-5 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.95)] backdrop-blur-xl lg:hidden"
            >
              <div className="no-scrollbar max-h-[72vh] overflow-y-auto pr-1">
                <div className="space-y-2">
                  {navData.map((section) => (
                    <div key={section.name} className="rounded-xl border border-white/5 bg-white/5">
                      <button
                        type="button"
                        className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-semibold text-white/90"
                        onClick={() =>
                          setMobileExpanded((prev) => (prev === section.name ? null : section.name))
                        }
                        aria-expanded={mobileExpanded === section.name}
                      >
                        <span className={mobileExpanded === section.name ? 'text-sp-accent' : ''}>
                          {section.name}
                        </span>
                        <ChevronDown
                          size={16}
                          className={cn(
                            'text-white/60 transition-transform duration-200',
                            mobileExpanded === section.name && 'text-sp-accent rotate-180'
                          )}
                        />
                      </button>

                      <AnimatePresence initial={false}>
                        {mobileExpanded === section.name && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className="space-y-1.5 px-2 pb-2">
                              {section.items.map((item) => {
                                const Icon = item.icon
                                return (
                                  <div key={item.name} className="flex flex-col">
                                    <div className="flex items-center">
                                      <Link
                                        href={`/${locale}${item.href}`}
                                        className="flex flex-1 items-start gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-white/10"
                                        onClick={() => setMobileOpen(false)}
                                      >
                                        <div className="text-sp-accent/80 mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-white/10 bg-white/5">
                                          <Icon size={14} />
                                        </div>
                                        <div>
                                          <p className="flex items-center gap-2 text-sm font-semibold text-white/90">
                                            {item.name}
                                            {item.badge && (
                                              <span className="bg-sp-accent/20 text-sp-accent rounded-full px-1.5 py-0.5 text-[9px] font-bold tracking-wider uppercase">
                                                {item.badge}
                                              </span>
                                            )}
                                          </p>
                                          <p className="text-xs leading-relaxed text-white/55">
                                            {item.description}
                                          </p>
                                        </div>
                                      </Link>
                                      {item.children && (
                                        <button
                                          type="button"
                                          className="ml-2 rounded-lg p-2 text-white/60 hover:bg-white/10 hover:text-white"
                                          onClick={(e) => {
                                            e.preventDefault()
                                            e.stopPropagation()
                                            // Find the next sibling of the parent container
                                            const el = e.currentTarget.parentElement
                                              ?.nextElementSibling as HTMLElement
                                            if (el) {
                                              const isHidden =
                                                el.style.display === 'none' || !el.style.display
                                              el.style.display = isHidden ? 'flex' : 'none'
                                              e.currentTarget.style.transform = isHidden
                                                ? 'rotate(180deg)'
                                                : 'rotate(0deg)'
                                            }
                                          }}
                                          style={{ transition: 'transform 0.2s' }}
                                        >
                                          <ChevronDown size={16} />
                                        </button>
                                      )}
                                    </div>

                                    {item.children && (
                                      <div
                                        className="mt-1 mb-2 ml-11 flex-col gap-1 border-l border-white/10 pl-3"
                                        style={{ display: 'none' }}
                                      >
                                        {item.children.slice(1).map((child) => (
                                          <Link
                                            key={child.name}
                                            href={`/${locale}${child.href}`}
                                            className="py-1.5 text-xs text-white/60 transition-colors hover:text-white"
                                            onClick={() => setMobileOpen(false)}
                                          >
                                            {child.name}
                                          </Link>
                                        ))}
                                      </div>
                                    )}
                                  </div>
                                )
                              })}
                              {section.name === 'Services' && (
                                <Link
                                  href={`/${locale}/${locale === 'de' ? 'leistungen' : 'services'}`}
                                  className="mt-2 flex w-full items-center justify-between rounded-lg bg-white/5 px-4 py-3 text-sm font-semibold text-white/90 transition-colors hover:bg-white/10"
                                  onClick={() => setMobileOpen(false)}
                                >
                                  {locale === 'de'
                                    ? 'Alle Leistungen ansehen'
                                    : 'View All Services'}
                                  <ArrowRight size={16} className="text-sp-accent" />
                                </Link>
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href={contactHref}
                className="border-sp-accent bg-sp-accent hover:bg-sp-accent-dark mt-4 flex h-12 w-full items-center justify-center gap-2 rounded-full border text-sm font-semibold tracking-wide text-white transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {locale === 'de' ? 'Kontaktieren Sie uns' : 'Get in touch'}
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
