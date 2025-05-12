
import React from "react";
import SkillsSection from "../SkillsSection";
import { StepTwoProps } from "../types";

export const renderSkillsSection = (props: StepTwoProps) => {
  if (!props.selectedSections.includes('skills')) {
    return null;
  }

  // Ensure all required props are passed
  const sectionProps = {
    competences: props.competences,
    setCompetences: props.setCompetences,
    addCompetence: props.addCompetence,
    removeCompetence: props.removeCompetence,
    visualCustomization: props.visualCustomization,
    setColorScheme: props.setColorScheme,
    setFontFamily: props.setFontFamily,
    setProfilePhoto: props.setProfilePhoto,
    setPhotoPreview: props.setPhotoPreview,
    setProfession: props.setProfession,
    setCustomProfession: props.setCustomProfession,
    sectionIcon: props.sectionIcons['skills']
  };

  return <SkillsSection {...sectionProps} />;
};
