import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'
import { supportData } from '@/data/support-content'

export function Footer({ locale }: { locale: string }) {
  const currentYear = new Date().getFullYear()
  const isDe = locale === 'de'

  return (
    <footer className="text-sp-text-on-light bg-sp-bg-medium relative overflow-hidden px-10 py-24 md:px-20 md:py-32 lg:px-32 lg:py-40">
      <div className="relative z-10 container mx-auto grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-5 lg:gap-12 xl:gap-20">
        {/* Blurb & Social */}
        <div className="md:col-span-2 lg:col-span-2">
          <p className="text-sp-text-dark mb-8 text-base leading-relaxed font-light md:text-lg">
            {isDe
              ? 'Von der großen Idee zum greifbaren Erfolg. SolutionPlus bietet den Rahmen für ambitionierte Projekte, von der Produkteinführung bis hin zur Skalierung von Teams und der Verlagerung von Talenten.'
              : 'Go from big idea to tangible success. SolutionPlus provides the framework for ambitious projects, from launching products to scaling teams and relocating talent.'}
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/company/solutionplus-io/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sp-text-on-light hover:text-sp-accent transition-colors"
              data-analytics-event="social_click"
              data-analytics-platform="linkedin"
              data-analytics-link-url="https://www.linkedin.com/company/solutionplus-io/"
            >
              <span className="sr-only">LinkedIn</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/SolutionPlus.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sp-text-on-light hover:text-sp-accent transition-colors"
              data-analytics-event="social_click"
              data-analytics-platform="facebook"
              data-analytics-link-url="https://www.facebook.com/SolutionPlus.io/"
            >
              <span className="sr-only">Facebook</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/solutionplus.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sp-text-on-light hover:text-sp-accent transition-colors"
              data-analytics-event="social_click"
              data-analytics-platform="instagram"
              data-analytics-link-url="https://www.instagram.com/solutionplus.io/"
            >
              <span className="sr-only">Instagram</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="https://x.com/SolutionPlus_io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sp-text-on-light hover:text-sp-accent transition-colors"
              data-analytics-event="social_click"
              data-analytics-platform="x_twitter"
              data-analytics-link-url="https://x.com/SolutionPlus_io"
            >
              <span className="sr-only">X (Twitter)</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-sp-text-dark mb-8 text-lg font-semibold">
            {isDe ? 'Navigation' : 'Navigation'}
          </h4>
          <ul className="flex flex-col gap-4">
            <li>
              <Link
                href={isDe ? `/${locale}/ueber-solutionplus` : `/${locale}/about-team`}
                className="hover:text-sp-link-hover text-base transition-colors"
                data-analytics-event="link_click"
                data-analytics-event-label={isDe ? 'Über Uns' : 'About'}
                data-analytics-location="footer_nav"
                data-analytics-link-url={
                  isDe ? `/${locale}/ueber-solutionplus` : `/${locale}/about-team`
                }
              >
                {isDe ? 'Über Uns' : 'About'}
              </Link>
            </li>
            <li>
              <Link
                href={isDe ? `/${locale}/fallstudien` : `/${locale}/case-studies`}
                className="hover:text-sp-link-hover text-base transition-colors"
                data-analytics-event="link_click"
                data-analytics-event-label={isDe ? 'Fallstudien' : 'Case Studies'}
                data-analytics-location="footer_nav"
                data-analytics-link-url={
                  isDe ? `/${locale}/fallstudien` : `/${locale}/case-studies`
                }
              >
                {isDe ? 'Fallstudien' : 'Case Studies'}
              </Link>
            </li>
            <li>
              <Link
                href={isDe ? `/${locale}/startups` : `/${locale}/startup`}
                className="hover:text-sp-link-hover text-base transition-colors"
                data-analytics-event="link_click"
                data-analytics-event-label="Startups"
                data-analytics-location="footer_nav"
                data-analytics-link-url={isDe ? `/${locale}/startups` : `/${locale}/startup`}
              >
                Startups
              </Link>
            </li>
            <li>
              <Link
                href={isDe ? `/${locale}/scaleups` : `/${locale}/scale-up`}
                className="hover:text-sp-link-hover text-base transition-colors"
                data-analytics-event="link_click"
                data-analytics-event-label="Scale ups"
                data-analytics-location="footer_nav"
                data-analytics-link-url={isDe ? `/${locale}/scaleups` : `/${locale}/scale-up`}
              >
                {isDe ? 'Scale ups' : 'Scale ups'}
              </Link>
            </li>
            <li>
              <Link
                href={isDe ? `/${locale}/mvp-sprint-paket` : `/${locale}/mvp-sprint-package`}
                className="hover:text-sp-link-hover text-base transition-colors"
                data-analytics-event="link_click"
                data-analytics-event-label="MVP Sprint Package"
                data-analytics-location="footer_nav"
                data-analytics-link-url={
                  isDe ? `/${locale}/mvp-sprint-paket` : `/${locale}/mvp-sprint-package`
                }
              >
                MVP Sprint Package
              </Link>
            </li>
            <li>
              <Link
                href={isDe ? `/${locale}/dedizierte-teams` : `/${locale}/dedicated-delivery-teams`}
                className="hover:text-sp-link-hover text-base transition-colors"
                data-analytics-event="link_click"
                data-analytics-event-label={
                  isDe ? 'Dedizierte Delivery Teams' : 'Dedicated Delivery Teams'
                }
                data-analytics-location="footer_nav"
                data-analytics-link-url={
                  isDe ? `/${locale}/dedizierte-teams` : `/${locale}/dedicated-delivery-teams`
                }
              >
                {isDe ? 'Dedizierte Delivery Teams' : 'Dedicated Delivery Teams'}
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-sp-text-dark mb-8 text-lg font-semibold">Services</h4>
          <ul className="flex flex-col gap-4">
            <li>
              <Link
                href={isDe ? `/${locale}/ki-automatisierung` : `/${locale}/ai-automation`}
                className="hover:text-sp-link-hover text-base transition-colors"
                data-analytics-event="link_click"
                data-analytics-event-label={isDe ? 'KI-Automatisierung' : 'AI Automation'}
                data-analytics-location="footer_services"
                data-analytics-link-url={
                  isDe ? `/${locale}/ki-automatisierung` : `/${locale}/ai-automation`
                }
              >
                {isDe ? 'KI-Automatisierung' : 'AI Automation'}
              </Link>
            </li>
            <li>
              <Link
                href={`/${locale}/ui-ux-design`}
                className="hover:text-sp-link-hover text-base transition-colors"
                data-analytics-event="link_click"
                data-analytics-event-label="UI/UX Design"
                data-analytics-location="footer_services"
                data-analytics-link-url={`/${locale}/ui-ux-design`}
              >
                UI/UX Design
              </Link>
            </li>
            <li>
              <Link
                href={isDe ? `/${locale}/web-entwicklung` : `/${locale}/web-app-development`}
                className="hover:text-sp-link-hover text-base transition-colors"
                data-analytics-event="link_click"
                data-analytics-event-label={isDe ? 'Web-Entwicklung' : 'Web App Development'}
                data-analytics-location="footer_services"
                data-analytics-link-url={
                  isDe ? `/${locale}/web-entwicklung` : `/${locale}/web-app-development`
                }
              >
                {isDe ? 'Web-Entwicklung' : 'Web App Development'}
              </Link>
            </li>
            <li>
              <Link
                href={
                  isDe ? `/${locale}/mobile-app-entwicklung` : `/${locale}/mobile-app-development`
                }
                className="hover:text-sp-link-hover text-base transition-colors"
                data-analytics-event="link_click"
                data-analytics-event-label={
                  isDe ? 'Mobile App-Entwicklung' : 'Mobile App Development'
                }
                data-analytics-location="footer_services"
                data-analytics-link-url={
                  isDe ? `/${locale}/mobile-app-entwicklung` : `/${locale}/mobile-app-development`
                }
              >
                {isDe ? 'Mobile App-Entwicklung' : 'Mobile App Development'}
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-sp-text-dark mb-8 text-lg font-semibold">
            {isDe ? 'Rechtliches' : 'Legal'}
          </h4>
          <ul className="flex flex-col gap-4">
            <li>
              <Link
                href={isDe ? `/${locale}/datenschutzerklaerung` : `/${locale}/privacy-policy`}
                className="hover:text-sp-link-hover text-base transition-colors"
                data-analytics-event="link_click"
                data-analytics-event-label={isDe ? 'Datenschutz' : 'Privacy Policy'}
                data-analytics-location="footer_legal"
                data-analytics-link-url={
                  isDe ? `/${locale}/datenschutzerklaerung` : `/${locale}/privacy-policy`
                }
              >
                {isDe ? 'Datenschutz' : 'Privacy Policy'}
              </Link>
            </li>
            <li>
              <Link
                href={
                  isDe
                    ? `/${locale}/allgemeine-geschaeftsbedingungen-agb`
                    : `/${locale}/terms-and-conditions`
                }
                className="hover:text-sp-link-hover text-base transition-colors"
                data-analytics-event="link_click"
                data-analytics-event-label={isDe ? 'AGB' : 'Terms of Use'}
                data-analytics-location="footer_legal"
                data-analytics-link-url={
                  isDe
                    ? `/${locale}/allgemeine-geschaeftsbedingungen-agb`
                    : `/${locale}/terms-and-conditions`
                }
              >
                {isDe ? 'AGB' : 'Terms of Use'}
              </Link>
            </li>
            <li>
              <Link
                href={isDe ? `/${locale}/karriere` : `/${locale}/careers`}
                className="hover:text-sp-link-hover text-base transition-colors"
                data-analytics-event="link_click"
                data-analytics-event-label={isDe ? 'Karriere' : 'Career'}
                data-analytics-location="footer_legal"
                data-analytics-link-url={isDe ? `/${locale}/karriere` : `/${locale}/careers`}
              >
                {isDe ? 'Karriere' : 'Career'}
              </Link>
            </li>
            {/* Accessibility Link Intentionally Removed - Missing from Scraped Map */}
          </ul>
        </div>

        {/* Headquarter */}
        <div>
          <h4 className="text-sp-text-dark mb-8 text-lg font-semibold">
            {isDe ? 'Hauptsitz' : 'Headquarter'}
          </h4>
          <ul className="flex flex-col gap-6">
            <li className="flex items-start gap-3 text-base">
              <MapPin className="text-sp-text-on-light shrink-0" size={20} />
              <div className="flex flex-col gap-1">
                <span>Kollwitzstraße 76, 10435 Berlin</span>
                <span className="text-sp-text-on-light/60 text-sm italic">
                  {supportData[isDe ? 'de' : 'en'].footer.locations}
                </span>
              </div>
            </li>
            <li className="flex items-center gap-3 text-base">
              <Phone className="text-sp-text-on-light shrink-0" size={20} />
              <a
                href="tel:+4681234567"
                className="hover:text-sp-link-hover transition-colors"
                data-analytics-event="link_click"
                data-analytics-event-label="Phone"
                data-analytics-location="footer_contact"
                data-analytics-link-url="tel:+4681234567"
              >
                +46 8123 4567
              </a>
            </li>
            <li className="flex items-center gap-3 text-base">
              <Mail className="text-sp-text-on-light shrink-0" size={20} />
              <a
                href="mailto:sales@solutionplus.io"
                className="hover:text-sp-link-hover transition-colors"
                data-analytics-event="link_click"
                data-analytics-event-label="Email"
                data-analytics-location="footer_contact"
                data-analytics-link-url="mailto:sales@solutionplus.io"
              >
                sales@solutionplus.io
              </a>
            </li>
          </ul>
          <Link
            href={isDe ? `/${locale}/kontakt-solutionplus` : `/${locale}/contact-us`}
            className="text-sp-accent hover:text-sp-accent-dark mt-8 inline-flex items-center gap-2 font-medium transition-colors"
            data-analytics-event="cta_click"
            data-analytics-event-label="Ask for Quote"
            data-analytics-location="footer"
            data-analytics-destination={
              isDe ? `/${locale}/kontakt-solutionplus` : `/${locale}/contact-us`
            }
          >
            Ask for Quote
          </Link>
        </div>
      </div>

      <div className="text-sp-text-on-light border-sp-border-light relative z-10 container mx-auto mt-20 flex flex-col items-center justify-center border-t pt-8 text-sm">
        <p>&copy; {currentYear} SolutionPlus. All rights reserved</p>
      </div>
    </footer>
  )
}
