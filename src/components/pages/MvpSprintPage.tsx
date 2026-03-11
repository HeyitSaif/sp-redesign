'use client'
import { ProceduralIsometricBlocks } from '@/components/graphics/ProceduralIsometricBlocks'
import { ProceduralNetwork } from '@/components/graphics/ProceduralNetwork'
import { ProceduralDataGrid } from '@/components/graphics/ProceduralDataGrid'
import { ProceduralProcessPipeline } from '@/components/graphics/ProceduralProcessPipeline'

import { Reveal } from '@/components/animations/Reveal'
import { ArrowRight, Zap, Target, Rocket, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'
import { FloatiesBackground } from '@/components/ui/FloatiesBackground'
import { ContactFormSection } from '@/components/sections/ContactFormSection'
import { StickyQnA } from '@/components/sections/StickyQnA'
import { ImageWithShimmer } from '@/components/ui/ImageWithShimmer'

import { supportData } from '@/data/support-content'
import { Badge } from '@/components/ui/Badge'

export function MvpSprintPage({ locale }: { locale: string }) {
  const isDe = locale === 'de'

  return (
    <div className="relative flex w-full flex-col overflow-x-clip pt-32 pb-24">
      <FloatiesBackground />
      {/* Hero */}
      <section className="relative flex min-h-[70vh] items-center overflow-x-clip py-20">
        <div className="pointer-events-none absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay" />
        <div className="bg-sp-accent/10 pointer-events-none absolute top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[150px]" />

        <div className="relative z-10 container mx-auto grid items-center gap-16 px-6 md:px-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <div className="mb-8 flex flex-wrap items-center gap-3">
                <div className="bg-sp-accent/10 border-sp-accent/20 text-sp-accent inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium">
                  <Zap size={16} className="fill-sp-accent/50" />
                  {isDe ? 'MVP Sprint Paket' : 'MVP Sprint Package'}
                </div>
                <Badge variant="outline" className="text-white/60">
                  {supportData[isDe ? 'de' : 'en'].services.timeline}: 6–8 Weeks
                </Badge>
              </div>
              <h1 className="mb-8 text-4xl leading-[1.1] font-bold md:text-6xl lg:text-7xl">
                {isDe ? 'Von der Idee zur ' : 'From idea to '}{' '}
                <span className="text-gradient">{isDe ? 'Investorenreife' : 'investor-ready'}</span>{' '}
                <br className="hidden md:block" /> {isDe ? 'in wenigen Wochen' : 'in weeks.'}
              </h1>
              <p className="text-foreground/70 mb-10 max-w-xl text-xl leading-relaxed">
                {isDe
                  ? 'Wenn Geschwindigkeit zählt und Teams überlastet sind, scheint ein MVP unmöglich. Wir machen aus validierten Ideen funktionierende Produkte – schnell und ohne Einstellungsverzögerungen.'
                  : 'When speed matters and teams are stretched, getting an MVP live can feel impossible. We turn validated ideas into working products—quickly and without the hiring delays.'}
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href={`/${locale}/${isDe ? 'kontakt-solutionplus' : 'contact-us'}`}
                  className="bg-sp-accent group hover:bg-sp-accent-dark relative inline-flex items-center gap-2 overflow-x-clip rounded-full px-8 py-4 font-bold tracking-wide text-white shadow-[0_4px_20px_-4px_rgba(255,112,67,0.4)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_-4px_rgba(255,112,67,0.6)] active:scale-95"
                >
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_2s_infinite]" />
                  {isDe ? 'Jetzt starten' : 'Get Started'}{' '}
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal direction="left">
            <div className="bg-sp-bg-medium relative h-64 rotate-2 overflow-x-clip rounded-3xl border border-white/10 p-2 shadow-2xl transition-transform duration-500 hover:rotate-0 md:h-80 lg:h-[400px]">
              <ImageWithShimmer
                src="/images/When-your-roadmap-moves-faster-than-hiring-can-keep-upt-load-scaled-uai-2560x1706.jpg"
                alt="MVP Sprint Process"
                wrapperClassName="rounded-2xl h-full w-full"
                className="object-cover opacity-80 mix-blend-luminosity transition-all duration-700 hover:mix-blend-normal"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why it matters */}
      <section className="bg-sp-bg-dark relative border-y border-white/5 py-24">
        <div className="container mx-auto px-6 text-center md:px-12">
          <Reveal>
            <h2 className="mb-16 text-3xl font-bold md:text-5xl">
              {isDe ? 'Warum es für Ihr Geschäft wichtig ist' : 'Why it matters for your business'}
            </h2>
          </Reveal>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <Target size={32} className="text-sp-accent" />,
                title: isDe ? 'Fokus auf das Kerngeschäft' : 'Focus on your business',
                desc: isDe
                  ? 'Konzentrieren Sie sich auf Ihr Geschäft, während wir die Lieferung übernehmen.'
                  : 'Focus on your business while we handle delivery.',
              },
              {
                icon: <Rocket size={32} className="text-sp-accent" />,
                title: isDe ? 'Schneller am Markt' : 'Get to market faster',
                desc: isDe
                  ? 'Seien Sie schneller am Markt und bleiben Sie der Konkurrenz voraus.'
                  : 'Get to market faster and stay ahead of competitors.',
              },
              {
                icon: <Clock size={32} className="text-sp-accent" />,
                title: isDe ? 'Risiken minimieren' : 'Avoid hiring risks',
                desc: isDe
                  ? 'Vermeiden Sie das Risiko und die Kosten für die Rekrutierung eines eigenen Entwicklerteams.'
                  : 'Avoid the risk and cost of recruiting a full development team.',
              },
              {
                icon: <ShieldCheck size={32} className="text-sp-accent" />,
                title: isDe ? 'Investoren überzeugen' : 'Impress investors',
                desc: isDe
                  ? 'Beeindrucken Sie Investoren mit einem funktionierenden, testbaren Produkt.'
                  : 'Impress investors with a working, testable product.',
              },
            ].map((feature, i) => (
              <Reveal key={i} delay={0.1 * (i + 1)} direction="up">
                <div className="bg-sp-bg-medium group relative h-full overflow-hidden rounded-3xl border border-black/5 p-8 transition-all duration-300 hover:border-black/20">
                  <div className="bg-sp-bg-dark relative mb-6 h-32 w-full overflow-hidden rounded-2xl border border-white/5">
                    {i === 0 && <ProceduralProcessPipeline steps={3} animated={true} />}
                    {i === 1 && <ProceduralNetwork nodeCount={12} animated={true} />}
                    {i === 2 && <ProceduralDataGrid animated={true} />}
                    {i === 3 && <ProceduralIsometricBlocks layers={2} animated={true} />}
                    <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/40 backdrop-blur-[2px] transition-colors duration-500 group-hover:bg-black/20">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-sp-text-dark relative z-20 mb-4 text-xl font-bold">
                    {feature.title}
                  </h3>
                  <p className="text-sp-text-on-light relative z-20 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What You'll Get */}
      <section className="relative overflow-x-clip py-24">
        <div className="bg-sp-accent/5 pointer-events-none absolute top-1/2 right-0 h-[500px] w-[500px] -translate-y-1/2 rounded-full blur-[120px]" />
        <div className="container mx-auto grid items-center gap-16 px-6 md:px-12 lg:grid-cols-2">
          <Reveal direction="right">
            <div className="bg-sp-bg-medium relative h-64 overflow-x-clip rounded-3xl border border-black/10 p-2 md:h-80 lg:h-[400px]">
              <ImageWithShimmer
                src="/images/What-youll-get-14-uai-1460x973.jpg"
                alt="What you'll get"
                wrapperClassName="rounded-2xl h-full w-full"
                className="object-cover opacity-80 mix-blend-luminosity transition-all duration-700 hover:mix-blend-normal"
              />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <h2 className="mb-10 text-3xl font-bold md:text-5xl">
                {isDe ? 'Was Sie bekommen' : "What You'll Get"}
              </h2>
            </Reveal>
            <div className="space-y-6">
              {[
                isDe
                  ? 'UX/UI Design, das Ihre Marke und Ziele widerspiegelt'
                  : 'UX/UI design that reflects your brand and goal',
                isDe
                  ? 'Schnelle Sprints mit QA für eine kontrollierte Lieferung'
                  : 'Rapid sprints with QA for fast, controlled delivery',
                isDe
                  ? 'Transparentes Projektmanagement für volle Kontrolle'
                  : 'Transparent project management so you always know progress',
                isDe
                  ? 'Vollständiger Code und Dokumentation, bereit zur Übergabe'
                  : 'Full code and documentation ready for handover',
              ].map((item, i) => (
                <Reveal key={i} delay={0.1 * i} direction="left">
                  <div className="hover:border-sp-accent/30 bg-sp-bg-medium flex items-start gap-4 rounded-2xl border border-black/5 p-6 transition-colors">
                    <CheckCircle2 className="text-sp-accent mt-1 shrink-0" />
                    <p className="text-sp-text-on-light leading-relaxed font-medium">{item}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
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

      {/* Calculate your team setup / Contact */}
      <section className="bg-sp-bg-medium relative overflow-x-clip py-24 md:py-32 lg:py-40">
        <div className="bg-sp-accent/10 absolute top-1/2 left-1/2 h-[1200px] w-[1200px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[200px]" />

        <div className="relative z-10 container mx-auto grid items-start gap-16 px-6 md:px-12 lg:grid-cols-2">
          <Reveal>
            <div className="max-w-xl">
              <h2 className="text-sp-text-dark mb-10 text-5xl leading-[1.1] font-black tracking-tight md:text-6xl">
                {isDe ? 'Kalkulieren Sie Ihr Team-Setup' : 'Calculate your team setup'}
              </h2>
              <p className="text-sp-text-on-light text-2xl leading-relaxed font-light">
                {isDe
                  ? 'Erhalten Sie in wenigen Minuten eine grobe Schätzung. Keine versteckten Gebühren, keine Überraschungen; nur eine klare Schätzung basierend auf dem Umfang und Zeitplan Ihres Projekts.'
                  : "Get a ballpark figure in minutes. No hidden fees, no surprises; just a clear estimate based on your project's scope and timeline."}
              </p>
            </div>
            <div className="bg-sp-bg-medium mt-12 h-64 overflow-x-clip rounded-3xl border border-black/10 p-2 md:h-80 lg:h-96">
              <ImageWithShimmer
                src="/images/Calculate-your-team-setup-14-1-scaled-uai-2560x1706.jpg"
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
              ? 'Wir haben mehrere parallele Releases. Können Sie helfen, den Zeitplan einzuhalten?'
              : '"We have multiple releases happening at once. Can you help keep them on schedule?"',
            a: isDe
              ? 'Ja. Wir managen parallele Lieferströme mit dedizierten Sprint-Leads, die Abhängigkeiten koordinieren, Blockaden frühzeitig lösen und Release-Termine realistisch und zuverlässig halten.'
              : 'Yes. We manage parallel delivery streams with dedicated sprint leads who coordinate dependencies, resolve blockers early, and keep release dates realistic and reliable.',
          },
          {
            q: isDe
              ? 'Wie gehen Sie beim Onboarding für komplexe Projekte vor?'
              : '"How do you handle onboarding for complex projects?"',
            a: isDe
              ? 'Wir führen einen strukturierten Onboarding-Prozess durch, der Ihre Workflows, Tools und Prioritäten abbildet. Innerhalb der ersten Woche ist unser Team auf Ihre Prozesse abgestimmt, sodass die Lieferung reibungslos beginnt, ohne Ihre laufende Arbeit zu unterbrechen.'
              : 'We run a structured onboarding process that maps your workflows, tools, and priorities. Within the first week, our team is aligned on your processes so delivery starts smoothly without disrupting your ongoing work.',
          },
          {
            q: isDe
              ? 'Was passiert, wenn sich unsere Anforderungen während des Projekts ändern?'
              : '"What if our requirements change mid-project?"',
            a: isDe
              ? 'Wir bauen Flexibilität in unsere Sprintplanung ein. Alle Änderungen werden auf ihre Auswirkungen geprüft, neu priorisiert und implementiert, ohne den gesamten Lieferzeitplan zu gefährden.'
              : 'We build flexibility into our sprint planning. Any changes are assessed for impact, reprioritized, and implemented without derailing the overall delivery timeline.',
          },
          {
            q: isDe
              ? 'Wie stellen Sie Sicherheit und Compliance sicher?'
              : 'How do you ensure security and compliance?"',
            a: isDe
              ? 'Wir befolgen sichere Programmierpraktiken, rollenbasierte Zugriffskontrollen und richten uns nach branchenspezifischen Compliance-Standards aus, die für Ihren Sektor relevant sind, sei es Automobil, Medizin oder Energie.'
              : "We follow secure coding practices, role-based access controls, and align with industry compliance standards relevant to your sector, whether it's automotive, medical, or energy.",
          },
          {
            q: isDe
              ? 'Können Sie sich in unsere bestehenden Projektmanagement-Tools integrieren?'
              : '"Can you integrate with our existing project management tools?"',
            a: isDe
              ? 'Ja. Wir passen uns an Ihre bevorzugten Plattformen an; egal ob Jira, Trello, Azure DevOps oder andere – so bleiben Reporting, Tracking und Zusammenarbeit in Ihrer Umgebung vollständig sichtbar.'
              : 'Yes. We adapt to your preferred platforms; whether Jira, Trello, Azure DevOps, or others — so reporting, tracking, and collaboration stay fully visible in your environment.',
          },
        ]}
      />

      {/* Final CTA */}
      <section className="bg-sp-bg-dark border-sp-accent/10 relative overflow-x-clip border-t py-32">
        <div className="relative z-10 container mx-auto max-w-4xl px-6 text-center md:px-12">
          <Reveal>
            <h2 className="mb-8 text-4xl font-bold md:text-6xl">
              {isDe ? 'Werden Sie aktiv,' : 'Get moving before'}{' '}
              <span className="text-sp-accent">
                {isDe ? 'bevor der Markt es tut.' : 'the market does.'}
              </span>
            </h2>
            <p className="text-foreground/70 mb-12 text-xl">
              {isDe
                ? 'Wir verwandeln Ihr validiertes Konzept in ein funktionierendes Produkt – mit Geschwindigkeit, Klarheit und Vertrauen.'
                : "We'll turn your validated concept into a working product with speed, clarity, and confidence."}
            </p>
            <Link
              href={`/${locale}/${isDe ? 'kontakt-solutionplus' : 'contact-us'}`}
              className="bg-sp-accent group hover:bg-sp-accent-dark relative inline-block overflow-x-clip rounded-full px-10 py-5 text-lg font-bold tracking-wide text-white shadow-[0_4px_20px_-4px_rgba(255,112,67,0.4)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_40px_-4px_rgba(255,112,67,0.6)] active:scale-95"
            >
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_2s_infinite]" />
              {isDe ? 'Kalkulieren Sie Ihr Team' : 'Calculate your team setup'}
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Related reading */}
      <section className="bg-sp-bg-dark relative z-10 py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12">
          <Reveal>
            <h3 className="mb-8 text-center text-2xl font-bold text-white">
              {supportData[isDe ? 'de' : 'en'].caseStudies.readMore}
            </h3>
            <div className="mx-auto mb-10 grid max-w-3xl gap-4 md:grid-cols-2">
              <Link
                href={`/${locale}/${isDe ? 'fallstudien' : 'case-studies'}/democorder`}
                className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-6 transition-all hover:border-sp-accent/40 hover:bg-sp-accent/5"
              >
                <div>
                  <div className="text-sp-accent mb-1 text-xs font-bold uppercase tracking-widest">B2B SaaS</div>
                  <div className="text-base font-semibold text-white">Democorder</div>
                  <div className="text-xs text-white/60">{isDe ? 'Konzept → Produktion in 6 Monaten' : 'Concept → production in 6 months'}</div>
                </div>
                <ArrowRight className="text-sp-accent shrink-0 opacity-60 transition-all group-hover:translate-x-1 group-hover:opacity-100" size={18} />
              </Link>
              <Link
                href={`/${locale}/${isDe ? 'fallstudien' : 'case-studies'}/tecsofiy`}
                className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-6 transition-all hover:border-sp-accent/40 hover:bg-sp-accent/5"
              >
                <div>
                  <div className="text-sp-accent mb-1 text-xs font-bold uppercase tracking-widest">B2B Automation</div>
                  <div className="text-base font-semibold text-white">Tecsofy</div>
                  <div className="text-xs text-white/60">{isDe ? 'Kern-Automation in 1 Woche live' : 'Core automations live in 1 week'}</div>
                </div>
                <ArrowRight className="text-sp-accent shrink-0 opacity-60 transition-all group-hover:translate-x-1 group-hover:opacity-100" size={18} />
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href={`/${locale}/${isDe ? 'fallstudien' : 'case-studies'}`}
                className="hover:border-sp-accent hover:text-sp-accent rounded-full border border-white/10 bg-white/5 px-6 py-2 text-sm font-semibold tracking-wide text-white/80 uppercase transition-colors"
              >
                {isDe ? 'Alle Fallstudien' : 'All Case Studies'}
              </Link>
            </div>
            <div className="mt-16 text-center">
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
