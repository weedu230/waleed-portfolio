import { Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12 relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Weedu</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Building the future through code, one project at a time. 
              Passionate about creating innovative solutions and meaningful digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['Home', 'About', 'Skills', 'Services', 'Portfolio', 'Contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    const element = document.getElementById(link.toLowerCase());
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="block text-primary-foreground/80 hover:text-brand-sky transition-colors"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Let's Connect</h4>
            <p className="text-primary-foreground/80 mb-4">
              Ready to work together? Reach out and let's create something amazing.
            </p>
            <Button 
              variant="outline" 
              className="border-brand-sky text-brand-sky hover:bg-brand-sky hover:text-white"
              onClick={() => window.open('mailto:mwaleed256@gmail.com')}
            >
              Start a Conversation
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/60 text-center md:text-left mb-4 md:mb-0">
            © {currentYear} Muhammad Waleed Ahmed (Weedu). Made with{' '}
            <Heart className="inline w-4 h-4 text-brand-orange" />{' '}
            in Karachi, Pakistan.
          </p>
          
          <Button
            variant="outline"
            size="sm"
            onClick={scrollToTop}
            className="border-primary-foreground/20 text-brand-orange hover:bg-primary-foreground/10"
          >
            <ArrowUp className="w-4 h-4 mr-2" />
            Back to Top
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;