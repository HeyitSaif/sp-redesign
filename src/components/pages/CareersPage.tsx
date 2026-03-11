'use client'

import { Reveal } from '@/components/animations/Reveal'
import { ArrowRight, Globe2, Heart, Lightbulb, TrendingUp, ShieldCheck, Cpu } from 'lucide-react'
import { ImageWithShimmer } from '@/components/ui/ImageWithShimmer'
import Link from 'next/link'
import { FloatiesBackground } from '@/components/ui/FloatiesBackground'
import { StickyQnA } from '@/components/sections/StickyQnA'
import { Badge } from '@/components/ui/Badge'
import { supportData } from '@/data/support-content'

export function CareersPage({ locale }: { locale: string }) {
  const isDe = locale === 'de'

  return (
    <div className="relative flex w-full flex-col overflow-x-clip pt-32 pb-24">
      <FloatiesBackground />
      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-center overflow-x-clip py-20">
        <div className="pointer-events-none absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay" />
        <div className="bg-sp-accent/10 pointer-events-none absolute top-0 right-0 h-[500px] w-[500px] rounded-full blur-[150px]" />

        <div className="relative z-10 container mx-auto grid items-center gap-16 px-6 md:px-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <span className="text-sp-accent border-sp-border-dark bg-sp-surface-subtle mb-8 inline-block rounded-full border px-4 py-2 text-sm font-medium">
                {isDe ? 'Karriere bei SolutionPlus' : 'Careers at SolutionPlus'}
              </span>
              <h1 className="mb-8 text-4xl leading-[1.1] font-bold md:text-6xl lg:text-7xl">
                {isDe ? 'Bauen mit Sinn. ' : 'Build with purpose. '}{' '}
                <span className="text-gradient">
                  {isDe ? 'Wachsen ohne Grenzen.' : 'Grow without borders.'}
                </span>
              </h1>
              <p className="text-sp-text-muted mb-8 max-w-xl text-xl leading-relaxed">
                {isDe
                  ? 'Wir sind mehr als ein Softwareunternehmen; wir sind ein Team mit klaren Zielen. Mit deutsch geführter Projektaufsicht und Top-Engineering-Talenten aus Pakistan liefern wir nachhaltigen Einfluss für Kunden in ganz Europa und den USA.'
                  : "We're more than a software company; we're a team built on purpose. With German-led project oversight and top engineering talent from Pakistan, we deliver lasting impact for clients across Europe and the US."}
              </p>
              <div className="flex gap-4">
                <a
                  href="#open-roles"
                  className="bg-sp-accent group hover:bg-sp-accent-dark relative inline-flex items-center gap-2 overflow-x-clip rounded-full px-8 py-4 font-bold tracking-wide text-white shadow-[0_4px_20px_-4px_rgba(255,112,67,0.4)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_-4px_rgba(255,112,67,0.6)] active:scale-95"
                >
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_2s_infinite]" />
                  {isDe ? 'Offene Stellen' : 'View Open Roles'}{' '}
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
              </div>
            </Reveal>
          </div>
          <Reveal direction="left">
            <div className="bg-sp-bg-medium relative h-64 rotate-2 overflow-x-clip rounded-3xl border border-black/10 p-2 shadow-2xl transition-transform duration-500 hover:rotate-0 md:h-80 lg:h-[400px]">
              <ImageWithShimmer
                src="/images/Careers-13-scaled-uai-1444x1444.jpg"
                alt="Careers at SolutionPlus"
                wrapperClassName="rounded-2xl h-full w-full"
                className="object-cover opacity-80 mix-blend-luminosity transition-all duration-700 hover:mix-blend-normal"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Culture */}
      <section className="bg-sp-bg-dark relative overflow-x-clip border-y border-white/5 py-24">
        <div className="bg-sp-accent/10 pointer-events-none absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full blur-[150px]" />
        <div className="relative z-10 container mx-auto max-w-4xl px-6 text-center md:px-12">
          <Reveal>
            <h2 className="mb-8 text-3xl font-bold md:text-5xl">
              {isDe ? 'Unsere Arbeitskultur' : 'Our Work Culture'}
            </h2>
            <p className="text-sp-accent mb-16 text-xl font-medium">
              {isDe
                ? 'Remote-first by design. Global by nature. Human at the core.'
                : 'Remote-first by design. Global by nature. Human at the core.'}
            </p>
          </Reveal>

          <div className="grid gap-8 text-left md:grid-cols-2">
            {[
              {
                icon: <Globe2 size={32} className="text-sp-accent" />,
                title: isDe ? 'Kommunikation' : 'Communication',
                desc: isDe
                  ? 'Kommunizieren Sie klar und respektvoll über Grenzen und Hintergründe hinweg.'
                  : 'Communicate clearly and respectfully across borders and backgrounds.',
              },
              {
                icon: <ShieldCheck size={32} className="text-sp-accent" />,
                title: isDe ? 'Verantwortung übernehmen' : 'Take ownership',
                desc: isDe
                  ? 'Warten Sie nicht darauf, dass man es Ihnen sagt, machen Sie Dinge besser.'
                  : "Don't wait to be told, make things better.",
              },
              {
                icon: <Lightbulb size={32} className="text-sp-accent" />,
                title: isDe ? 'Klarheit vor Raffinesse' : 'Seek clarity over cleverness',
                desc: isDe ? 'Fortschritt über Perfektion.' : 'Progress over perfection.',
              },
              {
                icon: <TrendingUp size={32} className="text-sp-accent" />,
                title: isDe ? 'Mutig wachsen' : 'Grow boldly',
                desc: isDe
                  ? 'Als Entwickler, Teamkollege und Mensch.'
                  : 'As a developer, teammate, and human.',
              },
            ].map((feature, i) => (
              <Reveal key={i} delay={0.1 * (i + 1)} direction="up">
                <div className="group bg-sp-bg-medium relative h-full overflow-x-clip rounded-[2rem] border border-black/10 p-8 transition-all duration-500 hover:-translate-y-2 hover:border-black/20 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)]">
                  <div className="from-sp-accent/5 absolute inset-0 bg-gradient-to-tr via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="group-hover:bg-sp-accent/10 group-hover:border-sp-accent/30 group-hover:text-sp-accent text-sp-text-dark mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-black/10 bg-black/5 shadow-lg transition-all duration-500 group-hover:scale-110">
                    {feature.icon}
                  </div>
                  <h3 className="group-hover:text-sp-accent text-sp-text-dark mb-4 text-xl font-bold transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sp-text-on-light group-hover:text-sp-text-on-light/90 leading-relaxed transition-colors">
                    {feature.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="relative overflow-x-clip py-24">
        <div className="bg-sp-accent/5 pointer-events-none absolute top-1/2 left-0 h-[500px] w-[500px] -translate-y-1/2 rounded-full blur-[150px]" />
        <div className="container mx-auto grid items-center gap-16 px-6 md:px-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <h2 className="mb-6 text-3xl font-bold md:text-5xl">
                {isDe ? 'Warum bei uns arbeiten' : 'Why Work With Us'}
              </h2>
              <p className="text-sp-text-muted mb-10 text-lg">
                {isDe
                  ? 'Wenn sich dies nach Ihrer Arbeitsweise anfühlt, würden wir uns freuen, von Ihnen zu hören.'
                  : "If this feels like your way of working, we'd love to hear from you."}
              </p>
            </Reveal>
            <div className="space-y-6">
              {[
                isDe
                  ? 'Denken Sie wie ein Ingenieur. Fragen Sie nach dem Warum und verbessern Sie Dinge.'
                  : "Think like an engineer. Don't just follow specs ask why and improve.",
                isDe
                  ? 'Arbeiten Sie in einer respektvollen Kultur. Stressfrei, unterstützend und auf Vertrauen gebaut.'
                  : 'Work in a respectful culture. Stress-free, supportive, and built on trust.',
                isDe
                  ? 'Wachsen Sie global. Sammeln Sie Erfahrung als Entwickler, Teammitglied und Profi.'
                  : 'Grow globally. Gain exposure as a developer, teammate, and professional.',
              ].map((item, i) => (
                <Reveal key={i} delay={0.1 * i} direction="right">
                  <div className="hover:border-sp-accent/30 bg-sp-bg-medium flex items-start gap-4 rounded-2xl border border-black/5 p-6 transition-colors">
                    <Heart className="text-sp-accent mt-1 shrink-0" />
                    <p className="text-sp-text-on-light leading-relaxed font-medium">{item}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal direction="left">
            <div className="bg-sp-bg-medium relative h-64 overflow-x-clip rounded-3xl border border-black/10 p-2 md:h-80 lg:h-[400px]">
              <ImageWithShimmer
                src="/images/Work-in-a-respectful-culture.-Stress-free-supportive-and-built-on-trust.png"
                alt="Culture"
                wrapperClassName="rounded-2xl h-full w-full"
                className="object-cover opacity-80 mix-blend-luminosity transition-all duration-700 hover:mix-blend-normal"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Open Roles */}
      <section
        id="open-roles"
        className="bg-sp-bg-dark relative scroll-mt-24 border-t border-white/5 py-32"
      >
        <div className="container mx-auto px-6 text-center md:px-12">
          <Reveal>
            <h2 className="mb-16 text-3xl font-bold md:text-5xl">
              {isDe ? 'Offene Positionen' : 'Open Roles'}
            </h2>
          </Reveal>

          <div className="mx-auto grid max-w-6xl gap-8 text-left md:grid-cols-3">
            {[
              {
                title: 'Data Engineer',
                exp: isDe ? '1+ Jahr Erfahrung' : '1+ year experience',
                img: '/images/What-youll-get-14-uai-1167x1459.jpg',
              },
              {
                title: 'Sales Executive',
                exp: isDe ? '1+ Jahr Erfahrung' : '1+ year experience',
                img: '/images/Calculate-your-team-setup-14-1-scaled-uai-2048x2560.jpg',
              },
              {
                title: 'MERN Developer',
                exp: isDe ? '1+ Jahr Erfahrung' : '1+ year experience',
                img: '/images/SS-14-uai-1167x1459.jpg',
              },
            ].map((role, i) => (
              <Reveal key={i} delay={0.1 * (i + 1)} direction="up">
                <div className="group hover:border-sp-accent/30 bg-sp-bg-medium block cursor-pointer overflow-hidden rounded-3xl border border-white/5 transition-all">
                  <div className="bg-sp-bg-dark relative aspect-[4/5] overflow-hidden p-4">
                    <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#141618] via-transparent to-transparent opacity-80" />
                    <ImageWithShimmer
                      src={role.img}
                      alt={role.title}
                      wrapperClassName="absolute inset-0"
                      className="object-cover object-center opacity-70 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
                    />
                  </div>
                  <div className="relative z-20 -mt-20 p-8">
                    <h3 className="mb-2 text-2xl font-bold text-white">{role.title}</h3>
                    <div className="text-sp-accent mb-4 flex items-center gap-2 font-medium">
                      <Cpu size={18} /> {role.exp}
                    </div>
                    <div className="text-sp-accent group-hover:text-sp-accent flex items-center gap-2 font-medium transition-colors">
                      {isDe ? 'Bewerben' : 'Apply Now'}{' '}
                      <ArrowRight
                        size={16}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How We Hire */}
      <section className="relative overflow-x-clip py-24">
        <div className="container mx-auto px-6 text-center md:px-12">
          <Reveal>
            <h2 className="mb-6 text-3xl font-bold md:text-5xl">
              {isDe ? 'Wachsen Sie mit uns, nicht um uns herum.' : 'Grow with us, not around us.'}
            </h2>
            <p className="text-foreground/70 mx-auto mb-16 max-w-3xl text-xl">
              {isDe
                ? 'Treten Sie einem Team bei, in dem Ihr Beitrag nicht nur wahrgenommen wird; er prägt die Zukunft von Produkten und Unternehmen.'
                : "Join a team where your contribution isn't just noticed; it shapes the future of products and companies."}
            </p>
          </Reveal>

          <Reveal direction="up">
            <div className="bg-sp-bg-medium relative mx-auto h-64 max-w-4xl overflow-x-clip rounded-3xl border border-black/10 p-2 md:h-80">
              <ImageWithShimmer
                src="/images/how-we-hire-scaled.jpg"
                alt="How We Hire"
                wrapperClassName="rounded-2xl h-full w-full"
                className="object-cover opacity-80 mix-blend-luminosity transition-all duration-700 hover:mix-blend-normal"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <StickyQnA
        locale={locale}
        items={[
          {
            q: isDe ? 'Sponsern Sie Visa?' : '"Do you sponsor visas?"',
            a: isDe
              ? 'Ja, für die richtigen Rollen bieten wir Visumsponsoring und Unterstützung beim Umzug an. Wir führen Sie durch den Prozess, damit Sie sich auf einen starken Start im Team konzentrieren können.'
              : "Yes, for the right roles we provide visa sponsorship and relocation support. We'll guide you through the process so you can focus on starting strong with the team.",
          },
          {
            q: isDe
              ? 'Kann ich mich ohne Informatik-Abschluss bewerben?'
              : '"Can I apply without a CS degree?"',
            a: isDe
              ? 'Absolut. Uns sind Ihre Fähigkeiten, Ihre lösungsorientierte Denkweise und das, was Sie aufgebaut haben, wichtiger als formale Abschlüsse. Ein solides Portfolio oder nachgewiesene Erfahrung hat hier mehr Gewicht.'
              : "Absolutely. We care more about your skills, problem-solving mindset, and what you've built than about formal degrees. A solid portfolio or proven experience carries more weight here.",
          },
          {
            q: isDe ? 'Wie funktioniert das BOT-Modell?' : '"How does the BOT model work?"',
            a: isDe
              ? 'BOT (Build-Operate-Transfer) bedeutet, dass Sie als Teil unseres Delivery-Teams an Live-Projekten mit Top-Ingenieuren und deutschen Projektleitern arbeiten. Wenn ein Kunde beschließt, das Projekt intern fortzuführen, können Sie in sein Inhouse-Team wechseln, wenn es gut passt.'
              : "BOT (Build–Operate–Transfer) means you start as part of our delivery team, working on live projects with top engineers and German project leads. Once a client decides to internalize, you may transition to their in-house team if it's the right fit.",
          },
          {
            q: isDe
              ? 'Kann ich remote starten und später umziehen?'
              : '"Can I start remote and relocate later?"',
            a: isDe
              ? 'Ja. Viele unserer Teammitglieder beginnen remote und wechseln vor Ort, wenn es sinnvoll ist. Wir helfen dabei, diesen Übergang reibungslos zu gestalten, wenn die Zeit reif ist.'
              : "Yes. Many of our teammates begin remotely and move onsite when it makes sense. We'll help make that transition smooth when the time comes.",
          },
          {
            q: isDe
              ? 'Wie sieht der Bewerbungsprozess aus?'
              : '"What\'s the interview process like?"',
            a: isDe
              ? 'Wir halten es einfach: ein Intro-Gespräch, eine technische oder rollenspezifische Aufgabe und ein Gespräch zur Unternehmenskultur. Unser Ziel ist es, Ihre Zeit zu respektieren und Ihnen gleichzeitig den Raum zu geben, Ihre beste Arbeit zu zeigen.'
              : 'We keep it simple: an intro chat, a technical or role-specific assessment, and a culture fit conversation. Our goal is to respect your time while giving you space to show your best work.',
          },
        ]}
      />

      {/* Related reading */}
      <section className="bg-sp-bg-dark relative z-10 py-24 md:py-32">
        <div className="container mx-auto px-6 text-center md:px-12">
          <Reveal>
            <h3 className="mb-8 text-2xl font-bold text-white">
              {supportData[locale === 'de' ? 'de' : 'en'].caseStudies.readMore}
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href={`/${locale}/${locale === 'de' ? 'fallstudien' : 'case-studies'}`}
                className="bg-sp-surface-subtle border-sp-border-dark text-sp-text-muted hover:border-sp-accent hover:text-sp-accent rounded-full border px-6 py-2 text-sm font-semibold tracking-wide uppercase transition-colors"
              >
                {locale === 'de' ? 'Alle Fallstudien' : 'All Case Studies'}
              </Link>
            </div>
            <div className="mt-16 text-center">
              <p className="text-foreground/70 mb-6 text-lg">
                {supportData[locale === 'de' ? 'de' : 'en'].services.stillHaveQuestions}
              </p>
              <Link
                href={`/${locale}/${locale === 'de' ? 'kontakt-solutionplus' : 'contact-us'}`}
                className="text-sp-accent hover:text-sp-accent-dark font-medium underline underline-offset-4"
              >
                {locale === 'de' ? 'Sprechen Sie mit uns' : "Let's talk"}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-sp-bg-dark border-sp-accent/10 relative overflow-x-clip border-t py-32">
        <div className="relative z-10 container mx-auto max-w-4xl px-6 text-center md:px-12">
          <Reveal>
            <h2 className="mb-8 text-4xl font-bold md:text-6xl">
              {isDe ? 'Bereit für den' : 'Ready to make an'}{' '}
              <span className="text-sp-accent">{isDe ? 'nächsten Schritt?' : 'impact?'}</span>
            </h2>
            <Link
              href={`/${locale}/${isDe ? 'kontakt-solutionplus' : 'contact-us'}`}
              className="bg-sp-accent group hover:bg-sp-accent-dark relative inline-block overflow-x-clip rounded-full px-10 py-5 text-lg font-bold tracking-wide text-white shadow-[0_4px_20px_-4px_rgba(255,112,67,0.4)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_40px_-4px_rgba(255,112,67,0.6)] active:scale-95"
            >
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_2s_infinite]" />
              {isDe ? 'Jetzt bewerben' : 'Get in touch'}
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
