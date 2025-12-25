import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Bus, 
  Cog, 
  Wrench, 
  GraduationCap,
  ArrowRight,
  CheckCircle,
  Zap,
  Shield,
  Settings
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import trolleybusSkoda from '@/assets/trolleybus-skoda.jpg';
import spareParts from '@/assets/spare-parts.jpg';
import busIsuzu from '@/assets/bus-isuzu-blue.jpg';
import trolleybusCity from '@/assets/trolleybus-city.jpg';

const services = [
  {
    icon: Bus,
    title: 'Vânzare Echipamente',
    description: 'Furnizăm autobuze, troleibuze și autobuze electrice noi și second-hand de la producători europeni de renume precum ŠKODA ELECTRIC, ISUZU și alții.',
    image: trolleybusSkoda,
    features: ['Autobuze urbane și interurbane', 'Troleibuze articulate', 'E-buses și hibride', 'Sisteme de propulsie electrică'],
  },
  {
    icon: Cog,
    title: 'Piese de Schimb',
    description: 'Piese originale și compatibile pentru toate tipurile de vehicule de transport public. Stoc permanent și livrare rapidă din rețeaua noastră europeană.',
    image: spareParts,
    features: ['Piese motor și transmisie', 'Sisteme de frânare', 'Componente electrice', 'Piese interior și caroserie'],
  },
  {
    icon: Wrench,
    title: 'Service și Mentenanță',
    description: 'Servicii complete de întreținere și reparații, de la diagnosticare computerizată până la revizie capitală. Service autorizat cu garanție.',
    image: busIsuzu,
    features: ['Service garanție și post-garanție', 'Diagnosticare computerizată', 'Reparații capitale', 'Contracte de mentenanță'],
  },
  {
    icon: GraduationCap,
    title: 'Consultanță și Training',
    description: 'Consultanță tehnică specializată pentru optimizarea flotei și training pentru personalul tehnic și conducători auto.',
    image: trolleybusCity,
    features: ['Consultanță tehnică', 'Training operatori', 'Planificare flotă', 'Optimizare costuri'],
  },
];

const ServicesPage = () => {
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
                <Settings className="w-4 h-4" />
                Servicii Complete
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                Soluții Integrate pentru{' '}
                <span className="text-accent">Transport Public</span>
              </h1>
              <p className="text-xl text-steel-light">
                De la furnizarea echipamentelor până la mentenanța completă, 
                oferim tot ce aveți nevoie pentru o flotă eficientă.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services List */}
        <section className="section-padding bg-background">
          <div className="container-custom space-y-24">
            {services.map((service, index) => {
              const serviceRef = useRef(null);
              const serviceInView = useInView(serviceRef, { once: true, amount: 0.3 });
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={service.title}
                  ref={serviceRef}
                  initial={{ opacity: 0, y: 50 }}
                  animate={serviceInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8 }}
                  className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}
                >
                  {/* Image */}
                  <div className={`${!isEven ? 'lg:order-2' : ''}`}>
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-auto aspect-[4/3] object-cover"
                      />
                      <div className="absolute top-6 left-6">
                        <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center shadow-lg">
                          <service.icon className="w-7 h-7 text-accent-foreground" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`${!isEven ? 'lg:order-1' : ''}`}>
                    <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                      {service.title}
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                      {service.description}
                    </p>

                    <ul className="space-y-4">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Why Our Services */}
        <section className="section-padding bg-muted/50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                De Ce Serviciile Noastre?
              </h2>
              <p className="text-lg text-muted-foreground">
                Oferim avantaje competitive care fac diferența pentru operațiunile dumneavoastră.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Zap, title: 'Rapiditate', description: 'Timp de răspuns minim și livrare express pentru situații urgente' },
                { icon: Shield, title: 'Garanție', description: 'Toate produsele și serviciile noastre vin cu garanție extinsă' },
                { icon: Settings, title: 'Expertiză', description: 'Echipă cu experiență de peste 19 ani în industrie' },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-8 shadow-lg border border-border text-center"
                >
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
                    <item.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-accent">
          <div className="container-custom text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-accent-foreground mb-6">
                Aveți nevoie de o ofertă personalizată?
              </h2>
              <p className="text-xl text-accent-foreground/80 mb-8 max-w-2xl mx-auto">
                Contactați-ne pentru o consultație gratuită și o ofertă adaptată nevoilor dumneavoastră specifice.
              </p>
              <Link to="/contact">
                <Button variant="hero-outline" size="xl">
                  Solicită Ofertă Gratuită
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
