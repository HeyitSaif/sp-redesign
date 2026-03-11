'use client'
import { ProceduralDataGrid } from '@/components/graphics/ProceduralDataGrid'
import { ProceduralNetwork } from '@/components/graphics/ProceduralNetwork'
import { ProceduralGeometricMesh } from '@/components/graphics/ProceduralGeometricMesh'
import { Reveal } from '@/components/animations/Reveal'
import {
  ArrowRight,
  CheckCircle2,
  Target,
  Rocket,
  Users,
  Code2,
  Wallet,
  UserPlus,
  ShieldAlert,
} from 'lucide-react'
import Link from 'next/link'
import { StickyQnA } from '@/components/sections/StickyQnA'
import { ImageWithShimmer } from '@/components/ui/ImageWithShimmer'
import { ContactFormSection } from '@/components/sections/ContactFormSection'
import { FloatiesBackground } from '@/components/ui/FloatiesBackground'
import { Button } from '@/components/ui/Button'

import { supportData } from '@/data/support-content'
import { Badge } from '@/components/ui/Badge'

export function StartupPage({ locale }: { locale: string }) {
  return (
    <div className="relative flex w-full flex-col overflow-x-clip pt-24 pb-16 md:pt-32 md:pb-24">
      <FloatiesBackground />
      {/* Hero */}
      <section className="relative flex min-h-[70vh] items-center overflow-x-clip py-12 md:py-16 lg:py-20">
        <div className="bg-sp-accent/5 pointer-events-none absolute inset-0 blur-[120px]" />
        <div className="relative z-10 container mx-auto max-w-4xl px-5 text-center md:px-12">
          <Reveal>
            <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
              <span className="text-sp-accent border-sp-border-dark bg-sp-surface-subtle rounded-full border px-4 py-2 text-sm font-medium">
                For Startups
              </span>
              <Badge variant="outline" className="text-white/60">
                {supportData[locale === 'de' ? 'de' : 'en'].services.idealFor}: Pre-Seed to Series A
              </Badge>
            </div>
            <h1 className="mb-8 text-3xl md:text-4xl leading-[1.1] font-bold md:text-7xl">
              The more you <span className="text-gradient">grow</span>, the harder it gets to stay
              on track.
            </h1>
            <p className="text-foreground/70 mx-auto mb-8 md:mb-12 max-w-2xl text-xl">
              We provide the designers, developers, QA, and delivery management so you can focus on
              strategy and product. You lead the vision, we handle the execution.
            </p>
            <div className="mb-10 text-center">
              <span className="text-sm font-semibold tracking-wider text-white/50 uppercase">
                {supportData[locale === 'de' ? 'de' : 'en'].services.deliveryModel}: Managed remote
                engineering teams
              </span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button
                variant="primary"
                size="md"
                href={`/${locale}/${locale === 'de' ? 'kontakt-solutionplus' : 'contact-us'}`}
              >
                Set up a short call{' '}
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="secondary"
                size="md"
                href={`/${locale}/${locale === 'de' ? 'kontakt-solutionplus' : 'contact-us'}`}
              >
                Learn more
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* What you&apos;re probably thinking */}
      <section id="what-youre-thinking" className="bg-sp-bg-dark scroll-mt-10 md:mt-16 md:mt-24 py-12 md:py-16 lg:py-24">
        <div className="container mx-auto px-5 md:px-8 lg:px-12">
          <Reveal>
            <h2 className="mb-10 md:mb-16 text-center text-3xl font-bold md:text-3xl md:text-4xl md:text-5xl">
              What you&apos;re probably thinking?
            </h2>
          </Reveal>
          <div className="grid gap-5 md:gap-8 md:grid-cols-3">
            <Reveal delay={0.1}>
              <div className="bg-sp-bg-medium h-full rounded-3xl border border-black/5 p-5 md:p-8">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-black/5 bg-white shadow-sm">
                  <Wallet className="text-sp-accent" size={28} />
                </div>
                <p className="text-sp-text-dark text-xl font-medium">
                  &quot;We can&apos;t afford to keep hiring in-house just yet.&quot;
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="bg-sp-bg-medium h-full rounded-3xl border border-black/5 p-5 md:p-8">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-black/5 bg-white shadow-sm">
                  <Users className="text-sp-accent" size={28} />
                </div>
                <p className="text-sp-text-dark text-xl font-medium">
                  &quot;Our current team is maxed out; we need extra hands that won&apos;t derail
                  the roadmap.&quot;
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="bg-sp-bg-medium h-full rounded-3xl border border-black/5 p-5 md:p-8">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-black/5 bg-white shadow-sm">
                  <ShieldAlert className="text-sp-accent" size={28} />
                </div>
                <p className="text-sp-text-dark text-xl font-medium">
                  &quot;We&apos;ve had bad luck with freelancers. We need someone reliable this
                  time.&quot;
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Why this works */}
      <section className="relative overflow-x-clip py-12 md:py-16 lg:py-24">
        <div className="bg-sp-accent/10 pointer-events-none absolute top-1/2 right-0 h-1/2 w-1/2 -translate-y-1/2 rounded-full blur-[150px]" />
        <div className="container mx-auto px-5 md:px-8 lg:px-12">
          <div className="grid items-center gap-10 md:gap-16 lg:grid-cols-2">
            <div>
              <Reveal>
                <h2 className="mb-8 text-3xl font-bold md:text-3xl md:text-4xl md:text-5xl">Why this works</h2>
              </Reveal>
              <div className="space-y-6">
                {[
                  'UX/UI design tailored to both users and investors, so your product looks sharp and feels right from the start.',
                  'Rapid sprints with QA baked in, keeping your releases clean, reliable, and on track.',
                  'Git-based workflows and sprint velocity tracking, so you always know where things stand.',
                  'Flexibility to grow, easily expand your team or evolve into a long-term setup when you&apos;re ready.',
                ].map((item, i) => (
                  <Reveal key={i} delay={0.1 * i} direction="right">
                    <div className="border-sp-border-dark bg-sp-surface-subtle flex gap-4 overflow-hidden rounded-2xl border p-5 md:p-6">
                      <div className="mt-1 shrink-0">
                        <CheckCircle2 className="text-sp-accent" />
                      </div>
                      <p className="text-foreground/80 leading-relaxed">{item}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
            <Reveal direction="left">
              <div className="bg-sp-bg-medium relative h-64 overflow-x-clip rounded-3xl border border-black/10 p-2 md:h-80 lg:h-[500px]">
                <ImageWithShimmer
                  src="/images/What-you-get-with-us-scaled.jpg"
                  alt="What you get with us"
                  wrapperClassName="rounded-2xl h-full w-full"
                  className="object-cover opacity-80 mix-blend-luminosity transition-all duration-700 hover:mix-blend-normal"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* How we help you move forward */}
      <section className="bg-sp-bg-dark py-12 md:py-16 lg:py-24">
        <div className="container mx-auto max-w-4xl px-5 text-center md:px-12">
          <Reveal>
            <h2 className="mb-10 md:mb-16 text-3xl font-bold md:text-3xl md:text-4xl md:text-5xl">How we help you move forward!</h2>
          </Reveal>

          <div className="grid gap-5 md:gap-8 text-left md:grid-cols-3">
            <Reveal delay={0.1} direction="up">
              <div className="group bg-sp-bg-medium relative overflow-hidden rounded-3xl border border-black/5 p-5 md:p-8 transition-transform duration-300 hover:-translate-y-2">
                <div className="group-hover:text-sp-accent/[0.1] text-sp-text-dark/[0.03] absolute -top-6 -right-6 z-0 text-9xl font-bold transition-colors">
                  01
                </div>
                <div className="bg-sp-bg-dark border-sp-border-dark relative z-10 mb-6 h-32 w-full shrink-0 overflow-hidden rounded-xl md:h-40 md:rounded-2xl border">
                  <ProceduralGeometricMesh variant="mixed" animated={true} />
                  <div className="bg-sp-bg-dark/60 group-hover:bg-sp-bg-dark/40 absolute inset-0 flex items-center justify-center transition-colors duration-500">
                    <Users size={32} className="text-sp-accent" />
                  </div>
                </div>
                <h3 className="text-sp-text-dark relative z-20 mb-4 text-xl font-bold">
                  Flexible Delivery Pods
                </h3>
                <p className="text-sp-text-on-light relative z-20 leading-relaxed">
                  Sprint-ready teams that plug into your workflows: Senior developers, UI/UX QA, led
                  by experienced German delivery managers.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2} direction="up">
              <div className="group bg-sp-bg-medium relative overflow-hidden rounded-3xl border border-black/5 p-5 md:p-8 transition-transform duration-300 hover:-translate-y-2">
                <div className="group-hover:text-sp-accent/[0.1] text-sp-text-dark/[0.03] absolute -top-6 -right-6 z-0 text-9xl font-bold transition-colors">
                  02
                </div>
                <div className="bg-sp-bg-dark border-sp-border-dark relative z-10 mb-6 h-32 w-full shrink-0 overflow-hidden rounded-xl md:h-40 md:rounded-2xl border">
                  <ProceduralDataGrid animated={true} />
                  <div className="bg-sp-bg-dark/60 group-hover:bg-sp-bg-dark/40 absolute inset-0 flex items-center justify-center transition-colors duration-500">
                    <Target size={32} className="text-sp-accent" />
                  </div>
                </div>
                <h3 className="text-sp-text-dark relative z-20 mb-4 text-xl font-bold">
                  Reliable Execution
                </h3>
                <p className="text-sp-text-on-light relative z-20 leading-relaxed">
                  No black-box delivery, no daily chasing. Our teams integrate into your rhythm,
                  with shared tools, clear timelines, and high accountability.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.3} direction="up">
              <div className="group bg-sp-bg-medium relative overflow-hidden rounded-3xl border border-black/5 p-5 md:p-8 transition-transform duration-300 hover:-translate-y-2">
                <div className="group-hover:text-sp-accent/[0.1] text-sp-text-dark/[0.03] absolute -top-6 -right-6 z-0 text-9xl font-bold transition-colors">
                  03
                </div>
                <div className="bg-sp-bg-dark border-sp-border-dark relative z-10 mb-6 h-32 w-full shrink-0 overflow-hidden rounded-xl md:h-40 md:rounded-2xl border">
                  <ProceduralNetwork nodeCount={15} animated={true} />
                  <div className="bg-sp-bg-dark/60 group-hover:bg-sp-bg-dark/40 absolute inset-0 flex items-center justify-center transition-colors duration-500">
                    <Rocket size={32} className="text-sp-accent" />
                  </div>
                </div>
                <h3 className="text-sp-text-dark relative z-20 mb-4 text-xl font-bold">
                  Scale Without Risk
                </h3>
                <p className="text-sp-text-on-light relative z-20 leading-relaxed">
                  Start with a delivery sprint, then grow into a dedicated team. Add specialists in
                  your team as you go, without blowing your burn rate.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-sp-bg-dark relative overflow-x-clip py-12 md:py-16 lg:py-24 xl:py-32">
        <div className="bg-sp-accent/10 absolute top-1/2 left-1/2 h-[1200px] w-[1200px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[150px]" />

        <div className="relative z-10 container mx-auto grid items-start gap-10 md:gap-16 px-5 md:px-8 lg:px-12 lg:grid-cols-2">
          <Reveal>
            <div className="max-w-xl">
              <h2 className="mb-10 text-3xl md:text-4xl md:text-5xl leading-[1.1] font-black tracking-tight text-white md:text-3xl md:text-4xl md:text-5xl md:text-6xl">
                {locale === 'de'
                  ? 'Lassen Sie uns lösen, was Sie bremst'
                  : "Let's solve what's slowing you down"}
              </h2>
              <p className="text-foreground/70 text-2xl leading-relaxed font-light">
                {locale === 'de'
                  ? 'Wenn jeder Sprint zählt, brauchen Sie weniger Rätselraten und mehr Traktion. Lassen Sie uns darüber sprechen, wo Sie feststecken und wie wir Ihnen helfen können, weiterzukommen.'
                  : "When every sprint counts, you need less guesswork and more traction. Let's talk about where you're stuck and how we can help you get unstuck."}
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
            q:
              locale === 'de'
                ? 'Wir haben kein vollständiges Tech-Team. Können wir trotzdem mit Ihnen arbeiten?'
                : "We don't have a full tech team. Can we still work with you?",
            a:
              locale === 'de'
                ? 'Ja. Wir stellen die Designer, Entwickler, QA und das Delivery Management zur Verfügung, damit Sie sich auf Strategie und Produkt konzentrieren können. Sie leiten die Vision, wir kümmern uns um die Umsetzung.'
                : 'Yes. We provide the designers, developers, QA, and delivery management so you can focus on strategy and product. You lead the vision, we handle the execution.',
          },
          {
            q:
              locale === 'de'
                ? 'Müssen wir das Team täglich managen?'
                : 'Do we have to manage the team daily?',
            a:
              locale === 'de'
                ? 'Ganz und gar nicht. Wir weisen einen Delivery Lead zu, der alles auf Kurs und synchron mit Ihren Prioritäten hält. Sie bleiben informiert, ohne Mikromanagement betreiben zu müssen.'
                : 'Not at all. We assign a delivery lead who keeps everything on track and in sync with your priorities. You stay informed without having to micromanage.',
          },
          {
            q:
              locale === 'de'
                ? 'Wie wissen wir, dass die Code-Qualität hält, wenn wir skalieren?'
                : 'How do we know the code quality will hold up as we scale?',
            a:
              locale === 'de'
                ? 'Wir folgen sauberen Programmierpraktiken, effizienter Lieferung und Git-basierten Workflows, um sicherzustellen, dass alles stabil und wartbar bleibt, während Ihr Produkt wächst.'
                : 'We follow clean coding practices, efficient delivery, and Git-based workflows to ensure everything stays stable and maintainable as your product grows.',
          },
          {
            q:
              locale === 'de'
                ? 'Können wir klein anfangen und später erweitern?'
                : 'Can we start small and expand later?',
            a:
              locale === 'de'
                ? 'Absolut. Viele Startups beginnen mit einem einzelnen Sprint oder Delivery Pod und wachsen zu dedizierten Teams, wenn die Traktion zunimmt.'
                : 'Absolutely. Many startups begin with a single sprint or delivery pod and grow into dedicated teams as traction builds.',
          },
          {
            q:
              locale === 'de'
                ? 'Wird die Kommunikation über Zeitzonen hinweg eine Herausforderung sein?'
                : 'Will communication be a challenge across time zones?',
            a:
              locale === 'de'
                ? 'Wir arbeiten synchron mit Ihren bevorzugten Arbeitszeiten; volle oder teilweise Überlappung. Ihr Team wird sich lokal anfühlen, auch wenn es das nicht ist.'
                : "We work in sync with your preferred hours; full or partial overlap. Your team will feel local, even if they're not.",
          },
        ]}
      />

      {/* Testimonials */}
      <section className="bg-sp-bg-medium py-12 md:py-16 lg:py-24 xl:py-32">
        <div className="container mx-auto px-5 md:px-8 lg:px-12">
          <Reveal>
            <div className="mx-auto mb-20 max-w-4xl text-center">
              <h2 className="text-sp-text-dark mb-10 text-3xl md:text-4xl font-bold md:text-3xl md:text-4xl md:text-5xl md:text-6xl">
                {locale === 'de'
                  ? 'Was Gründer wie Sie über uns sagten'
                  : 'What founders like you said about us'}
              </h2>
            </div>
          </Reveal>

          <div className="mx-auto grid max-w-6xl gap-5 md:gap-8 md:gap-12 md:grid-cols-2">
            <Reveal direction="up" delay={0.1}>
              <div className="border-sp-border-testimonial flex h-full flex-col overflow-hidden rounded-2xl border bg-white p-5 md:p-8 md:p-12 shadow-lg transition-transform duration-500 hover:-translate-y-2">
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
              <div className="border-sp-border-testimonial flex h-full flex-col overflow-hidden rounded-2xl border bg-white p-5 md:p-8 md:p-12 shadow-lg transition-transform duration-500 hover:-translate-y-2">
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

      {/* CTA */}
      <section className="bg-sp-bg-dark relative overflow-x-clip py-12 md:py-16 lg:py-24">
        <div className="bg-sp-accent/5 pointer-events-none absolute inset-0 rounded-full blur-[150px]" />
        <div className="relative z-10 container mx-auto max-w-4xl px-5 text-center md:px-12">
          <Reveal>
            <h4 className="mb-6 text-sm font-bold tracking-[0.2em] text-white/80 uppercase md:text-base">
              {locale === 'de' ? 'Sie haben es so weit geschafft' : "You've made it this far"}
            </h4>
            <h2 className="mb-8 text-3xl md:text-4xl font-bold text-white md:text-3xl md:text-4xl md:text-5xl md:text-6xl">
              {locale === 'de'
                ? 'Lassen Sie uns Ihre Vision in etwas Finanzierbares und Unvergessliches verwandeln.'
                : "Let's turn your vision into something fundable and unforgettable."}
            </h2>
            <Button
              variant="primary"
              size="lg"
              href={`/${locale}/${locale === 'de' ? 'kontakt-solutionplus' : 'contact-us'}`}
            >
              {locale === 'de' ? 'Kurzes Gespräch vereinbaren' : 'Set up a short call'}
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Related reading */}
      <section className="bg-sp-bg-dark relative z-10 py-12 md:py-16 lg:py-24">
        <div className="container mx-auto px-5 md:px-8 lg:px-12">
          <Reveal>
            <h3 className="mb-8 text-center text-2xl font-bold text-white">
              {supportData[locale === 'de' ? 'de' : 'en'].caseStudies.readMore}
            </h3>
            <div className="mx-auto mb-10 grid max-w-3xl gap-4 md:grid-cols-2">
              <Link
                href={`/${locale}/${locale === 'de' ? 'fallstudien' : 'case-studies'}/democorder`}
                className="group border-sp-border-dark bg-sp-surface-subtle hover:border-sp-accent/40 hover:bg-sp-accent/10 flex items-center justify-between overflow-hidden rounded-2xl border p-5 md:p-6 transition-all"
              >
                <div>
                  <div className="text-sp-accent mb-1 text-xs font-bold tracking-widest uppercase">
                    B2B SaaS
                  </div>
                  <div className="text-base font-semibold text-white">Democorder</div>
                  <div className="text-xs text-white/60">
                    {locale === 'de'
                      ? '28 % Umfang reduziert, 0 kritische Bugs'
                      : '28% scope cut, 0 critical bugs'}
                  </div>
                </div>
                <ArrowRight
                  className="text-sp-accent shrink-0 opacity-60 transition-all group-hover:translate-x-1 group-hover:opacity-100"
                  size={18}
                />
              </Link>
              <Link
                href={`/${locale}/${locale === 'de' ? 'fallstudien' : 'case-studies'}/hospitality`}
                className="group border-sp-border-dark bg-sp-surface-subtle hover:border-sp-accent/40 hover:bg-sp-accent/10 flex items-center justify-between overflow-hidden rounded-2xl border p-5 md:p-6 transition-all"
              >
                <div>
                  <div className="text-sp-accent mb-1 text-xs font-bold tracking-widest uppercase">
                    Hospitality
                  </div>
                  <div className="text-base font-semibold text-white">Hotel Korona & Parkhotel</div>
                  <div className="text-xs text-white/60">
                    {locale === 'de'
                      ? 'Direktbuchungswebsites, Full-Stack'
                      : 'Direct booking websites, full-stack'}
                  </div>
                </div>
                <ArrowRight
                  className="text-sp-accent shrink-0 opacity-60 transition-all group-hover:translate-x-1 group-hover:opacity-100"
                  size={18}
                />
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href={`/${locale}/${locale === 'de' ? 'fallstudien' : 'case-studies'}`}
                className="hover:border-sp-accent hover:text-sp-accent border-sp-border-dark bg-sp-surface-subtle text-sp-text-muted rounded-full border px-5 md:px-6 py-2 text-sm font-semibold tracking-wide uppercase transition-colors"
              >
                {locale === 'de' ? 'Alle Fallstudien' : 'All Case Studies'}
              </Link>
            </div>
            <div className="mt-10 md:mt-16 text-center">
              <p className="text-foreground/70 mb-6 text-lg">
                {supportData[locale === 'de' ? 'de' : 'en'].services.stillHaveQuestions}
              </p>
              <Link
                href={`/${locale}/${locale === 'de' ? 'kontakt-solutionplus' : 'contact-us'}`}
                className="text-sp-accent hover:text-sp-accent-dark font-medium underline underline-offset-4"
              >
                {locale === 'de' ? 'Sprechen Sie mit uns' : "Let's talk"}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
