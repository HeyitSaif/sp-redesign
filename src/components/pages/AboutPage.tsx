import { Reveal } from '@/components/animations/Reveal'
import { ArrowRight, Globe2, Target } from 'lucide-react'
import Link from 'next/link'

export function AboutPage({ locale }: { locale: string }) {
  const isDe = locale === 'de'

  const team = [
    {
      name: 'Saif Qureshi',
      role: isDe ? 'CEO & Gründer' : 'CEO & Founder',
      desc: isDe
        ? 'Mit über 7 Jahren Erfahrung in Fintech, SaaS, Web3 und AI leitet Saif SolutionPlus als CEO, um skalierbare Produkte zu liefern.'
        : 'Blending 7+ years in fintech, SaaS, Web3, and AI, Saif leads SolutionPlus as CEO to deliver scalable products.',
      img: 'https://solutionplus.io/wp-content/uploads/2025/09/1-1-uai-848x1060.png',
    },
    {
      name: 'Matthias Frank',
      role: 'Chief Operation Officer',
      desc: isDe
        ? 'Mit 10 Jahren Erfahrung in komplexen Softwareprojekten sichert Matthias Lieferungen in deutscher Qualität mit globalen Talenten.'
        : 'Drawing on 10 years in complex software projects, Matthias ensures German-quality delivery with global talent.',
      img: 'https://solutionplus.io/wp-content/uploads/2025/09/2-1-uai-848x1060.png',
    },
    {
      name: 'Sana Shahid',
      role: 'Chief Marketing Officer',
      desc: isDe
        ? 'Sana leitet das Marketing bei SolutionPlus und nutzt 8 Jahre globale Erfahrung, um Strategie in Wachstum zu verwandeln.'
        : 'Guiding marketing and communications at SolutionPlus, Sana uses 8 years of global experience to turn strategy into growth.',
      img: 'https://solutionplus.io/wp-content/uploads/2025/09/3-1-uai-848x1060.png',
    },
  ]

  return (
    <div className="flex w-full flex-col overflow-hidden pt-32 pb-24">
      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-center overflow-hidden py-20">
        <div className="pointer-events-none absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay" />
        <div className="bg-primary/10 pointer-events-none absolute top-0 right-0 h-[500px] w-[500px] rounded-full blur-[150px]" />

        <div className="relative z-10 container mx-auto grid items-center gap-16 px-6 md:px-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <span className="text-primary mb-8 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium">
                {isDe ? 'Über Uns' : 'About Us'}
              </span>
              <h1 className="mb-8 text-4xl leading-[1.1] font-bold md:text-6xl lg:text-7xl">
                The <span className="text-gradient">partner</span> behind your next product
                milestone.
              </h1>
              <p className="text-foreground/70 mb-8 text-xl leading-relaxed">
                {isDe
                  ? 'Wir haben SolutionPlus nicht gegründet, um ein weiteres Dev-Shop zu sein. Wir haben es gebaut, weil wir in Ihren Schuhen gesteckt haben; schnell liefern, richtig einstellen und Dinge ohne Ausreden erledigen.'
                  : "We didn't start SolutionPlus to be another dev shop. We built it because we've been in your shoes; racing to deliver, hire right, and get things done without excuses."}
              </p>
              <div className="flex gap-4">
                <Link
                  href={`/${locale}/${isDe ? 'kontakt-solutionplus' : 'contact-us'}`}
                  className="bg-primary group relative flex items-center gap-2 overflow-hidden rounded-full px-8 py-4 font-bold tracking-wide text-white shadow-[0_4px_20px_-4px_rgba(92,107,192,0.4)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#6c7bd0] hover:shadow-[0_8px_30px_-4px_rgba(92,107,192,0.6)] active:scale-95"
                >
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_2s_infinite]" />
                  {isDe ? 'Sprechen Sie mit uns' : "Let's talk"}{' '}
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </Reveal>
          </div>
          <Reveal direction="left">
            <div className="relative rotate-2 overflow-hidden rounded-3xl border border-white/10 bg-[#141618] p-2 transition-transform duration-500 hover:rotate-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://solutionplus.io/wp-content/uploads/2025/09/Careers-13-scaled-uai-1444x1444.jpg"
                alt="Team Collaboration"
                className="h-auto w-full rounded-2xl object-cover opacity-80 mix-blend-luminosity transition-all duration-700 hover:mix-blend-normal"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="relative overflow-hidden border-y border-white/5 bg-[#0f1112] py-24">
        <div className="bg-secondary/5 pointer-events-none absolute top-1/2 left-1/2 h-[300px] w-full -translate-x-1/2 -translate-y-1/2 blur-[120px]" />
        <div className="relative z-10 container mx-auto px-6 md:px-12">
          <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2">
            <Reveal direction="up" delay={0.1}>
              <div className="group relative h-full overflow-hidden rounded-[2rem] border border-white/5 bg-[#141618]/80 p-10 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]">
                <div className="from-primary/5 absolute inset-0 bg-gradient-to-tr via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute top-0 right-0 p-8 opacity-5 transition-all duration-500 group-hover:scale-110 group-hover:opacity-20">
                  <Globe2 size={120} className="text-primary" />
                </div>
                <h2 className="text-primary relative z-10 mb-6 text-3xl font-bold transition-transform duration-300 group-hover:translate-x-2">
                  {isDe ? 'Vision' : 'Vision'}
                </h2>
                <p className="text-foreground/70 relative z-10 text-xl leading-relaxed">
                  {isDe
                    ? 'Wir befähigen Unternehmen rund um den Globus zum Zugang zu herausragenden Softwarelösungen und erstklassigen Tech-Talenten; schnell, skalierbar und ohne Grenzen.'
                    : 'We empower companies around the globe to access outstanding software solutions and top-tier tech talent; fast, scalable, and without borders.'}
                </p>
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.2}>
              <div className="group relative h-full overflow-hidden rounded-[2rem] border border-white/5 bg-[#141618]/80 p-10 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]">
                <div className="from-secondary/5 absolute inset-0 bg-gradient-to-tr via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute top-0 right-0 p-8 opacity-5 transition-all duration-500 group-hover:scale-110 group-hover:opacity-20">
                  <Target size={120} className="text-secondary" />
                </div>
                <h2 className="text-secondary relative z-10 mb-6 text-3xl font-bold transition-transform duration-300 group-hover:translate-x-2">
                  {isDe ? 'Mission' : 'Mission'}
                </h2>
                <p className="text-foreground/70 relative z-10 text-xl leading-relaxed">
                  {isDe
                    ? 'Wir schlagen die Brücke zwischen Vision und Umsetzung, indem wir erstklassige Softwaredienstleistungen erbringen und weltweit vernetzte Teams aufbauen, die nachhaltiges Geschäftswachstum fördern.'
                    : 'We bridge vision and execution by delivering world-class software services and building globally connected teams that fuel sustainable business growth.'}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="relative py-32">
        <div className="container mx-auto px-6 text-center md:px-12">
          <Reveal>
            <h2 className="mb-16 text-3xl font-bold md:text-5xl">
              {isDe ? 'Lernen Sie unser Team kennen' : 'Meet Our Team'}
            </h2>
          </Reveal>

          <div className="mx-auto grid max-w-6xl gap-8 text-left md:grid-cols-3">
            {team.map((member, i) => (
              <Reveal key={i} delay={0.1 * (i + 1)} direction="up">
                <div className="group overflow-hidden rounded-[2rem] border border-white/5 bg-[#141618]/80 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]">
                  <div className="relative aspect-[4/5] overflow-hidden bg-[#1a1c1e]">
                    <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#141618] via-transparent to-transparent opacity-80" />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={member.img}
                      alt={member.name}
                      className="h-full w-full object-cover object-center grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
                    />
                  </div>
                  <div className="relative z-20 -mt-12 bg-gradient-to-t from-[#141618] to-transparent p-8 pt-12">
                    <h3 className="group-hover:text-primary mb-2 text-2xl font-bold text-white transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-primary mb-4 font-medium">{member.role}</p>
                    <p className="text-foreground/70 text-sm leading-relaxed">{member.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Global CTA */}
      <section className="relative overflow-hidden border-t border-white/5 bg-[#0f1112] py-32">
        <div className="bg-primary/10 pointer-events-none absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[150px]" />
        <div className="relative z-10 container mx-auto max-w-4xl px-6 text-center md:px-12">
          <Reveal>
            <h2 className="mb-8 text-4xl font-bold md:text-6xl">
              {isDe ? 'Bereit für das nächste Level?' : 'Ready to take the next step?'}
            </h2>
            <Link
              href={`/${locale}/${isDe ? 'kontakt-solutionplus' : 'contact-us'}`}
              className="bg-primary group relative inline-block overflow-hidden rounded-full px-10 py-5 text-lg font-bold tracking-wide text-white shadow-[0_4px_20px_-4px_rgba(92,107,192,0.4)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#6c7bd0] hover:shadow-[0_8px_40px_-4px_rgba(92,107,192,0.6)] active:scale-95"
            >
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_2s_infinite]" />
              {isDe ? 'Projekt starten' : 'Start your project'}
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
