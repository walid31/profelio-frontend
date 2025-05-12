
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Plus, Trash } from "lucide-react";
import { Project } from "./types";

interface ProjectsSectionProps {
  projects: Project[];
  setProjects: (projects: Project[]) => void;
  addProject: () => void;
  removeProject: (index: number) => void;
  sectionIcon: React.ReactNode;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  projects,
  setProjects,
  addProject,
  removeProject,
  sectionIcon,
}) => {
  return (
    <div>
      <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
        {sectionIcon}
        Section Projets
      </h3>
      <div className="space-y-6">
        {projects.map((project, index) => (
          <div key={index} className="border rounded-md p-4 space-y-4 relative">
            <div className="absolute top-4 right-4">
              {projects.length > 1 && (
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => removeProject(index)}
                >
                  <Trash className="h-4 w-4 text-red-500" />
                </Button>
              )}
            </div>
            <h4 className="font-medium">Projet {index + 1}</h4>
            <div>
              <Label htmlFor={`project-title-${index}`}>Titre</Label>
              <Input
                id={`project-title-${index}`}
                value={project.title}
                onChange={(e) => {
                  const updatedProjects = [...projects];
                  updatedProjects[index].title = e.target.value;
                  setProjects(updatedProjects);
                }}
                placeholder="Titre du projet"
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor={`project-desc-${index}`}>Description</Label>
              <Textarea
                id={`project-desc-${index}`}
                value={project.description}
                onChange={(e) => {
                  const updatedProjects = [...projects];
                  updatedProjects[index].description = e.target.value;
                  setProjects(updatedProjects);
                }}
                placeholder="Description du projet"
                className="mt-1"
                rows={3}
              />
            </div>
            <div>
              <Label htmlFor={`project-image-${index}`}>URL de l'image</Label>
              <Input
                id={`project-image-${index}`}
                value={project.imageUrl}
                onChange={(e) => {
                  const updatedProjects = [...projects];
                  updatedProjects[index].imageUrl = e.target.value;
                  setProjects(updatedProjects);
                }}
                placeholder="https://exemple.com/image.jpg"
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor={`project-link-${index}`}>Lien</Label>
              <Input
                id={`project-link-${index}`}
                value={project.link}
                onChange={(e) => {
                  const updatedProjects = [...projects];
                  updatedProjects[index].link = e.target.value;
                  setProjects(updatedProjects);
                }}
                placeholder="https://exemple.com"
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor={`project-category-${index}`}>Catégorie</Label>
              <Input
                id={`project-category-${index}`}
                value={project.category || ""}
                onChange={(e) => {
                  const updatedProjects = [...projects];
                  updatedProjects[index].category = e.target.value;
                  setProjects(updatedProjects);
                }}
                placeholder="Web, Mobile, Design..."
                className="mt-1"
              />
            </div>
          </div>
        ))}
        
        <Button
          type="button"
          variant="outline"
          onClick={addProject}
          className="w-full mt-2"
        >
          <Plus className="h-4 w-4 mr-2" /> Ajouter un projet
        </Button>
      </div>
    </div>
  );
};

export default ProjectsSection;
