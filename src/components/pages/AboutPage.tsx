import { Reveal } from '@/components/animations/Reveal'
import { ArrowRight, Globe2, Target, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'
import { FloatiesBackground } from '@/components/ui/FloatiesBackground'
import { ContactFormSection } from '@/components/sections/ContactFormSection'

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
    <div className="relative flex w-full flex-col overflow-x-hidden pt-32 pb-24">
      <FloatiesBackground />
      {/* Hero */}
      <section className="bg-sp-bg-dark relative border-y border-white/5 py-24">
        <div className="container mx-auto px-6 text-center md:px-12">
          <Reveal>
            <h2 className="mb-16 text-3xl font-bold md:text-5xl">
              {isDe ? 'Für wen wir gebaut sind' : "Who we're built for"}
            </h2>
          </Reveal>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: isDe ? 'Startups' : 'Startups',
                desc: isDe ? 'die ihr erstes Produkt bauen.' : 'building their first product.',
                link: 'mvp-sprint-paket',
                linkEn: 'mvp-sprint-package',
                btnText: isDe ? 'Mein MVP bauen' : 'Build my MVP',
                img: 'https://solutionplus.io/wp-content/uploads/2025/09/Startups-building-their-first-product-1.png',
              },
              {
                title: isDe ? 'Skalierende' : 'Scaling',
                desc: isDe
                  ? 'Tech-Teams, die Zuverlässigkeit brauchen'
                  : 'tech teams that need reliability',
                link: 'scaleups',
                linkEn: 'scale-up',
                btnText: isDe ? 'Mein Team skalieren' : 'Scale my team',
                img: 'https://solutionplus.io/wp-content/uploads/2025/09/Scaling-tech-teams-that-need-reliability-1.png',
              },
              {
                title: isDe ? 'Unternehmen' : 'Companies',
                desc: isDe ? 'die über Grenzen hinweg expandieren.' : 'expanding across borders.',
                link: 'dedizierte-teams',
                linkEn: 'dedicated-delivery-teams',
                btnText: isDe ? 'Global gehen' : 'Go global',
                img: 'https://solutionplus.io/wp-content/uploads/2025/09/Companies-expanding-across-borders-2.png',
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
                    href={`/${locale}/${isDe ? persona.link : persona.linkEn}`}
                    className="text-sp-accent mt-auto flex items-center gap-2 font-medium transition-colors hover:text-white"
                  >
                    {persona.btnText} <ArrowRight size={16} />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How we help you scale */}
      <section className="bg-sp-bg-dark py-24">
        <div className="container mx-auto max-w-4xl px-6 text-center md:px-12">
          <Reveal>
            <h2 className="mb-6 text-3xl font-bold md:text-5xl">
              {isDe ? 'Wie wir Ihnen beim Skalieren helfen' : 'How we help you scale'}
            </h2>
            <p className="text-foreground/70 mb-16 text-xl leading-relaxed">
              {isDe
                ? 'Softwareprojekte brauchen nicht nur Code. Sie brauchen Flexibilität, Eigenverantwortung und Geschwindigkeit ohne Kompromisse bei Qualität oder Teamintegrität. Wir haben ein 3-stufiges Servicemodell entwickelt, um genau das zu tun:'
                : "Software projects don't just need code. They need flexibility, ownership, and speed without compromising on quality or team integrity. We've built a 3-stage service model to do exactly that:"}
            </p>
          </Reveal>

          <div className="grid gap-8 text-left md:grid-cols-3">
            <Reveal delay={0.1} direction="up">
              <div className="group bg-sp-bg-medium relative h-full rounded-3xl border border-white/5 p-8 transition-transform duration-300 hover:-translate-y-2">
                <div className="group-hover:text-sp-accent/[0.1] absolute -top-6 -right-6 text-9xl font-bold text-white/[0.03] transition-colors">
                  1
                </div>
                <h3 className="mb-4 text-xl font-bold">
                  {isDe
                    ? 'Loslegen. Wir übernehmen den Bau.'
                    : "Get moving. We'll handle the build."}
                </h3>
                <p className="text-foreground/60 relative z-10 leading-relaxed">
                  {isDe
                    ? 'Egal ob Ihr erstes MVP oder Ihr nächster großer Release, wir steigen schnell ein mit allem was Sie brauchen: UX/UI, Engineering, QA und Delivery Leadership im deutschen Stil.'
                    : "Whether it's your first MVP or your next big release, we plug in fast with everything you need: UX/UI, engineering, QA, and German-style delivery leadership."}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2} direction="up">
              <div className="group bg-sp-bg-medium relative h-full rounded-3xl border border-white/5 p-8 transition-transform duration-300 hover:-translate-y-2">
                <div className="group-hover:text-sp-accent/[0.1] absolute -top-6 -right-6 text-9xl font-bold text-white/[0.03] transition-colors">
                  2
                </div>
                <h3 className="mb-4 text-xl font-bold">
                  {isDe ? 'Wachsen ohne Wachstumsschmerzen' : 'Grow without growing pains'}
                </h3>
                <p className="text-foreground/60 relative z-10 leading-relaxed">
                  {isDe
                    ? 'Wenn schnelle Erfolge nicht genug sind, helfen wir Ihnen ein stabiles, langfristiges Team aufzubauen, das vollständig in unserem Ökosystem gemanagt wird und auf Ihres abgestimmt ist.'
                    : "When quick wins aren't enough, we help you build a stable, long-term team, fully managed inside our ecosystem, aligned to yours."}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.3} direction="up">
              <div className="group bg-sp-bg-medium relative h-full rounded-3xl border border-white/5 p-8 transition-transform duration-300 hover:-translate-y-2">
                <div className="group-hover:text-sp-accent/[0.1] absolute -top-6 -right-6 text-9xl font-bold text-white/[0.03] transition-colors">
                  3
                </div>
                <h3 className="mb-4 text-xl font-bold">
                  {isDe
                    ? 'Relocaten Sie die Personen, die Ihr Produkt am Laufen halten'
                    : 'Relocate the people who keep your product running'}
                </h3>
                <p className="text-foreground/60 relative z-10 leading-relaxed">
                  {isDe
                    ? 'Wenn wichtige Teammitglieder für Ihren Erfolg unerlässlich werden, helfen wir Ihnen, sie näher zu bringen. Kein Visum-Drama. Keine Umzugskopfschmerzen.'
                    : 'When key team members become essential to your success, we help you bring them closer. No visa drama. No relocation headaches.'}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

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

      {/* Contact Section */}
      <section className="bg-sp-bg-dark relative overflow-x-hidden py-24 md:py-32 lg:py-40">
        <div className="bg-sp-accent/10 absolute top-1/2 left-1/2 h-[1200px] w-[1200px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[200px]" />

        <div className="relative z-10 container mx-auto grid items-start gap-16 px-6 md:px-12 lg:grid-cols-2">
          <Reveal>
            <div className="max-w-xl">
              <h2 className="mb-10 text-5xl leading-[1.1] font-black tracking-tight text-white md:text-6xl">
                {isDe
                  ? 'Lassen Sie uns Ihre Idee zum Leben erwecken'
                  : "Let's bring your idea to life"}
              </h2>
              <p className="text-foreground/70 text-2xl leading-relaxed font-light">
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

      {/* Why companies work with us */}
      <section className="relative overflow-x-hidden py-24">
        <div className="bg-sp-accent/5 pointer-events-none absolute top-1/2 right-0 h-[500px] w-[500px] -translate-y-1/2 rounded-full blur-[120px]" />
        <div className="container mx-auto px-6 md:px-12">
          <Reveal>
            <h2 className="mb-10 text-center text-3xl font-bold md:text-5xl">
              {isDe ? 'Warum Unternehmen mit uns arbeiten?' : 'Why companies work with us?'}
            </h2>
          </Reveal>
          <div className="mx-auto mt-16 max-w-3xl space-y-6">
            {[
              isDe
                ? 'Deutsche Projektleitung, die das Rätselraten bei der Offshore-Lieferung beseitigt'
                : 'German project leadership that removes the guesswork from offshore delivery',
              isDe
                ? 'Kosteneffizienz, die mit Ihnen skaliert, und qualitativ hochwertige Lieferung ohne aufgeblähte Gehaltsabrechnung'
                : 'Cost-efficiency that scales with you and quality delivery without the bloated payroll',
              isDe
                ? 'Vertrauenswürdiger PoC-Partner für Unternehmen, die Ideen ohne interne Belastung testen möchten'
                : 'Trusted PoC partner for companies who want to test ideas without internal strain',
              isDe
                ? 'Schnelles Onboarding für MVPs, Prototypen und dringende Lieferanforderungen'
                : 'Fast onboarding for MVPs, prototypes, and urgent delivery needs',
              isDe
                ? 'End-to-End-Unterstützung von der Softwarebereitstellung bis zur vollständigen Teamverlagerung'
                : 'End-to-end support from software delivery to full team relocation',
            ].map((item, i) => (
              <Reveal key={i} delay={0.1 * i} direction="up">
                <div className="hover:border-sp-accent/30 bg-sp-bg-medium flex items-start gap-4 rounded-2xl border border-white/5 p-6 transition-colors">
                  <CheckCircle2 className="text-sp-accent mt-1 shrink-0" />
                  <p className="text-foreground/80 text-lg leading-relaxed font-medium">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="relative flex min-h-[60vh] items-center overflow-x-hidden py-20">
        <div className="pointer-events-none absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay" />
        <div className="bg-sp-accent/10 pointer-events-none absolute top-0 right-0 h-[500px] w-[500px] rounded-full blur-[150px]" />

        <div className="relative z-10 container mx-auto grid items-center gap-16 px-6 md:px-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <span className="text-sp-accent mb-8 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium">
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
                  className="bg-sp-accent group hover:bg-sp-accent-dark relative flex items-center gap-2 overflow-x-hidden rounded-full px-8 py-4 font-bold tracking-wide text-white shadow-[0_4px_20px_-4px_rgba(255,112,67,0.4)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_-4px_rgba(255,112,67,0.6)] active:scale-95"
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
            <div className="bg-sp-bg-medium relative rotate-2 overflow-x-hidden rounded-3xl border border-white/10 p-2 transition-transform duration-500 hover:rotate-0">
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
      <section className="bg-sp-bg-dark relative overflow-x-hidden border-y border-white/5 py-24">
        <div className="bg-sp-accent/5 pointer-events-none absolute top-1/2 left-1/2 h-[300px] w-full -translate-x-1/2 -translate-y-1/2 blur-[120px]" />
        <div className="relative z-10 container mx-auto px-6 md:px-12">
          <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2">
            <Reveal direction="up" delay={0.1}>
              <div className="group bg-sp-bg-medium/80 relative h-full overflow-x-hidden rounded-[2rem] border border-white/5 p-10 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]">
                <div className="from-sp-accent/5 absolute inset-0 bg-gradient-to-tr via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute top-0 right-0 p-8 opacity-5 transition-all duration-500 group-hover:scale-110 group-hover:opacity-20">
                  <Globe2 size={120} className="text-sp-accent" />
                </div>
                <h2 className="text-sp-accent relative z-10 mb-6 text-3xl font-bold transition-transform duration-300 group-hover:translate-x-2">
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
              <div className="group bg-sp-bg-medium/80 relative h-full overflow-x-hidden rounded-[2rem] border border-white/5 p-10 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]">
                <div className="from-sp-accent/5 absolute inset-0 bg-gradient-to-tr via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute top-0 right-0 p-8 opacity-5 transition-all duration-500 group-hover:scale-110 group-hover:opacity-20">
                  <Target size={120} className="text-sp-accent" />
                </div>
                <h2 className="text-sp-accent relative z-10 mb-6 text-3xl font-bold transition-transform duration-300 group-hover:translate-x-2">
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
                <div className="group bg-sp-bg-medium/80 overflow-x-hidden rounded-[2rem] border border-white/5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]">
                  <div className="bg-sp-bg-medium relative aspect-[4/5] overflow-x-hidden">
                    <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#141618] via-transparent to-transparent opacity-80" />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={member.img}
                      alt={member.name}
                      className="h-full w-full object-cover object-center grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
                    />
                  </div>
                  <div className="relative z-20 -mt-12 bg-gradient-to-t from-[#141618] to-transparent p-8 pt-12">
                    <h3 className="group-hover:text-sp-accent mb-2 text-2xl font-bold text-white transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-sp-accent mb-4 font-medium">{member.role}</p>
                    <p className="text-foreground/70 text-sm leading-relaxed">{member.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Global CTA */}
      <section className="border-sp-accent/10 bg-sp-bg-dark relative mt-12 overflow-x-hidden border-t py-32">
        <div className="bg-sp-accent/10 pointer-events-none absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[150px]" />
        <div className="relative z-10 container mx-auto max-w-4xl px-6 text-center md:px-12">
          <Reveal>
            <h2 className="mb-8 text-4xl font-bold md:text-6xl">
              {isDe ? 'Bereit für das nächste Level?' : 'Ready to take the next step?'}
            </h2>
            <Link
              href={`/${locale}/${isDe ? 'kontakt-solutionplus' : 'contact-us'}`}
              className="bg-sp-accent group hover:bg-sp-accent-dark relative inline-block overflow-x-hidden rounded-full px-10 py-5 text-lg font-bold tracking-wide text-white shadow-[0_4px_20px_-4px_rgba(255,112,67,0.4)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_40px_-4px_rgba(255,112,67,0.6)] active:scale-95"
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
