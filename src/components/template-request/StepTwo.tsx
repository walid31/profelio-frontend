
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardDescription } from "@/components/ui/card";
import { SECTIONS } from "@/constants/templateData";
import { toast } from "sonner";
import CollapsibleSection from "./CollapsibleSection";
import { renderAboutSection } from "./sections/AboutSectionRenderer";
import { renderContactSection } from "./sections/ContactSectionRenderer";
import { renderServicesSection } from "./sections/ServicesSectionRenderer";
import { renderProjectsSection } from "./sections/ProjectsSectionRenderer";
import { renderSkillsSection } from "./sections/SkillsSectionRenderer";
import { renderTestimonialsSection } from "./sections/TestimonialsSectionRenderer";
import {
  renderGallerySection,
  renderProcessSection,
  renderTimelineSection,
  renderNotableCasesSection,
  renderPublicationsSection,
  renderPortfolioSection,
  renderCertificationsSection,
  renderEducationSection
} from "./sections/OtherSectionsRenderer";
import { validateSectionData } from "./SectionRenderer";
import VisualCustomizationSection from "./VisualCustomizationSection";

const StepTwo = ({ 
  selectedPlan,
  plan,
  selectedSections, 
  toggleSection,
  aboutContent,
  setAboutContent,
  selectedSkills,
  setSelectedSkills,
  contactInfo,
  setContactInfo,
  handleLocationInput,
  locationSuggestions,
  services,
  setServices,
  addService,
  removeService,
  projects,
  setProjects,
  addProject,
  removeProject,
  testimonials,
  setTestimonials,
  addTestimonial,
  removeTestimonial,
  processSteps,
  setProcessSteps,
  addProcessStep,
  removeProcessStep,
  galleryItems,
  setGalleryItems,
  addGalleryItem,
  removeGalleryItem,
  timelineItems,
  setTimelineItems,
  addTimelineItem,
  removeTimelineItem,
  competences,
  setCompetences,
  addCompetence,
  removeCompetence,
  notableCases,
  setNotableCases,
  addNotableCase,
  removeNotableCase,
  publications,
  setPublications,
  addPublication,
  removePublication,
  portfolioItems,
  setPortfolioItems,
  addPortfolioItem,
  removePortfolioItem,
  certifications,
  setCertifications,
  addCertification,
  removeCertification,
  education,
  setEducation,
  addEducation,
  removeEducation,
  visualCustomization,
  setColorScheme,
  setFontFamily,
  setProfilePhoto,
  setPhotoPreview,
  setProfession,
  setCustomProfession,
  sectionIcons,
  skillOptions,
  customSkill,
  setCustomSkill,
  prevStep, 
  nextStep,
  templateId,
  skillsBySector
}) => {
  const isPremiumPlan = selectedPlan === "pro";
  const requiredSections = ['about', 'contact', 'services'];
  
  // Track sections that have been validated
  const [validatedSections, setValidatedSections] = useState<string[]>([]);
  
  // Count optional sections (non-required ones that are selected)
  const selectedOptionalSections = selectedSections.filter(
    id => !requiredSections.includes(id)
  ).length;
  
  // Set maximum optional sections to 3
  const maxOptionalSections = 3;
  
  const handleUpgradeClick = () => {
    prevStep(); // Go back to plan selection
    toast.info("Sélectionnez le plan Pro pour accéder à toutes les sections");
  };

  // Props object that will be passed to each section renderer
  const sectionProps = {
    selectedPlan,
    plan,
    selectedSections,
    toggleSection,
    aboutContent,
    setAboutContent,
    selectedSkills,
    setSelectedSkills,
    contactInfo,
    setContactInfo,
    handleLocationInput,
    locationSuggestions,
    services,
    setServices,
    addService,
    removeService,
    projects,
    setProjects,
    addProject,
    removeProject,
    testimonials,
    setTestimonials,
    addTestimonial,
    removeTestimonial,
    processSteps,
    setProcessSteps,
    addProcessStep,
    removeProcessStep,
    galleryItems,
    setGalleryItems,
    addGalleryItem,
    removeGalleryItem,
    timelineItems,
    setTimelineItems,
    addTimelineItem,
    removeTimelineItem,
    competences,
    setCompetences,
    addCompetence,
    removeCompetence,
    notableCases,
    setNotableCases,
    addNotableCase,
    removeNotableCase,
    publications,
    setPublications,
    addPublication,
    removePublication,
    portfolioItems,
    setPortfolioItems,
    addPortfolioItem,
    removePortfolioItem,
    certifications,
    setCertifications,
    addCertification,
    removeCertification,
    education,
    setEducation,
    addEducation,
    removeEducation,
    sectionIcons,
    skillOptions,
    customSkill,
    setCustomSkill,
    templateId,
    skillsBySector,
    visualCustomization,
    setColorScheme,
    setFontFamily,
    setProfilePhoto,
    setPhotoPreview,
    setProfession,
    setCustomProfession,
    prevStep,
    nextStep
  };
  
  // Helper function to render the correct section content
  const renderSectionContent = (sectionId) => {
    switch(sectionId) {
      case 'about':
        return renderAboutSection(sectionProps);
      case 'contact':
        return renderContactSection(sectionProps);
      case 'services':
        return renderServicesSection(sectionProps);
      case 'projects':
        return renderProjectsSection(sectionProps);
      case 'skills':
        return renderSkillsSection(sectionProps);
      case 'testimonials':
        return renderTestimonialsSection(sectionProps);
      case 'gallery':
        return renderGallerySection(sectionProps);
      case 'process':
        return renderProcessSection(sectionProps);
      case 'timeline':
        return renderTimelineSection(sectionProps);
      case 'notable_cases':
        return renderNotableCasesSection(sectionProps);
      case 'publications':
        return renderPublicationsSection(sectionProps);
      case 'portfolio':
        return renderPortfolioSection(sectionProps);
      case 'certifications':
        return renderCertificationsSection(sectionProps);
      case 'education':
        return renderEducationSection(sectionProps);
      default:
        return null;
    }
  };
  
  // Function to validate the selected sections
  const handleContinue = () => {
    // Create data object to validate
    const dataToValidate = {
      aboutContent,
      selectedSkills,
      contactInfo,
      services,
      projects,
      testimonials,
      processSteps,
      galleryItems,
      timelineItems,
      competences,
      notableCases,
      publications,
      portfolioItems,
      certifications,
      education
    };
    
    // Check required sections first
    const missingRequiredSections = [];
    
    for (const sectionId of selectedSections) {
      if (requiredSections.includes(sectionId)) {
        const isValid = validateSectionData(sectionId, dataToValidate);
        
        if (!isValid) {
          missingRequiredSections.push(sectionId);
        }
      }
    }
    
    if (missingRequiredSections.length > 0) {
      const sectionNames = missingRequiredSections.map(id => {
        const section = SECTIONS.find(s => s.id === id);
        return section ? section.label : id;
      }).join(", ");
      
      toast.error(`Veuillez remplir les sections obligatoires: ${sectionNames}`);
      return;
    }
    
    // All required sections are valid, proceed to next step
    nextStep();
  };
  
  return (
    <div className="space-y-8 py-6">
      <div>
        <h3 className="text-xl font-semibold mb-2">Personnalisez votre site</h3>
        <p className="text-gray-500 mb-4">
          Sélectionnez les sections que vous souhaitez inclure dans votre profil et remplissez leurs informations.
        </p>
        
        {!isPremiumPlan && (
          <Card className="bg-amber-50 border border-amber-200 mb-6">
            <div className="p-4">
              <p className="text-amber-800">
                <strong>Note:</strong> Vous êtes limité à {maxOptionalSections} sections optionnelles avec le plan Basic.
                Vous avez sélectionné {selectedOptionalSections}/{maxOptionalSections} sections optionnelles.
              </p>
              <p className="text-amber-800 mt-2">
                Vous voulez plus de sections? Passez à un plan supérieur pour accéder à toutes nos sections.
              </p>
              <Button 
                variant="outline" 
                className="mt-2 bg-amber-100 hover:bg-amber-200 text-amber-800 border-amber-300"
                onClick={handleUpgradeClick}
              >
                Mettre à niveau
              </Button>
            </div>
          </Card>
        )}
      </div>
      
      {/* Visual Customization Section */}
      <CollapsibleSection
        title="Personnalisation visuelle"
        description="Choisissez les couleurs, la police et ajoutez votre photo de profil"
        icon={sectionIcons["customization"] || sectionIcons["about"]}
        isRequired={false}
        isSelected={true}
        onToggle={() => {}}
        canToggle={false}
      >
        <VisualCustomizationSection
          colorScheme={visualCustomization.colorScheme}
          setColorScheme={setColorScheme}
          fontFamily={visualCustomization.fontFamily}
          setFontFamily={setFontFamily}
          profilePhoto={visualCustomization.profilePhoto}
          setProfilePhoto={setProfilePhoto}
          photoPreview={visualCustomization.photoPreview}
          setPhotoPreview={setPhotoPreview}
          profession={visualCustomization.profession}
          setProfession={setProfession}
          customProfession={visualCustomization.customProfession}
          setCustomProfession={setCustomProfession}
          sectionIcon={sectionIcons["customization"] || sectionIcons["about"]}
        />
      </CollapsibleSection>
      
      <div className="space-y-4">
        {SECTIONS.map((section) => {
          const isSelected = selectedSections.includes(section.id);
          const isRequired = requiredSections.includes(section.id);
          const isDisabled = !isPremiumPlan && !isSelected && !isRequired && selectedOptionalSections >= maxOptionalSections;
          
          return (
            <CollapsibleSection
              key={section.id}
              title={section.label}
              description={section.description}
              icon={sectionIcons[section.id]}
              isRequired={isRequired}
              isSelected={isSelected}
              onToggle={() => toggleSection(section.id)}
              canToggle={!isDisabled && !isRequired}
            >
              {isSelected && renderSectionContent(section.id)}
              {isSelected && !renderSectionContent(section.id) && (
                <CardDescription>Cette section sera incluse dans votre profil.</CardDescription>
              )}
              {!isSelected && (
                <CardDescription>
                  {isDisabled 
                    ? "Passez au plan Pro pour ajouter plus de sections optionnelles." 
                    : "Sélectionnez cette section pour la configurer."}
                </CardDescription>
              )}
            </CollapsibleSection>
          );
        })}
      </div>
      
      <div className="flex justify-between">
        <Button variant="outline" onClick={prevStep}>
          Retour
        </Button>
        <Button onClick={handleContinue}>
          Continuer
        </Button>
      </div>
    </div>
  );
};

export default StepTwo;
