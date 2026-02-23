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
      <section className="relative flex min-h-[100vh] items-center overflow-hidden pt-24 pb-32 md:pt-32 md:pb-40 lg:pt-40 lg:pb-48">
        {/* Background Elements */}
        <div className="bg-primary/20 pointer-events-none absolute top-[0%] left-[-10%] h-[70%] w-[70%] rounded-full blur-[200px]" />
        <div className="bg-secondary/20 pointer-events-none absolute right-[-10%] bottom-[0%] h-[70%] w-[70%] rounded-full blur-[200px]" />
        <div className="pointer-events-none absolute inset-0 bg-[url('/noise.png')] opacity-30 mix-blend-overlay" />

        <div className="relative z-10 container mx-auto grid items-center gap-16 px-6 md:px-12 lg:grid-cols-2 lg:gap-24">
          <div className="max-w-3xl">
            <Reveal direction="up" delay={0.1}>
              <div className="skeuo-pill mb-10 inline-flex items-center gap-3 rounded-full px-5 py-2.5 transition-transform hover:scale-105">
                <span className="bg-secondary flex h-2.5 w-2.5 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite] rounded-full shadow-[0_0_8px_var(--secondary)]"></span>
                <span className="text-sm font-semibold tracking-widest text-white/90 uppercase">
                  {locale === 'de'
                    ? 'Software-Entwicklung der Spitzenklasse'
                    : 'Top-tier Software Delivery'}
                </span>
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.2}>
              <h1 className="mb-10 text-4xl leading-[1.08] font-black tracking-tight md:text-6xl lg:text-7xl">
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
              <p className="text-foreground/70 mb-8 max-w-2xl text-lg leading-relaxed font-light md:text-2xl">
                {locale === 'de'
                  ? 'Erhalten Sie ein zuverlässiges Entwicklerteam, ohne Zeit, Budget oder Dynamik zu verlieren. Von MVPs bis zur Skalierung.'
                  : 'Get dependable dev team without draining time, budget, or momentum. From MVPs to scale, we design high-performing tech solutions.'}
              </p>
              <p className="text-foreground/50 mb-10 max-w-2xl text-base leading-relaxed md:text-lg">
                {locale === 'de'
                  ? 'Ihre nächste Version sollte nicht an Einstellungsbürokratie scheitern. Holen Sie sich Senior-Ingenieure, auf die Sie sich verlassen können – ganz ohne den Overhead.'
                  : "Your next release shouldn't wait on hiring red tape. Bring in senior engineers you can rely on, with none of the overhead."}
              </p>
            </Reveal>

            <Reveal direction="up" delay={0.4}>
              <div className="flex flex-wrap items-center gap-8">
                <Link
                  href={`/${locale}/contact-us`}
                  className="skeuo-btn group relative flex items-center gap-3 overflow-hidden rounded-full px-8 py-4 text-lg font-bold tracking-wide text-white"
                >
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-[shimmer_2s_infinite]" />
                  {locale === 'de' ? 'Skalierung besprechen' : "Let's talk scale"}
                  <ArrowRight
                    size={24}
                    className="transition-transform group-hover:translate-x-2"
                  />
                </Link>
                <Link
                  href={`/${locale}/startup`}
                  className="skeuo-btn-secondary rounded-full px-8 py-4 text-lg font-medium text-white"
                >
                  {locale === 'de' ? 'Wie es funktioniert' : 'How it works'}
                </Link>
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.5}>
              <div className="text-foreground/50 mt-12 flex items-center gap-8 text-sm font-medium tracking-wide md:text-base">
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-secondary" /> Senior Engineers
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-secondary" /> Zero Compromise
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-secondary" /> Full Accountability
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal direction="left" delay={0.3} className="hidden lg:block">
            <div className="animate-float relative mx-auto aspect-square w-full max-w-2xl">
              <div className="from-primary/30 to-secondary/30 absolute inset-0 rounded-[3rem] bg-gradient-to-tr blur-3xl" />
              <div className="skeuo-card absolute inset-4 flex flex-col overflow-hidden rounded-[3rem] transition-transform duration-700 hover:scale-105">
                <div className="flex h-16 items-center gap-3 border-b border-[#0a0b0c] bg-[#1a1c1e] px-8 shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                  <div className="h-4 w-4 rounded-full bg-white/20" />
                  <div className="h-4 w-4 rounded-full bg-white/20" />
                  <div className="h-4 w-4 rounded-full bg-white/20" />
                </div>
                <div className="skeuo-inner text-primary/80 relative flex-1 overflow-hidden p-10 font-mono text-lg leading-loose">
                  <div className="absolute top-0 left-0 z-10 h-full w-full bg-gradient-to-b from-transparent via-transparent to-[#121415]" />
                  <pre className="opacity-80">
                    <code className="text-white/30">1 </code>{' '}
                    <span className="text-secondary">import</span> {'{ scale }'}{' '}
                    <span className="text-secondary">from</span> &apos;solution-plus&apos;;
                    <br />
                    <code className="text-white/30">2 </code>
                    <br />
                    <code className="text-white/30">3 </code>{' '}
                    <span className="text-primary">const</span> project ={' '}
                    <span className="text-primary">await</span> scale({'{'}
                    <br />
                    <code className="text-white/30">4 </code> team: &apos;senior-engineers&apos;,
                    <br />
                    <code className="text-white/30">5 </code> quality:
                    &apos;german-discipline&apos;,
                    <br />
                    <code className="text-white/30">6 </code> speed: &apos;sprint-ready&apos;
                    <br />
                    <code className="text-white/30">7 </code> {'}'});
                    <br />
                    <code className="text-white/30">8 </code>
                    <br />
                    <code className="text-white/30">9 </code> console.log(project.status);
                    <br />
                    <code className="text-white/30">10 </code>{' '}
                    <span className="animate-pulse text-[#0693e3]">{`// "Shipped."`}</span>
                    <br />
                  </pre>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. Value Proposition Grid */}
      <section className="relative border-y border-white/5 bg-[#0a0b0d] py-24 md:py-32 lg:py-40">
        <div className="container mx-auto px-6 md:px-12">
          <div className="mx-auto mb-20 max-w-4xl text-center">
            <Reveal>
              <h2 className="mb-14 text-5xl font-black tracking-tight md:text-7xl lg:text-8xl">
                {locale === 'de' ? 'Was wir tun — und gut machen' : 'What we do — and do well'}
              </h2>
              <p className="text-foreground/60 text-xl leading-relaxed font-light md:text-3xl">
                {locale === 'de'
                  ? 'Von MVPs bis zur Skalierung entwerfen wir leistungsstarke Technologielösungen, die von erstklassigen Teams geleitet werden.'
                  : 'From MVPs to scale, we design high-performing tech solutions led by top-tier teams. One partner, full accountability, zero compromise.'}
              </p>
            </Reveal>
          </div>

          <div className="grid gap-10 md:grid-cols-3 md:gap-12 lg:gap-14">
            {[
              {
                icon: <Zap size={48} className="text-secondary" />,
                title: locale === 'de' ? 'MVP-Sprints' : 'MVP Sprints',
                desc:
                  locale === 'de'
                    ? 'Launch in Wochen, nicht Monaten. Fester Umfang, vollständig verwaltet.'
                    : 'Launch in weeks, not months. Fixed scope, fully managed, ready to scale.',
                href: '/mvp-sprint',
              },
              {
                icon: <Users size={48} className="text-primary" />,
                title: locale === 'de' ? 'Dedizierte Teams' : 'Dedicated Teams',
                desc:
                  locale === 'de'
                    ? 'Wir stellen Ihr Offshore-Team zusammen und verwalten es. Skalieren Sie ohne Aufwand.'
                    : 'We set up and manage your offshore team. Scale without the hiring red tape.',
                href: '/dedicated-delivery-teams',
              },
              {
                icon: <Shield size={48} className="text-primary" />,
                title: locale === 'de' ? 'BOT-Modell' : 'Build-Operate-Transfer',
                desc:
                  locale === 'de'
                    ? 'Übernehmen Sie das Team, wenn Sie bereit sind. Keine Reibung, kein Lock-in.'
                    : 'Take over the team when you&apos;re ready. Zero friction, zero lock-in.',
                href: '/startup',
              },
            ].map((feature, i) => (
              <Reveal key={i} delay={0.15 * (i + 1)}>
                <Link
                  href={`/${locale}${feature.href}`}
                  className="group block h-full transition-all duration-700 hover:-translate-y-4"
                >
                  <div className="skeuo-card relative flex h-full min-h-[500px] flex-col overflow-hidden rounded-[3rem] p-14 transition-all duration-700 md:p-16">
                    <div className="from-primary/10 absolute inset-0 bg-gradient-to-tr via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                    <div className="absolute top-0 right-0 translate-x-8 -translate-y-8 p-12 opacity-0 transition-all duration-700 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100">
                      <ArrowRight
                        size={32}
                        className="group-hover:text-primary text-white/50 transition-colors"
                      />
                    </div>
                    <div className="skeuo-inner group-hover:text-primary mb-14 flex h-28 w-28 items-center justify-center rounded-[2rem] transition-all duration-700 group-hover:scale-110">
                      {feature.icon}
                    </div>
                    <h3 className="group-hover:from-primary group-hover:to-secondary mb-8 text-3xl font-black text-white transition-all group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:text-transparent">
                      {feature.title}
                    </h3>
                    <p className="text-foreground/60 mt-auto text-lg leading-loose md:text-xl">
                      {feature.desc}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. The Approach (German Discipline x Pakistani Engineering) */}
      <section className="relative overflow-hidden py-24 md:py-32 lg:py-40">
        <div className="container mx-auto grid items-center gap-16 px-6 md:px-12 lg:grid-cols-2 lg:gap-20">
          <Reveal direction="right">
            <div className="relative">
              <div className="bg-primary/30 absolute inset-0 rounded-[4rem] blur-[150px]" />
              <div className="skeuo-card relative overflow-hidden rounded-[4rem] p-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://solutionplus.io/wp-content/uploads/2025/09/We-combine-German-discipline-with-top-tier-Pakistani-engineering-14-scaled.jpg"
                  alt="Team collaboration"
                  className="h-auto w-full rounded-[3rem] object-cover opacity-80 mix-blend-luminosity transition-all duration-1000 hover:scale-105 hover:opacity-100 hover:mix-blend-normal"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0a0b0d] via-transparent to-transparent opacity-80" />
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <h2 className="mb-16 text-5xl leading-[1.1] font-black tracking-tight md:text-7xl lg:text-8xl">
                We combine <span className="text-gradient">German discipline</span> <br />
                with top-tier <span className="text-primary">Pakistani engineering</span>.
              </h2>
              <p className="text-foreground/60 mb-16 text-xl leading-relaxed font-light md:text-2xl">
                Our teams combine the structure, clarity, and reliability you&apos;d expect from a
                native-led German operation with the deep technical expertise and ambition of
                Pakistan&apos;s top engineers.
              </p>
              <div className="skeuo-card border-secondary/50 mb-16 border-l-4 p-8">
                <p className="text-2xl leading-relaxed font-medium text-white/90 italic md:text-3xl">
                  &quot;It&apos;s not just a collaboration. It&apos;s a system built for quality,
                  ownership, and teams that don&apos;t need chasing.&quot;
                </p>
              </div>
              <Link
                href={locale === 'de' ? `/${locale}/kontakt-solutionplus` : `/${locale}/about-team`}
                className="text-primary mt-8 inline-flex items-center gap-4 text-2xl font-bold tracking-wide transition-all duration-500 hover:gap-6 hover:text-[#ff8a65]"
              >
                Meet the team <ArrowRight size={28} />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4. Testimonials (Abstracted from Content) */}
      <section className="border-t border-white/5 bg-[#0a0b0d] py-24 md:py-32 lg:py-40">
        <div className="container mx-auto px-6 md:px-12">
          <Reveal>
            <h2 className="mb-32 text-center text-5xl font-black md:text-7xl lg:text-8xl">
              You won&apos;t be the first to <span className="text-secondary">trust us</span>
            </h2>
          </Reveal>
          <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-2 md:gap-24">
            <Reveal delay={0.1} direction="up">
              <div className="skeuo-card relative rounded-[3rem] p-16 transition-all duration-500 hover:-translate-y-2 md:p-20">
                <div className="text-primary/20 absolute -top-8 -left-8 font-serif text-9xl leading-none">
                  &quot;
                </div>
                <p className="text-foreground/80 relative z-10 mb-16 text-xl leading-relaxed font-light md:text-2xl">
                  SolutionPlus delivered an automotive simulation platform with advanced mapping and
                  visualization. The attention to detail and ability to handle complex data sets
                  made them the perfect partner for an industry as demanding as ours.
                </p>
                <div className="flex items-center gap-6">
                  <div className="skeuo-circle text-primary flex h-20 w-20 items-center justify-center rounded-[1.5rem] text-2xl font-bold">
                    AA
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">
                      Automotive Artificial Intelligence (AAI)
                    </h4>
                    <p className="text-foreground/50 text-lg">Germany</p>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.2} direction="up">
              <div className="skeuo-card relative rounded-[3rem] p-16 transition-all duration-500 hover:-translate-y-2 md:p-20">
                <div className="text-secondary/20 absolute -top-8 -left-8 font-serif text-9xl leading-none">
                  &quot;
                </div>
                <p className="text-foreground/80 relative z-10 mb-16 text-xl leading-relaxed font-light md:text-2xl">
                  They built a robust MERN stack foundation and seamlessly integrated with Plaid,
                  DriveWealth, IBKR, and Stripe. What impressed us most was their ability to handle
                  financial data securely while still moving fast.
                </p>
                <div className="flex items-center gap-6">
                  <div className="skeuo-circle text-secondary flex h-20 w-20 items-center justify-center rounded-[1.5rem] text-2xl font-bold">
                    AI
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">Aghaz Invest</h4>
                    <p className="text-foreground/50 text-lg">United States</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 5. CTA Section */}
      <section className="relative overflow-hidden py-24 md:py-32 lg:py-40">
        <div className="bg-primary/5 absolute inset-0" />
        <div className="bg-secondary/10 absolute top-1/2 left-1/2 h-[1200px] w-[1200px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[200px]" />

        <div className="relative z-10 container mx-auto max-w-5xl px-6 text-center md:px-12">
          <Reveal>
            <h2 className="mb-16 text-5xl leading-tight font-black tracking-tight md:text-7xl lg:text-8xl">
              Ready to skip the scroll and start a real conversation?
            </h2>
            <p className="text-foreground/60 mb-24 text-2xl leading-relaxed font-light md:text-3xl">
              Let&apos;s find out. Book a short call or send us your info. We&apos;ll be in touch,
              quick and clear.
            </p>
            <div className="flex flex-col items-center justify-center gap-10 sm:flex-row">
              <Link
                href={`/${locale}/contact-us`}
                className="skeuo-btn-accent group relative w-full overflow-hidden rounded-full px-16 py-8 text-2xl font-bold text-white sm:w-auto"
              >
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_2s_infinite]" />
                Contact Us Now
              </Link>
              <a
                href="mailto:hello@solutionplus.io"
                className="skeuo-btn-secondary w-full rounded-full px-16 py-8 text-2xl font-medium text-white sm:w-auto"
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
