import { useState, useRef } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { 
  SiC, SiCplusplus, SiSharp, SiPython, SiJavascript, SiTypescript,
  SiHtml5, SiCss3, SiReact, SiNextdotjs, SiVite, SiBootstrap, SiTailwindcss,
  SiGit, SiGithub, SiGitlab, SiPostman, SiVercel,
  SiSupabase, SiMysql, SiPostgresql
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { VscCode, VscVscode } from 'react-icons/vsc';
import { TbBrandNetbeans } from 'react-icons/tb';

const Skills = () => {
  const [ref, isVisible] = useScrollAnimation(0.2);
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const skills = [
    { name: "C", icon: SiC, color: "#A8B9CC" },
    { name: "C++", icon: SiCplusplus, color: "#00599C" },
    { name: "C#", icon: SiSharp, color: "#512BD4" },
    { name: "Java", icon: FaJava, color: "#ED8B00" },
    { name: "Python", icon: SiPython, color: "#3776AB" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
    { name: "CSS3", icon: SiCss3, color: "#1572B6" },
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
    { name: "Vite", icon: SiVite, color: "#646CFF" },
    { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
    { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Git", icon: SiGit, color: "#F05032" },
    { name: "GitHub", icon: SiGithub, color: "#181717" },
    { name: "GitLab", icon: SiGitlab, color: "#FC6D26" },
    { name: "VS Code", icon: VscVscode, color: "#007ACC" },
    { name: "Visual Studio", icon: VscCode, color: "#5C2D91" },
    { name: "NetBeans", icon: TbBrandNetbeans, color: "#1B6AC6" },
    { name: "Postman", icon: SiPostman, color: "#FF6C37" },
    { name: "Vercel", icon: SiVercel, color: "#000000" },
    { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
    { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  ];

  // Duplicate for infinite scroll
  const duplicatedSkills = [...skills, ...skills, ...skills];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="skills" className="py-20" ref={ref}>
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Tech Stack</h2>
          <div className="w-24 h-1 bg-brand-orange mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Technologies I work with daily
          </p>
        </div>

        <div 
          className="relative max-w-6xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Left gradient fade */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
          
          {/* Right gradient fade */}
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>

          {/* Navigation arrows */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-background/90 border border-border rounded-full flex items-center justify-center hover:bg-secondary transition-colors opacity-0 hover:opacity-100 group-hover:opacity-100"
            style={{ opacity: isPaused ? 1 : 0 }}
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          
          <button 
            onClick={() => scroll('right')}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-background/90 border border-border rounded-full flex items-center justify-center hover:bg-secondary transition-colors opacity-0 hover:opacity-100"
            style={{ opacity: isPaused ? 1 : 0 }}
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>

          {/* Scrolling container */}
          <div 
            ref={scrollRef}
            className="overflow-hidden"
          >
            <div 
              className={`flex gap-6 py-4 ${isPaused ? '' : 'animate-scroll'}`}
              style={{
                width: 'max-content',
              }}
            >
              {duplicatedSkills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={index}
                    className="flex-shrink-0 w-28 h-32 bg-card border border-border rounded-xl flex flex-col items-center justify-center gap-3 hover:scale-110 hover:shadow-lg hover:shadow-brand-sky/20 transition-all duration-300 cursor-pointer group"
                  >
                    <div className="w-12 h-12 flex items-center justify-center">
                      <Icon 
                        className="w-10 h-10 transition-transform group-hover:scale-110" 
                        style={{ color: skill.color }}
                      />
                    </div>
                    <span className="text-sm font-medium text-foreground text-center px-2">{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Skills;