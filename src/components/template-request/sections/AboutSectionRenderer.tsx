
import React from "react";
import AboutSection from "../AboutSection";
import { StepTwoProps } from "../types";
import { Option } from "@/components/ui/multi-select";
import { SKILLS_BY_SECTOR } from "@/utils/skillsHelper";

export const renderAboutSection = (props: StepTwoProps) => {
  if (!props.selectedSections.includes('about')) {
    return null;
  }

  // Convert string[] to Option[] if needed
  let skillsByTemplateId = {};
  
  if (props.templateId && props.skillsBySector) {
    if (typeof props.skillsBySector[props.templateId]?.[0] === 'string') {
      // We need to convert string[] to Option[]
      const sectorKey = props.templateId.toLowerCase();
      skillsByTemplateId = {
        [sectorKey]: SKILLS_BY_SECTOR[sectorKey] || []
      };
    } else {
      // Already Option[] format
      skillsByTemplateId = props.skillsBySector;
    }
  }

  // Ensure all required props are passed
  const sectionProps = {
    aboutContent: props.aboutContent,
    setAboutContent: props.setAboutContent,
    selectedSkills: props.selectedSkills,
    setSelectedSkills: props.setSelectedSkills,
    customSkill: props.customSkill,
    setCustomSkill: props.setCustomSkill,
    skillOptions: props.skillOptions,
    sectionIcon: props.sectionIcons['about'],
    templateId: props.templateId,
    skillsBySector: skillsByTemplateId,
    visualCustomization: props.visualCustomization,
    setColorScheme: props.setColorScheme,
    setFontFamily: props.setFontFamily,
    setProfilePhoto: props.setProfilePhoto,
    setPhotoPreview: props.setPhotoPreview,
    setProfession: props.setProfession,
    setCustomProfession: props.setCustomProfession
  };

  return <AboutSection {...sectionProps} />;
};
