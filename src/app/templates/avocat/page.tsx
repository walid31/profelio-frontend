
import React from 'react';
import PersonaLayout, { PersonaSection } from '@/components/persona/PersonaLayout';
import AboutSection from '@/components/persona/AboutSection';
import ServicesSection from '@/components/persona/ServicesSection';
import TimelineSection from '@/components/persona/TimelineSection';
import { Scale, FileText, Briefcase, Shield } from 'lucide-react';

const AvocatTemplate = () => {
  // About section content
  const aboutContent = {
    description: "Avocat spécialisé en droit des affaires avec 12 ans d'expérience, j'accompagne entrepreneurs et entreprises dans leurs projets et leur développement. Mon cabinet intègre les outils numériques pour offrir un service juridique adapté aux besoins des entreprises modernes.",
    skills: [
      "Droit des sociétés", "Propriété intellectuelle", "Droit commercial", 
      "Contentieux des affaires", "Fusions-acquisitions", "Droit du travail", 
      "RGPD", "Droit du numérique"
    ]
  };

  // Services section content
  const services = [
    {
      icon: Scale,
      title: "Conseil juridique",
      description: "Accompagnement stratégique des entreprises et dirigeants sur tous les aspects juridiques de leur activité."
    },
    {
      icon: Briefcase,
      title: "Transactions",
      description: "Négociation et rédaction de contrats commerciaux, accords de partenariat et opérations de croissance externe."
    },
    {
      icon: Shield,
      title: "Protection juridique",
      description: "Défense des intérêts, protection de la propriété intellectuelle et gestion des contentieux commerciaux."
    },
    {
      icon: FileText,
      title: "Conformité légale",
      description: "Audit et mise en conformité RGPD, droit du travail et régulations sectorielles spécifiques."
    }
  ];

  // Practice areas
  const practiceAreas = [
    "Droit des sociétés", "Propriété intellectuelle", "Droit commercial", 
    "Contentieux des affaires", "Fusions-acquisitions", "Droit du travail", 
    "RGPD", "Droit du numérique", "Droit fiscal", "Droit des contrats"
  ];

  // Notable cases
  const notableCases = [
    {
      id: 1,
      title: "Acquisition d'une startup technologique",
      description: "Conseil d'une scale-up dans l'acquisition d'une startup spécialisée en IA, incluant due diligence, négociation et structuration fiscale optimisée.",
      date: "2023"
    },
    {
      id: 2,
      title: "Litige sur propriété intellectuelle",
      description: "Résolution favorable d'un contentieux complexe concernant la violation d'un brevet technologique entre deux entreprises du secteur industriel.",
      date: "2022"
    },
    {
      id: 3,
      title: "Restructuration d'entreprise",
      description: "Accompagnement juridique complet d'une PME de 80 salariés dans sa restructuration suite à la crise sanitaire, avec préservation de 90% des emplois.",
      date: "2021"
    }
  ];

  // Publications
  const publications = [
    {
      id: 1,
      title: "Les enjeux juridiques de l'intelligence artificielle en entreprise",
      type: "Article juridique",
      source: "Revue du Droit des Affaires",
      date: "2023"
    },
    {
      id: 2,
      title: "Guide pratique RGPD pour startups",
      type: "Livre blanc",
      source: "Auto-édition",
      date: "2022"
    },
    {
      id: 3,
      title: "Impact des nouvelles régulations européennes sur le e-commerce",
      type: "Conférence",
      source: "Forum E-Commerce Paris",
      date: "2022"
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
      id: "practice-areas",
      title: "Domaines d'expertise",
      component: (
        <div className="max-w-xl">
          <div className="flex flex-wrap gap-2">
            {practiceAreas.map((area, index) => (
              <div key={index} className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full hover:bg-primary hover:text-white transition-colors">
                {area}
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: "notable-cases",
      title: "Affaires notables",
      component: <TimelineSection events={notableCases} />
    },
    {
      id: "publications",
      title: "Publications",
      component: (
        <div className="space-y-4">
          {publications.map(pub => (
            <div key={pub.id} className="border border-gray-200 rounded-lg p-5 hover:border-primary transition-colors">
              <h3 className="font-medium mb-1">{pub.title}</h3>
              <div className="text-sm text-gray-500 flex flex-wrap gap-x-4 gap-y-1">
                <span>{pub.type}</span>
                <span>{pub.source}</span>
                <span>{pub.date}</span>
              </div>
            </div>
          ))}
        </div>
      )
    }
  ];

  return <PersonaLayout persona="avocat" sections={sections} />;
};

export default AvocatTemplate;
