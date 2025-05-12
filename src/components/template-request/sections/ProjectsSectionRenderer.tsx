
import React from "react";
import ProjectsSection from "../ProjectsSection";
import { StepTwoProps } from "../types";

export const renderProjectsSection = (props: StepTwoProps) => {
  if (!props.selectedSections.includes('projects')) {
    return null;
  }

  // Ensure all required props are passed
  const sectionProps = {
    projects: props.projects,
    setProjects: props.setProjects,
    addProject: props.addProject,
    removeProject: props.removeProject,
    sectionIcon: props.sectionIcons['projects'],
    visualCustomization: props.visualCustomization,
    setColorScheme: props.setColorScheme,
    setFontFamily: props.setFontFamily,
    setProfilePhoto: props.setProfilePhoto,
    setPhotoPreview: props.setPhotoPreview,
    setProfession: props.setProfession,
    setCustomProfession: props.setCustomProfession
  };

  return <ProjectsSection {...sectionProps} />;
};
