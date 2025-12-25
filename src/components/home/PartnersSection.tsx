import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Building2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const partners = [
  { name: 'Regia Transport Electric', location: 'Chișinău, Moldova' },
  { name: 'Parcul Urban de Autobuze', location: 'Chișinău, Moldova' },
  { name: 'Direcția de Troleibuze Bălți', location: 'Bălți, Moldova' },
  { name: 'ŠKODA ELECTRIC a.s.', location: 'Plzeň, Cehia' },
  { name: 'MOTOBUS Sp. zoo', location: 'Polonia' },
  { name: 'Ministry of Traffic Sarajevo', location: 'Sarajevo, Bosnia' },
  { name: 'Graboplast FMPCL', location: 'Ungaria' },
  { name: 'ZEZ SILKO s.r.o.', location: 'Cehia' },
  { name: 'Cabex Co Srl', location: 'Italia' },
];

export default function PartnersSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="section-padding bg-background overflow-hidden">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
            <Building2 className="w-4 h-4" />
            Parteneri de Încredere
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Colaborăm cu{' '}
            <span className="text-accent">Lideri Internaționali</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Parteneriate solide cu producători și operatori de transport public 
            din Europa și regiunea noastră.
          </p>
        </motion.div>

        {/* Partners Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group"
            >
              <div className="h-full bg-card rounded-xl p-6 border border-border hover:border-accent/50 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center shrink-0 group-hover:bg-accent/10 transition-colors">
                    <Building2 className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors mb-1">
                      {partner.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {partner.location}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <Button variant="outline" size="lg" className="group">
            Vezi Toți Partenerii
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
