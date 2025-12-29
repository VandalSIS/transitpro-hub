import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Bus, Cog, Wrench, GraduationCap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { t } = useLanguage();

  const services = [
    {
      icon: Bus,
      title: t('services.equipment'),
      description: t('services.equipmentDesc'),
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Cog,
      title: t('services.parts'),
      description: t('services.partsDesc'),
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: Wrench,
      title: t('services.maintenance'),
      description: t('services.maintenanceDesc'),
      color: 'from-green-500 to-green-600',
    },
    {
      icon: GraduationCap,
      title: t('services.consulting'),
      description: t('services.consultingDesc'),
      color: 'from-purple-500 to-purple-600',
    },
  ];

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
            {t('services.badge')}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t('services.title1')}{' '}
            <span className="text-accent">{t('services.title2')}</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('services.description')}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="h-full bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-border/50">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
