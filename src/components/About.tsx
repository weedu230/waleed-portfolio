import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, User } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">About Me</h2>
          <div className="w-24 h-1 bg-brand-sky mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Bio Section */}
          <Card className="portfolio-card">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-brand-sky/10 rounded-full flex items-center justify-center mr-4">
                  <User className="w-6 h-6 text-brand-sky" />
                </div>
                <h3 className="text-2xl font-bold text-primary">Personal Bio</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Motivated and detail-oriented Software Engineering student at Bahria University Karachi with a passion for coding, system customization, and building creative solutions. Skilled in multiple programming languages including C++, Java, Python, and JavaScript, with hands-on experience developing academic and personal projects ranging from a paint application to AI-based assistants.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Known for combining problem-solving with creativity, and for continuously learning new technologies to stay ahead. A team player with strong adaptability, discipline, and a drive to grow into a professional full-stack developer.
              </p>
            </CardContent>
          </Card>

          {/* Education Section */}
          <Card className="portfolio-card">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-brand-orange/10 rounded-full flex items-center justify-center mr-4">
                  <GraduationCap className="w-6 h-6 text-brand-orange" />
                </div>
                <h3 className="text-2xl font-bold text-primary">Education</h3>
              </div>
              <div className="space-y-4">
                <div className="border-l-4 border-brand-sky pl-6">
                  <h4 className="text-xl font-semibold text-primary">Bachelors in Software Engineering</h4>
                  <p className="text-brand-sky font-medium">Bahria University Karachi</p>
                  <p className="text-muted-foreground">Expected 2030</p>
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