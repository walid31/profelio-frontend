
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Plus, X, Calendar, Briefcase } from "lucide-react";
import { NotableCase } from "./types";

interface NotableCasesSectionProps {
  notableCases: NotableCase[];
  setNotableCases: (value: NotableCase[]) => void;
  addNotableCase: () => void;
  removeNotableCase: (index: number) => void;
  sectionIcon: React.ReactNode;
}

const NotableCasesSection: React.FC<NotableCasesSectionProps> = ({
  notableCases,
  setNotableCases,
  addNotableCase,
  removeNotableCase,
  sectionIcon,
}) => {
  const handleCaseUpdate = (index: number, field: keyof NotableCase, value: string) => {
    const updatedCases = [...notableCases];
    updatedCases[index] = {
      ...updatedCases[index],
      [field]: value
    };
    setNotableCases(updatedCases);
  };

  return (
    <div>
      <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
        {sectionIcon}
        Section Affaires notables
      </h3>
      
      <p className="text-sm text-gray-500 mb-4">
        Listez vos affaires juridiques notables, avec année, titre et description détaillée.
      </p>
      
      <div className="space-y-6">
        {notableCases.map((item, index) => (
          <div key={index} className="p-4 border rounded-md bg-gray-50 relative">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
              onClick={() => removeNotableCase(index)}
            >
              <X className="h-4 w-4" />
            </Button>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Calendar className="h-4 w-4 text-gray-500" />
                  <Label htmlFor={`case-year-${index}`}>Année</Label>
                </div>
                <Input
                  id={`case-year-${index}`}
                  value={item.year}
                  onChange={(e) => handleCaseUpdate(index, 'year', e.target.value)}
                  placeholder="Ex: 2022"
                />
              </div>
              
              <div className="md:col-span-2">
                <div className="flex items-center gap-2 mb-1">
                  <Briefcase className="h-4 w-4 text-gray-500" />
                  <Label htmlFor={`case-title-${index}`}>Titre</Label>
                </div>
                <Input
                  id={`case-title-${index}`}
                  value={item.title}
                  onChange={(e) => handleCaseUpdate(index, 'title', e.target.value)}
                  placeholder="Ex: Affaire Smith contre XYZ Corp"
                />
              </div>
            </div>
            
            <div>
              <Label htmlFor={`case-description-${index}`}>Description</Label>
              <Textarea
                id={`case-description-${index}`}
                value={item.description}
                onChange={(e) => handleCaseUpdate(index, 'description', e.target.value)}
                placeholder="Décrivez cette affaire notable, les enjeux et le résultat obtenu..."
                className="mt-1"
                rows={4}
              />
            </div>
          </div>
        ))}
      </div>
      
      <Button 
        type="button" 
        variant="outline" 
        className="w-full mt-4"
        onClick={addNotableCase}
      >
        <Plus className="h-4 w-4 mr-2" /> Ajouter une affaire notable
      </Button>
      
      <p className="text-xs text-gray-500 mt-2">
        Conseil : Mentionnez les domaines d'expertise, les solutions apportées et les résultats obtenus sans révéler d'informations confidentielles.
      </p>
    </div>
  );
};

export default NotableCasesSection;
