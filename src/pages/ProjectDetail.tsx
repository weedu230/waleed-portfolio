import { useParams, Link, Navigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, ExternalLink, Github, CheckCircle2 } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';
import { getProjectBySlug } from '@/data/projects';
import FuturisticBackground from '@/components/FuturisticBackground';

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) return <Navigate to="/projects" replace />;

  const IconComponent = project.icon;

  return (
    <div className="min-h-screen scroll-smooth relative">
      <FuturisticBackground />
      <div className="relative z-10">
        {/* Top Bar */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm shadow-sm border-b">
          <div className="container mx-auto px-6 py-4 flex items-center justify-between">
            <Link to="/projects">
              <Button variant="ghost" className="gap-2 text-muted-foreground hover:text-foreground">
                <ArrowLeft className="w-4 h-4" />
                Back to Projects
              </Button>
            </Link>
            <ThemeToggle />
          </div>
        </nav>

        <section className="pt-32 pb-20">
          <div className="container mx-auto px-6 max-w-4xl">
            {/* Header */}
            <div className="mb-12 animate-fade-in">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center">
                  <IconComponent className="w-8 h-8 text-brand-sky" />
                </div>
                <div>
                  <h1 className="text-3xl md:text-5xl font-bold text-primary">{project.title}</h1>
                  <p className="text-brand-orange font-medium mt-1">{project.tech}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.categories.map((cat) => (
                  <Badge key={cat} variant="secondary">{cat}</Badge>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3">
                {project.isLiveProject && (
                  <Button
                    className="bg-brand-sky hover:bg-brand-sky/90 text-white"
                    onClick={() => window.open(project.liveUrl || project.githubUrl, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                )}
                <Button
                  variant="outline"
                  className="border-brand-orange/30 text-brand-orange hover:bg-brand-orange/10"
                  onClick={() => window.open(project.githubUrl, '_blank')}
                >
                  <Github className="w-4 h-4 mr-2" />
                  View on GitHub
                </Button>
              </div>
            </div>

            {/* Description */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">About This Project</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {project.fullDescription}
              </p>
            </div>

            {/* Tech Stack */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">Technologies Used</h2>
              <div className="flex flex-wrap gap-3">
                {project.techStack.map((t) => (
                  <span
                    key={t}
                    className="px-4 py-2 rounded-lg bg-muted text-foreground text-sm font-medium border border-border"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">Key Features</h2>
              <ul className="space-y-3">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-sky mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom CTA */}
            <div className="border-t border-border pt-12 flex flex-col sm:flex-row items-center justify-between gap-4">
              <Link to="/projects">
                <Button variant="outline" className="gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  All Projects
                </Button>
              </Link>
              <Link to="/#contact">
                <Button className="bg-brand-sky hover:bg-brand-sky/90 text-white">
                  Work With Me
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProjectDetail;
