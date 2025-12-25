import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { 
  Building2, 
  MapPin,
  ExternalLink,
  Users,
  Globe
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const partners = {
  clients: [
    { 
      name: 'ÎM «Regia Transport Electric»', 
      location: 'Chișinău, Moldova',
      description: 'Principalul operator de transport electric din capitala Republicii Moldova',
      category: 'Client'
    },
    { 
      name: 'ÎM «Parcul Urban de Autobuze»', 
      location: 'Chișinău, Moldova',
      description: 'Operator major de transport urban cu autobuze în Chișinău',
      category: 'Client'
    },
    { 
      name: 'Direcția de Troleibuze din Bălți', 
      location: 'Bălți, Moldova',
      description: 'Operator de transport electric din al doilea oraș ca mărime al țării',
      category: 'Client'
    },
    { 
      name: 'Ministry of Traffic Sarajevo Canton', 
      location: 'Sarajevo, Bosnia',
      description: 'Autoritatea de transport a Cantonului Sarajevo',
      category: 'Client'
    },
  ],
  suppliers: [
    { 
      name: 'ŠKODA ELECTRIC a.s.', 
      location: 'Plzeň, Cehia',
      description: 'Producător de top de echipamente pentru transport electric',
      website: 'https://www.skoda.cz',
      category: 'Furnizor'
    },
    { 
      name: 'MOTOBUS Sp. zoo', 
      location: 'Polonia',
      description: 'Furnizor de piese de schimb pentru autobuze și troleibuze',
      category: 'Furnizor'
    },
    { 
      name: 'ZEZ SILKO s.r.o.', 
      location: 'Cehia',
      description: 'Producător de componente electrice pentru vehicule',
      category: 'Furnizor'
    },
    { 
      name: 'Graboplast FMPCL', 
      location: 'Ungaria',
      description: 'Producător de materiale pentru interioare vehicule',
      category: 'Furnizor'
    },
    { 
      name: 'Cabex Co Srl', 
      location: 'Italia',
      description: 'Furnizor de cabluri și componente electrice',
      category: 'Furnizor'
    },
  ],
};

const PartnersPage = () => {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section ref={heroRef} className="relative py-20 lg:py-28 bg-navy overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
              backgroundSize: '40px 40px',
            }} />
          </div>

          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-medium mb-6">
                <Users className="w-4 h-4" />
                Partenerii Noștri
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                Rețea de{' '}
                <span className="text-accent">Parteneri de Încredere</span>
              </h1>
              <p className="text-xl text-steel-light">
                Colaborăm cu operatori de transport și furnizori de top din 
                Moldova, Europa și regiunea noastră.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 bg-accent">
          <div className="container-custom">
            <div className="grid grid-cols-3 gap-8 text-center">
              {[
                { value: '50+', label: 'Parteneri Activi' },
                { value: '9', label: 'Țări' },
                { value: '19+', label: 'Ani de Colaborare' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="text-3xl lg:text-4xl font-bold text-accent-foreground mb-1">{stat.value}</div>
                  <div className="text-accent-foreground/80 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Clients Section */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                <Building2 className="w-4 h-4" />
                Clienți
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                Clienții Noștri
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {partners.clients.map((partner, index) => (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card rounded-xl p-6 shadow-lg border border-border hover:border-accent/50 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                      <Building2 className="w-7 h-7 text-accent" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="font-bold text-lg text-foreground mb-1">{partner.name}</h3>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                            <MapPin className="w-4 h-4" />
                            {partner.location}
                          </div>
                        </div>
                        <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">
                          {partner.category}
                        </span>
                      </div>
                      <p className="text-muted-foreground text-sm">{partner.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Suppliers Section */}
        <section className="section-padding bg-muted/50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cta/10 text-cta text-sm font-medium mb-4">
                <Globe className="w-4 h-4" />
                Furnizori
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                Furnizorii Noștri
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {partners.suppliers.map((partner, index) => (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card rounded-xl p-6 shadow-lg border border-border hover:border-accent/50 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-cta/10 flex items-center justify-center mb-4">
                    <Building2 className="w-6 h-6 text-cta" />
                  </div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-bold text-foreground group-hover:text-accent transition-colors">
                      {partner.name}
                    </h3>
                    {partner.website && (
                      <a 
                        href={partner.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-accent transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <MapPin className="w-4 h-4" />
                    {partner.location}
                  </div>
                  <p className="text-muted-foreground text-sm">{partner.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-navy">
          <div className="container-custom text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-6">
                Doriți să Deveniți Partener?
              </h2>
              <p className="text-xl text-steel-light mb-8 max-w-2xl mx-auto">
                Suntem mereu deschiși la noi colaborări. Contactați-ne pentru a discuta oportunitățile de parteneriat.
              </p>
              <Button variant="cta" size="xl">
                Contactați-ne
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PartnersPage;
