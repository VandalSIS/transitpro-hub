import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Clock, Shield, Euro, Headphones, Award, Truck } from 'lucide-react';

const advantages = [
  {
    icon: Award,
    title: 'Experiență Vastă',
    description: 'Echipă cu peste 19 ani de experiență în industria transportului public, cu mii de proiecte finalizate cu succes.',
  },
  {
    icon: Shield,
    title: 'Parteneri Certificați',
    description: 'Colaborăm exclusiv cu producători europeni certificați pentru calitate și siguranță garantată.',
  },
  {
    icon: Clock,
    title: 'Service Rapid',
    description: 'Intervenții rapide și eficiente, cu timp de răspuns minim pentru a menține flota în funcțiune.',
  },
  {
    icon: Euro,
    title: 'Prețuri Competitive',
    description: 'Raport calitate-preț excelent, cu opțiuni flexibile de plată și condiții avantajoase.',
  },
  {
    icon: Headphones,
    title: 'Suport 24/7',
    description: 'Echipa noastră de suport tehnic este disponibilă non-stop pentru asistență și consultanță.',
  },
  {
    icon: Truck,
    title: 'Livrare Rapidă',
    description: 'Piese de schimb din stoc sau cu livrare rapidă din rețeaua noastră europeană de furnizori.',
  },
];

export default function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="section-padding bg-navy text-primary-foreground overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-medium mb-6">
            <Award className="w-4 h-4" />
            De Ce Să Ne Alegeți
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Avantajele Colaborării cu{' '}
            <span className="text-accent">Transport Systems</span>
          </h2>
          <p className="text-lg text-steel-light">
            Alegând-ne pe noi, alegeți un partener dedicat succesului 
            operațiunilor dumneavoastră de transport.
          </p>
        </motion.div>

        {/* Advantages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-8 rounded-2xl bg-navy-light/50 border border-steel/20 hover:border-accent/50 transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <advantage.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                  {advantage.title}
                </h3>
                <p className="text-steel-light leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
