import { Reveal } from "@/components/animations/Reveal";
import { ArrowRight, Globe2, Target } from "lucide-react";
import Link from "next/link";

export function AboutPage({ locale }: { locale: string }) {
  const isDe = locale === "de";

  const team = [
    {
      name: "Saif Qureshi",
      role: isDe ? "CEO & Gründer" : "CEO & Founder",
      desc: isDe 
        ? "Mit über 7 Jahren Erfahrung in Fintech, SaaS, Web3 und AI leitet Saif SolutionPlus als CEO, um skalierbare Produkte zu liefern."
        : "Blending 7+ years in fintech, SaaS, Web3, and AI, Saif leads SolutionPlus as CEO to deliver scalable products.",
      img: "https://solutionplus.io/wp-content/uploads/2025/09/1-1-uai-848x1060.png"
    },
    {
      name: "Matthias Frank",
      role: "Chief Operation Officer",
      desc: isDe 
        ? "Mit 10 Jahren Erfahrung in komplexen Softwareprojekten sichert Matthias Lieferungen in deutscher Qualität mit globalen Talenten."
        : "Drawing on 10 years in complex software projects, Matthias ensures German-quality delivery with global talent.",
      img: "https://solutionplus.io/wp-content/uploads/2025/09/2-1-uai-848x1060.png"
    },
    {
      name: "Sana Shahid",
      role: "Chief Marketing Officer",
      desc: isDe 
        ? "Sana leitet das Marketing bei SolutionPlus und nutzt 8 Jahre globale Erfahrung, um Strategie in Wachstum zu verwandeln."
        : "Guiding marketing and communications at SolutionPlus, Sana uses 8 years of global experience to turn strategy into growth.",
      img: "https://solutionplus.io/wp-content/uploads/2025/09/3-1-uai-848x1060.png"
    }
  ];

  return (
    <div className="flex flex-col w-full overflow-hidden pt-32">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-6 md:px-12 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <Reveal>
              <span className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary text-sm font-medium mb-8">
                {isDe ? "Über Uns" : "About Us"}
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8">
                The <span className="text-gradient">partner</span> behind your next product milestone.
              </h1>
              <p className="text-xl text-foreground/70 leading-relaxed mb-8">
                {isDe 
                  ? "Wir haben SolutionPlus nicht gegründet, um ein weiteres Dev-Shop zu sein. Wir haben es gebaut, weil wir in Ihren Schuhen gesteckt haben; schnell liefern, richtig einstellen und Dinge ohne Ausreden erledigen."
                  : "We didn't start SolutionPlus to be another dev shop. We built it because we've been in your shoes; racing to deliver, hire right, and get things done without excuses."}
              </p>
              <div className="flex gap-4">
                <Link
                  href={`/${locale}/${isDe ? "kontakt-solutionplus" : "contact-us"}`}
                  className="px-8 py-4 rounded-full bg-primary text-white font-bold tracking-wide hover:bg-[#6c7bd0] transition-all duration-300 shadow-[0_4px_20px_-4px_rgba(92,107,192,0.4)] hover:shadow-[0_8px_30px_-4px_rgba(92,107,192,0.6)] hover:-translate-y-1 active:scale-95 flex items-center gap-2 group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />
                  {isDe ? "Sprechen Sie mit uns" : "Let's talk"} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </Reveal>
          </div>
          <Reveal direction="left">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#141618] p-2 rotate-2 hover:rotate-0 transition-transform duration-500">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="https://solutionplus.io/wp-content/uploads/2025/09/Careers-13-scaled-uai-1444x1444.jpg" 
                alt="Team Collaboration" 
                className="rounded-2xl w-full h-auto object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-[#0f1112] border-y border-white/5 relative overflow-hidden">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] bg-secondary/5 blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <Reveal direction="up" delay={0.1}>
              <div className="p-10 rounded-[2rem] bg-[#141618]/80 backdrop-blur-xl border border-white/5 h-full relative overflow-hidden group hover:border-white/20 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-20 group-hover:scale-110 transition-all duration-500">
                  <Globe2 size={120} className="text-primary" />
                </div>
                <h2 className="text-3xl font-bold mb-6 text-primary relative z-10 group-hover:translate-x-2 transition-transform duration-300">{isDe ? "Vision" : "Vision"}</h2>
                <p className="text-xl text-foreground/70 leading-relaxed relative z-10">
                  {isDe 
                    ? "Wir befähigen Unternehmen rund um den Globus zum Zugang zu herausragenden Softwarelösungen und erstklassigen Tech-Talenten; schnell, skalierbar und ohne Grenzen."
                    : "We empower companies around the globe to access outstanding software solutions and top-tier tech talent; fast, scalable, and without borders."}
                </p>
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.2}>
              <div className="p-10 rounded-[2rem] bg-[#141618]/80 backdrop-blur-xl border border-white/5 h-full relative overflow-hidden group hover:border-white/20 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-tr from-secondary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-20 group-hover:scale-110 transition-all duration-500">
                  <Target size={120} className="text-secondary" />
                </div>
                <h2 className="text-3xl font-bold mb-6 text-secondary relative z-10 group-hover:translate-x-2 transition-transform duration-300">{isDe ? "Mission" : "Mission"}</h2>
                <p className="text-xl text-foreground/70 leading-relaxed relative z-10">
                  {isDe 
                    ? "Wir schlagen die Brücke zwischen Vision und Umsetzung, indem wir erstklassige Softwaredienstleistungen erbringen und weltweit vernetzte Teams aufbauen, die nachhaltiges Geschäftswachstum fördern."
                    : "We bridge vision and execution by delivering world-class software services and building globally connected teams that fuel sustainable business growth."}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-bold mb-16">{isDe ? "Lernen Sie unser Team kennen" : "Meet Our Team"}</h2>
          </Reveal>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-left">
            {team.map((member, i) => (
              <Reveal key={i} delay={0.1 * (i + 1)} direction="up">
                <div className="group rounded-[2rem] bg-[#141618]/80 backdrop-blur-xl border border-white/5 overflow-hidden hover:border-white/20 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] hover:-translate-y-2">
                  <div className="relative aspect-[4/5] overflow-hidden bg-[#1a1c1e]">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#141618] via-transparent to-transparent z-10 opacity-80" />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src={member.img} 
                      alt={member.name} 
                      className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-8 relative z-20 -mt-12 bg-gradient-to-t from-[#141618] to-transparent pt-12">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{member.name}</h3>
                    <p className="text-primary font-medium mb-4">{member.role}</p>
                    <p className="text-foreground/70 leading-relaxed text-sm">
                      {member.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Global CTA */}
      <section className="py-32 relative overflow-hidden bg-[#0f1112] border-t border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center max-w-4xl">
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              {isDe ? "Bereit für das nächste Level?" : "Ready to take the next step?"}
            </h2>
            <Link
              href={`/${locale}/${isDe ? "kontakt-solutionplus" : "contact-us"}`}
              className="px-10 py-5 inline-block rounded-full bg-primary text-white font-bold text-lg tracking-wide hover:bg-[#6c7bd0] transition-all duration-300 shadow-[0_4px_20px_-4px_rgba(92,107,192,0.4)] hover:shadow-[0_8px_40px_-4px_rgba(92,107,192,0.6)] hover:-translate-y-1 active:scale-95 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />
              {isDe ? "Projekt starten" : "Start your project"}
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
