
import React from "react";
import ServicesSection from "../ServicesSection";
import { StepTwoProps } from "../types";
import { Button } from "@/components/ui/button";
import { Lock } from "lucide-react";

export const renderServicesSection = (props: StepTwoProps) => {
  if (!props.selectedSections.includes('services')) {
    const isPro = props.selectedPlan === "pro";
    
    // If user has Basic plan, show a button to add Services section
    if (!isPro) {
      return (
        <div className="border rounded-lg p-6 mb-4 bg-gray-50">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-medium">Section Services</h3>
              {!isPro && <Lock className="h-4 w-4 text-gray-400" />}
            </div>
            <Button 
              onClick={() => props.toggleSection('services')}
              variant="outline"
            >
              Sélectionner
            </Button>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            Ajoutez cette section pour présenter vos services professionnels à vos visiteurs.
          </p>
        </div>
      );
    }
    
    return null;
  }

  // Ensure all required props are passed
  const sectionProps = {
    services: props.services,
    setServices: props.setServices,
    addService: props.addService,
    removeService: props.removeService,
    sectionIcon: props.sectionIcons['services'],
    visualCustomization: props.visualCustomization,
    setColorScheme: props.setColorScheme,
    setFontFamily: props.setFontFamily,
    setProfilePhoto: props.setProfilePhoto,
    setPhotoPreview: props.setPhotoPreview,
    setProfession: props.setProfession,
    setCustomProfession: props.setCustomProfession
  };

  return <ServicesSection {...sectionProps} />;
};
