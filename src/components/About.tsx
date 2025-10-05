import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, User } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const About = () => {
  const [ref, isVisible] = useScrollAnimation(0.2);

  return (
    <section id="about" className="py-20 bg-secondary/20" ref={ref}>
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">About Me</h2>
          <div className="w-24 h-1 bg-brand-sky mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Bio Section */}
          <Card className={`portfolio-card hover-lift transition-all duration-700 delay-200 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8'}`}>
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-brand-sky/10 rounded-full flex items-center justify-center mr-4 hover-pulse">
                  <User className="w-6 h-6 text-brand-sky skill-icon" />
                </div>
                <h3 className="text-2xl font-bold text-primary">Personal Bio</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Motivated and detail-oriented Software Engineering student at Bahria University Karachi with a passion for full-stack web development and building modern, scalable applications. Proficient in React, TypeScript, Next.js, and Vite for frontend development, with expertise in Tailwind CSS and Bootstrap for responsive UI design. Experienced in backend technologies including Supabase, API development, SQL databases, and Edge Functions.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Strong foundation in multiple programming languages including C++, Java, Python, and JavaScript. Skilled in version control with Git/GitHub, deployment with Vercel, and development tools like VS Code and Postman. Known for combining problem-solving with creativity, continuously learning cutting-edge technologies, and delivering production-ready applications. A team player with strong adaptability, discipline, and a drive to excel as a professional full-stack developer.
              </p>
            </CardContent>
          </Card>

          {/* Education Section */}
          <Card className={`portfolio-card hover-lift transition-all duration-700 delay-300 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8'}`}>
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-brand-orange/10 rounded-full flex items-center justify-center mr-4 hover-pulse">
                  <GraduationCap className="w-6 h-6 text-brand-orange skill-icon" />
                </div>
                <h3 className="text-2xl font-bold text-primary">Education</h3>
              </div>
              <div className="space-y-4">
                <div className="border-l-4 border-brand-sky pl-6">
                  <h4 className="text-xl font-semibold text-primary">Bachelors in Software Engineering</h4>
                  <p className="text-brand-sky font-medium">Bahria University Karachi</p>
                  <p className="text-muted-foreground">Expected 2028</p>
                  <p className="text-muted-foreground mt-2">
                    Comprehensive curriculum covering software development, algorithms, database systems, 
                    web technologies, and modern programming paradigms.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;