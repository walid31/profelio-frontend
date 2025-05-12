
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { X, Plus } from "lucide-react";
import { Badge } from "../ui/badge";
import { Competence } from "./types";

interface SkillsSectionProps {
  competences: Competence[];
  setCompetences: (competences: Competence[]) => void;
  addCompetence: () => void;
  removeCompetence: (index: number) => void;
}

const SkillsSection: React.FC<SkillsSectionProps> = ({
  competences,
  setCompetences,
  addCompetence,
  removeCompetence
}) => {
  const [newSkill, setNewSkill] = useState("");
  const [skillLevel, setSkillLevel] = useState(75);
  const [skillDescription, setSkillDescription] = useState("");
  
  const handleAddSkill = (e) => {
    e.preventDefault();
    if (newSkill.trim()) {
      const newCompetence = {
        name: newSkill.trim(),
        percentage: skillLevel,
        description: skillDescription.trim() || undefined
      };
      
      // Use the setCompetences function directly rather than adding to the existing array
      setCompetences([...competences, newCompetence]);
      
      // Reset form fields
      setNewSkill("");
      setSkillLevel(75);
      setSkillDescription("");
    }
  };
  
  const handleSkillLevelChange = (index, level) => {
    const updatedCompetences = [...competences];
    updatedCompetences[index] = {
      ...updatedCompetences[index],
      percentage: parseInt(level, 10)
    };
    setCompetences(updatedCompetences);
  };

  const handleSkillNameChange = (index, name) => {
    const updatedCompetences = [...competences];
    updatedCompetences[index] = {
      ...updatedCompetences[index],
      name
    };
    setCompetences(updatedCompetences);
  };
  
  const handleSkillDescriptionChange = (index, description) => {
    const updatedCompetences = [...competences];
    updatedCompetences[index] = {
      ...updatedCompetences[index],
      description: description || undefined
    };
    setCompetences(updatedCompetences);
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium mb-2">Compétences professionnelles</h3>
        <p className="text-gray-500 text-sm mb-4">
          Ajoutez vos compétences professionnelles et indiquez votre niveau de maîtrise.
        </p>
      </div>
      
      <div className="space-y-4">
        {competences.map((skill, index) => (
          <div key={index} className="p-4 bg-gray-50 rounded-md space-y-3">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <div className="flex-grow">
                <Label htmlFor={`skill-${index}`} className="text-sm font-medium">
                  Compétence
                </Label>
                <div className="flex mt-1">
                  <Input
                    id={`skill-${index}`}
                    value={skill.name}
                    onChange={(e) => handleSkillNameChange(index, e.target.value)}
                    placeholder="Nom de la compétence"
                  />
                </div>
              </div>
              
              <div className="w-full sm:w-48">
                <Label htmlFor={`level-${index}`} className="text-sm font-medium">
                  Niveau: {skill.percentage}%
                </Label>
                <input
                  id={`level-${index}`}
                  type="range"
                  min="0"
                  max="100"
                  value={skill.percentage}
                  onChange={(e) => handleSkillLevelChange(index, e.target.value)}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
              
              <Button 
                variant="ghost"
                size="icon"
                className="text-gray-500 hover:text-red-500 mt-4 sm:mt-6" 
                onClick={() => removeCompetence(index)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            
            <div>
              <Label htmlFor={`description-${index}`} className="text-sm font-medium">
                Description (optionnel)
              </Label>
              <Input
                id={`description-${index}`}
                value={skill.description || ""}
                onChange={(e) => handleSkillDescriptionChange(index, e.target.value)}
                placeholder="Description brève de cette compétence"
                className="mt-1"
              />
            </div>
          </div>
        ))}
      </div>
      
      <form onSubmit={handleAddSkill} className="p-4 border border-dashed border-gray-300 rounded-md">
        <div className="space-y-3">
          <div className="flex flex-col sm:flex-row gap-3 items-start">
            <div className="flex-grow">
              <Label htmlFor="new-skill">Nom de la compétence</Label>
              <Input
                id="new-skill"
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
                placeholder="Ex: Management d'équipe"
                className="mt-1"
              />
            </div>
            
            <div className="w-full sm:w-48">
              <Label>Niveau: {skillLevel}%</Label>
              <input
                type="range"
                min="0"
                max="100"
                value={skillLevel}
                onChange={(e) => setSkillLevel(parseInt(e.target.value, 10))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer mt-1"
              />
            </div>
          </div>
          
          <div>
            <Label htmlFor="skill-description">Description (optionnel)</Label>
            <Input
              id="skill-description"
              value={skillDescription}
              onChange={(e) => setSkillDescription(e.target.value)}
              placeholder="Description brève de cette compétence"
              className="mt-1"
            />
          </div>
          
          <Button type="submit" className="w-full mt-2">
            <Plus className="h-4 w-4 mr-2" /> Ajouter cette compétence
          </Button>
        </div>
      </form>
      
      {competences.length > 0 && (
        <div className="pt-2">
          <p className="text-sm font-medium mb-2">Aperçu des compétences:</p>
          <div className="flex flex-wrap gap-2">
            {competences.map((skill, index) => (
              <Badge key={index} variant="outline" className="bg-gray-100">
                {skill.name} - {skill.percentage}%
              </Badge>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SkillsSection;
