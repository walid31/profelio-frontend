
import React from 'react';
import PersonaLayout, { PersonaSection } from '@/components/persona/PersonaLayout';
import AboutSection from '@/components/persona/AboutSection';
import ServicesSection from '@/components/persona/ServicesSection';
import GallerySection from '@/components/persona/GallerySection';
import TimelineSection from '@/components/persona/TimelineSection';
import { Building, Ruler, PenTool, Award } from 'lucide-react';

const ArchitecteTemplate = () => {
  // About section content
  const aboutContent = {
    description: "Bureau d'études et d'architecture avec 15 ans d'expérience, spécialisé dans la conception durable et l'innovation technique. Notre équipe pluridisciplinaire d'architectes et d'ingénieurs travaille en synergie pour créer des espaces fonctionnels, esthétiques et respectueux de l'environnement.",
    skills: [
      "Architecture durable", "Ingénierie structurelle", "Modélisation BIM", 
      "Efficacité énergétique", "Design d'intérieur", "Études techniques", 
      "Gestion de projet", "Certification environnementale"
    ]
  };

  // Services section content
  const services = [
    {
      icon: Building,
      title: "Architecture",
      description: "Conception architecturale de bâtiments résidentiels, commerciaux et industriels intégrant les principes de durabilité et d'ergonomie."
    },
    {
      icon: Ruler,
      title: "Ingénierie",
      description: "Études techniques, calculs structurels, systèmes MEP (mécanique, électricité, plomberie) et optimisation énergétique."
    },
    {
      icon: PenTool,
      title: "Design d'intérieur",
      description: "Aménagement d'espaces intérieurs fonctionnels et esthétiques, avec sélection des matériaux et du mobilier."
    },
    {
      icon: Award,
      title: "Certification",
      description: "Accompagnement pour l'obtention de certifications environnementales (HQE, BREEAM, LEED) et conformité réglementaire."
    }
  ];

  // Portfolio items
  const portfolioItems = [
    {
      id: 1,
      thumbnail: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
      title: "Tour résidentielle Éco+",
      category: "Résidentiel"
    },
    {
      id: 2,
      thumbnail: "https://images.unsplash.com/photo-1545127398-14699f92334b",
      title: "Campus universitaire innovant",
      category: "Institutionnel"
    },
    {
      id: 3,
      thumbnail: "https://images.unsplash.com/photo-1524230572899-a752b3835840",
      title: "Centre commercial Le Prisme",
      category: "Commercial"
    },
    {
      id: 4,
      thumbnail: "https://images.unsplash.com/photo-1505409859467-3a796fd5798e",
      title: "Résidence Les Terrasses",
      category: "Résidentiel"
    },
    {
      id: 5,
      thumbnail: "https://images.unsplash.com/photo-1464146072230-91cabc968266",
      title: "Laboratoire de recherche Biotech",
      category: "Industriel"
    },
    {
      id: 6,
      thumbnail: "https://images.unsplash.com/photo-1486325212027-8081e485255e",
      title: "Bureaux flexibles NextGen",
      category: "Commercial"
    }
  ];

  // Certifications
  const certifications = [
    "Ordre des Architectes",
    "LEED Certified Professional",
    "HQE Certification",
    "BIM Manager Certification",
    "ISO 9001",
    "ISO 14001"
  ];

  // Project phases
  const projectPhases = [
    {
      id: 1,
      title: "Consultation initiale",
      description: "Rencontre pour comprendre vos besoins, objectifs, contraintes et vision. Nous établissons ensemble le programme architectural et les premières estimations budgétaires.",
      date: "Phase 1"
    },
    {
      id: 2,
      title: "Études préliminaires",
      description: "Esquisses conceptuelles, analyses de site, études de faisabilité et premières propositions architecturales pour validation des orientations principales.",
      date: "Phase 2"
    },
    {
      id: 3,
      title: "Avant-projet",
      description: "Développement détaillé du concept architectural retenu, avec plans, coupes, élévations et visualisations 3D. Définition des matériaux et solutions techniques.",
      date: "Phase 3"
    },
    {
      id: 4,
      title: "Dossier technique",
      description: "Élaboration des documents techniques pour permis de construire et consultation des entreprises. Incluant plans d'exécution et cahier des charges détaillé.",
      date: "Phase 4"
    },
    {
      id: 5,
      title: "Suivi de réalisation",
      description: "Direction et supervision du chantier, coordination des intervenants, contrôle qualité et conformité, gestion des modifications et réception des travaux.",
      date: "Phase 5"
    }
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
      id: "portfolio",
      title: "Portfolio",
      component: <GallerySection 
        items={portfolioItems} 
        categories={["Résidentiel", "Commercial", "Institutionnel", "Industriel"]} 
        layout="grid" 
      />
    },
    {
      id: "certifications",
      title: "Certifications",
      component: (
        <div className="max-w-xl">
          <div className="grid grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 flex items-center gap-3 hover:border-[--primary-color] transition-colors">
                <Award size={20} className="text-primary" />
                <span>{cert}</span>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: "project-phases",
      title: "Processus de projet",
      component: <TimelineSection events={projectPhases} />
    }
  ];

  return <PersonaLayout persona="architecte" sections={sections} />;
};

export default ArchitecteTemplate;
