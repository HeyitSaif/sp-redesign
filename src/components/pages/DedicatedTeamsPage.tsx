"use client";

import { Reveal } from "@/components/animations/Reveal";
import { ArrowRight, Users, CheckCircle2, Globe2, Gauge, LineChart, Code2 } from "lucide-react";
import Link from "next/link";

export function DedicatedTeamsPage({ locale }: { locale: string }) {
  const isDe = locale === "de";

  return (
    <div className="flex flex-col w-full overflow-hidden pt-32 pb-24">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay pointer-events-none" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-6 md:px-12 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8">
                <Users size={16} className="text-primary/70" />
                {isDe ? "Dedizierte Teams" : "Dedicated Delivery Teams"}
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8">
                {isDe ? "Skalieren Sie schnell " : "Scale fast with "} <span className="text-gradient">{isDe ? "ohne Einstellungsstress" : "dedicated product engineering"}</span> <br className="hidden md:block" /> {isDe ? "" : "teams."}
              </h1>
              <p className="text-xl text-foreground/70 mb-10 max-w-xl leading-relaxed">
                {isDe 
                  ? "Wenn Ihre Roadmap schneller wächst als Sie einstellen können, stagniert die Lieferung. Unsere dedizierten Teams integrieren sich in Ihren Workflow – ohne Rekrutierungsverzögerung."
                  : "When your roadmap moves faster than hiring can keep up, delivery stalls. Our dedicated teams integrate into your workflow, bringing developers, QA, and leadership—without the lag."}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link
                  href={`/${locale}/${isDe ? "kontakt-solutionplus" : "contact-us"}`}
                  className="px-8 py-4 rounded-full bg-primary text-white font-bold tracking-wide hover:bg-[#6c7bd0] transition-all duration-300 shadow-[0_4px_20px_-4px_rgba(92,107,192,0.4)] hover:shadow-[0_8px_30px_-4px_rgba(92,107,192,0.6)] hover:-translate-y-1 active:scale-95 inline-flex items-center gap-2 relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />
                  {isDe ? "Gespräch vereinbaren" : "Get Started"} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="#how-it-works"
                  className="px-8 py-4 rounded-full bg-white/5 text-white font-medium border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-md hover:-translate-y-1 active:scale-95 shadow-lg"
                >
                  {isDe ? "Modelle ansehen" : "View models"}
                </a>
              </div>
            </Reveal>
          </div>
          
          <Reveal direction="left">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#141618] p-2 rotate-2 hover:rotate-0 transition-transform duration-500 shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="https://solutionplus.io/wp-content/uploads/2025/09/When-speed-matters-and-teams-are-stretched-getting-an-MVP-live-can-feel-impossible.%E2%80%A8-12-scaled-uai-2560x1706.jpg" 
                alt="Dedicated Delivery Teams" 
                className="rounded-2xl w-full h-auto object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why it matters */}
      <section id="how-it-works" className="py-24 bg-[#0f1112] border-y border-white/5 relative scroll-mt-24">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-bold mb-16">{isDe ? "Warum es für Ihr Geschäft wichtig ist" : "Why it matters for your business"}</h2>
          </Reveal>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Gauge size={32} className="text-secondary" />,
                title: isDe ? "Aggressive Ziele" : "Aggressive Goals",
                desc: isDe ? "Erreichen Sie ambitionierte Lieferziele ohne Rekrutierungspausen." : "Hit aggressive delivery goals without slowing down for hiring cycles."
              },
              {
                icon: <Globe2 size={32} className="text-primary" />,
                title: isDe ? "Zeitübergreifend" : "Cross-Timezones",
                desc: isDe ? "Halten Sie Projekte über Zeitzonen und Workstreams hinweg in Bewegung." : "Keep projects moving across time zones and parallel workstreams."
              },
              {
                icon: <CheckCircle2 size={32} className="text-primary" />,
                title: isDe ? "Deutsche Qualität" : "German Oversight",
                desc: isDe ? "Wahren Sie Qualität und Konsistenz durch deutsch-geführte Lieferübersicht." : "Maintain quality and consistency with German-led delivery oversight."
              },
              {
                icon: <LineChart size={32} className="text-secondary" />,
                title: isDe ? "Flexibilität" : "Flexibility",
                desc: isDe ? "Behalten Sie Flexibilität, skalieren Sie das Team je nach Auslastung nach oben oder unten." : "Retain flexibility, scale the team up or down based on workload."
              }
            ].map((feature, i) => (
              <Reveal key={i} delay={0.1 * (i + 1)} direction="up">
                <div className="p-8 rounded-3xl bg-[#141618] border border-white/5 hover:border-white/20 transition-all duration-300 h-full">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 border border-white/10">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">{feature.title}</h3>
                  <p className="text-foreground/60 leading-relaxed">{feature.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What You'll Get */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <Reveal>
              <h2 className="text-3xl md:text-5xl font-bold mb-10">{isDe ? "Was Sie bekommen" : "What You'll Get"}</h2>
            </Reveal>
            <div className="space-y-6">
              {[
                isDe ? "Vorgeprüfte Entwickler und QA, passend zu Ihrem Stack" : "Pre-vetted engineers, QA, and developers matched to your stack",
                isDe ? "Volle Integration in Ihre Tools, Prozesse und Kommunikationskanäle" : "Full integration with your tools, processes, and communication channels",
                isDe ? "Transparente Lieferberichte und Sprint-Planung" : "Transparent delivery reports and sprint planning"
              ].map((item, i) => (
                <Reveal key={i} delay={0.1 * i} direction="right">
                  <div className="flex items-start gap-4 p-6 rounded-2xl bg-[#141618] border border-white/5 hover:border-primary/30 transition-colors">
                    <Code2 className="text-primary shrink-0 mt-1" />
                    <p className="text-foreground/80 leading-relaxed font-medium">{item}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal direction="left">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 p-2 bg-[#141618]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="https://solutionplus.io/wp-content/uploads/2025/09/What-youll-ge-t-14-scaled-uai-2560x1706.jpg" 
                alt="What you'll get" 
                className="rounded-2xl w-full h-auto object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 relative overflow-hidden bg-primary/5 border-t border-primary/10 mt-12">
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center max-w-4xl">
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              {isDe ? "Geben Sie Ihrem Produkt" : "Give your product"} <span className="text-primary">{isDe ? "ein zweites Leben." : "a second life."}</span>
            </h2>
            <p className="text-xl text-foreground/70 mb-12">
              {isDe 
                ? "Wir modernisieren Ihr Produkt in Phasen, sodass es live bleibt, während wir es verbessern."
                : "We modernize your product in phases so it stays live while we improve it."}
            </p>
            <Link
              href={`/${locale}/${isDe ? "kontakt-solutionplus" : "contact-us"}`}
              className="px-10 py-5 inline-block rounded-full bg-primary text-white font-bold tracking-wide text-lg hover:bg-[#6c7bd0] transition-all duration-300 shadow-[0_4px_20px_-4px_rgba(92,107,192,0.4)] hover:shadow-[0_8px_40px_-4px_rgba(92,107,192,0.6)] hover:-translate-y-1 active:scale-95 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />
              {isDe ? "Berechnen Sie Ihr Team-Setup" : "Calculate your team setup"}
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
