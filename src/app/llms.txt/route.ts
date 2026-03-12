import { NextResponse } from "next/server";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://solutionplus.io";

const LLMS_TXT = `# SolutionPlus

> SolutionPlus helps startups and scale-ups build better products, faster. From MVP sprints to modernizing legacy code, we deliver engineering that scales. German leadership, Pakistani engineering talent.

## Core Pages (EN)

- [Home](${SITE_URL}/en): Build, launch, and scale software with SolutionPlus
- [About](${SITE_URL}/en/about-team): German leadership, Pakistani engineering, BOT model
- [Contact](${SITE_URL}/en/contact-us): Get in touch to discuss your product goals
- [MVP Sprint Package](${SITE_URL}/en/mvp-sprint-package): Turn ideas into working MVPs in weeks
- [Dedicated Delivery Teams](${SITE_URL}/en/dedicated-delivery-teams): Remote teams that work like your own
- [Product Modernization](${SITE_URL}/en/product-modernization): Legacy software upgrades without full rebuild
- [Services](${SITE_URL}/en/services): AI automation, UI/UX, web & mobile development
- [Careers](${SITE_URL}/en/careers): Join our engineering and design team

## Core Pages (DE)

- [Home DE](${SITE_URL}/de): Software entwickeln und skalieren mit SolutionPlus
- [Über uns](${SITE_URL}/de/ueber-solutionplus): Deutsches Management, pakistanisches Engineering
- [Kontakt](${SITE_URL}/de/kontakt-solutionplus): Kontakt aufnehmen
- [MVP-Sprint-Paket](${SITE_URL}/de/mvp-sprint-paket): MVPs in Wochen
- [Dedizierte Teams](${SITE_URL}/de/dedizierte-teams): Remote-Teams nach Ihrem Workflow
- [Software-Modernisierung](${SITE_URL}/de/software-modernisierung): Legacy-Upgrades
- [Leistungen](${SITE_URL}/de/leistungen): KI-Automatisierung, UI/UX, Web & Mobile
- [Karriere](${SITE_URL}/de/karriere): Engineering-Jobs bei SolutionPlus

## Solutions by Stage

- [Startup](${SITE_URL}/en/startup): Early-stage MVP and product validation
- [Startups DE](${SITE_URL}/de/startups): MVP und Produktvalidierung
- [Scale-up](${SITE_URL}/en/scale-up): BOT teams for growth-stage companies
- [Scaleups DE](${SITE_URL}/de/scaleups): BOT-Teams für wachsende Unternehmen
- [Entrepreneur with an Idea](${SITE_URL}/en/entrepreneur-with-an-idea): Tech partner for idea validation
- [Gründer mit Idee](${SITE_URL}/de/gruender-idee-startup-partner): Tech-Partner für Ideenvalidierung

## Services

- [AI Automation](${SITE_URL}/en/ai-automation): Workflow and process automation with AI
- [KI-Automatisierung](${SITE_URL}/de/ki-automatisierung): Workflow- und Prozessautomatisierung
- [UI/UX Design](${SITE_URL}/en/ui-ux-design): User research, wireframes, design systems
- [Web App Development](${SITE_URL}/en/web-app-development): Custom web platforms, e-commerce, APIs
- [Web-Entwicklung](${SITE_URL}/de/web-entwicklung): Web-Plattformen, E-Commerce, APIs
- [Mobile App Development](${SITE_URL}/en/mobile-app-development): iOS, Android, cross-platform
- [Mobile-App-Entwicklung](${SITE_URL}/de/mobile-app-entwicklung): iOS, Android, Cross-Platform

## Case Studies

- [Case Studies](${SITE_URL}/en/case-studies): Client success stories and portfolio
- [Fallstudien](${SITE_URL}/de/fallstudien): Kundenreferenzen und Portfolio
- [Tecsofy](${SITE_URL}/en/case-studies/tecsofiy): Process-first B2B automation
- [Automotive AI](${SITE_URL}/en/case-studies/automotive-ai): Two automotive platforms in parallel
- [Democorder](${SITE_URL}/en/case-studies/democorder): Concept to production B2B SaaS
- [Hospitality](${SITE_URL}/en/case-studies/hospitality): Hotel booking platforms

## Crawl (LLM-Optimized)

- [Full site content](${SITE_URL}/crawl?format=json): JSON with all page markdown
- [Markdown dump](${SITE_URL}/crawl?format=markdown): Concatenated markdown for RAG
- [Index](${SITE_URL}/crawl?format=index): URLs and metadata only

## Legal

- [Terms and Conditions](${SITE_URL}/en/terms-and-conditions)
- [Privacy Policy](${SITE_URL}/en/privacy-policy)
- [AGB](${SITE_URL}/de/allgemeine-geschaeftsbedingungen-agb)
- [Datenschutzerklärung](${SITE_URL}/de/datenschutzerklaerung)
`;

export function GET() {
  return new NextResponse(LLMS_TXT, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
