import type { Metadata } from "next";
import type { PageMetadata, OpenGraphMetadata, TwitterCardMetadata } from "@/types/seo";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://solutionplus.io";
const SITE_NAME = "SolutionPlus";
const TWITTER_HANDLE = "@SolutionPlus_io";

/** Slug mapping: EN slug -> DE slug for hreflang alternates */
export const SLUG_LOCALE_MAP: Record<string, { en: string; de: string }> = {
  index: { en: "", de: "" },
  "about-team": { en: "about-team", de: "ueber-solutionplus" },
  "dedicated-delivery-teams": { en: "dedicated-delivery-teams", de: "dedizierte-teams" },
  "mvp-sprint-package": { en: "mvp-sprint-package", de: "mvp-sprint-paket" },
  "product-modernization": { en: "product-modernization", de: "software-modernisierung" },
  "entrepreneur-with-an-idea": { en: "entrepreneur-with-an-idea", de: "gruender-idee-startup-partner" },
  careers: { en: "careers", de: "karriere" },
  "contact-us": { en: "contact-us", de: "kontakt-solutionplus" },
  "scale-up": { en: "scale-up", de: "scaleups" },
  startup: { en: "startup", de: "startups" },
  "terms-and-conditions": { en: "terms-and-conditions", de: "allgemeine-geschaeftsbedingungen-agb" },
  "privacy-policy": { en: "privacy-policy", de: "datenschutzerklaerung" },
  "ai-automation": { en: "ai-automation", de: "ki-automatisierung" },
  "ui-ux-design": { en: "ui-ux-design", de: "ui-ux-design" },
  "web-app-development": { en: "web-app-development", de: "web-entwicklung" },
  "mobile-app-development": { en: "mobile-app-development", de: "mobile-app-entwicklung" },
  "case-studies": { en: "case-studies", de: "fallstudien" },
  "case-studies/tecsofiy": { en: "case-studies/tecsofiy", de: "fallstudien/tecsofiy" },
  "case-studies/automotive-ai": { en: "case-studies/automotive-ai", de: "fallstudien/automotive-ai" },
  "case-studies/democorder": { en: "case-studies/democorder", de: "fallstudien/democorder" },
  "case-studies/hospitality": { en: "case-studies/hospitality", de: "fallstudien/hospitality" },
  services: { en: "services", de: "leistungen" },
};

/** Normalize slug to canonical key for mapping */
function getCanonicalSlug(slug: string): string {
  const entry = Object.entries(SLUG_LOCALE_MAP).find(
    ([_, v]) => v.en === slug || v.de === slug
  );
  return entry ? entry[0] : slug;
}

export function getCanonicalUrl(locale: string, slug?: string): string {
  const path = slug ? `/${locale}/${slug}` : `/${locale}`;
  return `${SITE_URL}${path}`;
}

export function getAlternateUrls(
  locale: string,
  slug?: string
): Array<{ locale: string; url: string }> {
  const canonicalSlug = slug ? getCanonicalSlug(slug) : "index";
  const mapping = SLUG_LOCALE_MAP[canonicalSlug] ?? { en: slug ?? "", de: slug ?? "" };

  return [
    { locale: "en", url: `${SITE_URL}/en${mapping.en ? `/${mapping.en}` : ""}` },
    { locale: "de", url: `${SITE_URL}/de${mapping.de ? `/${mapping.de}` : ""}` },
  ].filter((a) => a.locale !== locale);
}

/** All hreflang URLs for a page (includes current locale) */
export function getAllAlternateUrls(
  locale: string,
  slug?: string
): Array<{ locale: string; url: string }> {
  const canonicalSlug = slug ? getCanonicalSlug(slug) : "index";
  const mapping = SLUG_LOCALE_MAP[canonicalSlug] ?? { en: slug ?? "", de: slug ?? "" };

  return [
    { locale: "en", url: `${SITE_URL}/en${mapping.en ? `/${mapping.en}` : ""}` },
    { locale: "de", url: `${SITE_URL}/de${mapping.de ? `/${mapping.de}` : ""}` },
  ];
}

export function generateOpenGraph(
  title: string,
  description: string,
  url: string,
  locale: string,
  options?: {
    image?: string;
    imageAlt?: string;
    alternateLocales?: string[];
    type?: "website" | "article";
  }
): OpenGraphMetadata {
  const imageUrl = options?.image
    ? options.image.startsWith("http")
      ? options.image
      : `${SITE_URL}${options.image}`
    : `${SITE_URL}/api/og?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description.slice(0, 200))}`;

  return {
    title,
    description,
    url,
    siteName: SITE_NAME,
    images: [
      {
        url: imageUrl,
        width: 1200,
        height: 630,
        alt: options?.imageAlt ?? title,
      },
    ],
    locale: locale === "de" ? "de_DE" : "en_US",
    alternateLocales: options?.alternateLocales ?? (locale === "de" ? ["en_US"] : ["de_DE"]),
    type: options?.type ?? "website",
  };
}

export function generateTwitterCard(
  title: string,
  description: string,
  options?: { image?: string }
): TwitterCardMetadata {
  const imageUrl = options?.image
    ? options.image.startsWith("http")
      ? options.image
      : `${SITE_URL}${options.image}`
    : `${SITE_URL}/api/og?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description.slice(0, 200))}`;

  return {
    card: "summary_large_image",
    title,
    description,
    images: [imageUrl],
    site: TWITTER_HANDLE,
    creator: TWITTER_HANDLE,
  };
}

export function generatePageMetadata(
  pageMetadata: PageMetadata
): Metadata {
  const {
    title,
    description,
    keywords,
    ogImage,
    ogImageAlt,
    canonicalUrl,
    locale,
    alternateLocales,
    noIndex,
    ogType,
    publishedTime,
    modifiedTime,
    authors,
  } = pageMetadata;

  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
  const canonical = canonicalUrl ?? getCanonicalUrl(locale);
  const alternateUrls = alternateLocales ?? getAlternateUrls(locale);
  const pathSlug = canonicalUrl ? new URL(canonicalUrl).pathname.split("/").slice(2).join("/") || undefined : undefined;
  const hasCurrentLocale = alternateLocales?.some((a) => a.locale === locale);
  const allAlternates =
    alternateLocales && hasCurrentLocale
      ? alternateLocales
      : alternateLocales
        ? [...alternateLocales, { locale, url: canonical }]
        : getAllAlternateUrls(locale, pathSlug);

  const og = generateOpenGraph(fullTitle, description, canonical, locale, {
    image: ogImage,
    imageAlt: ogImageAlt,
    alternateLocales: alternateUrls.map((a) => (a.locale === "de" ? "de_DE" : "en_US")),
    type: ogType,
  });

  const twitter = generateTwitterCard(fullTitle, description, { image: ogImage });

  const languagesMap: Record<string, string> = Object.fromEntries(
    allAlternates.map((a) => [(a.locale === "de" ? "de-DE" : "en-US"), a.url])
  );
  const enUrl = allAlternates.find((a) => a.locale === "en")?.url ?? `${SITE_URL}/en`;
  languagesMap["x-default"] = enUrl;

  const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: fullTitle,
    description,
    keywords: keywords?.length ? keywords.join(", ") : undefined,
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
    formatDetection: { email: false, address: false, telephone: false },
    alternates: {
      canonical,
      languages: languagesMap,
    },
    openGraph: {
      title: og.title,
      description: og.description,
      url: og.url,
      siteName: og.siteName,
      images: og.images,
      locale: og.locale,
      alternateLocale: og.alternateLocales,
      type: og.type,
      ...(ogType === "article" && {
        publishedTime,
        modifiedTime: modifiedTime ?? publishedTime,
        authors: authors?.length ? authors : ["SolutionPlus"],
      }),
    },
    twitter: {
      card: twitter.card,
      title: twitter.title,
      description: twitter.description,
      images: twitter.images,
      site: twitter.site,
      creator: twitter.creator,
    },
  };

  return metadata;
}
