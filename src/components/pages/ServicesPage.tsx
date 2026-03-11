'use client'
import { ProceduralIsometricBlocks } from '@/components/graphics/ProceduralIsometricBlocks'
import { ProceduralNetwork } from '@/components/graphics/ProceduralNetwork'
import { ProceduralDataGrid } from '@/components/graphics/ProceduralDataGrid'
import { ProceduralGeometricMesh } from '@/components/graphics/ProceduralGeometricMesh'

import { Reveal } from '@/components/animations/Reveal'
import {
  ArrowRight,
  Target,
  Sparkles,
  Activity,
  ShieldAlert,
  RefreshCcw,
  TrendingUp,
  CheckCircle2,
} from 'lucide-react'
import Link from 'next/link'
import { FloatiesBackground } from '@/components/ui/FloatiesBackground'
import { ContactFormSection } from '@/components/sections/ContactFormSection'
import { StickyQnA } from '@/components/sections/StickyQnA'
import { ImageWithShimmer } from '@/components/ui/ImageWithShimmer'

import { supportData } from '@/data/support-content'
import { Badge } from '@/components/ui/Badge'

export function ServicesPage({ locale }: { locale: string }) {
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
                  <RefreshCcw size={16} />
                  {isDe ? 'Software Modernisierung' : 'Product Modernization'}
                </div>
                <Badge variant="outline" className="text-white/60">
                  {supportData[isDe ? 'de' : 'en'].services.idealFor}: Existing Products
                </Badge>
              </div>
              <h1 className="mb-8 text-4xl leading-[1.1] font-bold md:text-6xl lg:text-7xl">
                {isDe ? 'Machen Sie Ihr Produkt bereit für ' : 'Make your product ready for '}{' '}
                <span className="text-sp-accent">{isDe ? 'die Zukunft' : "what's next."}</span>
              </h1>
              <p className="text-foreground/70 mb-10 max-w-xl text-xl leading-relaxed">
                {isDe
                  ? 'Alter Code, veraltetes Design und umständliche Workflows bremsen das Wachstum. Wir modernisieren Ihre bestehende Software, damit sie sicher, skalierbar und wettbewerbsfähig wird – ohne kompletten Neuaufbau.'
                  : "Old code, outdated design, and clunky workflows hold products back from growth. We modernize your existing software so it's secure, scalable, and competitive without a full rebuild."}
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
                  href="#how-it-works"
                  className="rounded-full border border-white/10 bg-white/5 px-8 py-4 font-medium text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10 active:scale-95"
                >
                  {isDe ? 'Mehr erfahren' : 'Learn more'}
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal direction="left">
            <div className="bg-sp-bg-medium relative h-64 w-full rotate-2 overflow-x-clip rounded-3xl border border-black/10 p-2 shadow-2xl transition-transform duration-500 hover:rotate-0 md:h-80 lg:h-[400px]">
              <ImageWithShimmer
                src="/images/old-code-14-1-scaled-uai-2560x1706.jpg"
                alt="Product Modernization"
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
        className="bg-sp-bg-dark relative scroll-mt-24 border-y border-white/5 py-24"
      >
        <div className="container mx-auto px-6 text-center md:px-12">
          <Reveal>
            <h2 className="mb-16 text-3xl font-bold md:text-5xl">
              {isDe ? 'Warum es wichtig ist' : 'Why it matters for your business'}
            </h2>
          </Reveal>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <TrendingUp size={32} className="text-sp-accent" />,
                title: isDe ? 'Kosten reduzieren' : 'Reduce costs',
                desc: isDe
                  ? 'Reduzieren Sie Wartungskosten durch den Austausch fragiler Legacy-Komponenten.'
                  : 'Reduce maintenance costs by replacing fragile legacy components.',
              },
              {
                icon: <ShieldAlert size={32} className="text-sp-accent" />,
                title: isDe ? 'Sicherheit & Leistung' : 'Improve security',
                desc: isDe
                  ? 'Verbessern Sie Leistung und Sicherheit, um aktuelle Standards zu erfüllen.'
                  : 'Improve performance and security to meet current standards.',
              },
              {
                icon: <Sparkles size={32} className="text-sp-accent" />,
                title: isDe ? 'Wettbewerbsfähig bleiben' : 'Stay competitive',
                desc: isDe
                  ? 'Halten Sie Ihr Produkt mit aktualisierter UX und neuen Funktionen wettbewerbsfähig.'
                  : 'Keep your product competitive with updated UX and new features.',
              },
              {
                icon: <Activity size={32} className="text-sp-accent" />,
                title: isDe ? 'Unterbrechungen vermeiden' : 'Avoid disruption',
                desc: isDe
                  ? 'Vermeiden Sie die Unterbrechung eines kompletten Neuaufbaus.'
                  : 'Avoid the disruption of a full rewrite.',
              },
            ].map((feature, i) => (
              <Reveal key={i} delay={0.1 * (i + 1)} direction="up">
                <div className="bg-sp-bg-medium group relative h-full overflow-hidden rounded-3xl border border-black/5 p-8 transition-all duration-300 hover:border-black/20">
                  <div className="bg-sp-bg-dark relative mb-6 h-32 w-full overflow-hidden rounded-2xl border border-white/5">
                    {i === 0 && <ProceduralIsometricBlocks layers={2} animated={true} />}
                    {i === 1 && <ProceduralNetwork nodeCount={15} animated={true} />}
                    {i === 2 && <ProceduralDataGrid animated={true} />}
                    {i === 3 && <ProceduralGeometricMesh variant="circle" animated={true} />}
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
        <div className="bg-sp-accent/5 pointer-events-none absolute top-1/2 left-0 h-[500px] w-[500px] -translate-y-1/2 rounded-full blur-[120px]" />
        <div className="container mx-auto grid items-center gap-16 px-6 md:px-12 lg:grid-cols-2">
          <Reveal direction="right">
            <div className="bg-sp-bg-medium relative h-64 overflow-x-clip rounded-3xl border border-black/10 p-2 md:h-80 lg:h-[400px]">
              <ImageWithShimmer
                src="/images/What-youll-ge-t-14-1-scaled-uai-2560x1706.jpg"
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
                  ? 'Technisches Audit und Modernisierungs-Roadmap'
                  : 'Technical audit and modernization roadmap',
                isDe
                  ? 'Architektur-Upgrades und Code-Refactoring'
                  : 'Architecture upgrades and code refactoring',
                isDe
                  ? 'Leistungsoptimierung und Sicherheitsverbesserungen'
                  : 'Performance tuning and security enhancements',
                isDe
                  ? 'UX/UI-Updates für aktuelle Nutzererwartungen'
                  : 'UX/UI updates for current user expectations',
                isDe
                  ? 'Regressionstests zur Gewährleistung der Stabilität'
                  : 'Regression testing to ensure stability',
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

      {/* Contact Section */}
      <section className="bg-sp-bg-medium relative overflow-x-clip py-24 md:py-32 lg:py-40">
        <div className="bg-sp-accent/10 absolute top-1/2 left-1/2 h-[1200px] w-[1200px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[200px]" />

        <div className="relative z-10 container mx-auto grid items-start gap-16 px-6 md:px-12 lg:grid-cols-2">
          <Reveal>
            <div className="max-w-xl">
              <h2 className="text-sp-text-dark mb-10 text-5xl leading-[1.1] font-black tracking-tight md:text-6xl">
                {isDe
                  ? 'Geben Sie Ihrem Produkt ein zweites Leben'
                  : 'Give your product a second life'}
              </h2>
              <p className="text-sp-text-on-light text-2xl leading-relaxed font-light">
                {isDe
                  ? 'Wir modernisieren Ihr Produkt in Phasen, sodass es live bleibt, während wir es verbessern.'
                  : 'We modernize your product in phases so it stays live while we improve it.'}
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
              ? 'Wird unsere aktuelle Plattform während der Modernisierung ausfallen?'
              : 'Will our current platform go down during modernization?',
            a: isDe
              ? 'Nein. Wir verwenden phasenweise Rollouts und Parallelsysteme, um sicherzustellen, dass Ihr Produkt für Benutzer voll funktionsfähig bleibt, während wir Backend oder Frontend aktualisieren.'
              : 'No. We use phased rollouts and parallel systems to ensure your product remains fully operational for users while we update the backend or frontend.',
          },
          {
            q: isDe
              ? 'Können Sie die Architektur verbessern, ohne das Design zu verändern?'
              : 'Can you improve the architecture without changing the design?',
            a: isDe
              ? 'Ja. Wenn Ihre Benutzeroberfläche einwandfrei funktioniert, können wir uns ausschließlich auf das Refactoring des Codes, die Cloud-Migration oder die Datenbankoptimierung konzentrieren, um das System zu beschleunigen.'
              : 'Yes. If your UI works perfectly, we can focus entirely on code refactoring, cloud migration, or database optimization to speed up the system.',
          },
          {
            q: isDe
              ? 'Sollten wir das Produkt komplett neu aufbauen oder stückweise reparieren?'
              : 'Should we completely rebuild the product or fix it piece by piece?',
            a: isDe
              ? 'Das hängt von Ihrer Codebasis ab. Wir beginnen immer mit einem technischen Audit, um festzustellen, ob ein Refactoring ausreicht oder ob ein Neuaufbau langfristig kostengünstiger ist.'
              : 'It depends on your codebase. We always start with a technical audit to determine if refactoring is enough or if a rebuild is more cost-effective long-term.',
          },
          {
            q: isDe
              ? 'Ist unser Code nach Abschluss gut dokumentiert?'
              : "Will our code be well documented once it's done?",
            a: isDe
              ? 'Absolut. Wir übergeben sauberen, kommentierten Code sowie eine vollständige technische Dokumentation, sodass jedes Team die Wartung problemlos übernehmen kann.'
              : 'Absolutely. We hand over clean, commented code along with full technical documentation, so any team can take over maintenance easily.',
          },
        ]}
      />

      {/* Testimonials */}
      <section className="bg-sp-bg-dark border-t border-white/5 py-24 md:py-32 lg:py-40">
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
        <div className="container mx-auto px-6 md:px-12 text-center">
          <Reveal>
            <h3 className="mb-8 text-2xl font-bold text-white">
              {supportData[isDe ? 'de' : 'en'].caseStudies.readMore}
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href={`/${locale}/${isDe ? 'fallstudien' : 'case-studies'}`}
                className="bg-white/5 border border-white/10 text-white/80 hover:border-sp-accent hover:text-sp-accent rounded-full px-6 py-2 text-sm font-semibold tracking-wide uppercase transition-colors"
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

      {/* Final CTA */}
      <section className="bg-sp-bg-medium border-sp-accent/10 relative overflow-x-clip border-t py-32">
        <div className="relative z-10 container mx-auto max-w-4xl px-6 text-center md:px-12">
          <Reveal>
            <h2 className="text-sp-text-dark mb-8 text-4xl font-bold md:text-6xl">
              {isDe ? 'Erweitern Sie Ihre' : 'Grow your'}{' '}
              <span className="text-sp-accent">{isDe ? 'Kapazitäten.' : 'capacity.'}</span>
            </h2>
            <p className="text-sp-text-on-light mb-12 text-xl">
              {isDe
                ? 'Holen Sie sich ein dediziertes Entwicklungsteam, das nach Ihren Standards und Ihrem Zeitplan arbeitet.'
                : 'Get a dedicated engineering team that works to your standards and on your schedule.'}
            </p>
            <Link
              href={`/${locale}/${isDe ? 'kontakt-solutionplus' : 'contact-us'}`}
              className="bg-sp-accent group hover:bg-sp-accent-dark relative inline-block overflow-x-clip rounded-full px-10 py-5 text-lg font-bold tracking-wide text-white shadow-[0_4px_20px_-4px_rgba(255,112,67,0.4)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_40px_-4px_rgba(255,112,67,0.6)] active:scale-95"
            >
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_2s_infinite]" />
              {isDe ? 'Team-Setup anfragen' : 'Get a team setup'}
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
