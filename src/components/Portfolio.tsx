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
  MessageSquare 
} from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "Flappy Bird Clone",
      icon: Gamepad2,
      tech: "JavaScript",
      description: "A browser-based arcade game replicating the classic Flappy Bird mechanics with smooth animations and responsive controls.",
      color: "brand-sky",
      category: "Game Development"
    },
    {
      title: "GPA Calculator",
      icon: Calculator,
      tech: "HTML",
      description: "A simple web tool to calculate GPA with ease and accuracy, featuring an intuitive interface and real-time calculations.",
      color: "brand-orange",
      category: "Web Application"
    },
    {
      title: "Jarvis AI Assistant",
      icon: Bot,
      tech: "Python",
      description: "A personal AI assistant inspired by Iron Man, with voice recognition and automation features for daily tasks.",
      color: "brand-sky",
      category: "AI & Automation"
    },
    {
      title: "Paint Application",
      icon: Palette,
      tech: "C#",
      description: "A desktop drawing tool with freehand sketching, color picker, and adjustable brush sizes for digital art creation.",
      color: "brand-orange",
      category: "Desktop Application"
    },
    {
      title: "Restaurant Website",
      icon: Globe,
      tech: "HTML",
      description: "A responsive restaurant website showcasing menus and services with a modern UI and seamless user experience.",
      color: "brand-sky",
      category: "Web Design"
    },
    {
      title: "NeoAura Chatbot",
      icon: MessageSquare,
      tech: "Java",
      description: "An AI-driven chatbot management system to enhance user interaction and automation with intelligent responses.",
      color: "brand-orange",
      category: "AI & Backend"
    }
  ];

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Portfolio</h2>
          <div className="w-24 h-1 bg-brand-orange mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            A showcase of diverse projects demonstrating expertise across web development, desktop applications, AI, and game development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card key={index} className="portfolio-card group overflow-hidden">
                <CardContent className="p-0">
                  {/* Project Header */}
                  <div className={`bg-${project.color}/5 p-6 border-b border-${project.color}/10`}>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 bg-${project.color}/10 rounded-full flex items-center justify-center skill-icon`}>
                        <IconComponent className={`w-6 h-6 text-${project.color}`} />
                      </div>
                      <span className={`text-xs px-3 py-1 bg-${project.color}/10 text-${project.color} rounded-full border border-${project.color}/20`}>
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-2">{project.title}</h3>
                    <div className="flex items-center gap-2">
                      <span className={`text-sm font-medium text-${project.color}`}>
                        {project.tech}
                      </span>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {project.description}
                    </p>
                    
                    <div className="flex gap-3">
                      <Button 
                        size="sm"
                        className={`bg-${project.color} hover:bg-${project.color}/90 text-white border-0 flex-1`}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Live
                      </Button>
                      <Button 
                        size="sm"
                        variant="outline"
                        className={`border-${project.color}/30 text-${project.color} hover:bg-${project.color}/10`}
                      >
                        <Github className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Interested in working together? Let's discuss your next project.
          </p>
          <Button 
            size="lg"
            className="bg-brand-sky hover:bg-brand-sky/90 text-white px-8 py-3"
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