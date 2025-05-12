import React from "react";
import PersonaLayout, {
  PersonaSection,
} from "@/components/persona/PersonaLayout";
import AboutSection from "@/components/persona/AboutSection";
import ServicesSection from "@/components/persona/ServicesSection";
import TestimonialsSection from "@/components/persona/TestimonialsSection";
import TimelineSection from "@/components/persona/TimelineSection";
import { Briefcase, Mic, BarChart2, Users, Award } from "lucide-react";

const ConsultantTemplate = () => {
  // About section content
  const aboutContent = {
    description:
      "Coach professionnel certifié avec plus de 15 ans d'expérience dans l'accompagnement des individus et des entreprises. Spécialisé dans le développement du leadership, la gestion du stress et l'intelligence émotionnelle. Mon approche personnalisée aide mes clients à atteindre leur plein potentiel.",
    skills: [
      "Gestion du temps",
      "Gestion du stress",
      "Communication",
      "PNL",
      "Leadership",
      "Intelligence émotionnelle",
      "Motivation & esprit d'équipe",
      "Gestion des conflits",
      "L'art de la négociation",
      "Prise de parole en public",
    ],
  };

  // Services section content
  const services = [
    {
      icon: Briefcase,
      title: "Consulting Stratégique",
      description:
        "Audit 360°, plans de croissance, design organisationnel et roadmaps d'innovation adaptés à vos objectifs.",
    },
    {
      icon: Mic,
      title: "Coaching Leadership",
      description:
        "Programmes individuels et d'équipe pour développer la posture de leader, la communication et la gestion du changement.",
    },
    {
      icon: BarChart2,
      title: "Formations Data‑Driven",
      description:
        "Ateliers interactifs pour maîtriser la visualisation des données et la prise de décision basée sur la data.",
    },
    {
      icon: Users,
      title: "Workshops d'Équipe",
      description:
        "Sessions sur mesure pour renforcer la cohésion, gérer les conflits et dynamiser l'intelligence collective.",
    },
  ];

  // Testimonials section content
  const testimonials = [
    {
      id: 1,
      name: "Sophie Renaud",
      role: "Directrice Marketing",
      company: "TechVision",
      content:
        "Le coaching de Jean a transformé notre équipe. Sa capacité à identifier nos blocages et à proposer des solutions concrètes a été remarquable.",
      rating: 5,
    },
    {
      id: 2,
      name: "Marc Dubois",
      role: "CEO",
      company: "InnoStart",
      content:
        "Après 6 mois de coaching, notre entreprise a connu une croissance de 40%. Jean a su nous guider vers une stratégie claire et efficace.",
      rating: 5,
    },
    {
      id: 3,
      name: "Claire Lefèvre",
      role: "Responsable RH",
      company: "GlobalCorp",
      content:
        "Les ateliers de gestion du stress ont transformé notre culture d'entreprise. Un investissement que je recommande à toute organisation.",
      rating: 4,
    },
    {
      id: 4,
      name: "Thomas Martin",
      role: "Entrepreneur",
      content:
        "Grâce aux sessions de coaching, j'ai pu clarifier ma vision et dépasser mes blocages. Un accompagnement précieux pour tout entrepreneur.",
      rating: 5,
    },
  ];

  // Case studies content
  const caseStudies = [
    {
      id: 1,
      title: "Transformation digitale d'une PME industrielle",
      description:
        "Accompagnement sur 18 mois d'une entreprise de 120 employés dans sa transition numérique, résultant en une augmentation de 25% de la productivité et une réduction des coûts opérationnels de 15%.",
      date: "2023",
    },
    {
      id: 2,
      title: "Programme de leadership pour cadres dirigeants",
      description:
        "Formation de 12 cadres supérieurs aux techniques avancées de leadership, entraînant une amélioration mesurable du climat social et une réduction du turnover de 40%.",
      date: "2022",
    },
    {
      id: 3,
      title: "Restructuration d'équipe après fusion",
      description:
        "Facilitation de l'intégration de deux cultures d'entreprise après une fusion, avec mise en place d'une nouvelle vision partagée et d'un plan d'action sur 6 mois.",
      date: "2021",
    },
  ];

  // Define sections for this persona
  const sections: PersonaSection[] = [
    {
      id: "about",
      title: "À propos",
      component: (
        <AboutSection
          description={aboutContent.description}
          skills={aboutContent.skills}
        />
      ),
    },
    {
      id: "services",
      title: "Services",
      component: <ServicesSection services={services} />,
    },
    {
      id: "testimonials",
      title: "Témoignages",
      component: <TestimonialsSection testimonials={testimonials} />,
    },
    {
      id: "case-studies",
      title: "Études de cas",
      component: <TimelineSection events={caseStudies} />,
    },
  ];

  return <PersonaLayout persona="consultant" sections={sections} />;
};

export default ConsultantTemplate;
