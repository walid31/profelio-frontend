
import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

export type Project = {
  id?: number;
  title: string;
  description: string;
  image?: string;
  link?: string;
  tags?: string[];
  category?: string;
  year?: string;
};

type ProjectsSectionProps = {
  projects: Project[];
};

const ProjectsSection = ({ projects }: ProjectsSectionProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((project, index) => (
        <Card key={project.id || index} className="overflow-hidden hover:shadow-lg transition-all duration-300">
          {project.image && (
            <div 
              className="h-48 bg-cover bg-center"
              style={{ backgroundImage: `url(${project.image})` }}
            />
          )}
          <CardContent className="p-6">
            <h3 className="text-xl font-medium mb-2">{project.title}</h3>
            {project.year && (
              <p className="text-sm text-gray-500 mb-2">{project.year}</p>
            )}
            {project.category && (
              <p className="text-sm text-gray-500 mb-2">{project.category}</p>
            )}
            <p className="text-gray-600 mb-4">{project.description}</p>
            {project.tags && project.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <Badge key={idx} variant="secondary" className="text-xs">{tag}</Badge>
                ))}
              </div>
            )}
          </CardContent>
          {project.link && (
            <CardFooter className="px-6 pb-4 pt-0">
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-primary flex items-center gap-1 hover:underline"
              >
                Voir le projet <ExternalLink size={14} />
              </a>
            </CardFooter>
          )}
        </Card>
      ))}
    </div>
  );
};

export default ProjectsSection;
