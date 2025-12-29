import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Clock, Users, Award, Headphones } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { t } = useLanguage();

  const reasons = [
    {
      icon: Clock,
      title: t('why.experience'),
      description: t('why.experienceDesc'),
    },
    {
      icon: Users,
      title: t('why.partners'),
      description: t('why.partnersDesc'),
    },
    {
      icon: Award,
      title: t('why.quality'),
      description: t('why.qualityDesc'),
    },
    {
      icon: Headphones,
      title: t('why.support'),
      description: t('why.supportDesc'),
    },
  ];

  return (
    <section ref={ref} className="section-padding bg-navy overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-medium mb-6">
            <Award className="w-4 h-4" />
            {t('why.badge')}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            {t('why.title1')}{' '}
            <span className="text-accent">{t('why.title2')}</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
                <reason.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-primary-foreground mb-3">
                {reason.title}
              </h3>
              <p className="text-steel-light text-sm leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
