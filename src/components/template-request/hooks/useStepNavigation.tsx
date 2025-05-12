
import { useState, useEffect } from "react";
import { toast } from "sonner";

// Modified to accept parameters instead of calling hooks
export const useStepNavigation = (
  selectedPlan: string | null,
  selectedSections: string[]
) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [stepsCompleted, setStepsCompleted] = useState({
    1: false, // Plan selection
    2: false, // Section selection
    3: false  // Review and submit
  });

  // Check if steps are completed
  useEffect(() => {
    setStepsCompleted(prev => ({
      ...prev,
      1: selectedPlan !== null, 
      2: selectedSections.length > 0
    }));
  }, [selectedPlan, selectedSections]);

  const handleNext = () => {
    // Validation for each step
    if (currentStep === 1 && !selectedPlan) {
      toast.error("Veuillez sélectionner un plan");
      return;
    }
    
    if (currentStep === 2) {
      const selectedCount = selectedSections.length;
      
      if (selectedCount === 0) {
        toast.error("Veuillez sélectionner au moins une section");
        return;
      }
      
      if (selectedPlan !== "basic") {
        // Check if the required sections are selected for non-basic plans
        const mandatorySections = ["about", "contact", "services"];
        const selectedMandatory = mandatorySections.filter(section => selectedSections.includes(section)).length;
        
        if (selectedMandatory < 3) {
          toast.error("Veuillez sélectionner les 3 sections obligatoires");
          return;
        }
      }
    }

    // Proceed to next step if validation passes (updated to max of 3 steps)
    setCurrentStep(prev => Math.min(prev + 1, 3));
  };

  const handleBack = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const goToStep = (step) => {
    // Only allow going to steps that are before the current step or completed
    if (step < currentStep || stepsCompleted[step]) {
      setCurrentStep(step);
    } else {
      toast.error("Veuillez compléter les étapes précédentes");
    }
  };

  // Add these aliases to match what's used in useTemplateForm
  const nextStep = handleNext;
  const prevStep = handleBack;
  const step = currentStep;

  return {
    currentStep,
    handleNext,
    handleBack,
    goToStep,
    stepsCompleted,
    // Adding these aliases to maintain compatibility
    step,
    nextStep,
    prevStep
  };
};
