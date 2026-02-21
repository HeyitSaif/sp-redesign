import type { StructuredDataSchema } from "@/types/seo";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://solutionplus.io";

export function generateOrganizationSchema(): StructuredDataSchema {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SolutionPlus",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description:
      "SolutionPlus helps startups and scale-ups build better products, faster. From MVP sprints to modernizing legacy code, we deliver engineering that scales.",
    foundingDate: "2024",
    sameAs: [],
    contactPoint: {
      "@type": "ContactPoint",
      email: "hello@solutionplus.io",
      contactType: "customer service",
      url: `${SITE_URL}/en/contact-us`,
    },
  };
}

export function generateWebSiteSchema(locale: string): StructuredDataSchema {
  const basePath = locale === "de" ? "/de" : "/en";
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "SolutionPlus",
    url: `${SITE_URL}${basePath}`,
    description:
      "Build, launch, and scale software with SolutionPlus. German leadership, Pakistani engineering talent.",
    publisher: {
      "@type": "Organization",
      name: "SolutionPlus",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
    },
    inLanguage: locale === "de" ? "de" : "en",
  };
}

export function generateServiceSchema(
  name: string,
  description: string,
  url: string
): StructuredDataSchema {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "Organization",
      name: "SolutionPlus",
    },
    areaServed: "Worldwide",
    url,
  };
}

export function generateBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
): StructuredDataSchema {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
