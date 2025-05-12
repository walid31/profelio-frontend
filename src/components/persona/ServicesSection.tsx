
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import * as LucideIcons from "lucide-react";

type Service = {
  icon?: React.ElementType | string;
  title: string;
  description: string;
};

type ServicesSectionProps = {
  services: Service[];
};

const ServicesSection = ({ services }: ServicesSectionProps) => {
  return (
    <div className="grid sm:grid-cols-2 gap-6">
      {services.map((service, index) => {
        // Handle both React components and icon strings
        let IconComponent: React.ElementType | null = null;
        
        if (typeof service.icon === 'string') {
          // @ts-ignore - We know this may not always work, but will try to get the icon
          IconComponent = LucideIcons[service.icon];
        } else if (service.icon) {
          IconComponent = service.icon;
        }

        return (
          <Card key={index} className="border border-neutral-200 hover:shadow-lg transition">
            <CardContent className="p-6">
              {IconComponent && <IconComponent className="text-primary mb-2" size={24} />}
              <h3 className="font-medium mb-2">{service.title}</h3>
              <p className="text-sm text-gray-600">{service.description}</p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default ServicesSection;
