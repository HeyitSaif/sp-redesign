'use client'

import { useActionState, useEffect, useState } from 'react'
import { Reveal } from '@/components/animations/Reveal'
import { ArrowRight, Mail, MapPin, Phone, Loader2, CheckCircle2 } from 'lucide-react'
import { submitContactForm } from '@/app/actions/contact'
import { motion, AnimatePresence } from 'framer-motion'
import { FloatiesBackground } from '@/components/ui/FloatiesBackground'
import Link from 'next/link'
import { supportData } from '@/data/support-content'
import { ImageWithShimmer } from '@/components/ui/ImageWithShimmer'

const initialState = {
  success: false,
  message: '',
  error: '',
}

export function ContactPage({ locale }: { locale: string }) {
  const isDe = locale === 'de'
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState)
  const [showSuccess, setShowSuccess] = useState(false)

  useEffect(() => {
    if (state?.success) {
      const showTimer = setTimeout(() => setShowSuccess(true), 0)
      const hideTimer = setTimeout(() => setShowSuccess(false), 5000)
      return () => {
        clearTimeout(showTimer)
        clearTimeout(hideTimer)
      }
    }
  }, [state?.success])

  return (
    <div className="relative flex w-full flex-col overflow-x-clip pt-24 pb-16 md:pt-32 md:pb-24">
      <FloatiesBackground />
      <section className="relative flex min-h-[50vh] items-center overflow-x-clip py-12 md:py-16 lg:py-20">
        <div className="bg-sp-accent/10 pointer-events-none absolute top-0 right-0 h-[600px] w-[600px] rounded-full blur-[150px]" />
        <div className="bg-sp-accent/10 pointer-events-none absolute bottom-0 left-0 h-[600px] w-[600px] rounded-full blur-[150px]" />

        <div className="relative z-10 container mx-auto grid items-start gap-10 px-5 md:gap-16 md:px-8 lg:grid-cols-2 lg:px-12">
          <div>
            <Reveal>
              <h1 className="mb-8 text-3xl leading-[1.1] font-bold tracking-tight md:text-3xl md:text-4xl md:text-5xl md:text-6xl lg:text-7xl">
                {isDe ? 'Starten Sie das Gespräch,' : 'Start the conversation'}{' '}
                <span className="text-sp-accent bg-clip-text">
                  {isDe ? 'das Ihr Unternehmen voranbringt.' : 'that moves your business forward'}
                </span>
              </h1>

              <div className="mb-6 flex flex-wrap gap-4">
                <span className="inline-flex items-center rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold tracking-wide text-emerald-400 uppercase">
                  {supportData[isDe ? 'de' : 'en'].contact.responseTime}
                </span>
              </div>

              <p className="text-foreground/70 mb-8 max-w-xl text-xl leading-relaxed md:mb-12">
                {isDe
                  ? 'Erzählen Sie uns, was Sie bauen. Bringen Sie uns Ihre Idee oder Ihre nächste Herausforderung, und wir helfen Ihnen, mit Zuversicht voranzukommen.'
                  : "Tell us what you're building. Bring us your idea or your next challenge, and we'll help you move forward with confidence."}
              </p>

              <div className="mt-10 space-y-8 md:mt-16">
                {[
                  {
                    icon: Mail,
                    title: 'Email',
                    content: 'sales@solutionplus.io',
                    href: 'mailto:sales@solutionplus.io',
                  },
                  {
                    icon: MapPin,
                    title: isDe ? 'Standorte' : 'Locations',
                    content: isDe
                      ? `Berlin: Kollwitzstraße 76, 10435 Berlin, Deutschland\nSharjah: Business Centre, Sharjah Publishing City Free Zone, Sharjah, UAE\nPakistan`
                      : `Berlin: Kollwitzstraße 76, 10435 Berlin, Germany\nSharjah: Business Centre, Sharjah Publishing City Free Zone, Sharjah, UAE\nPakistan`,
                    subtext: supportData[isDe ? 'de' : 'en'].contact.officeHours,
                    href: null,
                  },
                  {
                    icon: Phone,
                    title: isDe ? 'Telefon' : 'Phone',
                    content: isDe ? '+49 176 47658461' : '+971 58 881 8005',
                    href: isDe ? 'tel:+4917647658461' : 'tel:+971588818005',
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ x: 10 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="group flex items-start gap-5"
                  >
                    <div className="text-sp-accent group-hover:bg-sp-accent/20 group-hover:border-sp-accent/40 border-sp-border-dark bg-sp-surface-subtle flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl border shadow-lg transition-all duration-300 group-hover:text-white group-hover:shadow-[0_0_20px_var(--sp-accent-dark)]">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h3 className="group-hover:text-sp-accent mb-1 text-lg font-bold text-white transition-colors">
                        {item.title}
                      </h3>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-foreground/70 text-lg whitespace-pre-line transition-colors hover:text-white"
                        >
                          {item.content}
                        </a>
                      ) : (
                        <div className="flex flex-col gap-1">
                          <p className="text-foreground/70 text-lg leading-relaxed whitespace-pre-line">
                            {item.content}
                          </p>
                          {item.subtext && (
                            <p className="text-foreground/50 text-sm italic">{item.subtext}</p>
                          )}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* What to expect */}
              <div className="border-sp-border-dark mt-10 border-t pt-8 md:mt-16">
                <h3 className="mb-6 font-semibold text-white">
                  {isDe ? 'Was Sie erwartet' : 'What to expect'}
                </h3>
                <ul className="space-y-4">
                  {supportData[isDe ? 'de' : 'en'].contact.whatToExpect.map((bullet, i) => (
                    <li key={i} className="text-foreground/70 flex items-center gap-3">
                      <CheckCircle2 size={18} className="text-sp-accent" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-foreground/50 mt-8 text-sm">
                  {isDe
                    ? 'Möchten Sie sich zuerst informieren? Sehen Sie sich unsere '
                    : 'Prefer to learn first? See our '}
                  <Link
                    href={`/${locale}/${isDe ? 'fallstudien' : 'case-studies'}`}
                    className="text-sp-accent hover:underline"
                  >
                    {isDe ? 'Fallstudien' : 'Case Studies'}
                  </Link>{' '}
                  {isDe ? 'oder den' : 'or the'}{' '}
                  <Link
                    href={`/${locale}/${isDe ? 'mvp-sprint-paket' : 'mvp-sprint-package'}`}
                    className="text-sp-accent hover:underline"
                  >
                    MVP Sprint
                  </Link>
                  .
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal direction="left" delay={0.2}>
            <div className="group bg-sp-surface-elevated border-sp-border-dark hover:border-sp-accent/40 relative overflow-hidden overflow-x-clip rounded-2xl border p-5 shadow-2xl transition-all duration-500 md:p-5 md:p-8 md:p-12">
              <div className="from-sp-accent/5 to-sp-accent/5 absolute inset-0 bg-gradient-to-tr via-transparent opacity-50 transition-opacity duration-500 group-hover:opacity-100" />

              <AnimatePresence>
                {showSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="absolute top-0 right-0 left-0 z-50 flex items-center gap-3 rounded-t-[2rem] border-b border-emerald-600 bg-emerald-900 p-4 text-emerald-100"
                  >
                    <CheckCircle2 size={20} />
                    <span className="font-medium">{state?.message || 'Success!'}</span>
                  </motion.div>
                )}
                {state?.error && !isPending && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="absolute top-0 right-0 left-0 z-50 flex items-center gap-3 rounded-t-[2rem] border-b border-red-600 bg-red-900 p-4 text-red-100"
                  >
                    <span className="font-medium">{state?.error}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              <form action={formAction} className="relative z-10 mt-4 space-y-8">
                <input type="hidden" name="locale" value={locale} />
                <div className="grid gap-5 md:grid-cols-2 md:gap-6">
                  <div className="group/input relative space-y-3">
                    <label className="text-sp-text-muted group-focus-within/input:text-sp-accent text-sm font-medium transition-colors">
                      {isDe ? 'Name*' : 'Name*'}
                    </label>
                    <input
                      type="text"
                      name="name"
                      className="focus:border-sp-accent/50 focus:ring-sp-accent/10 border-sp-border-dark bg-sp-surface-subtle focus:bg-sp-surface-hover w-full rounded-xl border px-5 py-4 text-white shadow-inner transition-all outline-none focus:ring-4"
                      required
                    />
                  </div>
                  <div className="group/input relative space-y-3">
                    <label className="text-sp-text-muted group-focus-within/input:text-sp-accent text-sm font-medium transition-colors">
                      {isDe ? 'Email*' : 'Email*'}
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="focus:border-sp-accent/50 focus:ring-sp-accent/10 border-sp-border-dark bg-sp-surface-subtle focus:bg-sp-surface-hover w-full rounded-xl border px-5 py-4 text-white shadow-inner transition-all outline-none focus:ring-4"
                      required
                    />
                  </div>
                </div>

                <div className="group/input relative space-y-3">
                  <label className="text-sp-text-muted group-focus-within/input:text-sp-accent text-sm font-medium transition-colors">
                    {isDe ? 'Betreff' : 'Subject'}
                  </label>
                  <input
                    type="text"
                    name="subject"
                    className="focus:border-sp-accent/50 focus:ring-sp-accent/10 border-sp-border-dark bg-sp-surface-subtle focus:bg-sp-surface-hover w-full rounded-xl border px-5 py-4 text-white shadow-inner transition-all outline-none focus:ring-4"
                  />
                </div>

                <div className="group/input relative space-y-3">
                  <label className="text-sp-text-muted group-focus-within/input:text-sp-accent text-sm font-medium transition-colors">
                    {isDe
                      ? 'Welches Problem möchten Sie lösen? (Optional)'
                      : 'What challenge are you looking to solve? (Optional)'}
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    className="focus:border-sp-accent/50 focus:ring-sp-accent/10 border-sp-border-dark bg-sp-surface-subtle focus:bg-sp-surface-hover w-full resize-none rounded-xl border px-5 py-4 text-white shadow-inner transition-all outline-none focus:ring-4"
                  />
                </div>

                <div className="space-y-4 pt-4">
                  <label className="group/check flex cursor-pointer items-center gap-4">
                    <div className="relative flex items-center justify-center">
                      <input
                        type="checkbox"
                        name="marketing"
                        className="peer checked:bg-sp-accent checked:border-sp-accent group-hover/check:border-sp-accent/50 border-sp-border-dark bg-sp-surface-subtle h-6 w-6 cursor-pointer appearance-none rounded-lg border shadow-inner transition-all duration-300"
                      />
                      <div className="pointer-events-none absolute scale-50 text-white opacity-0 transition-opacity duration-300 peer-checked:scale-100 peer-checked:opacity-100">
                        <svg
                          width="14"
                          height="10"
                          viewBox="0 0 12 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4.00001 7.8L1.20001 5L0.266678 5.93333L4.00001 9.66667L12 1.66667L11.0667 0.733337L4.00001 7.8Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                    </div>
                    <span className="text-sp-text-muted text-[15px] transition-colors group-hover/check:text-white">
                      {isDe ? 'Marketing E-Mails' : 'Marketing Emails'}
                    </span>
                  </label>

                  <label className="group/check flex cursor-pointer items-center gap-4">
                    <div className="relative flex items-center justify-center">
                      <input
                        type="checkbox"
                        name="news"
                        className="peer checked:bg-sp-accent checked:border-sp-accent group-hover/check:border-sp-accent/50 border-sp-border-dark bg-sp-surface-subtle h-6 w-6 cursor-pointer appearance-none rounded-lg border shadow-inner transition-all duration-300"
                      />
                      <div className="pointer-events-none absolute scale-50 text-white opacity-0 transition-opacity duration-300 peer-checked:scale-100 peer-checked:opacity-100">
                        <svg
                          width="14"
                          height="10"
                          viewBox="0 0 12 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4.00001 7.8L1.20001 5L0.266678 5.93333L4.00001 9.66667L12 1.66667L11.0667 0.733337L4.00001 7.8Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                    </div>
                    <span className="text-sp-text-muted text-[15px] transition-colors group-hover/check:text-white">
                      {isDe ? 'Neuigkeiten & Updates' : 'News & Updates Emails'}
                    </span>
                  </label>
                </div>

                <motion.button
                  type="submit"
                  disabled={isPending}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-sp-accent hover:bg-sp-accent-dark group relative mt-8 flex w-full items-center justify-center gap-3 overflow-x-clip rounded-xl px-8 py-5 text-lg font-bold text-white shadow-[0_0_20px_var(--sp-accent-dark)] transition-all hover:shadow-[0_0_40px_var(--sp-accent-dark)]"
                >
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
                  {isPending ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />{' '}
                      {isDe ? 'Wird gesendet...' : 'Sending...'}
                    </>
                  ) : (
                    <>
                      {isDe ? 'Nachricht Senden' : 'Send Message'}{' '}
                      <ArrowRight
                        size={20}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </Reveal>
        </div>
      </section>
      {/* Who is it for */}
      <section className="bg-sp-bg-dark border-sp-border-dark relative mt-20 border-t py-12 md:py-16 lg:py-24">
        <div className="container mx-auto px-5 text-center md:px-12">
          <Reveal>
            <h2 className="mb-10 text-3xl font-bold md:mb-16 md:text-3xl md:text-4xl md:text-5xl">
              {isDe ? 'Für wen ist das?' : 'Who is it for'}
            </h2>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-3 md:gap-8">
            {[
              {
                title: isDe ? 'Scale-ups' : 'Scale-ups',
                desc: isDe ? 'Innovationsteams in Unternehmen' : 'Innovation teams in corporates',
                link: 'scale-up',
                img: '/images/Scale-ups-1.png',
              },
              {
                title: isDe ? 'Start-ups' : 'Start-ups',
                desc: isDe
                  ? 'Gründer in Pre-Seed- bis Series-A-Phasen'
                  : 'Founders in pre-Seed to Series A stages',
                link: 'startup',
                img: '/images/Start-ups-1.png',
              },
              {
                title: isDe ? 'Gründer mit Idee' : 'Entrepreneur with an Idea',
                desc: isDe ? 'Die einen Tech-Partner brauchen' : 'who need a tech partner',
                link: 'entrepreneur-with-an-idea',
                img: '/images/Entrepreneur-with-an-Idea-1.png',
              },
            ].map((persona, i) => (
              <Reveal key={i} delay={0.1 * i} direction="up">
                <div className="hover:border-sp-accent/40 bg-sp-bg-medium flex h-full flex-col items-center overflow-hidden rounded-2xl border border-black/5 p-5 text-center transition-all duration-300 md:p-8">
                  <div className="mb-6 h-24 w-24">
                    <ImageWithShimmer
                      src={persona.img}
                      alt={persona.title}
                      wrapperClassName="h-full w-full"
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-sp-text-dark mb-4 text-2xl font-bold">{persona.title}</h3>
                  <p className="text-sp-text-on-light mb-8 flex-grow">{persona.desc}</p>
                  <Link
                    href={`/${locale}/${isDe ? (persona.link === 'scale-up' ? 'scaleups' : persona.link === 'startup' ? 'startups' : 'gruender-idee-startup-partner') : persona.link}`}
                    className="text-sp-accent mt-auto flex items-center gap-2 font-medium transition-colors hover:text-white"
                  >
                    {isDe ? 'Mehr erfahren' : 'Learn more'} <ArrowRight size={16} />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
