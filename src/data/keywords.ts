/** Predefined keyword sets per page slug (canonical EN key) */
export const PAGE_KEYWORDS: Record<
  string,
  { primary: string[]; secondary: string[] }
> = {
  index: {
    primary: ["software development", "MVP development", "dedicated teams"],
    secondary: [
      "scale software",
      "startup engineering",
      "scale-up development",
      "German Pakistani tech partnership",
      "offshore development",
    ],
  },
  "about-team": {
    primary: ["SolutionPlus", "German leadership", "Pakistani engineering"],
    secondary: [
      "software delivery partner",
      "global tech talent",
      "about us",
      "tech team",
    ],
  },
  "dedicated-delivery-teams": {
    primary: ["dedicated development teams", "remote engineering teams"],
    secondary: [
      "offshore software team",
      "managed development team",
      "scale engineering",
      "BOT model",
    ],
  },
  "mvp-sprint-package": {
    primary: ["MVP sprint", "MVP development", "product validation"],
    secondary: [
      "fast MVP",
      "investor-ready MVP",
      "product launch",
      "startup MVP",
    ],
  },
  "product-modernization": {
    primary: ["legacy modernization", "software modernization", "code refactoring"],
    secondary: [
      "legacy code upgrade",
      "tech debt",
      "product upgrade",
      "software migration",
    ],
  },
  "entrepreneur-with-an-idea": {
    primary: ["entrepreneur tech partner", "idea to product", "startup tech"],
    secondary: [
      "no-code alternative",
      "product development partner",
      "validate idea",
    ],
  },
  careers: {
    primary: ["careers", "software engineering jobs", "SolutionPlus careers"],
    secondary: [
      "join our team",
      "remote engineering",
      "tech jobs",
      "product development careers",
    ],
  },
  "contact-us": {
    primary: ["contact SolutionPlus", "software consultation"],
    secondary: [
      "get a quote",
      "free consultation",
      "start a project",
      "talk to experts",
    ],
  },
  "scale-up": {
    primary: ["scale-up engineering", "scale-up development", "growth stage"],
    secondary: [
      "scale product",
      "expand engineering",
      "scale-up software",
      "growth tech partner",
    ],
  },
  startup: {
    primary: ["startup development", "startup software", "early-stage"],
    secondary: [
      "startup tech partner",
      "MVP for startups",
      "agile development",
      "product-market fit",
    ],
  },
  "terms-and-conditions": {
    primary: ["terms and conditions", "SolutionPlus terms"],
    secondary: ["legal", "service terms", "agreement"],
  },
  "privacy-policy": {
    primary: ["privacy policy", "data protection", "SolutionPlus privacy"],
    secondary: ["GDPR", "personal data", "privacy"],
  },
  "case-studies": {
    primary: ["case studies", "success stories", "portfolio"],
    secondary: [
      "software development projects",
      "client work",
      "tech case studies",
    ],
  },
  "ai-automation": {
    primary: ["AI automation", "workflow automation", "process automation"],
    secondary: [
      "n8n",
      "LangChain",
      "RPA",
      "business process automation",
      "AI agents",
    ],
  },
  "ui-ux-design": {
    primary: ["UI design", "UX design", "user experience design"],
    secondary: [
      "wireframing",
      "prototyping",
      "design systems",
      "user research",
    ],
  },
  "web-app-development": {
    primary: ["web development", "web app development", "full-stack development"],
    secondary: ["React", "Next.js", "e-commerce", "CMS", "API development"],
  },
  "mobile-app-development": {
    primary: ["mobile app development", "iOS", "Android", "cross-platform"],
    secondary: ["Flutter", "React Native", "native app", "app modernization"],
  },
  services: {
    primary: ["software services", "development services", "tech solutions"],
    secondary: [
      "MVP development",
      "dedicated teams",
      "AI automation",
      "web development",
      "mobile development",
      "UI/UX design",
    ],
  },
};
