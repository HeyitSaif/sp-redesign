import { Reveal } from '@/components/animations/Reveal'
import { ArrowRight, CheckCircle2, Target, Rocket, Users, Code2 } from 'lucide-react'
import Link from 'next/link'

export function StartupPage({ locale }: { locale: string }) {
  return (
    <div className="flex w-full flex-col overflow-hidden pt-32 pb-24">
      {/* Hero */}
      <section className="relative flex min-h-[70vh] items-center overflow-hidden py-20">
        <div className="bg-primary/5 pointer-events-none absolute inset-0 blur-[100px]" />
        <div className="relative z-10 container mx-auto max-w-4xl px-6 text-center md:px-12">
          <Reveal>
            <span className="text-secondary mb-8 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium">
              For Startups
            </span>
            <h1 className="mb-8 text-4xl leading-[1.1] font-bold md:text-7xl">
              The more you <span className="text-gradient">grow</span>, the harder it gets to stay
              on track.
            </h1>
            <p className="text-foreground/70 mx-auto mb-12 max-w-2xl text-xl">
              We provide the designers, developers, QA, and delivery management so you can focus on
              strategy and product. You lead the vision, we handle the execution.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href={`/${locale}/contact-us`}
                className="bg-primary group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-8 py-4 font-bold tracking-wide text-white shadow-[0_4px_20px_-4px_rgba(92,107,192,0.4)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#6c7bd0] hover:shadow-[0_8px_30px_-4px_rgba(92,107,192,0.6)] active:scale-95"
              >
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_2s_infinite]" />
                Set up a short call{' '}
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="#what-youre-thinking"
                className="rounded-full border border-white/10 bg-white/5 px-8 py-4 font-medium text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10 active:scale-95"
              >
                Learn more
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* What you&apos;re probably thinking */}
      <section id="what-youre-thinking" className="scroll-mt-24 bg-[#0f1112] py-24">
        <div className="container mx-auto px-6 md:px-12">
          <Reveal>
            <h2 className="mb-16 text-center text-3xl font-bold md:text-5xl">
              What you&apos;re probably thinking?
            </h2>
          </Reveal>
          <div className="grid gap-8 md:grid-cols-3">
            <Reveal delay={0.1}>
              <div className="h-full rounded-3xl border border-white/5 bg-[#141618] p-8">
                <div className="text-secondary mb-4 font-serif text-4xl">&quot;</div>
                <p className="text-xl font-medium text-white/90">
                  We can&apos;t afford to keep hiring in-house just yet.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="h-full rounded-3xl border border-white/5 bg-[#141618] p-8">
                <div className="text-primary mb-4 font-serif text-4xl">&quot;</div>
                <p className="text-xl font-medium text-white/90">
                  Our current team is maxed out; we need extra hands that won&apos;t derail the
                  roadmap.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="h-full rounded-3xl border border-white/5 bg-[#141618] p-8">
                <div className="text-primary mb-4 font-serif text-4xl">&quot;</div>
                <p className="text-xl font-medium text-white/90">
                  We&apos;ve had bad luck with freelancers. We need someone reliable this time.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Why this works */}
      <section className="relative overflow-hidden py-24">
        <div className="bg-secondary/10 pointer-events-none absolute top-1/2 right-0 h-1/2 w-1/2 -translate-y-1/2 rounded-full blur-[150px]" />
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <Reveal>
                <h2 className="mb-8 text-3xl font-bold md:text-5xl">Why this works</h2>
              </Reveal>
              <div className="space-y-6">
                {[
                  'UX/UI design tailored to both users and investors, so your product looks sharp and feels right from the start.',
                  'Rapid sprints with QA baked in, keeping your releases clean, reliable, and on track.',
                  'Git-based workflows and sprint velocity tracking, so you always know where things stand.',
                  'Flexibility to grow, easily expand your team or evolve into a long-term setup when you&apos;re ready.',
                ].map((item, i) => (
                  <Reveal key={i} delay={0.1 * i} direction="right">
                    <div className="flex gap-4 rounded-2xl border border-white/5 bg-white/5 p-6 backdrop-blur-md">
                      <div className="mt-1 shrink-0">
                        <CheckCircle2 className="text-secondary" />
                      </div>
                      <p className="text-foreground/80 leading-relaxed">{item}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
            <Reveal direction="left">
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#141618] p-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://solutionplus.io/wp-content/uploads/2025/09/What-you-get-with-us-scaled.jpg"
                  alt="What you get with us"
                  className="h-auto w-full rounded-2xl object-cover opacity-80 mix-blend-luminosity transition-all duration-700 hover:mix-blend-normal"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* How we help you move forward */}
      <section className="bg-[#0f1112] py-24">
        <div className="container mx-auto max-w-4xl px-6 text-center md:px-12">
          <Reveal>
            <h2 className="mb-16 text-3xl font-bold md:text-5xl">How we help you move forward!</h2>
          </Reveal>

          <div className="grid gap-8 text-left md:grid-cols-3">
            <Reveal delay={0.1} direction="up">
              <div className="group relative rounded-3xl border border-white/5 bg-[#141618] p-8 transition-transform duration-300 hover:-translate-y-2">
                <div className="group-hover:text-primary/[0.1] absolute -top-6 -right-6 text-9xl font-bold text-white/[0.03] transition-colors">
                  01
                </div>
                <div className="bg-primary/20 text-primary mb-6 flex h-14 w-14 items-center justify-center rounded-full">
                  <Users size={24} />
                </div>
                <h3 className="mb-4 text-xl font-bold">Flexible Delivery Pods</h3>
                <p className="text-foreground/60 relative z-10 leading-relaxed">
                  Sprint-ready teams that plug into your workflows: Senior developers, UI/UX QA, led
                  by experienced German delivery managers.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2} direction="up">
              <div className="group relative rounded-3xl border border-white/5 bg-[#141618] p-8 transition-transform duration-300 hover:-translate-y-2">
                <div className="group-hover:text-secondary/[0.1] absolute -top-6 -right-6 text-9xl font-bold text-white/[0.03] transition-colors">
                  02
                </div>
                <div className="bg-secondary/20 text-secondary mb-6 flex h-14 w-14 items-center justify-center rounded-full">
                  <Target size={24} />
                </div>
                <h3 className="mb-4 text-xl font-bold">Reliable Execution</h3>
                <p className="text-foreground/60 relative z-10 leading-relaxed">
                  No black-box delivery, no daily chasing. Our teams integrate into your rhythm,
                  with shared tools, clear timelines, and high accountability.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.3} direction="up">
              <div className="group relative rounded-3xl border border-white/5 bg-[#141618] p-8 transition-transform duration-300 hover:-translate-y-2">
                <div className="group-hover:text-primary/[0.1] absolute -top-6 -right-6 text-9xl font-bold text-white/[0.03] transition-colors">
                  03
                </div>
                <div className="bg-primary/20 text-primary mb-6 flex h-14 w-14 items-center justify-center rounded-full">
                  <Rocket size={24} />
                </div>
                <h3 className="mb-4 text-xl font-bold">Scale Without Risk</h3>
                <p className="text-foreground/60 relative z-10 leading-relaxed">
                  Start with a delivery sprint, then grow into a dedicated team. Add specialists in
                  your team as you go, without blowing your burn rate.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-32">
        <div className="bg-primary/5 pointer-events-none absolute inset-0 rounded-full blur-[150px]" />
        <div className="relative z-10 container mx-auto max-w-4xl px-6 text-center md:px-12">
          <Reveal>
            <h2 className="mb-8 text-4xl font-bold md:text-6xl">
              Let&apos;s solve what&apos;s <span className="text-secondary">slowing you down</span>
            </h2>
            <p className="text-foreground/70 mb-12 text-xl">
              When every sprint counts, you need less guesswork and more traction. Let&apos;s talk
              about where you&apos;re stuck and how we can help you get unstuck.
            </p>
            <Link
              href={`/${locale}/contact-us`}
              className="bg-secondary group relative inline-block overflow-hidden rounded-full px-10 py-5 text-lg font-bold tracking-wide text-white shadow-[0_4px_20px_-4px_rgba(255,112,67,0.4)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#ff8a65] hover:shadow-[0_8px_40px_-4px_rgba(255,112,67,0.6)] active:scale-95"
            >
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_2s_infinite]" />
              Start a project
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
