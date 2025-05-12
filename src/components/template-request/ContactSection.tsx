
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Globe, MapPin, Calendar, FileText, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ContactSectionProps {
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
  sectionIcon: React.ReactNode;
  selectedPlan?: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({
  contactInfo,
  setContactInfo,
  handleLocationInput,
  locationSuggestions,
  sectionIcon,
  selectedPlan = "basic",
}) => {
  const isPro = selectedPlan === "pro";
  
  const handleUpgrade = () => {
    // This would be handled by a function passed from parent component
    // For now we'll just log it
    console.log("Upgrade to Pro clicked");
  };

  return (
    <div>
      <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
        {sectionIcon}
        Section Contact
      </h3>
      <div className="grid grid-cols-1 gap-4">
        <div>
          <Label htmlFor="email">Email professionnel</Label>
          <Input
            id="email"
            type="email"
            value={contactInfo.email}
            onChange={(e) => setContactInfo({...contactInfo, email: e.target.value})}
            placeholder="votre@email.com"
            className="mt-1"
          />
        </div>
        <div>
          <Label htmlFor="phone">Téléphone</Label>
          <Input
            id="phone"
            type="tel"
            value={contactInfo.phone}
            onChange={(e) => setContactInfo({...contactInfo, phone: e.target.value})}
            placeholder="06 12 34 56 78"
            className="mt-1"
          />
        </div>
        
        <div className="relative">
          <Label htmlFor="location">Localisation</Label>
          <div className="relative mt-1">
            <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              id="location"
              type="text"
              value={contactInfo.location}
              onChange={(e) => handleLocationInput(e.target.value)}
              placeholder="Paris, Lyon, etc."
              className="pl-10"
            />
          </div>
          {locationSuggestions.length > 0 && (
            <div className="absolute z-10 mt-1 w-full bg-white shadow-lg rounded-md border">
              {locationSuggestions.map((city, index) => (
                <div 
                  key={index}
                  className="px-4 py-2 hover:bg-gray-50 cursor-pointer"
                  onClick={() => {
                    setContactInfo({...contactInfo, location: city});
                    handleLocationInput("");
                  }}
                >
                  {city}
                </div>
              ))}
            </div>
          )}
        </div>
        
        <div className="flex items-center gap-2">
          <Checkbox 
            id="international"
            checked={contactInfo.international}
            onCheckedChange={(checked) => 
              setContactInfo({...contactInfo, international: !!checked})
            }
          />
          <label htmlFor="international" className="flex items-center gap-1">
            <Globe className="h-4 w-4" />
            Disponible à l'international
          </label>
        </div>
        
        <div>
          <Label htmlFor="hours">Horaires d'ouverture</Label>
          <Textarea
            id="hours"
            value={contactInfo.hours}
            onChange={(e) => setContactInfo({...contactInfo, hours: e.target.value})}
            placeholder="Ex: Lundi - Vendredi: 9h - 18h"
            className="mt-1"
          />
        </div>
        
        <Separator className="my-4" />
        
        {/* Services externes section - only available for Pro */}
        <div className={`rounded-md p-4 ${!isPro ? "bg-gray-50" : ""}`}>
          <div className="flex justify-between items-center mb-3">
            <h4 className="font-medium flex items-center gap-2">
              Services externes
              {!isPro && <Lock className="h-4 w-4 text-gray-400" />}
            </h4>
            
            {!isPro && (
              <div className="text-xs text-gray-500">
                Fonctionnalité Pro
              </div>
            )}
          </div>
          
          {!isPro ? (
            <div className="text-center py-4">
              <p className="text-sm text-gray-500 mb-3">
                Passez au plan Pro pour accéder à l'intégration de services externes comme Google Calendar et Google Forms
              </p>
              <Button variant="outline" size="sm" onClick={handleUpgrade} className="text-primary border-primary hover:bg-primary/10">
                Passer au Pro
              </Button>
            </div>
          ) : (
            <>
              <div>
                <Label htmlFor="googleCalendar" className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-gray-600" />
                  Google Calendar
                </Label>
                <Input
                  id="googleCalendar"
                  type="url"
                  value={contactInfo.googleCalendar || ""}
                  onChange={(e) => setContactInfo({...contactInfo, googleCalendar: e.target.value})}
                  placeholder="https://calendar.google.com/calendar/appointments/..."
                  className="mt-1"
                />
                <p className="text-xs text-gray-500 mt-1">Lien vers votre calendrier de rendez-vous</p>
              </div>
              
              <div className="mt-3">
                <Label htmlFor="googleForms" className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-gray-600" />
                  Google Forms
                </Label>
                <Input
                  id="googleForms"
                  type="url"
                  value={contactInfo.googleForms || ""}
                  onChange={(e) => setContactInfo({...contactInfo, googleForms: e.target.value})}
                  placeholder="https://docs.google.com/forms/d/e/..."
                  className="mt-1"
                />
                <p className="text-xs text-gray-500 mt-1">Lien vers votre formulaire de contact</p>
              </div>
            </>
          )}
        </div>
        
        <Separator className="my-4" />
        
        <h4 className="font-medium">Réseaux sociaux</h4>
        
        <div>
          <Label htmlFor="linkedin">LinkedIn</Label>
          <Input
            id="linkedin"
            type="url"
            value={contactInfo.linkedin}
            onChange={(e) => setContactInfo({...contactInfo, linkedin: e.target.value})}
            placeholder="https://linkedin.com/in/votre-profil"
            className="mt-1"
          />
        </div>
        
        <div>
          <Label htmlFor="twitter">Twitter</Label>
          <Input
            id="twitter"
            type="url"
            value={contactInfo.twitter}
            onChange={(e) => setContactInfo({...contactInfo, twitter: e.target.value})}
            placeholder="https://twitter.com/votre-compte"
            className="mt-1"
          />
        </div>
        
        <div>
          <Label htmlFor="facebook">Facebook</Label>
          <Input
            id="facebook"
            type="url"
            value={contactInfo.facebook}
            onChange={(e) => setContactInfo({...contactInfo, facebook: e.target.value})}
            placeholder="https://facebook.com/votre-page"
            className="mt-1"
          />
        </div>
        
        <div>
          <Label htmlFor="instagram">Instagram</Label>
          <Input
            id="instagram"
            type="url"
            value={contactInfo.instagram}
            onChange={(e) => setContactInfo({...contactInfo, instagram: e.target.value})}
            placeholder="https://instagram.com/votre-compte"
            className="mt-1"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
