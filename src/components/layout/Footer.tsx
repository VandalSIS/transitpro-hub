import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Linkedin, Instagram, ArrowUp } from 'lucide-react';

const services = [
  { name: 'Vânzare Echipamente', href: '/servicii/echipamente' },
  { name: 'Piese de Schimb', href: '/servicii/piese' },
  { name: 'Service și Mentenanță', href: '/servicii/service' },
  { name: 'Consultanță Tehnică', href: '/servicii/consultanta' },
];

const quickLinks = [
  { name: 'Despre Noi', href: '/despre' },
  { name: 'Parteneri', href: '/parteneri' },
  { name: 'Proiecte', href: '/proiecte' },
  { name: 'Contact', href: '/contact' },
];

const legalLinks = [
  { name: 'Politica de Confidențialitate', href: '/politica-confidentialitate' },
  { name: 'Termeni și Condiții', href: '/termeni-conditii' },
  { name: 'Politica Cookies', href: '/politica-cookies' },
];

export default function Footer() {
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
              Partenerul dumneavoastră de încredere pentru echipamente și servicii 
              de transport public din 2021. Echipă cu 19+ ani experiență. Oferim soluții complete pentru autobuze, 
              troleibuze și autobuze electrice.
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
            <h4 className="font-bold text-lg mb-6">Link-uri Rapide</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
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
            <h4 className="font-bold text-lg mb-6">Serviciile Noastre</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
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
            <h4 className="font-bold text-lg mb-6">Contactează-ne</h4>
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
                Luni - Vineri: 09:00 - 18:00
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
              © {new Date().getFullYear()} Transport Systems SRL. Toate drepturile rezervate.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-steel-light hover:text-accent transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
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
