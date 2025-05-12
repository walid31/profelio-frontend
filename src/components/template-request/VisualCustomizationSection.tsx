
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Palette, Type, Upload } from "lucide-react";

// Font options
const FONT_OPTIONS = [
  { value: "poppins", label: "Poppins" },
  { value: "roboto", label: "Roboto" },
  { value: "lato", label: "Lato" },
  { value: "open-sans", label: "Open Sans" },
  { value: "montserrat", label: "Montserrat" },
  { value: "merriweather", label: "Merriweather" }
];

// Color scheme options
const COLOR_OPTIONS = [
  { value: "blue", label: "Bleu", primary: "#1EAEDB", secondary: "#33C3F0" },
  { value: "purple", label: "Violet", primary: "#8B5CF6", secondary: "#A78BFA" },
  { value: "green", label: "Vert", primary: "#10B981", secondary: "#34D399" },
  { value: "red", label: "Rouge", primary: "#EF4444", secondary: "#F87171" },
  { value: "orange", label: "Orange", primary: "#F97316", secondary: "#FB923C" },
  { value: "teal", label: "Turquoise", primary: "#14B8A6", secondary: "#2DD4BF" },
  { value: "indigo", label: "Indigo", primary: "#4F46E5", secondary: "#818CF8" },
  { value: "pink", label: "Rose", primary: "#EC4899", secondary: "#F472B6" },
  { value: "gray", label: "Gris", primary: "#6B7280", secondary: "#9CA3AF" },
  { value: "custom", label: "Personnalisé", primary: "", secondary: "" }
];

// Profession options
const PROFESSION_OPTIONS = [
  { value: "consultant", label: "Consultant" },
  { value: "medecin", label: "Médecin" },
  { value: "avocat", label: "Avocat" },
  { value: "photographe", label: "Photographe" },
  { value: "developpeur", label: "Développeur" },
  { value: "architecte", label: "Architecte" },
  { value: "professeur", label: "Professeur" },
  { value: "ingenieur", label: "Ingénieur" },
  { value: "autoentrepreneur", label: "Auto-entrepreneur" },
  { value: "autre", label: "Autre" }
];

interface VisualCustomizationSectionProps {
  colorScheme: { 
    preset: string; 
    primary: string; 
    secondary: string;
  };
  setColorScheme: (colorScheme: { preset: string; primary: string; secondary: string }) => void;
  fontFamily: string;
  setFontFamily: (fontFamily: string) => void;
  profilePhoto: File | null;
  setProfilePhoto: (photo: File | null) => void;
  photoPreview: string | null;
  setPhotoPreview: (preview: string | null) => void;
  profession: string;
  setProfession: (profession: string) => void;
  customProfession: string;
  setCustomProfession: (profession: string) => void;
  sectionIcon: React.ReactNode;
}

const VisualCustomizationSection: React.FC<VisualCustomizationSectionProps> = ({
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
  setCustomProfession,
  sectionIcon
}) => {
  const handleColorSchemeChange = (value: string) => {
    if (value === "custom") {
      setColorScheme({ 
        preset: "custom", 
        primary: colorScheme.primary || "#000000", 
        secondary: colorScheme.secondary || "#000000" 
      });
    } else {
      const selectedColor = COLOR_OPTIONS.find(color => color.value === value);
      if (selectedColor) {
        setColorScheme({
          preset: value,
          primary: selectedColor.primary,
          secondary: selectedColor.secondary
        });
      }
    }
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setProfilePhoto(file);
      
      // Create a preview URL
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemovePhoto = () => {
    setProfilePhoto(null);
    setPhotoPreview(null);
  };

  return (
    <div>
      <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
        {sectionIcon}
        Personnalisation visuelle
      </h3>

      <div className="space-y-6">
        {/* Color scheme selection */}
        <div>
          <Label className="flex items-center gap-2">
            <Palette className="h-4 w-4" />
            Palette de couleurs
          </Label>
          <div className="mt-2">
            <Select 
              value={colorScheme.preset} 
              onValueChange={handleColorSchemeChange}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Choisir une palette de couleurs" />
              </SelectTrigger>
              <SelectContent>
                {COLOR_OPTIONS.map(color => (
                  <SelectItem key={color.value} value={color.value}>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        <div 
                          className="w-3 h-3 rounded-full" 
                          style={{ backgroundColor: color.primary }}
                        ></div>
                        <div 
                          className="w-3 h-3 rounded-full" 
                          style={{ backgroundColor: color.secondary }}
                        ></div>
                      </div>
                      {color.label}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {colorScheme.preset === "custom" && (
            <div className="grid grid-cols-2 gap-4 mt-2">
              <div>
                <Label htmlFor="primary-color">Couleur primaire</Label>
                <div className="flex mt-1">
                  <div 
                    className="w-8 h-8 border rounded-l-md" 
                    style={{ backgroundColor: colorScheme.primary }}
                  ></div>
                  <Input
                    id="primary-color"
                    type="color"
                    value={colorScheme.primary}
                    onChange={(e) => setColorScheme({
                      ...colorScheme,
                      primary: e.target.value
                    })}
                    className="rounded-l-none w-full"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="secondary-color">Couleur secondaire</Label>
                <div className="flex mt-1">
                  <div 
                    className="w-8 h-8 border rounded-l-md" 
                    style={{ backgroundColor: colorScheme.secondary }}
                  ></div>
                  <Input
                    id="secondary-color"
                    type="color"
                    value={colorScheme.secondary}
                    onChange={(e) => setColorScheme({
                      ...colorScheme,
                      secondary: e.target.value
                    })}
                    className="rounded-l-none w-full"
                  />
                </div>
              </div>
            </div>
          )}

          <div className="mt-2">
            <Label>Aperçu</Label>
            <div className="flex flex-wrap gap-2 mt-1">
              <Badge style={{ backgroundColor: colorScheme.primary }}>
                Couleur primaire
              </Badge>
              <Badge style={{ backgroundColor: colorScheme.secondary }}>
                Couleur secondaire
              </Badge>
            </div>
          </div>
        </div>

        {/* Font selection */}
        <div>
          <Label className="flex items-center gap-2">
            <Type className="h-4 w-4" />
            Police de caractères
          </Label>
          <div className="mt-2">
            <Select 
              value={fontFamily} 
              onValueChange={setFontFamily}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Choisir une police" />
              </SelectTrigger>
              <SelectContent>
                {FONT_OPTIONS.map(font => (
                  <SelectItem key={font.value} value={font.value} className={`font-${font.value}`}>
                    {font.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <div className="mt-2 p-3 border rounded-md" style={{ fontFamily: fontFamily || 'inherit' }}>
              <p className="text-sm">Aperçu de la police {FONT_OPTIONS.find(f => f.value === fontFamily)?.label || 'sélectionnée'}</p>
              <p className="text-lg font-bold">Titre en {FONT_OPTIONS.find(f => f.value === fontFamily)?.label || 'cette police'}</p>
              <p>Texte normal pour voir le rendu de la police sur un paragraphe standard.</p>
            </div>
          </div>
        </div>

        {/* Profile photo upload */}
        <div>
          <Label className="flex items-center gap-2">
            <Upload className="h-4 w-4" />
            Photo de profil
          </Label>
          <div className="mt-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
              <div>
                <Input
                  id="profile-photo"
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoChange}
                  className="cursor-pointer"
                />
                <p className="text-xs text-muted-foreground mt-1">
                  Format recommandé: JPG, PNG. Taille max: 2 Mo.
                </p>
              </div>
              <div className="flex flex-col items-center">
                {photoPreview ? (
                  <div className="relative">
                    <img 
                      src={photoPreview} 
                      alt="Aperçu de la photo" 
                      className="w-24 h-24 object-cover rounded-full border"
                    />
                    <Button 
                      variant="destructive" 
                      size="sm" 
                      className="absolute -top-2 -right-2 h-6 w-6 rounded-full p-0"
                      onClick={handleRemovePhoto}
                    >
                      &times;
                    </Button>
                  </div>
                ) : (
                  <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 border">
                    Photo
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Profession selection */}
        <div>
          <Label htmlFor="profession">Profession</Label>
          <div className="mt-2">
            <Select 
              value={profession} 
              onValueChange={setProfession}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Sélectionnez votre profession" />
              </SelectTrigger>
              <SelectContent>
                {PROFESSION_OPTIONS.map(prof => (
                  <SelectItem key={prof.value} value={prof.value}>
                    {prof.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            {profession === "autre" && (
              <div className="mt-2">
                <Input
                  placeholder="Précisez votre profession"
                  value={customProfession}
                  onChange={(e) => setCustomProfession(e.target.value)}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisualCustomizationSection;
