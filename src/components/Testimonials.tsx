import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Quote, Star } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Testimonials = () => {
  const [ref, isVisible] = useScrollAnimation(0.2);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO at TechStart",
      image: "/lovable-uploads/a43da1fd-a9cc-4560-a312-4a67b8abb279.png",
      content: "Waleed's expertise in full-stack development transformed our vision into reality. His attention to detail and problem-solving skills are exceptional.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Product Manager at InnovateCo",
      image: "/lovable-uploads/a5d69f6a-52c6-4140-987e-29f338b484be.png",
      content: "Working with Waleed was a game-changer. He delivered a robust, scalable solution that exceeded our expectations. Highly recommended!",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Founder at DevHub",
      image: "/lovable-uploads/a43da1fd-a9cc-4560-a312-4a67b8abb279.png",
      content: "Outstanding work! Waleed's AI integration skills and modern development approach brought our project to life. Professional and efficient.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">What Clients Say</h2>
          <div className="w-24 h-1 bg-brand-orange mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Don't just take my word for it - hear from those I've worked with
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className={`group hover:scale-105 transition-all duration-700 bg-card/50 backdrop-blur-sm border-primary/10 hover:border-brand-sky/50 hover:shadow-lg hover:shadow-brand-sky/20 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8'}`}
              style={{ animationDelay: `${index * 100 + 200}ms` }}
            >
              <CardContent className="p-6 relative">
                <Quote className="absolute top-4 right-4 w-8 h-8 text-brand-orange/20" />
                
                <div className="flex items-center gap-4 mb-4">
                  <Avatar className="w-14 h-14 border-2 border-brand-sky/30">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-bold text-primary">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>

                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand-orange text-brand-orange" />
                  ))}
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  "{testimonial.content}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
