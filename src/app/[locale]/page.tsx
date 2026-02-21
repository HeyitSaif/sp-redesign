import { Reveal } from '@/components/animations/Reveal'
import { ArrowRight, Shield, Users, Zap, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'
import { getKeywordsForPage } from '@/lib/keywords'
import { generatePageMetadata } from '@/lib/seo'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const isDe = locale === 'de'

  const title = isDe
    ? 'Software entwickeln & skalieren mit SolutionPlus'
    : 'Build, Launch, and Scale Software with SolutionPlus'
  const description = isDe
    ? 'SolutionPlus hilft Startups & Scale-ups, bessere Produkte schneller zu bauen – von MVP-Sprints bis Code-Modernisierung, Engineering das skaliert.'
    : 'Get dependable dev team without draining time, budget, or momentum. From MVPs to scale, we design high-performing tech solutions.'

  const { primary, secondary } = getKeywordsForPage('index')
  const keywords = [...primary, ...secondary]

  return generatePageMetadata({
    title,
    description,
    keywords,
    locale,
    canonicalUrl: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://solutionplus.io'}/${locale}`,
    alternateLocales: [
      { locale: 'en', url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://solutionplus.io'}/en` },
      { locale: 'de', url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://solutionplus.io'}/de` },
    ].filter((a) => a.locale !== locale),
  })
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params

  return (
    <div className="flex w-full flex-col overflow-hidden">
      {/* 1. Hero Section */}
      <section className="relative flex min-h-[90vh] items-center overflow-hidden pt-24 pb-20">
        {/* Background Elements */}
        <div className="bg-primary/20 pointer-events-none absolute top-[-10%] left-[-10%] h-[50%] w-[50%] rounded-full blur-[150px]" />
        <div className="bg-secondary/20 pointer-events-none absolute right-[-10%] bottom-[-10%] h-[50%] w-[50%] rounded-full blur-[150px]" />
        <div className="pointer-events-none absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay" />

        <div className="relative z-10 container mx-auto grid items-center gap-16 px-6 md:px-12 lg:grid-cols-2">
          <div>
            <Reveal direction="up" delay={0.1}>
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md">
                <span className="bg-secondary flex h-2 w-2 animate-pulse rounded-full"></span>
                <span className="text-xs font-medium tracking-wider text-white/80 uppercase">
                  {locale === 'de'
                    ? 'Software-Entwicklung der Spitzenklasse'
                    : 'Top-tier Software Delivery'}
                </span>
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.2}>
              <h1 className="mb-8 text-5xl leading-[1.1] font-bold tracking-tight md:text-7xl">
                {locale === 'de' ? 'Sprinten Sie auf' : 'You&apos;re sprinting toward'}{' '}
                <br className="hidden md:block" />
                <span className="text-gradient">
                  {locale === 'de' ? 'Produktziele zu' : 'product goals'}
                </span>{' '}
                <br />
                {locale === 'de' ? 'mit halber Mannschaft.' : 'with half a crew.'}
              </h1>
            </Reveal>

            <Reveal direction="up" delay={0.3}>
              <p className="text-foreground/70 mb-10 max-w-xl text-lg leading-relaxed md:text-xl">
                {locale === 'de'
                  ? 'Erhalten Sie ein zuverlässiges Entwicklerteam, ohne Zeit, Budget oder Dynamik zu verlieren. Von MVPs bis zur Skalierung.'
                  : 'Get dependable dev team without draining time, budget, or momentum. From MVPs to scale, we design high-performing tech solutions.'}
              </p>
            </Reveal>

            <Reveal direction="up" delay={0.4}>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href={`/${locale}/contact-us`}
                  className="bg-primary group relative flex items-center gap-2 overflow-hidden rounded-full px-8 py-4 font-bold tracking-wide text-white shadow-[0_4px_20px_-4px_rgba(92,107,192,0.4)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#6c7bd0] hover:shadow-[0_8px_30px_-4px_rgba(92,107,192,0.6)] active:scale-95"
                >
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_2s_infinite]" />
                  {locale === 'de' ? 'Skalierung besprechen' : 'Let&apos;s talk scale'}
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
                <Link
                  href={`/${locale}/startup`}
                  className="rounded-full border border-white/10 bg-white/5 px-8 py-4 font-medium text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10 active:scale-95"
                >
                  {locale === 'de' ? 'Wie es funktioniert' : 'How it works'}
                </Link>
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.5}>
              <div className="text-foreground/50 mt-12 flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-secondary" /> Senior Engineers
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-secondary" /> Zero Compromise
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-secondary" /> Full Accountability
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal direction="left" delay={0.3} className="hidden lg:block">
            <div className="relative mx-auto aspect-square w-full max-w-lg">
              <div className="from-primary/20 to-secondary/20 absolute inset-0 rounded-3xl bg-gradient-to-tr blur-3xl" />
              <div className="absolute inset-4 flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#1a1c1e] shadow-2xl">
                <div className="flex h-12 items-center gap-2 border-b border-white/10 bg-black/40 px-4">
                  <div className="h-3 w-3 rounded-full bg-white/20" />
                  <div className="h-3 w-3 rounded-full bg-white/20" />
                  <div className="h-3 w-3 rounded-full bg-white/20" />
                </div>
                <div className="text-primary/80 relative flex-1 overflow-hidden p-6 font-mono text-sm">
                  <div className="absolute top-0 left-0 z-10 h-full w-full bg-gradient-to-b from-transparent to-[#1a1c1e]" />
                  <pre className="animate-pulse opacity-70">
                    <code className="text-white/40">1 </code>{' '}
                    <span className="text-secondary">import</span> {'{ scale }'}{' '}
                    <span className="text-secondary">from</span> &apos;solution-plus&apos;;
                    <br />
                    <code className="text-white/40">2 </code>
                    <br />
                    <code className="text-white/40">3 </code>{' '}
                    <span className="text-primary">const</span> project ={' '}
                    <span className="text-primary">await</span> scale({'{'}
                    <br />
                    <code className="text-white/40">4 </code> team: &apos;senior-engineers&apos;,
                    <br />
                    <code className="text-white/40">5 </code> quality:
                    &apos;german-discipline&apos;,
                    <br />
                    <code className="text-white/40">6 </code> speed: &apos;sprint-ready&apos;
                    <br />
                    <code className="text-white/40">7 </code> {'}'});
                    <br />
                    <code className="text-white/40">8 </code>
                    <br />
                    <code className="text-white/40">9 </code> console.log(project.status);
                    <br />
                    <code className="text-white/40">10 </code>{' '}
                    <span className="text-[#0693e3]">{`// "Shipped."`}</span>
                    <br />
                  </pre>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. Value Proposition Grid */}
      <section className="relative border-y border-white/5 bg-[#0f1112] py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <Reveal>
              <h2 className="mb-6 text-3xl font-bold md:text-5xl">
                {locale === 'de' ? 'Was wir tun — und gut machen' : 'What we do — and do well'}
              </h2>
              <p className="text-foreground/60 text-lg">
                {locale === 'de'
                  ? 'Von MVPs bis zur Skalierung entwerfen wir leistungsstarke Technologielösungen, die von erstklassigen Teams geleitet werden.'
                  : 'From MVPs to scale, we design high-performing tech solutions led by top-tier teams. One partner, full accountability, zero compromise.'}
              </p>
            </Reveal>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: <Zap size={32} className="text-secondary" />,
                title: locale === 'de' ? 'MVP-Sprints' : 'MVP Sprints',
                desc:
                  locale === 'de'
                    ? 'Launch in Wochen, nicht Monaten. Fester Umfang, vollständig verwaltet.'
                    : 'Launch in weeks, not months. Fixed scope, fully managed, ready to scale.',
                href: '/mvp-sprint',
              },
              {
                icon: <Users size={32} className="text-primary" />,
                title: locale === 'de' ? 'Dedizierte Teams' : 'Dedicated Teams',
                desc:
                  locale === 'de'
                    ? 'Wir stellen Ihr Offshore-Team zusammen und verwalten es. Skalieren Sie ohne Aufwand.'
                    : 'We set up and manage your offshore team. Scale without the hiring red tape.',
                href: '/dedicated-delivery-teams',
              },
              {
                icon: <Shield size={32} className="text-primary" />,
                title: locale === 'de' ? 'BOT-Modell' : 'Build-Operate-Transfer',
                desc:
                  locale === 'de'
                    ? 'Übernehmen Sie das Team, wenn Sie bereit sind. Keine Reibung, kein Lock-in.'
                    : 'Take over the team when you&apos;re ready. Zero friction, zero lock-in.',
                href: '/startup',
              },
            ].map((feature, i) => (
              <Reveal key={i} delay={0.1 * (i + 1)}>
                <Link
                  href={`/${locale}${feature.href}`}
                  className="group block h-full transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-white/5 bg-[#141618]/80 p-8 backdrop-blur-xl transition-all duration-500 group-hover:border-white/20 group-hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]">
                    <div className="from-primary/5 absolute inset-0 bg-gradient-to-tr via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="absolute top-0 right-0 translate-x-4 -translate-y-4 p-8 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100">
                      <ArrowRight className="group-hover:text-primary text-white/50 transition-colors" />
                    </div>
                    <div className="group-hover:bg-primary/10 group-hover:border-primary/30 group-hover:text-primary mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 shadow-lg transition-all duration-500 group-hover:scale-110">
                      {feature.icon}
                    </div>
                    <h3 className="group-hover:from-primary group-hover:to-secondary mb-4 text-xl font-bold text-white transition-all group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:text-transparent">
                      {feature.title}
                    </h3>
                    <p className="text-foreground/60 mt-auto leading-relaxed">{feature.desc}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. The Approach (German Discipline x Pakistani Engineering) */}
      <section className="relative overflow-hidden py-32">
        <div className="container mx-auto grid items-center gap-20 px-6 md:px-12 lg:grid-cols-2">
          <Reveal direction="right">
            <div className="relative">
              <div className="bg-primary/20 absolute inset-0 rounded-full blur-[100px]" />
              <div className="relative overflow-hidden rounded-3xl border border-white/10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://solutionplus.io/wp-content/uploads/2025/09/We-combine-German-discipline-with-top-tier-Pakistani-engineering-14-scaled.jpg"
                  alt="Team collaboration"
                  className="h-auto w-full object-cover opacity-80 mix-blend-luminosity transition-all duration-700 hover:mix-blend-normal"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#141618] via-transparent to-transparent" />
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <h2 className="mb-8 text-3xl leading-[1.2] font-bold md:text-5xl">
                We combine <span className="text-gradient">German discipline</span> with top-tier{' '}
                <span className="text-primary">Pakistani engineering</span>.
              </h2>
              <p className="text-foreground/70 mb-8 text-lg leading-relaxed">
                Our teams combine the structure, clarity, and reliability you&apos;d expect from a
                native-led German operation with the deep technical expertise and ambition of
                Pakistan&apos;s top engineers.
              </p>
              <div className="border-secondary/50 mb-10 border-l-2 py-2 pl-6">
                <p className="text-xl font-medium text-white italic">
                  &quot;It&apos;s not just a collaboration. It&apos;s a system built for quality,
                  ownership, and teams that don&apos;t need chasing.&quot;
                </p>
              </div>
              <Link
                href={locale === 'de' ? `/${locale}/kontakt-solutionplus` : `/${locale}/about-team`}
                className="text-primary mt-4 inline-flex items-center gap-2 font-bold tracking-wide transition-all duration-300 hover:gap-4 hover:text-[#ff8a65]"
              >
                Meet the team <ArrowRight size={18} />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4. Testimonials (Abstracted from Content) */}
      <section className="border-t border-white/5 bg-[#0f1112] py-24">
        <div className="container mx-auto px-6 md:px-12">
          <Reveal>
            <h2 className="mb-16 text-center text-3xl font-bold md:text-5xl">
              You won&apos;t be the first to <span className="text-secondary">trust us</span>
            </h2>
          </Reveal>
          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
            <Reveal delay={0.1} direction="up">
              <div className="relative rounded-3xl border border-white/5 bg-[#141618] p-8 md:p-10">
                <div className="text-primary/20 absolute -top-4 -left-4 font-serif text-6xl">
                  &quot;
                </div>
                <p className="text-foreground/80 relative z-10 mb-8 text-lg leading-relaxed">
                  SolutionPlus delivered an automotive simulation platform with advanced mapping and
                  visualization. The attention to detail and ability to handle complex data sets
                  made them the perfect partner for an industry as demanding as ours.
                </p>
                <div className="flex items-center gap-4">
                  <div className="text-primary flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-lg font-bold">
                    AA
                  </div>
                  <div>
                    <h4 className="font-bold text-white">
                      Automotive Artificial Intelligence (AAI)
                    </h4>
                    <p className="text-foreground/50 text-sm">Germany</p>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.2} direction="up">
              <div className="relative rounded-3xl border border-white/5 bg-[#141618] p-8 md:p-10">
                <div className="text-secondary/20 absolute -top-4 -left-4 font-serif text-6xl">
                  &quot;
                </div>
                <p className="text-foreground/80 relative z-10 mb-8 text-lg leading-relaxed">
                  They built a robust MERN stack foundation and seamlessly integrated with Plaid,
                  DriveWealth, IBKR, and Stripe. What impressed us most was their ability to handle
                  financial data securely while still moving fast.
                </p>
                <div className="flex items-center gap-4">
                  <div className="text-secondary flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-lg font-bold">
                    AI
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Aghaz Invest</h4>
                    <p className="text-foreground/50 text-sm">United States</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 5. CTA Section */}
      <section className="relative overflow-hidden py-32">
        <div className="bg-primary/10 absolute inset-0" />
        <div className="bg-secondary/10 absolute top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[150px]" />

        <div className="relative z-10 container mx-auto max-w-4xl px-6 text-center md:px-12">
          <Reveal>
            <h2 className="mb-8 text-4xl font-bold md:text-6xl">
              Ready to skip the scroll and start a real conversation?
            </h2>
            <p className="text-foreground/70 mb-12 text-xl">
              Let&apos;s find out. Book a short call or send us your info. We&apos;ll be in touch,
              quick and clear.
            </p>
            <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
              <Link
                href={`/${locale}/contact-us`}
                className="bg-secondary group relative w-full overflow-hidden rounded-full px-10 py-5 text-lg font-bold text-white shadow-[0_4px_20px_-4px_rgba(255,112,67,0.4)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#ff8a65] hover:shadow-[0_8px_30px_-4px_rgba(255,112,67,0.6)] active:scale-95 sm:w-auto"
              >
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_2s_infinite]" />
                Contact Us Now
              </Link>
              <a
                href="mailto:hello@solutionplus.io"
                className="w-full rounded-full border border-white/10 bg-white/5 px-10 py-5 font-medium text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10 active:scale-95 sm:w-auto"
              >
                hello@solutionplus.io
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
