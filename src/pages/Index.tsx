import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import ServicesSection from '@/components/home/ServicesSection';
import PartnersSection from '@/components/home/PartnersSection';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import ProjectsSection from '@/components/home/ProjectsSection';
import CTASection from '@/components/home/CTASection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WhyChooseUs />
        <ProjectsSection />
        <PartnersSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
