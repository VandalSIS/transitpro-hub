import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import { 
  Layers,
  Calendar,
  MapPin,
  Filter,
  X
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import trolleybusRtec from '@/assets/trolleybus-rtec.jpg';
import busIsuzu from '@/assets/bus-isuzu-blue.jpg';
import trolleybusSkoda from '@/assets/trolleybus-skoda.jpg';
import busModern from '@/assets/bus-modern.jpg';
import trolleybusCity from '@/assets/trolleybus-city.jpg';
import heroImage from '@/assets/hero-trolleybuses.jpg';

const projects = [
  {
    id: 1,
    image: trolleybusRtec,
    title: 'Modernizare Flotă RTEC Chișinău',
    category: 'Troleibuze',
    year: '2023',
    location: 'Chișinău',
    description: 'Livrare și punere în funcțiune a 10 troleibuze noi pentru Regia Transport Electric Chișinău.',
    details: 'Proiect complex care a inclus furnizarea de troleibuze articulate noi, training pentru operatori și contract de mentenanță pe 3 ani.',
  },
  {
    id: 2,
    image: busIsuzu,
    title: 'Autobuze ISUZU Transport Urban',
    category: 'Autobuze',
    year: '2023',
    location: 'Moldova',
    description: 'Furnizare de autobuze urbane ISUZU echipate cu sisteme moderne de transport.',
    details: 'Livrare de 15 autobuze ISUZU cu motor Euro 6, sistem de aer condiționat și platformă pentru persoane cu dizabilități.',
  },
  {
    id: 3,
    image: trolleybusSkoda,
    title: 'Parteneriat ŠKODA ELECTRIC',
    category: 'Parteneriat',
    year: '2024',
    location: 'Europa Centrală',
    description: 'Colaborare strategică pentru distribuția echipamentelor ŠKODA în regiune.',
    details: 'Semnarea acordului de parteneriat strategic cu ŠKODA ELECTRIC pentru distribuția exclusivă a echipamentelor în Moldova și regiunea.',
  },
  {
    id: 4,
    image: busModern,
    title: 'Renovare Flotă Bălți',
    category: 'Troleibuze',
    year: '2022',
    location: 'Bălți',
    description: 'Modernizarea completă a flotei de troleibuze din municipiul Bălți.',
    details: 'Proiect de renovare care a inclus înlocuirea sistemelor de propulsie și modernizarea interioarelor pentru 8 troleibuze.',
  },
  {
    id: 5,
    image: trolleybusCity,
    title: 'Piese Schimb RTEC',
    category: 'Piese',
    year: '2023',
    location: 'Chișinău',
    description: 'Contract de furnizare piese de schimb originale pentru întreaga flotă RTEC.',
    details: 'Contract anual pentru furnizarea de piese de schimb originale cu livrare în 48h și suport tehnic permanent.',
  },
  {
    id: 6,
    image: heroImage,
    title: 'Training Tehnic Sarajevo',
    category: 'Consultanță',
    year: '2023',
    location: 'Sarajevo',
    description: 'Program de training pentru personalul tehnic al companiei de transport din Sarajevo.',
    details: 'Program intensiv de 2 săptămâni pentru 20 de tehnicieni, acoperind diagnosticare, mentenanță și reparații.',
  },
];

const categories = ['Toate', 'Troleibuze', 'Autobuze', 'Piese', 'Consultanță', 'Parteneriat'];

const ProjectsPage = () => {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const [selectedCategory, setSelectedCategory] = useState('Toate');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = selectedCategory === 'Toate' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section ref={heroRef} className="relative py-20 lg:py-28 bg-navy overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
              backgroundSize: '40px 40px',
            }} />
          </div>

          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-medium mb-6">
                <Layers className="w-4 h-4" />
                Portofoliu
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                Proiecte{' '}
                <span className="text-accent">Finalizate cu Succes</span>
              </h1>
              <p className="text-xl text-steel-light">
                Explorați proiectele noastre reprezentative și vedeți 
                rezultatele colaborării cu noi.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 bg-background border-b border-border sticky top-20 z-40">
          <div className="container-custom">
            <div className="flex items-center gap-4 overflow-x-auto pb-2">
              <div className="flex items-center gap-2 text-muted-foreground shrink-0">
                <Filter className="w-4 h-4" />
                <span className="text-sm font-medium">Filtrează:</span>
              </div>
              <div className="flex gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                      selectedCategory === category
                        ? 'bg-accent text-accent-foreground'
                        : 'bg-muted text-muted-foreground hover:bg-muted/80'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-border">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold">
                          {project.category}
                        </span>
                      </div>
                    </div>
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

            {filteredProjects.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">Nu există proiecte în această categorie.</p>
              </div>
            )}
          </div>
        </section>

        {/* Project Modal */}
        {selectedProject && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-card rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full aspect-video object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-navy/80 flex items-center justify-center text-white hover:bg-navy transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-semibold">
                    {selectedProject.category}
                  </span>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {selectedProject.year}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {selectedProject.location}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  {selectedProject.title}
                </h2>
                <p className="text-muted-foreground mb-6">
                  {selectedProject.details}
                </p>
                <Button variant="cta" onClick={() => setSelectedProject(null)}>
                  Închide
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
