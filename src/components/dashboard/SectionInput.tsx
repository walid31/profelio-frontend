
import React, { useState } from "react";
import { MultiSelect } from "@/components/ui/multi-select";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Plus, Globe, Clock, Award, BookText, GraduationCap, FileText, MapPin, Percent } from "lucide-react";

type SectionInputProps = {
  section: string;
  value: string | string[] | any;
  onChange: (val: any) => void;
  options?: { value: string; label: string }[];
};

const SectionInput: React.FC<SectionInputProps> = ({ section, value, onChange, options = [] }) => {
  const [customSkill, setCustomSkill] = useState("");
  
  if (section === "Compétences") {
    // Enhanced competencies section with optional percentage and description
    return (
      <div className="space-y-3">
        <MultiSelect
          options={options.map(opt => ({ value: opt.value, label: opt.label }))}
          selected={Array.isArray(value.skills) ? value.skills : []}
          onChange={(selected) => onChange({ ...value, skills: selected })}
          placeholder="Sélectionnez une ou plusieurs compétences"
        />
        
        <div className="flex items-center gap-2 mt-2">
          <Input
            type="text"
            placeholder="Ajouter une compétence personnalisée"
            value={customSkill}
            onChange={(e) => setCustomSkill(e.target.value)}
            className="flex-grow"
          />
          <Button 
            type="button" 
            variant="outline" 
            onClick={() => {
              if (customSkill.trim()) {
                const newSkill = { value: `custom-${Date.now()}`, label: customSkill };
                onChange({ ...value, skills: [...(value.skills || []), newSkill.value] });
                options.push(newSkill);
                setCustomSkill("");
              }
            }}
            size="sm"
          >
            <Plus className="h-4 w-4 mr-1" /> Ajouter
          </Button>
        </div>
        
        <div className="flex items-center gap-2 mt-1">
          <Checkbox 
            id="show-percentages" 
            checked={value.showPercentage || false}
            onCheckedChange={(checked) => onChange({ ...value, showPercentage: !!checked })}
          />
          <label htmlFor="show-percentages" className="text-sm">
            Afficher les pourcentages pour les compétences
          </label>
        </div>
        
        <Textarea
          placeholder="Description globale de vos compétences (optionnel)"
          value={value.description || ""}
          onChange={(e) => onChange({ ...value, description: e.target.value })}
          className="mt-2"
        />
      </div>
    );
  }
  
  if (section === "Galerie") {
    return (
      <Input
        type="url"
        className="w-full border rounded p-2"
        placeholder="Lien vers une galerie (Google Drive, Behance, etc.)"
        value={typeof value === 'string' ? value : ""}
        onChange={e => onChange(e.target.value)}
      />
    );
  }
  
  if (section === "Contact") {
    return (
      <div className="space-y-4">
        <Input
          type="text"
          placeholder="Votre email ou moyen de contact principal"
          value={value.email || ""}
          onChange={e => onChange({ ...value, email: e.target.value })}
        />
        
        <div className="relative">
          <div className="flex items-center">
            <MapPin className="h-4 w-4 absolute left-3 text-gray-500" />
            <Input
              type="text"
              placeholder="Adresse / Localisation"
              value={value.location || ""}
              onChange={e => onChange({ ...value, location: e.target.value })}
              className="pl-9"
            />
          </div>
          <div className="text-xs text-gray-500 mt-1">
            Suggestions: Paris, Lyon, Marseille, Bordeaux, Lille, Strasbourg, Toulouse, Nantes
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Checkbox 
            id="international" 
            checked={value.international || false}
            onCheckedChange={(checked) => onChange({ ...value, international: !!checked })}
          />
          <label htmlFor="international" className="flex items-center gap-1 text-sm">
            <Globe className="h-4 w-4" />
            Disponible à l'international
          </label>
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium">Horaires d'ouverture</label>
          <Textarea
            placeholder="Ex: Lundi - Vendredi: 9h - 18h, Samedi: Sur rendez-vous"
            value={value.hours || ""}
            onChange={(e) => onChange({ ...value, hours: e.target.value })}
          />
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium">Réseaux sociaux</label>
          <div className="grid grid-cols-1 gap-2">
            <Input
              type="url"
              placeholder="LinkedIn"
              value={value.linkedin || ""}
              onChange={e => onChange({ ...value, linkedin: e.target.value })}
            />
            <Input
              type="url"
              placeholder="Twitter"
              value={value.twitter || ""}
              onChange={e => onChange({ ...value, twitter: e.target.value })}
            />
            <Input
              type="url"
              placeholder="Facebook"
              value={value.facebook || ""}
              onChange={e => onChange({ ...value, facebook: e.target.value })}
            />
            <Input
              type="url"
              placeholder="Instagram"
              value={value.instagram || ""}
              onChange={e => onChange({ ...value, instagram: e.target.value })}
            />
          </div>
        </div>
      </div>
    );
  }
  
  if (section === "Affaires notables") {
    return (
      <Textarea
        className="w-full"
        value={typeof value === 'string' ? value : ""}
        onChange={e => onChange(e.target.value)}
        placeholder="Décrivez vos affaires juridiques notables..."
        rows={5}
      />
    );
  }
  
  if (section === "Publications") {
    return (
      <Textarea
        className="w-full"
        value={typeof value === 'string' ? value : ""}
        onChange={e => onChange(e.target.value)}
        placeholder="Listez vos publications, articles, livres..."
        rows={5}
      />
    );
  }
  
  if (section === "Portfolio") {
    return (
      <Textarea
        className="w-full"
        value={typeof value === 'string' ? value : ""}
        onChange={e => onChange(e.target.value)}
        placeholder="Décrivez votre portfolio et ajoutez des liens vers vos travaux..."
        rows={5}
      />
    );
  }
  
  if (section === "Certifications") {
    return (
      <Textarea
        className="w-full"
        value={typeof value === 'string' ? value : ""}
        onChange={e => onChange(e.target.value)}
        placeholder="Listez vos certifications professionnelles..."
        rows={4}
      />
    );
  }
  
  if (section === "Parcours") {
    return (
      <Textarea
        className="w-full"
        value={typeof value === 'string' ? value : ""}
        onChange={e => onChange(e.target.value)}
        placeholder="Décrivez votre parcours académique ou professionnel..."
        rows={6}
      />
    );
  }
  
  // Default: textarea input
  return (
    <Textarea
      className="w-full border rounded p-2"
      value={typeof value === 'string' ? value : ""}
      onChange={e => onChange(e.target.value)}
      placeholder={`Votre contenu pour la section "${section}"`}
    />
  );
};

export default SectionInput;
