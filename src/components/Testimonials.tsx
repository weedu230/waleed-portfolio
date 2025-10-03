import { Card, CardContent } from '@/components/ui/card';
import { Quote, Star, Send } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';

const testimonialSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  review: z.string().trim().min(10, "Review must be at least 10 characters").max(500, "Review must be less than 500 characters")
});

const Testimonials = () => {
  const [ref, isVisible] = useScrollAnimation(0.2);
  const { toast } = useToast();
  const [name, setName] = useState('');
  const [review, setReview] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [testimonials, setTestimonials] = useState([
    {
      name: "Sameer",
      content: "Waleed's expertise in full-stack development transformed our vision into reality. His attention to detail and problem-solving skills are exceptional.",
      rating: 5
    },
    {
      name: "Farhan",
      content: "Working with Waleed was a game-changer. He delivered a robust, scalable solution that exceeded our expectations. Highly recommended!",
      rating: 5
    },
    {
      name: "Ammad",
      content: "Outstanding work! Waleed's AI integration skills and modern development approach brought our project to life. Professional and efficient.",
      rating: 5
    }
  ]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const validated = testimonialSchema.parse({ name, review });
      
      const newTestimonial = {
        name: validated.name,
        content: validated.review,
        rating: 5
      };

      setTestimonials([newTestimonial, ...testimonials]);
      setName('');
      setReview('');
      
      toast({
        title: "Thank you!",
        description: "Your testimonial has been submitted successfully.",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Validation Error",
          description: error.errors[0].message,
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className={`group hover:scale-105 transition-all duration-700 bg-card/50 backdrop-blur-sm border-primary/10 hover:border-brand-sky/50 hover:shadow-lg hover:shadow-brand-sky/20 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8'}`}
              style={{ animationDelay: `${index * 100 + 200}ms` }}
            >
              <CardContent className="p-6 relative">
                <Quote className="absolute top-4 right-4 w-8 h-8 text-brand-orange/20" />
                
                <div className="mb-4">
                  <h3 className="font-bold text-primary text-lg">{testimonial.name}</h3>
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

        <div className={`max-w-2xl mx-auto transition-all duration-700 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8'}`}>
          <Card className="bg-card/50 backdrop-blur-sm border-primary/10">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-primary mb-2 text-center">Share Your Experience</h3>
              <p className="text-muted-foreground mb-6 text-center">
                Have you worked with me? I'd love to hear your feedback!
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="bg-background/50"
                    required
                    maxLength={100}
                  />
                </div>
                
                <div>
                  <Textarea
                    placeholder="Your Review"
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                    className="bg-background/50 min-h-[120px]"
                    required
                    maxLength={500}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  <Send className="w-4 h-4 mr-2" />
                  {isSubmitting ? 'Submitting...' : 'Submit Testimonial'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
