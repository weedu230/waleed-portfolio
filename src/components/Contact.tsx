import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { 
  Mail, 
  Phone, 
  Github, 
  Linkedin, 
  Send, 
  MapPin 
} from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Contact = () => {
  const [ref, isVisible] = useScrollAnimation(0.2);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/functions/v1/send-contact-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Message Sent!",
          description: "Thank you for your message. I'll get back to you soon!",
        });
        
        // Reset form
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(result.error || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "mwaleed256@gmail.com",
      link: "mailto:mwaleed256@gmail.com",
      color: "brand-sky"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "03332406306",
      link: "tel:03332406306",
      color: "brand-orange"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/weedu230",
      link: "https://github.com/weedu230",
      color: "brand-sky"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/weedu",
      link: "https://linkedin.com/in/weedu",
      color: "brand-orange"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/20" ref={ref}>
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-brand-sky mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Ready to start your next project? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className={`space-y-8 transition-all duration-700 delay-200 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8'}`}>
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <a
                      key={index}
                      href={item.link}
                      className="flex items-center p-4 portfolio-card rounded-lg transition-all hover:translate-x-2"
                      target={item.link.startsWith('http') ? '_blank' : undefined}
                      rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      <div className={`w-12 h-12 bg-${item.color}/10 rounded-full flex items-center justify-center mr-4`}>
                        <IconComponent className={`w-6 h-6 text-${item.color}`} />
                      </div>
                      <div>
                        <p className="font-medium text-primary">{item.label}</p>
                        <p className="text-muted-foreground">{item.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Location */}
            <Card className="portfolio-card">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-brand-sky/10 rounded-full flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6 text-brand-sky" />
                  </div>
                  <h4 className="text-xl font-bold text-primary">Location</h4>
                </div>
                <p className="text-muted-foreground">
                  Karachi, Pakistan<br />
                  Available for remote work worldwide
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className={`portfolio-card transition-all duration-700 delay-300 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8'}`}>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="border-muted-foreground/20 focus:border-brand-sky transition-colors"
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border-muted-foreground/20 focus:border-brand-sky transition-colors"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="border-muted-foreground/20 focus:border-brand-sky transition-colors resize-none"
                  />
                </div>
                <Button 
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-brand-sky hover:bg-brand-sky/90 text-white disabled:opacity-50"
                >
                  <Send className="w-5 h-5 mr-2" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;