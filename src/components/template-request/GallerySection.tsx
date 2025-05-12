
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus, Trash, Image } from "lucide-react";
import { GalleryItem } from "./types";

interface GallerySectionProps {
  galleryItems: GalleryItem[];
  setGalleryItems: (items: GalleryItem[]) => void;
  addGalleryItem: () => void;
  removeGalleryItem: (index: number) => void;
  sectionIcon: React.ReactNode;
}

const GallerySection: React.FC<GallerySectionProps> = ({
  galleryItems,
  setGalleryItems,
  addGalleryItem,
  removeGalleryItem,
  sectionIcon,
}) => {
  return (
    <div>
      <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
        {sectionIcon}
        Section Galerie
      </h3>
      <div className="space-y-6">
        {galleryItems.map((item, index) => (
          <div key={index} className="border rounded-md p-4 space-y-4 relative">
            <div className="absolute top-4 right-4">
              {galleryItems.length > 1 && (
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => removeGalleryItem(index)}
                >
                  <Trash className="h-4 w-4 text-red-500" />
                </Button>
              )}
            </div>
            <h4 className="font-medium">Image {index + 1}</h4>
            <div>
              <Label htmlFor={`gallery-image-${index}`}>URL de l'image</Label>
              <Input
                id={`gallery-image-${index}`}
                value={item.imageUrl}
                onChange={(e) => {
                  const updated = [...galleryItems];
                  updated[index].imageUrl = e.target.value;
                  setGalleryItems(updated);
                }}
                placeholder="https://exemple.com/image.jpg"
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor={`gallery-caption-${index}`}>Légende</Label>
              <Input
                id={`gallery-caption-${index}`}
                value={item.caption}
                onChange={(e) => {
                  const updated = [...galleryItems];
                  updated[index].caption = e.target.value;
                  setGalleryItems(updated);
                }}
                placeholder="Description de l'image"
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor={`gallery-category-${index}`}>Catégorie (optionnel)</Label>
              <Input
                id={`gallery-category-${index}`}
                value={item.category || ""}
                onChange={(e) => {
                  const updated = [...galleryItems];
                  updated[index].category = e.target.value;
                  setGalleryItems(updated);
                }}
                placeholder="Ex: Portrait, Architecture, etc."
                className="mt-1"
              />
            </div>
          </div>
        ))}
        
        <Button
          type="button"
          variant="outline"
          onClick={addGalleryItem}
          className="w-full mt-2"
        >
          <Plus className="h-4 w-4 mr-2" /> Ajouter une image
        </Button>
      </div>
    </div>
  );
};

export default GallerySection;
