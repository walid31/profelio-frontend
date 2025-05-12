"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import PersonaLayout, {
  PersonaSection,
} from "@/components/persona/PersonaLayout";
import AboutSection from "@/components/persona/AboutSection";
import ServicesSection from "@/components/persona/ServicesSection";
import ProjectsSection from "@/components/persona/ProjectsSection";
import TimelineSection from "@/components/persona/TimelineSection";
import TestimonialsSection from "@/components/persona/TestimonialsSection";
import GallerySection from "@/components/persona/GallerySection";
import SkillsSection from "@/components/persona/SkillsSection";

const AutoEntrepreneurTemplate = () => {
  const router = useRouter();

  const handleEditRequest = () => {
    router.push("/template-request/auto-entrepreneur");
  };

  // Create properly formatted sections for PersonaLayout
  const sections = [
    {
      id: "about",
      title: "À propos",
      component: (
        <AboutSection
          description="Graphiste indépendante depuis 2019, je mets ma créativité et mon expertise au service des entreprises qui souhaitent développer leur identité visuelle. Spécialisée dans l'illustration et le branding, je crée des designs uniques et personnalisés pour chacun de mes clients."
          skills={[
            "Design graphique",
            "Illustration",
            "Logo & Identité visuelle",
            "Supports marketing",
            "Direction artistique",
            "Adobe Creative Suite",
          ]}
        />
      ),
    },
    {
      id: "services",
      title: "Services",
      component: (
        <ServicesSection
          services={[
            {
              title: "Identité visuelle",
              description:
                "Création de logos, chartes graphiques et tous les éléments qui définissent votre image de marque.",
              icon: "Palette",
            },
            {
              title: "Supports de communication",
              description:
                "Conception de flyers, brochures, affiches et autres supports imprimés pour votre communication.",
              icon: "FileText",
            },
            {
              title: "Design web",
              description:
                "Création de maquettes et éléments graphiques pour votre site web et présence digitale.",
              icon: "Globe",
            },
            {
              title: "Illustration personnalisée",
              description:
                "Illustrations sur mesure pour vos projets éditoriaux ou votre communication.",
              icon: "PenTool",
            },
          ]}
        />
      ),
    },
    {
      id: "skills",
      title: "Compétences",
      component: (
        <SkillsSection
          skills={[
            { name: "Adobe Photoshop", level: 95 },
            { name: "Adobe Illustrator", level: 90 },
            { name: "Adobe InDesign", level: 85 },
            { name: "UI/UX Design", level: 75 },
            { name: "Marketing Digital", level: 70 },
          ]}
        />
      ),
    },
    {
      id: "projects",
      title: "Projets",
      component: (
        <ProjectsSection
          projects={[
            {
              id: 1,
              title: "Refonte de marque pour Café Lumière",
              description:
                "Création d'une nouvelle identité visuelle complète pour cette chaîne de cafés.",
              image: "/placeholder.svg",
              category: "Identité visuelle",
            },
            {
              id: 2,
              title: "Campagne publicitaire pour Écolo+",
              description:
                "Conception des visuels pour la campagne de sensibilisation environnementale.",
              image: "/placeholder.svg",
              category: "Print & Digital",
            },
            {
              id: 3,
              title: "Illustrations pour le magazine Tendances",
              description:
                "Série d'illustrations éditoriales pour un numéro spécial mode.",
              image: "/placeholder.svg",
              category: "Illustration",
            },
          ]}
        />
      ),
    },
    {
      id: "timeline",
      title: "Parcours",
      component: (
        <TimelineSection
          events={[
            {
              year: "2023",
              title: "Prix de l'innovation graphique",
              description:
                "Reconnaissance pour la campagne Écolo+ et son impact visuel.",
            },
            {
              year: "2020",
              title: "Formation en design UI/UX",
              description:
                "Spécialisation en interfaces utilisateur pour élargir mon offre de services.",
            },
            {
              year: "2019",
              title: "Lancement de mon activité d'auto-entrepreneur",
              description:
                "Après 5 ans en agence, je me lance dans l'aventure entrepreneuriale.",
            },
            {
              year: "2014",
              title: "Diplôme en Design Graphique",
              description:
                "Master en communication visuelle et design graphique.",
            },
          ]}
        />
      ),
    },
    {
      id: "testimonials",
      title: "Témoignages",
      component: (
        <TestimonialsSection
          testimonials={[
            {
              name: "Marie Dubois",
              position: "Fondatrice de Café Lumière",
              content:
                "Sarah a parfaitement compris notre vision et l'a traduite en une identité visuelle qui nous correspond parfaitement. Un travail de grande qualité qui a eu un impact direct sur notre notoriété.",
            },
            {
              name: "Thomas Leroy",
              position: "Directeur marketing, Écolo+",
              content:
                "Travailler avec Sarah a été une révélation. Sa créativité et sa compréhension de nos enjeux ont permis de créer une campagne visuelle impactante qui a dépassé nos objectifs.",
            },
            {
              name: "Julie Martin",
              position: "Rédactrice en chef, Magazine Tendances",
              content:
                "Les illustrations de Sarah ont donné une dimension unique à notre numéro spécial. Sa capacité à traduire nos concepts en images est remarquable.",
            },
          ]}
        />
      ),
    },
    {
      id: "gallery",
      title: "Galerie",
      component: (
        <GallerySection
          items={[
            {
              id: "1",
              title: "Logo Café Lumière",
              imageUrl: "/placeholder.svg",
              thumbnail: "/placeholder.svg",
              caption: "Logo principal pour la chaîne de cafés",
              category: "Identité visuelle",
            },
            {
              id: "2",
              title: "Affiche Écolo+",
              imageUrl: "/placeholder.svg",
              thumbnail: "/placeholder.svg",
              caption: "Visuel principal de la campagne",
              category: "Print",
            },
            {
              id: "3",
              title: "Illustration Magazine",
              imageUrl: "/placeholder.svg",
              thumbnail: "/placeholder.svg",
              caption: "Double page pour l'article principal",
              category: "Illustration",
            },
            {
              id: "4",
              title: "Carte de visite design",
              imageUrl: "/placeholder.svg",
              thumbnail: "/placeholder.svg",
              caption: "Projet personnel de carte de visite",
              category: "Print",
            },
          ]}
        />
      ),
    },
  ];

  return <PersonaLayout persona="Sarah Martin" sections={sections} />;
};

export default AutoEntrepreneurTemplate;
