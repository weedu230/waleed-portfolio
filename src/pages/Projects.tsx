import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, ArrowLeft, Star, Filter } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';
import { projects, categoryFilters, type ProjectCategory } from '@/data/projects';
import FuturisticBackground from '@/components/FuturisticBackground';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | 'All'>('All');

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.categories.includes(activeFilter));

  return (
    <div className="min-h-screen scroll-smooth relative">
      <FuturisticBackground />
      <div className="relative z-10">
        {/* Top Bar */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm shadow-sm border-b">
          <div className="container mx-auto px-6 py-4 flex items-center justify-between">
            <Link to="/">
              <Button variant="ghost" className="gap-2 text-muted-foreground hover:text-foreground">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Button>
            </Link>
            <ThemeToggle />
          </div>
        </nav>

        {/* Hero */}
        <section className="pt-32 pb-16 text-center">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4">
              My <span className="text-gradient">Projects</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
              A collection of my academic, SaaS, AI, freelance, and game development work
            </p>
            <div className="w-24 h-1 bg-brand-orange mx-auto rounded-full mt-6" />
          </div>
        </section>

        {/* Filters */}
        <section className="pb-8 sticky top-[73px] z-40 bg-background/95 backdrop-blur-sm border-b">
          <div className="container mx-auto px-6">
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
              <Filter className="w-4 h-4 text-muted-foreground shrink-0" />
              {categoryFilters.map((f) => (
                <Button
                  key={f.value}
                  size="sm"
                  variant={activeFilter === f.value ? 'default' : 'outline'}
                  className={
                    activeFilter === f.value
                      ? 'bg-brand-sky text-white hover:bg-brand-sky/90 shrink-0'
                      : 'shrink-0'
                  }
                  onClick={() => setActiveFilter(f.value)}
                >
                  {f.label}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Project Grid */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <p className="text-muted-foreground mb-8 text-sm">
              Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {filteredProjects.map((project) => {
                const IconComponent = project.icon;
                return (
                  <Link key={project.slug} to={`/projects/${project.slug}`} className="block group">
                    <Card className="portfolio-card overflow-hidden transition-all duration-500 h-full hover-lift">
                      <CardContent className="p-0">
                        <div className="p-6 border-b border-border/50 relative">
                          {project.isFeatured && (
                            <div className="absolute top-3 right-3 flex items-center gap-1 text-xs px-2 py-1 bg-brand-orange text-white rounded-full">
                              <Star className="w-3 h-3 fill-current" />
                              Featured
                            </div>
                          )}
                          <div className="flex items-center justify-between mb-4">
                            <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center skill-icon">
                              <IconComponent className="w-6 h-6 text-brand-sky" />
                            </div>
                            <Badge variant="secondary" className="text-xs">
                              {project.category}
                            </Badge>
                          </div>
                          <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-brand-sky transition-colors">
                            {project.title}
                          </h3>
                          <span className="text-sm font-medium text-brand-orange">{project.tech}</span>
                        </div>

                        <div className="p-6">
                          <p className="text-muted-foreground leading-relaxed mb-4 text-sm line-clamp-3">
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-1.5 mb-5">
                            {project.techStack.map((t) => (
                              <span
                                key={t}
                                className="text-[11px] px-2 py-0.5 rounded-full bg-muted text-muted-foreground"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                          <div className="flex gap-2">
                            {project.isLiveProject && (
                              <Button
                                size="sm"
                                variant="outline"
                                className="flex-1 border-brand-sky/30 text-brand-sky hover:bg-brand-sky/10"
                                onClick={(e) => {
                                  e.preventDefault();
                                  window.open(project.liveUrl || project.githubUrl, '_blank');
                                }}
                              >
                                <ExternalLink className="w-4 h-4 mr-1" />
                                Live Demo
                              </Button>
                            )}
                            <Button
                              size="sm"
                              variant="outline"
                              className="flex-1 border-brand-orange/30 text-brand-orange hover:bg-brand-orange/10"
                              onClick={(e) => {
                                e.preventDefault();
                                window.open(project.githubUrl, '_blank');
                              }}
                            >
                              <Github className="w-4 h-4 mr-1" />
                              GitHub
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-20 text-muted-foreground">
                No projects found in this category.
              </div>
            )}
          </div>
        </section>

        {/* Footer CTA */}
        <section className="py-16 text-center border-t border-border">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl font-bold text-primary mb-4">Interested in working together?</h2>
            <Link to="/#contact">
              <Button size="lg" className="bg-brand-sky hover:bg-brand-sky/90 text-white">
                Get in Touch
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;
