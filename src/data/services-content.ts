export interface ServiceContent {
  slugs: { en: string; de: string };
  title: { en: string; de: string };
  tagline: { en: string; de: string };
  heroDescription: { en: string; de: string };
  whatWeDeliver: {
    sectionTitle: { en: string; de: string };
    items: {
      title: { en: string; de: string };
      description: { en: string; de: string };
    }[];
  };
  whyItWorks: {
    sectionTitle: { en: string; de: string };
    items: {
      title: { en: string; de: string };
      description: { en: string; de: string };
    }[];
  };
  howWeWork: {
    sectionTitle: { en: string; de: string };
    items: {
      title: { en: string; de: string };
      description: { en: string; de: string };
    }[];
  };
  technologyStack: {
    sectionTitle: { en: string; de: string };
    categories: {
      category: { en: string; de: string };
      items: string;
    }[];
  };
  faqs: {
    q: { en: string; de: string };
    a: { en: string; de: string };
  }[];
  ctaTitle: { en: string; de: string };
  ctaSubtitle: { en: string; de: string };
}

export const servicesData: Record<string, ServiceContent> = {
  'ai-automation': {
    slugs: { en: 'ai-automation', de: 'ki-automatisierung' },
    title: { en: 'AI Automation', de: 'KI-Automatisierung' },
    tagline: {
      en: 'Automate the work that slows you down.',
      de: 'Automatisieren Sie die Arbeit, die Sie ausbremst.',
    },
    heroDescription: {
      en: 'We help ambitious businesses transform operations by fixing broken processes before deploying automation. From identifying quick wins to implementing enterprise-grade orchestration, we combine deep process thinking with powerful AI technology to eliminate friction and drive sustainable growth.',
      de: 'Wir helfen aufstrebenden Unternehmen, ihre Abläufe zu transformieren – indem wir Prozesse optimieren, bevor wir KI-Automatisierung einsetzen. Von schnellen Erfolgen bis zu unternehmensweiter Orchestrierung kombinieren wir strategisches Prozessdenken mit leistungsstarker Technologie für spürbares Wachstum.',
    },
    whatWeDeliver: {
      sectionTitle: { en: 'What We Deliver', de: 'Was wir liefern' },
      items: [
        {
          title: { en: 'Process Analysis & Optimization', de: 'Prozessanalyse & Optimierung' },
          description: {
            en: 'We dive deep to identify hidden bottlenecks, eliminate redundancies, and fix error-prone steps. By aligning with industry best practices, we define crystal-clear ROI metrics before a single line of automation code is written.',
            de: 'Wir tauchen tief in Ihre Prozesse ein, um versteckte Engpässe und Redundanzen zu identifizieren. Basierend auf Best Practices definieren wir kristallklare ROI-Metriken, bevor die erste Zeile Code geschrieben wird.',
          },
        },
        {
          title: { en: 'Workflow Automation', de: 'Workflow-Automatisierung' },
          description: {
            en: 'Leverage low-code platforms (n8n, Zapier) for lightning-fast rollouts, or custom AI agent frameworks (LangChain, AutoGen) for complex, logic-heavy workflows. We build hybrid paths for phased delivery and total control.',
            de: 'Nutzen Sie Low-Code-Plattformen für blitzschnelle Rollouts oder maßgeschneiderte KI-Agenten für komplexe Workflows. Wir bauen hybride Lösungen für schrittweise Einführung und absolute Kontrolle.',
          },
        },
        {
          title: { en: 'System Integration', de: 'Systemintegration' },
          description: {
            en: 'Achieve real-time API syncs across your entire stack. From custom Python ETL pipelines to seamless ERP, CRM, and HR integrations, we ensure your data flows smoothly securely across AWS, Azure, or GCP.',
            de: 'Erreichen Sie Echtzeit-API-Synchronisierung über Ihren gesamten Tech-Stack. Von individuellen ETL-Pipelines bis zur nahtlosen ERP- und CRM-Integration sorgen wir dafür, dass Ihre Daten sicher fließen.',
          },
        },
        {
          title: { en: 'AI-Powered Process Intelligence', de: 'KI-gestützte Prozessintelligenz' },
          description: {
            en: 'Transform raw data into actionable insights with intelligent document routing, autonomous decision-making, and advanced predictive forecasting to keep you steps ahead of anomalies.',
            de: 'Verwandeln Sie Rohdaten in umsetzbare Erkenntnisse durch intelligentes Dokumenten-Routing, autonome Entscheidungsfindung und vorausschauende Analysen.',
          },
        },
      ],
    },
    whyItWorks: {
      sectionTitle: { en: 'Why Our Approach Works', de: 'Warum unser Ansatz funktioniert' },
      items: [
        {
          title: { en: 'Process-first, always', de: 'Prozess zuerst, immer' },
          description: {
            en: 'Automation fails when it simply accelerates bad workflows. We fix the root cause first.',
            de: 'Automatisierung scheitert, wenn sie schlechte Workflows lediglich beschleunigt. Wir beheben die Ursachen zuerst.',
          },
        },
        {
          title: { en: 'Tool-agnostic execution', de: 'Tool-agnostische Umsetzung' },
          description: {
            en: 'We pick exactly what fits your unique architecture. No over-engineering, zero vendor lock-in.',
            de: 'Wir wählen genau das, was zu Ihrer Architektur passt. Kein Over-Engineering, kein Vendor Lock-in.',
          },
        },
        {
          title: { en: 'Quick wins + scalable plans', de: 'Quick Wins + skalierbare Pläne' },
          description: {
            en: 'Start small to prove immediate value, then scale aggressively when you are ready.',
            de: 'Klein anfangen, um sofortigen Mehrwert zu beweisen, dann aggressiv skalieren, wenn Sie bereit sind.',
          },
        },
        {
          title: { en: 'Clear, measurable results', de: 'Klare, messbare Ergebnisse' },
          description: {
            en: 'We meticulously track before-and-after metrics so you can measure true ROI, not guess it.',
            de: 'Wir verfolgen akribisch Vorher-Nachher-Metriken, damit Sie den wahren ROI messen können, nicht nur schätzen.',
          },
        },
      ],
    },
    howWeWork: {
      sectionTitle: { en: 'How We Work', de: 'Wie wir arbeiten' },
      items: [
        {
          title: { en: 'Step 1: Discovery & Analysis', de: 'Schritt 1: Discovery & Analyse' },
          description: {
            en: 'We map your workflows to find the friction and capture root causes, spotting quick wins to define metrics early on.',
            de: 'Wir mappen Ihre Workflows, um Reibungspunkte und Ursachen zu finden, identifizieren Quick Wins und definieren frühzeitig Metriken.',
          },
        },
        {
          title: { en: 'Step 2: Redesign & Validation', de: 'Schritt 2: Redesign & Validierung' },
          description: {
            en: 'Rebuilding workflows to drastically reduce waste, errors, and manual handoffs while aligning with stakeholder goals.',
            de: 'Wir strukturieren Workflows neu, um Fehler und manuelle Übergaben drastisch zu reduzieren und sie auf die Ziele der Stakeholder abzustimmen.',
          },
        },
        {
          title: { en: 'Step 3: Tool Selection & Pilot', de: 'Schritt 3: Tool-Auswahl & Pilot' },
          description: {
            en: 'Matching the perfect automation approach to your process type, deploying pilot workflows in just 2-6 weeks.',
            de: 'Wir passen den perfekten Automatisierungsansatz an Ihren Prozesstyp an und implementieren Pilot-Workflows in nur 2-6 Wochen.',
          },
        },
        {
          title: { en: 'Step 4: Scale & Optimize', de: 'Schritt 4: Skalierung & Optimierung' },
          description: {
            en: 'Rolling out incrementally while continuously monitoring and refining based on real user feedback and performance data.',
            de: 'Wir rollen schrittweise aus und überwachen und verfeinern kontinuierlich basierend auf echtem Nutzerfeedback und Leistungsdaten.',
          },
        },
      ],
    },
    technologyStack: {
      sectionTitle: { en: 'Technology Stack', de: 'Technologie-Stack' },
      categories: [
        {
          category: { en: 'Low-Code', de: 'Low-Code' },
          items: 'n8n, Zapier, Microsoft Power Automate, Make',
        },
        {
          category: { en: 'AI Frameworks', de: 'KI-Frameworks' },
          items: 'LangChain, AutoGen, CrewAI, Semantic Kernel, OpenAI',
        },
        {
          category: { en: 'APIs & Data', de: 'APIs & Daten' },
          items: 'REST, GraphQL, Apache Airflow, Pandas',
        },
        {
          category: { en: 'Cloud & DevOps', de: 'Cloud & DevOps' },
          items: 'AWS, Azure, GCP, Docker, Kubernetes, GitLab',
        },
        {
          category: { en: 'Compliance', de: 'Compliance' },
          items: 'GDPR-ready, end-to-end encrypted, auditable solutions',
        },
      ],
    },
    faqs: [
      {
        q: {
          en: 'What types of processes can you automate with AI?',
          de: 'Welche Arten von Prozessen können Sie mit KI automatisieren?',
        },
        a: {
          en: 'We automate repetitive workflows such as data entry, intelligent lead routing, complex reporting, customer support triage, document processing, and multi-step operational tasks across departments.',
          de: 'Wir automatisieren wiederkehrende Workflows wie Dateneingabe, intelligentes Lead-Routing, komplexe Berichterstattung, Kundensupport, Dokumentenverarbeitung und mehrstufige operative Aufgaben.',
        },
      },
      {
        q: {
          en: 'Do you build custom AI workflows or use existing tools?',
          de: 'Bauen Sie maßgeschneiderte KI-Workflows oder nutzen Sie bestehende Tools?',
        },
        a: {
          en: 'Both. We design bespoke automation using deep API integrations and AI agents, while also leveraging enterprise tools like n8n and Zapier to keep solutions remarkably fast, scalable, and cost-efficient.',
          de: 'Beides. Wir entwerfen maßgeschneiderte Automatisierungen mit tiefen API-Integrationen und KI-Agenten und nutzen gleichzeitig Enterprise-Tools wie n8n und Zapier, um Lösungen schnell, skalierbar und kosteneffizient zu halten.',
        },
      },
      {
        q: {
          en: 'How quickly can AI automation be implemented?',
          de: 'Wie schnell kann KI-Automatisierung implementiert werden?',
        },
        a: {
          en: 'Thanks to our agile process, most automations go live within 1–3 weeks, depending on system complexity, integration depth, and your specific data requirements.',
          de: 'Dank unseres agilen Prozesses gehen die meisten Automatisierungen innerhalb von 1–3 Wochen live, abhängig von Systemkomplexität, Integrationstiefe und Datenanforderungen.',
        },
      },
    ],
    ctaTitle: { en: 'Let’s Build What’s Next', de: 'Lassen Sie uns die Zukunft bauen' },
    ctaSubtitle: {
      en: 'Book a consultation and get tailored support for your product stage.',
      de: 'Buchen Sie eine Beratung und erhalten Sie maßgeschneiderte Unterstützung für Ihre Produktphase.',
    },
  },

  'ui-ux-design': {
    slugs: { en: 'ui-ux-design', de: 'ui-ux-design' },
    title: { en: 'UI/UX Design', de: 'UI/UX Design' },
    tagline: {
      en: 'Design that feels intuitive, looks polished, and drives user action.',
      de: 'Design, das sich intuitiv anfühlt, poliert aussieht und Nutzer zum Handeln bewegt.',
    },
    heroDescription: {
      en: 'We craft digital interfaces that are profoundly intuitive, fully accessible, and built on real human behavior. From the first structural wireframe to fully responsive, buttery-smooth experiences, we combine meticulous research with creative system thinking to deliver results that feel undeniably right.',
      de: 'Wir entwerfen digitale Schnittstellen, die zutiefst intuitiv, vollständig barrierefrei und auf echtem menschlichen Verhalten aufgebaut sind. Vom ersten strukturellen Wireframe bis hin zu vollständig responsiven, reibungslosen Erlebnissen kombinieren wir akribische Forschung mit kreativem Systemdenken.',
    },
    whatWeDeliver: {
      sectionTitle: { en: 'What We Offer', de: 'Was wir anbieten' },
      items: [
        {
          title: { en: 'Wireframing & Interactive Prototypes', de: 'Wireframing & interaktive Prototypen' },
          description: {
            en: 'Sketch fast. Test early. Our clickable wireframes and high-fidelity UI flows help you confidently validate core structure before a single line of code is written.',
            de: 'Schnell skizzieren. Früh testen. Unsere klickbaren Wireframes und hochpräzisen UI-Flows helfen Ihnen, die Kernstruktur sicher zu validieren, bevor Code geschrieben wird.',
          },
        },
        {
          title: { en: 'User Research & Journey Mapping', de: 'Nutzerforschung & Journey Mapping' },
          description: {
            en: 'We uncover what your users truly need through interviews, surveys, and deep behavioral analytics. Persona building and journey maps ensure every pixel is grounded in evidence.',
            de: 'Wir decken auf, was Ihre Nutzer wirklich brauchen – durch Interviews, Umfragen und Verhaltensanalysen. Personas und Journey Maps stellen sicher, dass jeder Pixel auf Fakten basiert.',
          },
        },
        {
          title: { en: 'Interface Design & Visual Identity', de: 'Interface Design & Visuelle Identität' },
          description: {
            en: 'Pixel-perfect designs engineered for absolute usability. We craft stunning, accessible, on-brand visuals that amplify your product and deeply engage users across every screen.',
            de: 'Pixelgenaue Designs, entwickelt für absolute Usability. Wir kreieren atemberaubende, barrierefreie und markengerechte Visuals, die Ihr Produkt verstärken und Nutzer über jeden Bildschirm hinweg einbinden.',
          },
        },
        {
          title: { en: 'Responsive & Mobile-First Design', de: 'Responsives & Mobile-First Design' },
          description: {
            en: 'From compact smartphone screens to complex enterprise dashboards, our fluid interfaces scale naturally and beautifully across all modern devices.',
            de: 'Von kompakten Smartphone-Bildschirmen bis hin zu komplexen Enterprise-Dashboards – unsere flüssigen Schnittstellen skalieren natürlich und wunderschön über alle modernen Geräte.',
          },
        },
        {
          title: { en: 'Design Systems & UI Kits', de: 'Design-Systeme & UI-Kits' },
          description: {
            en: 'We deliver comprehensive, reusable, and infinitely scalable component libraries that keep your product visually consistent while supercharging your dev team’s efficiency.',
            de: 'Wir liefern umfassende, wiederverwendbare und unendlich skalierbare Komponentenbibliotheken, die Ihr Produkt visuell konsistent halten und die Effizienz Ihres Entwicklerteams steigern.',
          },
        },
        {
          title: { en: 'Usability Testing & Optimization', de: 'Usability-Tests & Optimierung' },
          description: {
            en: 'We test, learn, and rapidly iterate. Every critical interaction is rigorously validated with real user feedback before launch to ensure maximum conversion.',
            de: 'Wir testen, lernen und iterieren schnell. Jede kritische Interaktion wird vor dem Start rigoros mit echtem Nutzerfeedback validiert, um maximale Konversion zu gewährleisten.',
          },
        },
      ],
    },
    whyItWorks: {
      sectionTitle: { en: 'Why Teams Choose SolutionPlus', de: 'Warum Teams uns wählen' },
      items: [
        {
          title: { en: 'User-First Thinking', de: 'Nutzerzentriertes Denken' },
          description: {
            en: 'Every design decision is firmly rooted in real-world human behavior and context.',
            de: 'Jede Designentscheidung ist fest im realen menschlichen Verhalten und Kontext verwurzelt.',
          },
        },
        {
          title: { en: 'Fast Prototypes, Real Feedback', de: 'Schnelle Prototypen, echtes Feedback' },
          description: {
            en: 'We iterate early and often, empowering you to launch smarter products faster.',
            de: 'Wir iterieren früh und oft, damit Sie intelligentere Produkte schneller auf den Markt bringen können.',
          },
        },
        {
          title: { en: 'Designer-Developer Alignment', de: 'Designer-Entwickler-Ausrichtung' },
          description: {
            en: 'We don’t just draw pictures; we design with strict technical implementation in mind.',
            de: 'Wir zeichnen nicht nur Bilder; wir designen mit strikter technischer Umsetzung im Hinterkopf.',
          },
        },
        {
          title: { en: 'Tool-Agnostic Experts', de: 'Tool-agnostische Experten' },
          description: {
            en: 'Whether your stack runs on Figma, Sketch, or Framer, our experts adapt to you seamlessly.',
            de: 'Egal ob Ihr Stack auf Figma, Sketch oder Framer läuft, unsere Experten passen sich nahtlos an.',
          },
        },
        {
          title: { en: 'Scalable Design Systems', de: 'Skalierbare Design-Systeme' },
          description: {
            en: 'Our meticulously crafted design systems support and accelerate long-term product growth.',
            de: 'Unsere sorgfältig gestalteten Design-Systeme unterstützen und beschleunigen langfristiges Produktwachstum.',
          },
        },
      ],
    },
    howWeWork: {
      sectionTitle: { en: 'Our Process', de: 'Unser Prozess' },
      items: [
        {
          title: { en: 'User Research & Mapping', de: 'Nutzerforschung & Mapping' },
          description: {
            en: 'In-depth persona building, comprehensive user flows, and actionable behavioral analysis.',
            de: 'Tiefgreifender Persona-Aufbau, umfassende Nutzerflüsse und umsetzbare Verhaltensanalysen.',
          },
        },
        {
          title: { en: 'UX Architecture & Wireframing', de: 'UX-Architektur & Wireframing' },
          description: {
            en: 'Logical content structuring, seamless journey design, and early wireframe validation.',
            de: 'Logische Inhaltsstrukturierung, nahtloses Journey-Design und frühe Wireframe-Validierung.',
          },
        },
        {
          title: { en: 'UI Design & Prototyping', de: 'UI-Design & Prototyping' },
          description: {
            en: 'Establishing a striking visual identity, creating clickable mockups, and conducting UI reviews.',
            de: 'Etablierung einer markanten visuellen Identität, Erstellung klickbarer Mockups und Durchführung von UI-Reviews.',
          },
        },
        {
          title: { en: 'Design Systems & Consistency', de: 'Design-Systeme & Konsistenz' },
          description: {
            en: 'Building robust component libraries and style guides to effortlessly support scale.',
            de: 'Aufbau robuster Komponentenbibliotheken und Styleguides zur mühelosen Unterstützung der Skalierung.',
          },
        },
        {
          title: { en: 'Testing & Iteration', de: 'Tests & Iteration' },
          description: {
            en: 'Running targeted usability studies, performance checks, and feedback-based improvements.',
            de: 'Durchführung gezielter Usability-Studien, Leistungsüberprüfungen und feedbackbasierter Verbesserungen.',
          },
        },
        {
          title: { en: 'MVP Launch & Refinement', de: 'MVP-Launch & Verfeinerung' },
          description: {
            en: 'Employing rapid design cycles to validate new concepts and features directly in the market.',
            de: 'Einsatz schneller Designzyklen, um neue Konzepte und Funktionen direkt im Markt zu validieren.',
          },
        },
      ],
    },
    technologyStack: {
      sectionTitle: { en: 'Design Tools', de: 'Design-Tools' },
      categories: [
        {
          category: { en: 'Interface Design', de: 'Interface Design' },
          items: 'Figma, Sketch, Adobe XD, Framer, Webflow',
        },
        {
          category: { en: 'Prototyping & Handoff', de: 'Prototyping & Übergabe' },
          items: 'Protopie, Principle, Zeplin, InVision',
        },
        {
          category: { en: 'Research & Analytics', de: 'Forschung & Analyse' },
          items: 'Hotjar, Maze, Lookback, Google Analytics',
        },
      ],
    },
    faqs: [
      {
        q: {
          en: 'What is included in your UI/UX process?',
          de: 'Was beinhaltet Ihr UI/UX-Prozess?',
        },
        a: {
          en: 'We handle the entire spectrum: user research, strategic wireframes, high-fidelity prototypes, visual design, and usability improvements to ensure your product is exceptionally intuitive and highly conversion-friendly.',
          de: 'Wir decken das gesamte Spektrum ab: Nutzerforschung, strategische Wireframes, hochpräzise Prototypen, visuelles Design und Usability-Verbesserungen, um sicherzustellen, dass Ihr Produkt außergewöhnlich intuitiv ist.',
        },
      },
      {
        q: {
          en: 'Can you redesign an existing product?',
          de: 'Können Sie ein bestehendes Produkt neu gestalten?',
        },
        a: {
          en: 'Absolutely. We thoroughly audit your current flows, identify critical usability bottlenecks, and reimagine the interface to dramatically improve clarity, speed, and overall user delight.',
          de: 'Absolut. Wir prüfen Ihre aktuellen Abläufe gründlich, identifizieren kritische Usability-Engpässe und gestalten die Benutzeroberfläche neu, um Klarheit, Geschwindigkeit und Gesamterlebnis drastisch zu verbessern.',
        },
      },
      {
        q: {
          en: 'Do you work directly with our development team?',
          de: 'Arbeiten Sie direkt mit unserem Entwicklerteam zusammen?',
        },
        a: {
          en: 'Yes. We deliver impeccably clean design systems, well-organized assets, and detailed specs that integrate smoothly into your engineering workflow, completely eliminating ambiguity and costly rework.',
          de: 'Ja. Wir liefern makellos saubere Design-Systeme, gut organisierte Assets und detaillierte Spezifikationen, die sich reibungslos in Ihren Engineering-Workflow integrieren lassen.',
        },
      },
    ],
    ctaTitle: { en: 'Elevate Your User Experience', de: 'Verbessern Sie Ihr Nutzererlebnis' },
    ctaSubtitle: {
      en: 'Book a consultation to see how powerful design can transform your product.',
      de: 'Buchen Sie eine Beratung, um zu sehen, wie starkes Design Ihr Produkt verändern kann.',
    },
  },

  'web-app-development': {
    slugs: { en: 'web-app-development', de: 'web-entwicklung' },
    title: { en: 'Web App Development', de: 'Web-Entwicklung' },
    tagline: {
      en: 'Build reliable, hyper-scalable web apps that grow with your business.',
      de: 'Zuverlässige, hyperskalierbare Webanwendungen für Ihr Wachstum.',
    },
    heroDescription: {
      en: 'We architect and build custom, high-performance web applications tailored precisely to your unique business logic—never boxed into rigid templates. Whether launching a disruptive new platform or modernizing a fragile legacy system, our uncompromising focus is on speed, usability, and long-term technical flexibility.',
      de: 'Wir konzipieren und entwickeln individuelle, hochleistungsfähige Webanwendungen, die exakt auf Ihre einzigartige Geschäftslogik zugeschnitten sind. Unser kompromissloser Fokus liegt auf Geschwindigkeit, Usability und langfristiger Flexibilität.',
    },
    whatWeDeliver: {
      sectionTitle: { en: 'What We Build', de: 'Was wir umsetzen' },
      items: [
        {
          title: { en: 'Bespoke Web Platforms', de: 'Maßgeschneiderte Webplattformen' },
          description: {
            en: 'We engineer robust full-stack web solutions utilizing modern frameworks like React, Next.js, and Vue. Your platform will be blisteringly fast and ready to scale effortlessly with your business.',
            de: 'Wir entwickeln robuste Full-Stack-Lösungen mit modernen Frameworks wie React, Next.js und Vue. Ihre Plattform wird blitzschnell sein und mühelos mit Ihrem Unternehmen skalieren.',
          },
        },
        {
          title: { en: 'High-Conversion E-Commerce', de: 'Konversionsstarker E-Commerce' },
          description: {
            en: 'We construct powerful storefronts using Shopify, Magento, WooCommerce, or entirely custom headless commerce stacks—complete with flawless payment gateways, real-time inventory sync, and mobile-optimized UIs.',
            de: 'Wir bauen leistungsstarke Shops mit Shopify, Magento, WooCommerce oder vollständig maßgeschneiderten Headless-Commerce-Stacks – komplett mit fehlerfreien Zahlungs-Gateways und Echtzeit-Inventarsynchronisation.',
          },
        },
        {
          title: { en: 'Advanced CMS-Based Sites', de: 'Erweiterte CMS-Websites' },
          description: {
            en: 'Bespoke setups on WordPress, contentful, or Strapi. We hand you absolute control over your content, technical SEO, and complex integrations—zero technical overhead required.',
            de: 'Maßgeschneiderte Setups auf WordPress, Contentful oder Strapi. Wir geben Ihnen die absolute Kontrolle über Ihre Inhalte, technisches SEO und komplexe Integrationen.',
          },
        },
        {
          title: { en: 'API Development & Integration', de: 'API-Entwicklung & Integration' },
          description: {
            en: 'We architect, build, and seamlessly connect secure REST & GraphQL APIs to your CRM, ERP, payment systems, and third-party services. Unmatched speed and ironclad reliability guaranteed.',
            de: 'Wir entwerfen, bauen und verbinden sichere REST- & GraphQL-APIs nahtlos mit Ihrem CRM, ERP, Zahlungssystemen und Drittanbieterdiensten. Unübertroffene Geschwindigkeit und eiserne Zuverlässigkeit garantiert.',
          },
        },
        {
          title: { en: 'Website Maintenance & Scaling', de: 'Wartung & Skalierung' },
          description: {
            en: 'Continuous optimization through regular updates, rigorous performance checks, proactive security audits, and dedicated scaling support. Your platform evolves as fast as your business.',
            de: 'Kontinuierliche Optimierung durch regelmäßige Updates, strenge Leistungsprüfungen, proaktive Sicherheitsaudits und engagierten Skalierungssupport.',
          },
        },
      ],
    },
    whyItWorks: {
      sectionTitle: { en: 'Why Choose Our Engineering Team', de: 'Warum Sie unser Entwicklerteam wählen sollten' },
      items: [
        {
          title: { en: 'Modern, Future-Proof Stack', de: 'Moderner, zukunftssicherer Stack' },
          description: {
            en: 'We leverage the absolute latest, battle-tested technologies to deliver platforms that are exceptionally fast and highly reliable.',
            de: 'Wir nutzen die absolut neuesten, praxiserprobten Technologien, um Plattformen zu liefern, die außergewöhnlich schnell und hochzuverlässig sind.',
          },
        },
        {
          title: { en: 'Inherently Scalable Architecture', de: 'Inhärent skalierbare Architektur' },
          description: {
            en: 'From day one, our web apps are architected to comfortably handle exponential growth and traffic spikes.',
            de: 'Von Tag eins an sind unsere Web-Apps so konzipiert, dass sie exponentielles Wachstum und Verkehrsspitzen problemlos bewältigen können.',
          },
        },
        {
          title: { en: 'Clean Code Practices', de: 'Clean-Code-Praktiken' },
          description: {
            en: 'We write elegant, fully-documented code that dramatically reduces technical debt and future maintenance costs.',
            de: 'Wir schreiben eleganten, vollständig dokumentierten Code, der technische Schulden und zukünftige Wartungskosten drastisch reduziert.',
          },
        },
        {
          title: { en: 'Security by Default', de: 'Sicherheit als Standard' },
          description: {
            en: 'Enterprise-grade security protocols are baked into every layer of your application architecture.',
            de: 'Sicherheitsprotokolle auf Unternehmensniveau sind in jede Schicht Ihrer Anwendungsarchitektur integriert.',
          },
        },
      ],
    },
    howWeWork: {
      sectionTitle: { en: 'Our Engineering Process', de: 'Unser Entwicklungsprozess' },
      items: [
        {
          title: { en: 'Discovery & Strategic Planning', de: 'Discovery & Strategische Planung' },
          description: {
            en: 'Comprehensive roadmap creation, precise technical requirements gathering, and strict goal alignment.',
            de: 'Umfassende Roadmap-Erstellung, präzise Erfassung technischer Anforderungen und strikte Zielausrichtung.',
          },
        },
        {
          title: { en: 'Design & Prototyping', de: 'Design & Prototyping' },
          description: {
            en: 'Crafting UX-first wireframes and interactive journeys to visually validate the product flow.',
            de: 'Erstellung von UX-First-Wireframes und interaktiven Journeys zur visuellen Validierung des Produktflusses.',
          },
        },
        {
          title: { en: 'Development & Integration', de: 'Entwicklung & Integration' },
          description: {
            en: 'Agile, full-stack builds using modern frameworks and uncompromising clean code practices.',
            de: 'Agile Full-Stack-Entwicklung unter Verwendung moderner Frameworks und kompromissloser Clean-Code-Praktiken.',
          },
        },
        {
          title: { en: 'Rigorous Testing & QA', de: 'Strenge Tests & QA' },
          description: {
            en: 'Exhaustive cross-browser/device testing, automated QA pipelines, and deep security vulnerability checks.',
            de: 'Umfassende Cross-Browser-/Gerätetests, automatisierte QA-Pipelines und tiefe Überprüfungen auf Sicherheitslücken.',
          },
        },
        {
          title: { en: 'Flawless Launch', de: 'Fehlerfreier Launch' },
          description: {
            en: 'Meticulous DNS setup, highly-available domain go-live, and integration of robust monitoring tools.',
            de: 'Akribisches DNS-Setup, hochverfügbarer Domain-Go-Live und Integration robuster Monitoring-Tools.',
          },
        },
        {
          title: { en: 'Maintenance & Continuous Support', de: 'Wartung & Kontinuierlicher Support' },
          description: {
            en: 'Ongoing strategic updates, 24/7 performance monitoring, and iterative feature enhancements.',
            de: 'Fortlaufende strategische Updates, 24/7-Leistungsüberwachung und iterative Funktionsverbesserungen.',
          },
        },
      ],
    },
    technologyStack: {
      sectionTitle: { en: 'Our Technology Stack', de: 'Unser Technologie-Stack' },
      categories: [
        {
          category: { en: 'Frontend', de: 'Frontend' },
          items: 'React, Next.js, Vue.js, Angular, Svelte, TailwindCSS',
        },
        {
          category: { en: 'Backend', de: 'Backend' },
          items: 'Node.js, NestJS, Python, Django, Laravel (PHP), Go',
        },
        {
          category: { en: 'Databases', de: 'Datenbanken' },
          items: 'PostgreSQL, MySQL, MongoDB, Redis, Supabase',
        },
        {
          category: { en: 'Cloud & Infrastructure', de: 'Cloud & Infrastruktur' },
          items: 'AWS, Google Cloud, DigitalOcean, Docker, Kubernetes, Terraform',
        },
        {
          category: { en: 'DevOps & Quality Assurance', de: 'DevOps & Qualitätssicherung' },
          items: 'GitLab CI/CD, GitHub Actions, Cypress, Jest, TypeScript',
        },
      ],
    },
    faqs: [
      {
        q: {
          en: 'What specific technologies do you use?',
          de: 'Welche spezifischen Technologien verwenden Sie?',
        },
        a: {
          en: 'We build with highly performant, modern stacks including React, Next.js, Vue, Node.js, NestJS, Python, Django, Laravel, PostgreSQL, MongoDB, and deploy seamlessly on AWS or Azure.',
          de: 'Wir bauen mit hochleistungsfähigen, modernen Stacks wie React, Next.js, Vue, Node.js, NestJS, Python, Django, Laravel, PostgreSQL, MongoDB und implementieren nahtlos auf AWS oder Azure.',
        },
      },
      {
        q: {
          en: 'Can you completely modernise my existing, outdated web app?',
          de: 'Können Sie meine bestehende, veraltete Web-App komplett modernisieren?',
        },
        a: {
          en: 'Yes. We expertly refactor legacy code, dramatically improve performance, update core architecture, and optimize old systems—all without causing any disruption to your active users.',
          de: 'Ja. Wir refaktorieren alten Code fachmännisch, verbessern die Leistung drastisch, aktualisieren die Kernarchitektur und optimieren alte Systeme – ohne Ihre aktiven Nutzer zu stören.',
        },
      },
      {
        q: {
          en: 'How do you guarantee exceptionally high code quality?',
          de: 'Wie garantieren Sie außergewöhnlich hohe Codequalität?',
        },
        a: {
          en: 'Through strict adherence to clean architecture principles, mandatory peer code reviews, extensive automated testing, robust CI/CD pipelines, and crystal-clear documentation.',
          de: 'Durch strikte Einhaltung von Clean-Architecture-Prinzipien, obligatorische Peer-Code-Reviews, umfangreiche automatisierte Tests, robuste CI/CD-Pipelines und kristallklare Dokumentation.',
        },
      },
      {
        q: {
          en: 'Do you handle highly complex or third-party API integrations?',
          de: 'Kümmern Sie sich um hochkomplexe oder Drittanbieter-API-Integrationen?',
        },
        a: {
          en: 'Yes. We frequently integrate intricate payment systems, massive data providers, complex authentication tools, and niche industry-specific APIs with supreme security and reliability.',
          de: 'Ja. Wir integrieren häufig komplexe Zahlungssysteme, massive Datenanbieter, komplexe Authentifizierungstools und branchenspezifische Nischen-APIs mit höchster Sicherheit und Zuverlässigkeit.',
        },
      },
    ],
    ctaTitle: { en: 'Let’s Build Your Digital Future', de: 'Lassen Sie uns Ihre digitale Zukunft bauen' },
    ctaSubtitle: {
      en: 'Book a technical consultation and discover the perfect architecture for your next big product.',
      de: 'Buchen Sie eine technische Beratung und entdecken Sie die perfekte Architektur für Ihr nächstes großes Produkt.',
    },
  },

  'mobile-app-development': {
    slugs: { en: 'mobile-app-development', de: 'mobile-app-entwicklung' },
    title: { en: 'Mobile App Development', de: 'Mobile App-Entwicklung' },
    tagline: {
      en: 'From flawless native builds to infinitely scalable cross-platform apps.',
      de: 'Von fehlerfreien nativen Builds bis zu unendlich skalierbaren plattformübergreifenden Apps.',
    },
    heroDescription: {
      en: "We engineer exceptional mobile applications designed for raw speed, effortless ease of use, and technical longevity. Whether you're launching a groundbreaking new product, completely overhauling an existing app, or mobilizing your internal enterprise tools, we deliver excellence.",
      de: 'Wir entwickeln außergewöhnliche mobile Anwendungen, die auf absolute Geschwindigkeit, mühelose Benutzerfreundlichkeit und technische Langlebigkeit ausgelegt sind. Ob Sie ein bahnbrechendes neues Produkt auf den Markt bringen oder bestehende Tools mobilisieren, wir liefern Exzellenz.',
    },
    whatWeDeliver: {
      sectionTitle: { en: 'What We Deliver', de: 'Was wir liefern' },
      items: [
        {
          title: { en: 'Scalable Cross-Platform App Development', de: 'Skalierbare Cross-Platform-App-Entwicklung' },
          description: {
            en: 'Harness the power of Flutter and React Native to build stunning apps that look incredibly sharp and run phenomenally well on both iOS and Android. No need to compromise or pay twice.',
            de: 'Nutzen Sie die Kraft von Flutter und React Native, um atemberaubende Apps zu entwickeln, die auf iOS und Android unglaublich scharf aussehen und phänomenal gut laufen.',
          },
        },
        {
          title: { en: 'High-Performance Native App Development', de: 'Leistungsstarke native App-Entwicklung' },
          description: {
            en: 'We code masterfully in Swift, Objective-C, Kotlin, and Java to create bespoke apps that extract every ounce of performance from Android and iOS hardware. Buttery smooth, ultra-stable, and fully integrated.',
            de: 'Wir programmieren meisterhaft in Swift, Objective-C, Kotlin und Java, um maßgeschneiderte Apps zu erstellen, die jedes Quäntchen Leistung aus Android- und iOS-Hardware herausholen.',
          },
        },
        {
          title: { en: 'App Modernization & Performance Optimization', de: 'App-Modernisierung & Leistungsoptimierung' },
          description: {
            en: "We forensically analyze what's dragging your app down—from outdated legacy code to clunky user flows and critical security gaps—and surgically bring things up to lightning speed without a total restart.",
            de: 'Wir analysieren forensisch, was Ihre App ausbremst – von veraltetem Legacy-Code bis hin zu kritischen Sicherheitslücken – und bringen die Dinge chirurgisch auf Lichtgeschwindigkeit.',
          },
        },
        {
          title: { en: 'Secure Enterprise Mobility Solutions', de: 'Sichere Enterprise-Mobility-Lösungen' },
          description: {
            en: 'We architect unshakeable mobile systems for the real, heavy-duty work happening outside the office: field service operations, secure ERP access, and live CRM dashboards. Military-grade security included.',
            de: 'Wir entwerfen unerschütterliche mobile Systeme für die harte Arbeit außerhalb des Büros: Außendienst, sicherer ERP-Zugriff und Live-CRM-Dashboards. Sicherheit auf Militärniveau inbegriffen.',
          },
        },
        {
          title: { en: 'Rigorous Testing & Quality Assurance', de: 'Strenge Tests & Qualitätssicherung' },
          description: {
            en: "We ruthlessly break things in our labs so your users never have to. Leveraging Appium, Selenium, and Espresso, we guarantee your app performs flawlessly on every device, OS version, and edge case.",
            de: 'Wir machen Dinge in unseren Labors rücksichtslos kaputt, damit Ihre Benutzer dies niemals tun müssen. Mit Appium, Selenium und Espresso garantieren wir eine fehlerfreie Leistung auf jedem Gerät.',
          },
        },
        {
          title: { en: 'Proactive Maintenance & Ongoing Support', de: 'Proaktive Wartung & Fortlaufender Support' },
          description: {
            en: 'We don’t just launch and vanish. When bugs arise, traffic spikes, or features need expanding, we are right there to fix, seamlessly scale, and update—all without toxic vendor lock-in. You retain 100% control.',
            de: 'Wir starten nicht einfach und verschwinden dann. Wenn Fehler auftreten, der Datenverkehr ansteigt oder Funktionen erweitert werden müssen, sind wir da, um nahtlos zu skalieren und zu aktualisieren – ohne Vendor-Lock-in.',
          },
        },
      ],
    },
    whyItWorks: {
      sectionTitle: { en: 'Why Mobile Teams Trust Us', de: 'Warum mobile Teams uns vertrauen' },
      items: [
        {
          title: { en: 'Uncompromising Performance', de: 'Kompromisslose Leistung' },
          description: {
            en: 'We obsess over delivering silky-smooth 60fps animations and near-instant load times across all supported devices.',
            de: 'Wir sind besessen davon, seidenweiche 60fps-Animationen und nahezu sofortige Ladezeiten auf allen unterstützten Geräten zu liefern.',
          },
        },
        {
          title: { en: 'Flawless Integrations', de: 'Fehlerfreie Integrationen' },
          description: {
            en: 'We expertly wire your mobile front-end to complex back-end APIs, IoT devices, and sprawling cloud architectures.',
            de: 'Wir verbinden Ihr mobiles Front-End fachmännisch mit komplexen Back-End-APIs, IoT-Geräten und weitläufigen Cloud-Architekturen.',
          },
        },
        {
          title: { en: 'User-Centric Architecture', de: 'Nutzerzentrierte Architektur' },
          description: {
            en: 'Every architectural decision is made to ensure the end-user experiences zero friction and total delight.',
            de: 'Jede Architekturentscheidung wird getroffen, um sicherzustellen, dass der Endnutzer null Reibung und absolute Freude erlebt.',
          },
        },
      ],
    },
    howWeWork: {
      sectionTitle: { en: 'Our Mobile Engineering Process', de: 'Unser mobiler Entwicklungsprozess' },
      items: [
        {
          title: { en: 'Deep Discovery & Requirements', de: 'Tiefe Discovery & Anforderungen' },
          description: {
            en: "We ruthlessly interrogate what you actually need, who is truly using it, and exactly what measurable success looks like.",
            de: 'Wir hinterfragen schonungslos, was Sie wirklich brauchen, wer es wirklich nutzt und wie messbarer Erfolg genau aussieht.',
          },
        },
        {
          title: { en: 'Behavioral Design & Prototyping', de: 'Verhaltensdesign & Prototyping' },
          description: {
            en: 'Crafting intelligent wireframes and highly-interactive working prototypes based on real-world human mobile behavior.',
            de: 'Erstellung intelligenter Wireframes und hochgradig interaktiver, funktionierender Prototypen basierend auf realem mobilem Verhalten.',
          },
        },
        {
          title: { en: 'Agile Development & Integration', de: 'Agile Entwicklung & Integration' },
          description: {
            en: 'Building rapidly in focused sprints, securely connecting to your APIs, and keeping momentum high.',
            de: 'Schnelles Bauen in fokussierten Sprints, sichere Verbindung zu Ihren APIs und Aufrechterhaltung der Dynamik.',
          },
        },
        {
          title: { en: 'Ruthless Testing & QA', de: 'Rücksichtslose Tests & QA' },
          description: {
            en: 'A punishing matrix of manual edge-case checks and automated tests to catch the breaks before anyone else does.',
            de: 'Eine strafende Matrix aus manuellen Edge-Case-Prüfungen und automatisierten Tests, um Fehler abzufangen, bevor es jemand anderes tut.',
          },
        },
        {
          title: { en: 'App Store Launch & Hyper-Care Support', de: 'App Store Launch & Hyper-Care-Support' },
          description: {
            en: 'Navigating the complex app store approvals, going live, monitoring vitals closely, and iterating continuously.',
            de: 'Navigieren durch die komplexen App-Store-Zulassungen, Live-Gang, genaue Überwachung der Vitalwerte und kontinuierliche Iteration.',
          },
        },
      ],
    },
    technologyStack: {
      sectionTitle: { en: 'Our Mobile Tech Stack', de: 'Unser mobiler Tech-Stack' },
      categories: [
        {
          category: { en: 'Mobile & UI Frameworks', de: 'Mobile & UI Frameworks' },
          items: 'React Native, Flutter, Swift, Kotlin, Expo, Metro',
        },
        {
          category: { en: 'Backend & Infrastructure', de: 'Backend & Infrastruktur' },
          items: 'Node.js, Firebase, Supabase, Google Cloud Platform (GCP), AWS',
        },
        {
          category: { en: 'DevOps & CI/CD Deployment', de: 'DevOps & CI/CD Deployment' },
          items: 'AWS Amplify, Bitrise, GitHub Actions, Fastlane',
        },
        {
          category: { en: 'QA & Automated Testing', de: 'QA & Automatisierte Tests' },
          items: 'Appium, Selenium, Espresso, XCTest, Detox',
        },
        {
          category: { en: 'Deep Integrations', de: 'Tiefe Integrationen' },
          items: 'Stripe, Apple Pay, Google Pay, Plaid, Salesforce CRM, Custom IoT APIs',
        },
      ],
    },
    faqs: [
      {
        q: {
          en: 'How incredibly fast can you start working on my mobile project?',
          de: 'Wie unglaublich schnell können Sie mit meinem mobilen Projekt beginnen?',
        },
        a: {
          en: 'We operate with immense urgency. We typically fully onboard new clients within 5–7 business days. For mission-critical MVPs or urgent feature work, we can align and deploy a dedicated squad even faster. Your kickoff covers exhaustive scoping, architecture alignment, and deep integration with your workflows so rapid delivery starts smoothly from day one.',
          de: 'Wir arbeiten mit immenser Dringlichkeit. In der Regel integrieren wir neue Kunden innerhalb von 5–7 Werktagen vollständig. Für unternehmenskritische MVPs oder dringende Funktionsarbeiten können wir ein engagiertes Team noch schneller bereitstellen.',
        },
      },
      {
        q: {
          en: 'Do I need to lock myself into a massive long-term contract?',
          de: 'Muss ich mich auf einen massiven langfristigen Vertrag einlassen?',
        },
        a: {
          en: 'Absolutely not. Our partnership model is intentionally hyper-flexible with zero toxic lock-in. You can begin with a highly-focused fixed-scope sprint, a targeted short-term engagement, or embed a dedicated team — whatever perfectly fits your agile roadmap. If you later choose to internalize the team, we actively support the transition without a single hiccup.',
          de: 'Absolut nicht. Unser Partnerschaftsmodell ist absichtlich hyperflexibel ohne toxischen Lock-in. Sie können mit einem hochfokussierten Sprint mit festem Umfang, einem gezielten kurzfristigen Engagement oder einem engagierten Team beginnen.',
        },
      },
      {
        q: {
          en: 'What makes SolutionPlus fundamentally different from traditional, slow outsourcing shops?',
          de: 'Was unterscheidet SolutionPlus grundlegend von traditionellen, langsamen Outsourcing-Shops?',
        },
        a: {
          en: 'We flat-out refuse to operate as a standard vendor; we act as a deeply integrated, product-obsessed extension of your own team. Every single engineer you work with is senior-level. Communication is ruthlessly structured and totally transparent, and project delivery is managed with strict German-led oversight. You retain absolute control of your intellectual property, your codebase, and your long-term product roadmap, all while gaining the stability of a tier-one engineering partner built for massive scale.',
          de: 'Wir weigern uns schlichtweg, als Standardanbieter zu agieren; wir agieren als tief integrierte, produktbesessene Erweiterung Ihres eigenen Teams. Jeder einzelne Ingenieur, mit dem Sie zusammenarbeiten, ist auf Senior-Niveau.',
        },
      },
    ],
    ctaTitle: { en: 'Let’s Build Your Next Top-Tier App', de: 'Lassen Sie uns Ihre nächste Top-Tier-App bauen' },
    ctaSubtitle: {
      en: 'Book a strategic consultation to supercharge your mobile presence.',
      de: 'Buchen Sie eine strategische Beratung, um Ihre mobile Präsenz aufzuladen.',
    },
  },
};
