
import React from "react";
import TestimonialsSection from "../TestimonialsSection";
import { StepTwoProps } from "../types";

export const renderTestimonialsSection = (props: StepTwoProps) => {
  if (!props.selectedSections.includes('testimonials')) {
    return null;
  }

  // Ensure all required props are passed
  const sectionProps = {
    testimonials: props.testimonials,
    setTestimonials: props.setTestimonials,
    addTestimonial: props.addTestimonial,
    removeTestimonial: props.removeTestimonial,
    sectionIcon: props.sectionIcons['testimonials'],
    visualCustomization: props.visualCustomization,
    setColorScheme: props.setColorScheme,
    setFontFamily: props.setFontFamily,
    setProfilePhoto: props.setProfilePhoto,
    setPhotoPreview: props.setPhotoPreview,
    setProfession: props.setProfession,
    setCustomProfession: props.setCustomProfession
  };

  return <TestimonialsSection {...sectionProps} />;
};
