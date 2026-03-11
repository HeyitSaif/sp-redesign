import { ImageWithShimmer } from '@/components/ui/ImageWithShimmer'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Reveal } from '@/components/animations/Reveal'
import { ArrowRight, CheckCircle2, FileText, Scale } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { FloatiesBackground } from '@/components/ui/FloatiesBackground'

interface MarkdownPageProps {
  content: string
  frontmatter: Record<string, string>
  locale: string
}

export function MarkdownPage({ content, frontmatter, locale }: MarkdownPageProps) {
  const isLegal =
    frontmatter.title?.toLowerCase().includes('privacy') ||
    frontmatter.title?.toLowerCase().includes('terms') ||
    frontmatter.title?.toLowerCase().includes('datenschutz') ||
    frontmatter.title?.toLowerCase().includes('agb') ||
    frontmatter.title?.toLowerCase().includes('bedingungen')

  return (
    <div className="relative flex w-full flex-col overflow-x-clip pt-56 md:pt-72">
      <FloatiesBackground />
      {/* Dynamic Header */}
      <section className="bg-sp-bg-dark relative flex min-h-[50vh] items-center overflow-x-clip border-b border-white/5 py-32 md:py-48 lg:py-64">
        <div className="bg-sp-accent/5 pointer-events-none absolute inset-0 blur-[150px]" />
        <div className="pointer-events-none absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />
        <div className="relative z-10 container mx-auto max-w-5xl px-10 md:px-20 lg:px-32">
          <Reveal>
            <div className="mb-8 flex items-center gap-5">
              <div className="skeuo-circle text-sp-accent flex h-14 w-14 items-center justify-center rounded-2xl">
                {isLegal ? <Scale size={28} /> : <FileText size={28} />}
              </div>
              <div className="text-foreground/50 text-base font-semibold tracking-widest uppercase">
                {isLegal
                  ? locale === 'de'
                    ? 'Rechtliche Informationen'
                    : 'Legal Information'
                  : locale === 'de'
                    ? 'Ressource'
                    : 'Resource'}
              </div>
            </div>
            <h1 className="mb-10 text-5xl leading-[1.1] font-black tracking-tight md:text-7xl lg:text-8xl">
              {frontmatter.title || 'SolutionPlus'}
            </h1>
            {frontmatter.description && (
              <p className="text-foreground/60 max-w-3xl text-2xl leading-relaxed font-light">
                {frontmatter.description}
              </p>
            )}
            {isLegal && (
              <div className="text-foreground/40 border-sp-accent/50 mt-12 border-l-2 py-2 pl-6 text-lg">
                {locale === 'de' ? 'Zuletzt aktualisiert: ' : 'Last updated: '}{' '}
                {new Date().toLocaleDateString(locale === 'de' ? 'de-DE' : 'en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </div>
            )}
          </Reveal>
        </div>
      </section>

      {/* Markdown Content */}
      <section className="container mx-auto max-w-4xl px-10 py-32 md:px-20 md:py-48 lg:px-32 lg:py-64">
        <Reveal delay={0.1} direction="up">
          <div className="prose prose-invert prose-xl prose-headings:text-white prose-a:text-sp-accent hover:prose-a:text-sp-accent prose-a:transition-colors prose-img:rounded-[3rem] prose-img:border prose-img:border-white/10 prose-img:shadow-2xl prose-h1:text-6xl prose-h1:font-black prose-h1:mb-12 prose-h2:text-5xl prose-h2:mt-24 prose-h2:mb-10 prose-h2:font-bold prose-h3:text-3xl prose-h3:font-semibold prose-p:text-foreground/70 prose-p:leading-relaxed prose-li:text-foreground/70 prose-strong:text-white prose-hr:border-white/10 max-w-none">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({ node, ...props }) => <h1 className="text-gradient" {...props} />,
                img: ({ node, ...props }) => (
                  <div className="bg-sp-bg-medium relative my-16 overflow-x-clip rounded-[3rem] border border-white/10 p-3 shadow-[0_20px_80px_rgba(0,0,0,0.5)]">
                    <ImageWithShimmer
                      src={typeof props.src === 'string' ? props.src : ''}
                      alt={props.alt || ''}
                      wrapperClassName="w-full rounded-[2.5rem] overflow-hidden"
                      className="m-0 h-auto object-cover opacity-80 mix-blend-luminosity transition-all duration-1000 hover:mix-blend-normal"
                    />
                  </div>
                ),
                a: ({ node, href, ...props }) => {
                  let url = href || '#'
                  // Fix hash links mapping to correct contact page
                  if (url.includes('#contact') || url === '#contact') {
                    url = `/${locale === 'de' ? 'kontakt-solutionplus' : 'contact-us'}`
                  } else if (url.startsWith('https://solutionplus.io/de/')) {
                    url = url.replace('https://solutionplus.io/de', '')
                  } else if (url.startsWith('https://solutionplus.io/')) {
                    url = url.replace('https://solutionplus.io', '')
                  }

                  if (url.startsWith('http')) {
                    return (
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sp-accent hover:text-sp-accent decoration-sp-accent/30 font-medium underline underline-offset-4"
                        {...props}
                      />
                    )
                  }

                  // Avoid double locale if the url already has it (happens if it was absolute and stripped)
                  const finalHref = url.startsWith(`/${locale}`)
                    ? url
                    : `/${locale}${url.startsWith('/') ? '' : '/'}${url}`

                  return (
                    <Link
                      href={finalHref}
                      className="text-sp-accent hover:text-sp-accent decoration-sp-accent/30 font-medium underline underline-offset-4"
                      {...props}
                    />
                  )
                },
                ul: ({ node, ...props }) => <ul className="my-10 space-y-6" {...props} />,
                li: ({ node, ...props }) => (
                  <li className="flex items-start gap-5" {...props}>
                    <CheckCircle2 className="text-sp-accent mt-1.5 h-6 w-6 shrink-0" />
                    <span>{props.children}</span>
                  </li>
                ),
                blockquote: ({ node, ...props }) => (
                  <blockquote
                    className="border-sp-accent/50 my-16 rounded-r-[2rem] border-l-4 bg-white/5 py-6 pl-10 text-2xl leading-relaxed font-medium text-white italic"
                    {...props}
                  />
                ),
                p: ({ node, ...props }) => (
                  <p className="text-foreground/80 mb-8 leading-loose" {...props} />
                ),
              }}
            >
              {content}
            </ReactMarkdown>
          </div>
        </Reveal>
      </section>

      {/* Global CTA */}
      <section className="bg-sp-bg-dark relative mt-32 overflow-x-clip border-t border-white/5 py-48 md:py-64 lg:py-80">
        <div className="bg-sp-accent/10 pointer-events-none absolute inset-0 rounded-full blur-[200px]" />
        <div className="relative z-10 container mx-auto max-w-5xl px-10 text-center md:px-20 lg:px-32">
          <Reveal>
            <h2 className="mb-14 text-5xl font-black md:text-7xl lg:text-8xl">
              {locale === 'de' ? 'Lassen Sie uns Ihre Vision' : "Let's turn your vision into"}{' '}
              <span className="text-sp-accent">
                {locale === 'de' ? 'Wirklichkeit werden lassen.' : 'something unforgettable.'}
              </span>
            </h2>
            <Link
              href={locale === 'de' ? `/${locale}/kontakt-solutionplus` : `/${locale}/contact-us`}
              className="bg-sp-accent group hover:bg-sp-accent-dark relative inline-flex items-center justify-center gap-4 overflow-x-clip rounded-full px-16 py-8 text-2xl font-bold tracking-wide text-white shadow-[0_4px_40px_-8px_rgba(255,112,67,0.5)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_12px_50px_-8px_rgba(255,112,67,0.7)] active:scale-95"
            >
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_2s_infinite]" />
              {locale === 'de' ? 'Gespräch vereinbaren' : 'Book a short call'}
              <ArrowRight
                size={24}
                className="transition-transform duration-500 group-hover:translate-x-2"
              />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
