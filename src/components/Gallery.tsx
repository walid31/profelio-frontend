import React, { useState } from 'react';

type GalleryItem = {
  id: number;
  thumbnail: string;
  title: string;
  category: string;
};

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  
  const categories = ["Portraits", "Nature", "Architecture", "Events"];
  const [activeCategory, setActiveCategory] = useState("all");
  
  const galleryItems: GalleryItem[] = [
    { id: 1, thumbnail: "", title: "Portrait Study", category: "Portraits" },
    { id: 2, thumbnail: "", title: "Urban Landscape", category: "Architecture" },
    { id: 3, thumbnail: "", title: "Spring Festival", category: "Events" },
    { id: 4, thumbnail: "", title: "Mountain Vista", category: "Nature" },
    { id: 5, thumbnail: "", title: "City Nights", category: "Architecture" },
    { id: 6, thumbnail: "", title: "Wedding Moments", category: "Events" }
  ];

  const filteredItems = activeCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="max-w-3xl">
      <h2 className="text-3xl font-light mb-6 relative after:content-[''] after:absolute after:w-12 after:h-0.5 after:bg-black after:bottom-0 after:left-0 pb-2">Portfolio Photo</h2>
      
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
        {categories.map(category => (
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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredItems.map((item) => (
          <div 
            key={item.id}
            onClick={() => setSelectedImage(item)}
            className="aspect-square bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg cursor-pointer hover:opacity-90 transition-all duration-300 transform hover:scale-[1.02]"
          >
            <div className="h-full w-full flex items-center justify-center text-gray-400 text-sm p-4 text-center">
              {item.title}
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4" 
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-4xl max-h-[90vh] w-full relative" onClick={e => e.stopPropagation()}>
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 aspect-video rounded-lg flex items-center justify-center">
              <span className="text-gray-400">{selectedImage.title}</span>
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

export default Gallery;
