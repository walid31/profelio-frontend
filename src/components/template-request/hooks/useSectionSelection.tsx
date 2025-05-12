import { useState, useEffect } from 'react';
import { toast } from 'sonner';

export const useSectionSelection = () => {
  // We keep the default sections based on plan requirements
  const [selectedSections, setSelectedSections] = useState<string[]>(['about', 'contact']);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  
  // Define required sections based on plan
  const getRequiredSections = (plan: string | null): string[] => {
    if (!plan || plan === 'basic') {
      return ['about', 'contact'];
    }
    return ['about', 'contact', 'services'];
  };
  
  // Update sections when plan changes
  useEffect(() => {
    const requiredSections = getRequiredSections(selectedPlan);
    
    // Keep current selections that are still valid for the plan
    // and add any required sections that might be missing
    setSelectedSections(prevSections => {
      const newSections = new Set([
        ...requiredSections,
        ...prevSections.filter(section => {
          // For basic plan, only allow about and contact
          if (selectedPlan === 'basic') {
            return requiredSections.includes(section);
          }
          return true;
        })
      ]);
      return Array.from(newSections);
    });
  }, [selectedPlan]);
  
  // Handle section toggle with new limitations
  const toggleSection = (sectionId: string) => {
    const requiredSections = getRequiredSections(selectedPlan);
    
    // Don't toggle required sections
    if (requiredSections.includes(sectionId)) {
      return;
    }
    
    // For basic plan, only allow about and contact
    if (selectedPlan === 'basic' && !requiredSections.includes(sectionId)) {
      toast("Option non disponible", {
        description: "Passez au plan Pro pour accéder à cette section."
      });
      return;
    }
    
    // Check if section is already selected
    if (selectedSections.includes(sectionId)) {
      // If selected, remove it
      setSelectedSections(selectedSections.filter(id => id !== sectionId));
    } else {
      // Calculate optional sections (everything except required sections)
      const optionalSections = selectedSections.filter(id => !requiredSections.includes(id));
      
      // If already at 3 optional sections limit, show toast and don't add
      if (optionalSections.length >= 3) {
        toast("Limite atteinte", {
          description: "Vous pouvez sélectionner un maximum de 3 sections optionnelles."
        });
        return;
      }
      
      // Otherwise add the section
      setSelectedSections([...selectedSections, sectionId]);
    }
  };
  
  return {
    selectedSections,
    toggleSection,
    getRequiredSections,
    isAtOptionalSectionsLimit: (plan: string | null) => {
      const requiredSections = getRequiredSections(plan);
      return selectedSections.filter(id => !requiredSections.includes(id)).length >= 3;
    },
    setSelectedPlan
  };
};
