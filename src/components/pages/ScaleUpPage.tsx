import { Reveal } from "@/components/animations/Reveal";
import { ArrowRight, Zap, Target, Shield, Building2, Code, Cog, Activity, Briefcase } from "lucide-react";
import Link from "next/link";

export function ScaleUpPage({ locale }: { locale: string }) {
  const isDe = locale === "de";

  return (
    <div className="flex flex-col w-full overflow-hidden pt-32">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center py-20 overflow-hidden">
        <div className="absolute inset-0 bg-secondary/5 blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center max-w-4xl">
          <Reveal>
            <span className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary text-sm font-medium mb-8">
              {isDe ? "Für Scale-Ups" : "For Scale-ups"}
            </span>
            <h1 className="text-4xl md:text-7xl font-bold leading-[1.1] mb-8">
              {isDe ? "Ihre Roadmap ist ehrgeizig. Wir helfen Ihnen, ihr" : "Your roadmap is ambitious. We help you stay"} <span className="text-gradient">{isDe ? "einen Schritt voraus zu sein." : "ahead of it."}</span>
            </h1>
            <p className="text-xl text-foreground/70 mb-12 max-w-2xl mx-auto">
              {isDe 
                ? "Wachstum ist das Ziel - bis es unübersichtlich wird. Sie liefern schneller, vergrößern Ihre Teams und jonglieren mit der Komplexität. Bleiben Sie zuverlässig, während Sie an Schwung gewinnen."
                : "Growth is the goal—until it gets messy. You're shipping faster, scaling teams, and juggling complexity. Stay reliable while keeping momentum."}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href={`/${locale}/${isDe ? "kontakt-solutionplus" : "contact-us"}`}
                className="px-8 py-4 rounded-full bg-secondary text-white font-bold tracking-wide hover:bg-[#ff8a65] transition-all duration-300 shadow-[0_4px_20px_-4px_rgba(255,112,67,0.4)] hover:shadow-[0_8px_30px_-4px_rgba(255,112,67,0.6)] hover:-translate-y-1 active:scale-95 inline-flex items-center gap-2 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />
                {isDe ? "Gespräch vereinbaren" : "Set up a short call"} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="#how-we-help"
                className="px-8 py-4 rounded-full bg-white/5 text-white font-medium border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-md hover:-translate-y-1 active:scale-95 shadow-lg"
              >
                {isDe ? "Mehr erfahren" : "Learn more"}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why Scaleups Work With Us */}
      <section id="how-we-help" className="py-24 relative overflow-hidden bg-[#0f1112] border-y border-white/5 scroll-mt-24">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-primary/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal direction="right">
              <div className="relative rounded-3xl overflow-hidden border border-white/10 p-2 bg-[#141618]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="https://solutionplus.io/wp-content/uploads/2025/09/Why-Scaleups-Work-With-Us-14-uai-1460x973.jpg" 
                  alt="Why Scaleups Work With Us" 
                  className="rounded-2xl w-full h-auto object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
                />
              </div>
            </Reveal>
            <div>
              <Reveal>
                <h2 className="text-3xl md:text-5xl font-bold mb-8">{isDe ? "Warum Scale-Ups mit uns arbeiten" : "Why Scaleups Work With Us"}</h2>
              </Reveal>
              <div className="space-y-6">
                {[
                  isDe ? "Ihr internes Team ist ausgelastet, aber Einstellungen dauern zu lange." : "Your internal team is at capacity, but hiring takes too long.",
                  isDe ? "Sie müssen aggressive Lieferziele erreichen, ohne die Qualität zu mindern." : "You need to hit aggressive delivery targets without lowering quality.",
                  isDe ? "Sie erschließen neue Märkte und brauchen funktionsübergreifende Engineering-Teams, denen Sie vertrauen können." : "You're entering new markets and need cross-functional engineering teams you can trust.",
                  isDe ? "Sie sind aus Patchwork-Anbietern herausgewachsen und brauchen echte Lieferverantwortung." : "You've outgrown patchwork vendors, and need true delivery ownership."
                ].map((item, i) => (
                  <Reveal key={i} delay={0.1 * i} direction="left">
                    <div className="flex gap-4 p-6 rounded-2xl bg-[#141618] border border-white/5 hover:border-primary/30 transition-colors">
                      <div className="mt-1 shrink-0"><Target className="text-primary" /></div>
                      <p className="text-foreground/80 leading-relaxed font-medium">{item}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Bring To The Table */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-bold mb-16">{isDe ? "Was wir einbringen" : "What We Bring To The Table"}</h2>
          </Reveal>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            {[
              {
                icon: <Code size={32} className="text-primary" />,
                title: isDe ? "IT-Talente" : "IT talent",
                desc: isDe ? "Mit Erfahrung in komplexen, regulierten Branchen." : "That's experienced in complex, regulated industries."
              },
              {
                icon: <Building2 size={32} className="text-secondary" />,
                title: isDe ? "Dedizierte Teams" : "Dedicated teams",
                desc: isDe ? "Die mit Ihnen wachsen – voll integriert, ohne ständige Betreuung." : "That grow with you fully integrated, no hand-holding."
              },
              {
                icon: <Shield size={32} className="text-primary" />,
                title: isDe ? "Deutsch-geführte" : "German-led",
                desc: isDe ? "Lieferprozesse, die Ihren Qualitätsstandards entsprechen." : "Delivery operations that match your quality standards."
              },
              {
                icon: <Zap size={32} className="text-secondary" />,
                title: isDe ? "Schnelle Sprints" : "Rapid sprints",
                desc: isDe ? "Die sich an die Geschwindigkeit Ihres Teams und Git-basierte Prozesse anpassen." : "That align with your team velocity and Git-based processes."
              }
            ].map((feature, i) => (
              <Reveal key={i} delay={0.1 * (i + 1)} direction="up">
                <div className="p-8 rounded-3xl bg-[#141618] border border-white/5 hover:border-white/20 transition-all duration-300 h-full">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 border border-white/10">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                  <p className="text-foreground/60 leading-relaxed">{feature.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work (BOT Model) */}
      <section className="py-24 bg-[#0f1112]">
        <div className="container mx-auto px-6 md:px-12">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">{isDe ? "Wie wir arbeiten" : "How We Work"}</h2>
          </Reveal>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Reveal delay={0.1}>
              <div className="p-10 rounded-3xl bg-gradient-to-br from-[#1a1c1e] to-[#0f1112] border border-white/5 relative group hover:-translate-y-2 transition-transform duration-300">
                <div className="text-5xl font-bold text-primary/20 mb-6 font-serif">1</div>
                <h3 className="text-2xl font-bold mb-4">Build</h3>
                <p className="text-foreground/60 leading-relaxed">
                  {isDe 
                    ? "Einsatz eines Full-Stack-Delivery-Teams, um Funktionen, Produkte oder Plattformen unter engen Zeitvorgaben zu realisieren."
                    : "Deploy a full-stack delivery team to handle features, products, or platforms under tight timelines."}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="p-10 rounded-3xl bg-gradient-to-br from-[#1a1c1e] to-[#0f1112] border border-white/5 relative group hover:-translate-y-2 transition-transform duration-300">
                <div className="text-5xl font-bold text-secondary/20 mb-6 font-serif">2</div>
                <h3 className="text-2xl font-bold mb-4">Operate</h3>
                <p className="text-foreground/60 leading-relaxed">
                  {isDe 
                    ? "Wir leiten die Abläufe, integrieren uns in Ihre Prozesse und stellen die Liefergeschwindigkeit sicher."
                    : "We manage the operations, integrate into your workflows, and ensure delivery velocity."}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="p-10 rounded-3xl bg-gradient-to-br from-[#1a1c1e] to-[#0f1112] border border-white/5 relative group hover:-translate-y-2 transition-transform duration-300">
                <div className="text-5xl font-bold text-primary/20 mb-6 font-serif">3</div>
                <h3 className="text-2xl font-bold mb-4">Transfer</h3>
                <p className="text-foreground/60 leading-relaxed">
                  {isDe 
                    ? "Verlegen Sie wichtige Mitarbeiter bei Bedarf an Ihren Hauptsitz, um eine langfristige Integration und die Sicherung des geistigen Eigentums zu gewährleisten."
                    : "Relocate key contributors to your HQ when needed, for long-term integration and IP retention."}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-bold mb-16">{isDe ? "Branchen, mit denen wir gearbeitet haben" : "Industries We Worked With"}</h2>
          </Reveal>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { name: isDe ? "Automotive" : "Automotive", icon: <Cog /> },
              { name: isDe ? "Energie" : "Energy", icon: <Zap /> },
              { name: "Web3", icon: <Activity /> },
              { name: "Fintech", icon: <Briefcase /> },
              { name: "Healthcare", icon: <Activity /> },
              { name: "AI & Agentic", icon: <Code /> }
            ].map((industry, i) => (
              <Reveal key={i} delay={0.05 * i}>
                <div className="px-8 py-4 rounded-full bg-white/5 border border-white/10 flex items-center gap-3 text-lg font-medium hover:bg-white/10 hover:border-primary/50 transition-all hover:-translate-y-1">
                  <span className="text-primary">{industry.icon}</span>
                  {industry.name}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Global CTA */}
      <section className="py-32 relative overflow-hidden bg-primary/5 border-t border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/10 blur-[150px] rounded-full" />
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center max-w-4xl">
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              {isDe ? "Wir springen nicht nur ein." : "We don't just fill seats."} <span className="text-secondary">{isDe ? "Wir treiben das Produkt voran." : "We push the product forward."}</span>
            </h2>
            <Link
              href={`/${locale}/${isDe ? "kontakt-solutionplus" : "contact-us"}`}
              className="px-10 py-5 inline-block rounded-full bg-secondary text-white font-bold tracking-wide text-lg hover:bg-[#ff8a65] transition-all duration-300 shadow-[0_4px_20px_-4px_rgba(255,112,67,0.4)] hover:shadow-[0_8px_40px_-4px_rgba(255,112,67,0.6)] hover:-translate-y-1 active:scale-95 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />
              {isDe ? "Sprechen Sie mit uns" : "Talk to us"}
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
