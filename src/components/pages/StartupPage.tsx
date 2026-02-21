import { Reveal } from "@/components/animations/Reveal";
import { ArrowRight, CheckCircle2, Target, Rocket, Users, Code2 } from "lucide-react";
import Link from "next/link";

export function StartupPage({ locale }: { locale: string }) {

  return (
    <div className="flex flex-col w-full overflow-hidden pt-32">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center py-20 overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center max-w-4xl">
          <Reveal>
            <span className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-secondary text-sm font-medium mb-8">
              For Startups
            </span>
            <h1 className="text-4xl md:text-7xl font-bold leading-[1.1] mb-8">
              The more you <span className="text-gradient">grow</span>, the harder it gets to stay on track.
            </h1>
            <p className="text-xl text-foreground/70 mb-12 max-w-2xl mx-auto">
              We provide the designers, developers, QA, and delivery management so you can focus on strategy and product. You lead the vision, we handle the execution.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href={`/${locale}/contact-us`}
                className="px-8 py-4 rounded-full bg-primary text-white font-bold tracking-wide hover:bg-[#6c7bd0] transition-all duration-300 shadow-[0_4px_20px_-4px_rgba(92,107,192,0.4)] hover:shadow-[0_8px_30px_-4px_rgba(92,107,192,0.6)] hover:-translate-y-1 active:scale-95 inline-flex items-center gap-2 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />
                Set up a short call <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="#what-youre-thinking"
                className="px-8 py-4 rounded-full bg-white/5 text-white font-medium border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-md hover:-translate-y-1 active:scale-95 shadow-lg"
              >
                Learn more
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* What you&apos;re probably thinking */}
      <section id="what-youre-thinking" className="py-24 bg-[#0f1112] scroll-mt-24">
        <div className="container mx-auto px-6 md:px-12">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
              What you&apos;re probably thinking?
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-8">
            <Reveal delay={0.1}>
              <div className="p-8 rounded-3xl bg-[#141618] border border-white/5 h-full">
                <div className="text-secondary font-serif text-4xl mb-4">&quot;</div>
                <p className="text-xl font-medium text-white/90">
                  We can&apos;t afford to keep hiring in-house just yet.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="p-8 rounded-3xl bg-[#141618] border border-white/5 h-full">
                <div className="text-primary font-serif text-4xl mb-4">&quot;</div>
                <p className="text-xl font-medium text-white/90">
                  Our current team is maxed out; we need extra hands that won&apos;t derail the roadmap.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="p-8 rounded-3xl bg-[#141618] border border-white/5 h-full">
                <div className="text-primary font-serif text-4xl mb-4">&quot;</div>
                <p className="text-xl font-medium text-white/90">
                  We&apos;ve had bad luck with freelancers. We need someone reliable this time.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Why this works */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-secondary/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Reveal>
                <h2 className="text-3xl md:text-5xl font-bold mb-8">Why this works</h2>
              </Reveal>
              <div className="space-y-6">
                {[
                  "UX/UI design tailored to both users and investors, so your product looks sharp and feels right from the start.",
                  "Rapid sprints with QA baked in, keeping your releases clean, reliable, and on track.",
                  "Git-based workflows and sprint velocity tracking, so you always know where things stand.",
                  "Flexibility to grow, easily expand your team or evolve into a long-term setup when you&apos;re ready."
                ].map((item, i) => (
                  <Reveal key={i} delay={0.1 * i} direction="right">
                    <div className="flex gap-4 p-6 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-md">
                      <div className="mt-1 shrink-0"><CheckCircle2 className="text-secondary" /></div>
                      <p className="text-foreground/80 leading-relaxed">{item}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
            <Reveal direction="left">
              <div className="relative rounded-3xl overflow-hidden border border-white/10 p-2 bg-[#141618]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="https://solutionplus.io/wp-content/uploads/2025/09/What-you-get-with-us-scaled.jpg" 
                  alt="What you get with us" 
                  className="rounded-2xl w-full h-auto object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* How we help you move forward */}
      <section className="py-24 bg-[#0f1112]">
        <div className="container mx-auto px-6 md:px-12 text-center max-w-4xl">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-bold mb-16">How we help you move forward!</h2>
          </Reveal>
          
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <Reveal delay={0.1} direction="up">
              <div className="p-8 rounded-3xl bg-[#141618] border border-white/5 relative group hover:-translate-y-2 transition-transform duration-300">
                <div className="absolute -top-6 -right-6 text-9xl font-bold text-white/[0.03] group-hover:text-primary/[0.1] transition-colors">01</div>
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mb-6 text-primary">
                  <Users size={24} />
                </div>
                <h3 className="text-xl font-bold mb-4">Flexible Delivery Pods</h3>
                <p className="text-foreground/60 leading-relaxed relative z-10">
                  Sprint-ready teams that plug into your workflows: Senior developers, UI/UX QA, led by experienced German delivery managers.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2} direction="up">
              <div className="p-8 rounded-3xl bg-[#141618] border border-white/5 relative group hover:-translate-y-2 transition-transform duration-300">
                <div className="absolute -top-6 -right-6 text-9xl font-bold text-white/[0.03] group-hover:text-secondary/[0.1] transition-colors">02</div>
                <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center mb-6 text-secondary">
                  <Target size={24} />
                </div>
                <h3 className="text-xl font-bold mb-4">Reliable Execution</h3>
                <p className="text-foreground/60 leading-relaxed relative z-10">
                  No black-box delivery, no daily chasing. Our teams integrate into your rhythm, with shared tools, clear timelines, and high accountability.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.3} direction="up">
              <div className="p-8 rounded-3xl bg-[#141618] border border-white/5 relative group hover:-translate-y-2 transition-transform duration-300">
                <div className="absolute -top-6 -right-6 text-9xl font-bold text-white/[0.03] group-hover:text-primary/[0.1] transition-colors">03</div>
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mb-6 text-primary">
                  <Rocket size={24} />
                </div>
                <h3 className="text-xl font-bold mb-4">Scale Without Risk</h3>
                <p className="text-foreground/60 leading-relaxed relative z-10">
                  Start with a delivery sprint, then grow into a dedicated team. Add specialists in your team as you go, without blowing your burn rate.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center max-w-4xl">
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              Let&apos;s solve what&apos;s <span className="text-secondary">slowing you down</span>
            </h2>
            <p className="text-xl text-foreground/70 mb-12">
              When every sprint counts, you need less guesswork and more traction. Let&apos;s talk about where you&apos;re stuck and how we can help you get unstuck.
            </p>
            <Link
              href={`/${locale}/contact-us`}
              className="px-10 py-5 rounded-full bg-secondary text-white font-bold tracking-wide text-lg hover:bg-[#ff8a65] transition-all duration-300 shadow-[0_4px_20px_-4px_rgba(255,112,67,0.4)] hover:shadow-[0_8px_40px_-4px_rgba(255,112,67,0.6)] hover:-translate-y-1 active:scale-95 inline-block relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />
              Start a project
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
