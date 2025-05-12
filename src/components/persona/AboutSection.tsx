
import React from 'react';
import { Badge } from "@/components/ui/badge";

export type AboutSectionContent = {
  title?: string;
  subtitle?: string;
  description: string;
  paragraphs?: string[];
}

type AboutSectionProps = {
  content?: AboutSectionContent | string;
  description?: string;
  skills?: string[];
};

const AboutSection = ({ content, description, skills = [] }: AboutSectionProps) => {
  // Handle both string and object content types for backward compatibility
  let finalDescription = '';
  let paragraphs: string[] = [];
  let subtitle = '';
  
  if (typeof content === 'string') {
    finalDescription = content;
  } else if (content && typeof content === 'object') {
    finalDescription = content.description;
    paragraphs = content.paragraphs || [];
    subtitle = content.subtitle || '';
  } else {
    finalDescription = description || '';
  }

  if (!finalDescription && skills.length === 0) {
    return null;
  }

  return (
    <div className="max-w-xl">
      {subtitle && <h3 className="text-lg text-gray-600 mb-2">{subtitle}</h3>}
      
      {finalDescription && <p className="text-gray-600 mb-6">{finalDescription}</p>}
      
      {paragraphs.map((paragraph, index) => (
        <p key={index} className="text-gray-600 mb-4">{paragraph}</p>
      ))}
      
      {skills.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-2">
          {skills.map((skill, index) => (
            <div key={index} className="group">
              <Badge
                variant="secondary"
                className="group-hover:variant-primary transition-all duration-200"
              >
                {skill}
              </Badge>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AboutSection;
