import { Card, CardContent } from '@/components/ui/card';
import { 
  Code2, 
  Globe, 
  Lightbulb, 
  Settings, 
  FileText,
  Database
} from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Skills = () => {
  const [ref, isVisible] = useScrollAnimation(0.2);
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      color: "brand-sky",
      skills: ["C", "C++", "C#", "Java", "Python", "JavaScript"]
    },
    {
      title: "Web Technologies",
      icon: Globe,
      color: "brand-orange",
      skills: ["HTML", "CSS", "React", "Next.js", "Bootstrap"]
    },
    {
      title: "Concepts & Architecture",
      icon: Lightbulb,
      color: "brand-sky",
      skills: ["OOP", "Design Patterns", "Software Architecture", "Algorithms"]
    },
    {
      title: "Development Tools",
      icon: Settings,
      color: "brand-orange",
      skills: ["Git", "GitHub", "GitLab", "VS Code", "Visual Studio", "NetBeans", "Postman"]
    },
    {
      title: "Database & Backend",
      icon: Database,
      color: "brand-sky",
      skills: ["SQL", "Database Design", "API Development", "System Design"]
    },
    {
      title: "Productivity Suite",
      icon: FileText,
      color: "brand-orange",
      skills: ["Microsoft Office", "Documentation", "Project Management"]
    }
  ];

  return (
    <section id="skills" className="py-20" ref={ref}>
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-brand-orange mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            A comprehensive skill set built through academic learning, personal projects, and continuous exploration of new technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className={`portfolio-card group transition-all duration-700 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8'}`} style={{ animationDelay: `${index * 100 + 200}ms` }}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 bg-${category.color}/10 rounded-full flex items-center justify-center mr-4 skill-icon`}>
                      <IconComponent className={`w-6 h-6 text-${category.color}`} />
                    </div>
                    <h3 className="text-xl font-bold text-primary">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className={`px-3 py-1 text-sm bg-${category.color}/10 text-${category.color} rounded-full border border-${category.color}/20 transition-all hover:bg-${category.color}/20`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;