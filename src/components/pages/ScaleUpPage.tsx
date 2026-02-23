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

export function ScaleUpPage({ locale }: { locale: string }) {
  const isDe = locale === 'de'

  return (
    <div className="flex w-full flex-col overflow-hidden pt-32 pb-24">
      {/* Hero Section */}
      <section className="relative flex min-h-[70vh] items-center overflow-hidden py-20">
        <div className="bg-secondary/5 pointer-events-none absolute inset-0 blur-[100px]" />
        <div className="relative z-10 container mx-auto max-w-4xl px-6 text-center md:px-12">
          <Reveal>
            <span className="text-primary mb-8 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium">
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
                className="bg-secondary group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-8 py-4 font-bold tracking-wide text-white shadow-[0_4px_20px_-4px_rgba(255,112,67,0.4)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#ff8a65] hover:shadow-[0_8px_30px_-4px_rgba(255,112,67,0.6)] active:scale-95"
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
        className="relative scroll-mt-24 overflow-hidden border-y border-white/5 bg-[#0f1112] py-24"
      >
        <div className="bg-primary/10 pointer-events-none absolute top-1/2 right-0 h-1/2 w-1/2 -translate-y-1/2 rounded-full blur-[150px]" />
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <Reveal direction="right">
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#141618] p-2">
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
                    <div className="hover:border-primary/30 flex gap-4 rounded-2xl border border-white/5 bg-[#141618] p-6 transition-colors">
                      <div className="mt-1 shrink-0">
                        <Target className="text-primary" />
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
                icon: <Code size={32} className="text-primary" />,
                title: isDe ? 'IT-Talente' : 'IT talent',
                desc: isDe
                  ? 'Mit Erfahrung in komplexen, regulierten Branchen.'
                  : "That's experienced in complex, regulated industries.",
              },
              {
                icon: <Building2 size={32} className="text-secondary" />,
                title: isDe ? 'Dedizierte Teams' : 'Dedicated teams',
                desc: isDe
                  ? 'Die mit Ihnen wachsen – voll integriert, ohne ständige Betreuung.'
                  : 'That grow with you fully integrated, no hand-holding.',
              },
              {
                icon: <Shield size={32} className="text-primary" />,
                title: isDe ? 'Deutsch-geführte' : 'German-led',
                desc: isDe
                  ? 'Lieferprozesse, die Ihren Qualitätsstandards entsprechen.'
                  : 'Delivery operations that match your quality standards.',
              },
              {
                icon: <Zap size={32} className="text-secondary" />,
                title: isDe ? 'Schnelle Sprints' : 'Rapid sprints',
                desc: isDe
                  ? 'Die sich an die Geschwindigkeit Ihres Teams und Git-basierte Prozesse anpassen.'
                  : 'That align with your team velocity and Git-based processes.',
              },
            ].map((feature, i) => (
              <Reveal key={i} delay={0.1 * (i + 1)} direction="up">
                <div className="h-full rounded-3xl border border-white/5 bg-[#141618] p-8 transition-all duration-300 hover:border-white/20">
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
      <section className="bg-[#0f1112] py-24">
        <div className="container mx-auto px-6 md:px-12">
          <Reveal>
            <h2 className="mb-16 text-center text-3xl font-bold md:text-5xl">
              {isDe ? 'Wie wir arbeiten' : 'How We Work'}
            </h2>
          </Reveal>

          <div className="grid gap-8 md:grid-cols-3">
            <Reveal delay={0.1}>
              <div className="group relative rounded-3xl border border-white/5 bg-gradient-to-br from-[#1a1c1e] to-[#0f1112] p-10 transition-transform duration-300 hover:-translate-y-2">
                <div className="text-primary/20 mb-6 font-serif text-5xl font-bold">1</div>
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
                <div className="text-secondary/20 mb-6 font-serif text-5xl font-bold">2</div>
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
                <div className="text-primary/20 mb-6 font-serif text-5xl font-bold">3</div>
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
      <section className="relative overflow-hidden py-24">
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
                <div className="hover:border-primary/50 flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-lg font-medium transition-all hover:-translate-y-1 hover:bg-white/10">
                  <span className="text-primary">{industry.icon}</span>
                  {industry.name}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Global CTA */}
      <section className="bg-primary/5 relative overflow-hidden border-t border-white/5 py-32">
        <div className="bg-secondary/10 absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[150px]" />
        <div className="relative z-10 container mx-auto max-w-4xl px-6 text-center md:px-12">
          <Reveal>
            <h2 className="mb-8 text-4xl font-bold md:text-6xl">
              {isDe ? 'Wir springen nicht nur ein.' : "We don't just fill seats."}{' '}
              <span className="text-secondary">
                {isDe ? 'Wir treiben das Produkt voran.' : 'We push the product forward.'}
              </span>
            </h2>
            <Link
              href={`/${locale}/${isDe ? 'kontakt-solutionplus' : 'contact-us'}`}
              className="bg-secondary group relative inline-block overflow-hidden rounded-full px-10 py-5 text-lg font-bold tracking-wide text-white shadow-[0_4px_20px_-4px_rgba(255,112,67,0.4)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#ff8a65] hover:shadow-[0_8px_40px_-4px_rgba(255,112,67,0.6)] active:scale-95"
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
