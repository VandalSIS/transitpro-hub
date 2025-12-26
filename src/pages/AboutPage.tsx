import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { useInView } from 'framer-motion';
import { 
  Target, 
  Eye, 
  Users, 
  Award, 
  Clock,
  Building2,
  CheckCircle,
  Play
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import busModern from '@/assets/bus-modern.jpg';
import trolleybusRtec from '@/assets/trolleybus-rtec.jpg';

const milestones = [
  { year: '2021', title: 'Fondarea Companiei', description: 'Înființarea Transport Systems SRL în Chișinău cu echipă experimentată' },
  { year: '2022', title: 'Parteneriat ŠKODA', description: 'Semnarea contractului cu ŠKODA ELECTRIC' },
  { year: '2023', title: 'Extindere Rapidă', description: 'Dezvoltare parteneriate în Europa de Est și Centrală' },
  { year: '2024', title: '50+ Parteneri', description: 'Rețea de peste 50 parteneri internaționali' },
];

const values = [
  { icon: Target, title: 'Excelență', description: 'Standarde înalte în tot ceea ce facem' },
  { icon: Users, title: 'Parteneriat', description: 'Relații de lungă durată cu clienții noștri' },
  { icon: Award, title: 'Calitate', description: 'Produse și servicii certificate european' },
  { icon: Clock, title: 'Promptitudine', description: 'Răspuns rapid la nevoile clienților' },
];

function Counter({ end, suffix = '' }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, end]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const AboutPage = () => {
  const heroRef = useRef(null);
  const missionRef = useRef(null);
  const timelineRef = useRef(null);
  const valuesRef = useRef(null);
  
  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const missionInView = useInView(missionRef, { once: true, amount: 0.3 });
  const timelineInView = useInView(timelineRef, { once: true, amount: 0.2 });
  const valuesInView = useInView(valuesRef, { once: true, amount: 0.3 });

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section ref={heroRef} className="relative py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={trolleybusRtec}
              alt="Troleibuze RTEC"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 hero-overlay" />
          </div>

          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 backdrop-blur-sm border border-accent/30 mb-6">
                <Building2 className="w-4 h-4 text-accent" />
                <span className="text-primary-foreground text-sm font-medium">Despre Noi</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                Istoria și Viziunea{' '}
                <span className="text-accent">Transport Systems</span>
              </h1>
              <p className="text-xl text-steel-light">
                Din 2021, suntem dedicați modernizării transportului public din Republica Moldova și regiune. 
                Echipa noastră are peste 19 ani de experiență în industrie.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-navy">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: 19, suffix: '+', label: 'Ani Experiență Echipă' },
                { value: 50, suffix: '+', label: 'Parteneri' },
                { value: 1000, suffix: '+', label: 'Vehicule Deservite' },
                { value: 9, suffix: '', label: 'Țări Acoperite' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl lg:text-5xl font-bold text-accent mb-2">
                    <Counter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-steel-light">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section ref={missionRef} className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={missionInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <img
                  src={busModern}
                  alt="Autobuz modern"
                  className="rounded-2xl shadow-2xl"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={missionInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="space-y-8">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                        <Target className="w-6 h-6 text-accent" />
                      </div>
                      <h2 className="text-2xl font-bold text-foreground">Misiunea Noastră</h2>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      Să oferim soluții complete și de înaltă calitate pentru transportul public, 
                      contribuind la modernizarea infrastructurii de transport și la îmbunătățirea 
                      calității vieții cetățenilor din regiune.
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-cta/10 flex items-center justify-center">
                        <Eye className="w-6 h-6 text-cta" />
                      </div>
                      <h2 className="text-2xl font-bold text-foreground">Viziunea Noastră</h2>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      Să devenim liderul regional în furnizarea de echipamente și servicii pentru 
                      transportul public electric și sustenabil, promovând inovația și 
                      responsabilitatea față de mediu.
                    </p>
                  </div>

                  <Button variant="cta" size="lg" className="group">
                    <Play className="w-5 h-5" />
                    Video Prezentare
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section ref={timelineRef} className="section-padding bg-muted/50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={timelineInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Parcursul Nostru
              </h2>
              <p className="text-lg text-muted-foreground">
                De la o companie locală la un partener regional de încredere în industria transportului public.
              </p>
            </motion.div>

            <div className="relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />
              
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={milestone.year}
                    initial={{ opacity: 0, y: 30 }}
                    animate={timelineInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    className={`flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <div className="bg-card rounded-xl p-6 shadow-lg border border-border inline-block">
                        <div className="text-accent font-bold text-xl mb-2">{milestone.year}</div>
                        <h3 className="font-bold text-foreground text-lg mb-2">{milestone.title}</h3>
                        <p className="text-muted-foreground text-sm">{milestone.description}</p>
                      </div>
                    </div>
                    
                    <div className="w-4 h-4 rounded-full bg-accent border-4 border-background shadow-lg shrink-0 hidden md:block" />
                    
                    <div className="flex-1 hidden md:block" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section ref={valuesRef} className="section-padding bg-navy text-primary-foreground">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Valorile Noastre
              </h2>
              <p className="text-lg text-steel-light">
                Principiile care ne ghidează în fiecare zi și în fiecare proiect.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-steel-light">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
