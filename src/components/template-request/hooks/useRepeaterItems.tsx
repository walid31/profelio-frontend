
import { useState } from 'react';
import { 
  Service, 
  Project, 
  ProcessStep, 
  GalleryItem, 
  Competence,
  Education,
  Certification,
  Testimonial,
  TimelineItem,
  NotableCase,
  Publication,
  PortfolioItem
} from "../types";

export const useRepeaterItems = (
  services: Service[],
  setServices: React.Dispatch<React.SetStateAction<Service[]>>,
  projects: Project[],
  setProjects: React.Dispatch<React.SetStateAction<Project[]>>,
  competences: Competence[],
  setCompetences: React.Dispatch<React.SetStateAction<Competence[]>>,
  processSteps: ProcessStep[],
  setProcessSteps: React.Dispatch<React.SetStateAction<ProcessStep[]>>,
  galleryItems: GalleryItem[],
  setGalleryItems: React.Dispatch<React.SetStateAction<GalleryItem[]>>,
  certifications: Certification[],
  setCertifications: React.Dispatch<React.SetStateAction<Certification[]>>,
  education: Education[],
  setEducation: React.Dispatch<React.SetStateAction<Education[]>>,
  testimonials: Testimonial[],
  setTestimonials: React.Dispatch<React.SetStateAction<Testimonial[]>>,
  timelineItems: TimelineItem[],
  setTimelineItems: React.Dispatch<React.SetStateAction<TimelineItem[]>>,
  notableCases: NotableCase[],
  setNotableCases: React.Dispatch<React.SetStateAction<NotableCase[]>>,
  publications: Publication[],
  setPublications: React.Dispatch<React.SetStateAction<Publication[]>>,
  portfolioItems: PortfolioItem[],
  setPortfolioItems: React.Dispatch<React.SetStateAction<PortfolioItem[]>>
) => {
  // Add/remove repeater items
  const addService = () => setServices([...services, { title: '', description: '' }]);
  const removeService = (index: number) => {
    if (services.length > 1) {
      setServices(services.filter((_, i) => i !== index));
    }
  };

  const addProject = () => setProjects([...projects, { title: '', description: '', imageUrl: '', link: '', category: '' }]);
  const removeProject = (index: number) => {
    if (projects.length > 1) {
      setProjects(projects.filter((_, i) => i !== index));
    }
  };

  const addCompetence = () => setCompetences([...competences, { name: '', percentage: 50, description: '' }]);
  const removeCompetence = (index: number) => {
    if (competences.length > 1) {
      setCompetences(competences.filter((_, i) => i !== index));
    }
  };

  const addProcessStep = () => setProcessSteps([...processSteps, { title: '', description: '' }]);
  const removeProcessStep = (index: number) => {
    if (processSteps.length > 1) {
      setProcessSteps(processSteps.filter((_, i) => i !== index));
    }
  };

  const addGalleryItem = () => setGalleryItems([...galleryItems, { imageUrl: '', caption: '', category: '' }]);
  const removeGalleryItem = (index: number) => {
    if (galleryItems.length > 1) {
      setGalleryItems(galleryItems.filter((_, i) => i !== index));
    }
  };
  
  const addCertification = () => setCertifications([...certifications, { title: '', issuer: '', year: '', description: '' }]);
  const removeCertification = (index: number) => {
    if (certifications.length > 1) {
      setCertifications(certifications.filter((_, i) => i !== index));
    }
  };
  
  const addEducation = () => setEducation([...education, { institution: '', degree: '', year: '', description: '' }]);
  const removeEducation = (index: number) => {
    if (education.length > 1) {
      setEducation(education.filter((_, i) => i !== index));
    }
  };

  const addTestimonial = () => setTestimonials([...testimonials, { name: '', position: '', content: '' }]);
  const removeTestimonial = (index: number) => {
    if (testimonials.length > 1) {
      setTestimonials(testimonials.filter((_, i) => i !== index));
    }
  };

  const addTimelineItem = () => setTimelineItems([...timelineItems, { year: '', title: '', description: '' }]);
  const removeTimelineItem = (index: number) => {
    if (timelineItems.length > 1) {
      setTimelineItems(timelineItems.filter((_, i) => i !== index));
    }
  };
  
  const addNotableCase = () => setNotableCases([...notableCases, { year: '', title: '', description: '' }]);
  const removeNotableCase = (index: number) => {
    if (notableCases.length > 1) {
      setNotableCases(notableCases.filter((_, i) => i !== index));
    }
  };
  
  const addPublication = () => setPublications([...publications, { title: '', year: '', publisher: '', description: '', link: '' }]);
  const removePublication = (index: number) => {
    if (publications.length > 1) {
      setPublications(publications.filter((_, i) => i !== index));
    }
  };
  
  const addPortfolioItem = () => setPortfolioItems([...portfolioItems, { title: '', category: '', imageUrl: '', description: '', link: '' }]);
  const removePortfolioItem = (index: number) => {
    if (portfolioItems.length > 1) {
      setPortfolioItems(portfolioItems.filter((_, i) => i !== index));
    }
  };
  
  return {
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
  };
};
