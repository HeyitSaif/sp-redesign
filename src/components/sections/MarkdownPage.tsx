import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Reveal } from "@/components/animations/Reveal";
import { ArrowRight, CheckCircle2, FileText, Scale } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface MarkdownPageProps {
  content: string;
  frontmatter: Record<string, string>;
  locale: string;
}

export function MarkdownPage({ content, frontmatter, locale }: MarkdownPageProps) {
  const isLegal = frontmatter.title?.toLowerCase().includes('privacy') || 
                  frontmatter.title?.toLowerCase().includes('terms') ||
                  frontmatter.title?.toLowerCase().includes('datenschutz') ||
                  frontmatter.title?.toLowerCase().includes('agb') ||
                  frontmatter.title?.toLowerCase().includes('bedingungen');

  return (
    <div className="flex flex-col w-full overflow-hidden pt-32 pb-24">
      {/* Dynamic Header */}
      <section className="relative min-h-[40vh] flex items-center py-20 overflow-hidden border-b border-white/5 bg-[#0a0b0c]">
        <div className="absolute inset-0 bg-primary/5 blur-[100px] pointer-events-none" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none" />
        <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-4xl">
          <Reveal>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary shadow-inner">
                {isLegal ? <Scale size={24} /> : <FileText size={24} />}
              </div>
              <div className="text-sm font-medium text-foreground/50 tracking-wider uppercase">
                {isLegal ? (locale === 'de' ? 'Rechtliche Informationen' : 'Legal Information') : (locale === 'de' ? 'Ressource' : 'Resource')}
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.2] mb-6 tracking-tight">
              {frontmatter.title || "SolutionPlus"}
            </h1>
            {frontmatter.description && (
              <p className="text-xl text-foreground/60 max-w-2xl">
                {frontmatter.description}
              </p>
            )}
            {isLegal && (
              <div className="mt-8 text-sm text-foreground/40 border-l-2 border-primary/50 pl-4 py-1">
                {locale === 'de' ? 'Zuletzt aktualisiert: ' : 'Last updated: '} {new Date().toLocaleDateString(locale === 'de' ? 'de-DE' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </div>
            )}
          </Reveal>
        </div>
      </section>

      {/* Markdown Content */}
      <section className="container mx-auto px-6 md:px-12 max-w-4xl py-20">
        <Reveal delay={0.1} direction="up">
          <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-a:text-secondary hover:prose-a:text-primary prose-a:transition-colors prose-img:rounded-3xl prose-img:border prose-img:border-white/10 prose-img:shadow-2xl prose-h1:text-4xl prose-h1:font-bold prose-h1:mb-8 prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-6 prose-h2:font-semibold prose-h3:text-2xl prose-h3:font-medium prose-p:text-foreground/70 prose-p:leading-relaxed prose-li:text-foreground/70 prose-strong:text-white prose-hr:border-white/10">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({ node, ...props }) => <h1 className="text-gradient" {...props} />,
                img: ({ node, ...props }) => (
                  <div className="my-12 relative rounded-3xl overflow-hidden border border-white/10 bg-[#141618] p-2">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img className="rounded-2xl w-full h-auto object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700 m-0" {...props} />
                  </div>
                ),
                a: ({ node, href, ...props }) => {
                  const url = href || '#';
                  if (url.startsWith('http')) {
                    return <a href={url} target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary font-medium underline decoration-secondary/30 underline-offset-4" {...props} />;
                  }
                  return <Link href={`/${locale}${url}`} className="text-secondary hover:text-primary font-medium underline decoration-secondary/30 underline-offset-4" {...props} />;
                },
                ul: ({ node, ...props }) => (
                  <ul className="space-y-4 my-8" {...props} />
                ),
                li: ({ node, ...props }) => (
                  <li className="flex gap-4 items-start" {...props}>
                    <CheckCircle2 className="text-secondary mt-1 shrink-0 w-5 h-5" />
                    <span>{props.children}</span>
                  </li>
                ),
                blockquote: ({ node, ...props }) => (
                  <blockquote className="border-l-4 border-secondary/50 pl-6 py-2 my-10 bg-white/5 rounded-r-2xl text-xl text-white font-medium italic" {...props} />
                ),
                p: ({ node, ...props }) => (
                  <p className="leading-relaxed text-foreground/80 mb-6" {...props} />
                ),
              }}
            >
              {content}
            </ReactMarkdown>
          </div>
        </Reveal>
      </section>
      
      {/* Global CTA */}
      <section className="py-32 relative overflow-hidden mt-20 border-t border-white/5 bg-[#0f1112]">
        <div className="absolute inset-0 bg-primary/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center max-w-4xl">
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              {locale === 'de' ? 'Lassen Sie uns Ihre Vision' : "Let's turn your vision into"} <span className="text-secondary">{locale === 'de' ? 'Wirklichkeit werden lassen.' : 'something unforgettable.'}</span>
            </h2>
            <Link
              href={locale === 'de' ? `/${locale}/kontakt-solutionplus` : `/${locale}/contact-us`}
              className="px-10 py-5 inline-flex items-center justify-center gap-3 rounded-full bg-secondary text-white font-bold tracking-wide text-lg hover:bg-[#ff8a65] transition-all duration-300 shadow-[0_4px_20px_-4px_rgba(255,112,67,0.4)] hover:shadow-[0_8px_40px_-4px_rgba(255,112,67,0.6)] hover:-translate-y-1 active:scale-95 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />
              {locale === 'de' ? 'Gespräch vereinbaren' : 'Book a short call'}
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
