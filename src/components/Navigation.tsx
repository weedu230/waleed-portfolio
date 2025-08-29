import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';
import { downloadCV } from '@/utils/cvGenerator';
import { useToast } from '@/hooks/use-toast';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
          
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-brand-sky transition-all duration-300 border border-transparent hover:border-brand-sky/30 dark:border-brand-orange/50 dark:hover:border-brand-orange rounded-md px-3 py-2 relative overflow-hidden group hover-lift"
            >
              <span className="relative z-10">Home</span>
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-sky transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-brand-sky transition-all duration-300 border border-transparent hover:border-brand-sky/30 dark:border-brand-orange/50 dark:hover:border-brand-orange rounded-md px-3 py-2 relative overflow-hidden group hover-lift"
            >
              <span className="relative z-10">About</span>
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-sky transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-foreground hover:text-brand-sky transition-all duration-300 border border-transparent hover:border-brand-sky/30 dark:border-brand-orange/50 dark:hover:border-brand-orange rounded-md px-3 py-2 relative overflow-hidden group hover-lift"
            >
              <span className="relative z-10">Skills</span>
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-sky transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-brand-sky transition-all duration-300 border border-transparent hover:border-brand-sky/30 dark:border-brand-orange/50 dark:hover:border-brand-orange rounded-md px-3 py-2 relative overflow-hidden group hover-lift"
            >
              <span className="relative z-10">Services</span>
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-sky transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="text-foreground hover:text-brand-sky transition-all duration-300 border border-transparent hover:border-brand-sky/30 dark:border-brand-orange/50 dark:hover:border-brand-orange rounded-md px-3 py-2 relative overflow-hidden group hover-lift"
            >
              <span className="relative z-10">Portfolio</span>
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-sky transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-brand-sky transition-all duration-300 border border-transparent hover:border-brand-sky/30 dark:border-brand-orange/50 dark:hover:border-brand-orange rounded-md px-3 py-2 relative overflow-hidden group hover-lift"
            >
              <span className="relative z-10">Contact</span>
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-sky transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Button 
              variant="outline" 
              className="border-brand-sky text-brand-sky hover:bg-brand-sky hover:text-white transition-all hidden md:block hover-lift micro-bounce"
              onClick={handleDownloadCV}
            >
              Download CV
            </Button>
            
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-2 pt-4">
              <button
                onClick={() => { scrollToSection('home'); setIsMobileMenuOpen(false); }}
                className="text-foreground hover:text-brand-sky transition-colors border border-transparent hover:border-brand-sky/30 dark:border-brand-orange/50 dark:hover:border-brand-orange rounded-md px-3 py-2 text-left"
              >
                Home
              </button>
              <button
                onClick={() => { scrollToSection('about'); setIsMobileMenuOpen(false); }}
                className="text-foreground hover:text-brand-sky transition-colors border border-transparent hover:border-brand-sky/30 dark:border-brand-orange/50 dark:hover:border-brand-orange rounded-md px-3 py-2 text-left"
              >
                About
              </button>
              <button
                onClick={() => { scrollToSection('skills'); setIsMobileMenuOpen(false); }}
                className="text-foreground hover:text-brand-sky transition-colors border border-transparent hover:border-brand-sky/30 dark:border-brand-orange/50 dark:hover:border-brand-orange rounded-md px-3 py-2 text-left"
              >
                Skills
              </button>
              <button
                onClick={() => { scrollToSection('services'); setIsMobileMenuOpen(false); }}
                className="text-foreground hover:text-brand-sky transition-colors border border-transparent hover:border-brand-sky/30 dark:border-brand-orange/50 dark:hover:border-brand-orange rounded-md px-3 py-2 text-left"
              >
                Services
              </button>
              <button
                onClick={() => { scrollToSection('portfolio'); setIsMobileMenuOpen(false); }}
                className="text-foreground hover:text-brand-sky transition-colors border border-transparent hover:border-brand-sky/30 dark:border-brand-orange/50 dark:hover:border-brand-orange rounded-md px-3 py-2 text-left"
              >
                Portfolio
              </button>
              <button
                onClick={() => { scrollToSection('contact'); setIsMobileMenuOpen(false); }}
                className="text-foreground hover:text-brand-sky transition-colors border border-transparent hover:border-brand-sky/30 dark:border-brand-orange/50 dark:hover:border-brand-orange rounded-md px-3 py-2 text-left"
              >
                Contact
              </button>
              <Button 
                variant="outline" 
                className="border-brand-sky text-brand-sky hover:bg-brand-sky hover:text-white transition-all mt-2"
                onClick={() => { handleDownloadCV(); setIsMobileMenuOpen(false); }}
              >
                Download CV
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;