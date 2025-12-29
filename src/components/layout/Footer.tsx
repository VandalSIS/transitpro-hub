import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Linkedin, Instagram, ArrowUp } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  const services = [
    { name: t('footer.equipment'), href: '/servicii' },
    { name: t('footer.parts'), href: '/servicii' },
    { name: t('footer.service'), href: '/servicii' },
    { name: t('footer.consulting'), href: '/servicii' },
  ];

  const quickLinks = [
    { name: t('nav.about'), href: '/despre' },
    { name: t('nav.partners'), href: '/parteneri' },
    { name: t('nav.projects'), href: '/proiecte' },
    { name: t('nav.contact'), href: '/contact' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy text-primary-foreground">
      {/* Main Footer */}
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-xl">TS</span>
              </div>
              <div>
                <div className="font-bold text-lg leading-tight">TRANSPORT</div>
                <div className="text-sm text-accent font-semibold">SYSTEMS SRL</div>
              </div>
            </div>
            <p className="text-steel-light text-sm leading-relaxed">
              {t('footer.description')}
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-navy-light flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-navy-light flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-navy-light flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">{t('footer.quickLinks')}</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-steel-light hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-6">{t('footer.services')}</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.href}
                    className="text-steel-light hover:text-accent transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6">{t('footer.contact')}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <span className="text-steel-light text-sm">
                  Str. Grenoble, 257<br />
                  MD-2001, Chișinău, Moldova
                </span>
              </li>
              <li>
                <a
                  href="tel:+37369312300"
                  className="flex items-center gap-3 text-steel-light hover:text-accent transition-colors text-sm"
                >
                  <Phone className="w-5 h-5 text-accent shrink-0" />
                  +373 69 312 300
                </a>
              </li>
              <li>
                <a
                  href="tel:+37360100250"
                  className="flex items-center gap-3 text-steel-light hover:text-accent transition-colors text-sm"
                >
                  <Phone className="w-5 h-5 text-accent shrink-0" />
                  +373 60 100 250
                </a>
              </li>
              <li>
                <a
                  href="mailto:transportsystems2021@gmail.com"
                  className="flex items-center gap-3 text-steel-light hover:text-accent transition-colors text-sm"
                >
                  <Mail className="w-5 h-5 text-accent shrink-0" />
                  transportsystems2021@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-steel-light text-sm">
                <Clock className="w-5 h-5 text-accent shrink-0" />
                {t('header.schedule')}
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-navy-light">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-steel-light text-sm">
              © {new Date().getFullYear()} Transport Systems SRL. {t('footer.rights')}
            </p>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center hover:bg-accent/80 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
