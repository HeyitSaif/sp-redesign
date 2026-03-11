import { NextResponse } from "next/server";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://solutionplus.io";

const LLMS_TXT = `# SolutionPlus

> SolutionPlus helps startups and scale-ups build better products, faster. From MVP sprints to modernizing legacy code, we deliver engineering that scales. German leadership, Pakistani engineering talent.

## Core Pages

- [Home](https://solutionplus.io/en): Build, launch, and scale software with SolutionPlus
- [Home (DE)](https://solutionplus.io/de): Software entwickeln und skalieren mit SolutionPlus
- [About](https://solutionplus.io/en/about-team): German leadership, Pakistani engineering, BOT model
- [Contact](https://solutionplus.io/en/contact-us): Get in touch to discuss your product goals
- [MVP Sprint Package](https://solutionplus.io/en/mvp-sprint-package): Turn ideas into working MVPs in weeks
- [Dedicated Delivery Teams](https://solutionplus.io/en/dedicated-delivery-teams): Remote teams that work like your own
- [Product Modernization](https://solutionplus.io/en/product-modernization): Legacy software upgrades without full rebuild

## Services

- [AI Automation](https://solutionplus.io/en/ai-automation): Workflow and process automation with AI
- [UI/UX Design](https://solutionplus.io/en/ui-ux-design): User research, wireframes, design systems
- [Web App Development](https://solutionplus.io/en/web-app-development): Custom web platforms, e-commerce, APIs
- [Mobile App Development](https://solutionplus.io/en/mobile-app-development): iOS, Android, cross-platform apps

## Case Studies

- [Case Studies](https://solutionplus.io/en/case-studies): Client success stories and portfolio
- [Tecsofy](https://solutionplus.io/en/case-studies/tecsofiy): Process-first B2B automation
- [Automotive AI](https://solutionplus.io/en/case-studies/automotive-ai): Two automotive platforms in parallel

## Optional

- [Careers](https://solutionplus.io/en/careers): Join our engineering and design team
- [Startup Solutions](https://solutionplus.io/en/startup): Software for early-stage startups
- [Scale-up Support](https://solutionplus.io/en/scale-up): Engineering for growing products
- [Entrepreneur with an Idea](https://solutionplus.io/en/entrepreneur-with-an-idea): Tech partner for idea validation
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
