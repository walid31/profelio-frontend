
import { useState } from 'react';

export const useSectionState = () => {
  // About section state
  const [aboutContent, setAboutContent] = useState('');
  const [selectedSkills, setSelectedSkills] = useState<{ 
    skills: string[], 
    showPercentage?: boolean, 
    description?: string 
  }>({ skills: [] });
  const [customSkill, setCustomSkill] = useState('');

  // Contact section state
  const [contactInfo, setContactInfo] = useState({
    email: '',
    phone: '',
    location: '',
    international: false,
    hours: '',
    linkedin: '',
    twitter: '',
    facebook: '',
    instagram: '',
    googleCalendar: '',
    googleForms: '',
  });

  // Services section state
  const [services, setServices] = useState([
    { title: '', description: '' },
  ]);

  // Projects section state
  const [projects, setProjects] = useState([
    { title: '', description: '', imageUrl: '', link: '', category: '' },
  ]);

  // Competences / Skills section state
  const [competences, setCompetences] = useState([
    { name: '', percentage: 80, description: '' },
  ]);

  // Process section state
  const [processSteps, setProcessSteps] = useState([
    { title: '', description: '' },
  ]);

  // Gallery section state
  const [galleryItems, setGalleryItems] = useState([
    { imageUrl: '', caption: '', category: '' },
  ]);

  // Notable Cases section state (for law templates)
  const [notableCases, setNotableCases] = useState([
    { year: '', title: '', description: '' },
  ]);

  // Publications section state
  const [publications, setPublications] = useState([
    { title: '', year: '', publisher: '', description: '', link: '' },
  ]);

  // Portfolio section state
  const [portfolioItems, setPortfolioItems] = useState([
    { title: '', category: '', imageUrl: '', description: '', link: '' },
  ]);

  // Certifications section state
  const [certifications, setCertifications] = useState([
    { title: '', issuer: '', year: '', description: '' },
  ]);

  // Education section state
  const [education, setEducation] = useState([
    { institution: '', degree: '', year: '', description: '' },
  ]);

  // Testimonials section state
  const [testimonials, setTestimonials] = useState([
    { name: '', position: '', content: '', company: '' },
  ]);

  // Timeline section state
  const [timelineItems, setTimelineItems] = useState([
    { year: '', title: '', description: '' },
  ]);

  // Visual customization state
  const [colorScheme, setColorScheme] = useState({
    preset: 'blue',
    primary: '#1EAEDB',
    secondary: '#33C3F0'
  });
  const [fontFamily, setFontFamily] = useState('poppins');
  const [profilePhoto, setProfilePhoto] = useState<File | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [profession, setProfession] = useState('');
  const [customProfession, setCustomProfession] = useState('');

  return {
    aboutContent,
    setAboutContent,
    selectedSkills,
    setSelectedSkills,
    contactInfo,
    setContactInfo,
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
    // Visual customization
    colorScheme,
    setColorScheme,
    fontFamily,
    setFontFamily,
    profilePhoto,
    setProfilePhoto,
    photoPreview,
    setPhotoPreview,
    profession,
    setProfession,
    customProfession,
    setCustomProfession
  };
};
