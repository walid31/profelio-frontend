
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export type Testimonial = {
  id?: number;
  name: string;
  author?: string; // For backward compatibility
  role?: string;
  position?: string; // For backward compatibility
  company?: string;
  content: string;
  rating?: number;
  avatar?: string;
};

type TestimonialsSectionProps = {
  testimonials?: Testimonial[];
  layout?: 'grid' | 'carousel';
};

const TestimonialsSection = ({ testimonials = defaultTestimonials, layout = 'grid' }: TestimonialsSectionProps) => {
  // Convert any testimonials with author/position to name/role for compatibility
  const normalizedTestimonials = testimonials.map(t => ({
    ...t,
    name: t.name || t.author || '',
    role: t.role || t.position || ''
  }));

  return (
    <div className="max-w-3xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {normalizedTestimonials.map((testimonial, index) => (
          <Card key={testimonial.id || index} className="border border-neutral-200">
            <CardContent className="p-6">
              {testimonial.rating && (
                <div className="flex mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={`${i < testimonial.rating! ? 'text-amber-400 fill-amber-400' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
              )}
              <p className="text-gray-600 italic mb-4">"{testimonial.content}"</p>
              <div className="flex items-center">
                {testimonial.avatar ? (
                  <div 
                    className="w-10 h-10 rounded-full mr-3 bg-cover bg-center" 
                    style={{ backgroundImage: `url(${testimonial.avatar})` }}
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full mr-3 bg-gray-200 flex items-center justify-center">
                    {testimonial.name.charAt(0)}
                  </div>
                )}
                <div>
                  <p className="font-medium">{testimonial.name}</p>
                  {(testimonial.role || testimonial.company) && (
                    <p className="text-sm text-gray-500">
                      {testimonial.role}{testimonial.role && testimonial.company ? ', ' : ''}{testimonial.company}
                    </p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

// Default testimonials to use when none are provided
const defaultTestimonials: Testimonial[] = [
  {
    id: 1,
    name: "Alexandre Martin",
    role: "Étudiant en Master",
    company: "Université Paris-Saclay",
    content: "Un professeur exceptionnel qui a su rendre complexes concepts d'IA accessibles et passionnants. Ses cours ont largement dépassé mes attentes."
  },
  {
    id: 2,
    name: "Sophie Dubois",
    role: "Doctorante",
    company: "CNRS",
    content: "Sa capacité à expliquer des concepts complexes de manière claire est remarquable. Grâce à son encadrement, j'ai pu mener à bien ma thèse dans les meilleures conditions."
  },
  {
    id: 3,
    name: "Thomas Bernard",
    role: "Ancien étudiant",
    company: "Google AI",
    content: "Les méthodes d'enseignement du Professeur m'ont donné une base solide qui m'a permis de réussir dans l'industrie de l'IA. Je lui serai éternellement reconnaissant."
  }
];

export default TestimonialsSection;
