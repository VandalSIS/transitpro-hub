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
import { useLanguage } from '@/contexts/LanguageContext';
import trolleybusSkoda from '@/assets/trolleybus-skoda.jpg';
import spareParts from '@/assets/spare-parts.jpg';
import busIsuzu from '@/assets/bus-isuzu-blue.jpg';
import trolleybusCity from '@/assets/trolleybus-city.jpg';

const ServicesPage = () => {
  const { t } = useLanguage();
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });

  const services = [
    {
      icon: Bus,
      title: t('service.equipment.title'),
      description: t('service.equipment.desc'),
      image: trolleybusSkoda,
      features: [t('service.equipment.f1'), t('service.equipment.f2'), t('service.equipment.f3'), t('service.equipment.f4')],
    },
    {
      icon: Cog,
      title: t('service.parts.title'),
      description: t('service.parts.desc'),
      image: spareParts,
      features: [t('service.parts.f1'), t('service.parts.f2'), t('service.parts.f3'), t('service.parts.f4')],
    },
    {
      icon: Wrench,
      title: t('service.maintenance.title'),
      description: t('service.maintenance.desc'),
      image: busIsuzu,
      features: [t('service.maintenance.f1'), t('service.maintenance.f2'), t('service.maintenance.f3'), t('service.maintenance.f4')],
    },
    {
      icon: GraduationCap,
      title: t('service.consulting.title'),
      description: t('service.consulting.desc'),
      image: trolleybusCity,
      features: [t('service.consulting.f1'), t('service.consulting.f2'), t('service.consulting.f3'), t('service.consulting.f4')],
    },
  ];

  const advantages = [
    { icon: Zap, title: t('servicesPage.speed'), description: t('servicesPage.speedDesc') },
    { icon: Shield, title: t('servicesPage.warranty'), description: t('servicesPage.warrantyDesc') },
    { icon: Settings, title: t('servicesPage.expertise'), description: t('servicesPage.expertiseDesc') },
  ];

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
                {t('servicesPage.badge')}
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                {t('servicesPage.title1')}{' '}
                <span className="text-accent">{t('servicesPage.title2')}</span>
              </h1>
              <p className="text-xl text-steel-light">
                {t('servicesPage.description')}
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
                  key={index}
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
                {t('servicesPage.whyTitle')}
              </h2>
              <p className="text-lg text-muted-foreground">
                {t('servicesPage.whyDesc')}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {advantages.map((item, index) => (
                <motion.div
                  key={index}
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
                {t('servicesPage.ctaTitle')}
              </h2>
              <p className="text-xl text-accent-foreground/80 mb-8 max-w-2xl mx-auto">
                {t('servicesPage.ctaDesc')}
              </p>
              <Link to="/contact">
                <Button variant="hero-outline" size="xl">
                  {t('servicesPage.ctaBtn')}
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
