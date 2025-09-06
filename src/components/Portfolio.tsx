import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  ExternalLink, 
  Github, 
  Gamepad2, 
  Calculator, 
  Bot, 
  Palette, 
  Globe, 
  MessageSquare,
  Hospital
} from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { use3DTilt } from '@/hooks/use3DTilt';
import { useMagneticEffect } from '@/hooks/useMagneticEffect';

const Portfolio = () => {
  const [ref, isVisible] = useScrollAnimation(0.2);
  const magneticRef = useMagneticEffect({ strength: 0.2, threshold: 60 });
  const projects = [
    {
      title: "Flappy Bird Clone",
      icon: Gamepad2,
      tech: "JavaScript",
      description: "A browser-based arcade game replicating the classic Flappy Bird mechanics with smooth animations and responsive controls.",
      color: "brand-sky",
      category: "Game Development",
      githubUrl: "https://github.com/weedu230/flappy-bird-clone"
    },
    {
      title: "GPA Calculator",
      icon: Calculator,
      tech: "HTML",
      description: "A simple web tool to calculate GPA with ease and accuracy, featuring an intuitive interface and real-time calculations.",
      color: "brand-orange",
      category: "Web Application",
      githubUrl: "https://github.com/weedu230/gpa-calculator"
    },
    {
      title: "Jarvis AI Assistant",
      icon: Bot,
      tech: "Python",
      description: "A personal AI assistant inspired by Iron Man, with voice recognition and automation features for daily tasks.",
      color: "brand-sky",
      category: "AI & Automation",
      githubUrl: "https://github.com/weedu230/jarvis-ai-assistant"
    },
    {
      title: "Paint Application",
      icon: Palette,
      tech: "C#",
      description: "A desktop drawing tool with freehand sketching, color picker, and adjustable brush sizes for digital art creation.",
      color: "brand-orange",
      category: "Desktop Application",
      githubUrl: "https://github.com/weedu230/paint-application"
    },
    {
      title: "Restaurant Website",
      icon: Globe,
      tech: "HTML",
      description: "A responsive restaurant website showcasing menus and services with a modern UI and seamless user experience.",
      color: "brand-sky",
      category: "Web Design",
      githubUrl: "https://github.com/weedu230/restaurant-website"
    },
    {
      title: "NeoAura Chatbot",
      icon: MessageSquare,
      tech: "Java",
      description: "An AI-driven chatbot management system to enhance user interaction and automation with intelligent responses.",
      color: "brand-orange",
      category: "AI & Backend",
      githubUrl: "https://github.com/weedu230/neoaura-chatbot"
    },
    {
      title: "Hospital Management System",
      icon: Hospital,
      tech: "Java + MySQL",
      description: "A comprehensive hospital management system with patient records, appointment scheduling, and staff management features.",
      color: "brand-sky",
      category: "Enterprise Application",
      githubUrl: "https://github.com/weedu230/hospital-management-system"
    }
  ];

  return (
    <section id="portfolio" className="py-20" ref={ref}>
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Portfolio</h2>
          <div className="w-24 h-1 bg-brand-orange mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            A showcase of diverse projects demonstrating expertise across web development, desktop applications, AI, and game development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            const ProjectCard = () => {
              const tiltRef = use3DTilt({ maxTilt: 15, scale: 1.05 });
              
              return (
                <Card 
                  ref={tiltRef}
                  key={index} 
                  className={`portfolio-card group overflow-hidden transition-all duration-700 tilt-3d card-3d cursor-pointer ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8'}`} 
                  style={{ animationDelay: `${index * 100 + 200}ms` }}
                >
                  <CardContent className="p-0 relative">
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-sky/10 to-brand-orange/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
                    {/* Project Header */}
                    <div className={`bg-${project.color}/5 p-6 border-b border-${project.color}/10 relative z-20`}>
                      <div className="flex items-center justify-between mb-4">
                        <div className={`w-12 h-12 bg-${project.color}/10 rounded-full flex items-center justify-center skill-icon group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className={`w-6 h-6 text-${project.color} group-hover:rotate-12 transition-transform duration-300`} />
                        </div>
                        <span className={`text-xs px-3 py-1 bg-${project.color}/10 text-${project.color} rounded-full border border-${project.color}/20 group-hover:scale-105 transition-transform duration-300`}>
                          {project.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-brand-sky group-hover:to-brand-orange group-hover:bg-clip-text transition-all duration-300">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-2">
                        <span className={`text-sm font-medium text-${project.color} group-hover:animate-pulse`}>
                          {project.tech}
                        </span>
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="p-6 relative z-20">
                      <p className="text-muted-foreground leading-relaxed mb-6 group-hover:text-foreground transition-colors duration-300">
                        {project.description}
                      </p>
                      
                      <div className="flex justify-end">
                        <Button 
                          size="sm"
                          variant="outline"
                          className={`border-${project.color}/30 text-${project.color} hover:bg-${project.color}/10 morphing-button group-hover:border-${project.color} transition-all duration-300`}
                          onClick={() => window.open(project.githubUrl, '_blank')}
                        >
                          <Github className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                          GitHub
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            };
            
            return <ProjectCard key={index} />;
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Interested in working together? Let's discuss your next project.
          </p>
          <Button 
            ref={magneticRef}
            size="lg"
            className="bg-brand-sky hover:bg-brand-sky/90 text-white px-8 py-3 magnetic-button morphing-button ripple-effect"
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Start a Project
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;