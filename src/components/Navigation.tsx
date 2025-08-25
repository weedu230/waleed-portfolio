import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { downloadCV } from '@/utils/cvGenerator';
import { useToast } from '@/hooks/use-toast';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadCV = async () => {
    try {
      await downloadCV();
      toast({
        title: "CV Downloaded",
        description: "Your CV has been downloaded successfully!",
      });
    } catch (error) {
      toast({
        title: "Download Failed", 
        description: "There was an error downloading the CV. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 mt-6 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-sm shadow-sm border-b mt-0' 
        : 'bg-transparent mt-6'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">
            Weedu
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-brand-sky transition-colors border border-transparent hover:border-brand-sky/30 rounded-md px-3 py-2"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-brand-sky transition-colors border border-transparent hover:border-brand-sky/30 rounded-md px-3 py-2"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-foreground hover:text-brand-sky transition-colors border border-transparent hover:border-brand-sky/30 rounded-md px-3 py-2"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-brand-sky transition-colors border border-transparent hover:border-brand-sky/30 rounded-md px-3 py-2"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="text-foreground hover:text-brand-sky transition-colors border border-transparent hover:border-brand-sky/30 rounded-md px-3 py-2"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-brand-sky transition-colors border border-transparent hover:border-brand-sky/30 rounded-md px-3 py-2"
            >
              Contact
            </button>
          </div>

          <Button 
            variant="outline" 
            className="border-brand-sky text-brand-sky hover:bg-brand-sky hover:text-white transition-all"
            onClick={handleDownloadCV}
          >
            Download CV
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;