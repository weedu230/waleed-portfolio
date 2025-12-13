import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FuturisticBackground from '@/components/FuturisticBackground';
import AIAssistant from '@/components/AIAssistant';

const Index = () => {
  return (
    <div className="min-h-screen scroll-smooth relative">
      <FuturisticBackground />
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
        <AIAssistant />
      </div>
    </div>
  );
};

export default Index;
