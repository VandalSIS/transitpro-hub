import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Bus, Cog, Wrench, GraduationCap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Bus,
    title: 'Vânzare Echipamente',
    description: 'Autobuze, troleibuze și autobuze electrice noi și second-hand de la producători europeni de renume.',
    href: '/servicii/echipamente',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Cog,
    title: 'Piese de Schimb',
    description: 'Piese originale pentru motor, transmisie, frânare, sisteme electrice și interior, cu livrare rapidă.',
    href: '/servicii/piese',
    color: 'from-orange-500 to-orange-600',
  },
  {
    icon: Wrench,
    title: 'Service și Mentenanță',
    description: 'Servicii complete de garanție și post-garanție, diagnosticare computerizată și intervenții rapide.',
    href: '/servicii/service',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: GraduationCap,
    title: 'Consultanță & Training',
    description: 'Consultanță tehnică specializată, training pentru personal și planificare optimă a flotei.',
    href: '/servicii/consultanta',
    color: 'from-purple-500 to-purple-600',
  },
];

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="section-padding bg-muted/50 overflow-hidden">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
            <Cog className="w-4 h-4" />
            Servicii Complete
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Tot Ce Aveți Nevoie pentru{' '}
            <span className="text-accent">Flota Dvs.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            De la achiziționarea vehiculelor până la mentenanța completă, 
            suntem alături de dvs. la fiecare pas.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link
                to={service.href}
                className="block h-full group"
              >
                <div className="h-full bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-border/50">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Link */}
                  <div className="flex items-center text-accent font-semibold text-sm">
                    <span>Află mai multe</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
