
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Plus, X, Folder } from "lucide-react";
import { PortfolioItem } from "./types";

interface PortfolioSectionProps {
  portfolioItems: PortfolioItem[];
  setPortfolioItems: (value: PortfolioItem[]) => void;
  addPortfolioItem: () => void;
  removePortfolioItem: (index: number) => void;
  sectionIcon: React.ReactNode;
}

const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  portfolioItems,
  setPortfolioItems,
  addPortfolioItem,
  removePortfolioItem,
  sectionIcon,
}) => {
  const handleItemUpdate = (index: number, field: keyof PortfolioItem, value: string) => {
    const updatedItems = [...portfolioItems];
    updatedItems[index] = {
      ...updatedItems[index],
      [field]: value
    };
    setPortfolioItems(updatedItems);
  };

  return (
    <div>
      <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
        {sectionIcon}
        Section Portfolio
      </h3>
      
      <p className="text-sm text-gray-500 mb-4">
        Présentez vos travaux et projets dans votre portfolio.
      </p>
      
      <div className="space-y-6">
        {portfolioItems.map((item, index) => (
          <div key={index} className="p-4 border rounded-md bg-gray-50 relative">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
              onClick={() => removePortfolioItem(index)}
            >
              <X className="h-4 w-4" />
            </Button>
            
            <div className="mb-3">
              <div className="flex items-center gap-2 mb-1">
                <Folder className="h-4 w-4 text-gray-500" />
                <Label htmlFor={`portfolio-title-${index}`}>Titre du projet</Label>
              </div>
              <Input
                id={`portfolio-title-${index}`}
                value={item.title}
                onChange={(e) => handleItemUpdate(index, 'title', e.target.value)}
                placeholder="Ex: Refonte du site web de XYZ"
              />
            </div>
            
            <div className="mb-3">
              <Label htmlFor={`portfolio-category-${index}`}>Catégorie</Label>
              <Input
                id={`portfolio-category-${index}`}
                value={item.category}
                onChange={(e) => handleItemUpdate(index, 'category', e.target.value)}
                placeholder="Ex: Design web, Consultation, etc."
                className="mt-1"
              />
            </div>
            
            <div className="mb-3">
              <Label htmlFor={`portfolio-image-${index}`}>URL de l'image (optionnel)</Label>
              <Input
                id={`portfolio-image-${index}`}
                value={item.imageUrl}
                onChange={(e) => handleItemUpdate(index, 'imageUrl', e.target.value)}
                placeholder="https://example.com/image.jpg"
                className="mt-1"
                type="url"
              />
            </div>
            
            <div className="mb-3">
              <Label htmlFor={`portfolio-description-${index}`}>Description du projet</Label>
              <Textarea
                id={`portfolio-description-${index}`}
                value={item.description}
                onChange={(e) => handleItemUpdate(index, 'description', e.target.value)}
                placeholder="Décrivez ce projet, vos responsabilités et les résultats obtenus..."
                className="mt-1"
                rows={3}
              />
            </div>
            
            <div>
              <Label htmlFor={`portfolio-link-${index}`}>Lien vers le projet (optionnel)</Label>
              <Input
                id={`portfolio-link-${index}`}
                value={item.link}
                onChange={(e) => handleItemUpdate(index, 'link', e.target.value)}
                placeholder="https://example.com"
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
        onClick={addPortfolioItem}
      >
        <Plus className="h-4 w-4 mr-2" /> Ajouter un projet au portfolio
      </Button>
      
      <p className="text-xs text-gray-500 mt-2">
        Conseil : Organisez votre portfolio par catégories et incluez des images et des liens vers vos travaux.
      </p>
    </div>
  );
};

export default PortfolioSection;
