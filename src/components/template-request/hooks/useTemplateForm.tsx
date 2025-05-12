
import { useState } from 'react';
import { useSectionState } from './useSectionState';
import { useSectionSelection } from './useSectionSelection';
import { useLocationInput } from './useLocationInput';
import { useRepeaterItems } from './useRepeaterItems';
import { usePlanSelection } from './usePlanSelection';
import { useStepNavigation } from './useStepNavigation';
import { useFormData } from './useFormData';
import { useDomainManagement } from './useDomainManagement';
import { useSubmitTemplateForm } from './useSubmitTemplateForm';
import { SKILLS_BY_SECTOR } from '@/constants/sectorSkills';

export const useTemplateForm = (templateId?: string) => {
  // Form data hook
  const { formData, additionalMessage, setAdditionalMessage } = useFormData();
  
  // Plan selection hook
  const {
    plan,
    setPlan,
    selectedPlan,
    setSelectedPlan,
    customDomain,
    setCustomDomain
  } = usePlanSelection();
  
  // Section selection hook with plan awareness
  const {
    selectedSections,
    toggleSection,
    setSelectedPlan: setSectionSelectionPlan
  } = useSectionSelection();
  
  // Keep the plans in sync
  const updatePlanSelection = (planId: string | null) => {
    setSelectedPlan(planId);
    setSectionSelectionPlan(planId);
  };
  
  // Section state hook
  const {
    aboutContent,
    setAboutContent,
    selectedSkills,
    setSelectedSkills,
    contactInfo,
    setContactInfo,
    services,
    setServices,
    projects,
    setProjects,
    competences,
    setCompetences,
    processSteps,
    setProcessSteps,
    galleryItems,
    setGalleryItems,
    notableCases,
    setNotableCases,
    publications,
    setPublications,
    portfolioItems,
    setPortfolioItems,
    certifications,
    setCertifications,
    education,
    setEducation,
    testimonials,
    setTestimonials,
    timelineItems,
    setTimelineItems,
    customSkill,
    setCustomSkill,
    // Visual customization fields
    colorScheme,
    setColorScheme,
    fontFamily,
    setFontFamily,
    profilePhoto,
    setProfilePhoto,
    photoPreview,
    setPhotoPreview,
    profession,
    setProfession,
    customProfession,
    setCustomProfession
  } = useSectionState();
  
  // Location input hook
  const {
    locationSuggestions,
    handleLocationInput
  } = useLocationInput(contactInfo, setContactInfo);
  
  // Repeater items hook
  const {
    addService,
    removeService,
    addProject,
    removeProject,
    addCompetence,
    removeCompetence,
    addProcessStep,
    removeProcessStep,
    addGalleryItem,
    removeGalleryItem,
    addCertification,
    removeCertification,
    addEducation,
    removeEducation,
    addTestimonial,
    removeTestimonial,
    addTimelineItem,
    removeTimelineItem,
    addNotableCase,
    removeNotableCase,
    addPublication,
    removePublication,
    addPortfolioItem,
    removePortfolioItem
  } = useRepeaterItems(
    services,
    setServices,
    projects,
    setProjects,
    competences,
    setCompetences,
    processSteps,
    setProcessSteps,
    galleryItems,
    setGalleryItems,
    certifications,
    setCertifications,
    education,
    setEducation,
    testimonials,
    setTestimonials,
    timelineItems,
    setTimelineItems,
    notableCases,
    setNotableCases,
    publications,
    setPublications,
    portfolioItems,
    setPortfolioItems
  );
  
  // Updated to pass selectedPlan and selectedSections to useStepNavigation
  const {
    currentStep,
    handleNext,
    handleBack,
    goToStep,
    step,
    nextStep,
    prevStep
  } = useStepNavigation(selectedPlan, selectedSections);
  
  // Domain management hook
  const {
    isDomainChecking,
    isDomainAvailable,
    checkDomain
  } = useDomainManagement(customDomain, step, selectedPlan);
  
  // Form submission hook
  const {
    isSubmitting,
    submitForm
  } = useSubmitTemplateForm();
  
  // Visual customization object
  const visualCustomization = {
    colorScheme,
    fontFamily,
    profilePhoto,
    photoPreview,
    profession,
    customProfession
  };
  
  // Custom handleSubmit to gather all form data
  const handleSubmit = async () => {
    // Gather all form data
    const formDataToSubmit = {
      ...formData,
      template: templateId,
      plan,
      domain: selectedPlan === 'pro' ? customDomain : null,
      sections: selectedSections,
      sectionData: {
        about: {
          content: aboutContent,
          skills: selectedSkills
        },
        contact: contactInfo,
        services,
        projects: selectedSections.includes('projects') ? projects : [],
        competences: selectedSections.includes('skills') ? competences : [],
        processSteps: selectedSections.includes('process') ? processSteps : [],
        gallery: selectedSections.includes('gallery') ? galleryItems : [],
        testimonials: selectedSections.includes('testimonials') ? testimonials : [],
        timeline: selectedSections.includes('timeline') ? timelineItems : [],
        notableCases: selectedSections.includes('notable_cases') ? notableCases : [],
        publications: selectedSections.includes('publications') ? publications : [],
        portfolioItems: selectedSections.includes('portfolio') ? portfolioItems : [],
        certifications: selectedSections.includes('certifications') ? certifications : [],
        education: selectedSections.includes('education') ? education : []
      },
      visualCustomization: {
        colorScheme,
        fontFamily,
        profession: profession === 'autre' ? customProfession : profession,
        photoFileName: profilePhoto ? profilePhoto.name : null
      },
      additionalMessage
    };
    
    await submitForm(formDataToSubmit, profilePhoto);
  };

  return {
    // Form state
    step,
    selectedSections,
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
    projects,
    setProjects,
    competences,
    setCompetences,
    processSteps,
    setProcessSteps,
    galleryItems,
    setGalleryItems,
    notableCases,
    setNotableCases,
    publications,
    setPublications,
    portfolioItems,
    setPortfolioItems,
    certifications,
    setCertifications,
    education,
    setEducation,
    testimonials,
    setTestimonials,
    timelineItems,
    setTimelineItems,
    customSkill,
    setCustomSkill,
    plan,
    setPlan,
    selectedPlan,
    setSelectedPlan: updatePlanSelection,
    customDomain,
    setCustomDomain,
    isDomainChecking,
    isDomainAvailable,
    additionalMessage,
    setAdditionalMessage,
    formData,
    isSubmitting,
    // Visual customization
    visualCustomization,
    colorScheme,
    setColorScheme,
    fontFamily,
    setFontFamily,
    profilePhoto,
    setProfilePhoto,
    photoPreview,
    setPhotoPreview,
    profession,
    setProfession,
    customProfession,
    setCustomProfession,
    
    // Actions
    toggleSection,
    addService,
    removeService,
    addProject,
    removeProject,
    addCompetence,
    removeCompetence,
    addProcessStep,
    removeProcessStep,
    addGalleryItem,
    removeGalleryItem,
    addCertification,
    removeCertification,
    addEducation,
    removeEducation,
    addTestimonial,
    removeTestimonial,
    addTimelineItem,
    removeTimelineItem,
    addNotableCase,
    removeNotableCase,
    addPublication,
    removePublication,
    addPortfolioItem,
    removePortfolioItem,
    checkDomain,
    handleSubmit,
    nextStep,
    prevStep,
    goToStep,
  };
};
