import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer({ locale }: { locale: string }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0f1112] text-foreground/70 py-20 px-6 md:px-12 border-t border-white/5 relative overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
        <div className="md:col-span-1">
          <Link href={`/${locale}`} className="flex items-center mb-6">
            <Image 
              src="/logo.png" 
              alt="SolutionPlus" 
              width={180} 
              height={60} 
              className="h-8 md:h-10 w-auto object-contain brightness-0 invert" 
              priority
            />
          </Link>
          <p className="text-sm text-foreground/60 leading-relaxed mb-6">
            {locale === 'de' 
              ? 'Wir kombinieren deutsche Disziplin mit erstklassiger pakistanischer Ingenieurskunst, um skalierbare, leistungsstarke Technologielösungen zu liefern.'
              : 'We combine German discipline with top-tier Pakistani engineering to deliver scalable, high-performing tech solutions.'}
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6">{locale === 'de' ? 'Lösungen' : 'Solutions'}</h4>
          <ul className="flex flex-col gap-3">
            <li><Link href={locale === 'de' ? `/${locale}/startups` : `/${locale}/startup`} className="text-sm hover:text-white transition-all duration-300 hover:translate-x-1 inline-block">{locale === 'de' ? 'Für Startups' : 'For Startups'}</Link></li>
            <li><Link href={locale === 'de' ? `/${locale}/scaleups` : `/${locale}/scale-up`} className="text-sm hover:text-white transition-all duration-300 hover:translate-x-1 inline-block">{locale === 'de' ? 'Für Scale-ups' : 'For Scale-ups'}</Link></li>
            <li><Link href={locale === 'de' ? `/${locale}/mvp-sprint-paket` : `/${locale}/mvp-sprint-package`} className="text-sm hover:text-white transition-all duration-300 hover:translate-x-1 inline-block">MVP Sprint</Link></li>
            <li><Link href={locale === 'de' ? `/${locale}/dedizierte-teams` : `/${locale}/dedicated-delivery-teams`} className="text-sm hover:text-white transition-all duration-300 hover:translate-x-1 inline-block">{locale === 'de' ? 'Dedizierte Teams' : 'Dedicated Teams'}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6">{locale === 'de' ? 'Unternehmen' : 'Company'}</h4>
          <ul className="flex flex-col gap-3">
            <li><Link href={locale === 'de' ? `/${locale}/ueber-solutionplus` : `/${locale}/about-team`} className="text-sm hover:text-white transition-all duration-300 hover:translate-x-1 inline-block">{locale === 'de' ? 'Über Uns' : 'About Us'}</Link></li>
            <li><Link href={locale === 'de' ? `/${locale}/karriere` : `/${locale}/careers`} className="text-sm hover:text-white transition-all duration-300 hover:translate-x-1 inline-block">{locale === 'de' ? 'Karriere' : 'Careers'}</Link></li>
            <li><Link href={locale === 'de' ? `/${locale}/datenschutzerklaerung` : `/${locale}/privacy-policy`} className="text-sm hover:text-white transition-all duration-300 hover:translate-x-1 inline-block">{locale === 'de' ? 'Datenschutzerklärung' : 'Privacy Policy'}</Link></li>
            <li><Link href={locale === 'de' ? `/${locale}/allgemeine-geschaeftsbedingungen-agb` : `/${locale}/terms-and-conditions`} className="text-sm hover:text-white transition-all duration-300 hover:translate-x-1 inline-block">{locale === 'de' ? 'AGB' : 'Terms of Service'}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6">{locale === 'de' ? 'Kontakt' : 'Contact'}</h4>
          <ul className="flex flex-col gap-4">
            <li className="flex items-start gap-3">
              <MapPin className="text-primary mt-1" size={18} />
              <span className="text-sm">Berlin, {locale === 'de' ? 'Deutschland' : 'Germany'}<br />Lahore, Pakistan</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="text-primary" size={18} />
              <a href="mailto:hello@solutionplus.io" className="text-sm hover:text-white transition-colors">hello@solutionplus.io</a>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="text-primary" size={18} />
              <a href="tel:+49123456789" className="text-sm hover:text-white transition-colors">+49 123 456 789</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-xs text-foreground/50 relative z-10">
        <p>&copy; {currentYear} SolutionPlus. {locale === 'de' ? 'Alle Rechte vorbehalten.' : 'All rights reserved.'}</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <Link href={locale === 'de' ? `/${locale}/datenschutzerklaerung` : `/${locale}/privacy-policy`} className="hover:text-white transition-colors">{locale === 'de' ? 'Datenschutzerklärung' : 'Privacy'}</Link>
          <Link href={locale === 'de' ? `/${locale}/allgemeine-geschaeftsbedingungen-agb` : `/${locale}/terms-and-conditions`} className="hover:text-white transition-colors">{locale === 'de' ? 'AGB' : 'Terms'}</Link>
        </div>
      </div>
    </footer>
  );
}
