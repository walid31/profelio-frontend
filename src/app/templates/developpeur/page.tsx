
import React from 'react';
import PersonaLayout, { PersonaSection } from '@/components/persona/PersonaLayout';
import AboutSection from '@/components/persona/AboutSection';
import ServicesSection from '@/components/persona/ServicesSection';
import ProjectsSection, { Project } from '@/components/persona/ProjectsSection';
import SkillsSection from '@/components/persona/SkillsSection';
import { Code, Database, Server, Layout } from 'lucide-react';

const DeveloppeurTemplate = () => {
  // About section content
  const aboutContent = {
    description: "Développeur full-stack freelance avec 8 ans d'expérience, spécialisé dans la création d'applications web et mobiles modernes. Je m'investis dans chaque projet pour livrer des solutions robustes, évolutives et centrées sur l'utilisateur, en utilisant les technologies les plus adaptées aux besoins spécifiques de mes clients.",
    skills: [
      "Front-end", "Back-end", "Mobile", "DevOps", 
      "UI/UX", "Base de données", "Sécurité", "API"
    ]
  };

  // Services section content
  const services = [
    {
      icon: Layout,
      title: "Développement Front-end",
      description: "Création d'interfaces modernes et réactives avec React, Vue.js ou Angular selon vos besoins spécifiques."
    },
    {
      icon: Server,
      title: "Développement Back-end",
      description: "Architecture et développement de serveurs robustes avec Node.js, Python ou Java, et intégration API."
    },
    {
      icon: Database,
      title: "Solutions Cloud & DevOps",
      description: "Déploiement et maintenance d'applications sur AWS, Google Cloud ou Azure avec des pipelines CI/CD automatisés."
    },
    {
      icon: Code,
      title: "Conseil Technique",
      description: "Audit de code, optimisation des performances et consultation sur les choix technologiques pour votre projet."
    }
  ];

  // Projects
  const projects: Project[] = [
    {
      id: 1,
      title: "Plateforme e-commerce",
      description: "Refonte complète d'une boutique en ligne avec React, Node.js et MongoDB, intégration de paiement et système d'administration personnalisé.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c",
      link: "https://project-demo.com",
      tags: ["React", "Node.js", "MongoDB", "Stripe", "AWS"]
    },
    {
      id: 2,
      title: "Application mobile de fitness",
      description: "Application React Native pour le suivi d'entraînements et de nutrition, avec synchronisation cloud et analyses personnalisées.",
      image: "https://images.unsplash.com/photo-1526948531399-320e7e40f0ca",
      link: "https://app-demo.com",
      tags: ["React Native", "Firebase", "Redux", "Analytics"]
    },
    {
      id: 3,
      title: "Tableau de bord SaaS",
      description: "Interface d'administration pour une solution SaaS de gestion de projet, avec visualisations de données en temps réel.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      link: "https://dashboard-demo.com",
      tags: ["Vue.js", "TypeScript", "GraphQL", "D3.js"]
    }
  ];

  // Technical skills
  const technicalSkills = [
    { name: "JavaScript/TypeScript", level: 95, category: "Front-end" },
    { name: "React", level: 90, category: "Front-end" },
    { name: "Vue.js", level: 85, category: "Front-end" },
    { name: "HTML5/CSS3", level: 90, category: "Front-end" },
    { name: "Node.js", level: 85, category: "Back-end" },
    { name: "Python/Django", level: 80, category: "Back-end" },
    { name: "GraphQL", level: 75, category: "Back-end" },
    { name: "SQL/NoSQL", level: 85, category: "Bases de données" },
    { name: "Docker/Kubernetes", level: 70, category: "DevOps" },
    { name: "AWS", level: 75, category: "DevOps" },
    { name: "CI/CD", level: 80, category: "DevOps" },
    { name: "React Native", level: 80, category: "Mobile" }
  ];

  // GitHub stats
  const githubStats = {
    repos: 24,
    stars: 156,
    contributions: 847,
    topLanguages: ["TypeScript", "JavaScript", "Python"]
  };

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
      id: "projects",
      title: "Projets",
      component: <ProjectsSection projects={projects} />
    },
    {
      id: "skills",
      title: "Compétences techniques",
      component: <SkillsSection 
        skills={technicalSkills} 
        showLevel={true}
        groupByCategory={true}
      />
    },
    {
      id: "open-source",
      title: "Contributions Open-Source",
      component: (
        <div className="space-y-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="border rounded-lg p-4 text-center">
              <div className="text-2xl font-medium text-primary">{githubStats.repos}</div>
              <div className="text-sm text-gray-600">Repositories</div>
            </div>
            <div className="border rounded-lg p-4 text-center">
              <div className="text-2xl font-medium text-primary">{githubStats.stars}</div>
              <div className="text-sm text-gray-600">Stars</div>
            </div>
            <div className="border rounded-lg p-4 text-center">
              <div className="text-2xl font-medium text-primary">{githubStats.contributions}</div>
              <div className="text-sm text-gray-600">Contributions</div>
            </div>
            <div className="border rounded-lg p-4 text-center">
              <div className="flex justify-center gap-1">
                {githubStats.topLanguages.map((lang, idx) => (
                  <div key={idx} className="text-xs bg-gray-100 rounded px-2 py-1">{lang}</div>
                ))}
              </div>
              <div className="text-sm text-gray-600 mt-1">Top languages</div>
            </div>
          </div>
          
          <p className="text-gray-600">
            Je contribue activement à plusieurs projets open-source, principalement dans l'écosystème JavaScript.
            Retrouvez mon profil complet sur GitHub.
          </p>
        </div>
      )
    }
  ];

  return <PersonaLayout persona="developpeur" sections={sections} />;
};

export default DeveloppeurTemplate;
