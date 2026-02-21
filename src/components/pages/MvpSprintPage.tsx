"use client";

import { Reveal } from "@/components/animations/Reveal";
import { ArrowRight, Zap, Target, Rocket, Clock, ShieldCheck, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export function MvpSprintPage({ locale }: { locale: string }) {
  const isDe = locale === "de";

  return (
    <div className="flex flex-col w-full overflow-hidden pt-32 pb-24">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/10 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-6 md:px-12 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-medium mb-8">
                <Zap size={16} className="fill-secondary/50" />
                {isDe ? "MVP Sprint Paket" : "MVP Sprint Package"}
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8">
                {isDe ? "Von der Idee zur " : "From idea to "} <span className="text-gradient">{isDe ? "Investorenreife" : "investor-ready"}</span> <br className="hidden md:block" /> {isDe ? "in wenigen Wochen" : "in weeks."}
              </h1>
              <p className="text-xl text-foreground/70 mb-10 max-w-xl leading-relaxed">
                {isDe 
                  ? "Wenn Geschwindigkeit zählt und Teams überlastet sind, scheint ein MVP unmöglich. Wir machen aus validierten Ideen funktionierende Produkte – schnell und ohne Einstellungsverzögerungen."
                  : "When speed matters and teams are stretched, getting an MVP live can feel impossible. We turn validated ideas into working products—quickly and without the hiring delays."}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link
                  href={`/${locale}/${isDe ? "kontakt-solutionplus" : "contact-us"}`}
                  className="px-8 py-4 rounded-full bg-secondary text-white font-bold tracking-wide hover:bg-[#ff8a65] transition-all duration-300 shadow-[0_4px_20px_-4px_rgba(255,112,67,0.4)] hover:shadow-[0_8px_30px_-4px_rgba(255,112,67,0.6)] hover:-translate-y-1 active:scale-95 inline-flex items-center gap-2 relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />
                  {isDe ? "Jetzt starten" : "Get Started"} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </Reveal>
          </div>
          
          <Reveal direction="left">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#141618] p-2 rotate-2 hover:rotate-0 transition-transform duration-500 shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="https://solutionplus.io/wp-content/uploads/2025/09/When-your-roadmap-moves-faster-than-hiring-can-keep-upt-load-scaled-uai-2560x1706.jpg" 
                alt="MVP Sprint Process" 
                className="rounded-2xl w-full h-auto object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why it matters */}
      <section className="py-24 bg-[#0f1112] border-y border-white/5 relative">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-bold mb-16">{isDe ? "Warum es für Ihr Geschäft wichtig ist" : "Why it matters for your business"}</h2>
          </Reveal>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Target size={32} className="text-primary" />,
                title: isDe ? "Fokus auf das Kerngeschäft" : "Focus on your business",
                desc: isDe ? "Konzentrieren Sie sich auf Ihr Geschäft, während wir die Lieferung übernehmen." : "Focus on your business while we handle delivery."
              },
              {
                icon: <Rocket size={32} className="text-secondary" />,
                title: isDe ? "Schneller am Markt" : "Get to market faster",
                desc: isDe ? "Seien Sie schneller am Markt und bleiben Sie der Konkurrenz voraus." : "Get to market faster and stay ahead of competitors."
              },
              {
                icon: <Clock size={32} className="text-primary" />,
                title: isDe ? "Risiken minimieren" : "Avoid hiring risks",
                desc: isDe ? "Vermeiden Sie das Risiko und die Kosten für die Rekrutierung eines eigenen Entwicklerteams." : "Avoid the risk and cost of recruiting a full development team."
              },
              {
                icon: <ShieldCheck size={32} className="text-secondary" />,
                title: isDe ? "Investoren überzeugen" : "Impress investors",
                desc: isDe ? "Beeindrucken Sie Investoren mit einem funktionierenden, testbaren Produkt." : "Impress investors with a working, testable product."
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
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center">
          <Reveal direction="right">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 p-2 bg-[#141618]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="https://solutionplus.io/wp-content/uploads/2025/09/What-youll-get-14-uai-1460x973.jpg" 
                alt="What you'll get" 
                className="rounded-2xl w-full h-auto object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
              />
            </div>
          </Reveal>
          
          <div>
            <Reveal>
              <h2 className="text-3xl md:text-5xl font-bold mb-10">{isDe ? "Was Sie bekommen" : "What You'll Get"}</h2>
            </Reveal>
            <div className="space-y-6">
              {[
                isDe ? "UX/UI Design, das Ihre Marke und Ziele widerspiegelt" : "UX/UI design that reflects your brand and goal",
                isDe ? "Schnelle Sprints mit QA für eine kontrollierte Lieferung" : "Rapid sprints with QA for fast, controlled delivery",
                isDe ? "Transparentes Projektmanagement für volle Kontrolle" : "Transparent project management so you always know progress",
                isDe ? "Vollständiger Code und Dokumentation, bereit zur Übergabe" : "Full code and documentation ready for handover"
              ].map((item, i) => (
                <Reveal key={i} delay={0.1 * i} direction="left">
                  <div className="flex items-start gap-4 p-6 rounded-2xl bg-[#141618] border border-white/5 hover:border-secondary/30 transition-colors">
                    <CheckCircle2 className="text-secondary shrink-0 mt-1" />
                    <p className="text-foreground/80 leading-relaxed font-medium">{item}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 relative overflow-hidden bg-secondary/5 border-t border-secondary/10 mt-12">
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center max-w-4xl">
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              {isDe ? "Werden Sie aktiv," : "Get moving before"} <span className="text-secondary">{isDe ? "bevor der Markt es tut." : "the market does."}</span>
            </h2>
            <p className="text-xl text-foreground/70 mb-12">
              {isDe 
                ? "Wir verwandeln Ihr validiertes Konzept in ein funktionierendes Produkt – mit Geschwindigkeit, Klarheit und Vertrauen."
                : "We'll turn your validated concept into a working product with speed, clarity, and confidence."}
            </p>
            <Link
              href={`/${locale}/${isDe ? "kontakt-solutionplus" : "contact-us"}`}
              className="px-10 py-5 inline-block rounded-full bg-secondary text-white font-bold tracking-wide text-lg hover:bg-[#ff8a65] transition-all duration-300 shadow-[0_4px_20px_-4px_rgba(255,112,67,0.4)] hover:shadow-[0_8px_40px_-4px_rgba(255,112,67,0.6)] hover:-translate-y-1 active:scale-95 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />
              {isDe ? "Kalkulieren Sie Ihr Team" : "Calculate your team setup"}
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
