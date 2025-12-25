import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const navigation = [
  { name: 'Acasă', href: '/' },
  { name: 'Despre Noi', href: '/despre' },
  {
    name: 'Servicii',
    href: '/servicii',
    children: [
      { name: 'Vânzare Echipamente', href: '/servicii/echipamente' },
      { name: 'Piese de Schimb', href: '/servicii/piese' },
      { name: 'Service și Mentenanță', href: '/servicii/service' },
      { name: 'Consultanță', href: '/servicii/consultanta' },
    ],
  },
  { name: 'Parteneri', href: '/parteneri' },
  { name: 'Proiecte', href: '/proiecte' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  return (
    <>
      {/* Top Bar */}
      <div className="hidden lg:block bg-navy text-primary-foreground py-2">
        <div className="container-custom flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+37369312300" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone className="w-4 h-4" />
              +373 69 312 300
            </a>
            <a href="mailto:transportsystems2021@gmail.com" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Mail className="w-4 h-4" />
              transportsystems2021@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-steel-light">Luni - Vineri: 09:00 - 18:00</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-card/95 backdrop-blur-lg shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-xl">TS</span>
              </div>
              <div className="hidden sm:block">
                <div className="font-bold text-lg text-foreground leading-tight">TRANSPORT</div>
                <div className="text-sm text-accent font-semibold">SYSTEMS SRL</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.children && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to={item.href}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-1 ${
                      location.pathname === item.href
                        ? 'text-accent bg-accent/10'
                        : 'text-foreground hover:text-accent hover:bg-accent/5'
                    }`}
                  >
                    {item.name}
                    {item.children && <ChevronDown className="w-4 h-4" />}
                  </Link>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {item.children && activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-56 bg-card rounded-xl shadow-xl border border-border overflow-hidden"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            to={child.href}
                            className="block px-4 py-3 text-sm text-foreground hover:bg-accent/10 hover:text-accent transition-colors"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button variant="cta" size="lg">
                Solicită Ofertă
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-accent/10 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-card border-t border-border overflow-hidden"
            >
              <div className="container-custom py-4">
                <nav className="flex flex-col gap-2">
                  {navigation.map((item) => (
                    <div key={item.name}>
                      <Link
                        to={item.href}
                        className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
                          location.pathname === item.href
                            ? 'text-accent bg-accent/10'
                            : 'text-foreground hover:text-accent hover:bg-accent/5'
                        }`}
                      >
                        {item.name}
                      </Link>
                      {item.children && (
                        <div className="ml-4 mt-1 space-y-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              to={child.href}
                              className="block px-4 py-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>
                <div className="mt-4 pt-4 border-t border-border">
                  <Button variant="cta" className="w-full" size="lg">
                    Solicită Ofertă
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
