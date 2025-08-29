import { Button } from '@/components/ui/button';
import { useTypingAnimation } from '@/hooks/useTypingAnimation';
import AnimatedBackground from '@/components/AnimatedBackground';
import heroPortrait from '@/assets/weedu-portrait.jpg';

const Hero = () => {
  const typingTexts = [
    'Software Engineering Student',
    'Future Full-Stack Developer',
    'Creative Problem Solver',
    'Tech Enthusiast'
  ];
  
  const animatedSubtitle = useTypingAnimation(typingTexts, 80, 40, 1500);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen portfolio-hero flex items-center justify-center relative overflow-hidden">
      {/* Animated Particle Background */}
      <AnimatedBackground />
      
      {/* Floating Geometric Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border-2 border-brand-sky rounded-full animate-float opacity-20"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 border-2 border-brand-orange rounded-full animate-float opacity-20" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-brand-sky-light rounded-full animate-float opacity-10" style={{ animationDelay: '4s' }}></div>
      <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-gradient-to-r from-brand-sky to-brand-orange rounded-full animate-float opacity-20" style={{ animationDelay: '6s' }}></div>
      
      <div className="container mx-auto px-6 text-center relative z-10 pt-24">
        <div className="animate-fade-in">
          {/* Profile Image */}
          <div className="mb-8 relative inline-block mt-8">
            <div className="w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-brand-sky shadow-lg animate-profile-float hover-glow">
              <img 
                src="/lovable-uploads/a5d69f6a-52c6-4140-987e-29f338b484be.png" 
                alt="Muhammad Waleed Ahmed (Weedu)" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                onError={(e) => {
                  console.log('Image failed to load:', e.currentTarget.src);
                  e.currentTarget.src = heroPortrait; // Fallback to imported image
                }}
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center text-white text-2xl font-bold animate-bounce">
              W
            </div>
          </div>

          {/* Name and Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-primary mb-4">
            <span className="block animate-fade-in">Muhammad Waleed Ahmed</span>
            <span className="text-3xl md:text-4xl text-gradient block mt-2 animate-fade-in" style={{ animationDelay: '0.3s' }}>(Weedu)</span>
          </h1>
          
          <div className="text-xl md:text-2xl text-muted-foreground mb-8 h-16 flex items-center justify-center">
            <span className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
              {animatedSubtitle}
              <span className="animate-pulse text-brand-sky ml-1">|</span>
            </span>
          </div>
          
          {/* Animated Role Text */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-4 text-lg">
              <span className="px-4 py-2 bg-brand-sky/10 text-brand-sky rounded-full border border-brand-sky/20 animate-slide-in">
                Software Developer
              </span>
              <span className="px-4 py-2 bg-brand-orange/10 text-brand-orange rounded-full border border-brand-orange/20 animate-slide-in" style={{ animationDelay: '0.2s' }}>
                Creative Coder
              </span>
              <span className="px-4 py-2 bg-brand-sky/10 text-brand-sky rounded-full border border-brand-sky/20 animate-slide-in" style={{ animationDelay: '0.4s' }}>
                Problem Solver
              </span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '1.2s' }}>
            <Button 
              size="lg"
              className="bg-brand-sky hover:bg-brand-sky/90 text-white border-0 px-8 py-3 text-lg transition-all hover:scale-105"
              onClick={() => scrollToSection('portfolio')}
            >
              View Portfolio
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white px-8 py-3 text-lg transition-all hover:scale-105"
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