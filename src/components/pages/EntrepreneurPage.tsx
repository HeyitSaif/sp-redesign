"use client";

import { Reveal } from "@/components/animations/Reveal";
import { ArrowRight, Lightbulb, Rocket, Target, Zap, LayoutDashboard, Coins } from "lucide-react";
import Link from "next/link";

export function EntrepreneurPage({ locale }: { locale: string }) {
  const isDe = locale === "de";

  return (
    <div className="flex flex-col w-full overflow-hidden pt-32 pb-24">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay pointer-events-none" />
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-secondary/10 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-6 md:px-12 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-medium mb-8">
                <Lightbulb size={16} />
                {isDe ? "Für Gründer" : "For Entrepreneurs"}
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8">
                {isDe ? "Ihre Idee verdient mehr als " : "Your idea deserves more than "} <span className="text-secondary">{isDe ? "einen Prototyp." : "a prototype."}</span>
              </h1>
              <p className="text-xl text-foreground/70 mb-10 max-w-xl leading-relaxed">
                {isDe 
                  ? "Lassen Sie uns daraus ein Produkt machen, an das Investoren glauben können. Wir bringen das Entwicklerteam, Sie bringen die Vision."
                  : "Let's turn it into a product investors can believe in. We bring the delivery team, you bring the vision."}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link
                  href={`/${locale}/${isDe ? "kontakt-solutionplus" : "contact-us"}`}
                  className="px-8 py-4 rounded-full bg-secondary text-white font-bold tracking-wide hover:bg-[#ff8a65] transition-all duration-300 shadow-[0_4px_20px_-4px_rgba(255,112,67,0.4)] hover:shadow-[0_8px_30px_-4px_rgba(255,112,67,0.6)] hover:-translate-y-1 active:scale-95 inline-flex items-center gap-2 relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />
                  {isDe ? "Jetzt anfragen" : "Get Started"} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
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
          
          <Reveal direction="left">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#141618] p-2 rotate-2 hover:rotate-0 transition-transform duration-500 shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="https://solutionplus.io/wp-content/uploads/2025/09/Why-this-works-14-scaled-uai-2560x1706.jpg" 
                alt="Entrepreneur Idea" 
                className="rounded-2xl w-full h-auto object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* What you're probably thinking */}
      <section className="py-24 bg-[#0f1112] border-y border-white/5 relative">
        <div className="container mx-auto px-6 md:px-12">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">{isDe ? "Was Sie wahrscheinlich denken" : "What you're probably thinking"}</h2>
          </Reveal>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Reveal delay={0.1}>
              <div className="p-8 rounded-3xl bg-[#141618] border border-white/5 h-full">
                <div className="text-secondary font-serif text-5xl mb-4 opacity-50">&quot;</div>
                <p className="text-xl font-medium text-white/90">
                  {isDe ? "Ich habe noch keinen CTO oder technischen Mitgründer." : "I don't have a CTO or tech co-founder yet."}
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="p-8 rounded-3xl bg-[#141618] border border-white/5 h-full">
                <div className="text-primary font-serif text-5xl mb-4 opacity-50">&quot;</div>
                <p className="text-xl font-medium text-white/90">
                  {isDe ? "Entwickler einzustellen kostet Zeit und Geld, das ich nicht habe." : "Hiring devs takes time and money I don't have."}
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="p-8 rounded-3xl bg-[#141618] border border-white/5 h-full">
                <div className="text-primary font-serif text-5xl mb-4 opacity-50">&quot;</div>
                <p className="text-xl font-medium text-white/90">
                  {isDe ? "Ich möchte einfach etwas Echtes launchen, um es Investoren oder Nutzern zu zeigen." : "I just want to launch something real to show investors or users."}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Why this works */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <Reveal>
              <h2 className="text-3xl md:text-5xl font-bold mb-10">{isDe ? "Warum dieser Weg funktioniert" : "Why this works"}</h2>
            </Reveal>
            <div className="space-y-6">
              {[
                isDe ? "Sie brauchen frühzeitig Traktion, keinen zusätzlichen Overhead." : "You need traction early on, not extra overhead.",
                isDe ? "Wir bringen ein komplettes Lieferteam mit, sodass Sie nicht von Grund auf neu einstellen müssen." : "We bring a full delivery team so you don't have to hire from scratch.",
                isDe ? "Sie erhalten eine schnelle, stabile Ausführung, die Ihnen beim Pitchen, Geldsammeln und Wachsen hilft." : "You get fast, stable execution that helps you pitch, raise, and grow.",
                isDe ? "Keine langen Zeitpläne oder aufgeblähten Prozesse. Nur funktionierende Software, pünktlich geliefert." : "No long timelines or bloated processes. Just working software, delivered on time."
              ].map((item, i) => (
                <Reveal key={i} delay={0.1 * i} direction="right">
                  <div className="flex items-start gap-4 p-6 rounded-2xl bg-[#141618] border border-white/5 hover:border-secondary/30 transition-colors">
                    <Target className="text-secondary shrink-0 mt-1" />
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
                src="https://solutionplus.io/wp-content/uploads/2025/09/What-you-get-with-us-14-scaled-uai-2560x1706.jpg" 
                alt="Why it works" 
                className="rounded-2xl w-full h-auto object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* How we help */}
      <section id="how-we-help" className="py-24 bg-[#0f1112] scroll-mt-24">
        <div className="container mx-auto px-6 md:px-12 text-center max-w-4xl">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-bold mb-16">{isDe ? "Wie wir Ihnen vorwärts helfen!" : "How we help you move forward!"}</h2>
          </Reveal>
          
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <Reveal delay={0.1} direction="up">
              <div className="p-8 rounded-3xl bg-[#141618] border border-white/5 relative group hover:-translate-y-2 transition-transform duration-300">
                <div className="absolute -top-6 -right-6 text-9xl font-bold text-white/[0.03] group-hover:text-secondary/[0.1] transition-colors">01</div>
                <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center mb-6 text-secondary">
                  <Rocket size={24} />
                </div>
                <h3 className="text-xl font-bold mb-4">{isDe ? "MVPs in 4–6 Wochen" : "MVPs in 4–6 weeks"}</h3>
                <p className="text-foreground/60 leading-relaxed relative z-10">
                  {isDe ? "Wir starten schnell, priorisieren den Kernwert und bringen Sie schnell auf den Markt." : "We move fast, prioritize core value, and get you to market quickly."}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2} direction="up">
              <div className="p-8 rounded-3xl bg-[#141618] border border-white/5 relative group hover:-translate-y-2 transition-transform duration-300">
                <div className="absolute -top-6 -right-6 text-9xl font-bold text-white/[0.03] group-hover:text-primary/[0.1] transition-colors">02</div>
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mb-6 text-primary">
                  <Coins size={24} />
                </div>
                <h3 className="text-xl font-bold mb-4">{isDe ? "Fester Umfang. Transparenter Preis." : "Fixed scope. Transparent pricing."}</h3>
                <p className="text-foreground/60 leading-relaxed relative z-10">
                  {isDe ? "Keine Überraschungen oder versteckten Kosten. Klare Logik über den gesamten Zyklus hinweg." : "No surprises or hidden fees. Clear logic throughout the entire cycle."}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.3} direction="up">
              <div className="p-8 rounded-3xl bg-[#141618] border border-white/5 relative group hover:-translate-y-2 transition-transform duration-300">
                <div className="absolute -top-6 -right-6 text-9xl font-bold text-white/[0.03] group-hover:text-primary/[0.1] transition-colors">03</div>
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mb-6 text-primary">
                  <LayoutDashboard size={24} />
                </div>
                <h3 className="text-xl font-bold mb-4">{isDe ? "Deutsch-geführt, global gebaut" : "German-managed, globally built"}</h3>
                <p className="text-foreground/60 leading-relaxed relative z-10">
                  {isDe ? "Sie arbeiten mit einem Delivery Lead in Deutschland, während unsere Ingenieure in Pakistan mit Sorgfalt bauen." : "You'll work with a German-based delivery lead, while our engineers in Pakistan build with care."}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 relative overflow-hidden bg-secondary/5 border-t border-secondary/10">
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center max-w-4xl">
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              {isDe ? "Erwecken Sie Ihre" : "Let's bring your"} <span className="text-secondary">{isDe ? "Idee zum Leben." : "idea to life."}</span>
            </h2>
            <p className="text-xl text-foreground/70 mb-12">
              {isDe 
                ? "Egal, ob Sie ein Konzept validieren oder auf ein MVP hinsteuern, wir helfen Ihnen, den nächsten Schritt zu planen – ohne Fachjargon, ohne lange Wartezeiten."
                : "Whether you're validating a concept or racing toward an MVP, we'll help you map the next step; no jargon, no long wait."}
            </p>
            <Link
              href={`/${locale}/${isDe ? "kontakt-solutionplus" : "contact-us"}`}
              className="px-10 py-5 inline-block rounded-full bg-secondary text-white font-bold tracking-wide text-lg hover:bg-[#ff8a65] transition-all duration-300 shadow-[0_4px_20px_-4px_rgba(255,112,67,0.4)] hover:shadow-[0_8px_40px_-4px_rgba(255,112,67,0.6)] hover:-translate-y-1 active:scale-95 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />
              {isDe ? "Jetzt sprechen" : "Start talking"}
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
