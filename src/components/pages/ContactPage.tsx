'use client'

import { useActionState, useEffect, useState } from 'react'
import { Reveal } from '@/components/animations/Reveal'
import { ArrowRight, Mail, MapPin, Phone, Loader2, CheckCircle2 } from 'lucide-react'
import { submitContactForm } from '@/app/actions/contact'
import { motion, AnimatePresence } from 'framer-motion'
import { FloatiesBackground } from '@/components/ui/FloatiesBackground'
import Link from 'next/link'
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
    <div className="relative flex w-full flex-col overflow-x-hidden pt-32 pb-24">
      <FloatiesBackground />
      <section className="relative flex min-h-[50vh] items-center overflow-x-hidden py-20">
        <div className="bg-sp-accent/10 pointer-events-none absolute top-0 right-0 h-[600px] w-[600px] rounded-full blur-[150px]" />
        <div className="bg-sp-accent/10 pointer-events-none absolute bottom-0 left-0 h-[600px] w-[600px] rounded-full blur-[150px]" />

        <div className="relative z-10 container mx-auto grid items-start gap-16 px-6 md:px-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <h1 className="mb-8 text-4xl leading-[1.1] font-bold tracking-tight md:text-6xl lg:text-7xl">
                {isDe ? 'Starten Sie das Gespräch,' : 'Start the conversation'}{' '}
                <span className="text-sp-accent bg-clip-text">
                  {isDe ? 'das Ihr Unternehmen voranbringt.' : 'that moves your business forward'}
                </span>
              </h1>
              <p className="text-foreground/70 mb-12 max-w-xl text-xl leading-relaxed">
                {isDe
                  ? 'Erzählen Sie uns, was Sie bauen. Bringen Sie uns Ihre Idee oder Ihre nächste Herausforderung, und wir helfen Ihnen, mit Zuversicht voranzukommen.'
                  : "Tell us what you're building. Bring us your idea or your next challenge, and we'll help you move forward with confidence."}
              </p>

              <div className="mt-16 space-y-8">
                {[
                  {
                    icon: Mail,
                    title: 'Email',
                    content: 'hello@solutionplus.io',
                    href: 'mailto:hello@solutionplus.io',
                  },
                  {
                    icon: MapPin,
                    title: isDe ? 'Standorte' : 'Locations',
                    content: `Berlin, ${isDe ? 'Deutschland' : 'Germany'}\nLahore, Pakistan`,
                    href: null,
                  },
                  {
                    icon: Phone,
                    title: isDe ? 'Telefon' : 'Phone',
                    content: '+49 123 456 789',
                    href: 'tel:+49123456789',
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ x: 10 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="group flex items-start gap-5"
                  >
                    <div className="text-sp-accent group-hover:bg-sp-accent/20 group-hover:border-sp-accent/50 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 shadow-lg transition-all duration-300 group-hover:text-white group-hover:shadow-[0_0_20px_var(--sp-accent-dark)]">
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
                        <p className="text-foreground/70 text-lg leading-relaxed whitespace-pre-line">
                          {item.content}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal direction="left" delay={0.2}>
            <div className="group bg-[#181a1c]/80 relative overflow-x-hidden rounded-[2rem] border border-white/10 p-8 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:border-white/20 md:p-12">
              <div className="from-sp-accent/5 to-sp-accent/5 absolute inset-0 bg-gradient-to-tr via-transparent opacity-50 transition-opacity duration-500 group-hover:opacity-100" />

              <AnimatePresence>
                {showSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="absolute top-0 right-0 left-0 z-50 flex items-center gap-3 rounded-t-[2rem] border-b border-emerald-500/50 bg-emerald-500/20 p-4 text-emerald-300 backdrop-blur-md"
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
                    className="absolute top-0 right-0 left-0 z-50 flex items-center gap-3 rounded-t-[2rem] border-b border-red-500/50 bg-red-500/20 p-4 text-red-300 backdrop-blur-md"
                  >
                    <span className="font-medium">{state?.error}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              <form action={formAction} className="relative z-10 mt-4 space-y-8">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="group/input relative space-y-3">
                    <label className="text-foreground/80 group-focus-within/input:text-sp-accent text-sm font-medium transition-colors">
                      {isDe ? 'Name*' : 'Name*'}
                    </label>
                    <input
                      type="text"
                      name="name"
                      className="focus:border-sp-accent/50 focus:ring-sp-accent/10 w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white shadow-inner transition-all outline-none focus:bg-white/10 focus:ring-4"
                      required
                    />
                  </div>
                  <div className="group/input relative space-y-3">
                    <label className="text-foreground/80 group-focus-within/input:text-sp-accent text-sm font-medium transition-colors">
                      {isDe ? 'Email*' : 'Email*'}
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="focus:border-sp-accent/50 focus:ring-sp-accent/10 w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white shadow-inner transition-all outline-none focus:bg-white/10 focus:ring-4"
                      required
                    />
                  </div>
                </div>

                <div className="group/input relative space-y-3">
                  <label className="text-foreground/80 group-focus-within/input:text-sp-accent text-sm font-medium transition-colors">
                    {isDe ? 'Betreff' : 'Subject'}
                  </label>
                  <input
                    type="text"
                    name="subject"
                    className="focus:border-sp-accent/50 focus:ring-sp-accent/10 w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white shadow-inner transition-all outline-none focus:bg-white/10 focus:ring-4"
                  />
                </div>

                <div className="group/input relative space-y-3">
                  <label className="text-foreground/80 group-focus-within/input:text-sp-accent text-sm font-medium transition-colors">
                    {isDe
                      ? 'Welches Problem möchten Sie lösen? (Optional)'
                      : 'What challenge are you looking to solve? (Optional)'}
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    className="focus:border-sp-accent/50 focus:ring-sp-accent/10 w-full resize-none rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white shadow-inner transition-all outline-none focus:bg-white/10 focus:ring-4"
                  />
                </div>

                <div className="space-y-4 pt-4">
                  <label className="group/check flex cursor-pointer items-center gap-4">
                    <div className="relative flex items-center justify-center">
                      <input
                        type="checkbox"
                        name="marketing"
                        className="peer checked:bg-sp-accent checked:border-sp-accent group-hover/check:border-sp-accent/50 h-6 w-6 cursor-pointer appearance-none rounded-lg border border-white/20 bg-white/5 shadow-inner transition-all duration-300"
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
                    <span className="text-foreground/70 text-[15px] transition-colors group-hover/check:text-white">
                      {isDe ? 'Marketing E-Mails' : 'Marketing Emails'}
                    </span>
                  </label>

                  <label className="group/check flex cursor-pointer items-center gap-4">
                    <div className="relative flex items-center justify-center">
                      <input
                        type="checkbox"
                        name="news"
                        className="peer checked:bg-sp-accent checked:border-sp-accent group-hover/check:border-sp-accent/50 h-6 w-6 cursor-pointer appearance-none rounded-lg border border-white/20 bg-white/5 shadow-inner transition-all duration-300"
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
                    <span className="text-foreground/70 text-[15px] transition-colors group-hover/check:text-white">
                      {isDe ? 'Neuigkeiten & Updates' : 'News & Updates Emails'}
                    </span>
                  </label>
                </div>

                <motion.button
                  type="submit"
                  disabled={isPending}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-sp-accent hover:bg-sp-accent-dark group relative mt-8 flex w-full items-center justify-center gap-3 overflow-x-hidden rounded-xl px-8 py-5 text-lg font-bold text-white shadow-[0_0_20px_var(--sp-accent-dark)] transition-all hover:shadow-[0_0_40px_var(--sp-accent-dark)]"
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
      <section className="bg-sp-bg-dark relative mt-20 border-t border-white/5 py-24">
        <div className="container mx-auto px-6 text-center md:px-12">
          <Reveal>
            <h2 className="mb-16 text-3xl font-bold md:text-5xl">
              {isDe ? 'Für wen ist das?' : 'Who is it for'}
            </h2>
          </Reveal>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: isDe ? 'Scale-ups' : 'Scale-ups',
                desc: isDe ? 'Innovationsteams in Unternehmen' : 'Innovation teams in corporates',
                link: 'scale-up',
                img: 'https://solutionplus.io/wp-content/uploads/2025/09/Scale-ups-1.png',
              },
              {
                title: isDe ? 'Start-ups' : 'Start-ups',
                desc: isDe
                  ? 'Gründer in Pre-Seed- bis Series-A-Phasen'
                  : 'Founders in pre-Seed to Series A stages',
                link: 'startup',
                img: 'https://solutionplus.io/wp-content/uploads/2025/09/Start-ups-1.png',
              },
              {
                title: isDe ? 'Gründer mit Idee' : 'Entrepreneur with an Idea',
                desc: isDe ? 'Die einen Tech-Partner brauchen' : 'who need a tech partner',
                link: 'entrepreneur-with-an-idea',
                img: 'https://solutionplus.io/wp-content/uploads/2025/09/Entrepreneur-with-an-Idea-1.png',
              },
            ].map((persona, i) => (
              <Reveal key={i} delay={0.1 * i} direction="up">
                <div className="hover:border-sp-accent/30 bg-sp-bg-medium flex h-full flex-col items-center rounded-[2rem] border border-black/5 p-8 text-center transition-all duration-300">
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
