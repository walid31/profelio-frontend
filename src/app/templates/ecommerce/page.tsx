import React from 'react';
import PersonaLayout, { PersonaSection } from '@/components/persona/PersonaLayout';
import AboutSection from '@/components/persona/AboutSection';
import ServicesSection from '@/components/persona/ServicesSection';
import ProjectsSection from '@/components/persona/ProjectsSection';
import { ShoppingBag, Package, CreditCard, Truck } from 'lucide-react';

const EcommerceTemplate = () => {
  // About section content
  const aboutContent = {
    description: "Bienvenue dans notre boutique en ligne spécialisée dans les produits artisanaux de haute qualité. Nous proposons une sélection soigneusement choisie d'articles uniques fabriqués par des artisans locaux.",
    skills: [
      "Livraison rapide", "Paiement sécurisé", "Service client 24/7", "Garantie satisfaction",
      "Produits éthiques", "Emballage écologique", "Fabrication artisanale"
    ]
  };

  // Services section content
  const services = [
    {
      icon: ShoppingBag,
      title: "Collections exclusives",
      description: "Découvrez nos collections saisonnières avec des pièces uniques créées par des artisans talentueux."
    },
    {
      icon: Package,
      title: "Produits personnalisables",
      description: "Commandez des articles sur mesure adaptés à vos goûts et à vos besoins spécifiques."
    },
    {
      icon: CreditCard,
      title: "Paiement sécurisé",
      description: "Profitez de nos options de paiement sécurisées et flexibles pour vos achats en ligne."
    },
    {
      icon: Truck,
      title: "Livraison internationale",
      description: "Nous expédions nos produits dans le monde entier avec un suivi détaillé de votre commande."
    }
  ];

  // Featured products
  const products = [
    {
      id: 1,
      title: "Sac en cuir artisanal",
      category: "Accessoires",
      year: "Nouveauté",
      description: "Sac en cuir véritable fabriqué à la main par nos artisans. Disponible en plusieurs couleurs."
    },
    {
      id: 2,
      title: "Lampe design en bois",
      category: "Décoration",
      year: "Collection 2025",
      description: "Lampe élégante en bois massif avec finitions personnalisables et ampoule LED incluse."
    },
    {
      id: 3,
      title: "Ensemble de vaisselle artisanale",
      category: "Art de la table",
      year: "Édition limitée",
      description: "Service complet de 6 pièces en céramique émaillée, créé par notre potier expert."
    },
    {
      id: 4,
      title: "Écharpe en laine mérinos",
      category: "Textile",
      year: "Bestseller",
      description: "Écharpe douce et chaude en laine mérinos tissée selon des techniques traditionnelles."
    }
  ];

  // Define sections for this persona
  const sections: PersonaSection[] = [
    {
      id: "about",
      title: "Notre boutique",
      component: <AboutSection 
        description={aboutContent.description} 
        skills={aboutContent.skills} 
      />
    },
    {
      id: "services",
      title: "Nos services",
      component: <ServicesSection services={services} />
    },
    {
      id: "products",
      title: "Produits vedettes",
      component: <ProjectsSection projects={products} />
    }
  ];

  return <PersonaLayout persona="ecommerce" sections={sections} />;
};

export default EcommerceTemplate;
