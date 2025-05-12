
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Plus, Trash } from "lucide-react";
import { Education } from "./types";

interface EducationSectionProps {
  education: Education[];
  setEducation: (edu: Education[]) => void;
  addEducation: () => void;
  removeEducation: (index: number) => void;
  sectionIcon: React.ReactNode;
}

const EducationSection: React.FC<EducationSectionProps> = ({
  education,
  setEducation,
  addEducation,
  removeEducation,
  sectionIcon,
}) => {
  return (
    <div>
      <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
        {sectionIcon}
        Section Parcours académique
      </h3>
      <div className="space-y-6">
        {education.map((edu, index) => (
          <div key={index} className="border rounded-md p-4 space-y-4 relative">
            <div className="absolute top-4 right-4">
              {education.length > 1 && (
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => removeEducation(index)}
                >
                  <Trash className="h-4 w-4 text-red-500" />
                </Button>
              )}
            </div>
            <h4 className="font-medium">Formation {index + 1}</h4>
            <div>
              <Label htmlFor={`edu-institution-${index}`}>Institution</Label>
              <Input
                id={`edu-institution-${index}`}
                value={edu.institution}
                onChange={(e) => {
                  const updated = [...education];
                  updated[index].institution = e.target.value;
                  setEducation(updated);
                }}
                placeholder="Ex: Université de Paris"
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor={`edu-degree-${index}`}>Diplôme</Label>
              <Input
                id={`edu-degree-${index}`}
                value={edu.degree}
                onChange={(e) => {
                  const updated = [...education];
                  updated[index].degree = e.target.value;
                  setEducation(updated);
                }}
                placeholder="Ex: Master en Droit des Affaires"
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor={`edu-year-${index}`}>Année</Label>
              <Input
                id={`edu-year-${index}`}
                value={edu.year}
                onChange={(e) => {
                  const updated = [...education];
                  updated[index].year = e.target.value;
                  setEducation(updated);
                }}
                placeholder="Ex: 2018"
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor={`edu-desc-${index}`}>Description</Label>
              <Textarea
                id={`edu-desc-${index}`}
                value={edu.description}
                onChange={(e) => {
                  const updated = [...education];
                  updated[index].description = e.target.value;
                  setEducation(updated);
                }}
                placeholder="Description de cette formation..."
                className="mt-1"
                rows={2}
              />
            </div>
          </div>
        ))}
        
        <Button
          type="button"
          variant="outline"
          onClick={addEducation}
          className="w-full mt-2"
        >
          <Plus className="h-4 w-4 mr-2" /> Ajouter une formation
        </Button>
      </div>
    </div>
  );
};

export default EducationSection;
