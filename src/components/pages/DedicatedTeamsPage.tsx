'use client'

import { Reveal } from '@/components/animations/Reveal'
import { ArrowRight, Users, CheckCircle2, Globe2, Gauge, LineChart, Code2 } from 'lucide-react'
import Link from 'next/link'
import { FloatiesBackground } from '@/components/ui/FloatiesBackground'
import { ContactFormSection } from '@/components/sections/ContactFormSection'
import { StickyQnA } from '@/components/sections/StickyQnA'

export function DedicatedTeamsPage({ locale }: { locale: string }) {
  const isDe = locale === 'de'

  return (
    <div className="relative flex w-full flex-col overflow-x-hidden pt-32 pb-24">
      <FloatiesBackground />
      {/* Hero */}
      <section className="relative flex min-h-[70vh] items-center overflow-x-hidden py-20">
        <div className="pointer-events-none absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay" />
        <div className="bg-sp-accent/10 pointer-events-none absolute top-0 right-0 h-[800px] w-[800px] rounded-full blur-[150px]" />

        <div className="relative z-10 container mx-auto grid items-center gap-16 px-6 md:px-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <div className="bg-sp-accent/10 border-sp-accent/20 text-sp-accent mb-8 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium">
                <Users size={16} className="text-sp-accent/70" />
                {isDe ? 'Dedizierte Teams' : 'Dedicated Delivery Teams'}
              </div>
              <h1 className="mb-8 text-4xl leading-[1.1] font-bold md:text-6xl lg:text-7xl">
                {isDe ? 'Skalieren Sie schnell ' : 'Scale fast with '}{' '}
                <span className="text-gradient">
                  {isDe ? 'ohne Einstellungsstress' : 'dedicated product engineering'}
                </span>{' '}
                <br className="hidden md:block" /> {isDe ? '' : 'teams.'}
              </h1>
              <p className="text-foreground/70 mb-10 max-w-xl text-xl leading-relaxed">
                {isDe
                  ? 'Wenn Ihre Roadmap schneller wächst als Sie einstellen können, stagniert die Lieferung. Unsere dedizierten Teams integrieren sich in Ihren Workflow – ohne Rekrutierungsverzögerung.'
                  : 'When your roadmap moves faster than hiring can keep up, delivery stalls. Our dedicated teams integrate into your workflow, bringing developers, QA, and leadership—without the lag.'}
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href={`/${locale}/${isDe ? 'kontakt-solutionplus' : 'contact-us'}`}
                  className="bg-sp-accent group hover:bg-sp-accent-dark relative inline-flex items-center gap-2 overflow-x-hidden rounded-full px-8 py-4 font-bold tracking-wide text-white shadow-[0_4px_20px_-4px_rgba(255,112,67,0.4)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_-4px_rgba(255,112,67,0.6)] active:scale-95"
                >
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_2s_infinite]" />
                  {isDe ? 'Gespräch vereinbaren' : 'Get Started'}{' '}
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
                <a
                  href="#how-it-works"
                  className="rounded-full border border-white/10 bg-white/5 px-8 py-4 font-medium text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10 active:scale-95"
                >
                  {isDe ? 'Modelle ansehen' : 'View models'}
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal direction="left">
            <div className="bg-sp-bg-medium relative rotate-2 overflow-x-hidden rounded-3xl border border-white/10 p-2 shadow-2xl transition-transform duration-500 hover:rotate-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://solutionplus.io/wp-content/uploads/2025/09/When-speed-matters-and-teams-are-stretched-getting-an-MVP-live-can-feel-impossible.%E2%80%A8-12-scaled-uai-2560x1706.jpg"
                alt="Dedicated Delivery Teams"
                className="h-auto w-full rounded-2xl object-cover opacity-80 mix-blend-luminosity transition-all duration-700 hover:mix-blend-normal"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why it matters */}
      <section
        id="how-it-works"
        className="bg-sp-bg-dark relative scroll-mt-24 border-y border-white/5 py-24"
      >
        <div className="container mx-auto px-6 text-center md:px-12">
          <Reveal>
            <h2 className="mb-16 text-3xl font-bold md:text-5xl">
              {isDe ? 'Warum es für Ihr Geschäft wichtig ist' : 'Why it matters for your business'}
            </h2>
          </Reveal>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <Gauge size={32} className="text-sp-accent" />,
                title: isDe ? 'Aggressive Ziele' : 'Aggressive Goals',
                desc: isDe
                  ? 'Erreichen Sie ambitionierte Lieferziele ohne Rekrutierungspausen.'
                  : 'Hit aggressive delivery goals without slowing down for hiring cycles.',
              },
              {
                icon: <Globe2 size={32} className="text-sp-accent" />,
                title: isDe ? 'Zeitübergreifend' : 'Cross-Timezones',
                desc: isDe
                  ? 'Halten Sie Projekte über Zeitzonen und Workstreams hinweg in Bewegung.'
                  : 'Keep projects moving across time zones and parallel workstreams.',
              },
              {
                icon: <CheckCircle2 size={32} className="text-sp-accent" />,
                title: isDe ? 'Deutsche Qualität' : 'German Oversight',
                desc: isDe
                  ? 'Wahren Sie Qualität und Konsistenz durch deutsch-geführte Lieferübersicht.'
                  : 'Maintain quality and consistency with German-led delivery oversight.',
              },
              {
                icon: <LineChart size={32} className="text-sp-accent" />,
                title: isDe ? 'Flexibilität' : 'Flexibility',
                desc: isDe
                  ? 'Behalten Sie Flexibilität, skalieren Sie das Team je nach Auslastung nach oben oder unten.'
                  : 'Retain flexibility, scale the team up or down based on workload.',
              },
            ].map((feature, i) => (
              <Reveal key={i} delay={0.1 * (i + 1)} direction="up">
                <div className="bg-sp-bg-medium h-full rounded-3xl border border-white/5 p-8 transition-all duration-300 hover:border-white/20">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                    {feature.icon}
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-white">{feature.title}</h3>
                  <p className="text-foreground/60 leading-relaxed">{feature.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What You'll Get */}
      <section className="relative overflow-x-hidden py-24">
        <div className="bg-sp-accent/5 pointer-events-none absolute top-1/2 right-0 h-[500px] w-[500px] -translate-y-1/2 rounded-full blur-[120px]" />
        <div className="container mx-auto grid items-center gap-16 px-6 md:px-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <h2 className="mb-10 text-3xl font-bold md:text-5xl">
                {isDe ? 'Was Sie bekommen' : "What You'll Get"}
              </h2>
            </Reveal>
            <div className="space-y-6">
              {[
                isDe
                  ? 'Vorgeprüfte Entwickler und QA, passend zu Ihrem Stack'
                  : 'Pre-vetted engineers, QA, and developers matched to your stack',
                isDe
                  ? 'Volle Integration in Ihre Tools, Prozesse und Kommunikationskanäle'
                  : 'Full integration with your tools, processes, and communication channels',
                isDe
                  ? 'Transparente Lieferberichte und Sprint-Planung'
                  : 'Transparent delivery reports and sprint planning',
              ].map((item, i) => (
                <Reveal key={i} delay={0.1 * i} direction="right">
                  <div className="hover:border-sp-accent/30 bg-sp-bg-medium flex items-start gap-4 rounded-2xl border border-white/5 p-6 transition-colors">
                    <Code2 className="text-sp-accent mt-1 shrink-0" />
                    <p className="text-foreground/80 leading-relaxed font-medium">{item}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal direction="left">
            <div className="bg-sp-bg-medium relative overflow-x-hidden rounded-3xl border border-white/10 p-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://solutionplus.io/wp-content/uploads/2025/09/What-youll-ge-t-14-scaled-uai-2560x1706.jpg"
                alt="What you'll get"
                className="h-auto w-full rounded-2xl object-cover opacity-80 mix-blend-luminosity transition-all duration-700 hover:mix-blend-normal"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Who is it for */}
      <section className="bg-sp-bg-dark relative border-y border-white/5 py-24">
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
                <div className="hover:border-sp-accent/30 bg-sp-bg-medium flex h-full flex-col items-center rounded-[2rem] border border-white/5 p-8 text-center transition-all duration-300">
                  <div className="mb-6 h-24 w-24">
                    <img
                      src={persona.img}
                      alt={persona.title}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <h3 className="mb-4 text-2xl font-bold">{persona.title}</h3>
                  <p className="text-foreground/70 mb-8 flex-grow">{persona.desc}</p>
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

      {/* Calculate your team setup / Contact */}
      <section className="bg-sp-bg-medium relative overflow-x-hidden py-24 md:py-32 lg:py-40">
        <div className="bg-sp-accent/10 absolute top-1/2 left-1/2 h-[1200px] w-[1200px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[200px]" />

        <div className="relative z-10 container mx-auto grid items-start gap-16 px-6 md:px-12 lg:grid-cols-2">
          <Reveal>
            <div className="max-w-xl">
              <h2 className="mb-10 text-5xl leading-[1.1] font-black tracking-tight text-white md:text-6xl">
                {isDe ? 'Kalkulieren Sie Ihr Team-Setup' : 'Calculate your team setup'}
              </h2>
              <p className="text-foreground/70 text-2xl leading-relaxed font-light">
                {isDe
                  ? 'Schätzen Sie Ihre Teamgröße und die monatlichen Kosten. Wir zeigen Ihnen, wie Sie schnell operativ werden und sicherstellen, dass das Team ab der ersten Woche liefert.'
                  : "Estimate your team size and monthly commitment. We'll share how to make it operational fast and ensure it's delivering from week one."}
              </p>
            </div>
            <div className="bg-sp-bg-medium mt-12 overflow-x-hidden rounded-3xl border border-white/10 p-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://solutionplus.io/wp-content/uploads/2025/09/Calculate-you-MVP-investment-14-uai-1460x973.jpg"
                alt="Calculate your team setup"
                className="h-auto w-full rounded-2xl object-cover opacity-80 mix-blend-luminosity transition-all duration-700 hover:mix-blend-normal"
              />
            </div>
          </Reveal>

          <Reveal direction="left" delay={0.2}>
            <ContactFormSection locale={locale} />
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <StickyQnA
        locale={locale}
        items={[
          {
            q: isDe
              ? 'Werden sie sich wie unser eigenes Team anfühlen?'
              : 'Will they feel like our own team?',
            a: isDe
              ? 'Ja. Das ist der ganze Sinn der Sache. Sie arbeiten mit Ihren Tools, nehmen an Ihren Meetings teil und orientieren sich an Ihrer Kultur – nur ohne die Verwaltungs- oder Einstellungskopfschmerzen für Sie.'
              : "Yes. That's the entire point. They work in your tools, attend your meetings, and align with your culture—just without the admin or hiring headache on your end.",
          },
          {
            q: isDe
              ? 'Wie lange dauert es, bis das Team einsatzbereit ist?'
              : 'How quickly can the team start?',
            a: isDe
              ? 'Es dauert in der Regel 2 bis 4 Wochen, ein engagiertes Team zusammenzustellen und einzuarbeiten, abhängig vom geforderten Tech-Stack und der Senioritätsstufe.'
              : 'It typically takes 2 to 4 weeks to assemble and onboard a dedicated team, depending on the required tech stack and seniority level.',
          },
          {
            q: isDe
              ? 'Können wir die Teamgröße später anpassen?'
              : 'Can we adjust the team size later?',
            a: isDe
              ? 'Absolut. Sie können nach Bedarf Entwickler, Designer oder QA-Spezialisten hinzufügen oder reduzieren.'
              : 'Absolutely. You can add or scale down developers, designers, or QA specialists as your project requirements evolve.',
          },
          {
            q: isDe ? 'Wem gehört der Code?' : 'Who owns the code?',
            a: isDe
              ? 'Sie tun es. Wir arbeiten in Ihren Repositories und Sie behalten von Tag 1 an die volle Kontrolle über das gesamte geistige Eigentum.'
              : 'You do. We work in your repositories, and you retain full ownership of all IP from day 1.',
          },
        ]}
      />

      {/* Testimonials */}
      <section className="bg-sp-bg-dark border-t border-white/5 py-24 md:py-32 lg:py-40">
        <div className="container mx-auto px-6 md:px-12">
          <Reveal>
            <div className="mx-auto mb-20 max-w-4xl text-center">
              <h2 className="text-sp-text-dark mb-10 text-4xl font-bold text-white md:text-6xl">
                {isDe
                  ? 'Sie werden nicht der Erste sein, der uns vertraut'
                  : "You won't be the first to trust us"}
              </h2>
            </div>
          </Reveal>

          <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
            <Reveal direction="up" delay={0.1}>
              <div className="flex h-full flex-col rounded-[2rem] border border-sp-border-testimonial bg-white p-12 shadow-lg transition-transform duration-500 hover:-translate-y-2">
                <div className="mb-8 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-6 w-6 text-sp-star-filled"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <h3 className="text-sp-text-dark mb-6 text-2xl font-bold">
                  Automotive Artificial Intelligence (AAI) GmBh
                </h3>
                <blockquote className="text-sp-text-on-light flex-1 text-lg leading-relaxed italic">
                  &quot;SolutionPlus delivered an automotive simulation platform with advanced
                  mapping and visualization. The attention to detail and ability to handle complex
                  data sets made them the perfect partner for an industry as demanding as
                  ours.&quot;
                </blockquote>
                <div className="border-sp-border-light mt-8 flex items-center gap-4 border-t pt-8">
                  <div className="h-16 w-16 shrink-0 overflow-hidden rounded-full bg-gray-100">
                    <img
                      src="https://solutionplus.io/wp-content/uploads/2025/09/Calculate-you-MVP-investment-14-150x150.jpg"
                      alt="AAI Logo"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <p className="text-sp-text-dark font-semibold">
                    Automotive Artificial Intelligence (AAI) GmBh
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.2}>
              <div className="flex h-full flex-col rounded-[2rem] border border-sp-border-testimonial bg-white p-12 shadow-lg transition-transform duration-500 hover:-translate-y-2">
                <div className="mb-8 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-6 w-6 text-sp-star-filled"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <h3 className="text-sp-text-dark mb-6 text-2xl font-bold">Aghaz Invest</h3>
                <blockquote className="text-sp-text-on-light flex-1 text-lg leading-relaxed italic">
                  &quot;Solution Plus turned our vision for a digital investment platform into
                  reality. They built a robust MERN stack foundation and seamlessly integrated with
                  Plaid, DriveWealth, IBKR, and Stripe. What impressed us most was their ability to
                  handle financial data securely while still moving fast. Thanks to their work, we
                  were able to launch confidently and scale without worrying about the
                  technology.&quot;
                </blockquote>
                <div className="border-sp-border-light mt-8 flex items-center gap-4 border-t pt-8">
                  <div className="h-16 w-16 shrink-0 overflow-hidden rounded-full bg-gray-100">
                    <img
                      src="https://solutionplus.io/wp-content/uploads/2025/09/1-150x150.png"
                      alt="Aghaz Invest Logo"
                      className="h-full w-full object-cover p-2"
                    />
                  </div>
                  <p className="text-sp-text-dark font-semibold">Aghaz Invest</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-sp-bg-medium border-sp-accent/10 relative overflow-x-hidden border-t py-32">
        <div className="relative z-10 container mx-auto max-w-4xl px-6 text-center md:px-12">
          <Reveal>
            <h2 className="mb-8 text-4xl font-bold md:text-6xl">
              {isDe ? 'Geben Sie Ihrem Produkt' : 'Give your product'}{' '}
              <span className="text-sp-accent">
                {isDe ? 'ein zweites Leben.' : 'a second life.'}
              </span>
            </h2>
            <p className="text-foreground/70 mb-12 text-xl">
              {isDe
                ? 'Wir modernisieren Ihr Produkt in Phasen, sodass es live bleibt, während wir es verbessern.'
                : 'We modernize your product in phases so it stays live while we improve it.'}
            </p>
            <Link
              href={`/${locale}/${isDe ? 'kontakt-solutionplus' : 'contact-us'}`}
              className="bg-sp-accent group hover:bg-sp-accent-dark relative inline-block overflow-x-hidden rounded-full px-10 py-5 text-lg font-bold tracking-wide text-white shadow-[0_4px_20px_-4px_rgba(255,112,67,0.4)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_40px_-4px_rgba(255,112,67,0.6)] active:scale-95"
            >
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_2s_infinite]" />
              {isDe ? 'Berechnen Sie Ihr Team-Setup' : 'Calculate your team setup'}
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
