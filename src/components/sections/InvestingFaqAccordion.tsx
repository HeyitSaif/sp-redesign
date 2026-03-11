'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { cn } from '@/lib/utils'

const FAQs = [
  {
    question: 'How do you approach investment risk management?',
    answer:
      'Our investment strategy is fundamentally built on thorough risk assessment and disciplined underwriting. We employ a multi-layered approach that begins with comprehensive due diligence, leveraging deep industry expertise and rigorous covenant analysis. Our team conducts extensive bottom-up research, examining each potential investment through multiple lenses – financial metrics, market conditions, operational capabilities, and potential value creation opportunities.',
  },
  {
    question: 'What makes your investment approach unique?',
    answer:
      "We distinguish ourselves through a flexible, value-oriented approach that spans both public and private markets. Our platform is designed to be opportunistic, allowing us to adapt quickly to changing market conditions. We're not constrained by a single investment strategy, but instead draw on a diverse set of credit strategies that enable us to identify and capitalize on unique investment opportunities across different market cycles.",
  },
  {
    question: 'How do you generate consistent returns in markets?',
    answer:
      'Consistency is achieved through our integrated platform and multi-strategy approach. We actively source deals through an extensive network of industry contacts, utilize deep sector specialization, and maintain operational capabilities that allow us to provide strategic guidance to portfolio companies. Our experience across multiple market cycles enables us to identify potential risks early and develop creative solutions that protect and enhance investor capital.',
  },
  {
    question: 'What types of investments do you focus on?',
    answer:
      'Our investment strategy encompasses a wide range of credit-related opportunities, including senior loans, high-yield bonds, multi-asset credit, structured credit, direct lending, and opportunistic credit investments. We have a particular focus on sectors where we can leverage our deep industry knowledge and operational expertise to create value.',
  },
  {
    question: 'How do you evaluate investment opportunities?',
    answer:
      'Our evaluation process is comprehensive and multi-dimensional. We begin with extensive sourcing through our robust network, followed by in-depth fundamental analysis. Our team combines quantitative financial modeling with qualitative assessments of management teams, industry trends, and potential operational improvements. We look beyond simple financial metrics to understand the full potential of an investment, considering factors like strategic positioning, market dynamics, and potential for value creation.',
  },
]

// German translations - mapped identically to English content since scraped site doesn't have de version of this section
const FAQs_DE = [
  {
    question: 'Wie gehen Sie mit dem Risikomanagement bei Investitionen um?',
    answer:
      'Unsere Anlagestrategie basiert auf einer gründlichen Risikobewertung und diszipliniertem Underwriting. Wir verfolgen einen mehrschichtigen Ansatz, der mit einer umfassenden Due-Diligence-Prüfung beginnt und dabei auf umfassende Branchenkenntnisse sowie strenge Covenants-Analysen zurückgreift. Unser Team führt umfangreiche Bottom-up-Analysen durch und untersucht jede potenzielle Investition aus mehreren Perspektiven – finanzielle Kennzahlen, Marktbedingungen, operative Fähigkeiten und potenzielle Möglichkeiten zur Wertschöpfung.',
  },
  {
    question: 'Was macht Ihren Anlageansatz einzigartig?',
    answer:
      'Wir zeichnen uns durch einen flexiblen, wertorientierten Ansatz aus, der sowohl öffentliche als auch private Märkte umfasst. Unsere Plattform ist opportunistisch ausgerichtet, so dass wir uns schnell an veränderte Marktbedingungen anpassen können. Wir sind nicht an eine einzige Anlagestrategie gebunden, sondern nutzen eine Vielzahl von Kreditstrategien, die es uns ermöglichen, einzigartige Anlagechancen in verschiedenen Marktzyklen zu erkennen und zu nutzen.',
  },
  {
    question: 'Wie erzielen Sie in den Märkten beständige Renditen?',
    answer:
      'Beständigkeit wird durch unsere integrierte Plattform und unseren Multi-Strategie-Ansatz erreicht. Wir suchen aktiv nach Transaktionen über ein umfangreiches Netzwerk von Branchenkontakten, nutzen tiefgehende Sektorspezialisierungen und unterhalten operative Fähigkeiten, die es uns ermöglichen, Portfoliounternehmen strategisch zu beraten. Unsere Erfahrung über mehrere Marktzyklen hinweg versetzt uns in die Lage, potenzielle Risiken frühzeitig zu erkennen und kreative Lösungen zu entwickeln, die das Kapital der Anleger schützen und mehren.',
  },
  {
    question: 'Auf welche Arten von Investitionen konzentrieren Sie sich?',
    answer:
      'Unsere Anlagestrategie umfasst eine breite Palette kreditbezogener Möglichkeiten, darunter Senior Loans, High-Yield-Anleihen, Multi-Asset-Credit, strukturiertes Fremdkapital, Direct Lending und opportunistische Kreditinvestitionen. Ein besonderer Schwerpunkt liegt dabei auf Sektoren, in denen wir unsere tiefen Branchenkenntnisse und unsere operative Expertise zur Wertschöpfung nutzen können.',
  },
  {
    question: 'Wie bewerten Sie Investitionsmöglichkeiten?',
    answer:
      'Unser Bewertungsprozess ist umfassend und mehrdimensional. Wir beginnen mit einem umfassenden Sourcing über unser robustes Netzwerk, gefolgt von einer tiefgehenden Fundamentalanalyse. Unser Team kombiniert quantitative Finanzmodellierung mit qualitativen Bewertungen von Managementteams, Branchentrends und potenziellen operativen Verbesserungen. Wir blicken über einfache Finanzkennzahlen hinaus, um das volle Potenzial einer Investition zu verstehen, und berücksichtigen Faktoren wie strategische Positionierung, Marktdynamik und das Potenzial zur Wertschöpfung.',
  },
]

export function InvestingFaqAccordion({ locale }: { locale: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0) // First open by default
  const isDe = locale === 'de'
  const items = isDe ? FAQs_DE : FAQs

  return (
    <div className="mx-auto w-full max-w-4xl space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index

        return (
          <div
            key={index}
            className="group border-sp-border-light/20 overflow-x-hidden border-b transition-colors"
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full items-center justify-between py-6 text-left outline-none"
              aria-expanded={isOpen}
            >
              <h3
                className={cn(
                  'text-xl font-semibold transition-colors md:text-2xl',
                  isOpen ? 'text-sp-accent' : 'text-sp-text-dark group-hover:text-sp-accent'
                )}
              >
                {item.question}
              </h3>
              <div
                className={cn(
                  'ml-6 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-300',
                  isOpen
                    ? 'border-sp-accent bg-sp-accent text-white'
                    : 'border-sp-border-light/30 text-sp-text-dark group-hover:border-sp-accent group-hover:text-sp-accent'
                )}
              >
                {isOpen ? <Minus size={20} /> : <Plus size={20} />}
              </div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                  <p className="text-sp-text-on-light pr-12 pb-8 text-lg leading-relaxed md:text-xl">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
