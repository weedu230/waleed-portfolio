import { Button } from '@/components/ui/button';
import heroPortrait from '@/assets/weedu-portrait.jpg';
import ParticleBackground from './ParticleBackground';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen portfolio-hero flex items-center justify-center relative overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border-2 border-brand-sky rounded-full animate-float opacity-20 hover-glow"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 border-2 border-brand-orange rounded-full animate-float opacity-20 hover-glow" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-brand-sky-light rounded-full animate-float opacity-10 hover-pulse" style={{ animationDelay: '4s' }}></div>
      
      <div className="container mx-auto px-6 text-center relative z-10 pt-24">
        <div className="animate-fade-in">
          {/* Profile Image */}
          <div className="mb-8 relative inline-block mt-8">
            <div className="w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-brand-sky shadow-lg animate-profile-float">
              <img 
                src="/lovable-uploads/a43da1fd-a9cc-4560-a312-4a67b8abb279.png" 
                alt="Muhammad Waleed Ahmed (Weedu)" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center text-white text-2xl font-bold">
              W
            </div>
          </div>

          {/* Name and Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-primary mb-4">
            <span className="block">Muhammad Waleed Ahmed</span>
            <span className="text-3xl md:text-4xl text-gradient block mt-2 typing-animation">(Weedu)</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Motivated Software Engineering Student | Future Full-Stack Developer
          </p>
          
          {/* Animated Role Text */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-4 text-lg stagger-children">
              <span className="px-4 py-2 bg-brand-sky/10 text-brand-sky rounded-full border border-brand-sky/20 hover-lift cursor-default">
                Software Developer
              </span>
              <span className="px-4 py-2 bg-brand-orange/10 text-brand-orange rounded-full border border-brand-orange/20 hover-lift cursor-default">
                Creative Coder
              </span>
              <span className="px-4 py-2 bg-brand-sky/10 text-brand-sky rounded-full border border-brand-sky/20 hover-lift cursor-default">
                Problem Solver
              </span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center stagger-children">
            <Button 
              size="lg"
              className="bg-brand-sky hover:bg-brand-sky/90 text-white border-0 px-8 py-3 text-lg hover-glow transform transition-all duration-300 hover:scale-105"
              onClick={() => scrollToSection('portfolio')}
            >
              View Portfolio
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white px-8 py-3 text-lg hover-lift link-underline"
              onClick={() => scrollToSection('contact')}
            >
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;