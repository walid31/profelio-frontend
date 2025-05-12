
import React from "react";
import { StepTwoProps } from "./types";
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

// This function is kept for backward compatibility
// The new approach uses direct rendering in StepTwo.tsx
export const renderSections = (props: StepTwoProps) => {
  return (
    <>
      {/* About section */}
      {renderAboutSection(props)}
      
      {/* Contact section */}
      {renderContactSection(props)}
      
      {/* Services section */}
      {renderServicesSection(props)}
      
      {/* Projects section */}
      {renderProjectsSection(props)}
      
      {/* Skills section */}
      {renderSkillsSection(props)}
      
      {/* Testimonials section */}
      {renderTestimonialsSection(props)}
      
      {/* Gallery section */}
      {renderGallerySection(props)}
      
      {/* Process section */}
      {renderProcessSection(props)}
      
      {/* Timeline section */}
      {renderTimelineSection(props)}
      
      {/* Notable cases section */}
      {renderNotableCasesSection(props)}
      
      {/* Publications section */}
      {renderPublicationsSection(props)}
      
      {/* Portfolio section */}
      {renderPortfolioSection(props)}
      
      {/* Certifications section */}
      {renderCertificationsSection(props)}
      
      {/* Education section */}
      {renderEducationSection(props)}
    </>
  );
};

// Add utility functions to check if section data is valid
export const validateSectionData = (sectionId: string, data: any): boolean => {
  switch (sectionId) {
    case 'about':
      return !!data.aboutContent && data.aboutContent.trim() !== '' && 
             data.selectedSkills.skills.length > 0;
    case 'contact':
      return !!data.contactInfo.email && !!data.contactInfo.phone;
    case 'services':
      return Array.isArray(data.services) && data.services.length > 0 && 
             data.services.every((service: any) => !!service.title && !!service.description);
    case 'projects':
      return Array.isArray(data.projects) && data.projects.length > 0 && 
             data.projects.every((project: any) => !!project.title);
    case 'skills':
      return Array.isArray(data.competences) && data.competences.length > 0;
    case 'testimonials':
      return Array.isArray(data.testimonials) && data.testimonials.length > 0 && 
             data.testimonials.every((t: any) => !!t.name && !!t.content);
    case 'gallery':
      return Array.isArray(data.galleryItems) && data.galleryItems.length > 0;
    case 'process':
      return Array.isArray(data.processSteps) && data.processSteps.length > 0;
    case 'timeline':
      return Array.isArray(data.timelineItems) && data.timelineItems.length > 0;
    case 'notable_cases':
      return Array.isArray(data.notableCases) && data.notableCases.length > 0;
    case 'publications':
      return Array.isArray(data.publications) && data.publications.length > 0;
    case 'portfolio':
      return Array.isArray(data.portfolioItems) && data.portfolioItems.length > 0;
    case 'certifications':
      return Array.isArray(data.certifications) && data.certifications.length > 0;
    case 'education':
      return Array.isArray(data.education) && data.education.length > 0;
    default:
      return true;
  }
};

export default renderSections;
