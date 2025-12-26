import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle, Award, Users, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import busImage from '@/assets/bus-modern.jpg';

const features = [
  'Parteneriate cu producători europeni de top',
  'Service autorizat și suport tehnic 24/7',
  'Piese de schimb originale cu garanție',
  'Consultanță tehnică specializată',
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="section-padding bg-background overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={busImage}
                alt="Autobuz modern ISUZU"
                className="w-full h-auto aspect-[4/3] object-cover"
              />
              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass-card rounded-xl p-4 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center shrink-0">
                    <Award className="w-7 h-7 text-accent-foreground" />
                  </div>
                  <div>
                    <div className="font-bold text-foreground">Certificări Europene</div>
                    <div className="text-sm text-muted-foreground">ISO 9001:2015 Certified</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -top-6 -right-6 glass-card rounded-xl p-6 shadow-xl hidden lg:block"
            >
              <div className="text-4xl font-bold text-accent mb-1">19+</div>
              <div className="text-sm text-muted-foreground">Ani Experiență Echipă</div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
              <Users className="w-4 h-4" />
              Despre Compania Noastră
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Lider în Industria{' '}
              <span className="text-accent">Transportului Public</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Din 2021, Transport Systems SRL este partenerul de încredere al 
              companiilor de transport public din Republica Moldova și regiune. 
              Echipa noastră are peste 19 ani de experiență în industrie. 
              Oferim soluții complete – de la furnizarea de echipamente noi și 
              second-hand, până la piese de schimb originale și servicii de 
              mentenanță de înaltă calitate.
            </p>

            <ul className="space-y-4 mb-10">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </motion.li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <Link to="/despre">
                <Button variant="outline" size="lg" className="group">
                  <Shield className="w-5 h-5" />
                  Despre Noi
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
