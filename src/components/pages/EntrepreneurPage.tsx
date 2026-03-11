'use client'
import { ProceduralDataGrid } from '@/components/graphics/ProceduralDataGrid'
import { ProceduralNetwork } from '@/components/graphics/ProceduralNetwork'
import { ProceduralProcessPipeline } from '@/components/graphics/ProceduralProcessPipeline'

import { Reveal } from '@/components/animations/Reveal'
import { ArrowRight, Lightbulb, Rocket, Target, Zap, LayoutDashboard, Coins } from 'lucide-react'
import Link from 'next/link'
import { FloatiesBackground } from '@/components/ui/FloatiesBackground'
import { ContactFormSection } from '@/components/sections/ContactFormSection'
import { StickyQnA } from '@/components/sections/StickyQnA'
import { ImageWithShimmer } from '@/components/ui/ImageWithShimmer'

import { supportData } from '@/data/support-content'
import { Badge } from '@/components/ui/Badge'

export function EntrepreneurPage({ locale }: { locale: string }) {
  const isDe = locale === 'de'

  return (
    <div className="relative flex w-full flex-col overflow-x-clip pt-32 pb-24">
      <FloatiesBackground />
      {/* Hero */}
      <section className="relative flex min-h-[70vh] items-center overflow-x-clip py-20">
        <div className="pointer-events-none absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay" />
        <div className="bg-sp-accent/10 pointer-events-none absolute top-0 left-0 h-[800px] w-[800px] rounded-full blur-[150px]" />

        <div className="relative z-10 container mx-auto grid items-center gap-16 px-6 md:px-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <div className="mb-8 flex flex-wrap items-center gap-3">
                <div className="bg-sp-accent/10 border-sp-accent/20 text-sp-accent inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium">
                  <Lightbulb size={16} />
                  {isDe ? 'Für Gründer' : 'For Entrepreneurs'}
                </div>
                <Badge variant="outline" className="text-sp-text-muted">
                  {supportData[isDe ? 'de' : 'en'].services.idealFor}: Pre-Seed / Idea Phase
                </Badge>
              </div>
              <h1 className="mb-8 text-4xl leading-[1.1] font-bold md:text-6xl lg:text-7xl">
                {isDe ? 'Ihre Idee verdient mehr als ' : 'Your idea deserves more than '}{' '}
                <span className="text-sp-accent">{isDe ? 'einen Prototyp.' : 'a prototype.'}</span>
              </h1>
              <p className="text-sp-text-muted mb-10 max-w-xl text-xl leading-relaxed">
                {isDe
                  ? 'Lassen Sie uns daraus ein Produkt machen, an das Investoren glauben können. Wir bringen das Entwicklerteam, Sie bringen die Vision.'
                  : "Let's turn it into a product investors can believe in. We bring the delivery team, you bring the vision."}
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href={`/${locale}/${isDe ? 'kontakt-solutionplus' : 'contact-us'}`}
                  className="bg-sp-accent group hover:bg-sp-accent-dark relative inline-flex items-center gap-2 overflow-x-clip rounded-full px-8 py-4 font-bold tracking-wide text-white shadow-[0_4px_20px_-4px_rgba(255,112,67,0.4)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_-4px_rgba(255,112,67,0.6)] active:scale-95"
                >
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_2s_infinite]" />
                  {isDe ? 'Jetzt anfragen' : 'Get Started'}{' '}
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
                <a
                  href="#how-we-help"
                  className="border-sp-border-dark bg-sp-surface-subtle hover:border-sp-border-dark hover:bg-sp-surface-hover rounded-full border px-8 py-4 font-medium text-white shadow-lg transition-all duration-300 hover:-translate-y-1 active:scale-95"
                >
                  {isDe ? 'Mehr erfahren' : 'Learn more'}
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal direction="left">
            <div className="bg-sp-bg-medium relative h-64 rotate-2 overflow-x-clip rounded-3xl border border-black/10 p-2 shadow-2xl transition-transform duration-500 hover:rotate-0 md:h-80 lg:h-[400px]">
              <ImageWithShimmer
                src="/images/Why-this-works-14-scaled-uai-2560x1706.jpg"
                alt="Entrepreneur Idea"
                wrapperClassName="rounded-2xl h-full w-full"
                className="object-cover opacity-80 mix-blend-luminosity transition-all duration-700 hover:mix-blend-normal"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* What you're probably thinking */}
      <section className="bg-sp-bg-dark relative border-y border-sp-border-dark py-24">
        <div className="container mx-auto px-6 md:px-12">
          <Reveal>
            <h2 className="mb-16 text-center text-3xl font-bold md:text-5xl">
              {isDe ? 'Was Sie wahrscheinlich denken' : "What you're probably thinking"}
            </h2>
          </Reveal>

          <div className="grid gap-8 md:grid-cols-3">
            <Reveal delay={0.1}>
              <div className="bg-sp-bg-medium h-full rounded-3xl border border-black/5 p-8">
                <div className="text-sp-accent mb-4 font-serif text-5xl opacity-50">&quot;</div>
                <p className="text-sp-text-dark text-xl font-medium">
                  {isDe
                    ? 'Ich habe noch keinen CTO oder technischen Mitgründer.'
                    : "I don't have a CTO or tech co-founder yet."}
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="bg-sp-bg-medium h-full rounded-3xl border border-black/5 p-8">
                <div className="text-sp-accent mb-4 font-serif text-5xl opacity-50">&quot;</div>
                <p className="text-sp-text-dark text-xl font-medium">
                  {isDe
                    ? 'Entwickler einzustellen kostet Zeit und Geld, das ich nicht habe.'
                    : "Hiring devs takes time and money I don't have."}
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="bg-sp-bg-medium h-full rounded-3xl border border-black/5 p-8">
                <div className="text-sp-accent mb-4 font-serif text-5xl opacity-50">&quot;</div>
                <p className="text-sp-text-dark text-xl font-medium">
                  {isDe
                    ? 'Ich möchte einfach etwas Echtes launchen, um es Investoren oder Nutzern zu zeigen.'
                    : 'I just want to launch something real to show investors or users.'}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Why this works */}
      <section className="relative overflow-x-clip py-24">
        <div className="bg-sp-accent/5 pointer-events-none absolute top-1/2 right-0 h-[500px] w-[500px] -translate-y-1/2 rounded-full blur-[120px]" />
        <div className="container mx-auto grid items-center gap-16 px-6 md:px-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <h2 className="mb-10 text-3xl font-bold md:text-5xl">
                {isDe ? 'Warum dieser Weg funktioniert' : 'Why this works'}
              </h2>
            </Reveal>
            <div className="space-y-6">
              {[
                isDe
                  ? 'Sie brauchen frühzeitig Traktion, keinen zusätzlichen Overhead.'
                  : 'You need traction early on, not extra overhead.',
                isDe
                  ? 'Wir bringen ein komplettes Lieferteam mit, sodass Sie nicht von Grund auf neu einstellen müssen.'
                  : "We bring a full delivery team so you don't have to hire from scratch.",
                isDe
                  ? 'Sie erhalten eine schnelle, stabile Ausführung, die Ihnen beim Pitchen, Geldsammeln und Wachsen hilft.'
                  : 'You get fast, stable execution that helps you pitch, raise, and grow.',
                isDe
                  ? 'Keine langen Zeitpläne oder aufgeblähten Prozesse. Nur funktionierende Software, pünktlich geliefert.'
                  : 'No long timelines or bloated processes. Just working software, delivered on time.',
              ].map((item, i) => (
                <Reveal key={i} delay={0.1 * i} direction="right">
                  <div className="hover:border-sp-accent/30 bg-sp-bg-medium flex items-start gap-4 rounded-2xl border border-black/5 p-6 transition-colors">
                    <Target className="text-sp-accent mt-1 shrink-0" />
                    <p className="text-sp-text-on-light leading-relaxed font-medium">{item}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal direction="left">
            <div className="bg-sp-bg-medium relative h-64 overflow-x-clip rounded-3xl border border-black/10 p-2 md:h-80 lg:h-[400px]">
              <ImageWithShimmer
                src="/images/What-you-get-with-us-14-scaled-uai-2560x1706.jpg"
                alt="Why it works"
                wrapperClassName="rounded-2xl h-full w-full"
                className="object-cover opacity-80 mix-blend-luminosity transition-all duration-700 hover:mix-blend-normal"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* How we help */}
      <section id="how-we-help" className="bg-sp-bg-dark scroll-mt-24 border-y border-sp-border-dark py-24">
        <div className="container mx-auto max-w-5xl px-6 md:px-12">
          <Reveal>
            <h2 className="mb-16 text-center text-3xl font-bold md:text-5xl">
              {isDe ? 'Wie wir Ihnen vorwärts helfen!' : 'How we help you move forward!'}
            </h2>
          </Reveal>

          <div className="grid gap-8 md:grid-cols-3">
            <Reveal delay={0.1} direction="up">
              <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-sp-border-dark bg-sp-surface-elevated transition-all duration-500 hover:-translate-y-2 hover:border-sp-accent/40 hover:shadow-[0_24px_60px_-12px_rgba(0,0,0,0.4)]">
                <div className="relative aspect-[16/10] min-h-[200px] overflow-hidden">
                  <div className="absolute inset-0">
                    <ProceduralProcessPipeline steps={4} animated compact />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-sp-surface-elevated via-transparent to-transparent opacity-80" />
                  <div className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-xl border border-sp-border-dark bg-sp-surface-elevated text-sp-accent shadow-lg">
                    <Rocket size={22} strokeWidth={2.5} />
                  </div>
                  <span className="absolute left-4 top-4 text-6xl font-black leading-none text-white/5">
                    01
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="mb-3 text-xl font-bold text-white">
                    {isDe ? 'MVPs in 4–6 Wochen' : 'MVPs in 4–6 weeks'}
                  </h3>
                  <p className="text-sp-text-muted leading-relaxed">
                    {isDe
                      ? 'Wir starten schnell, priorisieren den Kernwert und bringen Sie schnell auf den Markt.'
                      : 'We move fast, prioritize core value, and get you to market quickly.'}
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2} direction="up">
              <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-sp-border-dark bg-sp-surface-elevated transition-all duration-500 hover:-translate-y-2 hover:border-sp-accent/40 hover:shadow-[0_24px_60px_-12px_rgba(0,0,0,0.4)]">
                <div className="relative aspect-[16/10] min-h-[200px] overflow-hidden">
                  <div className="absolute inset-0">
                    <ProceduralDataGrid animated compact />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-sp-surface-elevated via-transparent to-transparent opacity-80" />
                  <div className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-xl border border-sp-border-dark bg-sp-surface-elevated text-sp-accent shadow-lg">
                    <Coins size={22} strokeWidth={2.5} />
                  </div>
                  <span className="absolute left-4 top-4 text-6xl font-black leading-none text-white/5">
                    02
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="mb-3 text-xl font-bold text-white">
                    {isDe
                      ? 'Fester Umfang. Transparenter Preis.'
                      : 'Fixed scope. Transparent pricing.'}
                  </h3>
                  <p className="text-sp-text-muted leading-relaxed">
                    {isDe
                      ? 'Keine Überraschungen oder versteckten Kosten. Klare Logik über den gesamten Zyklus hinweg.'
                      : 'No surprises or hidden fees. Clear logic throughout the entire cycle.'}
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.3} direction="up">
              <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-sp-border-dark bg-sp-surface-elevated transition-all duration-500 hover:-translate-y-2 hover:border-sp-accent/40 hover:shadow-[0_24px_60px_-12px_rgba(0,0,0,0.4)]">
                <div className="relative aspect-[16/10] min-h-[200px] overflow-hidden">
                  <div className="absolute inset-0">
                    <ProceduralNetwork nodeCount={12} animated />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-sp-surface-elevated via-transparent to-transparent opacity-80" />
                  <div className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-xl border border-sp-border-dark bg-sp-surface-elevated text-sp-accent shadow-lg">
                    <LayoutDashboard size={22} strokeWidth={2.5} />
                  </div>
                  <span className="absolute left-4 top-4 text-6xl font-black leading-none text-white/5">
                    03
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="mb-3 text-xl font-bold text-white">
                    {isDe ? 'Deutsch-geführt, global gebaut' : 'German-managed, globally built'}
                  </h3>
                  <p className="text-sp-text-muted leading-relaxed">
                    {isDe
                      ? 'Sie arbeiten mit einem Delivery Lead in Deutschland, während unsere Ingenieure in Pakistan mit Sorgfalt bauen.'
                      : "You'll work with a German-based delivery lead, while our engineers in Pakistan build with care."}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-sp-bg-dark relative overflow-x-clip py-24 md:py-32 lg:py-40">
        <div className="bg-sp-accent/10 absolute top-1/2 left-1/2 h-[1200px] w-[1200px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[200px]" />

        <div className="relative z-10 container mx-auto grid items-start gap-16 px-6 md:px-12 lg:grid-cols-2">
          <Reveal>
            <div className="max-w-xl">
              <h2 className="mb-10 text-5xl leading-[1.1] font-black tracking-tight text-white md:text-6xl">
                {isDe
                  ? 'Lassen Sie uns Ihre Idee zum Leben erwecken'
                  : "Let's bring your idea to life"}
              </h2>
              <p className="text-sp-text-muted text-2xl leading-relaxed font-light">
                {isDe
                  ? 'Sie sind sich nicht sicher, wo Sie anfangen sollen? Hinterlassen Sie einfach Ihre Daten. Egal, ob Sie ein Konzept validieren oder auf ein MVP hinsteuern, wir helfen Ihnen, den nächsten Schritt zu planen – ohne Fachjargon, ohne lange Wartezeiten.'
                  : "Not sure where to start? Just leave your details. Whether you're validating a concept or racing toward an MVP, we'll help you map the next step; no jargon, no long wait."}
              </p>
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
              ? 'Ich habe keine technischen Mitgründer. Kann ich trotzdem etwas Solides bauen?'
              : "I don't have technical co-founders. Can I still build something solid?",
            a: isDe
              ? 'Absolut. Wir stellen das gesamte Team: Designer, Entwickler, QA und Delivery Manager. Sie bringen die Idee, wir bringen die Umsetzung.'
              : "Absolutely. We provide the full team; designers, developers, QA, and delivery managers. You bring the idea, we'll bring the execution.",
          },
          {
            q: isDe
              ? 'Wie stelle ich sicher, dass das MVP dem entspricht, was Investoren wollen?'
              : 'How do I make sure the MVP fits what investors want?',
            a: isDe
              ? 'Wir helfen dabei, Ihr MVP an Traktionssignalen auszurichten: Kernfunktionen, stabile UX und ein pitch-fähiger Prototyp. Sie werden etwas haben, auf das Sie stolz sein können, und Investoren werden es schnell verstehen.'
              : "We help scope your MVP around traction signals: core features, stable UX, and a pitch-ready prototype. You'll have something you're proud to demo, and they'll understand fast.",
          },
          {
            q: isDe
              ? 'Was passiert, wenn ich mittendrin die Richtung ändern muss?'
              : 'What if I need to change direction mid-way?',
            a: isDe
              ? 'Agilität ist in unseren Prozess eingebaut. Wenn Nutzerfeedback oder Investorengespräche eine Änderung erfordern, passen wir den Umfang im nächsten Sprint an, ohne das Projekt entgleisen zu lassen.'
              : 'Agility is built into our process. If user feedback or investor conversations require a pivot, we adjust scope in the next sprint without derailing the project.',
          },
          {
            q: isDe ? 'Gehört mir der Code, den Sie schreiben?' : 'Do I own the code you write?',
            a: isDe
              ? 'Ja. Von Tag eins an gehört Ihnen 100 % des geistigen Eigentums, der Designs und des Quellcodes. Es ist Ihr Unternehmen.'
              : "Yes. From day one, you own 100% of the IP, designs, and source code. It's your business.",
          },
          {
            q: isDe ? 'Wie transparent ist der Preis?' : 'How transparent is pricing?',
            a: isDe
              ? 'Wir arbeiten mit festen Budgets basierend auf klarem Umfang oder festen monatlichen Teamraten. Es gibt keine versteckten Gebühren oder unerwarteten Rechnungen.'
              : 'We work on fixed budgets based on clear scope or fixed monthly team rates. There are no hidden fees or surprise invoices.',
          },
        ]}
      />

      {/* Testimonials */}
      <section className="bg-sp-bg-medium py-24 md:py-32 lg:py-40">
        <div className="container mx-auto px-6 md:px-12">
          <Reveal>
            <div className="mx-auto mb-20 max-w-4xl text-center">
              <h2 className="text-sp-text-dark mb-10 text-4xl font-bold md:text-6xl">
                {isDe
                  ? 'Sie werden nicht der Erste sein, der uns vertraut'
                  : "You won't be the first to trust us"}
              </h2>
            </div>
          </Reveal>

          <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
            <Reveal direction="up" delay={0.1}>
              <div className="border-sp-border-testimonial flex h-full flex-col rounded-[2rem] border bg-white p-12 shadow-lg transition-transform duration-500 hover:-translate-y-2">
                <div className="mb-8 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="text-sp-star-filled h-6 w-6"
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
                    <ImageWithShimmer
                      src="/images/Calculate-you-MVP-investment-14-150x150.jpg"
                      alt="AAI Logo"
                      wrapperClassName="h-full w-full rounded-full"
                    />
                  </div>
                  <p className="text-sp-text-dark font-semibold">
                    Automotive Artificial Intelligence (AAI) GmBh
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.2}>
              <div className="border-sp-border-testimonial flex h-full flex-col rounded-[2rem] border bg-white p-12 shadow-lg transition-transform duration-500 hover:-translate-y-2">
                <div className="mb-8 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="text-sp-star-filled h-6 w-6"
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
                    <ImageWithShimmer
                      src="/images/1-150x150.png"
                      alt="Aghaz Invest Logo"
                      wrapperClassName="h-full w-full rounded-full"
                      className="p-2"
                    />
                  </div>
                  <p className="text-sp-text-dark font-semibold">Aghaz Invest</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Related reading */}
      <section className="bg-sp-bg-dark relative z-10 py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12">
          <Reveal>
            <h3 className="mb-8 text-center text-2xl font-bold text-white">
              {supportData[isDe ? 'de' : 'en'].caseStudies.readMore}
            </h3>
            <div className="mx-auto mb-10 max-w-2xl">
              <Link
                href={`/${locale}/${isDe ? 'fallstudien' : 'case-studies'}/democorder`}
                className="group border-sp-border-dark bg-sp-surface-subtle hover:border-sp-accent/40 hover:bg-sp-accent/10 flex items-center justify-between rounded-2xl border p-6 transition-all"
              >
                <div>
                  <div className="text-sp-accent mb-1 text-xs font-bold tracking-widest uppercase">
                    B2B SaaS · {isDe ? 'Fallstudie' : 'Case Study'}
                  </div>
                  <div className="text-lg font-semibold text-white">Democorder</div>
                  <div className="text-sm text-sp-text-muted">
                    {isDe
                      ? 'Von der Idee zur produktionsreifen B2B-Plattform in 6 Monaten'
                      : 'From idea to production-ready B2B SaaS in 6 months'}
                  </div>
                </div>
                <ArrowRight
                  className="text-sp-accent shrink-0 opacity-60 transition-all group-hover:translate-x-1 group-hover:opacity-100"
                  size={20}
                />
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href={`/${locale}/${isDe ? 'fallstudien' : 'case-studies'}`}
                className="hover:border-sp-accent hover:text-sp-accent border-sp-border-dark bg-sp-surface-subtle text-sp-text-muted rounded-full border px-6 py-2 text-sm font-semibold tracking-wide uppercase transition-colors"
              >
                {isDe ? 'Alle Fallstudien' : 'All Case Studies'}
              </Link>
            </div>
            <div className="mt-16 text-center">
              <p className="text-sp-text-muted mb-6 text-lg">
                {supportData[isDe ? 'de' : 'en'].services.stillHaveQuestions}
              </p>
              <Link
                href={`/${locale}/${isDe ? 'kontakt-solutionplus' : 'contact-us'}`}
                className="text-sp-accent hover:text-sp-accent-dark font-medium underline underline-offset-4"
              >
                {isDe ? 'Sprechen Sie mit uns' : "Let's talk"}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-sp-accent/5 border-sp-accent/10 relative overflow-x-clip border-t py-32">
        <div className="relative z-10 container mx-auto max-w-4xl px-6 text-center md:px-12">
          <Reveal>
            <h2 className="mb-8 text-4xl font-bold md:text-6xl">
              {isDe ? 'Erwecken Sie Ihre' : "Let's bring your"}{' '}
              <span className="text-sp-accent">{isDe ? 'Idee zum Leben.' : 'idea to life.'}</span>
            </h2>
            <p className="text-foreground/70 mb-12 text-xl">
              {isDe
                ? 'Egal, ob Sie ein Konzept validieren oder auf ein MVP hinsteuern, wir helfen Ihnen, den nächsten Schritt zu planen – ohne Fachjargon, ohne lange Wartezeiten.'
                : "Whether you're validating a concept or racing toward an MVP, we'll help you map the next step; no jargon, no long wait."}
            </p>
            <Link
              href={`/${locale}/${isDe ? 'kontakt-solutionplus' : 'contact-us'}`}
              className="bg-sp-accent group hover:bg-sp-accent-dark relative inline-block overflow-x-clip rounded-full px-10 py-5 text-lg font-bold tracking-wide text-white shadow-[0_4px_20px_-4px_rgba(255,112,67,0.4)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_40px_-4px_rgba(255,112,67,0.6)] active:scale-95"
            >
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_2s_infinite]" />
              {isDe ? 'Jetzt sprechen' : 'Start talking'}
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
