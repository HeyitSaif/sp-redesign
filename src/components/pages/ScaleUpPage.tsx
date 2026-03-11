import { Reveal } from '@/components/animations/Reveal'
import {
  ArrowRight,
  Zap,
  Target,
  Shield,
  Building2,
  Code,
  Cog,
  Activity,
  Briefcase,
} from 'lucide-react'
import Link from 'next/link'
import { FloatiesBackground } from '@/components/ui/FloatiesBackground'
import { ContactFormSection } from '@/components/sections/ContactFormSection'
import { StickyQnA } from '@/components/sections/StickyQnA'

export function ScaleUpPage({ locale }: { locale: string }) {
  const isDe = locale === 'de'

  return (
    <div className="relative flex w-full flex-col overflow-x-hidden pt-32 pb-24">
      <FloatiesBackground />
      {/* Hero Section */}
      <section className="relative flex min-h-[70vh] items-center overflow-x-hidden py-20">
        <div className="bg-sp-accent/5 pointer-events-none absolute inset-0 blur-[100px]" />
        <div className="relative z-10 container mx-auto max-w-4xl px-6 text-center md:px-12">
          <Reveal>
            <span className="text-sp-accent mb-8 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium">
              {isDe ? 'Für Scale-Ups' : 'For Scale-ups'}
            </span>
            <h1 className="mb-8 text-4xl leading-[1.1] font-bold md:text-7xl">
              {isDe
                ? 'Ihre Roadmap ist ehrgeizig. Wir helfen Ihnen, ihr'
                : 'Your roadmap is ambitious. We help you stay'}{' '}
              <span className="text-gradient">
                {isDe ? 'einen Schritt voraus zu sein.' : 'ahead of it.'}
              </span>
            </h1>
            <p className="text-foreground/70 mx-auto mb-12 max-w-2xl text-xl">
              {isDe
                ? 'Wachstum ist das Ziel - bis es unübersichtlich wird. Sie liefern schneller, vergrößern Ihre Teams und jonglieren mit der Komplexität. Bleiben Sie zuverlässig, während Sie an Schwung gewinnen.'
                : "Growth is the goal—until it gets messy. You're shipping faster, scaling teams, and juggling complexity. Stay reliable while keeping momentum."}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href={`/${locale}/${isDe ? 'kontakt-solutionplus' : 'contact-us'}`}
                className="bg-sp-accent group hover:bg-sp-accent-dark relative inline-flex items-center gap-2 overflow-x-hidden rounded-full px-8 py-4 font-bold tracking-wide text-white shadow-[0_4px_20px_-4px_rgba(255,112,67,0.4)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_-4px_rgba(255,112,67,0.6)] active:scale-95"
              >
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_2s_infinite]" />
                {isDe ? 'Gespräch vereinbaren' : 'Set up a short call'}{' '}
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="#how-we-help"
                className="rounded-full border border-white/10 bg-white/5 px-8 py-4 font-medium text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10 active:scale-95"
              >
                {isDe ? 'Mehr erfahren' : 'Learn more'}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why Scaleups Work With Us */}
      <section
        id="how-we-help"
        className="bg-sp-bg-dark relative scroll-mt-24 overflow-x-hidden border-y border-white/5 py-24"
      >
        <div className="bg-sp-accent/10 pointer-events-none absolute top-1/2 right-0 h-1/2 w-1/2 -translate-y-1/2 rounded-full blur-[150px]" />
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <Reveal direction="right">
              <div className="bg-sp-bg-medium relative overflow-x-hidden rounded-3xl border border-white/10 p-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://solutionplus.io/wp-content/uploads/2025/09/Why-Scaleups-Work-With-Us-14-uai-1460x973.jpg"
                  alt="Why Scaleups Work With Us"
                  className="h-auto w-full rounded-2xl object-cover opacity-80 mix-blend-luminosity transition-all duration-700 hover:mix-blend-normal"
                />
              </div>
            </Reveal>
            <div>
              <Reveal>
                <h2 className="mb-8 text-3xl font-bold md:text-5xl">
                  {isDe ? 'Warum Scale-Ups mit uns arbeiten' : 'Why Scaleups Work With Us'}
                </h2>
              </Reveal>
              <div className="space-y-6">
                {[
                  isDe
                    ? 'Ihr internes Team ist ausgelastet, aber Einstellungen dauern zu lange.'
                    : 'Your internal team is at capacity, but hiring takes too long.',
                  isDe
                    ? 'Sie müssen aggressive Lieferziele erreichen, ohne die Qualität zu mindern.'
                    : 'You need to hit aggressive delivery targets without lowering quality.',
                  isDe
                    ? 'Sie erschließen neue Märkte und brauchen funktionsübergreifende Engineering-Teams, denen Sie vertrauen können.'
                    : "You're entering new markets and need cross-functional engineering teams you can trust.",
                  isDe
                    ? 'Sie sind aus Patchwork-Anbietern herausgewachsen und brauchen echte Lieferverantwortung.'
                    : "You've outgrown patchwork vendors, and need true delivery ownership.",
                ].map((item, i) => (
                  <Reveal key={i} delay={0.1 * i} direction="left">
                    <div className="hover:border-sp-accent/30 bg-sp-bg-medium flex gap-4 rounded-2xl border border-white/5 p-6 transition-colors">
                      <div className="mt-1 shrink-0">
                        <Target className="text-sp-accent" />
                      </div>
                      <p className="text-foreground/80 leading-relaxed font-medium">{item}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Bring To The Table */}
      <section className="relative py-32">
        <div className="container mx-auto px-6 text-center md:px-12">
          <Reveal>
            <h2 className="mb-16 text-3xl font-bold md:text-5xl">
              {isDe ? 'Was wir einbringen' : 'What We Bring To The Table'}
            </h2>
          </Reveal>

          <div className="grid gap-8 text-left md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <Code size={32} className="text-sp-accent" />,
                title: isDe ? 'IT-Talente' : 'IT talent',
                desc: isDe
                  ? 'Mit Erfahrung in komplexen, regulierten Branchen.'
                  : "That's experienced in complex, regulated industries.",
              },
              {
                icon: <Building2 size={32} className="text-sp-accent" />,
                title: isDe ? 'Dedizierte Teams' : 'Dedicated teams',
                desc: isDe
                  ? 'Die mit Ihnen wachsen – voll integriert, ohne ständige Betreuung.'
                  : 'That grow with you fully integrated, no hand-holding.',
              },
              {
                icon: <Shield size={32} className="text-sp-accent" />,
                title: isDe ? 'Deutsch-geführte' : 'German-led',
                desc: isDe
                  ? 'Lieferprozesse, die Ihren Qualitätsstandards entsprechen.'
                  : 'Delivery operations that match your quality standards.',
              },
              {
                icon: <Zap size={32} className="text-sp-accent" />,
                title: isDe ? 'Schnelle Sprints' : 'Rapid sprints',
                desc: isDe
                  ? 'Die sich an die Geschwindigkeit Ihres Teams und Git-basierte Prozesse anpassen.'
                  : 'That align with your team velocity and Git-based processes.',
              },
            ].map((feature, i) => (
              <Reveal key={i} delay={0.1 * (i + 1)} direction="up">
                <div className="bg-sp-bg-medium h-full rounded-3xl border border-white/5 p-8 transition-all duration-300 hover:border-white/20">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                    {feature.icon}
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-white">{feature.title}</h3>
                  <p className="text-foreground/60 leading-relaxed">{feature.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work (BOT Model) */}
      <section className="bg-sp-bg-dark py-24">
        <div className="container mx-auto px-6 md:px-12">
          <Reveal>
            <h2 className="mb-16 text-center text-3xl font-bold md:text-5xl">
              {isDe ? 'Wie wir arbeiten' : 'How We Work'}
            </h2>
          </Reveal>

          <div className="grid gap-8 md:grid-cols-3">
            <Reveal delay={0.1}>
              <div className="group relative rounded-3xl border border-white/5 bg-gradient-to-br from-[#1a1c1e] to-[#0f1112] p-10 transition-transform duration-300 hover:-translate-y-2">
                <div className="text-sp-accent/20 mb-6 font-serif text-5xl font-bold">1</div>
                <h3 className="mb-4 text-2xl font-bold">Build</h3>
                <p className="text-foreground/60 leading-relaxed">
                  {isDe
                    ? 'Einsatz eines Full-Stack-Delivery-Teams, um Funktionen, Produkte oder Plattformen unter engen Zeitvorgaben zu realisieren.'
                    : 'Deploy a full-stack delivery team to handle features, products, or platforms under tight timelines.'}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="group relative rounded-3xl border border-white/5 bg-gradient-to-br from-[#1a1c1e] to-[#0f1112] p-10 transition-transform duration-300 hover:-translate-y-2">
                <div className="text-sp-accent/20 mb-6 font-serif text-5xl font-bold">2</div>
                <h3 className="mb-4 text-2xl font-bold">Operate</h3>
                <p className="text-foreground/60 leading-relaxed">
                  {isDe
                    ? 'Wir leiten die Abläufe, integrieren uns in Ihre Prozesse und stellen die Liefergeschwindigkeit sicher.'
                    : 'We manage the operations, integrate into your workflows, and ensure delivery velocity.'}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="group relative rounded-3xl border border-white/5 bg-gradient-to-br from-[#1a1c1e] to-[#0f1112] p-10 transition-transform duration-300 hover:-translate-y-2">
                <div className="text-sp-accent/20 mb-6 font-serif text-5xl font-bold">3</div>
                <h3 className="mb-4 text-2xl font-bold">Transfer</h3>
                <p className="text-foreground/60 leading-relaxed">
                  {isDe
                    ? 'Verlegen Sie wichtige Mitarbeiter bei Bedarf an Ihren Hauptsitz, um eine langfristige Integration und die Sicherung des geistigen Eigentums zu gewährleisten.'
                    : 'Relocate key contributors to your HQ when needed, for long-term integration and IP retention.'}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="relative overflow-x-hidden py-24">
        <div className="container mx-auto px-6 text-center md:px-12">
          <Reveal>
            <h2 className="mb-16 text-3xl font-bold md:text-5xl">
              {isDe ? 'Branchen, mit denen wir gearbeitet haben' : 'Industries We Worked With'}
            </h2>
          </Reveal>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { name: isDe ? 'Automotive' : 'Automotive', icon: <Cog /> },
              { name: isDe ? 'Energie' : 'Energy', icon: <Zap /> },
              { name: 'Web3', icon: <Activity /> },
              { name: 'Fintech', icon: <Briefcase /> },
              { name: 'Healthcare', icon: <Activity /> },
              { name: 'AI & Agentic', icon: <Code /> },
            ].map((industry, i) => (
              <Reveal key={i} delay={0.05 * i}>
                <div className="hover:border-sp-accent/50 flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-lg font-medium transition-all hover:-translate-y-1 hover:bg-white/10">
                  <span className="text-sp-accent">{industry.icon}</span>
                  {industry.name}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-sp-bg-dark relative overflow-x-hidden py-24 md:py-32 lg:py-40">
        <div className="bg-sp-accent/10 absolute top-1/2 left-1/2 h-[1200px] w-[1200px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[200px]" />

        <div className="relative z-10 container mx-auto grid items-start gap-16 px-6 md:px-12 lg:grid-cols-2">
          <Reveal>
            <div className="max-w-xl">
              <h2 className="mb-10 text-5xl leading-[1.1] font-black tracking-tight text-white md:text-6xl">
                {isDe
                  ? 'Lassen Sie uns Lieferhindernisse in Vorwärtsdynamik verwandeln'
                  : "Let's turn delivery roadblocks into forward momentum"}
              </h2>
              <p className="text-foreground/70 text-2xl leading-relaxed font-light">
                {isDe
                  ? 'Wenn Team-Kapazität, Prozesslücken oder Einstellungsverzögerungen das Momentum blockieren, sind wir hier, um Klarheit und Ausführungsfluss wiederherzustellen.'
                  : "If team bandwidth, process gaps, or hiring delays are blocking momentum, we're here to help restore clarity and execution flow."}
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
              ? 'Wir skalieren schnell. Können Sie mehrere Workstreams oder Produktlinien unterstützen?'
              : "We're scaling fast. Can you support multiple workstreams or product lines?",
            a: isDe
              ? 'Ja. Wir sind ausgestattet, um parallele Lieferwege zu unterstützen, jeder mit seinem eigenen Projekt- oder Sprint-Team, geleitet von erfahrenen Delivery Managern, die Abstimmung, Konsistenz und Geschwindigkeit über alle Funktionen hinweg sicherstellen.'
              : "Yes. We're equipped to support parallel delivery tracks, each with its own project or sprint team, led by experienced delivery managers who ensure alignment, consistency, and velocity across functions.",
          },
          {
            q: isDe
              ? 'Unsere internen Teams sind bereits ausgelastet. Wie stark müssen wir involviert sein?'
              : 'Our internal teams are already stretched. How involved do we need to be?',
            a: isDe
              ? 'Wir integrieren uns nahtlos in Ihre Workflows und managen das Tagesgeschäft unabhängig. Sie erhalten volle Transparenz durch Lieferberichte und Check-ins, ohne jedes Detail überwachen zu müssen.'
              : 'We integrate smoothly with your workflows and manage day-to-day operations independently. You get full visibility through delivery reports and check-ins, without needing to oversee every detail.',
          },
          {
            q: isDe
              ? 'Wie stellen Sie die Engineering-Qualität in verteilten Teams sicher?'
              : 'How do you ensure engineering quality across distributed teams?',
            a: isDe
              ? 'Wir folgen strengen Programmierstandards, setzen Code-Reviews durch und nutzen Git-basierte Versionskontrolle, wobei Sprint-Planung und QA in jeden Release-Zyklus integriert sind. Die Lieferung wird durch deutsch-geführte Leitung für zusätzliche Sorgfalt überwacht.'
              : 'We follow strict coding standards, enforce peer reviews, and use Git-based version control with sprint planning and QA baked into each release cycle. Delivery is monitored by German-led leadership for added rigor.',
          },
          {
            q: isDe
              ? 'Können Sie mit unseren internen Entwicklern oder anderen Dienstleistern zusammenarbeiten?'
              : 'Can you work with our internal developers or other vendors?',
            a: isDe
              ? 'Ja. Wir arbeiten häufig in hybriden Teamstrukturen zusammen. Unsere Teams passen sich Ihren bestehenden Tools, Prozessen und Stakeholdern an, bringen aber Struktur und Klarheit dort ein, wo sie benötigt wird.'
              : 'Yes. We frequently collaborate within hybrid team structures. Our teams adapt to your existing tools, processes, and stakeholders while bringing in structure and clarity where needed.',
          },
          {
            q: isDe
              ? 'Was passiert, wenn wir das Team schnell vergrößern müssen?'
              : 'What happens if we need to scale the team quickly?',
            a: isDe
              ? 'Unsere Rekrutierungspipeline ermöglicht es uns, Teams innerhalb weniger Wochen aufzubauen. Wir stimmen uns auf Ihren Tech-Stack und Ihre Anforderungen ab und stellen sicher, dass neue Mitarbeiter schnell produktiv sind, ohne Kompromisse bei Qualität oder Passung einzugehen.'
              : 'Our recruitment pipeline allows us to ramp teams in a matter of weeks. We align with your tech stack and requirements, ensuring new hires are productive fast without compromising on quality or fit.',
          },
          {
            q: isDe
              ? 'Erfüllt Ihr Setup Datenschutz- oder branchenspezifische Vorgaben?'
              : 'Is your setup compliant with data security or industry-specific regulations?',
            a: isDe
              ? 'Ja. Wir arbeiten mit Kunden in regulierten Branchen wie der Automobilindustrie und dem Gesundheitswesen zusammen und können Lieferumgebungen an Ihre Compliance-Anforderungen anpassen, einschließlich Code-Zugriffskontrollen, Audit-Trails und Datenschutzprotokollen.'
              : 'Yes. We work with clients in regulated industries like automotive and healthcare, and can tailor delivery environments to meet your compliance needs including code access controls, audit trails, and data protection protocols.',
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
              <p className="text-sp-text-on-light text-xl leading-relaxed font-light md:text-2xl">
                {isDe
                  ? 'Von MVPs bis hin zu vollständigen Teamtransfers haben wir Unternehmen in Deutschland, den USA und Europa unterstützt; wir liefern leise, transparent und immer mit dem Ziel langfristigen Vertrauens.'
                  : "From MVPs to full team transfers, we've supported companies across Germany, the US, and Europe; delivering quietly, transparently, and always with long-term trust in mind."}
              </p>
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

      {/* Global CTA */}
      <section className="bg-sp-accent/5 relative overflow-x-hidden border-t border-white/5 py-32">
        <div className="bg-sp-accent/10 absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[150px]" />
        <div className="relative z-10 container mx-auto max-w-4xl px-6 text-center md:px-12">
          <Reveal>
            <h2 className="mb-8 text-4xl font-bold md:text-6xl">
              {isDe ? 'Wir springen nicht nur ein.' : "We don't just fill seats."}{' '}
              <span className="text-sp-accent">
                {isDe ? 'Wir treiben das Produkt voran.' : 'We push the product forward.'}
              </span>
            </h2>
            <Link
              href={`/${locale}/${isDe ? 'kontakt-solutionplus' : 'contact-us'}`}
              className="bg-sp-accent group hover:bg-sp-accent-dark relative inline-block overflow-x-hidden rounded-full px-10 py-5 text-lg font-bold tracking-wide text-white shadow-[0_4px_20px_-4px_rgba(255,112,67,0.4)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_40px_-4px_rgba(255,112,67,0.6)] active:scale-95"
            >
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_2s_infinite]" />
              {isDe ? 'Sprechen Sie mit uns' : 'Talk to us'}
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
