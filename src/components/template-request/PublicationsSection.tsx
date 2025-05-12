
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Plus, X, Book, Calendar } from "lucide-react";
import { Publication } from "./types";

interface PublicationsSectionProps {
  publications: Publication[];
  setPublications: (value: Publication[]) => void;
  addPublication: () => void;
  removePublication: (index: number) => void;
  sectionIcon: React.ReactNode;
}

const PublicationsSection: React.FC<PublicationsSectionProps> = ({
  publications,
  setPublications,
  addPublication,
  removePublication,
  sectionIcon,
}) => {
  const handlePublicationUpdate = (index: number, field: keyof Publication, value: string) => {
    const updatedPublications = [...publications];
    updatedPublications[index] = {
      ...updatedPublications[index],
      [field]: value
    };
    setPublications(updatedPublications);
  };

  return (
    <div>
      <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
        {sectionIcon}
        Section Publications
      </h3>
      
      <p className="text-sm text-gray-500 mb-4">
        Listez vos articles, livres, et autres publications.
      </p>
      
      <div className="space-y-6">
        {publications.map((item, index) => (
          <div key={index} className="p-4 border rounded-md bg-gray-50 relative">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
              onClick={() => removePublication(index)}
            >
              <X className="h-4 w-4" />
            </Button>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-3">
              <div className="md:col-span-3">
                <div className="flex items-center gap-2 mb-1">
                  <Book className="h-4 w-4 text-gray-500" />
                  <Label htmlFor={`publication-title-${index}`}>Titre</Label>
                </div>
                <Input
                  id={`publication-title-${index}`}
                  value={item.title}
                  onChange={(e) => handlePublicationUpdate(index, 'title', e.target.value)}
                  placeholder="Ex: Le droit des affaires au 21ème siècle"
                />
              </div>
              
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Calendar className="h-4 w-4 text-gray-500" />
                  <Label htmlFor={`publication-year-${index}`}>Année</Label>
                </div>
                <Input
                  id={`publication-year-${index}`}
                  value={item.year}
                  onChange={(e) => handlePublicationUpdate(index, 'year', e.target.value)}
                  placeholder="Ex: 2022"
                />
              </div>
            </div>
            
            <div className="mb-3">
              <Label htmlFor={`publication-publisher-${index}`}>Éditeur / Source</Label>
              <Input
                id={`publication-publisher-${index}`}
                value={item.publisher}
                onChange={(e) => handlePublicationUpdate(index, 'publisher', e.target.value)}
                placeholder="Ex: Éditions Juridiques / Journal du Droit"
                className="mt-1"
              />
            </div>
            
            <div>
              <Label htmlFor={`publication-description-${index}`}>Description</Label>
              <Textarea
                id={`publication-description-${index}`}
                value={item.description}
                onChange={(e) => handlePublicationUpdate(index, 'description', e.target.value)}
                placeholder="Résumé ou description de cette publication..."
                className="mt-1"
                rows={3}
              />
            </div>
            
            <div className="mt-3">
              <Label htmlFor={`publication-link-${index}`}>Lien (optionnel)</Label>
              <Input
                id={`publication-link-${index}`}
                value={item.link}
                onChange={(e) => handlePublicationUpdate(index, 'link', e.target.value)}
                placeholder="URL vers la publication en ligne"
                className="mt-1"
                type="url"
              />
            </div>
          </div>
        ))}
      </div>
      
      <Button 
        type="button" 
        variant="outline" 
        className="w-full mt-4"
        onClick={addPublication}
      >
        <Plus className="h-4 w-4 mr-2" /> Ajouter une publication
      </Button>
      
      <p className="text-xs text-gray-500 mt-2">
        Conseil : Incluez les titres, années de publication, éditeurs ou sites web où vos publications sont disponibles.
      </p>
    </div>
  );
};

export default PublicationsSection;
