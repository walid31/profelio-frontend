
import React from "react";
import { Option } from "@/components/ui/multi-select";

export interface SectionDefinition {
  id: string;
  label: string;
  required: boolean;
  description?: string;
}

export interface Service {
  title: string;
  description: string;
}

export interface Project {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  category: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface GalleryItem {
  imageUrl: string;
  caption: string;
  category: string;
}

export interface Competence {
  name: string;
  percentage: number;
  description: string;
}

export interface Certification {
  title: string;
  issuer: string;
  year: string;
  description: string;
}

export interface Education {
  institution: string;
  degree: string;
  year: string;
  description: string;
}

export interface Testimonial {
  name: string;
  position: string;
  content: string;
  company?: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export interface NotableCase {
  year: string;
  title: string;
  description: string;
}

export interface Publication {
  title: string;
  year: string;
  publisher: string;
  description: string;
  link?: string;
}

export interface PortfolioItem {
  title: string;
  category: string;
  imageUrl: string;
  description: string;
  link: string;
}

export interface VisualCustomization {
  colorScheme: {
    preset: string;
    primary: string;
    secondary: string;
  };
  fontFamily: string;
  profilePhoto: File | null;
  photoPreview: string | null;
  profession: string;
  customProfession: string;
}

export interface StepTwoProps {
  selectedPlan: string | null;
  plan: any;
  selectedSections: string[];
  toggleSection: (sectionId: string) => void;
  aboutContent: string;
  setAboutContent: (content: string) => void;
  selectedSkills: { skills: string[], showPercentage?: boolean, description?: string };
  setSelectedSkills: (skills: { skills: string[], showPercentage?: boolean, description?: string }) => void;
  contactInfo: {
    email: string;
    phone: string;
    location: string;
    international: boolean;
    hours: string;
    linkedin: string;
    twitter: string;
    facebook: string;
    instagram: string;
    googleCalendar: string;
    googleForms: string;
  };
  setContactInfo: (info: any) => void;
  handleLocationInput: (input: string) => void;
  locationSuggestions: string[];
  services: Service[];
  setServices: (services: Service[]) => void;
  addService: () => void;
  removeService: (index: number) => void;
  projects: Project[];
  setProjects: (projects: Project[]) => void;
  addProject: () => void;
  removeProject: (index: number) => void;
  testimonials: Testimonial[];
  setTestimonials: (testimonials: Testimonial[]) => void;
  addTestimonial: () => void;
  removeTestimonial: (index: number) => void;
  processSteps: ProcessStep[];
  setProcessSteps: (steps: ProcessStep[]) => void;
  addProcessStep: () => void;
  removeProcessStep: (index: number) => void;
  galleryItems: GalleryItem[];
  setGalleryItems: (items: GalleryItem[]) => void;
  addGalleryItem: () => void;
  removeGalleryItem: (index: number) => void;
  timelineItems: TimelineItem[];
  setTimelineItems: (items: TimelineItem[]) => void;
  addTimelineItem: () => void;
  removeTimelineItem: (index: number) => void;
  competences: Competence[];
  setCompetences: (competences: Competence[]) => void;
  addCompetence: () => void;
  removeCompetence: (index: number) => void;
  notableCases: NotableCase[];
  setNotableCases: (cases: NotableCase[]) => void;
  addNotableCase: () => void;
  removeNotableCase: (index: number) => void;
  publications: Publication[];
  setPublications: (publications: Publication[]) => void;
  addPublication: () => void;
  removePublication: (index: number) => void;
  portfolioItems: PortfolioItem[];
  setPortfolioItems: (items: PortfolioItem[]) => void;
  addPortfolioItem: () => void;
  removePortfolioItem: (index: number) => void;
  certifications: Certification[];
  setCertifications: (certs: Certification[]) => void;
  addCertification: () => void;
  removeCertification: (index: number) => void;
  education: Education[];
  setEducation: (edu: Education[]) => void;
  addEducation: () => void;
  removeEducation: (index: number) => void;
  visualCustomization: VisualCustomization;
  setColorScheme: (colorScheme: { preset: string; primary: string; secondary: string }) => void;
  setFontFamily: (fontFamily: string) => void;
  setProfilePhoto: (photo: File | null) => void;
  setPhotoPreview: (preview: string | null) => void;
  setProfession: (profession: string) => void;
  setCustomProfession: (profession: string) => void;
  sectionIcons: Record<string, React.ReactNode>;
  skillOptions: Option[];
  customSkill: string;
  setCustomSkill: (skill: string) => void;
  prevStep: () => void;
  nextStep: () => void;
  templateId?: string;
  skillsBySector: Record<string, string[]>;
}
