'use client'

import { Reveal } from '@/components/animations/Reveal'
import { ArrowLeft, ArrowRight, CheckCircle2, Settings } from 'lucide-react'
import Link from 'next/link'
import { FloatiesBackground } from '@/components/ui/FloatiesBackground'
import { ContactFormSection } from '@/components/sections/ContactFormSection'
import { type CaseStudyContent, caseStudies } from '@/data/case-studies'
import { supportData } from '@/data/support-content'

export function CaseStudyPage({ locale, data }: { locale: string; data: CaseStudyContent }) {
  const isDe = locale === 'de'

  const renderText = (text?: string | string[], darkText = false) => {
    if (!text) return null
    if (Array.isArray(text)) {
      return text.map((p, i) => (
        <p
          key={i}
          className={`mb-4 text-lg leading-relaxed font-light ${darkText ? 'text-sp-text-on-light' : 'text-foreground/80'}`}
        >
          {p.includes('**')
            ? p.split(/(\*\*.*?\*\*)/).map((part, j) =>
                part.startsWith('**') ? (
                  <strong
                    key={j}
                    className={`font-bold ${darkText ? 'text-sp-text-dark' : 'text-white'}`}
                  >
                    {part.replace(/\*\*/g, '')}
                  </strong>
                ) : (
                  part
                )
              )
            : p}
        </p>
      ))
    }
    return (
      <p
        className={`mb-4 text-lg leading-relaxed font-light ${darkText ? 'text-sp-text-on-light' : 'text-foreground/80'}`}
      >
        {text.includes('**')
          ? text.split(/(\*\*.*?\*\*)/).map((part, j) =>
              part.startsWith('**') ? (
                <strong
                  key={j}
                  className={`font-bold ${darkText ? 'text-sp-text-dark' : 'text-white'}`}
                >
                  {part.replace(/\*\*/g, '')}
                </strong>
              ) : (
                part
              )
            )
          : text}
      </p>
    )
  }

  return (
    <div className="relative flex w-full flex-col overflow-x-clip pt-24 pb-16 md:pt-32 md:pb-24">
      <FloatiesBackground />

      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-center overflow-x-clip py-12 md:py-16 lg:py-20">
        <div className="pointer-events-none absolute inset-0 noise-overlay opacity-10 mix-blend-overlay" />
        <div className="bg-sp-accent/10 pointer-events-none absolute top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[150px]" />

        <div className="relative z-10 container mx-auto px-5 md:px-8 lg:px-12">
          <Reveal>
            <div className="mb-8 flex items-center gap-4">
              <Link
                href={`/${locale}/${isDe ? 'fallstudien' : 'case-studies'}`}
                className="text-foreground/70 hover:text-sp-accent flex items-center gap-2 font-medium transition-colors"
              >
                <ArrowLeft size={16} />
                {isDe ? 'Alle Fallstudien' : 'All Case Studies'}
              </Link>
            </div>

            <div className="mb-6 flex flex-wrap items-center gap-2">
              <div className="bg-sp-accent/10 border-sp-accent/20 text-sp-accent inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium tracking-wide uppercase">
                {data.industryBadge}
              </div>
              {data.duration && (
                <div className="border-sp-border-dark bg-sp-surface-subtle text-sp-text-muted inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium tracking-wide uppercase">
                  {supportData[isDe ? 'de' : 'en'].caseStudies.duration}: {data.duration}
                </div>
              )}
              {data.deliveryModel && (
                <div className="border-sp-border-dark bg-sp-surface-subtle text-sp-text-muted inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium tracking-wide uppercase">
                  {data.deliveryModel}
                </div>
              )}
            </div>

            <h1 className="mb-8 max-w-5xl text-3xl leading-[1.15] font-bold text-white md:text-3xl md:text-4xl md:text-5xl md:text-6xl lg:text-7xl">
              {data.title.split('»')[0]} <br />
              <span className="text-sp-accent mt-4 inline-block text-3xl font-semibold md:text-3xl md:text-4xl md:text-5xl md:text-6xl lg:text-3xl">
                {data.title.split('»')[1]?.trim() || data.tagline}
              </span>
            </h1>

            {data.executiveSummary && (
              <div className="border-sp-accent mb-10 max-w-4xl border-l-4 py-2 pl-6">
                <p className="text-xl leading-relaxed font-medium text-white md:text-2xl">
                  {data.executiveSummary}
                </p>
              </div>
            )}

            <div className="max-w-3xl">{renderText(data.intro)}</div>
          </Reveal>
        </div>
      </section>

      {/* Challenge & Approach */}
      <section className="relative z-10 container mx-auto px-5 py-12 md:px-12 md:py-16">
        <div className="grid gap-10 md:gap-16 lg:grid-cols-2">
          {data.challengeTitle && (
            <Reveal direction="up" delay={0.1}>
              <div className="bg-sp-bg-medium h-full overflow-hidden rounded-2xl border border-black/10 p-5 md:p-5 md:p-8 md:p-12">
                <h2 className="text-sp-text-dark mb-6 text-3xl font-bold">{data.challengeTitle}</h2>
                {renderText(data.challengeText, true)}

                {data.challengeBullets && (
                  <ul className="mt-6 space-y-4">
                    {data.challengeBullets.map((bullet, i) => (
                      <li
                        key={i}
                        className="text-sp-text-on-light flex items-start gap-4 leading-relaxed"
                      >
                        <span className="text-sp-accent mt-1 text-xl font-bold">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {data.challengeTable && (
                  <div className="mt-8 overflow-hidden rounded-xl border border-black/10 bg-black/5">
                    {data.challengeTable.map(
                      (
                        row: { label?: string; col1?: string; value?: string; col2?: string },
                        i
                      ) => (
                        <div
                          key={i}
                          className={`flex flex-col border-black/10 p-4 md:flex-row ${i !== data.challengeTable!.length - 1 ? 'border-b' : ''}`}
                        >
                          <div className="text-sp-text-dark mb-2 font-semibold md:mb-0 md:w-1/3">
                            {row.label ?? row.col1}
                          </div>
                          <div className="text-sp-text-on-light md:w-2/3">
                            {row.value ?? row.col2}
                          </div>
                        </div>
                      )
                    )}
                  </div>
                )}
              </div>
            </Reveal>
          )}

          {data.approachTitle && (
            <Reveal direction="up" delay={0.2}>
              <div className="bg-sp-bg-medium h-full overflow-hidden rounded-2xl border border-black/10 p-5 md:p-5 md:p-8 md:p-12">
                <h2 className="text-sp-text-dark mb-6 text-3xl font-bold">{data.approachTitle}</h2>
                {renderText(data.approachText, true)}
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {/* Quote */}
      {data.quote && (
        <section className="relative z-10 container mx-auto px-5 py-12 md:px-12 md:py-16">
          <Reveal>
            <div className="mx-auto max-w-4xl">
              <div className="bg-sp-bg-medium relative overflow-hidden rounded-2xl border border-black/10 p-5 shadow-[0_32px_80px_-20px_rgba(0,0,0,0.15)] md:p-5 md:p-8 md:p-10 md:p-16">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/60 to-transparent" />
                <div className="bg-sp-accent absolute top-0 bottom-0 left-0 w-2" />

                <blockquote className="text-sp-text-dark relative z-10 text-3xl leading-tight font-light italic md:text-3xl md:text-4xl md:text-5xl">
                  &quot;{data.quote}&quot;
                </blockquote>
              </div>
            </div>
          </Reveal>
        </section>
      )}

      {/* What We Built */}
      {data.builtTitle && (
        <section className="relative z-10 container mx-auto px-5 py-12 md:px-12 md:py-16">
          <Reveal>
            <h2 className="mb-8 text-3xl font-bold md:mb-12 md:text-3xl md:text-4xl md:text-5xl">
              {data.builtTitle}
            </h2>
            {data.builtIntro && (
              <div className="mb-8 max-w-3xl md:mb-12">{renderText(data.builtIntro)}</div>
            )}
          </Reveal>

          {data.builtBullets && (
            <div className="grid gap-5 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
              {data.builtBullets.map((bullet, i) => (
                <Reveal key={i} delay={0.1 * i} direction="up">
                  <div className="bg-sp-bg-medium h-full overflow-hidden rounded-2xl border border-black/10 p-5 md:p-8">
                    {bullet.title && (
                      <h3 className="text-sp-text-dark mb-4 text-xl font-bold">{bullet.title}</h3>
                    )}
                    <p className="text-sp-text-on-light leading-relaxed">{bullet.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          )}

          {data.builtSections && (
            <div className="mt-8 space-y-16 md:mt-12">
              {data.builtSections.map((section, i) => (
                <Reveal key={i} direction="up">
                  <div className="bg-sp-bg-medium overflow-hidden rounded-2xl border border-black/10 p-5 md:p-5 md:p-8 md:p-12">
                    <h3 className="text-sp-text-dark mb-6 text-2xl font-bold">{section.title}</h3>
                    {section.desc && (
                      <p className="text-sp-text-on-light mb-8 text-lg leading-relaxed">
                        {section.desc}
                      </p>
                    )}

                    {section.bullets && (
                      <div className="grid gap-4 md:grid-cols-2">
                        {section.bullets.map((bullet, j) => (
                          <div
                            key={j}
                            className="flex items-start gap-4 rounded-xl border border-black/5 bg-black/5 p-4"
                          >
                            <CheckCircle2 className="text-sp-accent shrink-0" size={20} />
                            <span className="text-sp-text-dark/90">{bullet}</span>
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
        <section className="relative z-10 container mx-auto px-5 py-12 md:px-12 md:py-16">
          <Reveal>
            <h2 className="mb-8 text-3xl font-bold md:text-3xl md:text-4xl md:text-5xl">
              {data.architectureTitle}
            </h2>
            {renderText(data.architectureText)}

            {data.architectureTable && (
              <div className="bg-sp-bg-medium mt-8 overflow-hidden rounded-2xl border border-black/10 shadow-sm md:mt-12">
                <div className="text-sp-text-dark hidden grid-cols-3 gap-4 border-b border-black/10 bg-black/5 p-5 text-sm font-bold tracking-wider uppercase md:grid md:p-6">
                  <div>Layer</div>
                  <div>Choice</div>
                  <div>Reason</div>
                </div>
                {data.architectureTable.map((row, i) => (
                  <div
                    key={i}
                    className={`grid gap-2 p-5 transition-colors hover:bg-black/5 md:grid-cols-3 md:gap-4 md:p-6 ${i !== data.architectureTable!.length - 1 ? 'border-b border-black/10' : ''} ${i % 2 === 0 ? 'bg-transparent' : 'bg-black/[0.02]'}`}
                  >
                    <div className="text-sp-accent md:text-sp-text-dark mb-1 flex items-center gap-2 font-bold md:mb-0">
                      <div className="bg-sp-accent hidden h-1.5 w-1.5 rounded-full md:block" />
                      {row.col1}
                    </div>
                    <div className="text-sp-text-dark mb-2 font-semibold md:mb-0">{row.col2}</div>
                    <div className="text-sp-text-on-light">{row.col3}</div>
                  </div>
                ))}
              </div>
            )}
          </Reveal>
        </section>
      )}

      {/* Metrics */}
      {data.metricsTitle && (
        <section className="relative z-10 container mx-auto px-5 py-12 md:px-12 md:py-16">
          {/* Ambient Orb */}
          <div className="bg-sp-accent/5 pointer-events-none absolute top-[20%] right-[-10%] -z-10 h-[40%] w-[40%] rounded-full blur-[120px]" />

          <Reveal>
            <h2 className="mb-8 text-center text-3xl font-bold md:mb-12 md:text-3xl md:text-4xl md:text-5xl">
              <span className="text-sp-accent">{data.metricsTitle.split(' ')[0]}</span>{' '}
              {data.metricsTitle.split(' ').slice(1).join(' ')}
            </h2>

            <div className="grid gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
              {data.metricsTable?.map((metric, i) => (
                <Reveal key={i} delay={0.1 * i} direction="up">
                  <div className="bg-sp-bg-medium hover:border-sp-accent/40 group relative flex h-full flex-col justify-center overflow-hidden rounded-2xl border border-black/5 p-5 text-center shadow-sm transition-colors md:p-8">
                    {/* Subtle procedural background */}
                    <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-10">
                      <div className="h-full w-full bg-[radial-gradient(circle_at_center,_var(--sp-accent)_1px,_transparent_1px)] bg-[size:12px_12px]" />
                    </div>

                    <p className="text-sp-accent relative z-10 mb-4 text-sm font-bold tracking-widest uppercase">
                      {metric.label}
                    </p>
                    <p className="text-sp-text-dark relative z-10 text-xl font-bold md:text-2xl">
                      {metric.value}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </section>
      )}

      {/* Why It Worked */}
      {(data.whyItWorkedTitle || data.whyItWorkedPoints) && (
        <section className="relative z-10 container mx-auto px-5 py-12 md:px-12 md:py-16">
          <Reveal>
            <div className="border-l-sp-accent border-sp-border-dark bg-sp-surface-subtle relative mx-auto mb-8 max-w-4xl overflow-hidden rounded-r-[2rem] border border-l-4 p-5 shadow-2xl md:mb-12 md:p-5 md:p-8 md:p-12">
              <div className="bg-sp-accent/5 absolute top-0 right-0 h-full w-[40%] rounded-full blur-[120px]" />
              {data.whyItWorkedTitle && (
                <h2 className="relative z-10 mb-6 text-3xl font-bold text-white">
                  {data.whyItWorkedTitle}
                </h2>
              )}
              <div className="relative z-10">{renderText(data.whyItWorkedText, false)}</div>
            </div>
          </Reveal>

          {data.whyItWorkedPoints && (
            <div className="grid gap-5 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
              {data.whyItWorkedPoints.map((point, i) => (
                <Reveal key={i} delay={0.1 * i} direction="up">
                  <div className="border-sp-border-dark bg-sp-surface-subtle h-full overflow-hidden rounded-2xl border p-5 shadow-xl transition-transform hover:-translate-y-1 md:p-8">
                    <h3 className="group-hover:text-sp-accent mb-4 text-xl font-bold text-white transition-colors">
                      {point.title}
                    </h3>
                    <p className="text-foreground/70 leading-relaxed">{point.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          )}
        </section>
      )}

      {/* Comparison */}
      {(data.comparisonTitle || data.comparisonPoints) && (
        <section className="relative z-10 container mx-auto px-5 py-12 md:px-12 md:py-16">
          <Reveal>
            {data.comparisonTitle && (
              <h2 className="mb-8 text-center text-3xl font-bold md:mb-12 md:text-3xl md:text-4xl md:text-5xl">
                {data.comparisonTitle}
              </h2>
            )}
            {data.comparisonPoints && (
              <div className="mx-auto max-w-4xl space-y-4">
                {data.comparisonPoints.map((point, i) => (
                  <div key={i} className="flex flex-col gap-4 md:flex-row">
                    <div className="relative flex-1 rounded-xl border border-red-500/20 bg-red-500/10 p-5 md:p-6">
                      <div className="mb-2 text-xs font-bold tracking-wider text-red-400 uppercase">
                        {isDe ? 'Üblicherweise' : 'Typical Approach'}
                      </div>
                      <p className="text-white">{point.bad}</p>
                    </div>
                    <div className="relative flex-1 rounded-xl border border-green-500/20 bg-green-500/10 p-5 md:p-6">
                      <div className="mb-2 text-xs font-bold tracking-wider text-green-400 uppercase">
                        {isDe ? 'Unser Ansatz' : 'Our Approach'}
                      </div>
                      <p className="text-white">{point.good}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </Reveal>
        </section>
      )}

      {/* Tools & Services */}
      {(data.tools || data.services) && (
        <section className="relative z-10 container mx-auto px-5 py-12 text-center md:px-6 md:px-12 md:py-16">
          <Reveal>
            <div className="text-sp-accent mb-6 inline-flex items-center gap-2">
              <Settings size={20} />
              <span className="font-bold tracking-wider uppercase">
                {isDe ? 'Technologien & Services' : 'Technologies & Services'}
              </span>
            </div>

            {data.tools && (
              <p className="text-sp-text-dark mx-auto mb-4 max-w-4xl text-xl leading-relaxed font-light md:text-2xl">
                {data.tools}
              </p>
            )}

            {data.services && (
              <p className="text-sp-text-on-light mx-auto max-w-4xl text-lg leading-relaxed">
                {data.services}
              </p>
            )}
          </Reveal>
        </section>
      )}

      {/* Key Takeaway / Testimonial */}
      {(data.keyTakeaway || data.testimonial) && (
        <section className="relative z-10 container mx-auto px-5 py-12 md:px-12 md:py-16">
          <Reveal>
            <div className="mx-auto max-w-4xl text-center">
              {data.keyTakeaway && (
                <div className="bg-sp-bg-medium mb-8 overflow-hidden rounded-2xl border border-black/10 p-5 shadow-[0_32px_80px_-20px_rgba(0,0,0,0.15)] md:mb-12 md:p-5 md:p-8 md:p-10 md:p-16">
                  <blockquote className="text-sp-text-dark text-3xl leading-tight font-bold md:text-3xl md:text-4xl md:text-5xl">
                    &quot;{data.keyTakeaway}&quot;
                  </blockquote>
                </div>
              )}

              {data.testimonial && (
                <div className="bg-sp-bg-medium relative overflow-hidden rounded-2xl border border-black/10 p-5 shadow-xl md:p-5 md:p-8 md:p-12">
                  <div className="from-sp-accent to-sp-accent-dark absolute top-0 left-0 h-1 w-full bg-gradient-to-r" />
                  <div className="mb-8 flex justify-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="h-6 w-6 text-[#ffb900]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="text-sp-text-dark mb-8 text-xl leading-relaxed font-light italic md:text-2xl">
                    &quot;{data.testimonial.quote}&quot;
                  </blockquote>
                  <div className="flex items-center justify-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-black/5">
                      <span className="text-sp-text-on-light text-lg font-bold">
                        {data.testimonial.author.charAt(0)}
                      </span>
                    </div>
                    <p className="text-sp-accent text-lg font-bold">{data.testimonial.author}</p>
                  </div>
                </div>
              )}
            </div>
          </Reveal>
        </section>
      )}

      {/* Related reading */}
      <section className="relative z-10 container mx-auto px-5 pb-16 md:px-12 md:pb-24">
        <Reveal>
          <div className="border-t border-black/10 pt-16">
            <h3 className="text-sp-text-dark mb-10 text-center text-2xl font-bold">
              {supportData[isDe ? 'de' : 'en'].caseStudies.readMore}
            </h3>
            <div className="grid gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
              {caseStudies[isDe ? 'de' : 'en']
                .filter((cs) => cs.slug !== data.slug)
                .slice(0, 3)
                .map((cs, i) => (
                  <Link
                    key={cs.slug}
                    href={`/${locale}/${isDe ? 'fallstudien' : 'case-studies'}/${cs.slug}`}
                    className="bg-sp-bg-medium group hover:border-sp-accent/40 flex flex-col overflow-hidden rounded-2xl border border-black/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_32px_80px_-20px_rgba(0,0,0,0.15)]"
                  >
                    <div className="flex h-full flex-col p-5 md:p-8">
                      <div className="mb-4 flex items-center justify-between">
                        <span className="text-sp-accent/80 bg-sp-accent/10 rounded-full px-3 py-1 text-xs font-semibold tracking-wide">
                          {cs.industryBadge}
                        </span>
                      </div>
                      <h4 className="text-sp-text-dark group-hover:text-sp-accent mb-2 text-xl leading-tight font-bold transition-colors">
                        {cs.clientName}
                      </h4>
                      <p className="text-sp-text-on-light flex-1 text-sm leading-relaxed">
                        {cs.tagline}
                      </p>
                    </div>
                  </Link>
                ))}
            </div>
            <div className="mt-8 flex justify-center md:mt-12">
              <Link
                href={`/${locale}/${isDe ? 'fallstudien' : 'case-studies'}`}
                className="text-sp-text-dark hover:border-sp-accent hover:text-sp-accent bg-sp-bg-light rounded-full border border-black/10 px-5 py-2 text-sm font-semibold tracking-wide uppercase transition-colors md:px-6"
              >
                {isDe ? 'Alle Fallstudien ansehen' : 'View All Case Studies'}
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Final CTA */}
      <section className="bg-sp-bg-medium relative overflow-x-clip border-t border-black/10 py-12 md:py-16 lg:py-24">
        <div className="relative z-10 container mx-auto grid items-start gap-10 px-5 md:gap-16 md:px-8 lg:grid-cols-2 lg:px-12">
          <Reveal>
            <div className="max-w-xl">
              <h2 className="text-sp-text-dark mb-10 text-3xl leading-[1.1] font-black tracking-tight md:text-3xl md:text-4xl md:text-5xl md:text-6xl">
                {isDe ? 'Bereit für ähnliche Ergebnisse?' : 'Ready for similar results?'}
              </h2>
              <p className="text-sp-text-on-light text-2xl leading-relaxed font-light">
                {isDe
                  ? 'Lassen Sie uns darüber sprechen, wie wir Ihre Herausforderungen in Erfolgsgeschichten verwandeln können.'
                  : "Let's talk about how we can turn your challenges into success stories."}
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
