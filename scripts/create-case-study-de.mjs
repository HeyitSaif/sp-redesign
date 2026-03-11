#!/usr/bin/env node
/**
 * Creates German (de) versions of case study text files.
 * Run after convert-case-studies-to-txt.sh to ensure both en/ and de/ exist.
 * German content is maintained here; update when English source changes.
 */

import { writeFileSync, mkdirSync } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const SCRAPED_DIR = join(__dirname, '..', 'docs', 'scraped')
const DE_DIR = join(SCRAPED_DIR, 'de')

const translations = {
  'tecsofy-case-study': `Fallstudie: Tecsofy
Tecsofy » Prozessorientierte Automation für B2B-Betriebe

Tecsofy steuert die Kundenkommunikation über Vertriebs- und Servicekanäle. Mit wachsendem Volumen stieg auch der Koordinationsaufwand. Teams verbrachten mehr Zeit mit der Handhabung von Übergaben als mit der Kundenbetreuung. Die Tools waren vorhanden. Die Workflow-Logik nicht.

Die Herausforderung

Bereich                    Problem
E-Mail-Eingang             Gebündelte Anfragen wurden manuell geparst und weitergeleitet, was zu Verzögerungen und übersehenen Punkten führte
Terminplanung              Kalenderkoordination lief über ständiges Hin und Her zwischen Teams
Posteingang-Sichtbarkeit    Kundenkommunikation lag in einzelnen Postfächern ohne gemeinsame Übersicht
Bestehende Automation      n8n war im Einsatz, fehlte aber Routing-Regeln, Verantwortlichkeiten oder Eskalationslogik

Automation auf unklaren Prozessen reduziert keine Ineffizienz. Sie beschleunigt sie.

Unser Ansatz

Bevor wir ein Tool anfassten, haben wir kartiert, wie Arbeit durch die Organisation fließt: wie E-Mails eingehen, wie Anfragen interpretiert werden, wo Verantwortlichkeiten verschwimmen und wo es hakt. Routing-Regeln, Eskalationspfade und Verantwortlichkeiten kamen zuerst. Automation danach.

Was wir gebaut haben

• E-Mail-Kategorisierung
  Eingehende Vertriebs-E-Mails werden nach Absicht analysiert und kategorisiert. Mehrfachanfragen werden in einzelne Aufgaben getrennt und dem richtigen Verantwortlichen zugeordnet. Der Posteingang ist nicht mehr der Prozess.

• Terminplanungslogik
  Kalenderkoordination läuft über definierte Verfügbarkeitsregeln. Slots werden automatisch vorgeschlagen und bestätigt, direkt an bestehende Kalender und CRM-Workflows angebunden.

• Posteingang-Sichtbarkeit und Eskalation
  Kunden-E-Mails werden in relevante Slack-Kanäle mit strukturierten Benachrichtigungen geleitet. Eskalationstrigger bearbeiten zeitkritische Nachrichten. Keine Einzelperson ist für die Überwachung alles verantwortlich.

Tools und Integrationen

n8n · Zapier · HubSpot · Slack · Telegram · Microsoft Teams

Die Architektur ist schlank und modular. Erweiterte Automation kann ohne strukturelle Änderungen ergänzt werden.

Engagement auf einen Blick

Metrik                    Ergebnis
Kern-Workflows automatisiert   Innerhalb der ersten Woche
E-Mail-Routing                  Vorhersehbar und verantwortungsbasiert
Terminplanungsaufwand           Reduziert ohne neue Software
Adoption                        Hoch — Automation basiert auf bestehender Prozesslogik
Nettoergebnis                   Koordinationszeit gesenkt, kundenorientierte Arbeit gestiegen

Warum dieses Engagement funktioniert hat

Automation auf unklaren Prozessen löst das Problem nicht. Sie skaliert es.
Indem Tecsofy die Prozesslogik vor dem ersten Workflow definierte, hat das Unternehmen dieses Muster vermieden. Die heute laufende Automation verstärkt Struktur. Sie hat sie nicht geschaffen.

Bereit, Ihre Abläufe zu automatisieren, ohne den Betrieb zu stören?
Lassen Sie uns Ihre Workflows prüfen, bevor Sie ein weiteres Tool einführen.
`,

  'aai-case-study': `Fallstudie: Automotive AI (AAI)
Automotive AI (AAI) » Zwei Automotive-Plattformen parallel im Aufbau

Automotive AI GmbH liefert Automotive Intelligence und Simulationslösungen in einem regulierten, leistungskritischen Umfeld. Ihre Arbeit unterstützt sicherheitsrelevante Systeme, bei denen Rückverfolgbarkeit, Validierung und technische Zuverlässigkeit nicht verhandelbar sind.

Die Herausforderung

AAI musste zwei unabhängige Produkte gleichzeitig von Grund auf aufbauen, beide mit strengen Zeitplänen bis zur produktionsreifen MVP-Phase. Jede Plattform musste sich in bestehende Workflows integrieren, komplexe Automotive-Datenstrukturen verarbeiten und ohne Architekturumbau skalieren – ohne Koordinationsaufwand zwischen den beiden Strängen.

Sie brauchten einen Delivery-Partner, der Verantwortung übernimmt und mit minimaler Handholding arbeitet.

Unsere Rolle

SolutionPlus trat als eingebetteter Engineering-Partner bei und übernahm technische Discovery, Architekturdesign, Schätzung und Delivery-Planung für beide Produkte. Die Arbeit war um klare Meilensteine und vorhersehbare Iterationszyklen organisiert, mit kontinuierlicher Abstimmung mit AAIs internen Teams. Der Standard war klar: Systeme bauen, die unter regulatorischem und betrieblichem Druck bestehen – nicht nur beim Launch.

Produkt 1: Safety Guidance and Analytics Framework (SGAF)

Eine strukturierte Plattform zur Verwaltung und Validierung von Safety Cases über den Lebenszyklus komplexer Automotive-Systeme, einschließlich autonomer Fahrzeugumgebungen.

Kernfunktionen:
• Rückverfolgbarkeit zwischen Safety Claims, regulatorischen Ursprüngen und Mitigations
• Kontinuierliche Überwachung von Safety Performance Indicators
• Automatische Erkennung fehlender Nachweise und unvollständiger Argumente
• Zerlegung von Safety-Assertions über Fahrzeugphasen und Lebenszyklusstufen
• Compliance-Ausrichtung mit ISO 26262, ISO 21448 (SOTIF) und UL 4600

Die Plattform dient als Single Source of Truth für Safety-Logik, Dokumentation und Validierungsnachweise.

Produkt 2: NavDB — Navigation Database Management System

Eine dedizierte Plattform für großskaliges Geodatenmanagement in Automotive-Simulation und -Validierung.

Kernfunktionen:
• Optimierte Ingestion- und Verarbeitungspipelines für hochvolumige Kartendatensätze
• Hochperformante räumliche Abfragen
• Sichere Zugriffskontrollen gemäß Automotive-Compliance
• Skalierbare Architektur für langfristiges Datenwachstum ohne Leistungsverlust

Engagement auf einen Blick

Bereich                        Ergebnis
Gelieferte Plattformen         2 produktionsreife Systeme, parallel im Aufbau
Reibung zwischen Strängen      Keine
Architekturansatz               Für Erweiterung, nicht Ersatz konzipiert
Team-Kontinuität                Konsistente technische Leitung für beide Produkte
Laufende Zusammenarbeit        Aktiv, auf technischer Transparenz basierend

Warum es funktioniert hat

Domänenkenntnis prägte die wichtigsten Entscheidungen. Wir investierten Zeit in das Verständnis von Automotive-Safety-Logik, Simulationstools und regulatorischem Kontext, bevor wir etwas entwarfen. Meilenstein-basierte Ausführung hielt zwei parallele Workstreams ausgerichtet und Unsicherheit managbar.

Bereit, etwas zu bauen, das unter Druck standhält?
Sprechen wir über Ihr Produkt und wie man es von Anfang an richtig aufbaut.
`,

  'hospitality-case-study': `Fallstudie: Hotel Korona & Parkhotel Trebbin
Von Hospitality-Websites zu direkten Umsatzkanälen

Die Kunden

Hotel Korona
Ein Schloss-artiges Strandhotel im Utes-Resort, Krim. 54 Zimmer, Swimmingpool, Privatstrand, mehrere Restaurants und Resort-Amenities.

Parkhotel Trebbin
Ein familiengeführtes 3-Sterne-Hotel bei Berlin mit 38 modernen Zimmern, regionalem Restaurant und flexiblen Event-Spaces für bis zu 100 Gäste.

Die Herausforderung

Trotz starker physischer Anlagen teilten beide Hotels dasselbe strukturelle Problem:

• Keine sinnvolle digitale Präsenz
• Kein direkter Buchungskanal
• Starke Abhängigkeit von Buchungsplattformen mit hohen Provisionen
• Begrenzte Möglichkeit, Zimmer, Ausstattung oder Standortvorteile darzustellen
• Keine konsistente digitale Markenidentität

Kurz: Die Nachfrage war da, die Kontrolle nicht.

Unsere Lösung
Websites für Hospitality-Umsatz, nicht nur Sichtbarkeit

SolutionPlus designed und lieferte vollständige Hospitality-Websites, die sowohl als Marketingplattformen als auch als direkte Buchungsmaschinen dienen.
Das Ziel war einfach: Plattformabhängigkeit reduzieren und den Hotels die Kontrolle über Buchungen, Preise und Kundenbeziehungen geben.

Was wir gebaut haben

Hotel Korona (hotelkorona.ru)
• Mehrsprachige Website mit allen 54 Zimmern, klarer Kategorisierung und Preisen
• Integriertes Direktbuchungssystem mit Echtzeit-Verfügbarkeit
• Visuelle Storytelling durch kuratierte Fotogalerien
• WhatsApp- und Kontaktformular-Integration für direkte Gästekommunikation
• Mobile-first für internationale und saisonale Reisende

Parkhotel Trebbin (parkhotel-trebbin.de)
• Moderne mehrsprachige Website im 3-Sterne-Positioning
• Klare Zimmerkategorisierung (Einzel, Doppel, Suiten) mit integrierter Buchungsmaschine
• Eigene Bereiche für Restaurant und Event-Spaces
• Standort- und Erreichbarkeitsinhalte für Berlin- und Potsdam-Besucher
• Professionelle Darstellung für Freizeit- und Geschäftsgäste

Die Ergebnisse

• Direkte Umsatzkontrolle: Beide Hotels erfassen Buchungen direkt
• Stärkere digitale Marketingfähigkeit
• Etablierte Markenpräsenz
• Geringere Buchungsreibung
• Vorhersehbarere Umsatzpipeline

Kernaussage

Eine Hotelwebsite ist keine Broschüre.
Sie ist eine Umsatzmaschine.

Brauchen Sie eine Website, die wirklich Buchungen generiert?
Lassen Sie uns eine Plattform bauen, die so hart arbeitet wie Ihre Immobilie.
`,

  'democorder-case-study': `Fallstudie: Democorder
Democorder » Von der Konzeptklärung zum produktionsreifen B2B-SaaS

Democorder kam mit klarem Produktambition und ohne internes Technik-Team zu uns. Der Gründer hatte Angebote von mehreren Agenturen zwischen 80.000 und 250.000 € erhalten, mit unterschiedlichen Stacks und Ansätzen. Das Problem war nicht der Mangel an Optionen. Es war das Fehlen eines Rahmens zur Bewertung.

Die erste Frage war nicht, welchen Stack zu verwenden. Sondern: Was soll tatsächlich gebaut werden, in welcher Reihenfolge, unter realen Bedingungen.

Was wir zuerst taten

Vor der Auswahl eines Tools testeten wir die Annahmen hinter dem Produkt. Nutzerinterviews und Workflow-Mapping ergaben zwei Erkenntnisse, die die Richtung des Builds änderten.

• Fast 30 % des ursprünglichen Feature-Umfangs adressierten keine echte Nutzerreibung
• Multi-User-Governance und Kollaborationsbedarf waren im initialen Brief deutlich unterbewertet

Drei Risiken vor der ersten Codezeile identifiziert:
• Over-engineering für Skalierung, die im ersten Jahr nicht existieren würde
• Ein Datenbankmodell, das für Multi-Tenant-Berechtigungen ungeeignet ist
• Unterschätzung der Integrationskomplexität

Klarheit vor Code.

Architektur für reale Bedingungen

Der Stack wurde auf Wartbarkeit und Passung gewählt, nicht auf Trend oder Vertrautheit.

Schicht          Wahl                          Grund
API              Node.js + TypeScript + Express  Saubere, wartbare Struktur
Frontend         React + Tailwind               Strukturierte UI-Iteration ohne Overhead
Datenbank        PostgreSQL via Supabase        Row-Level-Security, kein Custom-Auth

Engagement auf einen Blick

Metrik                              Ergebnis
Konzept bis produktionsreif          6 Monate
Engineering-Team                    3–5 Entwickler, phasenweise skaliert
Umfang durch Validierung reduziert  28 %
Engineering-Zeit durch Architektur   ~4–6 Wochen

Warum dieses Engagement funktioniert hat

Die Entscheidungen, die dieses Produkt prägten, wurden vor dem ersten Sprint getroffen, nicht währenddessen.
Frühe Problemvalidierung änderte, was gebaut wurde. Architektur um realistische Einschränkungen bedeutete, dass die Plattform nicht nachgebessert werden musste, sobald reale Nutzungsmuster auftraten.

Haben Sie eine Idee, die es wert ist, gebaut zu werden?
Sprechen wir darüber, bevor Sie die erste Zeile Code schreiben.
`,

  'case-study-notes': `SolutionPlus Fallstudien – Notizen
4 Fallstudien

CS # 1 – Democorder – B2B SaaS
Zielpersona: Gründer mit einer Idee

Planung, Asset-Entwicklung, UI/UX-Baukasten, Entwicklung, Branding/Positioning

Herausforderung/Lösung: Sie haben eine Idee und wir helfen, sie in die Realität umzusetzen – flexible Ressourcensteuerung, Verfeinerung der Idee durch Planung und Entwicklung. Denkpartner mit End-to-End-Lösung.

---------------------------------------
CS# 2 – AAI – B2B Automotive AI Service

Positionierung: Wie SolutionPlus an zwei Produkten parallel für ein etabliertes SMB gearbeitet hat

(Produkt 1: SGAF) Projektmanagement, Softwareentwicklung
(Produkt 2: NavDB) Projektmanagement, Softwareentwicklung

Produkt von Grund auf aufbauen und MVP liefern. Planung, technische Schätzung und Projektion. Meilenstein-basierte Lieferung. Front-End & Back-End. Zusammenarbeit mit dem Produktteam.

------------------------------------
CS# 3 – Fallstudien Website-Entwicklung

Projekt 1: Hotel Korona
Projekt 2: Parkhotel Trebbin - TBC
Projekt 3: Octalgo

Services: Planung, Projektmanagement & Schätzung, Front- & Back-End-Entwicklung, Design, QA

------------------------------------
CS# 4 – (AI Workflows) Automation as a Service (AaaS)

Projekt 1: Tecsofy B2B

Prozessorientierter Ansatz. Schlechte Prozesse erzeugen schlechte Automation. Vor der Implementierung: Workflow-Analyse, Optimierung, dann passende Tools.

Lösung 1: Automatischer E-Mail-Kategorisierer
Lösung 2: Automatisiertes Kalendermanagement
Lösung 3: Automatisiertes E-Mail-Inbox-Management (Slack/Telegram/Teams)

Tools: n8n, Zapier, HubSpot
`,
}

mkdirSync(DE_DIR, { recursive: true })

let count = 0
for (const [filename, content] of Object.entries(translations)) {
  const path = join(DE_DIR, `${filename}.txt`)
  writeFileSync(path, content.trimEnd() + '\n', 'utf8')
  console.log(`Created: de/${filename}.txt`)
  count++
}

console.log(`Done. Created ${count} German case study file(s).`)
