import type { NextConfig } from "next";
import { withSentryConfig } from "@sentry/nextjs";

const nextConfig: NextConfig = {
  output: "standalone",
  compress: true,
  productionBrowserSourceMaps: false,
  poweredByHeader: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "solutionplus.io",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    optimizePackageImports: [
      "framer-motion",
      "lucide-react",
      "react-markdown",
      "remark-gfm",
    ],
    turbopackFileSystemCacheForBuild: true,
  },
  serverExternalPackages: ["nodemailer", "@aws-sdk/client-sesv2"],
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
      {
        source: "/images/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/_next/static/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/de/classic-business-3',
        destination: '/de',
        permanent: true,
      },
      {
        source: '/en/classic-business-3',
        destination: '/en',
        permanent: true,
      },
      {
        source: '/classic-business-3',
        destination: '/',
        permanent: true,
      }
    ];
  },
};

const sentryConfig = process.env.SENTRY_AUTH_TOKEN
  ? withSentryConfig(nextConfig, {
    org: process.env.SENTRY_ORG || "solutionplus-gd",
    project: process.env.SENTRY_PROJECT || "sp-redesign",
    authToken: process.env.SENTRY_AUTH_TOKEN,
    tunnelRoute: "/monitoring",
    silent: !process.env.CI,
    sourcemaps: { disable: true },
  })
  : nextConfig;

export default sentryConfig;
