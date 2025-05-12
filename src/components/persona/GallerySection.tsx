"use client";
import React, { useState } from "react";

export type GalleryItem = {
  id: number;
  thumbnail: string;
  title: string;
  category?: string;
  image?: string;
  caption?: string; // For backward compatibility
};

type GallerySectionProps = {
  items: GalleryItem[] | any[]; // Allow any[] for backward compatibility
  categories?: string[];
  layout?: "grid" | "masonry";
};

const GallerySection = ({
  items,
  categories = [],
  layout = "grid",
}: GallerySectionProps) => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [activeCategory, setActiveCategory] = useState("all");

  // Normalize gallery items to ensure they have the required properties
  const normalizedItems: GalleryItem[] = items.map((item, index) => ({
    id: item.id || index,
    thumbnail: item.thumbnail || item.image || "",
    title: item.title || item.caption || `Item ${index + 1}`,
    category: item.category || "",
    image: item.image || item.thumbnail || "",
  }));

  const filteredItems =
    activeCategory === "all"
      ? normalizedItems
      : normalizedItems.filter((item) => item.category === activeCategory);

  return (
    <div className="max-w-3xl">
      {categories.length > 0 && (
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2 rounded-full text-sm ${
              activeCategory === "all"
                ? "bg-gray-800 text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            Tout
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${
                activeCategory === category
                  ? "bg-gray-800 text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      )}

      <div
        className={`gallery-grid grid ${
          layout === "grid"
            ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
            : "grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3"
        } gap-4`}
      >
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedImage(item)}
            className={`${
              layout === "masonry"
                ? `${item.id % 3 === 0 ? "row-span-2" : ""}`
                : "aspect-square"
            } 
              bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg cursor-pointer 
              hover:opacity-90 transition-all duration-300 transform hover:scale-[1.02]
              ${item.thumbnail ? "" : "flex items-center justify-center"}`}
            style={
              item.thumbnail
                ? {
                    backgroundImage: `url(${item.thumbnail})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }
                : {}
            }
          >
            {!item.thumbnail && (
              <div className="h-full w-full flex items-center justify-center text-gray-400 text-sm p-4 text-center">
                {item.title}
              </div>
            )}
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="max-w-4xl max-h-[90vh] w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 aspect-video rounded-lg flex items-center justify-center">
              {selectedImage.image ? (
                <img
                  src={selectedImage.image || selectedImage.thumbnail}
                  alt={selectedImage.title}
                  className="max-w-full max-h-full object-contain"
                />
              ) : (
                <span className="text-gray-400">{selectedImage.title}</span>
              )}
            </div>
            <div className="absolute bottom-4 left-4 bg-black/60 px-3 py-1 rounded text-white text-sm">
              {selectedImage.title}
            </div>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white/10 rounded-full w-8 h-8 flex items-center justify-center text-white"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GallerySection;
