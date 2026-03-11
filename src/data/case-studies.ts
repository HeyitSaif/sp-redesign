import { type ReactNode } from 'react'

export type CaseStudyContent = {
  slug: string
  clientName: string
  tagline: string
  executiveSummary?: string
  industryBadge: string
  duration?: string
  deliveryModel?: string

  title: string
  intro: string | string[]

  challengeTitle: string
  challengeText?: string | string[]
  challengeTable?: { label: string; value: string }[]
  challengeBullets?: string[]

  quote?: string

  approachTitle?: string
  approachText?: string | string[]

  builtTitle?: string
  builtIntro?: string
  builtBullets?: { title?: string; desc: string }[]
  builtSections?: { title: string; desc?: string; bullets?: string[] }[]

  architectureTitle?: string
  architectureTable?: { col1: string; col2: string; col3: string }[]
  architectureText?: string | string[]

  tools?: string
  services?: string

  metricsTitle: string
  metricsTable: { label: string; value: string }[]

  resultsTitle?: string
  resultsIntro?: string
  resultsBullets?: { title: string; desc?: string }[]

  whyItWorkedTitle?: string
  whyItWorkedText?: string | string[]
  whyItWorkedPoints?: { title: string; desc: string }[]

  comparisonTitle?: string
  comparisonPoints?: { bad: string; good: string }[]

  keyMetricsPreview?: { label: string; value: string }[]

  testimonial?: { quote: string; author: string }

  keyTakeaway?: string
}

export const caseStudies: Record<'en' | 'de', CaseStudyContent[]> = {
  en: [
    {
      slug: 'tecsofiy',
      clientName: 'Tecsofy',
      tagline: 'Process-First Automation for B2B Operations',
      executiveSummary: 'Streamlined B2B operations by automating email routing and scheduling, eliminating coordination overhead within one week.',
      industryBadge: 'B2B Automation',
      title: 'Tecsofy » Process-First Automation for B2B Operations',
      duration: '4 Weeks',
      deliveryModel: 'Process Design & Automation',
      intro: 'Tecsofy manages customer communication across sales and service channels. As volume grew, so did the coordination load. Teams were spending more time managing handoffs than serving customers. The tools were there. The workflow logic was not.',
      challengeTitle: 'The Challenge',
      challengeTable: [
        { label: 'Email intake', value: 'Bundled requests parsed and forwarded manually, causing delays and missed items' },
        { label: 'Scheduling', value: 'Calendar coordination ran on repeated back-and-forth across teams' },
        { label: 'Inbox visibility', value: 'Customer communication lived in individual inboxes with no shared oversight' },
        { label: 'Existing automation', value: 'n8n was in place but lacked routing rules, ownership, or escalation logic' }
      ],
      quote: 'Automation built on top of unclear processes does not reduce inefficiency. It moves it faster.',
      approachTitle: 'Our Approach',
      approachText: 'Before touching any tooling, we mapped how work moved through the organization: how emails entered, how requests were interpreted, where responsibilities blurred, and where things stalled. Routing rules, escalation paths, and response responsibilities came first. Automation came second.',
      builtTitle: 'What We Built',
      builtBullets: [
        { title: 'Email Categorization', desc: 'Incoming sales emails are analyzed and categorized by intent. Multi-request emails are separated into individual tasks and routed to the correct owner. The inbox is no longer the process.' },
        { title: 'Scheduling Logic', desc: 'Calendar coordination runs on defined availability rules. Slots are proposed and confirmed automatically, connected directly to existing calendars and CRM workflows.' },
        { title: 'Inbox Visibility and Escalation', desc: 'Customer emails route into relevant Slack channels with structured notifications. Escalation triggers handle time-sensitive messages. No single person is responsible for monitoring everything.' }
      ],
      tools: 'n8n · Zapier · HubSpot · Slack · Telegram · Microsoft Teams',
      metricsTitle: 'Engagement at a Glance',
      metricsTable: [
        { label: 'Core workflows automated', value: 'Within first week' },
        { label: 'Email routing', value: 'Predictable and ownership-based' },
        { label: 'Scheduling overhead', value: 'Reduced without adding new software' },
        { label: 'Adoption', value: 'High — automation reflected existing process logic' },
        { label: 'Net outcome', value: 'Coordination time decreased, customer-facing work increased' }
      ],
      whyItWorkedTitle: 'Why This Engagement Worked',
      whyItWorkedText: 'By defining process logic before writing a single workflow, Tecsofy avoided the pattern of scaling broken processes. The automation running today reinforces structure. It did not create it.',
      whyItWorkedPoints: [
        { title: 'Process Before Technology', desc: 'We mapped how work moved before touching any tooling. Routing rules and ownership came before automation.' },
        { title: 'Quick Wins First', desc: 'Core automations were live within the first week. Early results built internal confidence and buy-in.' },
        { title: 'No Tool Sprawl', desc: 'We optimized what already existed instead of replacing it. No unnecessary rebuilds, no added complexity.' },
        { title: 'Sustainable Efficiency', desc: 'Automation that reflects real process logic gets used. Adoption was high because the system matched how people actually worked.' }
      ],
      keyMetricsPreview: [
        { label: 'Time to first automation', value: '1 week' },
        { label: 'Tools integrated', value: '6+' },
        { label: 'Coordination overhead', value: 'Eliminated' }
      ]
    },
    {
      slug: 'automotive-ai',
      clientName: 'Automotive AI',
      tagline: 'Building Two Automotive Platforms in Parallel',
      executiveSummary: 'Engineered two distinct, compliance-heavy automotive platforms simultaneously without coordination friction or architectural rework.',
      industryBadge: 'Automotive AI',
      title: 'Automotive AI (AAI) » Building Two Automotive Platforms in Parallel',
      duration: 'Ongoing',
      deliveryModel: 'Dedicated Teams',
      intro: 'Automotive AI GmbH delivers automotive intelligence and simulation solutions in a regulated, performance-critical environment. Their work supports safety-sensitive systems where traceability, validation, and technical reliability are non-negotiable.',
      challengeTitle: 'The Challenge',
      challengeText: 'AAI needed to build two independent products from scratch simultaneously, both reaching production-ready MVP stage on strict timelines. Each platform had to integrate with existing workflows, handle complex automotive data structures, and scale without architectural rework — all without creating coordination overhead between the two streams.\n\nThey needed a delivery partner who could take ownership and operate with minimal handholding.',
      approachTitle: 'Our Role',
      approachText: 'SolutionPlus joined as an embedded engineering partner, taking ownership of technical discovery, architecture design, estimation, and delivery planning across both products. Work was organized around clear milestones and predictable iteration cycles, with continuous alignment to AAI\'s internal teams. The standard was straightforward: build systems that hold up under regulatory and operational pressure, not just at launch.',
      builtTitle: 'What We Built',
      builtSections: [
        {
          title: 'Product 1: Safety Guidance and Analytics Framework (SGAF)',
          desc: 'A structured platform for managing and validating safety cases across the lifecycle of complex automotive systems, including autonomous vehicle environments.',
          bullets: [
            'Traceability between safety claims, regulatory origins, and mitigations',
            'Continuous monitoring of Safety Performance Indicators',
            'Automated detection of missing evidence and incomplete arguments',
            'Safety assertion decomposition across vehicle phases and lifecycle stages',
            'Compliance alignment with ISO 26262, ISO 21448 (SOTIF), and UL 4600'
          ]
        },
        {
          title: 'Product 2: NavDB — Navigation Database Management System',
          desc: 'A dedicated platform engineered for large-scale geospatial data management in automotive simulation and validation environments.',
          bullets: [
            'Optimized ingestion and processing pipelines for high-volume mapping datasets',
            'High-performance spatial query handling',
            'Secure access controls aligned with automotive compliance requirements',
            'Scalable architecture designed for long-term dataset growth without performance degradation'
          ]
        }
      ],
      metricsTitle: 'Engagement at a Glance',
      metricsTable: [
        { label: 'Platforms delivered', value: '2 production-ready systems, built in parallel' },
        { label: 'Delivery friction between streams', value: 'None' },
        { label: 'Architecture approach', value: 'Designed for extension, not replacement' },
        { label: 'Team continuity', value: 'Consistent technical lead across both products' },
        { label: 'Ongoing collaboration', value: 'Active, grounded in technical transparency' }
      ],
      whyItWorkedTitle: 'Why It Worked',
      whyItWorkedText: 'Domain familiarity shaped the decisions that mattered most. We invested time in understanding automotive safety logic, simulation tooling, and regulatory context before designing anything.',
      whyItWorkedPoints: [
        { title: 'Domain Immersion', desc: 'We invested time in understanding automotive workflows, constraints, and data realities before writing a single line of code.' },
        { title: 'Structure Meets Engineering Depth', desc: 'Berlin-connected delivery discipline paired with experienced engineering teams ensured clarity without compromising technical quality.' },
        { title: 'Transparent Execution', desc: 'Clear milestones, visible progress, and no surprises. AAI always knew where things stood.' },
        { title: 'Embedded Teams', desc: 'AAI worked with engineers who felt like an internal extension, without long-term hiring risk or lock-in.' }
      ],
      keyMetricsPreview: [
        { label: 'Platforms built', value: '2 in parallel' },
        { label: 'Delivery friction', value: 'Zero' },
        { label: 'Compliance', value: 'ISO 26262 + SOTIF' }
      ],
      testimonial: {
        quote: 'SolutionPlus delivered an automotive simulation platform with advanced mapping and visualization. Their attention to detail and ability to handle complex data sets made them the right partner for an industry as demanding as ours.',
        author: 'Automotive AI GmbH'
      }
    },
    {
      slug: 'democorder',
      clientName: 'Democorder',
      tagline: 'From Concept to Production-Ready B2B SaaS',
      executiveSummary: 'Refined the product concept to reduce scope by 28% and delivered a multi-tenant B2B SaaS platform in 6 months.',
      industryBadge: 'B2B SaaS',
      title: 'Democorder » From Concept Clarification to Production-Ready B2B SaaS',
      duration: '6 Months',
      deliveryModel: 'MVP Sprint',
      intro: 'Democorder approached us with a clear product ambition and no internal technical team. The founder had received proposals from several agencies ranging from $80K to $250K, each recommending a different stack and a different approach. The problem was not a shortage of options. It was the absence of a framework for evaluating them.',
      challengeTitle: 'What We Did First',
      challengeText: 'Before selecting any tooling, we tested the assumptions behind the product. User interviews and workflow mapping produced two findings that changed the direction of the build.',
      challengeBullets: [
        'Nearly 30% of the original feature scope did not address real user friction',
        'Multi-user governance and collaboration needs were significantly understated in the initial brief',
        'Three risks identified before writing a line of code: Over-architecting for scale that would not exist in year one, choosing a database model unsuitable for multi-tenant permissions, and underestimating integration complexity.'
      ],
      quote: 'Clarity came before code.',
      architectureTitle: 'Architecture Designed for Real Constraints',
      architectureText: 'The stack was chosen for maintainability and fit, not trend or familiarity.',
      architectureTable: [
        { col1: 'API', col2: 'Node.js + TypeScript + Express', col3: 'Clean, maintainable structure' },
        { col1: 'Frontend', col2: 'React + Tailwind', col3: 'Structured UI iteration without overhead' },
        { col1: 'Database', col2: 'PostgreSQL via Supabase', col3: 'Row-level security, no custom auth required' },
        { col1: 'Infrastructure', col2: 'AWS EC2 + Lambda', col3: 'Lean and production-ready from day one' }
      ],
      builtTitle: 'B2B-First System Design',
      builtIntro: 'Because Democorder required organization-level usage from the start, the database was structured around organizations, role-based permissions, shared resources, and tenant isolation at the database layer. Retrofitting permissions logic into a live multi-tenant system is expensive and disruptive. Building it correctly at the schema level meant the platform could support multiple teams without structural changes later.',
      metricsTitle: 'Engagement at a Glance',
      metricsTable: [
        { label: 'Concept to production-ready', value: '6 months' },
        { label: 'Engineering team', value: '3–5 developers, scaled by phase' },
        { label: 'Scope reduced through validation', value: '28%' },
        { label: 'Engineering time saved via architecture decisions', value: '~4–6 weeks' },
        { label: 'Critical production bugs in first 30 days', value: '0' },
        { label: 'Test coverage on critical user paths', value: '92%' }
      ],
      whyItWorkedTitle: 'Why This Engagement Worked',
      whyItWorkedText: 'The decisions that shaped this product were made before the first sprint, not during it.',
      whyItWorkedPoints: [
        { title: 'Thinking Partner, Not Just a Vendor', desc: 'We challenged assumptions, validated decisions, and refined the product continuously — from strategy to QA.' },
        { title: 'Founder-Aware Execution', desc: 'Resources scaled up or down based on phase needs. No fixed team overhead during planning phases.' },
        { title: 'End-to-End Ownership', desc: 'From strategy to QA, there was no handoff friction or context loss. The same technical lead was present throughout.' },
        { title: 'Validation Before Code', desc: 'Spending two weeks validating the problem changed what got built. Designing for real constraints changed how it held up.' }
      ],
      comparisonTitle: 'What Made This Different',
      comparisonPoints: [
        { bad: 'Jumped straight to wireframes without problem validation', good: 'Spent 2 weeks validating the problem was worth solving' },
        { bad: 'Proposed their favorite stack regardless of project needs', good: 'Recommended cheaper solutions where appropriate (saved ~$40K using Supabase)' },
        { bad: 'Required 6-month fixed contracts with upfront payment', good: 'Flexed team size up/down based on phase needs' },
        { bad: 'Context loss at each handoff between strategy, design, and dev', good: 'Maintained continuity with same technical lead across all phases' }
      ],
      keyMetricsPreview: [
        { label: 'Concept to production', value: '6 months' },
        { label: 'Scope cut via validation', value: '28%' },
        { label: 'Critical bugs on launch', value: '0' }
      ]
    },
    {
      slug: 'hospitality',
      clientName: 'Hotel Korona & Parkhotel',
      tagline: 'Turning Hospitality Websites into Direct Revenue Channels',
      executiveSummary: 'Designed and delivered dual hospitality platforms with integrated booking engines, reducing dependency on commission-heavy third parties.',
      industryBadge: 'Hospitality',
      title: 'Hotel Korona & Parkhotel Trebbin » Turning Hospitality Websites into Direct Revenue Channels',
      duration: '3 Months',
      deliveryModel: 'Digital Presence',
      intro: [
        '**Hotel Korona**: A castle-style seaside hotel in the Utes resort area, Crimea. The property offers 54 rooms, a swimming pool, private beach access, multiple dining options, and resort-level amenities.',
        '**Parkhotel Trebbin**: A family-run 3-star hotel near Berlin with 38 modern rooms, a regional restaurant, and flexible event spaces accommodating up to 100 guests.'
      ],
      challengeTitle: 'The Challenge',
      challengeText: 'Despite strong physical properties, both hotels shared the same structural problem:',
      challengeBullets: [
        'No meaningful digital presence',
        'No direct booking channel',
        'Heavy dependency on third-party booking platforms with high commission fees',
        'Limited ability to present rooms, amenities, or location advantages',
        'No consistent digital brand identity'
      ],
      approachTitle: 'Our Solution',
      approachText: 'SolutionPlus designed and delivered full-scale hospitality websites that function as both marketing platforms and direct booking engines. The objective was simple: reduce platform dependency and give the hotels ownership over their bookings, pricing, and customer relationships.',
      builtTitle: 'What We Built',
      builtSections: [
        {
          title: 'Hotel Korona (hotelkorona.ru)',
          bullets: [
            'Multilingual website showcasing all 54 rooms with clear categorization and pricing',
            'Integrated direct booking system with real-time availability',
            'Visual storytelling through curated photo galleries highlighting the beach, pool, restaurants, and architecture',
            'WhatsApp and contact form integration for immediate guest communication',
            'Mobile-first experience for international and seasonal travelers'
          ]
        },
        {
          title: 'Parkhotel Trebbin (parkhotel-trebbin.de)',
          bullets: [
            'Modern multilingual website aligned with 3-star positioning',
            'Clear room categorization (single, double, suites) with integrated booking engine',
            'Dedicated sections for restaurant and event spaces to support additional revenue streams',
            'Location and accessibility content for Berlin and Potsdam visitors',
            'Professional presentation designed to build trust with both leisure and business guests'
          ]
        }
      ],
      services: 'Planning, Project Management, Design, Frontend Development, Backend Development, QA, Google Analytics & Search Console',
      metricsTitle: 'The Results',
      metricsTable: [
        { label: 'Direct Revenue Ownership', value: 'Both hotels now capture bookings directly, significantly reducing reliance on commission-heavy platforms.' },
        { label: 'Stronger Digital Marketing', value: 'Websites function as always-on sales assets, presenting rooms clearly.' },
        { label: 'Established Brand Presence', value: 'Each property now has a credible, competitive digital identity.' },
        { label: 'Lower Booking Friction', value: 'Guests can move seamlessly from discovery to reservation.' },
        { label: 'More Predictable Revenue', value: 'Control over pricing, availability, and promotions enables better planning.' }
      ],
      whyItWorkedTitle: 'Why This Partnership Worked',
      whyItWorkedPoints: [
        { title: 'Hospitality-Focused Thinking', desc: 'We designed around booking behavior, seasonality, and revenue pressure — not generic web templates.' },
        { title: 'End-to-End Ownership', desc: 'From strategy to launch, the hotels worked with one accountable partner through every stage.' },
        { title: 'User-Centric Design', desc: 'Every page was built to reduce friction in the guest booking journey, from discovery to reservation.' },
        { title: 'Reliable Technical Integration', desc: 'Booking systems were treated as revenue-critical infrastructure, not add-ons.' }
      ],
      keyMetricsPreview: [
        { label: 'Hotels launched', value: '2 properties' },
        { label: 'Booking model', value: 'Direct revenue' },
        { label: 'Services', value: 'Full-stack' }
      ],
      keyTakeaway: 'A hotel website is not a brochure. It\'s a revenue engine.'
    }
  ],
  de: [
    {
      slug: 'tecsofiy',
      clientName: 'Tecsofy',
      tagline: 'Prozessorientierte Automation für B2B-Betriebe',
      executiveSummary: 'Optimierte B2B-Prozesse durch Automatisierung von E-Mail-Routing und Terminplanung, was den Koordinationsaufwand innerhalb einer Woche eliminierte.',
      industryBadge: 'B2B Automation',
      title: 'Tecsofy » Prozessorientierte Automation für B2B-Betriebe',
      duration: '4 Wochen',
      deliveryModel: 'Prozessdesign & Automatisierung',
      intro: 'Tecsofy steuert die Kundenkommunikation über Vertriebs- und Servicekanäle. Mit wachsendem Volumen stieg auch der Koordinationsaufwand. Teams verbrachten mehr Zeit mit der Handhabung von Übergaben als mit der Kundenbetreuung. Die Tools waren vorhanden. Die Workflow-Logik nicht.',
      challengeTitle: 'Die Herausforderung',
      challengeTable: [
        { label: 'E-Mail-Eingang', value: 'Gebündelte Anfragen wurden manuell geparst und weitergeleitet, was zu Verzögerungen und übersehenen Punkten führte' },
        { label: 'Terminplanung', value: 'Kalenderkoordination lief über ständiges Hin und Her zwischen Teams' },
        { label: 'Posteingang-Sichtbarkeit', value: 'Kundenkommunikation lag in einzelnen Postfächern ohne gemeinsame Übersicht' },
        { label: 'Bestehende Automation', value: 'n8n war im Einsatz, fehlte aber Routing-Regeln, Verantwortlichkeiten oder Eskalationslogik' }
      ],
      quote: 'Automation auf unklaren Prozessen reduziert keine Ineffizienz. Sie beschleunigt sie.',
      approachTitle: 'Unser Ansatz',
      approachText: 'Bevor wir ein Tool anfassten, haben wir kartiert, wie Arbeit durch die Organisation fließt: wie E-Mails eingehen, wie Anfragen interpretiert werden, wo Verantwortlichkeiten verschwimmen und wo es hakt. Routing-Regeln, Eskalationspfade und Verantwortlichkeiten kamen zuerst. Automation danach.',
      builtTitle: 'Was wir gebaut haben',
      builtBullets: [
        { title: 'E-Mail-Kategorisierung', desc: 'Eingehende Vertriebs-E-Mails werden nach Absicht analysiert und kategorisiert. Mehrfachanfragen werden in einzelne Aufgaben getrennt und dem richtigen Verantwortlichen zugeordnet. Der Posteingang ist nicht mehr der Prozess.' },
        { title: 'Terminplanungslogik', desc: 'Kalenderkoordination läuft über definierte Verfügbarkeitsregeln. Slots werden automatisch vorgeschlagen und bestätigt, direkt an bestehende Kalender und CRM-Workflows angebunden.' },
        { title: 'Posteingang-Sichtbarkeit und Eskalation', desc: 'Kunden-E-Mails werden in relevante Slack-Kanäle mit strukturierten Benachrichtigungen geleitet. Eskalationstrigger bearbeiten zeitkritische Nachrichten. Keine Einzelperson ist für die Überwachung alles verantwortlich.' }
      ],
      tools: 'n8n · Zapier · HubSpot · Slack · Telegram · Microsoft Teams',
      metricsTitle: 'Engagement auf einen Blick',
      metricsTable: [
        { label: 'Kern-Workflows automatisiert', value: 'Innerhalb der ersten Woche' },
        { label: 'E-Mail-Routing', value: 'Vorhersehbar und verantwortungsbasiert' },
        { label: 'Terminplanungsaufwand', value: 'Reduziert ohne neue Software' },
        { label: 'Adoption', value: 'Hoch — Automation basiert auf bestehender Prozesslogik' },
        { label: 'Nettoergebnis', value: 'Koordinationszeit gesenkt, kundenorientierte Arbeit gestiegen' }
      ],
      whyItWorkedTitle: 'Warum dieses Engagement funktioniert hat',
      whyItWorkedText: 'Indem Tecsofy die Prozesslogik vor dem ersten Workflow definierte, wurde das Muster des Skalierens ineffizienter Prozesse vermieden.',
      whyItWorkedPoints: [
        { title: 'Prozess vor Technologie', desc: 'Wir haben kartiert, wie Arbeit fließt, bevor wir ein Tool anfassten. Routing-Regeln und Verantwortlichkeiten kamen vor der Automation.' },
        { title: 'Schnelle Ergebnisse zuerst', desc: 'Kern-Automationen waren innerhalb der ersten Woche live. Frühe Ergebnisse bauten internes Vertrauen und Akzeptanz auf.' },
        { title: 'Kein Tool-Wildwuchs', desc: 'Wir optimierten, was bereits existierte, statt es zu ersetzen. Keine unnötigen Neubauten, keine zusätzliche Komplexität.' },
        { title: 'Nachhaltige Effizienz', desc: 'Automation, die echte Prozesslogik widerspiegelt, wird genutzt. Adoption war hoch, weil das System dem tatsächlichen Arbeitsablauf entsprach.' }
      ],
      keyMetricsPreview: [
        { label: 'Zeit bis erste Automation', value: '1 Woche' },
        { label: 'Integrierte Tools', value: '6+' },
        { label: 'Koordinationsaufwand', value: 'Eliminiert' }
      ]
    },
    {
      slug: 'automotive-ai',
      clientName: 'Automotive AI',
      tagline: 'Zwei Automotive-Plattformen parallel im Aufbau',
      executiveSummary: 'Entwickelte zwei separate, compliance-kritische Automotive-Plattformen parallel ohne Koordinationsprobleme oder Architektur-Nachbesserungen.',
      industryBadge: 'Automotive AI',
      title: 'Automotive AI (AAI) » Zwei Automotive-Plattformen parallel im Aufbau',
      duration: 'Laufend',
      deliveryModel: 'Dedizierte Teams',
      intro: 'Automotive AI GmbH liefert Automotive Intelligence und Simulationslösungen in einem regulierten, leistungskritischen Umfeld. Ihre Arbeit unterstützt sicherheitsrelevante Systeme, bei denen Rückverfolgbarkeit, Validierung und technische Zuverlässigkeit nicht verhandelbar sind.',
      challengeTitle: 'Die Herausforderung',
      challengeText: 'AAI musste zwei unabhängige Produkte gleichzeitig von Grund auf aufbauen, beide mit strengen Zeitplänen bis zur produktionsreifen MVP-Phase. Jede Plattform musste sich in bestehende Workflows integrieren, komplexe Automotive-Datenstrukturen verarbeiten und ohne Architekturumbau skalieren – ohne Koordinationsaufwand zwischen den beiden Strängen.\n\nSie brauchten einen Delivery-Partner, der Verantwortung übernimmt und mit minimaler Handholding arbeitet.',
      approachTitle: 'Unsere Rolle',
      approachText: 'SolutionPlus trat als eingebetteter Engineering-Partner bei und übernahm technische Discovery, Architekturdesign, Schätzung und Delivery-Planung für beide Produkte. Die Arbeit war um klare Meilensteine und vorhersehbare Iterationszyklen organisiert, mit kontinuierlicher Abstimmung mit AAIs internen Teams. Der Standard war klar: Systeme bauen, die unter regulatorischem und betrieblichem Druck bestehen – nicht nur beim Launch.',
      builtTitle: 'Was wir gebaut haben',
      builtSections: [
        {
          title: 'Produkt 1: Safety Guidance and Analytics Framework (SGAF)',
          desc: 'Eine strukturierte Plattform zur Verwaltung und Validierung von Safety Cases über den Lebenszyklus komplexer Automotive-Systeme, einschließlich autonomer Fahrzeugumgebungen.',
          bullets: [
            'Rückverfolgbarkeit zwischen Safety Claims, regulatorischen Ursprüngen und Mitigations',
            'Kontinuierliche Überwachung von Safety Performance Indicators',
            'Automatische Erkennung fehlender Nachweise und unvollständiger Argumente',
            'Zerlegung von Safety-Assertions über Fahrzeugphasen und Lebenszyklusstufen',
            'Compliance-Ausrichtung mit ISO 26262, ISO 21448 (SOTIF) und UL 4600'
          ]
        },
        {
          title: 'Produkt 2: NavDB — Navigation Database Management System',
          desc: 'Eine dedizierte Plattform für großskaliges Geodatenmanagement in Automotive-Simulation und -Validierung.',
          bullets: [
            'Optimierte Ingestion- und Verarbeitungspipelines für hochvolumige Kartendatensätze',
            'Hochperformante räumliche Abfragen',
            'Sichere Zugriffskontrollen gemäß Automotive-Compliance',
            'Skalierbare Architektur für langfristiges Datenwachstum ohne Leistungsverlust'
          ]
        }
      ],
      metricsTitle: 'Engagement auf einen Blick',
      metricsTable: [
        { label: 'Gelieferte Plattformen', value: '2 produktionsreife Systeme, parallel im Aufbau' },
        { label: 'Reibung zwischen Strängen', value: 'Keine' },
        { label: 'Architekturansatz', value: 'Für Erweiterung, nicht Ersatz konzipiert' },
        { label: 'Team-Kontinuität', value: 'Konsistente technische Leitung für beide Produkte' },
        { label: 'Laufende Zusammenarbeit', value: 'Aktiv, auf technischer Transparenz basierend' }
      ],
      whyItWorkedTitle: 'Warum es funktioniert hat',
      whyItWorkedText: 'Domänenkenntnis prägte die wichtigsten Entscheidungen. Wir investierten Zeit in das Verständnis von Automotive-Safety-Logik und regulatorischem Kontext, bevor wir etwas entwarfen.',
      whyItWorkedPoints: [
        { title: 'Domänen-Immersion', desc: 'Wir investierten Zeit in das Verständnis von Automotive-Workflows, Einschränkungen und Datenschwerpunkten, bevor eine einzige Codezeile geschrieben wurde.' },
        { title: 'Struktur trifft Engineering-Tiefe', desc: 'Berlin-verknüpfte Delivery-Disziplin gepaart mit erfahrenen Engineering-Teams sicherte Klarheit ohne technische Kompromisse.' },
        { title: 'Transparente Ausführung', desc: 'Klare Meilensteine, sichtbarer Fortschritt und keine Überraschungen. AAI wusste jederzeit, wo die Dinge standen.' },
        { title: 'Eingebettete Teams', desc: 'AAI arbeitete mit Ingenieuren, die wie eine interne Erweiterung wirkten – ohne langfristiges Einstellungsrisiko oder Abhängigkeit.' }
      ],
      keyMetricsPreview: [
        { label: 'Gebaute Plattformen', value: '2 parallel' },
        { label: 'Delivery-Reibung', value: 'Null' },
        { label: 'Compliance', value: 'ISO 26262 + SOTIF' }
      ],
      testimonial: {
        quote: 'SolutionPlus delivered an automotive simulation platform with advanced mapping and visualization. Their attention to detail and ability to handle complex data sets made them the right partner for an industry as demanding as ours.',
        author: 'Automotive AI GmbH'
      }
    },
    {
      slug: 'democorder',
      clientName: 'Democorder',
      tagline: 'Von der Konzeptklärung zum produktionsreifen B2B-SaaS',
      executiveSummary: 'Verfeinerte das Produktkonzept, um den Umfang um 28 % zu reduzieren, und lieferte in 6 Monaten eine mandantenfähige B2B-SaaS-Plattform.',
      industryBadge: 'B2B SaaS',
      title: 'Democorder » Von der Konzeptklärung zum produktionsreifen B2B-SaaS',
      duration: '6 Monate',
      deliveryModel: 'MVP Sprint',
      intro: 'Democorder kam mit klarem Produktambition und ohne internes Technik-Team zu uns. Der Gründer hatte Angebote von mehreren Agenturen zwischen 80.000 und 250.000 € erhalten, mit unterschiedlichen Stacks und Ansätzen. Das Problem war nicht der Mangel an Optionen. Es war das Fehlen eines Rahmens zur Bewertung.\n\nDie erste Frage war nicht, welchen Stack zu verwenden. Sondern: Was soll tatsächlich gebaut werden, in welcher Reihenfolge, unter realen Bedingungen.',
      challengeTitle: 'Was wir zuerst taten',
      challengeText: 'Vor der Auswahl eines Tools testeten wir die Annahmen hinter dem Produkt. Nutzerinterviews und Workflow-Mapping ergaben zwei Erkenntnisse, die die Richtung des Builds änderten.',
      challengeBullets: [
        'Fast 30 % des ursprünglichen Feature-Umfangs adressierten keine echte Nutzerreibung',
        'Multi-User-Governance und Kollaborationsbedarf waren im initialen Brief deutlich unterbewertet',
        'Drei Risiken vor der ersten Codezeile identifiziert: Over-engineering für Skalierung, die im ersten Jahr nicht existieren würde, ein Datenbankmodell, das für Multi-Tenant-Berechtigungen ungeeignet ist, und Unterschätzung der Integrationskomplexität.'
      ],
      quote: 'Klarheit vor Code.',
      architectureTitle: 'Architektur für reale Bedingungen',
      architectureText: 'Der Stack wurde auf Wartbarkeit und Passung gewählt, nicht auf Trend oder Vertrautheit.',
      architectureTable: [
        { col1: 'API', col2: 'Node.js + TypeScript + Express', col3: 'Saubere, wartbare Struktur' },
        { col1: 'Frontend', col2: 'React + Tailwind', col3: 'Strukturierte UI-Iteration ohne Overhead' },
        { col1: 'Datenbank', col2: 'PostgreSQL via Supabase', col3: 'Row-Level-Security, kein Custom-Auth' }
      ],
      builtTitle: 'B2B-First System Design',
      builtIntro: 'Weil Democorder von Beginn an eine organisationsübergreifende Nutzung erforderte, wurde die Datenbank rund um Organisationen, rollenbasierte Berechtigungen und Tenant-Isolation aufgebaut.',
      metricsTitle: 'Engagement auf einen Blick',
      metricsTable: [
        { label: 'Konzept bis produktionsreif', value: '6 Monate' },
        { label: 'Engineering-Team', value: '3–5 Entwickler, phasenweise skaliert' },
        { label: 'Umfang durch Validierung reduziert', value: '28 %' },
        { label: 'Engineering-Zeit durch Architektur gespart', value: '~4–6 Wochen' }
      ],
      whyItWorkedTitle: 'Warum dieses Engagement funktioniert hat',
      whyItWorkedText: 'Die Entscheidungen, die dieses Produkt prägten, wurden vor dem ersten Sprint getroffen, nicht währenddessen.',
      whyItWorkedPoints: [
        { title: 'Denkpartner, kein Dienstleister', desc: 'Wir hinterfragten Annahmen, validierten Entscheidungen und verfeinerten das Produkt kontinuierlich – von Strategie bis QA.' },
        { title: 'Founder-bewusste Ausführung', desc: 'Ressourcen skaliert nach Phasenbedarf. Keine fixen Team-Kosten in Planungsphasen.' },
        { title: 'End-to-End-Verantwortung', desc: 'Von Strategie bis QA kein Übergabeverlust. Dieselbe technische Führung war durchgehend präsent.' },
        { title: 'Validierung vor Code', desc: 'Zwei Wochen Problemvalidierung änderten, was gebaut wurde. Architektur für reale Einschränkungen änderte, wie es standhält.' }
      ],
      comparisonTitle: 'Was uns unterscheidet',
      comparisonPoints: [
        { bad: 'Sofort zu Wireframes gesprungen ohne Problemvalidierung', good: '2 Wochen für Problemvalidierung investiert' },
        { bad: 'Lieblingsstack empfohlen unabhängig von Projektbedarf', good: 'Günstigere Lösungen empfohlen, wo geeignet (ca. 40.000 € gespart via Supabase)' },
        { bad: '6-Monats-Festverträge mit Vorauszahlung gefordert', good: 'Teamgröße je nach Phasenbedarf flexibel angepasst' },
        { bad: 'Kontextverlust bei jedem Handoff zwischen Strategie, Design und Dev', good: 'Dieselbe technische Leitung über alle Phasen hinweg' }
      ],
      keyMetricsPreview: [
        { label: 'Konzept bis Produktion', value: '6 Monate' },
        { label: 'Umfang durch Validierung', value: '-28 %' },
        { label: 'Kritische Bugs bei Launch', value: '0' }
      ]
    },
    {
      slug: 'hospitality',
      clientName: 'Hotel Korona & Parkhotel',
      tagline: 'Von Hospitality-Websites zu direkten Umsatzkanälen',
      executiveSummary: 'Entwickelte zwei Hospitality-Plattformen mit integrierten Buchungssystemen, was die Abhängigkeit von teuren Drittanbietern reduzierte.',
      industryBadge: 'Hospitality',
      title: 'Hotel Korona & Parkhotel Trebbin » Von Hospitality-Websites zu direkten Umsatzkanälen',
      duration: '3 Monate',
      deliveryModel: 'Digitale Präsenz',
      intro: [
        '**Hotel Korona**: Ein Schloss-artiges Strandhotel im Utes-Resort, Krim. 54 Zimmer, Swimmingpool, Privatstrand, mehrere Restaurants und Resort-Amenities.',
        '**Parkhotel Trebbin**: Ein familiengeführtes 3-Sterne-Hotel bei Berlin mit 38 modernen Zimmern, regionalem Restaurant und flexiblen Event-Spaces für bis zu 100 Gäste.'
      ],
      challengeTitle: 'Die Herausforderung',
      challengeText: 'Trotz starker physischer Anlagen teilten beide Hotels dasselbe strukturelle Problem:',
      challengeBullets: [
        'Keine sinnvolle digitale Präsenz',
        'Kein direkter Buchungskanal',
        'Starke Abhängigkeit von Buchungsplattformen mit hohen Provisionen',
        'Begrenzte Möglichkeit, Zimmer, Ausstattung oder Standortvorteile darzustellen',
        'Keine konsistente digitale Markenidentität'
      ],
      approachTitle: 'Unsere Lösung',
      approachText: 'SolutionPlus designed und lieferte vollständige Hospitality-Websites, die sowohl als Marketingplattformen als auch als direkte Buchungsmaschinen dienen. Das Ziel war einfach: Plattformabhängigkeit reduzieren und den Hotels die Kontrolle über Buchungen, Preise und Kundenbeziehungen geben.',
      builtTitle: 'Was wir gebaut haben',
      builtSections: [
        {
          title: 'Hotel Korona (hotelkorona.ru)',
          bullets: [
            'Mehrsprachige Website mit allen 54 Zimmern, klarer Kategorisierung und Preisen',
            'Integriertes Direktbuchungssystem mit Echtzeit-Verfügbarkeit',
            'Visuelle Storytelling durch kuratierte Fotogalerien',
            'WhatsApp- und Kontaktformular-Integration für direkte Gästekommunikation',
            'Mobile-first für internationale und saisonale Reisende'
          ]
        },
        {
          title: 'Parkhotel Trebbin (parkhotel-trebbin.de)',
          bullets: [
            'Moderne mehrsprachige Website im 3-Sterne-Positioning',
            'Klare Zimmerkategorisierung (Einzel, Doppel, Suiten) mit integrierter Buchungsmaschine',
            'Eigene Bereiche für Restaurant und Event-Spaces',
            'Standort- und Erreichbarkeitsinhalte für Berlin- und Potsdam-Besucher',
            'Professionelle Darstellung für Freizeit- und Geschäftsgäste'
          ]
        }
      ],
      services: 'Planung, Projektmanagement, Design, Frontend & Backend Entwicklung, QA',
      metricsTitle: 'Die Ergebnisse',
      metricsTable: [
        { label: 'Direkte Umsatzkontrolle', value: 'Beide Hotels erfassen Buchungen direkt' },
        { label: 'Stärkere digitale Marketingfähigkeit', value: 'Etablierte Markenpräsenz' },
        { label: 'Geringere Buchungsreibung', value: 'Vorhersehbarere Umsatzpipeline' }
      ],
      whyItWorkedTitle: 'Warum diese Partnerschaft funktioniert hat',
      whyItWorkedPoints: [
        { title: 'Hospitality-fokussiertes Denken', desc: 'Wir haben rund um Buchungsverhalten, Saisonalität und Umsatzdruck konzipiert – nicht mit generischen Web-Vorlagen.' },
        { title: 'End-to-End-Verantwortung', desc: 'Von Strategie bis Launch arbeiteten die Hotels mit einem verantwortlichen Partner durch jede Phase.' },
        { title: 'Nutzerzentriertes Design', desc: 'Jede Seite wurde gebaut, um die Reibung im Buchungsprozess zu reduzieren – von der Entdeckung bis zur Buchung.' },
        { title: 'Zuverlässige technische Integration', desc: 'Buchungssysteme wurden als umsatzkritische Infrastruktur behandelt, nicht als Add-ons.' }
      ],
      keyMetricsPreview: [
        { label: 'Gestartete Hotels', value: '2 Standorte' },
        { label: 'Buchungsmodell', value: 'Direktumsatz' },
        { label: 'Services', value: 'Full-Stack' }
      ],
      keyTakeaway: 'Eine Hotelwebsite ist keine Broschüre. Sie ist eine Umsatzmaschine.'
    }
  ]
}
