
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Plus, Trash } from "lucide-react";

interface Testimonial {
  name: string;
  position: string;
  content: string;
  company?: string;
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
  setTestimonials: (testimonials: Testimonial[]) => void;
  addTestimonial: () => void;
  removeTestimonial: (index: number) => void;
  sectionIcon: React.ReactNode;
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  testimonials,
  setTestimonials,
  addTestimonial,
  removeTestimonial,
  sectionIcon,
}) => {
  return (
    <div>
      <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
        {sectionIcon}
        Section Témoignages
      </h3>
      <div className="space-y-6">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="border rounded-md p-4 space-y-4 relative">
            <div className="absolute top-4 right-4">
              {testimonials.length > 1 && (
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => removeTestimonial(index)}
                >
                  <Trash className="h-4 w-4 text-red-500" />
                </Button>
              )}
            </div>
            <h4 className="font-medium">Témoignage {index + 1}</h4>
            <div>
              <Label htmlFor={`testimonial-name-${index}`}>Nom</Label>
              <Input
                id={`testimonial-name-${index}`}
                value={testimonial.name}
                onChange={(e) => {
                  const updatedTestimonials = [...testimonials];
                  updatedTestimonials[index].name = e.target.value;
                  setTestimonials(updatedTestimonials);
                }}
                placeholder="Nom du client"
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor={`testimonial-position-${index}`}>Fonction</Label>
              <Input
                id={`testimonial-position-${index}`}
                value={testimonial.position}
                onChange={(e) => {
                  const updatedTestimonials = [...testimonials];
                  updatedTestimonials[index].position = e.target.value;
                  setTestimonials(updatedTestimonials);
                }}
                placeholder="Ex: Directeur général"
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor={`testimonial-company-${index}`}>Entreprise (optionnel)</Label>
              <Input
                id={`testimonial-company-${index}`}
                value={testimonial.company || ""}
                onChange={(e) => {
                  const updatedTestimonials = [...testimonials];
                  updatedTestimonials[index].company = e.target.value;
                  setTestimonials(updatedTestimonials);
                }}
                placeholder="Nom de l'entreprise"
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor={`testimonial-content-${index}`}>Contenu</Label>
              <Textarea
                id={`testimonial-content-${index}`}
                value={testimonial.content}
                onChange={(e) => {
                  const updatedTestimonials = [...testimonials];
                  updatedTestimonials[index].content = e.target.value;
                  setTestimonials(updatedTestimonials);
                }}
                placeholder="Témoignage du client..."
                className="mt-1"
                rows={3}
              />
            </div>
          </div>
        ))}
        
        <Button
          type="button"
          variant="outline"
          onClick={addTestimonial}
          className="w-full mt-2"
        >
          <Plus className="h-4 w-4 mr-2" /> Ajouter un témoignage
        </Button>
      </div>
    </div>
  );
};

export default TestimonialsSection;
