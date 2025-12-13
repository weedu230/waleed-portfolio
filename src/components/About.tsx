import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, User, Code, Rocket, Users, Zap } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const About = () => {
  const [ref, isVisible] = useScrollAnimation(0.2);

  const highlights = [
    { icon: Code, text: "Full-Stack Developer" },
    { icon: Rocket, text: "React & Next.js Expert" },
    { icon: Zap, text: "Fast Learner" },
    { icon: Users, text: "Team Player" },
  ];

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
                <h3 className="text-2xl font-bold text-primary">Who I Am</h3>
              </div>
              
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Software Engineering student passionate about <span className="text-brand-sky font-semibold">building scalable web apps</span> that solve real problems.
              </p>

              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-2 h-2 bg-brand-sky rounded-full"></div>
                  Proficient in React, TypeScript, Next.js & Tailwind
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-2 h-2 bg-brand-orange rounded-full"></div>
                  Backend: Supabase, APIs, SQL, Edge Functions
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-2 h-2 bg-brand-sky rounded-full"></div>
                  Languages: C++, Java, Python, JavaScript
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-2 h-2 bg-brand-orange rounded-full"></div>
                  Tools: Git, VS Code, Postman, Vercel
                </li>
              </ul>

              <div className="flex flex-wrap gap-3 mt-6">
                {highlights.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-center gap-2 px-3 py-2 bg-brand-sky/10 rounded-full text-sm text-brand-sky border border-brand-sky/20">
                      <Icon className="w-4 h-4" />
                      {item.text}
                    </div>
                  );
                })}
              </div>
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
              <div className="space-y-5">
                <div className="border-l-4 border-brand-sky pl-5">
                  <h4 className="text-lg font-semibold text-primary">BS Software Engineering</h4>
                  <p className="text-brand-sky font-medium text-sm">Bahria University Karachi</p>
                  <p className="text-muted-foreground text-sm">Expected 2028</p>
                </div>

                <div className="border-l-4 border-brand-orange pl-5">
                  <h4 className="text-lg font-semibold text-primary">Intermediate (Pre-Engineering)</h4>
                  <p className="text-brand-orange font-medium text-sm">Bahria College Karsaz</p>
                  <p className="text-muted-foreground text-sm">Grade: A</p>
                </div>

                <div className="border-l-4 border-brand-sky pl-5">
                  <h4 className="text-lg font-semibold text-primary">Matriculation</h4>
                  <p className="text-brand-sky font-medium text-sm">Bahria College Karsaz</p>
                  <p className="text-muted-foreground text-sm">Grade: A+</p>
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