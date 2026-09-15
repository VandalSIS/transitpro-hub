import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { termsSections } from '@/content/terms';

const TermsPage = () => {
  const { t, language } = useLanguage();
  const sections = termsSections[language];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="relative py-20 lg:py-28 bg-navy overflow-hidden">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
              backgroundSize: '40px 40px',
            }}
          />
          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-medium mb-6">
                <FileText className="w-4 h-4" />
                {t('terms.badge')}
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
                {t('terms.title')}
              </h1>
              <p className="text-steel-light">{t('terms.updated')}</p>
            </motion.div>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="container-custom">
            <motion.article
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="max-w-3xl mx-auto bg-card rounded-2xl border border-border shadow-lg p-6 sm:p-8 lg:p-12"
            >
              <p className="text-muted-foreground leading-relaxed mb-10">
                {t('terms.intro')}
              </p>

              <div className="space-y-10">
                {sections.map((section) => (
                  <section key={section.title}>
                    <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                      {section.title}
                    </h2>
                    <div className="space-y-3">
                      {section.paragraphs.map((paragraph, index) => (
                        <p
                          key={`${section.title}-${index}`}
                          className="text-muted-foreground leading-relaxed"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            </motion.article>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TermsPage;
