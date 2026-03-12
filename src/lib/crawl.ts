import { SLUG_LOCALE_MAP } from "@/lib/seo";
import { caseStudies } from "@/data/case-studies";
import { servicesData } from "@/data/services-content";
import { getPageContent } from "@/lib/markdown";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://solutionplus.io";

const CUSTOM_META: Record<
  string,
  { title: { en: string; de: string }; description: { en: string; de: string } }
> = {
  "": { title: { en: "Home", de: "Startseite" }, description: { en: "Build, launch, and scale software with SolutionPlus.", de: "Software entwickeln und skalieren mit SolutionPlus." } },
  "about-team": { title: { en: "About Us", de: "Über uns" }, description: { en: "German leadership, Pakistani engineering, BOT model.", de: "Deutsches Management, pakistanisches Engineering." } },
  "ueber-solutionplus": { title: { en: "About Us", de: "Über uns" }, description: { en: "German leadership, Pakistani engineering.", de: "Deutsches Management, pakistanisches Engineering." } },
  "contact-us": { title: { en: "Contact", de: "Kontakt" }, description: { en: "Get in touch to discuss your product goals.", de: "Kontakt aufnehmen." } },
  "kontakt-solutionplus": { title: { en: "Contact", de: "Kontakt" }, description: { en: "Get in touch.", de: "Kontakt aufnehmen." } },
  "mvp-sprint-package": { title: { en: "MVP Sprint Package", de: "MVP-Sprint-Paket" }, description: { en: "Turn ideas into working MVPs in weeks.", de: "MVPs in Wochen." } },
  "mvp-sprint-paket": { title: { en: "MVP Sprint Package", de: "MVP-Sprint-Paket" }, description: { en: "Turn ideas into working MVPs in weeks.", de: "MVPs in Wochen." } },
  "dedicated-delivery-teams": { title: { en: "Dedicated Delivery Teams", de: "Dedizierte Teams" }, description: { en: "Remote teams that work like your own.", de: "Remote-Teams nach Ihrem Workflow." } },
  "dedizierte-teams": { title: { en: "Dedicated Delivery Teams", de: "Dedizierte Teams" }, description: { en: "Remote teams that work like your own.", de: "Remote-Teams nach Ihrem Workflow." } },
  "product-modernization": { title: { en: "Product Modernization", de: "Software-Modernisierung" }, description: { en: "Legacy software upgrades without full rebuild.", de: "Legacy-Upgrades." } },
  "software-modernisierung": { title: { en: "Product Modernization", de: "Software-Modernisierung" }, description: { en: "Legacy software upgrades.", de: "Legacy-Upgrades." } },
  services: { title: { en: "Services", de: "Leistungen" }, description: { en: "AI automation, UI/UX, web & mobile development.", de: "KI-Automatisierung, UI/UX, Web & Mobile." } },
  leistungen: { title: { en: "Services", de: "Leistungen" }, description: { en: "AI automation, UI/UX, web & mobile.", de: "KI-Automatisierung, UI/UX, Web & Mobile." } },
  careers: { title: { en: "Careers", de: "Karriere" }, description: { en: "Join our engineering and design team.", de: "Engineering-Jobs bei SolutionPlus." } },
  karriere: { title: { en: "Careers", de: "Karriere" }, description: { en: "Join our team.", de: "Engineering-Jobs bei SolutionPlus." } },
  startup: { title: { en: "Startup", de: "Startup" }, description: { en: "Early-stage MVP and product validation.", de: "MVP und Produktvalidierung." } },
  startups: { title: { en: "Startup", de: "Startup" }, description: { en: "Early-stage MVP and product validation.", de: "MVP und Produktvalidierung." } },
  "scale-up": { title: { en: "Scale-up", de: "Scale-up" }, description: { en: "BOT teams for growth-stage companies.", de: "BOT-Teams für wachsende Unternehmen." } },
  scaleups: { title: { en: "Scale-up", de: "Scale-up" }, description: { en: "BOT teams for growth-stage companies.", de: "BOT-Teams für wachsende Unternehmen." } },
  "entrepreneur-with-an-idea": { title: { en: "Entrepreneur with an Idea", de: "Gründer mit Idee" }, description: { en: "Tech partner for idea validation.", de: "Tech-Partner für Ideenvalidierung." } },
  "gruender-idee-startup-partner": { title: { en: "Entrepreneur with an Idea", de: "Gründer mit Idee" }, description: { en: "Tech partner for idea validation.", de: "Tech-Partner für Ideenvalidierung." } },
  "case-studies": { title: { en: "Case Studies", de: "Fallstudien" }, description: { en: "Client success stories and portfolio.", de: "Kundenreferenzen und Portfolio." } },
  fallstudien: { title: { en: "Case Studies", de: "Fallstudien" }, description: { en: "Client success stories.", de: "Kundenreferenzen und Portfolio." } },
  "terms-and-conditions": { title: { en: "Terms and Conditions", de: "AGB" }, description: { en: "Terms of service.", de: "Allgemeine Geschäftsbedingungen." } },
  "privacy-policy": { title: { en: "Privacy Policy", de: "Datenschutz" }, description: { en: "Privacy policy.", de: "Datenschutzerklärung." } },
  "allgemeine-geschaeftsbedingungen-agb": { title: { en: "Terms", de: "AGB" }, description: { en: "Terms of service.", de: "Allgemeine Geschäftsbedingungen." } },
  "datenschutzerklaerung": { title: { en: "Privacy", de: "Datenschutzerklärung" }, description: { en: "Privacy policy.", de: "Datenschutzerklärung." } },
};

export interface CrawlPage {
  url: string;
  title: string;
  slug: string;
  locale: string;
  description?: string;
  markdown?: string;
}

export interface CrawlPayload {
  sourceUrl: string;
  generatedAt: string;
  totalPages: number;
  pages: CrawlPage[];
}

function getMeta(slug: string, locale: "en" | "de"): { title: string; description?: string } {
  const meta = CUSTOM_META[slug];
  if (meta) {
    const isDe = locale === "de";
    return { title: meta.title[isDe ? "de" : "en"], description: meta.description[isDe ? "de" : "en"] };
  }
  const serviceKey = ["ki-automatisierung", "web-entwicklung", "mobile-app-entwicklung"].includes(slug)
    ? { "ki-automatisierung": "ai-automation", "web-entwicklung": "web-app-development", "mobile-app-entwicklung": "mobile-app-development" }[slug]!
    : slug;
  const svc = servicesData[serviceKey];
  if (svc) {
    const isDe = locale === "de";
    return { title: svc.title[isDe ? "de" : "en"], description: svc.heroDescription[isDe ? "de" : "en"] };
  }
  return { title: slug };
}

function caseStudyToMarkdown(c: (typeof caseStudies.en)[0]): string {
  const lines: string[] = [
    `# ${c.title}`,
    "",
    c.intro ? (Array.isArray(c.intro) ? c.intro.join("\n\n") : c.intro) : "",
    c.challengeTitle ? `## ${c.challengeTitle}` : "",
    c.challengeText ? (Array.isArray(c.challengeText) ? c.challengeText.join("\n") : c.challengeText) : "",
    c.executiveSummary || "",
  ].filter(Boolean);
  return lines.join("\n\n");
}

export async function buildCrawlPayload(): Promise<CrawlPayload> {
  const pages: CrawlPage[] = [];

  for (const [key, mapping] of Object.entries(SLUG_LOCALE_MAP)) {
    if (key.startsWith("case-studies/")) continue;
    for (const locale of ["en", "de"] as const) {
      const slug = locale === "en" ? mapping.en : mapping.de;
      const path = slug ? `/${locale}/${slug}` : `/${locale}`;
      const url = `${SITE_URL}${path}`;
      const meta = getMeta(slug || "index", locale);

      let markdown: string | undefined;
      try {
        const contentSlug = slug || "index";
        const data = await getPageContent(locale, contentSlug);
        markdown = data.content;
      } catch {
        const serviceKey =
          slug === "ki-automatisierung"
            ? "ai-automation"
            : slug === "web-entwicklung"
              ? "web-app-development"
              : slug === "mobile-app-entwicklung"
                ? "mobile-app-development"
                : slug || key;
        if (servicesData[serviceKey]) {
          const svc = servicesData[serviceKey];
          if (svc) {
            const isDe = locale === "de";
            markdown = `# ${svc.title[isDe ? "de" : "en"]}\n\n${svc.heroDescription[isDe ? "de" : "en"]}`;
          }
        }
      }

      pages.push({
        url,
        title: meta.title,
        slug: slug || "index",
        locale,
        description: meta.description,
        markdown,
      });
    }
  }

  for (const c of caseStudies.en) {
    const slug = `case-studies/${c.slug}`;
    pages.push({
      url: `${SITE_URL}/en/${slug}`,
      title: c.title,
      slug,
      locale: "en",
      description: c.tagline,
      markdown: caseStudyToMarkdown(c),
    });
  }
  for (const c of caseStudies.de) {
    const slug = `fallstudien/${c.slug}`;
    pages.push({
      url: `${SITE_URL}/de/${slug}`,
      title: c.title,
      slug,
      locale: "de",
      description: c.tagline,
      markdown: caseStudyToMarkdown(c),
    });
  }

  return {
    sourceUrl: SITE_URL,
    generatedAt: new Date().toISOString(),
    totalPages: pages.length,
    pages,
  };
}
