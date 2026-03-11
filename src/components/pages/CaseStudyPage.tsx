'use client'

import { Reveal } from '@/components/animations/Reveal'
import { ArrowLeft, ArrowRight, CheckCircle2, Settings } from 'lucide-react'
import Link from 'next/link'
import { FloatiesBackground } from '@/components/ui/FloatiesBackground'
import { ContactFormSection } from '@/components/sections/ContactFormSection'
import { type CaseStudyContent } from '@/data/case-studies'

export function CaseStudyPage({ locale, data }: { locale: string; data: CaseStudyContent }) {
  const isDe = locale === 'de'

  const renderText = (text?: string | string[]) => {
    if (!text) return null
    if (Array.isArray(text)) {
      return text.map((p, i) => (
        <p key={i} className="mb-4 text-foreground/80 leading-relaxed text-lg font-light">
          {p.includes('**') 
            ? p.split(/(\*\*.*?\*\*)/).map((part, j) => part.startsWith('**') ? <strong key={j} className="font-bold text-white">{part.replace(/\*\*/g, '')}</strong> : part)
            : p}
        </p>
      ))
    }
    return (
      <p className="mb-4 text-foreground/80 leading-relaxed text-lg font-light">
        {text.includes('**') 
            ? text.split(/(\*\*.*?\*\*)/).map((part, j) => part.startsWith('**') ? <strong key={j} className="font-bold text-white">{part.replace(/\*\*/g, '')}</strong> : part)
            : text}
      </p>
    )
  }

  return (
    <div className="relative flex w-full flex-col overflow-x-hidden pt-32 pb-24">
      <FloatiesBackground />
      
      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-center overflow-x-hidden py-20">
        <div className="pointer-events-none absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay" />
        <div className="bg-sp-accent/10 pointer-events-none absolute top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[150px]" />

        <div className="relative z-10 container mx-auto px-6 md:px-12">
          <Reveal>
            <div className="mb-8 flex items-center gap-4">
              <Link
                href={`/${locale}/${isDe ? 'fallstudien' : 'case-studies'}`}
                className="text-foreground/50 hover:text-sp-accent transition-colors flex items-center gap-2 font-medium"
              >
                <ArrowLeft size={16} />
                {isDe ? 'Alle Fallstudien' : 'All Case Studies'}
              </Link>
            </div>
            
            <div className="bg-sp-accent/10 border-sp-accent/20 text-sp-accent mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium tracking-wide uppercase">
              {data.industryBadge}
            </div>
            
            <h1 className="mb-8 max-w-5xl text-4xl leading-[1.15] font-bold md:text-6xl lg:text-7xl text-white">
              {data.title.split('»')[0]} <br />
              <span className="text-sp-accent text-3xl md:text-5xl lg:text-6xl mt-4 inline-block font-semibold">
                {data.title.split('»')[1]?.trim() || data.tagline}
              </span>
            </h1>
            
            <div className="max-w-3xl">
              {renderText(data.intro)}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Challenge & Approach */}
      <section className="relative z-10 container mx-auto px-6 py-16 md:px-12">
        <div className="grid gap-16 lg:grid-cols-2">
          {data.challengeTitle && (
            <Reveal direction="up" delay={0.1}>
              <div className="bg-sp-bg-medium h-full rounded-[2rem] border border-white/5 p-8 md:p-12">
                <h2 className="mb-6 text-3xl font-bold text-white">{data.challengeTitle}</h2>
                {renderText(data.challengeText)}
                
                {data.challengeBullets && (
                  <ul className="mt-6 space-y-4">
                    {data.challengeBullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-4 text-foreground/80 leading-relaxed">
                        <span className="text-sp-accent mt-1 text-xl font-bold">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
                
                {data.challengeTable && (
                  <div className="mt-8 overflow-hidden rounded-xl border border-white/10 bg-white/5">
                    {data.challengeTable.map((row, i) => (
                      <div key={i} className={`flex flex-col md:flex-row border-white/10 p-4 ${i !== data.challengeTable!.length - 1 ? 'border-b' : ''}`}>
                        <div className="font-semibold text-white md:w-1/3 mb-2 md:mb-0">{row.label || (row as any).col1}</div>
                        <div className="text-foreground/70 md:w-2/3">{(row as any).value || (row as any).col2}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </Reveal>
          )}

          {data.approachTitle && (
            <Reveal direction="up" delay={0.2}>
              <div className="bg-sp-bg-medium h-full rounded-[2rem] border border-white/5 p-8 md:p-12">
                <h2 className="mb-6 text-3xl font-bold text-white">{data.approachTitle}</h2>
                {renderText(data.approachText)}
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {/* Quote */}
      {data.quote && (
        <section className="relative z-10 container mx-auto px-6 py-16 md:px-12">
          <Reveal>
            <div className="mx-auto max-w-4xl text-center">
              <blockquote className="text-3xl md:text-5xl font-light italic leading-tight text-white mb-6">
                "{data.quote}"
              </blockquote>
            </div>
          </Reveal>
        </section>
      )}

      {/* What We Built */}
      {data.builtTitle && (
        <section className="relative z-10 container mx-auto px-6 py-16 md:px-12">
          <Reveal>
            <h2 className="mb-12 text-3xl font-bold md:text-5xl">{data.builtTitle}</h2>
            {data.builtIntro && <div className="mb-12 max-w-3xl">{renderText(data.builtIntro)}</div>}
          </Reveal>

          {data.builtBullets && (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {data.builtBullets.map((bullet, i) => (
                <Reveal key={i} delay={0.1 * i} direction="up">
                  <div className="bg-sp-bg-medium h-full rounded-2xl border border-white/5 p-8">
                    {bullet.title && <h3 className="mb-4 text-xl font-bold text-white">{bullet.title}</h3>}
                    <p className="text-foreground/70 leading-relaxed">{bullet.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          )}

          {data.builtSections && (
            <div className="space-y-16 mt-12">
              {data.builtSections.map((section, i) => (
                <Reveal key={i} direction="up">
                  <div className="bg-sp-bg-medium rounded-[2rem] border border-white/5 p-8 md:p-12">
                    <h3 className="mb-6 text-2xl font-bold text-white">{section.title}</h3>
                    {section.desc && <p className="mb-8 text-foreground/80 leading-relaxed text-lg">{section.desc}</p>}
                    
                    {section.bullets && (
                      <div className="grid gap-4 md:grid-cols-2">
                        {section.bullets.map((bullet, j) => (
                          <div key={j} className="flex items-start gap-4 bg-white/5 p-4 rounded-xl border border-white/5">
                            <CheckCircle2 className="text-sp-accent shrink-0" size={20} />
                            <span className="text-foreground/90">{bullet}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          )}
        </section>
      )}

      {/* Architecture (if applicable) */}
      {data.architectureTitle && (
        <section className="relative z-10 container mx-auto px-6 py-16 md:px-12">
          <Reveal>
            <h2 className="mb-8 text-3xl font-bold md:text-5xl">{data.architectureTitle}</h2>
            {renderText(data.architectureText)}
            
            {data.architectureTable && (
              <div className="mt-12 overflow-hidden rounded-2xl border border-white/10 bg-sp-bg-medium">
                <div className="hidden md:grid grid-cols-3 gap-4 border-b border-white/10 p-6 bg-white/5 font-bold text-white uppercase tracking-wider text-sm">
                  <div>Layer</div>
                  <div>Choice</div>
                  <div>Reason</div>
                </div>
                {data.architectureTable.map((row, i) => (
                  <div key={i} className={`grid md:grid-cols-3 gap-2 md:gap-4 p-6 ${i !== data.architectureTable!.length - 1 ? 'border-b border-white/10' : ''}`}>
                    <div className="font-bold text-sp-accent md:text-white mb-1 md:mb-0">{row.col1}</div>
                    <div className="font-semibold text-white mb-2 md:mb-0">{row.col2}</div>
                    <div className="text-foreground/70">{row.col3}</div>
                  </div>
                ))}
              </div>
            )}
          </Reveal>
        </section>
      )}

      {/* Metrics */}
      {data.metricsTitle && (
        <section className="relative z-10 container mx-auto px-6 py-16 md:px-12">
          <Reveal>
            <h2 className="mb-12 text-3xl font-bold md:text-5xl text-center">{data.metricsTitle}</h2>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {data.metricsTable?.map((metric, i) => (
                <Reveal key={i} delay={0.1 * i} direction="up">
                  <div className="bg-sp-bg-medium flex h-full flex-col justify-center rounded-[2rem] border border-white/5 p-8 text-center hover:border-sp-accent/30 transition-colors">
                    <p className="text-sp-accent mb-4 text-sm font-bold uppercase tracking-widest">{metric.label}</p>
                    <p className="text-xl font-bold text-white md:text-2xl">{metric.value}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </section>
      )}

      {/* Why It Worked */}
      {data.whyItWorkedTitle && (
        <section className="relative z-10 container mx-auto px-6 py-16 md:px-12">
          <Reveal>
            <div className="mx-auto max-w-4xl bg-sp-bg-medium border-l-4 border-sp-accent p-8 md:p-12 rounded-r-[2rem] shadow-2xl">
              <h2 className="mb-6 text-3xl font-bold text-white">{data.whyItWorkedTitle}</h2>
              {renderText(data.whyItWorkedText)}
            </div>
          </Reveal>
        </section>
      )}

      {/* Tools & Services */}
      {(data.tools || data.services) && (
        <section className="relative z-10 container mx-auto px-6 py-16 md:px-12 text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 mb-6 text-sp-accent">
              <Settings size={20} />
              <span className="font-bold uppercase tracking-wider">{isDe ? 'Technologien & Services' : 'Technologies & Services'}</span>
            </div>
            
            {data.tools && (
              <p className="text-xl md:text-2xl font-light text-white mb-4 leading-relaxed max-w-4xl mx-auto">
                {data.tools}
              </p>
            )}
            
            {data.services && (
              <p className="text-lg text-foreground/70 leading-relaxed max-w-4xl mx-auto">
                {data.services}
              </p>
            )}
          </Reveal>
        </section>
      )}

      {/* Key Takeaway / Testimonial */}
      {(data.keyTakeaway || data.testimonial) && (
        <section className="relative z-10 container mx-auto px-6 py-16 md:px-12">
          <Reveal>
            <div className="mx-auto max-w-4xl text-center">
              {data.keyTakeaway && (
                <blockquote className="text-3xl md:text-5xl font-bold leading-tight text-white mb-6">
                  "{data.keyTakeaway}"
                </blockquote>
              )}
              
              {data.testimonial && (
                <div className="mt-12 bg-white/5 rounded-[2rem] p-8 md:p-12 border border-white/10">
                  <div className="mb-8 flex justify-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="h-6 w-6 text-[#ffb900]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="text-xl md:text-2xl font-light italic leading-relaxed text-white mb-8">
                    "{data.testimonial.quote}"
                  </blockquote>
                  <p className="text-sp-accent font-bold text-lg">{data.testimonial.author}</p>
                </div>
              )}
            </div>
          </Reveal>
        </section>
      )}

      {/* Final CTA */}
      <section className="bg-sp-bg-medium relative overflow-x-hidden border-t border-white/5 py-24 md:py-32">
        <div className="relative z-10 container mx-auto grid items-start gap-16 px-6 md:px-12 lg:grid-cols-2">
          <Reveal>
            <div className="max-w-xl">
              <h2 className="mb-10 text-5xl leading-[1.1] font-black tracking-tight text-white md:text-6xl">
                {isDe
                  ? 'Bereit für ähnliche Ergebnisse?'
                  : 'Ready for similar results?'}
              </h2>
              <p className="text-foreground/70 text-2xl leading-relaxed font-light">
                {isDe
                  ? 'Lassen Sie uns darüber sprechen, wie wir Ihre Herausforderungen in Erfolgsgeschichten verwandeln können.'
                  : 'Let\'s talk about how we can turn your challenges into success stories.'}
              </p>
            </div>
          </Reveal>

          <Reveal direction="left" delay={0.2}>
            <ContactFormSection locale={locale} />
          </Reveal>
        </div>
      </section>
    </div>
  )
}
