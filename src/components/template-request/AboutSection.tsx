
import React from "react";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { MultiSelect, Option } from "@/components/ui/multi-select";
import { Plus } from "lucide-react";

interface AboutSectionProps {
  aboutContent: string;
  setAboutContent: (content: string) => void;
  selectedSkills: {skills: string[], showPercentage?: boolean, description?: string};
  setSelectedSkills: (skills: {skills: string[], showPercentage?: boolean, description?: string}) => void;
  customSkill: string;
  setCustomSkill: (skill: string) => void;
  sectionIcon: React.ReactNode;
  skillOptions?: Option[];
  templateId?: string;
  skillsBySector?: Record<string, Option[]>;
}

const AboutSection: React.FC<AboutSectionProps> = ({
  aboutContent,
  setAboutContent,
  selectedSkills,
  setSelectedSkills,
  customSkill,
  setCustomSkill,
  sectionIcon,
  skillOptions = [],
  templateId,
  skillsBySector = {},
}) => {
  // Get the currently available options
  const options = skillOptions || (templateId && skillsBySector && skillsBySector[templateId]) || [];
  
  // Function to add a custom skill
  const handleAddCustomSkill = () => {
    if (customSkill.trim()) {
      const newSkillValue = `custom-${Date.now()}`;
      const newSkill = { value: newSkillValue, label: customSkill.trim() };
      
      // Add to selected skills
      setSelectedSkills({
        ...selectedSkills,
        skills: [...selectedSkills.skills, newSkillValue]
      });
      
      // Add to the options array for the current sector if available
      if (templateId && skillsBySector && skillsBySector[templateId]) {
        skillsBySector[templateId] = [...skillsBySector[templateId], newSkill];
      }
      
      // Clear the input field
      setCustomSkill("");
    }
  };

  return (
    <div>
      <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
        {sectionIcon}
        Section À propos
      </h3>
      <div className="space-y-4">
        <div>
          <Label htmlFor="about-content">Biographie ou présentation</Label>
          <Textarea
            id="about-content"
            value={aboutContent}
            onChange={(e) => setAboutContent(e.target.value)}
            placeholder="Présentez-vous, votre parcours et votre expertise..."
            className="mt-1"
            rows={5}
          />
        </div>
        <div>
          <Label>Compétences clés</Label>
          <MultiSelect
            options={options}
            selected={selectedSkills.skills}
            onChange={(selected) => setSelectedSkills({...selectedSkills, skills: selected})}
            placeholder="Sélectionnez vos compétences clés"
            className="mt-1"
          />
          
          <div className="flex items-center gap-2 mt-3">
            <Input
              type="text"
              placeholder="Ajouter une compétence personnalisée"
              value={customSkill}
              onChange={(e) => setCustomSkill(e.target.value)}
              className="flex-grow"
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  handleAddCustomSkill();
                }
              }}
            />
            <Button 
              type="button" 
              variant="outline" 
              onClick={handleAddCustomSkill}
              size="sm"
            >
              <Plus className="h-4 w-4 mr-1" /> Ajouter
            </Button>
          </div>
          
          <div className="flex items-center gap-2 mt-3">
            <Checkbox 
              id="show-percentages" 
              checked={selectedSkills.showPercentage || false}
              onCheckedChange={(checked) => 
                setSelectedSkills({...selectedSkills, showPercentage: !!checked})
              }
            />
            <label htmlFor="show-percentages" className="text-sm">
              Afficher les pourcentages pour les compétences
            </label>
          </div>
          
          <div className="mt-3">
            <Label htmlFor="skills-description">Description des compétences (optionnel)</Label>
            <Textarea
              id="skills-description"
              placeholder="Décrivez vos compétences plus en détail..."
              value={selectedSkills.description || ""}
              onChange={(e) => setSelectedSkills({
                ...selectedSkills, 
                description: e.target.value
              })}
              className="mt-1"
              rows={3}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
