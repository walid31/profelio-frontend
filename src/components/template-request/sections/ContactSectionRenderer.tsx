
import React from "react";
import ContactSection from "../ContactSection";
import { StepTwoProps } from "../types";

export const renderContactSection = (props: StepTwoProps) => {
  if (!props.selectedSections.includes('contact')) {
    return null;
  }

  // Ensure all required props are passed
  const sectionProps = {
    contactInfo: props.contactInfo,
    setContactInfo: props.setContactInfo,
    handleLocationInput: props.handleLocationInput,
    locationSuggestions: props.locationSuggestions,
    sectionIcon: props.sectionIcons['contact'],
    selectedPlan: props.selectedPlan,
    visualCustomization: props.visualCustomization,
    setColorScheme: props.setColorScheme,
    setFontFamily: props.setFontFamily,
    setProfilePhoto: props.setProfilePhoto,
    setPhotoPreview: props.setPhotoPreview,
    setProfession: props.setProfession,
    setCustomProfession: props.setCustomProfession
  };

  return <ContactSection {...sectionProps} />;
};
