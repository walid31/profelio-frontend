
import React from 'react';
import PersonaLayout, { PersonaSection } from '@/components/persona/PersonaLayout';
import AboutSection from '@/components/persona/AboutSection';
import ServicesSection from '@/components/persona/ServicesSection';
import GallerySection from '@/components/persona/GallerySection';
import ProjectsSection from '@/components/persona/ProjectsSection';
import { Camera, Users, Image, Calendar } from 'lucide-react';

const PhotographeTemplate = () => {
  // About section content
  const aboutContent = {
    description: "Photographe professionnel avec plus de 10 ans d'expérience, spécialisé dans les événements corporate et la photographie commerciale B2B. Mon approche combine créativité et rigueur technique pour capturer l'essence de votre marque et créer des images qui racontent votre histoire.",
    skills: [
      "Portrait corporate", "Événementiel", "Photographie d'architecture", 
      "Packshot produit", "Identité visuelle", "Retouche professionnelle", 
      "Studio mobile", "Photographie aérienne"
    ]
  };

  // Services section content
  const services = [
    {
      icon: Image,
      title: "Photographie Corporate",
      description: "Portraits professionnels, photos d'équipe et reportages en entreprise pour valoriser votre image de marque."
    },
    {
      icon: Calendar,
      title: "Couverture d'Événements",
      description: "Captation complète de vos séminaires, conférences et événements professionnels avec livraison express."
    },
    {
      icon: Camera,
      title: "Shooting Produits",
      description: "Mise en valeur de vos produits et services avec des images haute définition pour vos supports marketing."
    },
    {
      icon: Users,
      title: "Workshops Photo",
      description: "Formation et animation d'ateliers photo pour les équipes marketing qui souhaitent améliorer leur contenu visuel."
    }
  ];

  // Gallery categories and items
  const galleryCategories = ["Corporate", "Événements", "Architecture", "Produits"];
  
  const galleryItems = [
    {
      id: 1,
      thumbnail: "https://images.unsplash.com/photo-1551434678-e076c223a692",
      title: "Équipe dirigeante TechCorp",
      category: "Corporate"
    },
    {
      id: 2,
      thumbnail: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678",
      title: "Conférence annuelle Finance+",
      category: "Événements"
    },
    {
      id: 3,
      thumbnail: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
      title: "Nouveau siège social Archi Group",
      category: "Architecture"
    },
    {
      id: 4,
      thumbnail: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
      title: "Collection montres TempoLux",
      category: "Produits"
    },
    {
      id: 5,
      thumbnail: "https://images.unsplash.com/photo-1556761175-b413da4baf72",
      title: "Team building InnoTeam",
      category: "Événements"
    },
    {
      id: 6,
      thumbnail: "https://images.unsplash.com/photo-1497366811353-6870744d04b2",
      title: "Portraits corporate BankWest",
      category: "Corporate"
    }
  ];

  // Package information
  const packages = [
    {
      id: 1,
      title: "Pack Événement Essentiel",
      description: "Couverture photographique de 4h, 150+ photos retouchées, livraison express sous 48h, galerie de partage privée.",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622",
    },
    {
      id: 2,
      title: "Pack Corporate Premium",
      description: "Journée complète de shooting (portraits, équipe, locaux), 300+ photos HD retouchées, droits d'utilisation commerciale illimités.",
      image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c",
    },
    {
      id: 3,
      title: "Pack Produits E-commerce",
      description: "Studio professionnel, 20 produits, 5 angles par produit, retouche avancée, fond détouré, livraison sous 5 jours ouvrés.",
      image: "https://images.unsplash.com/photo-1581591524133-5f0a6cf1f2f2",
    }
  ];

  // Client logos
  const clients = [
    { name: "TechVision", logo: "" },
    { name: "EuroFinance", logo: "" },
    { name: "MediaGroup", logo: "" },
    { name: "InnoStart", logo: "" },
    { name: "GlobalRetail", logo: "" },
    { name: "ArchDesign", logo: "" }
  ];

  // Define sections for this persona
  const sections: PersonaSection[] = [
    {
      id: "about",
      title: "À propos",
      component: <AboutSection 
        description={aboutContent.description} 
        skills={aboutContent.skills} 
      />
    },
    {
      id: "services",
      title: "Services",
      component: <ServicesSection services={services} />
    },
    {
      id: "gallery",
      title: "Portfolio",
      component: <GallerySection 
        items={galleryItems} 
        categories={galleryCategories} 
        layout="masonry" 
      />
    },
    {
      id: "packages",
      title: "Forfaits",
      component: <ProjectsSection projects={packages} />
    },
    {
      id: "clients",
      title: "Clients",
      component: (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {clients.map((client, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-6 flex items-center justify-center h-24 hover:border-primary transition-colors">
              <span className="text-center font-medium">{client.name}</span>
            </div>
          ))}
        </div>
      )
    }
  ];

  return <PersonaLayout persona="photographe" sections={sections} />;
};

export default PhotographeTemplate;
