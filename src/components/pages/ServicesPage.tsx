"use client";

import { Reveal } from "@/components/animations/Reveal";
import { ArrowRight, Target, Sparkles, Activity, ShieldAlert, RefreshCcw, TrendingUp, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export function ServicesPage({ locale }: { locale: string }) {
  const isDe = locale === "de";

  return (
    <div className="flex flex-col w-full overflow-hidden pt-32 pb-24">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-6 md:px-12 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8">
                <RefreshCcw size={16} />
                {isDe ? "Software Modernisierung" : "Product Modernization"}
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8">
                {isDe ? "Machen Sie Ihr Produkt bereit für " : "Make your product ready for "} <span className="text-primary">{isDe ? "die Zukunft" : "what's next."}</span>
              </h1>
              <p className="text-xl text-foreground/70 mb-10 max-w-xl leading-relaxed">
                {isDe 
                  ? "Alter Code, veraltetes Design und umständliche Workflows bremsen das Wachstum. Wir modernisieren Ihre bestehende Software, damit sie sicher, skalierbar und wettbewerbsfähig wird – ohne kompletten Neuaufbau."
                  : "Old code, outdated design, and clunky workflows hold products back from growth. We modernize your existing software so it's secure, scalable, and competitive without a full rebuild."}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link
                  href={`/${locale}/${isDe ? "kontakt-solutionplus" : "contact-us"}`}
                  className="px-8 py-4 rounded-full bg-primary text-white font-bold tracking-wide hover:bg-[#6c7bd0] transition-all duration-300 shadow-[0_4px_20px_-4px_rgba(92,107,192,0.4)] hover:shadow-[0_8px_30px_-4px_rgba(92,107,192,0.6)] hover:-translate-y-1 active:scale-95 inline-flex items-center gap-2 relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />
                  {isDe ? "Jetzt anfragen" : "Get Started"} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="#how-it-works"
                  className="px-8 py-4 rounded-full bg-white/5 text-white font-medium border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-md hover:-translate-y-1 active:scale-95 shadow-lg"
                >
                  {isDe ? "Mehr erfahren" : "Learn more"}
                </a>
              </div>
            </Reveal>
          </div>
          
          <Reveal direction="left">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#141618] p-2 rotate-2 hover:rotate-0 transition-transform duration-500 shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="https://solutionplus.io/wp-content/uploads/2025/09/old-code-14-1-scaled-uai-2560x1706.jpg" 
                alt="Product Modernization" 
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
            <h2 className="text-3xl md:text-5xl font-bold mb-16">{isDe ? "Warum es wichtig ist" : "Why it matters for your business"}</h2>
          </Reveal>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <TrendingUp size={32} className="text-secondary" />,
                title: isDe ? "Kosten reduzieren" : "Reduce costs",
                desc: isDe ? "Reduzieren Sie Wartungskosten durch den Austausch fragiler Legacy-Komponenten." : "Reduce maintenance costs by replacing fragile legacy components."
              },
              {
                icon: <ShieldAlert size={32} className="text-primary" />,
                title: isDe ? "Sicherheit & Leistung" : "Improve security",
                desc: isDe ? "Verbessern Sie Leistung und Sicherheit, um aktuelle Standards zu erfüllen." : "Improve performance and security to meet current standards."
              },
              {
                icon: <Sparkles size={32} className="text-primary" />,
                title: isDe ? "Wettbewerbsfähig bleiben" : "Stay competitive",
                desc: isDe ? "Halten Sie Ihr Produkt mit aktualisierter UX und neuen Funktionen wettbewerbsfähig." : "Keep your product competitive with updated UX and new features."
              },
              {
                icon: <Activity size={32} className="text-secondary" />,
                title: isDe ? "Unterbrechungen vermeiden" : "Avoid disruption",
                desc: isDe ? "Vermeiden Sie die Unterbrechung eines kompletten Neuaufbaus." : "Avoid the disruption of a full rewrite."
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
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center">
          <Reveal direction="right">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 p-2 bg-[#141618]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="https://solutionplus.io/wp-content/uploads/2025/09/What-youll-ge-t-14-1-scaled-uai-2560x1706.jpg" 
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
                isDe ? "Technisches Audit und Modernisierungs-Roadmap" : "Technical audit and modernization roadmap",
                isDe ? "Architektur-Upgrades und Code-Refactoring" : "Architecture upgrades and code refactoring",
                isDe ? "Leistungsoptimierung und Sicherheitsverbesserungen" : "Performance tuning and security enhancements",
                isDe ? "UX/UI-Updates für aktuelle Nutzererwartungen" : "UX/UI updates for current user expectations",
                isDe ? "Regressionstests zur Gewährleistung der Stabilität" : "Regression testing to ensure stability"
              ].map((item, i) => (
                <Reveal key={i} delay={0.1 * i} direction="left">
                  <div className="flex items-start gap-4 p-6 rounded-2xl bg-[#141618] border border-white/5 hover:border-primary/30 transition-colors">
                    <CheckCircle2 className="text-primary shrink-0 mt-1" />
                    <p className="text-foreground/80 leading-relaxed font-medium">{item}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 relative overflow-hidden bg-primary/5 border-t border-primary/10 mt-12">
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center max-w-4xl">
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              {isDe ? "Erweitern Sie Ihre" : "Grow your"} <span className="text-primary">{isDe ? "Kapazitäten." : "capacity."}</span>
            </h2>
            <p className="text-xl text-foreground/70 mb-12">
              {isDe 
                ? "Holen Sie sich ein dediziertes Entwicklungsteam, das nach Ihren Standards und Ihrem Zeitplan arbeitet."
                : "Get a dedicated engineering team that works to your standards and on your schedule."}
            </p>
              <Link
              href={`/${locale}/${isDe ? "kontakt-solutionplus" : "contact-us"}`}
              className="px-10 py-5 inline-block rounded-full bg-primary text-white font-bold tracking-wide text-lg hover:bg-[#6c7bd0] transition-all duration-300 shadow-[0_4px_20px_-4px_rgba(92,107,192,0.4)] hover:shadow-[0_8px_40px_-4px_rgba(92,107,192,0.6)] hover:-translate-y-1 active:scale-95 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />
              {isDe ? "Team-Setup anfragen" : "Get a team setup"}
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
