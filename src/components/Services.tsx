import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Code, 
  Smartphone, 
  Globe, 
  Cog,
  ArrowRight
} from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Services = () => {
  const [ref, isVisible] = useScrollAnimation(0.2);
  const services = [
    {
      icon: Code,
      title: "Custom Software Development",
      description: "Full-stack web applications, desktop software, and automation tools built with modern technologies and best practices.",
      features: ["Web Applications", "Desktop Software", "Automation Scripts", "Database Design"],
      color: "brand-sky"
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Responsive, modern websites and web applications using React, Next.js, and other cutting-edge technologies.",
      features: ["Responsive Design", "Modern UI/UX", "Performance Optimization", "SEO Friendly"],
      color: "brand-orange"
    },
    {
      icon: Cog,
      title: "System Integration",
      description: "Integration solutions, API development, and system optimization to streamline your business processes.",
      features: ["API Development", "Third-party Integration", "Data Migration", "System Optimization"],
      color: "brand-sky"
    },
    {
      icon: Smartphone,
      title: "Cross-Platform Solutions",
      description: "Applications that work seamlessly across different platforms and devices with consistent user experience.",
      features: ["Cross-Platform Apps", "Mobile-First Design", "Progressive Web Apps", "Cloud Integration"],
      color: "brand-orange"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-secondary/20" ref={ref}>
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Services</h2>
          <div className="w-24 h-1 bg-brand-sky mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Comprehensive software development services focused on efficiency, scalability, and clean design.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className={`portfolio-card hover-lift group transition-all duration-700 ${isVisible ? 'animate-zoom-in' : 'opacity-0 translate-y-8'}`} style={{ animationDelay: `${index * 150 + 200}ms` }}>
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 bg-${service.color}/10 rounded-full flex items-center justify-center mr-4 skill-icon micro-bounce`}>
                      <IconComponent className={`w-8 h-8 text-${service.color}`} />
                    </div>
                    <h3 className="text-2xl font-bold text-primary">{service.title}</h3>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-primary mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-muted-foreground">
                          <div className={`w-2 h-2 bg-${service.color} rounded-full mr-3`}></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className={`border-${service.color} text-${service.color} hover:bg-${service.color} hover:text-white group-hover:translate-x-1 transition-all hover-lift micro-bounce relative overflow-hidden group`}
                    onClick={scrollToContact}
                  >
                    <span className="relative z-10">Get Started</span>
                    <ArrowRight className="w-4 h-4 ml-2 relative z-10" />
                    <div className={`absolute inset-0 bg-gradient-to-r from-${service.color} to-brand-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;