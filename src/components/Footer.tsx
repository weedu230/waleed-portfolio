import { Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import FooterBackground from './FooterBackground';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Footer = () => {
  const [ref, isVisible] = useScrollAnimation(0.1);
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background dark:bg-primary text-foreground dark:text-primary-foreground py-12 relative overflow-hidden border-t border-border transition-colors duration-300" ref={ref}>
      {/* Animated Background */}
      <FooterBackground />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className={`grid md:grid-cols-3 gap-8 mb-8 transition-all duration-700 ${isVisible ? 'stagger-children' : ''}`}>
          {/* Brand */}
          <div className="group">
            <h3 className="text-2xl font-bold mb-4 text-gradient hover-glow">Weedu</h3>
            <p className="text-muted-foreground dark:text-primary-foreground/80 leading-relaxed transition-colors duration-300">
              Building the future through code, one project at a time. 
              Passionate about creating innovative solutions and meaningful digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="group">
            <h4 className="text-lg font-semibold mb-4 text-foreground dark:text-primary-foreground">Quick Links</h4>
            <div className="space-y-2">
              {['Home', 'About', 'Skills', 'Services', 'Portfolio', 'Contact'].map((link, index) => (
                <button
                  key={link}
                  onClick={() => {
                    const element = document.getElementById(link.toLowerCase());
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="block text-muted-foreground dark:text-primary-foreground/80 hover:text-brand-sky transition-all duration-300 link-underline hover:translate-x-2"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div className="group">
            <h4 className="text-lg font-semibold mb-4 text-foreground dark:text-primary-foreground">Let's Connect</h4>
            <p className="text-muted-foreground dark:text-primary-foreground/80 mb-4 transition-colors duration-300">
              Ready to work together? Reach out and let's create something amazing.
            </p>
            <Button 
              variant="outline" 
              className="border-brand-sky text-brand-sky hover:bg-brand-sky hover:text-white hover-glow transform transition-all duration-300 hover:scale-105"
              onClick={() => window.open('mailto:mwaleed256@gmail.com')}
            >
              Start a Conversation
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border dark:border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center transition-colors duration-300">
          <p className="text-muted-foreground dark:text-primary-foreground/60 text-center md:text-left mb-4 md:mb-0 transition-colors duration-300">
            © {currentYear} Muhammad Waleed Ahmed (Weedu). Made with{' '}
            <Heart className="inline w-4 h-4 text-brand-orange hover-pulse cursor-default" />{' '}
            in Karachi, Pakistan.
          </p>
          
          <Button
            variant="outline"
            size="sm"
            onClick={scrollToTop}
            className="border-border dark:border-primary-foreground/20 text-brand-orange hover:bg-accent dark:hover:bg-primary-foreground/10 hover-glow transform transition-all duration-300 hover:scale-105"
          >
            <ArrowUp className="w-4 h-4 mr-2 skill-icon" />
            Back to Top
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;