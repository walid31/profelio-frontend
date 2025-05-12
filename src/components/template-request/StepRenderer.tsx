
import React from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepFour from "./StepFour";
import { useTemplateForm } from "./hooks/useTemplateForm";
import { getSectionIcons } from "./TemplateIcons";
import { getSkillOptions } from "@/utils/templateUtils";
import { SKILLS_BY_SECTOR } from '@/constants/sectorSkills';

interface StepRendererProps {
  templateId?: string;
}

const StepRenderer: React.FC<StepRendererProps> = ({ templateId }) => {
  const sectionIcons = getSectionIcons();
  const skillOptions = getSkillOptions(templateId);
  
  const {
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
    setSelectedPlan,
    customDomain,
    setCustomDomain,
    isDomainChecking,
    isDomainAvailable,
    additionalMessage,
    setAdditionalMessage,
    isSubmitting,
    visualCustomization,
    setColorScheme,
    setFontFamily,
    setProfilePhoto,
    setPhotoPreview,
    setProfession,
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
  } = useTemplateForm(templateId);

  switch (step) {
    case 1:
      return (
        <StepOne
          selectedPlan={selectedPlan}
          setSelectedPlan={setSelectedPlan}
          plan={plan}
          setPlan={setPlan}
          nextStep={nextStep}
          customDomain={customDomain}
          setCustomDomain={setCustomDomain}
          isDomainChecking={isDomainChecking}
          isDomainAvailable={isDomainAvailable}
          checkDomain={checkDomain}
        />
      );
    case 2:
      return (
        <StepTwo
          selectedPlan={selectedPlan}
          plan={plan}
          selectedSections={selectedSections}
          toggleSection={toggleSection}
          aboutContent={aboutContent}
          setAboutContent={setAboutContent}
          selectedSkills={selectedSkills}
          setSelectedSkills={setSelectedSkills}
          contactInfo={contactInfo}
          setContactInfo={setContactInfo}
          handleLocationInput={handleLocationInput}
          locationSuggestions={locationSuggestions}
          services={services}
          setServices={setServices}
          addService={addService}
          removeService={removeService}
          projects={projects}
          setProjects={setProjects}
          addProject={addProject}
          removeProject={removeProject}
          testimonials={testimonials}
          setTestimonials={setTestimonials}
          addTestimonial={addTestimonial}
          removeTestimonial={removeTestimonial}
          processSteps={processSteps}
          setProcessSteps={setProcessSteps}
          addProcessStep={addProcessStep}
          removeProcessStep={removeProcessStep}
          galleryItems={galleryItems}
          setGalleryItems={setGalleryItems}
          addGalleryItem={addGalleryItem}
          removeGalleryItem={removeGalleryItem}
          timelineItems={timelineItems}
          setTimelineItems={setTimelineItems}
          addTimelineItem={addTimelineItem}
          removeTimelineItem={removeTimelineItem}
          competences={competences}
          setCompetences={setCompetences}
          addCompetence={addCompetence}
          removeCompetence={removeCompetence}
          notableCases={notableCases}
          setNotableCases={setNotableCases}
          addNotableCase={addNotableCase}
          removeNotableCase={removeNotableCase}
          publications={publications}
          setPublications={setPublications}
          addPublication={addPublication}
          removePublication={removePublication}
          portfolioItems={portfolioItems}
          setPortfolioItems={setPortfolioItems}
          addPortfolioItem={addPortfolioItem}
          removePortfolioItem={removePortfolioItem}
          certifications={certifications}
          setCertifications={setCertifications}
          addCertification={addCertification}
          removeCertification={removeCertification}
          education={education}
          setEducation={setEducation}
          addEducation={addEducation}
          removeEducation={removeEducation}
          visualCustomization={visualCustomization}
          setColorScheme={setColorScheme}
          setFontFamily={setFontFamily}
          setProfilePhoto={setProfilePhoto}
          setPhotoPreview={setPhotoPreview}
          setProfession={setProfession}
          setCustomProfession={setCustomProfession}
          sectionIcons={sectionIcons}
          skillOptions={skillOptions}
          customSkill={customSkill}
          setCustomSkill={setCustomSkill}
          prevStep={prevStep}
          nextStep={nextStep}
          templateId={templateId}
          skillsBySector={SKILLS_BY_SECTOR}
        />
      );
    case 3:
      return (
        <StepFour
          templateId={templateId}
          plan={plan}
          customDomain={customDomain}
          selectedSections={selectedSections}
          additionalMessage={additionalMessage}
          setAdditionalMessage={setAdditionalMessage}
          loading={isSubmitting}
          prevStep={prevStep}
          handleSubmit={handleSubmit}
          aboutContent={aboutContent}
          selectedSkills={selectedSkills}
          contactInfo={contactInfo}
          services={services}
          projects={projects}
          competences={competences}
          testimonials={testimonials}
          timelineItems={timelineItems}
          visualCustomization={visualCustomization}
        />
      );
    default:
      return null;
  }
};

export default StepRenderer;
