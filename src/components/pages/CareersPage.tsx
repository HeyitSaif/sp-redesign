"use client";

import { Reveal } from "@/components/animations/Reveal";
import { ArrowRight, Globe2, Heart, Lightbulb, TrendingUp, ShieldCheck, Cpu } from "lucide-react";
import Link from "next/link";

export function CareersPage({ locale }: { locale: string }) {
  const isDe = locale === "de";

  return (
    <div className="flex flex-col w-full overflow-hidden pt-32 pb-24">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-6 md:px-12 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <Reveal>
              <span className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-secondary text-sm font-medium mb-8">
                {isDe ? "Karriere bei SolutionPlus" : "Careers at SolutionPlus"}
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8">
                {isDe ? "Bauen mit Sinn. " : "Build with purpose. "} <span className="text-gradient">{isDe ? "Wachsen ohne Grenzen." : "Grow without borders."}</span>
              </h1>
              <p className="text-xl text-foreground/70 leading-relaxed mb-8 max-w-xl">
                {isDe 
                  ? "Wir sind mehr als ein Softwareunternehmen; wir sind ein Team mit klaren Zielen. Mit deutsch geführter Projektaufsicht und Top-Engineering-Talenten aus Pakistan liefern wir nachhaltigen Einfluss für Kunden in ganz Europa und den USA."
                  : "We're more than a software company; we're a team built on purpose. With German-led project oversight and top engineering talent from Pakistan, we deliver lasting impact for clients across Europe and the US."}
              </p>
              <div className="flex gap-4">
                <a
                  href="#open-roles"
                  className="px-8 py-4 rounded-full bg-secondary text-white font-bold tracking-wide hover:bg-[#ff8a65] transition-all duration-300 shadow-[0_4px_20px_-4px_rgba(255,112,67,0.4)] hover:shadow-[0_8px_30px_-4px_rgba(255,112,67,0.6)] hover:-translate-y-1 active:scale-95 inline-flex items-center gap-2 relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />
                  {isDe ? "Offene Stellen" : "View Open Roles"} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </Reveal>
          </div>
          <Reveal direction="left">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#141618] p-2 rotate-2 hover:rotate-0 transition-transform duration-500 shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="https://solutionplus.io/wp-content/uploads/2025/09/Careers-13-scaled-uai-1444x1444.jpg" 
                alt="Careers at SolutionPlus" 
                className="rounded-2xl w-full h-auto object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Culture */}
      <section className="py-24 bg-[#0f1112] border-y border-white/5 relative overflow-hidden">
        <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center max-w-4xl">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-bold mb-8">{isDe ? "Unsere Arbeitskultur" : "Our Work Culture"}</h2>
            <p className="text-xl text-primary font-medium mb-16">
              {isDe 
                ? "Remote-first by design. Global by nature. Human at the core."
                : "Remote-first by design. Global by nature. Human at the core."}
            </p>
          </Reveal>
          
          <div className="grid md:grid-cols-2 gap-8 text-left">
            {[
              {
                icon: <Globe2 size={32} className="text-secondary" />,
                title: isDe ? "Kommunikation" : "Communication",
                desc: isDe ? "Kommunizieren Sie klar und respektvoll über Grenzen und Hintergründe hinweg." : "Communicate clearly and respectfully across borders and backgrounds."
              },
              {
                icon: <ShieldCheck size={32} className="text-primary" />,
                title: isDe ? "Verantwortung übernehmen" : "Take ownership",
                desc: isDe ? "Warten Sie nicht darauf, dass man es Ihnen sagt, machen Sie Dinge besser." : "Don't wait to be told, make things better."
              },
              {
                icon: <Lightbulb size={32} className="text-primary" />,
                title: isDe ? "Klarheit vor Raffinesse" : "Seek clarity over cleverness",
                desc: isDe ? "Fortschritt über Perfektion." : "Progress over perfection."
              },
              {
                icon: <TrendingUp size={32} className="text-secondary" />,
                title: isDe ? "Mutig wachsen" : "Grow boldly",
                desc: isDe ? "Als Entwickler, Teamkollege und Mensch." : "As a developer, teammate, and human."
              }
            ].map((feature, i) => (
              <Reveal key={i} delay={0.1 * (i + 1)} direction="up">
                <div className="p-8 rounded-[2rem] bg-[#141618]/80 backdrop-blur-xl border border-white/5 hover:border-white/20 transition-all duration-500 h-full relative overflow-hidden group hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 group-hover:bg-primary/10 group-hover:border-primary/30 group-hover:text-primary transition-all duration-500 shadow-lg text-white">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white group-hover:text-primary transition-colors">{feature.title}</h3>
                  <p className="text-foreground/70 leading-relaxed group-hover:text-foreground/90 transition-colors">{feature.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/5 blur-[150px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <Reveal>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">{isDe ? "Warum bei uns arbeiten" : "Why Work With Us"}</h2>
              <p className="text-lg text-foreground/70 mb-10">
                {isDe 
                  ? "Wenn sich dies nach Ihrer Arbeitsweise anfühlt, würden wir uns freuen, von Ihnen zu hören."
                  : "If this feels like your way of working, we'd love to hear from you."}
              </p>
            </Reveal>
            <div className="space-y-6">
              {[
                isDe ? "Denken Sie wie ein Ingenieur. Fragen Sie nach dem Warum und verbessern Sie Dinge." : "Think like an engineer. Don't just follow specs ask why and improve.",
                isDe ? "Arbeiten Sie in einer respektvollen Kultur. Stressfrei, unterstützend und auf Vertrauen gebaut." : "Work in a respectful culture. Stress-free, supportive, and built on trust.",
                isDe ? "Wachsen Sie global. Sammeln Sie Erfahrung als Entwickler, Teammitglied und Profi." : "Grow globally. Gain exposure as a developer, teammate, and professional."
              ].map((item, i) => (
                <Reveal key={i} delay={0.1 * i} direction="right">
                  <div className="flex items-start gap-4 p-6 rounded-2xl bg-[#141618] border border-white/5 hover:border-secondary/30 transition-colors">
                    <Heart className="text-secondary shrink-0 mt-1" />
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
                src="https://solutionplus.io/wp-content/uploads/2025/10/Work-in-a-respectful-culture.-Stress-free-supportive-and-built-on-trust.png" 
                alt="Culture" 
                className="rounded-2xl w-full h-auto object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Open Roles */}
      <section id="open-roles" className="py-32 bg-[#0f1112] border-t border-white/5 relative scroll-mt-24">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-bold mb-16">{isDe ? "Offene Positionen" : "Open Roles"}</h2>
          </Reveal>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-left">
            {[
              {
                title: "Data Engineer",
                exp: isDe ? "1+ Jahr Erfahrung" : "1+ year experience",
                img: "https://solutionplus.io/wp-content/uploads/2025/09/What-youll-get-14-uai-1167x1459.jpg"
              },
              {
                title: "Sales Executive",
                exp: isDe ? "1+ Jahr Erfahrung" : "1+ year experience",
                img: "https://solutionplus.io/wp-content/uploads/2025/09/Calculate-your-team-setup-14-1-scaled-uai-2048x2560.jpg"
              },
              {
                title: "MERN Developer",
                exp: isDe ? "1+ Jahr Erfahrung" : "1+ year experience",
                img: "https://solutionplus.io/wp-content/uploads/2025/09/SS-14-uai-1167x1459.jpg"
              }
            ].map((role, i) => (
              <Reveal key={i} delay={0.1 * (i + 1)} direction="up">
                <div className="group rounded-3xl bg-[#141618] border border-white/5 overflow-hidden hover:border-secondary/30 transition-all block cursor-pointer">
                  <div className="relative aspect-[4/5] overflow-hidden bg-[#1a1c1e]">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#141618] via-transparent to-transparent z-10 opacity-80" />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src={role.img} 
                      alt={role.title} 
                      className="w-full h-full object-cover object-center opacity-70 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-8 relative z-20 -mt-20">
                    <h3 className="text-2xl font-bold text-white mb-2">{role.title}</h3>
                    <div className="flex items-center gap-2 text-secondary font-medium mb-4">
                      <Cpu size={18} /> {role.exp}
                    </div>
                    <div className="text-primary font-medium flex items-center gap-2 group-hover:text-secondary transition-colors">
                      {isDe ? "Bewerben" : "Apply Now"} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 relative overflow-hidden bg-secondary/5 border-t border-secondary/10">
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center max-w-4xl">
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              {isDe ? "Bereit für den" : "Ready to make an"} <span className="text-secondary">{isDe ? "nächsten Schritt?" : "impact?"}</span>
            </h2>
            <Link
              href={`/${locale}/${isDe ? "kontakt-solutionplus" : "contact-us"}`}
              className="px-10 py-5 inline-block rounded-full bg-secondary text-white font-bold tracking-wide text-lg hover:bg-[#ff8a65] transition-all duration-300 shadow-[0_4px_20px_-4px_rgba(255,112,67,0.4)] hover:shadow-[0_8px_40px_-4px_rgba(255,112,67,0.6)] hover:-translate-y-1 active:scale-95 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />
              {isDe ? "Jetzt bewerben" : "Get in touch"}
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
