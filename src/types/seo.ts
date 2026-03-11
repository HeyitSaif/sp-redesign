import type { Metadata } from "next";

export interface PageMetadata {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  ogImageAlt?: string;
  canonicalUrl?: string;
  locale: string;
  alternateLocales?: AlternateLocale[];
  noIndex?: boolean;
  ogType?: "website" | "article";
  /** For article type: ISO date string */
  publishedTime?: string;
  /** For article type: ISO date string */
  modifiedTime?: string;
  /** For article type: author names */
  authors?: string[];
}

export interface AlternateLocale {
  locale: string;
  url: string;
}

export interface OpenGraphMetadata {
  title: string;
  description: string;
  url: string;
  siteName: string;
  images: Array<{
    url: string;
    width?: number;
    height?: number;
    alt?: string;
  }>;
  locale: string;
  alternateLocales?: string[];
  type?: "website" | "article" | "profile";
}

export interface TwitterCardMetadata {
  card: "summary" | "summary_large_image" | "app" | "player";
  title: string;
  description: string;
  images?: string[];
  site?: string;
  creator?: string;
}

export interface StructuredDataSchema {
  "@context": string;
  "@type": string;
  [key: string]: unknown;
}

export interface KeywordData {
  primary: string[];
  secondary: string[];
  longTail?: string[];
}

export interface SeoConfig {
  siteUrl: string;
  siteName: string;
  defaultLocale: string;
  locales: string[];
  twitterHandle?: string;
}
