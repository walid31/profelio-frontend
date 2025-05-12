
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Plus, Trash } from "lucide-react";
import { ProcessStep } from "./types";

interface ProcessSectionProps {
  processSteps: ProcessStep[];
  setProcessSteps: (steps: ProcessStep[]) => void;
  addProcessStep: () => void;
  removeProcessStep: (index: number) => void;
  sectionIcon: React.ReactNode;
}

const ProcessSection: React.FC<ProcessSectionProps> = ({
  processSteps,
  setProcessSteps,
  addProcessStep,
  removeProcessStep,
  sectionIcon,
}) => {
  return (
    <div>
      <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
        {sectionIcon}
        Section Processus de travail
      </h3>
      <div className="space-y-6">
        {processSteps.map((step, index) => (
          <div key={index} className="border rounded-md p-4 space-y-4 relative">
            <div className="absolute top-4 right-4">
              {processSteps.length > 1 && (
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => removeProcessStep(index)}
                >
                  <Trash className="h-4 w-4 text-red-500" />
                </Button>
              )}
            </div>
            <h4 className="font-medium">Étape {index + 1}</h4>
            <div>
              <Label htmlFor={`process-title-${index}`}>Titre</Label>
              <Input
                id={`process-title-${index}`}
                value={step.title}
                onChange={(e) => {
                  const updated = [...processSteps];
                  updated[index].title = e.target.value;
                  setProcessSteps(updated);
                }}
                placeholder="Ex: Consultation initiale"
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor={`process-desc-${index}`}>Description</Label>
              <Textarea
                id={`process-desc-${index}`}
                value={step.description}
                onChange={(e) => {
                  const updated = [...processSteps];
                  updated[index].description = e.target.value;
                  setProcessSteps(updated);
                }}
                placeholder="Description de cette étape..."
                className="mt-1"
                rows={3}
              />
            </div>
          </div>
        ))}
        
        <Button
          type="button"
          variant="outline"
          onClick={addProcessStep}
          className="w-full mt-2"
        >
          <Plus className="h-4 w-4 mr-2" /> Ajouter une étape
        </Button>
      </div>
    </div>
  );
};

export default ProcessSection;
