
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Plus, Trash } from "lucide-react";
import { Service } from "./types";

interface ServicesSectionProps {
  services: Service[];
  setServices: (services: Service[]) => void;
  addService: () => void;
  removeService: (index: number) => void;
  sectionIcon: React.ReactNode;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({
  services,
  setServices,
  addService,
  removeService,
  sectionIcon,
}) => {
  return (
    <div>
      <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
        {sectionIcon}
        Section Services
      </h3>
      <div className="space-y-6">
        {services.map((service, index) => (
          <div key={index} className="border rounded-md p-4 space-y-4 relative">
            <div className="absolute top-4 right-4">
              {services.length > 1 && (
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => removeService(index)}
                >
                  <Trash className="h-4 w-4 text-red-500" />
                </Button>
              )}
            </div>
            <h4 className="font-medium">Service {index + 1}</h4>
            <div>
              <Label htmlFor={`service-title-${index}`}>Titre</Label>
              <Input
                id={`service-title-${index}`}
                value={service.title}
                onChange={(e) => {
                  const updatedServices = [...services];
                  updatedServices[index].title = e.target.value;
                  setServices(updatedServices);
                }}
                placeholder="Ex: Consultation juridique"
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor={`service-desc-${index}`}>Description</Label>
              <Textarea
                id={`service-desc-${index}`}
                value={service.description}
                onChange={(e) => {
                  const updatedServices = [...services];
                  updatedServices[index].description = e.target.value;
                  setServices(updatedServices);
                }}
                placeholder="Décrivez ce service..."
                className="mt-1"
                rows={3}
              />
            </div>
          </div>
        ))}
        
        <Button
          type="button"
          variant="outline"
          onClick={addService}
          className="w-full mt-2"
        >
          <Plus className="h-4 w-4 mr-2" /> Ajouter un service
        </Button>
      </div>
    </div>
  );
};

export default ServicesSection;
