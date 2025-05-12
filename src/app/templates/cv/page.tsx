
import React from 'react';
import PersonaLayout from '@/components/persona/PersonaLayout';
import AboutSection from '@/components/persona/AboutSection';
import ServicesSection from '@/components/persona/ServicesSection';
import TimelineSection from '@/components/persona/TimelineSection';
import SkillsSection from '@/components/persona/SkillsSection';
import ProjectsSection from '@/components/persona/ProjectsSection';

const CvTemplate = () => {
  const aboutContent = {
    title: "À propos de moi",
    subtitle: "Ingénieur en Informatique",
    description: "Ingénieur en informatique avec 5 ans d'expérience en développement web et mobile. Passionné par les nouvelles technologies et l'innovation, je cherche à mettre mes compétences au service d'une entreprise dynamique et ambitieuse.",
    paragraphs: [
      "Spécialisé en développement frontend avec React et backend avec Node.js, j'ai travaillé sur des projets variés allant de la startup au grand groupe.",
      "Ma formation technique solide combinée à d'excellentes compétences en communication me permettent de m'adapter facilement à de nouveaux environnements et de collaborer efficacement en équipe."
    ]
  };

  const competences = [
    {
      title: "Développement Frontend",
      description: "Création d'interfaces utilisateur modernes et réactives avec React, Vue.js et des frameworks CSS comme Tailwind.",
      icon: "Code"
    },
    {
      title: "Développement Backend",
      description: "Conception d'APIs RESTful avec Node.js, Express et intégration avec bases de données SQL et NoSQL.",
      icon: "Server"
    },
    {
      title: "Mobile & Responsive",
      description: "Développement d'applications mobiles cross-platform avec React Native et Flutter.",
      icon: "Smartphone"
    },
    {
      title: "DevOps & CI/CD",
      description: "Mise en place de pipelines d'intégration continue avec GitHub Actions, Jenkins et déploiement sur AWS/Azure.",
      icon: "GitBranch"
    }
  ];

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform Redesign",
      category: "Web Application",
      year: "2022",
      description: "Refonte complète de la plateforme e-commerce d'un grand distributeur français (React, Node.js, MongoDB)"
    },
    {
      id: 2,
      title: "Healthcare Mobile App",
      category: "Mobile Application",
      year: "2021",
      description: "Application de suivi médical pour patients atteints de maladies chroniques (React Native, Firebase)"
    },
    {
      id: 3,
      title: "Banking Dashboard",
      category: "Web Application",
      year: "2020",
      description: "Tableau de bord analytique pour une banque internationale (Vue.js, D3.js, Python/Flask)"
    }
  ];

  const skills = [
    { name: "JavaScript", level: 95 },
    { name: "React", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "HTML/CSS", level: 90 },
    { name: "SQL", level: 75 },
    { name: "Git", level: 85 },
    { name: "Docker", level: 70 },
  ];

  const sections = [
    {
      id: "1",
      title: "À propos",
      component: <AboutSection content={aboutContent} />
    },
    {
      id: "2",
      title: "Compétences",
      component: <ServicesSection services={competences} />
    },
    {
      id: "3",
      title: "Expérience professionnelle",
      component: <TimelineSection events={[
        { id: 1, title: "Développeur FullStack Senior", description: "Tech Solutions, Paris", year: "2022 - Présent" },
        { id: 2, title: "Développeur Frontend", description: "Digital Agency, Lyon", year: "2020 - 2022" },
        { id: 3, title: "Développeur Web Junior", description: "Startup Studio, Bordeaux", year: "2018 - 2020" },
      ]} />
    },
    {
      id: "4",
      title: "Formation",
      component: <TimelineSection events={[
        { id: 4, title: "Master en Ingénierie Informatique", description: "Université de Lyon", year: "2018" },
        { id: 5, title: "Licence en Informatique", description: "Université de Bordeaux", year: "2016" },
        { id: 6, title: "Baccalauréat Scientifique", description: "Lycée Victor Hugo, Paris", year: "2013" },
      ]} />
    },
    {
      id: "5",
      title: "Expertise technique",
      component: <SkillsSection skills={skills} />
    },
    {
      id: "6",
      title: "Projets réalisés",
      component: <ProjectsSection projects={projects} />
    }
  ];

  return <PersonaLayout persona="cv" sections={sections} />;
};

export default CvTemplate;
