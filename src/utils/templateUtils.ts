
import { Option } from "@/components/ui/multi-select";
import { SKILLS_BY_SECTOR } from "@/constants/templateData";

// Filter function for sections that should be conditionally displayed
export const shouldShowSection = (sectionId: string, templateId?: string): boolean => {
  if (sectionId === 'notable_cases') {
    return templateId === 'avocat';
  }
  return true;
};

// Get skill options based on template
export const getSkillOptions = (templateId?: string): Option[] => {
  if (!templateId) return [];
  return SKILLS_BY_SECTOR[templateId as keyof typeof SKILLS_BY_SECTOR] || [];
};

// Check domain availability (mock function)
export const checkDomainAvailability = async (
  domain: string, 
  setCheckingState: (checking: boolean) => void, 
  setAvailabilityState: (available: boolean | null) => void
): Promise<boolean> => {
  if (!domain) return false;
  
  setCheckingState(true);
  setAvailabilityState(null);
  
  try {
    // Simulate API call to check domain
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // For demo purposes: domains ending with .test are always available
    const isAvailable = domain.endsWith('.test') || Math.random() > 0.5;
    setAvailabilityState(isAvailable);
    return isAvailable;
  } catch (error) {
    console.error("Error checking domain:", error);
    return false;
  } finally {
    setCheckingState(false);
  }
};

export const validateStep = (
  step: number, 
  data: {
    selectedSections: string[];
    aboutContent: string;
    contactInfo: any;
    services: { title: string }[];
    plan: string | null;
    customDomain: string;
    isDomainAvailable: boolean | null;
  },
  showToast: (config: { title: string; description: string; variant: "default" | "destructive" }) => void
): boolean => {
  if (step === 1) {
    // Validate sections
    if (!data.selectedSections.includes('about') || 
        !data.selectedSections.includes('contact') || 
        !data.selectedSections.includes('services')) {
      showToast({
        title: "Sections requises",
        description: "Les sections À propos, Contact et Services sont obligatoires",
        variant: "destructive",
      });
      return false;
    }
  } else if (step === 2) {
    // Validate form data
    if (!data.aboutContent) {
      showToast({
        title: "Contenu requis",
        description: "Veuillez remplir la section À propos",
        variant: "destructive",
      });
      return false;
    }
    if (!data.contactInfo.email) {
      showToast({
        title: "Contact requis",
        description: "Veuillez fournir au moins une adresse email de contact",
        variant: "destructive",
      });
      return false;
    }
    if (data.services.some(s => !s.title)) {
      showToast({
        title: "Services requis",
        description: "Veuillez donner un titre à tous vos services",
        variant: "destructive",
      });
      return false;
    }
  } else if (step === 3) {
    // Validate plan selection
    if (!data.plan) {
      showToast({
        title: "Plan requis",
        description: "Veuillez sélectionner un plan",
        variant: "destructive",
      });
      return false;
    }
    
    if (data.plan === 'pro' && (!data.customDomain || data.isDomainAvailable !== true)) {
      showToast({
        title: "Domaine requis",
        description: "Veuillez saisir un domaine disponible",
        variant: "destructive",
      });
      return false;
    }
  }
  
  return true;
};
