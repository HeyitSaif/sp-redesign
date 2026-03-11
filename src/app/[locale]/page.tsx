import { Reveal } from '@/components/animations/Reveal'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'
import { getKeywordsForPage } from '@/lib/keywords'
import { generatePageMetadata } from '@/lib/seo'
import { StructuredData } from '@/components/seo/StructuredData'
import { generateFAQSchema } from '@/lib/schemas'
import { HeroCarousel } from '@/components/sections/HeroCarousel'
import { ContactFormSection } from '@/components/sections/ContactFormSection'
import { InvestingFaqAccordion } from '@/components/sections/InvestingFaqAccordion'
import { ImageWithShimmer } from '@/components/ui/ImageWithShimmer'
import { StickyQnA } from '@/components/sections/StickyQnA'
import { Badge } from '@/components/ui/Badge'
import { supportData } from '@/data/support-content'

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

const HOME_FAQ_ITEMS = [
  {
    q: "Worried the quality won't hold up?",
    a: 'We only assign vetted senior engineers; no juniors, no freelancers. We delivered a full-stack MVP in 6 weeks for a Berlin startup. You see the roadmap, not a black box.',
  },
  {
    q: 'Think time zones will slow everything down?',
    a: 'We sync to your hours; full or partial overlap. Our Lahore team works in lockstep with your German-based ops, so no lost context.',
  },
  {
    q: "Afraid you'll lose control of your product?",
    a: 'You always own the code, the process, and the team. Our BOT model lets you scale now, and fully own later — with zero gray areas.',
  },
] as const

const HOME_FAQ_ITEMS_DE = [
  {
    q: 'Besorgt, dass die Qualität nicht hält?',
    a: 'Wir weisen nur geprüfte Senior-Ingenieure zu; keine Junioren, keine Freiberufler. Wir haben für ein Berliner Startup in 6 Wochen ein Full-Stack-MVP geliefert. Sie sehen die Roadmap, keine Blackbox.',
  },
  {
    q: 'Denken Sie, Zeitzonen verlangsamen alles?',
    a: 'Wir synchronisieren uns mit Ihren Arbeitszeiten; volle oder teilweise Überlappung. Unser Team in Lahore arbeitet im Gleichschritt mit Ihrem Team in Deutschland, sodass kein Kontext verloren geht.',
  },
  {
    q: 'Angst, die Kontrolle über Ihr Produkt zu verlieren?',
    a: 'Sie besitzen immer den Code, den Prozess und das Team. Mit unserem BOT-Modell können Sie jetzt skalieren und später vollständig übernehmen — ohne Grauzonen.',
  },
] as const

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const isDe = locale === 'de'
  const faqItems = isDe ? HOME_FAQ_ITEMS_DE : HOME_FAQ_ITEMS
  const faqSchema = generateFAQSchema(
    faqItems.map((item) => ({ question: item.q, answer: item.a }))
  )

  return (
    <div className="bg-sp-bg-dark flex w-full flex-col overflow-x-clip text-white">
      <StructuredData data={faqSchema} />
      {/* 1. Hero — 3-Slide Carousel */}
      <HeroCarousel locale={locale} />

      {/* 2. What we do — and do well */}
      <section className="bg-sp-bg-light text-sp-text-dark relative border-y border-white/5 py-24 md:py-32 lg:py-40">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="mx-auto mb-16 max-w-4xl text-center">
            <Reveal>
              <h2 className="text-sp-text-dark mb-10 text-5xl font-black tracking-tight md:mb-14 md:text-7xl lg:text-8xl">
                {isDe ? 'Was wir tun — und gut machen' : 'What we do — and do well'}
              </h2>
              <p className="text-sp-text-on-light text-xl leading-relaxed font-light md:text-3xl">
                {isDe
                  ? 'Von MVPs bis zur Skalierung entwerfen wir leistungsstarke Technologielösungen, die von erstklassigen Teams geleitet werden. Ein Partner, volle Verantwortung, keine Kompromisse.'
                  : 'From MVPs to scale, we design high-performing tech solutions led by top-tier teams. One partner, full accountability, zero compromise.'}
              </p>
            </Reveal>

            <Reveal delay={0.2} className="mt-12 md:mt-16">
              <div className="w-full overflow-hidden rounded-2xl shadow-2xl">
                <ImageWithShimmer
                  src="/images/3-Step-Visual-JPEG-03-scaled.jpg"
                  alt={isDe ? 'Drei Schritte zum Erfolg' : 'Three step visual'}
                  className="h-auto w-full object-contain"
                  fill={false}
                  width={2560}
                  height={1306}
                />
              </div>
            </Reveal>
          </div>

          <div className="grid gap-10 pt-12 md:grid-cols-3 md:gap-12 md:pt-16 lg:gap-14">
            {[
              {
                badge: supportData[isDe ? 'de' : 'en'].home.valueProps.startup.badge,
                title: isDe
                  ? 'Lösungen passend zu Ihrer Phase'
                  : 'Solutions built around your stage',
                desc: isDe
                  ? 'Starten Sie schnell mit einem risikofreien MVP oder Feature-Build – fester Umfang, vollständig gemanagt und bereit zu beweisen, dass wir liefern.'
                  : 'Launch fast with a risk-free MVP or feature build— fixed scope, fully managed, and ready to prove we deliver.',
                cta: isDe ? 'Starten Sie Ihr MVP' : 'Start your MVP',
                subtext: supportData[isDe ? 'de' : 'en'].home.valueProps.startup.subtext,
                href: `/${locale}#contact`,
                learnMore: `/${locale}/${isDe ? 'mvp-sprint-paket' : 'mvp-sprint-package'}`,
              },
              {
                badge: supportData[isDe ? 'de' : 'en'].home.valueProps.scaleup.badge,
                title: isDe
                  ? 'Build-Operate-Transfer (BOT) Teams'
                  : 'Build-operate-transfer (BOT) teams',
                desc: isDe
                  ? 'Wir bauen Ihr Offshore-Team auf und managen es, abgestimmt auf Ihren Workflow. Wenn Sie bereit sind, übernehmen Sie. Keine Reibung, kein Lock-in.'
                  : "We set up and manage your offshore team, aligned to your workflow. When you're ready, you take over. No friction, no lock-in.",
                cta: isDe ? 'Bauen Sie Ihr Team auf' : 'Build your team',
                subtext: supportData[isDe ? 'de' : 'en'].home.valueProps.scaleup.subtext,
                href: `/${locale}#contact`,
                learnMore: `/${locale}/${isDe ? 'dedizierte-teams' : 'dedicated-delivery-teams'}`,
              },
              {
                badge: supportData[isDe ? 'de' : 'en'].home.valueProps.relocation.badge,
                title: isDe ? 'Relocation-Support' : 'Relocation support',
                desc: isDe
                  ? 'Sie brauchen Ihre besten Ingenieure vor Ort? Wir kümmern uns um einen nahtlosen, ethischen Relocation-Prozess, damit Ihr geistiges Eigentum und Wissen in Ihrer Nähe bleiben.'
                  : 'Need your best engineers onsite? We handle seamless, ethical relocation so your IP and knowledge stay close.',
                cta: isDe ? 'Mit Vertrauen umziehen' : 'Relocate with confidence',
                subtext: supportData[isDe ? 'de' : 'en'].home.valueProps.relocation.subtext,
                href: `/${locale}#contact`,
              },
            ].map((feature, i) => (
              <Reveal key={i} delay={0.15 * (i + 1)}>
                <div className="border-sp-border-light flex h-full flex-col border-l pl-8 transition-transform hover:-translate-y-2">
                  {feature.badge && (
                    <div className="mb-4">
                      <Badge
                        variant="outline"
                        className="border-sp-accent/30 text-sp-accent bg-sp-accent/5"
                      >
                        {feature.badge}
                      </Badge>
                    </div>
                  )}
                  <h4 className="text-sp-text-dark mb-6 text-2xl font-semibold">{feature.title}</h4>
                  <p className="text-sp-text-on-light mb-10 flex-1 text-lg leading-relaxed">
                    {feature.desc}
                  </p>
                  <div className="mt-auto flex flex-col items-start gap-4">
                    <Link
                      href={feature.href}
                      className="text-sp-text-dark hover:text-sp-link-hover group inline-flex items-center gap-2 text-lg font-medium transition-colors"
                    >
                      {feature.cta}
                      <ArrowRight
                        size={20}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </Link>
                    {feature.subtext && (
                      <span className="text-sp-text-on-light/70 text-sm font-medium">
                        {feature.subtext}
                      </span>
                    )}
                    {feature.learnMore && (
                      <Link
                        href={feature.learnMore}
                        className="text-sp-accent hover:text-sp-accent-dark text-sm font-medium underline underline-offset-4"
                      >
                        {isDe ? 'Mehr erfahren' : 'Learn more'}
                      </Link>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Filler Bridge: Relocation Support to German Discipline */}
      <div className="bg-sp-bg-medium border-b border-white/5 py-16 text-center">
        <Reveal>
          <div className="flex flex-col items-center justify-center gap-4">
            <p className="text-sp-text-dark/80 container mx-auto max-w-4xl px-6 text-xl font-light italic md:text-2xl">
              {isDe
                ? 'Wir bringen Struktur und Talent unter einem Dach zusammen.'
                : 'We bring structure and talent together under one roof.'}
            </p>
            <span className="text-sp-text-on-light/60 text-sm font-semibold tracking-widest uppercase">
              {supportData[isDe ? 'de' : 'en'].home.fillerBridge}
            </span>
          </div>
        </Reveal>
      </div>

      {/* 3. German discipline + Pakistani engineering */}
      <section className="bg-sp-bg-medium text-sp-text-dark relative overflow-x-clip py-24 md:py-32 lg:py-40">
        <div className="container mx-auto grid items-center gap-16 px-6 md:px-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <Reveal>
              <h2 className="text-sp-text-dark mb-12 text-4xl leading-[1.2] font-black tracking-tight md:text-6xl">
                {isDe
                  ? 'Wir kombinieren deutsche Disziplin mit pakistanischer Spitzeningenieurskunst. So liefern wir Qualität.'
                  : 'We combine German discipline with top-tier Pakistani engineering. It’s how we deliver quality.'}
              </h2>
              <hr className="border-sp-border-light my-10 w-24 border-t-2" />
              <div className="text-sp-text-on-light space-y-8 text-xl leading-relaxed font-light">
                <p>
                  {isDe
                    ? 'Unsere Teams vereinen die Struktur, Klarheit und Zuverlässigkeit, die Sie von einem deutsch geführten Unternehmen erwarten, mit der tiefgreifenden technischen Expertise und dem Ehrgeiz von Pakistans Top-Ingenieuren. Es ist nicht nur eine Zusammenarbeit.'
                    : 'Our teams combine the structure, clarity, and reliability you’d expect from a native-led German operation with the deep technical expertise and ambition of Pakistan’s top engineers. It’s not just a collaboration.'}
                </p>
                <p className="text-sp-text-dark font-medium">
                  {isDe
                    ? 'Es ist ein System, das auf Qualität, Eigenverantwortung und Teams aufbaut, denen man nicht hinterherlaufen muss.'
                    : 'It’s a system built for quality, ownership, and teams that don’t need chasing.'}
                </p>
              </div>

              {/* By the numbers strip */}
              <div className="border-sp-border-light mt-12 grid grid-cols-2 gap-8 border-t pt-8 md:grid-cols-4">
                {[
                  { value: supportData[isDe ? 'de' : 'en'].stats.engineers },
                  { value: supportData[isDe ? 'de' : 'en'].stats.clients },
                  { value: supportData[isDe ? 'de' : 'en'].stats.years },
                  { value: supportData[isDe ? 'de' : 'en'].stats.locations },
                ].map((stat, i) => (
                  <div key={i} className="flex flex-col gap-2">
                    <span className="text-sp-text-dark text-lg font-bold">
                      {stat.value.split(' ')[0]}
                    </span>
                    <span className="text-sp-text-on-light text-sm font-medium">
                      {stat.value.split(' ').slice(1).join(' ')}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                href={isDe ? `/${locale}/ueber-solutionplus` : `/${locale}/about-team`}
                className="text-sp-text-dark hover:text-sp-link-hover group mt-12 inline-flex items-center gap-4 text-xl font-medium transition-all"
              >
                {isDe ? 'Lernen Sie das Team kennen' : 'Meet the team'}{' '}
                <ArrowRight size={24} className="transition-transform group-hover:translate-x-2" />
              </Link>
            </Reveal>
          </div>

          <Reveal direction="left">
            <div className="flex flex-col items-center gap-2">
              <div className="relative h-64 w-full overflow-hidden rounded-[2rem] shadow-2xl md:h-80 lg:h-[400px]">
                <ImageWithShimmer
                  src="/images/We-combine-German-discipline-with-top-tier-Pakistani-engineering-14-scaled.jpg"
                  alt="German discipline with Pakistani engineering"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <span className="text-sp-text-on-light/60 text-sm font-medium italic">
                {supportData[isDe ? 'de' : 'en'].home.germanDiscipline.caption}
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4. Contact section — Ready to skip the scroll */}
      <section
        id="contact"
        className="bg-sp-bg-dark relative overflow-x-clip py-24 md:py-32 lg:py-40"
      >
        <div className="bg-sp-accent/10 absolute top-1/2 left-1/2 h-[1200px] w-[1200px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[200px]" />

        <div className="relative z-10 container mx-auto grid items-start gap-16 px-6 md:px-12 lg:grid-cols-2">
          <Reveal>
            <div className="max-w-xl">
              <h2 className="mb-6 text-5xl leading-[1.1] font-black tracking-tight text-white md:text-6xl">
                {isDe
                  ? 'Bereit, das Scrollen zu überspringen und ein echtes Gespräch zu beginnen?'
                  : 'Ready to skip the scroll and start a real conversation?'}
              </h2>
              <div className="mb-10 flex flex-wrap gap-4">
                <Badge
                  variant="secondary"
                  className="border-emerald-500/20 bg-emerald-500/10 text-emerald-400"
                >
                  {supportData[isDe ? 'de' : 'en'].contact.responseTime}
                </Badge>
                <Badge variant="outline" className="text-white/60">
                  {supportData[isDe ? 'de' : 'en'].contact.promise}
                </Badge>
              </div>
              <p className="text-foreground/70 text-2xl leading-relaxed font-light">
                {isDe
                  ? 'Lassen Sie es uns herausfinden. Buchen Sie einen kurzen Call oder senden Sie uns Ihre Infos. Wir melden uns schnell und klar.'
                  : 'Let’s find out. Book a short call or send us your info. We’ll be in touch, quick and clear.'}
              </p>
            </div>
          </Reveal>

          <Reveal direction="left" delay={0.2}>
            <ContactFormSection locale={locale} />
          </Reveal>
        </div>
      </section>

      {/* 5. FAQ — Our essential perspectives on investing */}
      <section className="bg-sp-bg-medium text-sp-text-dark py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12">
          <Reveal>
            <h2 className="text-sp-accent mb-16 text-center text-4xl font-bold tracking-tight md:text-5xl">
              {isDe
                ? 'Unsere wesentlichen Perspektiven zum Thema Investieren'
                : 'Our essential perspectives on investing'}
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <InvestingFaqAccordion locale={locale} />
          </Reveal>
        </div>
      </section>

      {/* 6. You're not the first to ask */}
      <StickyQnA
        locale={locale}
        items={[
          {
            q: isDe
              ? 'Besorgt, dass die Qualität nicht hält?'
              : 'Worried the quality won’t hold up?',
            a: isDe
              ? 'Wir weisen nur geprüfte Senior-Ingenieure zu; keine Junioren, keine Freiberufler. Wir haben für ein Berliner Startup in 6 Wochen ein Full-Stack-MVP geliefert. Sie sehen die Roadmap, keine Blackbox.'
              : 'We only assign vetted senior engineers; no juniors, no freelancers. We delivered a full-stack MVP in 6 weeks for a Berlin startup. You see the roadmap, not a black box.',
          },
          {
            q: isDe
              ? 'Denken Sie, Zeitzonen verlangsamen alles?'
              : 'Think time zones will slow everything down?',
            a: isDe
              ? 'Wir synchronisieren uns mit Ihren Arbeitszeiten; volle oder teilweise Überlappung. Unser Team in Lahore arbeitet im Gleichschritt mit Ihrem Team in Deutschland, sodass kein Kontext verloren geht.'
              : 'We sync to your hours; full or partial overlap. Our Lahore team works in lockstep with your German-based ops, so no lost context.',
          },
          {
            q: isDe
              ? 'Angst, die Kontrolle über Ihr Produkt zu verlieren?'
              : 'Afraid you’ll lose control of your product?',
            a: isDe
              ? 'Sie besitzen immer den Code, den Prozess und das Team. Mit unserem BOT-Modell können Sie jetzt skalieren und später vollständig übernehmen — ohne Grauzonen.'
              : 'You always own the code, the process, and the team. Our BOT model lets you scale now, and fully own later — with zero gray areas.',
          },
        ]}
      />

      {/* Filler Bridge: Before Testimonials */}
      <div className="bg-sp-bg-medium border-b border-black/5 py-16 text-center">
        <Reveal>
          <p className="text-sp-text-dark/80 container mx-auto max-w-4xl px-6 text-xl font-light italic md:text-2xl">
            {isDe
              ? 'Das sagen Partner über die Zusammenarbeit mit uns.'
              : "Here's what partners say about working with us."}
          </p>
        </Reveal>
      </div>

      {/* 7. Testimonials */}
      <section className="bg-sp-bg-medium py-24 md:py-32 lg:py-40">
        <div className="container mx-auto px-6 md:px-12">
          <Reveal>
            <div className="mx-auto mb-20 max-w-4xl text-center">
              <h2 className="text-sp-text-dark mb-10 text-4xl font-bold md:text-6xl">
                {isDe
                  ? 'Sie werden nicht der Erste sein, der uns vertraut'
                  : 'You won’t be the first to trust us'}
              </h2>
              <p className="text-sp-text-on-light text-xl leading-relaxed font-light md:text-2xl">
                {isDe
                  ? 'Von MVPs bis hin zu vollständigen Teamtransfers haben wir Unternehmen in Deutschland, den USA und Europa unterstützt; wir liefern leise, transparent und immer mit dem Ziel langfristigen Vertrauens.'
                  : 'From MVPs to full team transfers, we’ve supported companies across Germany, the US, and Europe; delivering quietly, transparently, and always with long-term trust in mind.'}
              </p>
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
                <h3 className="text-sp-text-dark mb-2 text-2xl font-bold">
                  Automotive Artificial Intelligence (AAI) GmBh
                </h3>
                <div className="mb-6">
                  <Badge variant="outline" className="text-sp-text-on-light border-sp-border-light">
                    Automotive AI
                  </Badge>
                </div>
                <blockquote className="text-sp-text-on-light flex-1 text-lg leading-relaxed italic">
                  &quot;SolutionPlus delivered an automotive simulation platform with advanced
                  mapping and visualization. The attention to detail and ability to handle complex
                  data sets made them the perfect partner for an industry as demanding as
                  ours.&quot;
                </blockquote>
                <div className="border-sp-border-light mt-8 flex items-center justify-between border-t pt-8">
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 shrink-0 overflow-x-clip rounded-full bg-gray-100">
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
                  <Link
                    href={`/${locale}/${isDe ? 'fallstudien' : 'case-studies'}/automotive-ai`}
                    className="text-sp-accent hover:text-sp-accent-dark bg-sp-accent/5 flex shrink-0 items-center justify-center rounded-full p-3 transition-colors"
                  >
                    <ArrowRight size={20} />
                  </Link>
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
                <h3 className="text-sp-text-dark mb-2 text-2xl font-bold">Aghaz Invest</h3>
                <div className="mb-6">
                  <Badge variant="outline" className="text-sp-text-on-light border-sp-border-light">
                    Fintech
                  </Badge>
                </div>
                <blockquote className="text-sp-text-on-light flex-1 text-lg leading-relaxed italic">
                  &quot;Solution Plus turned our vision for a digital investment platform into
                  reality. They built a robust MERN stack foundation and seamlessly integrated with
                  Plaid, DriveWealth, IBKR, and Stripe. What impressed us most was their ability to
                  handle financial data securely while still moving fast. Thanks to their work, we
                  were able to launch confidently and scale without worrying about the
                  technology.&quot;
                </blockquote>
                <div className="border-sp-border-light mt-8 flex items-center gap-4 border-t pt-8">
                  <div className="h-16 w-16 shrink-0 overflow-x-clip rounded-full bg-gray-100">
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

      {/* 8. Start a project CTA */}
      <section className="bg-sp-bg-dark relative overflow-x-clip py-24 md:py-32">
        {/* Accent background overlay per HTML */}
        <div className="bg-sp-accent absolute inset-0 opacity-20 mix-blend-multiply" />
        <div className="absolute inset-0 bg-[url('/images/Gradient-28-scaled.jpg')] bg-cover bg-center opacity-30 mix-blend-overlay" />

        <div className="relative z-10 container mx-auto px-6 text-center">
          <Reveal>
            <h4 className="mb-6 text-sm font-bold tracking-[0.2em] text-white/80 uppercase md:text-base">
              {isDe ? 'Starten Sie ein Projekt' : 'Start a project'}
            </h4>
            <h3 className="mb-14 text-4xl font-bold tracking-tight text-white md:text-6xl">
              {isDe
                ? 'Ihr Wachstum muss nicht warten. Unser Team ist bereit, wenn Sie es sind.'
                : 'Your growth doesn’t have to wait. Our team is ready when you are.'}
            </h3>
            <div className="flex flex-col items-center justify-center gap-4">
              <Link
                href={`/${locale}/${locale === 'de' ? 'kontakt-solutionplus' : 'contact-us'}`}
                className="hover:text-sp-bg-dark inline-flex items-center gap-3 rounded-full border border-white bg-transparent px-10 py-5 text-xl font-medium text-white transition-colors hover:bg-white"
              >
                {isDe ? 'Kontakt aufnehmen' : 'Contact Us'}
              </Link>
              <span className="text-sm font-medium text-white/60">
                {supportData[isDe ? 'de' : 'en'].home.cta}
              </span>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
