
import React from "react";
import GallerySection from "../GallerySection";
import ProcessSection from "../ProcessSection";
import TimelineSection from "../TimelineSection";
import NotableCasesSection from "../NotableCasesSection";
import PublicationsSection from "../PublicationsSection";
import PortfolioSection from "../PortfolioSection";
import CertificationsSection from "../CertificationsSection";
import EducationSection from "../EducationSection";
import { StepTwoProps } from "../types";

// Gallery Section
export const renderGallerySection = (props: StepTwoProps) => {
  if (!props.selectedSections.includes('gallery')) {
    return null;
  }

  // Ensure all required props are passed
  const sectionProps = {
    galleryItems: props.galleryItems,
    setGalleryItems: props.setGalleryItems,
    addGalleryItem: props.addGalleryItem,
    removeGalleryItem: props.removeGalleryItem,
    sectionIcon: props.sectionIcons['gallery'],
    visualCustomization: props.visualCustomization,
    setColorScheme: props.setColorScheme,
    setFontFamily: props.setFontFamily,
    setProfilePhoto: props.setProfilePhoto,
    setPhotoPreview: props.setPhotoPreview,
    setProfession: props.setProfession,
    setCustomProfession: props.setCustomProfession
  };

  return <GallerySection {...sectionProps} />;
};

// Process Section
export const renderProcessSection = (props: StepTwoProps) => {
  if (!props.selectedSections.includes('process')) {
    return null;
  }

  // Ensure all required props are passed
  const sectionProps = {
    processSteps: props.processSteps,
    setProcessSteps: props.setProcessSteps,
    addProcessStep: props.addProcessStep,
    removeProcessStep: props.removeProcessStep,
    sectionIcon: props.sectionIcons['process'],
    visualCustomization: props.visualCustomization,
    setColorScheme: props.setColorScheme,
    setFontFamily: props.setFontFamily,
    setProfilePhoto: props.setProfilePhoto,
    setPhotoPreview: props.setPhotoPreview,
    setProfession: props.setProfession,
    setCustomProfession: props.setCustomProfession
  };

  return <ProcessSection {...sectionProps} />;
};

// Timeline Section
export const renderTimelineSection = (props: StepTwoProps) => {
  if (!props.selectedSections.includes('timeline')) {
    return null;
  }

  // Ensure all required props are passed
  const sectionProps = {
    timelineItems: props.timelineItems,
    setTimelineItems: props.setTimelineItems,
    addTimelineItem: props.addTimelineItem,
    removeTimelineItem: props.removeTimelineItem,
    sectionIcon: props.sectionIcons['timeline'],
    visualCustomization: props.visualCustomization,
    setColorScheme: props.setColorScheme,
    setFontFamily: props.setFontFamily,
    setProfilePhoto: props.setProfilePhoto,
    setPhotoPreview: props.setPhotoPreview,
    setProfession: props.setProfession,
    setCustomProfession: props.setCustomProfession
  };

  return <TimelineSection {...sectionProps} />;
};

// Notable Cases Section
export const renderNotableCasesSection = (props: StepTwoProps) => {
  if (!props.selectedSections.includes('notable_cases')) {
    return null;
  }

  // Ensure all required props are passed
  const sectionProps = {
    notableCases: props.notableCases,
    setNotableCases: props.setNotableCases,
    addNotableCase: props.addNotableCase,
    removeNotableCase: props.removeNotableCase,
    sectionIcon: props.sectionIcons['notable_cases'],
    visualCustomization: props.visualCustomization,
    setColorScheme: props.setColorScheme,
    setFontFamily: props.setFontFamily,
    setProfilePhoto: props.setProfilePhoto,
    setPhotoPreview: props.setPhotoPreview,
    setProfession: props.setProfession,
    setCustomProfession: props.setCustomProfession
  };

  return <NotableCasesSection {...sectionProps} />;
};

// Publications Section
export const renderPublicationsSection = (props: StepTwoProps) => {
  if (!props.selectedSections.includes('publications')) {
    return null;
  }

  // Ensure all required props are passed
  const sectionProps = {
    publications: props.publications,
    setPublications: props.setPublications,
    addPublication: props.addPublication,
    removePublication: props.removePublication,
    sectionIcon: props.sectionIcons['publications'],
    visualCustomization: props.visualCustomization,
    setColorScheme: props.setColorScheme,
    setFontFamily: props.setFontFamily,
    setProfilePhoto: props.setProfilePhoto,
    setPhotoPreview: props.setPhotoPreview,
    setProfession: props.setProfession,
    setCustomProfession: props.setCustomProfession
  };

  return <PublicationsSection {...sectionProps} />;
};

// Portfolio Section
export const renderPortfolioSection = (props: StepTwoProps) => {
  if (!props.selectedSections.includes('portfolio')) {
    return null;
  }

  // Ensure all required props are passed
  const sectionProps = {
    portfolioItems: props.portfolioItems,
    setPortfolioItems: props.setPortfolioItems,
    addPortfolioItem: props.addPortfolioItem,
    removePortfolioItem: props.removePortfolioItem,
    sectionIcon: props.sectionIcons['portfolio'],
    visualCustomization: props.visualCustomization,
    setColorScheme: props.setColorScheme,
    setFontFamily: props.setFontFamily,
    setProfilePhoto: props.setProfilePhoto,
    setPhotoPreview: props.setPhotoPreview,
    setProfession: props.setProfession,
    setCustomProfession: props.setCustomProfession
  };

  return <PortfolioSection {...sectionProps} />;
};

// Certifications Section
export const renderCertificationsSection = (props: StepTwoProps) => {
  if (!props.selectedSections.includes('certifications')) {
    return null;
  }

  // Ensure all required props are passed
  const sectionProps = {
    certifications: props.certifications,
    setCertifications: props.setCertifications,
    addCertification: props.addCertification,
    removeCertification: props.removeCertification,
    sectionIcon: props.sectionIcons['certifications'],
    visualCustomization: props.visualCustomization,
    setColorScheme: props.setColorScheme,
    setFontFamily: props.setFontFamily,
    setProfilePhoto: props.setProfilePhoto,
    setPhotoPreview: props.setPhotoPreview,
    setProfession: props.setProfession,
    setCustomProfession: props.setCustomProfession
  };

  return <CertificationsSection {...sectionProps} />;
};

// Education Section
export const renderEducationSection = (props: StepTwoProps) => {
  if (!props.selectedSections.includes('education')) {
    return null;
  }

  // Ensure all required props are passed
  const sectionProps = {
    education: props.education,
    setEducation: props.setEducation,
    addEducation: props.addEducation,
    removeEducation: props.removeEducation,
    sectionIcon: props.sectionIcons['education'],
    visualCustomization: props.visualCustomization,
    setColorScheme: props.setColorScheme,
    setFontFamily: props.setFontFamily,
    setProfilePhoto: props.setProfilePhoto,
    setPhotoPreview: props.setPhotoPreview,
    setProfession: props.setProfession,
    setCustomProfession: props.setCustomProfession
  };

  return <EducationSection {...sectionProps} />;
};
