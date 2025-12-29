import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Layers, ArrowRight, Calendar, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import trolleybusRtec from '@/assets/trolleybus-rtec.jpg';
import busIsuzu from '@/assets/bus-isuzu-blue.jpg';
import trolleybusSkoda from '@/assets/trolleybus-skoda.jpg';

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { t, language } = useLanguage();

  const projects = [
    {
      image: trolleybusRtec,
      title: language === 'ro' ? 'Modernizare Flotă RTEC Chișinău' : 
             language === 'ru' ? 'Модернизация парка RTEC Кишинёв' : 
             'RTEC Chisinau Fleet Modernization',
      category: language === 'ro' ? 'Troleibuze' : language === 'ru' ? 'Троллейбусы' : 'Trolleybuses',
      year: '2023',
      location: language === 'ro' ? 'Chișinău' : language === 'ru' ? 'Кишинёв' : 'Chisinau',
      description: language === 'ro' ? 'Livrare și punere în funcțiune a 10 troleibuze noi pentru Regia Transport Electric.' :
                   language === 'ru' ? 'Поставка и ввод в эксплуатацию 10 новых троллейбусов для Regia Transport Electric.' :
                   'Delivery and commissioning of 10 new trolleybuses for Regia Transport Electric.',
    },
    {
      image: busIsuzu,
      title: language === 'ro' ? 'Autobuze ISUZU pentru Transport Urban' :
             language === 'ru' ? 'Автобусы ISUZU для городского транспорта' :
             'ISUZU Buses for Urban Transport',
      category: language === 'ro' ? 'Autobuze' : language === 'ru' ? 'Автобусы' : 'Buses',
      year: '2023',
      location: 'Moldova',
      description: language === 'ro' ? 'Furnizare de autobuze urbane ISUZU echipate cu sisteme moderne de transport.' :
                   language === 'ru' ? 'Поставка городских автобусов ISUZU с современными транспортными системами.' :
                   'Supply of ISUZU urban buses equipped with modern transport systems.',
    },
    {
      image: trolleybusSkoda,
      title: language === 'ro' ? 'Parteneriat ŠKODA ELECTRIC' :
             language === 'ru' ? 'Партнёрство ŠKODA ELECTRIC' :
             'ŠKODA ELECTRIC Partnership',
      category: language === 'ro' ? 'Parteneriat' : language === 'ru' ? 'Партнёрство' : 'Partnership',
      year: '2024',
      location: language === 'ro' ? 'Europa Centrală' : language === 'ru' ? 'Центральная Европа' : 'Central Europe',
      description: language === 'ro' ? 'Colaborare strategică pentru distribuția echipamentelor ŠKODA în regiune.' :
                   language === 'ru' ? 'Стратегическое сотрудничество по дистрибуции оборудования ŠKODA в регионе.' :
                   'Strategic collaboration for ŠKODA equipment distribution in the region.',
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
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
              <Layers className="w-4 h-4" />
              {t('projects.badge')}
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              {t('projects.title1')}{' '}
              <span className="text-accent">{t('projects.title2')}</span>
            </h2>
          </div>
          <Link to="/proiecte">
            <Button variant="outline" size="lg" className="group w-fit">
              {t('projects.viewAll')}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group cursor-pointer"
            >
              <div className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-border/50">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {project.year}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {project.location}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
