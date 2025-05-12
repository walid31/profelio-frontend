
import React from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Loader2 } from "lucide-react";

interface StepFourProps {
  templateId: string;
  plan: {
    name: string;
    price: number;
    features: string[];
  };
  customDomain: string;
  selectedSections: string[];
  additionalMessage: string;
  setAdditionalMessage: (message: string) => void;
  loading: boolean;
  prevStep: () => void;
  handleSubmit: () => void;
  // Summary data
  aboutContent: string;
  selectedSkills: { skills: string[], showPercentage?: boolean, description?: string };
  contactInfo: any;
  services: any[];
  projects: any[];
  competences: any[];
  testimonials: any[];
  timelineItems: any[];
  visualCustomization?: {
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
  };
}

const SummaryItem = ({ title, children }) => (
  <div className="mb-4">
    <h4 className="text-sm font-medium text-gray-500">{title}</h4>
    <div className="mt-1">{children}</div>
  </div>
);

const StepFour = ({ 
  templateId,
  plan,
  customDomain,
  selectedSections,
  additionalMessage,
  setAdditionalMessage,
  loading,
  prevStep,
  handleSubmit,
  // Summary data
  aboutContent,
  selectedSkills,
  contactInfo,
  services,
  projects,
  competences,
  testimonials,
  timelineItems,
  visualCustomization
}) => {
  
  // Helper to get a sample of items
  const getSampleItems = (items, max = 2) => {
    return items && items.length > 0 
      ? items.slice(0, max).map(item => item.title || item.name || "").join(", ")
      : "Aucun élément";
  };
  
  // Get selected font name
  const getFontName = () => {
    const fontOptions = [
      { value: "poppins", label: "Poppins" },
      { value: "roboto", label: "Roboto" },
      { value: "lato", label: "Lato" },
      { value: "open-sans", label: "Open Sans" },
      { value: "montserrat", label: "Montserrat" },
      { value: "merriweather", label: "Merriweather" }
    ];
    
    const selectedFont = fontOptions.find(font => font.value === visualCustomization?.fontFamily);
    return selectedFont ? selectedFont.label : visualCustomization?.fontFamily || "Police par défaut";
  };
  
  return (
    <div className="space-y-8 py-6">
      <div>
        <h3 className="text-xl font-semibold mb-2">Résumé et confirmation</h3>
        <p className="text-gray-500 mb-4">
          Vérifiez les détails de votre demande avant de confirmer.
        </p>
      </div>
      
      <Card>
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Plan info */}
            <SummaryItem title="Plan sélectionné">
              <div className="font-medium">{plan?.name} (€{plan?.price}/mois)</div>
              {plan?.name === "Plan Pro" && customDomain && (
                <div className="text-sm mt-1">
                  Domaine personnalisé: <span className="font-medium">{customDomain}</span>
                </div>
              )}
            </SummaryItem>
            
            {/* Template info */}
            <SummaryItem title="Template">
              <div className="font-medium capitalize">{templateId}</div>
              <div className="text-sm mt-1">{selectedSections.length} sections sélectionnées</div>
            </SummaryItem>
            
            {/* Visual customization info */}
            {visualCustomization && (
              <>
                <SummaryItem title="Palette de couleurs">
                  <div className="flex items-center gap-2">
                    <div 
                      className="w-4 h-4 rounded-full" 
                      style={{ backgroundColor: visualCustomization.colorScheme.primary }}
                    ></div>
                    <div 
                      className="w-4 h-4 rounded-full" 
                      style={{ backgroundColor: visualCustomization.colorScheme.secondary }}
                    ></div>
                    <span className="font-medium ml-1 capitalize">
                      {visualCustomization.colorScheme.preset === "custom" 
                        ? "Personnalisé" 
                        : visualCustomization.colorScheme.preset}
                    </span>
                  </div>
                </SummaryItem>
                
                <SummaryItem title="Police de caractères">
                  <div className="font-medium" style={{ fontFamily: visualCustomization.fontFamily || 'inherit' }}>
                    {getFontName()}
                  </div>
                </SummaryItem>
                
                <SummaryItem title="Profession">
                  <div className="font-medium">
                    {visualCustomization.profession === "autre" 
                      ? visualCustomization.customProfession 
                      : visualCustomization.profession || "Non spécifiée"}
                  </div>
                </SummaryItem>
                
                <SummaryItem title="Photo de profil">
                  {visualCustomization.photoPreview ? (
                    <div className="flex items-center">
                      <img 
                        src={visualCustomization.photoPreview} 
                        alt="Photo de profil" 
                        className="w-10 h-10 rounded-full object-cover mr-2"
                      />
                      <span>Photo téléchargée</span>
                    </div>
                  ) : (
                    <div>Aucune photo</div>
                  )}
                </SummaryItem>
              </>
            )}
            
            {/* About info */}
            <SummaryItem title="À propos">
              <div className="line-clamp-2">{aboutContent || "Non renseigné"}</div>
              {selectedSkills?.skills?.length > 0 && (
                <div className="text-sm mt-1">
                  <span className="font-medium">{selectedSkills.skills.length} compétences</span> sélectionnées
                </div>
              )}
            </SummaryItem>
            
            {/* Contact info */}
            <SummaryItem title="Contact">
              <div>{contactInfo.email || "Non renseigné"}</div>
              <div className="text-sm mt-1">
                {contactInfo.location && `Localisation: ${contactInfo.location}`}
              </div>
            </SummaryItem>
            
            {/* Services */}
            <SummaryItem title="Services">
              <div>{getSampleItems(services)}</div>
              {services.length > 2 && (
                <div className="text-sm text-gray-500">+ {services.length - 2} autres</div>
              )}
            </SummaryItem>
          </div>
        </CardContent>
      </Card>
      
      <div className="space-y-4">
        <div>
          <label htmlFor="additional-message" className="block text-sm font-medium">
            Remarques supplémentaires (optionnel)
          </label>
          <Textarea
            id="additional-message"
            value={additionalMessage}
            onChange={(e) => setAdditionalMessage(e.target.value)}
            placeholder="Ajoutez des détails ou des demandes spécifiques..."
            className="mt-1"
            rows={4}
          />
        </div>
        
        <div className="flex justify-between">
          <Button variant="outline" onClick={prevStep} disabled={loading}>
            Retour
          </Button>
          <Button onClick={handleSubmit} disabled={loading}>
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Envoi en cours...
              </>
            ) : (
              "Confirmer la demande"
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StepFour;
