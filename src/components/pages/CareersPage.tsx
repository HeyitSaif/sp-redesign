'use client'

import { Reveal } from '@/components/animations/Reveal'
import { ArrowRight, Globe2, Heart, Lightbulb, TrendingUp, ShieldCheck, Cpu } from 'lucide-react'
import { ImageWithShimmer } from '@/components/ui/ImageWithShimmer'
import Link from 'next/link'
import { FloatiesBackground } from '@/components/ui/FloatiesBackground'
import { StickyQnA } from '@/components/sections/StickyQnA'
import { Badge } from '@/components/ui/Badge'
import { supportData } from '@/data/support-content'
import { Button } from '@/components/ui/Button'

export function CareersPage({ locale }: { locale: string }) {
  const isDe = locale === 'de'

  return (
    <div className="relative flex w-full flex-col overflow-x-clip pt-24 pb-16 md:pt-32 md:pb-24">
      <FloatiesBackground />
      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-center overflow-x-clip py-12 md:py-16 lg:py-20">
        <div className="pointer-events-none absolute inset-0 opacity-10 mix-blend-overlay" />
        <div className="bg-sp-accent/10 pointer-events-none absolute top-0 right-0 h-[500px] w-[500px] rounded-full blur-[150px]" />

        <div className="relative z-10 container mx-auto grid items-center gap-10 px-5 md:gap-16 md:px-8 lg:grid-cols-2 lg:px-12">
          <div>
            <Reveal>
              <span className="text-sp-accent border-sp-border-dark bg-sp-surface-subtle mb-8 inline-block rounded-full border px-4 py-2 text-sm font-medium">
                {isDe ? 'Karriere bei SolutionPlus' : 'Careers at SolutionPlus'}
              </span>
              <h1 className="mb-8 text-3xl leading-[1.1] font-bold md:text-3xl md:text-4xl md:text-5xl md:text-6xl lg:text-7xl">
                {isDe ? 'Mit Vision bauen. ' : 'Build with purpose. '}{' '}
                <span className="text-gradient">
                  {isDe ? 'Grenzenlos wachsen.' : 'Grow without borders.'}
                </span>
              </h1>
              <p className="text-sp-text-muted mb-8 max-w-xl text-xl leading-relaxed">
                {isDe
                  ? 'Wir sind mehr als ein Softwareunternehmen – wir sind ein Team mit einer klaren Mission. Mit deutscher Projektleitung und den besten Engineering-Talenten aus Pakistan schaffen wir echten Impact für Kunden in Europa und den USA.'
                  : "We're more than a software company; we're a team built on purpose. With German-led project oversight and top engineering talent from Pakistan, we deliver lasting impact for clients across Europe and the US."}
              </p>
              <div className="flex gap-4">
                <Button
                  variant="primary"
                  size="md"
                  href="#culture"
                  data-analytics-event="cta_click"
                  data-analytics-event-label={isDe ? 'Unsere Kultur' : 'Our Culture'}
                  data-analytics-location="careers_hero"
                  data-analytics-destination="#culture"
                >
                  {isDe ? 'Unsere Kultur' : 'Our Culture'}{' '}
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Button>
              </div>
            </Reveal>
          </div>
          <Reveal direction="left">
            <div className="bg-sp-bg-medium relative h-64 rotate-2 overflow-x-clip rounded-3xl border border-black/10 p-2 shadow-2xl transition-transform duration-500 hover:rotate-0 md:h-80 lg:h-[400px]">
              <ImageWithShimmer
                src="/images/Careers-13-scaled-uai-1444x1444.jpg"
                alt="Careers at SolutionPlus"
                wrapperClassName="rounded-2xl h-full w-full"
                className="object-cover opacity-100 mix-blend-normal transition-all duration-700 md:opacity-80 md:mix-blend-luminosity md:hover:opacity-100 md:hover:mix-blend-normal"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Culture */}
      <section
        id="culture"
        className="bg-sp-bg-dark border-sp-border-dark relative overflow-x-clip border-y py-12 md:py-16 lg:py-24"
      >
        <div className="bg-sp-accent/10 pointer-events-none absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full blur-[150px]" />
        <div className="relative z-10 container mx-auto max-w-4xl px-5 text-center md:px-12">
          <Reveal>
            <h2 className="mb-8 text-3xl font-bold md:text-3xl md:text-4xl md:text-5xl">
              {isDe ? 'Unsere Arbeitskultur' : 'Our Work Culture'}
            </h2>
            <p className="text-sp-accent mb-10 text-xl font-medium md:mb-16">
              {isDe
                ? 'Remote-first aus Überzeugung. Global aus Natur. Der Mensch im Mittelpunkt.'
                : 'Remote-first by design. Global by nature. Human at the core.'}
            </p>
          </Reveal>

          <div className="grid gap-5 text-left md:grid-cols-2 md:gap-8">
            {[
              {
                icon: <Globe2 size={32} className="text-sp-accent" />,
                title: isDe ? 'Kommunikation' : 'Communication',
                desc: isDe
                  ? 'Kommuniziere klar und respektvoll – über Grenzen und Hintergründe hinweg.'
                  : 'Communicate clearly and respectfully across borders and backgrounds.',
              },
              {
                icon: <ShieldCheck size={32} className="text-sp-accent" />,
                title: isDe ? 'Verantwortung übernehmen' : 'Take ownership',
                desc: isDe
                  ? 'Übernimm Verantwortung und handle proaktiv – warte nicht darauf, dass man es dir sagt.'
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
                <div className="group bg-sp-bg-medium relative h-full overflow-hidden overflow-x-clip rounded-2xl border border-black/10 p-5 transition-all duration-500 hover:-translate-y-2 hover:border-black/10 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] md:p-8">
                  <div className="from-sp-accent/5 absolute inset-0 bg-gradient-to-tr via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="group-hover:bg-sp-accent/10 group-hover:border-sp-accent/40 group-hover:text-sp-accent text-sp-text-dark mb-6 flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl border border-black/10 bg-black/5 shadow-lg transition-all duration-500 group-hover:scale-110">
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
      <section className="relative overflow-x-clip py-12 md:py-16 lg:py-24">
        <div className="bg-sp-accent/5 pointer-events-none absolute top-1/2 left-0 h-[500px] w-[500px] -translate-y-1/2 rounded-full blur-[150px]" />
        <div className="container mx-auto grid items-center gap-10 px-5 md:gap-16 md:px-8 lg:grid-cols-2 lg:px-12">
          <div>
            <Reveal>
              <h2 className="mb-6 text-3xl font-bold md:text-3xl md:text-4xl md:text-5xl">
                {isDe ? 'Warum bei uns arbeiten' : 'Why Work With Us'}
              </h2>
              <p className="text-sp-text-muted mb-10 text-lg">
                {isDe
                  ? 'Wenn das nach deiner Arbeitsweise klingt, wollen wir dich kennenlernen.'
                  : "If this feels like your way of working, we'd love to hear from you."}
              </p>
            </Reveal>
            <div className="space-y-6">
              {[
                isDe
                  ? 'Folge nicht einfach nur Spezifikationen – hinterfrage das „Warum“ und mache Lösungen besser.'
                  : "Think like an engineer. Don't just follow specs ask why and improve.",
                isDe
                  ? 'Stressfrei, unterstützend und auf gegenseitigem Vertrauen aufgebaut.'
                  : 'Work in a respectful culture. Stress-free, supportive, and built on trust.',
                isDe
                  ? 'Entwickle dich weiter – als Developer, Teammitglied und Profi auf internationalem Parkett.'
                  : 'Grow globally. Gain exposure as a developer, teammate, and professional.',
              ].map((item, i) => (
                <Reveal key={i} delay={0.1 * i} direction="right">
                  <div className="hover:border-sp-accent/40 bg-sp-bg-medium flex items-start gap-4 overflow-hidden rounded-2xl border border-black/5 p-5 transition-colors md:p-6">
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
                className="object-cover opacity-100 mix-blend-normal transition-all duration-700 md:opacity-80 md:mix-blend-luminosity md:hover:opacity-100 md:hover:mix-blend-normal"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* How We Hire */}
      <section className="bg-sp-bg-dark border-sp-border-dark relative scroll-mt-10 overflow-x-clip border-t py-12 md:mt-16 md:mt-24 md:py-16 lg:py-24">
        <div className="container mx-auto px-5 text-center md:px-12">
          <Reveal>
            <h2 className="mb-6 text-3xl font-bold md:text-3xl md:text-4xl md:text-5xl">
              {isDe ? 'Wachse mit uns, nicht nur neben uns.' : 'Grow with us, not around us.'}
            </h2>
            <p className="text-foreground/70 mx-auto mb-10 max-w-3xl text-xl md:mb-16">
              {isDe
                ? 'Werde Teil eines Teams, in dem dein Beitrag nicht nur gesehen wird, sondern die Zukunft von Produkten und Unternehmen aktiv mitgestaltet.'
                : "Join a team where your contribution isn't just noticed; it shapes the future of products and companies."}
            </p>
          </Reveal>

          <Reveal direction="up">
            <div className="bg-sp-bg-medium relative mx-auto h-64 max-w-4xl overflow-x-clip rounded-3xl border border-black/10 p-2 md:h-80">
              <ImageWithShimmer
                src="/images/how-we-hire-scaled.jpg"
                alt="How We Hire"
                wrapperClassName="rounded-2xl h-full w-full"
                className="object-cover opacity-100 mix-blend-normal transition-all duration-700 md:opacity-80 md:mix-blend-luminosity md:hover:opacity-100 md:hover:mix-blend-normal"
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
            q: isDe ? '„Bietet ihr Visa-Sponsoring an?"' : '"Do you sponsor visas?"',
            a: isDe
              ? 'Ja. Für entsprechende Positionen unterstützen wir dich beim Visum und beim Umzug. Wir begleiten dich durch den gesamten Prozess, damit du dich voll und ganz auf deinen Start im Team konzentrieren kannst.'
              : "Yes, for the right roles we provide visa sponsorship and relocation support. We'll guide you through the process so you can focus on starting strong with the team.",
          },
          {
            q: isDe
              ? '„Kann ich mich ohne Informatik-Studium bewerben?"'
              : '"Can I apply without a CS degree?"',
            a: isDe
              ? 'Absolut. Deine Fähigkeiten, deine Herangehensweise an Probleme und das, was du bereits aufgebaut hast, zählen für uns mehr als ein formaler Abschluss. Ein starkes Portfolio oder nachweisbare Projekterfahrung haben bei uns mehr Gewicht.'
              : "Absolutely. We care more about your skills, problem-solving mindset, and what you've built than about formal degrees. A solid portfolio or proven experience carries more weight here.",
          },
          {
            q: isDe ? '„Wie funktioniert das BOT-Modell?"' : '"How does the BOT model work?"',
            a: isDe
              ? 'BOT steht für Build-Operate-Transfer. Das bedeutet: Du startest als Teil unseres Teams und arbeitest an Live-Projekten mit Top-Engineers und deutscher Projektleitung. Wenn ein Kunde das Team fest übernehmen möchte, kannst du direkt in dessen Inhouse-Team wechseln – sofern es für beide Seiten passt.'
              : "BOT (Build–Operate–Transfer) means you start as part of our delivery team, working on live projects with top engineers and German project leads. Once a client decides to internalize, you may transition to their in-house team if it's the right fit.",
          },
          {
            q: isDe
              ? '„Kann ich remote starten und später umziehen?"'
              : '"Can I start remote and relocate later?"',
            a: isDe
              ? 'Ja. Viele unserer Teammitglieder beginnen remote und ziehen später an den Standort um, wenn es sinnvoll ist. Wir helfen dir dabei, diesen Übergang so reibungslos wie möglich zu gestalten.'
              : "Yes. Many of our teammates begin remotely and move onsite when it makes sense. We'll help make that transition smooth when the time comes.",
          },
          {
            q: isDe
              ? '„Wie sieht der Bewerbungsprozess aus?"'
              : '"What\'s the interview process like?"',
            a: isDe
              ? 'Wir halten es unkompliziert: Ein Kennenlern-Chat, ein technisches oder rollenspezifisches Assessment und ein Gespräch zum „Culture Fit". Unser Ziel ist es, deine Zeit zu respektieren und dir gleichzeitig den Raum zu geben, deine beste Arbeit zu zeigen.'
              : 'We keep it simple: an intro chat, a technical or role-specific assessment, and a culture fit conversation. Our goal is to respect your time while giving you space to show your best work.',
          },
        ]}
      />

      {/* Related reading */}
      <section className="bg-sp-bg-dark relative z-10 py-12 md:py-16 lg:py-24">
        <div className="container mx-auto px-5 text-center md:px-12">
          <Reveal>
            <h3 className="mb-8 text-2xl font-bold text-white">
              {supportData[locale === 'de' ? 'de' : 'en'].caseStudies.readMore}
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href={`/${locale}/${locale === 'de' ? 'fallstudien' : 'case-studies'}`}
                className="bg-sp-surface-subtle border-sp-border-dark text-sp-text-muted hover:border-sp-accent hover:text-sp-accent rounded-full border px-5 py-2 text-sm font-semibold tracking-wide uppercase transition-colors md:px-6"
              >
                {locale === 'de' ? 'Alle Fallstudien' : 'All Case Studies'}
              </Link>
            </div>
            <div className="mt-10 text-center md:mt-16">
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
      <section className="bg-sp-bg-dark border-sp-accent/10 relative overflow-x-clip border-t py-12 md:py-16 lg:py-24">
        <div className="relative z-10 container mx-auto max-w-4xl px-5 text-center md:px-12">
          <Reveal>
            <h2 className="mb-8 text-3xl font-bold md:text-3xl md:text-4xl md:text-5xl md:text-6xl">
              {isDe ? 'Bereit für den' : 'Ready to make an'}{' '}
              <span className="text-sp-accent">{isDe ? 'nächsten Schritt?' : 'impact?'}</span>
            </h2>
            <Button
              variant="primary"
              size="lg"
              href={`/${locale}/${isDe ? 'kontakt-solutionplus' : 'contact-us'}`}
              data-analytics-event="cta_click"
              data-analytics-event-label={isDe ? 'Jetzt bewerben' : 'Get in touch'}
              data-analytics-location="careers_cta"
              data-analytics-destination={`/${locale}/${isDe ? 'kontakt-solutionplus' : 'contact-us'}`}
            >
              {isDe ? 'Jetzt bewerben' : 'Get in touch'}
            </Button>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
