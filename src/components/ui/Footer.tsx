import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin } from 'lucide-react'

export function Footer({ locale }: { locale: string }) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="text-foreground/70 relative overflow-hidden border-t border-white/5 bg-[#0a0b0d] px-10 py-32 md:px-20 md:py-48 lg:px-32 lg:py-64">
      {/* Abstract Background Element */}
      <div className="bg-primary/10 absolute top-0 right-0 h-[800px] w-[800px] translate-x-1/3 -translate-y-1/3 rounded-full blur-[200px]" />
      <div className="bg-secondary/10 absolute bottom-0 left-0 h-[600px] w-[600px] -translate-x-1/3 translate-y-1/3 rounded-full blur-[150px]" />

      <div className="relative z-10 container mx-auto grid grid-cols-1 gap-20 md:grid-cols-4 md:gap-24 lg:gap-32">
        <div className="md:col-span-1">
          <Link href={`/${locale}`} className="mb-10 flex items-center">
            <Image
              src="/logo.png"
              alt="SolutionPlus"
              width={220}
              height={70}
              className="h-10 w-auto object-contain brightness-0 invert md:h-12"
              priority
            />
          </Link>
          <p className="text-foreground/60 mb-8 text-base leading-loose font-light md:text-lg">
            {locale === 'de'
              ? 'Wir kombinieren deutsche Disziplin mit erstklassiger pakistanischer Ingenieurskunst, um skalierbare, leistungsstarke Technologielösungen zu liefern.'
              : 'We combine German discipline with top-tier Pakistani engineering to deliver scalable, high-performing tech solutions.'}
          </p>
        </div>

        <div>
          <h4 className="mb-10 text-xl font-bold tracking-wide text-white">
            {locale === 'de' ? 'Lösungen' : 'Solutions'}
          </h4>
          <ul className="flex flex-col gap-6">
            <li>
              <Link
                href={locale === 'de' ? `/${locale}/startups` : `/${locale}/startup`}
                className="inline-block text-base font-medium transition-all duration-300 hover:translate-x-2 hover:text-white"
              >
                {locale === 'de' ? 'Für Startups' : 'For Startups'}
              </Link>
            </li>
            <li>
              <Link
                href={locale === 'de' ? `/${locale}/scaleups` : `/${locale}/scale-up`}
                className="inline-block text-base font-medium transition-all duration-300 hover:translate-x-2 hover:text-white"
              >
                {locale === 'de' ? 'Für Scale-ups' : 'For Scale-ups'}
              </Link>
            </li>
            <li>
              <Link
                href={
                  locale === 'de' ? `/${locale}/mvp-sprint-paket` : `/${locale}/mvp-sprint-package`
                }
                className="inline-block text-base font-medium transition-all duration-300 hover:translate-x-2 hover:text-white"
              >
                MVP Sprint
              </Link>
            </li>
            <li>
              <Link
                href={
                  locale === 'de'
                    ? `/${locale}/dedizierte-teams`
                    : `/${locale}/dedicated-delivery-teams`
                }
                className="inline-block text-base font-medium transition-all duration-300 hover:translate-x-2 hover:text-white"
              >
                {locale === 'de' ? 'Dedizierte Teams' : 'Dedicated Teams'}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-10 text-xl font-bold tracking-wide text-white">
            {locale === 'de' ? 'Unternehmen' : 'Company'}
          </h4>
          <ul className="flex flex-col gap-6">
            <li>
              <Link
                href={locale === 'de' ? `/${locale}/ueber-solutionplus` : `/${locale}/about-team`}
                className="inline-block text-base font-medium transition-all duration-300 hover:translate-x-2 hover:text-white"
              >
                {locale === 'de' ? 'Über Uns' : 'About Us'}
              </Link>
            </li>
            <li>
              <Link
                href={locale === 'de' ? `/${locale}/karriere` : `/${locale}/careers`}
                className="inline-block text-base font-medium transition-all duration-300 hover:translate-x-2 hover:text-white"
              >
                {locale === 'de' ? 'Karriere' : 'Careers'}
              </Link>
            </li>
            <li>
              <Link
                href={
                  locale === 'de' ? `/${locale}/datenschutzerklaerung` : `/${locale}/privacy-policy`
                }
                className="inline-block text-base font-medium transition-all duration-300 hover:translate-x-2 hover:text-white"
              >
                {locale === 'de' ? 'Datenschutzerklärung' : 'Privacy Policy'}
              </Link>
            </li>
            <li>
              <Link
                href={
                  locale === 'de'
                    ? `/${locale}/allgemeine-geschaeftsbedingungen-agb`
                    : `/${locale}/terms-and-conditions`
                }
                className="inline-block text-base font-medium transition-all duration-300 hover:translate-x-2 hover:text-white"
              >
                {locale === 'de' ? 'AGB' : 'Terms of Service'}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-10 text-xl font-bold tracking-wide text-white">
            {locale === 'de' ? 'Kontakt' : 'Contact'}
          </h4>
          <ul className="flex flex-col gap-8">
            <li className="flex items-start gap-4">
              <MapPin className="text-primary mt-1 shrink-0" size={24} />
              <span className="text-base leading-loose font-medium">
                Berlin, {locale === 'de' ? 'Deutschland' : 'Germany'}
                <br />
                Lahore, Pakistan
              </span>
            </li>
            <li className="flex items-center gap-4">
              <Mail className="text-primary shrink-0" size={24} />
              <a
                href="mailto:hello@solutionplus.io"
                className="text-base font-medium transition-colors hover:text-white"
              >
                hello@solutionplus.io
              </a>
            </li>
            <li className="flex items-center gap-4">
              <Phone className="text-primary shrink-0" size={24} />
              <a
                href="tel:+49123456789"
                className="text-base font-medium transition-colors hover:text-white"
              >
                +49 123 456 789
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-foreground/50 relative z-10 container mx-auto mt-32 flex flex-col items-center justify-between border-t border-white/10 pt-16 text-sm md:flex-row">
        <p>
          &copy; {currentYear} SolutionPlus.{' '}
          {locale === 'de' ? 'Alle Rechte vorbehalten.' : 'All rights reserved.'}
        </p>
        <div className="mt-4 flex gap-4 md:mt-0">
          <Link
            href={
              locale === 'de' ? `/${locale}/datenschutzerklaerung` : `/${locale}/privacy-policy`
            }
            className="transition-colors hover:text-white"
          >
            {locale === 'de' ? 'Datenschutzerklärung' : 'Privacy'}
          </Link>
          <Link
            href={
              locale === 'de'
                ? `/${locale}/allgemeine-geschaeftsbedingungen-agb`
                : `/${locale}/terms-and-conditions`
            }
            className="transition-colors hover:text-white"
          >
            {locale === 'de' ? 'AGB' : 'Terms'}
          </Link>
        </div>
      </div>
    </footer>
  )
}
