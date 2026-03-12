'use client'
import { ProceduralIsometricBlocks } from '@/components/graphics/ProceduralIsometricBlocks'
import { ProceduralNetwork } from '@/components/graphics/ProceduralNetwork'
import { ProceduralDataGrid } from '@/components/graphics/ProceduralDataGrid'
import { ProceduralProcessPipeline } from '@/components/graphics/ProceduralProcessPipeline'
import { Button } from '@/components/ui/Button'

import { Reveal } from '@/components/animations/Reveal'
import { ArrowRight, Users, CheckCircle2, Globe2, Gauge, LineChart, Code2 } from 'lucide-react'
import Link from 'next/link'
import { FloatiesBackground } from '@/components/ui/FloatiesBackground'
import { ContactFormSection } from '@/components/sections/ContactFormSection'
import { StickyQnA } from '@/components/sections/StickyQnA'
import { ImageWithShimmer } from '@/components/ui/ImageWithShimmer'

import { supportData } from '@/data/support-content'
import { Badge } from '@/components/ui/Badge'

export function DedicatedTeamsPage({ locale }: { locale: string }) {
  const isDe = locale === 'de'

  return (
    <div className="relative flex w-full flex-col overflow-x-clip pt-24 pb-16 md:pt-32 md:pb-24">
      <FloatiesBackground />
      {/* Hero */}
      <section className="relative flex min-h-[70vh] items-center overflow-x-clip py-12 md:py-16 lg:py-20">
        <div className="noise-overlay pointer-events-none absolute inset-0 opacity-10 mix-blend-overlay" />
        <div className="bg-sp-accent/10 pointer-events-none absolute top-0 right-0 h-[800px] w-[800px] rounded-full blur-[150px]" />

        <div className="relative z-10 container mx-auto grid items-center gap-10 px-5 md:gap-16 md:px-8 lg:grid-cols-2 lg:px-12">
          <div>
            <Reveal>
              <div className="bg-sp-accent/10 border-sp-accent/20 text-sp-accent mb-8 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium">
                <Users size={16} className="text-sp-accent/70" />
                {isDe ? 'Dedizierte Teams' : 'Dedicated Delivery Teams'}
              </div>
              <h1 className="mb-8 text-3xl leading-[1.1] font-bold md:text-3xl md:text-4xl md:text-5xl md:text-6xl lg:text-7xl">
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
                <Button
                  variant="primary"
                  size="md"
                  href={`/${locale}/${isDe ? 'kontakt-solutionplus' : 'contact-us'}`}
                  data-analytics-event="cta_click"
                  data-analytics-event-label={isDe ? 'Gespräch vereinbaren' : 'Get Started'}
                  data-analytics-location="dedicated_teams_hero"
                  data-analytics-destination={`/${locale}/${isDe ? 'kontakt-solutionplus' : 'contact-us'}`}
                >
                  {isDe ? 'Gespräch vereinbaren' : 'Get Started'}{' '}
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Button>
                <Button
                  variant="secondary"
                  size="md"
                  href="#how-it-works"
                  data-analytics-event="link_click"
                  data-analytics-event-label={isDe ? 'Modelle ansehen' : 'View models'}
                  data-analytics-location="dedicated_teams_hero"
                  data-analytics-link-url="#how-it-works"
                >
                  {isDe ? 'Modelle ansehen' : 'View models'}
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal direction="left">
            <div className="bg-sp-bg-medium relative h-64 rotate-2 overflow-x-clip rounded-3xl border border-black/10 p-2 shadow-2xl transition-transform duration-500 hover:rotate-0 md:h-80 lg:h-[400px]">
              <ImageWithShimmer
                src="/images/When-speed-matters-and-teams-are-stretched-getting-an-MVP-live-can-feel-impossible._E2_80_A8-12-scaled-uai-2560x1706.jpg"
                alt="Dedicated Delivery Teams"
                wrapperClassName="rounded-2xl h-full w-full"
                className="object-cover opacity-80 mix-blend-luminosity transition-all duration-700 hover:mix-blend-normal"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why it matters */}
      <section
        id="how-it-works"
        className="bg-sp-bg-dark border-sp-border-dark relative scroll-mt-10 border-y py-12 md:mt-16 md:mt-24 md:py-16 lg:py-24"
      >
        <div className="container mx-auto px-5 text-center md:px-12">
          <Reveal>
            <h2 className="mb-10 text-3xl font-bold md:mb-16 md:text-3xl md:text-4xl md:text-5xl">
              {isDe ? 'Warum es für Ihr Geschäft wichtig ist' : 'Why it matters for your business'}
            </h2>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
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
                <div className="bg-sp-bg-medium group relative flex h-full flex-col overflow-hidden rounded-3xl border border-black/5 p-6 transition-all duration-300 hover:border-black/10 md:p-6 lg:p-8">
                  <div className="bg-sp-bg-dark border-sp-border-dark relative mb-6 h-32 w-full shrink-0 overflow-hidden rounded-2xl border">
                    {i === 0 && <ProceduralProcessPipeline steps={4} animated={true} />}
                    {i === 1 && <ProceduralNetwork nodeCount={12} animated={true} />}
                    {i === 2 && <ProceduralDataGrid animated={true} />}
                    {i === 3 && <ProceduralIsometricBlocks layers={3} animated={true} />}
                    <div className="bg-sp-bg-dark/60 group-hover:bg-sp-bg-dark/40 absolute inset-0 z-10 flex items-center justify-center transition-colors duration-500">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-sp-text-dark relative z-20 mb-4 text-xl font-bold">
                    {feature.title}
                  </h3>
                  <p className="text-sp-text-on-light relative z-20 flex-1 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What You'll Get */}
      <section className="relative overflow-x-clip py-12 md:py-16 lg:py-24">
        <div className="bg-sp-accent/5 pointer-events-none absolute top-1/2 right-0 h-[500px] w-[500px] -translate-y-1/2 rounded-full blur-[120px]" />
        <div className="container mx-auto grid items-center gap-10 px-5 md:gap-16 md:px-8 lg:grid-cols-2 lg:px-12">
          <div>
            <Reveal>
              <h2 className="mb-10 text-3xl font-bold md:text-3xl md:text-4xl md:text-5xl">
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
                  <div className="hover:border-sp-accent/40 bg-sp-bg-medium flex items-start gap-4 overflow-hidden rounded-2xl border border-black/5 p-5 transition-colors md:p-6">
                    <Code2 className="text-sp-accent mt-1 shrink-0" />
                    <p className="text-sp-text-on-light leading-relaxed font-medium">{item}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal direction="left">
            <div className="bg-sp-bg-medium relative h-64 overflow-x-clip rounded-3xl border border-black/10 p-2 md:h-80 lg:h-[400px]">
              <ImageWithShimmer
                src="/images/What-youll-ge-t-14-scaled-uai-2560x1706.jpg"
                alt="What you'll get"
                wrapperClassName="rounded-2xl h-full w-full"
                className="object-cover opacity-80 mix-blend-luminosity transition-all duration-700 hover:mix-blend-normal"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Who is it for */}
      <section className="bg-sp-bg-dark border-sp-border-dark relative border-y py-12 md:py-16 lg:py-24">
        <div className="container mx-auto px-5 text-center md:px-12">
          <Reveal>
            <h2 className="mb-10 text-3xl font-bold md:mb-16 md:text-3xl md:text-4xl md:text-5xl">
              {isDe ? 'Für wen ist das?' : 'Who is it for'}
            </h2>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-3 md:gap-6 md:gap-8">
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
                <div className="hover:border-sp-accent/40 bg-sp-bg-medium flex h-full flex-col items-center overflow-hidden rounded-2xl border border-black/5 p-5 text-center transition-all duration-300 md:p-6 md:p-8">
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

      {/* Calculate your team setup / Contact */}
      <section className="bg-sp-bg-medium relative overflow-x-clip py-12 md:py-16 lg:py-24 xl:py-32">
        <div className="bg-sp-accent/10 absolute top-1/2 left-1/2 h-[1200px] w-[1200px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[150px]" />

        <div className="relative z-10 container mx-auto grid items-start gap-10 px-5 md:gap-16 md:px-8 lg:grid-cols-2 lg:px-12">
          <Reveal>
            <div className="max-w-xl">
              <h2 className="text-sp-text-dark mb-10 text-3xl leading-[1.1] font-black tracking-tight md:text-3xl md:text-4xl md:text-5xl md:text-6xl">
                {isDe ? 'Kalkulieren Sie Ihr Team-Setup' : 'Calculate your team setup'}
              </h2>
              <p className="text-sp-text-on-light text-2xl leading-relaxed font-light">
                {isDe
                  ? 'Schätzen Sie Ihre Teamgröße und die monatlichen Kosten. Wir zeigen Ihnen, wie Sie schnell operativ werden und sicherstellen, dass das Team ab der ersten Woche liefert.'
                  : "Estimate your team size and monthly commitment. We'll share how to make it operational fast and ensure it's delivering from week one."}
              </p>
            </div>
            <div className="bg-sp-bg-medium mt-8 h-64 overflow-x-clip rounded-3xl border border-black/10 p-2 md:mt-12 md:h-80 lg:h-96">
              <ImageWithShimmer
                src="/images/Calculate-you-MVP-investment-14-uai-1460x973.jpg"
                alt="Calculate your team setup"
                wrapperClassName="rounded-2xl h-full w-full"
                className="object-cover opacity-80 mix-blend-luminosity transition-all duration-700 hover:mix-blend-normal"
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
      <section className="bg-sp-bg-dark border-sp-border-dark border-t py-12 md:py-16 lg:py-24 xl:py-32">
        <div className="container mx-auto px-5 md:px-8 lg:px-12">
          <Reveal>
            <div className="mx-auto mb-20 max-w-4xl text-center">
              <h2 className="text-sp-text-dark mb-10 text-3xl font-bold md:text-3xl md:text-4xl md:text-5xl md:text-6xl">
                {isDe
                  ? 'Sie werden nicht der Erste sein, der uns vertraut'
                  : "You won't be the first to trust us"}
              </h2>
            </div>
          </Reveal>

          <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2 md:gap-6 md:gap-8 md:gap-12">
            <Reveal direction="up" delay={0.1}>
              <div className="border-sp-border-testimonial flex h-full flex-col overflow-hidden rounded-2xl border bg-white p-5 shadow-lg transition-transform duration-500 hover:-translate-y-2 md:p-6 md:p-8 md:p-12">
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
              <div className="border-sp-border-testimonial flex h-full flex-col overflow-hidden rounded-2xl border bg-white p-5 shadow-lg transition-transform duration-500 hover:-translate-y-2 md:p-6 md:p-8 md:p-12">
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

      {/* Final CTA */}
      <section className="bg-sp-bg-medium border-sp-accent/10 relative overflow-x-clip border-t py-12 md:py-16 lg:py-24">
        <div className="relative z-10 container mx-auto max-w-4xl px-5 text-center md:px-12">
          <Reveal>
            <h2 className="text-sp-text-dark mb-8 text-3xl font-bold md:text-3xl md:text-4xl md:text-5xl md:text-6xl">
              {isDe ? 'Geben Sie Ihrem Produkt' : 'Give your product'}{' '}
              <span className="text-sp-accent">
                {isDe ? 'ein zweites Leben.' : 'a second life.'}
              </span>
            </h2>
            <p className="text-sp-text-on-light mb-8 text-xl md:mb-12">
              {isDe
                ? 'Wir modernisieren Ihr Produkt in Phasen, sodass es live bleibt, während wir es verbessern.'
                : 'We modernize your product in phases so it stays live while we improve it.'}
            </p>
            <Button
              variant="primary"
              size="lg"
              href={`/${locale}/${isDe ? 'kontakt-solutionplus' : 'contact-us'}`}
              data-analytics-event="cta_click"
              data-analytics-event-label={
                isDe ? 'Berechnen Sie Ihr Team-Setup' : 'Calculate your team setup'
              }
              data-analytics-location="dedicated_teams_cta"
              data-analytics-destination={`/${locale}/${isDe ? 'kontakt-solutionplus' : 'contact-us'}`}
            >
              {isDe ? 'Berechnen Sie Ihr Team-Setup' : 'Calculate your team setup'}
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Related reading */}
      <section className="bg-sp-bg-dark relative z-10 py-12 md:py-16 lg:py-24">
        <div className="container mx-auto px-5 md:px-8 lg:px-12">
          <Reveal>
            <h3 className="mb-8 text-center text-2xl font-bold text-white">
              {supportData[isDe ? 'de' : 'en'].caseStudies.readMore}
            </h3>
            <div className="mx-auto mb-10 max-w-2xl">
              <Link
                href={`/${locale}/${isDe ? 'fallstudien' : 'case-studies'}/automotive-ai`}
                className="group border-sp-border-dark bg-sp-surface-subtle hover:border-sp-accent/40 hover:bg-sp-accent/10 flex items-center justify-between overflow-hidden rounded-2xl border p-5 transition-all md:p-6"
              >
                <div>
                  <div className="text-sp-accent mb-1 text-xs font-bold tracking-widest uppercase">
                    Automotive AI · {isDe ? 'Dedizierte Teams' : 'Dedicated Teams'}
                  </div>
                  <div className="text-lg font-semibold text-white">Automotive AI (AAI)</div>
                  <div className="text-sm text-white/60">
                    {isDe
                      ? '2 Plattformen parallel gebaut, null Delivery-Reibung'
                      : '2 platforms built in parallel, zero delivery friction'}
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
                className="hover:border-sp-accent hover:text-sp-accent border-sp-border-dark bg-sp-surface-subtle text-sp-text-muted rounded-full border px-5 py-2 text-sm font-semibold tracking-wide uppercase transition-colors md:px-6"
              >
                {isDe ? 'Alle Fallstudien' : 'All Case Studies'}
              </Link>
            </div>
            <div className="mt-10 text-center md:mt-16">
              <p className="text-foreground/70 mb-6 text-lg">
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
    </div>
  )
}
