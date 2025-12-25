import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Phone, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import trolleybusCity from '@/assets/trolleybus-city.jpg';

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={trolleybusCity}
          alt="Troleibuz în oraș"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Animated Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 leading-tight">
            Sunteți Gata să Începeți un{' '}
            <span className="text-accent">Proiect cu Noi?</span>
          </h2>
          <p className="text-xl text-steel-light mb-10 max-w-2xl mx-auto">
            Contactați-ne astăzi pentru o consultație gratuită și o ofertă 
            personalizată pentru nevoile dumneavoastră de transport.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button variant="cta" size="xl" className="group">
              Solicită Ofertă Gratuită
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="hero-outline" size="xl" className="group">
              <Phone className="w-5 h-5" />
              +373 69 312 300
            </Button>
          </motion.div>

          {/* Quick Contact Options */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-wrap justify-center gap-6 text-steel-light"
          >
            <a
              href="https://wa.me/37369312300"
              className="flex items-center gap-2 hover:text-accent transition-colors"
            >
              <MessageSquare className="w-5 h-5" />
              <span>WhatsApp</span>
            </a>
            <span className="hidden sm:block">•</span>
            <span>Răspundem în maxim 24h</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
