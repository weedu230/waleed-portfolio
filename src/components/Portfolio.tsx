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
  Hospital,
  FileText,
  Navigation,
  Star
} from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Portfolio = () => {
  const [ref, isVisible] = useScrollAnimation(0.2);
  
  // Featured projects first
  const featuredProjects = [
    {
      title: "STANS",
      icon: Navigation,
      tech: "Graph Algorithms",
      description: "Intelligent navigation system using graph algorithms for optimal route computation with real-time traffic conditions.",
      color: "brand-orange",
      category: "Navigation System",
      githubUrl: "https://github.com/weedu230/STANS",
      liveUrl: "https://sstans.vercel.app/",
      isLiveProject: true,
      isFeatured: true
    },
    {
      title: "ReqBot",
      icon: Bot,
      tech: "Next.js + AI",
      description: "AI-powered business analyst for eliciting and documenting project requirements through conversational interface.",
      color: "brand-sky",
      category: "AI & Web Application",
      githubUrl: "https://github.com/weedu230/reqbot",
      liveUrl: "https://reqbot-sigma.vercel.app/",
      isLiveProject: true,
      isFeatured: true
    },
    {
      title: "NeoAura Chatbot",
      icon: MessageSquare,
      tech: "Java",
      description: "AI-driven chatbot management system for enhanced user interaction and intelligent automation.",
      color: "brand-orange",
      category: "AI & Backend",
      githubUrl: "https://github.com/weedu230/neoaura-chatbot",
      isFeatured: true
    }
  ];

  const otherProjects = [
    {
      title: "PDF Master",
      icon: FileText,
      tech: "Web Application",
      description: "Comprehensive PDF editing and conversion tool for editing, merging, and manipulating PDF documents online.",
      color: "brand-orange",
      category: "Web Application",
      githubUrl: "https://pdf-master.base44.app/",
      isLiveProject: true
    },
    {
      title: "Flappy Bird Clone",
      icon: Gamepad2,
      tech: "JavaScript",
      description: "Browser-based arcade game with smooth animations and responsive controls.",
      color: "brand-sky",
      category: "Game Development",
      githubUrl: "https://github.com/weedu230/flappy-bird-clone",
      liveUrl: "https://weedu230.github.io/flappy-bird-clone/",
      isLiveProject: true
    },
    {
      title: "GPA Calculator",
      icon: Calculator,
      tech: "HTML",
      description: "Web tool to calculate GPA with intuitive interface and real-time calculations.",
      color: "brand-orange",
      category: "Web Application",
      githubUrl: "https://github.com/weedu230/gpa-calculator",
      liveUrl: "https://weedu230.github.io/GPA-calculator/",
      isLiveProject: true
    },
    {
      title: "Jarvis AI Assistant",
      icon: Bot,
      tech: "Python",
      description: "Personal AI assistant with voice recognition and automation features for daily tasks.",
      color: "brand-sky",
      category: "AI & Automation",
      githubUrl: "https://github.com/weedu230/jarvis-ai-assistant"
    },
    {
      title: "Paint Application",
      icon: Palette,
      tech: "C#",
      description: "Desktop drawing tool with freehand sketching, color picker, and adjustable brush sizes.",
      color: "brand-orange",
      category: "Desktop Application",
      githubUrl: "https://github.com/weedu230/paint-application"
    },
    {
      title: "Restaurant Website",
      icon: Globe,
      tech: "HTML",
      description: "Responsive restaurant website with modern UI and seamless user experience.",
      color: "brand-sky",
      category: "Web Design",
      githubUrl: "https://github.com/weedu230/restaurant-website",
      liveUrl: "https://weedu230.github.io/Restaurant-website/",
      isLiveProject: true
    },
    {
      title: "Hospital Management System",
      icon: Hospital,
      tech: "Java + MySQL",
      description: "Comprehensive hospital system with patient records and appointment scheduling.",
      color: "brand-sky",
      category: "Enterprise Application",
      githubUrl: "https://github.com/weedu230/hospital-management-system"
    }
  ];

  const renderProjectCard = (project: typeof featuredProjects[0], index: number, isFeatured = false) => {
    const IconComponent = project.icon;
    return (
      <Card key={index} className={`portfolio-card group overflow-hidden transition-all duration-700 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8'} ${isFeatured ? 'ring-2 ring-brand-orange/30' : ''}`} style={{ animationDelay: `${index * 100 + 200}ms` }}>
        <CardContent className="p-0">
          <div className={`bg-${project.color}/5 p-6 border-b border-${project.color}/10 relative`}>
            {isFeatured && (
              <div className="absolute top-3 right-3 flex items-center gap-1 text-xs px-2 py-1 bg-brand-orange text-white rounded-full">
                <Star className="w-3 h-3 fill-current" />
                Featured
              </div>
            )}
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 bg-${project.color}/10 rounded-full flex items-center justify-center skill-icon`}>
                <IconComponent className={`w-6 h-6 text-${project.color}`} />
              </div>
              <span className={`text-xs px-3 py-1 bg-${project.color}/10 text-${project.color} rounded-full border border-${project.color}/20`}>
                {project.category}
              </span>
            </div>
            <h3 className="text-xl font-bold text-primary mb-2">{project.title}</h3>
            <span className={`text-sm font-medium text-${project.color}`}>{project.tech}</span>
          </div>

          <div className="p-6">
            <p className="text-muted-foreground leading-relaxed mb-6">{project.description}</p>
            
            <div className="flex justify-center gap-2">
              {project.isLiveProject && (
                <Button 
                  size="sm"
                  variant="outline"
                  className={`border-${project.color}/30 text-${project.color} hover:bg-${project.color}/10 flex-1`}
                  onClick={() => window.open(project.liveUrl || project.githubUrl, '_blank')}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </Button>
              )}
              <Button 
                size="sm"
                variant="outline"
                className={`border-${project.color}/30 text-${project.color} hover:bg-${project.color}/10 flex-1`}
                onClick={() => window.open(project.githubUrl, '_blank')}
              >
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <section id="portfolio" className="py-20" ref={ref}>
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Portfolio</h2>
          <div className="w-24 h-1 bg-brand-orange mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Projects showcasing expertise in web development, AI, and software engineering.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-primary mb-6 text-center flex items-center justify-center gap-2">
            <Star className="w-5 h-5 text-brand-orange" />
            Featured Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {featuredProjects.map((project, index) => renderProjectCard(project, index, true))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-xl font-semibold text-muted-foreground mb-6 text-center">More Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {otherProjects.map((project, index) => renderProjectCard(project as typeof featuredProjects[0], index + 3))}
          </div>
        </div>

        <div className="text-center mt-16">
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
