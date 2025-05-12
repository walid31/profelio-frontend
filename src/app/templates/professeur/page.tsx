
import React from 'react';
import PersonaLayout from '@/components/persona/PersonaLayout';
import AboutSection from '@/components/persona/AboutSection';
import ServicesSection from '@/components/persona/ServicesSection';
import TestimonialsSection from '@/components/persona/TestimonialsSection';
import TimelineSection from '@/components/persona/TimelineSection';
import ProjectsSection from '@/components/persona/ProjectsSection';

const ProfesseurTemplate = () => {
  const aboutContent = {
    title: "À propos",
    subtitle: "Professor & Researcher",
    description: `En tant que Professeur d'Université spécialisé en sciences de l'informatique, je combine enseignement de haut niveau et recherche avancée. Mon approche pédagogique s'appuie sur plus de 15 ans d'expérience dans le milieu académique et une collaboration étroite avec l'industrie.`,
    paragraphs: [
      "Je dirige actuellement le département d'intelligence artificielle et supervise plusieurs projets de recherche financés par des organismes nationaux et internationaux.",
      "Mes travaux de recherche ont été publiés dans des revues scientifiques prestigieuses et j'interviens régulièrement comme conférencier dans des colloques internationaux."
    ]
  };

  const services = [
    {
      title: "Enseignement",
      description: "Cours magistraux et TD en informatique, intelligence artificielle et science des données pour niveaux Licence, Master et Doctorat.",
      icon: "BookOpen"
    },
    {
      title: "Supervision Académique",
      description: "Encadrement de mémoires, thèses et projets de recherche avec un taux de réussite de 95% pour mes étudiants.",
      icon: "GraduationCap"
    },
    {
      title: "Projets de Recherche",
      description: "Direction et participation à des projets de recherche collaboratifs nationaux et internationaux en IA et apprentissage automatique.",
      icon: "FlaskConical"
    },
    {
      title: "Consulting Académique",
      description: "Expertise pour établissements d'enseignement supérieur, conception de cursus innovants et évaluation de programmes.",
      icon: "Presentation"
    }
  ];

  const publications = [
    {
      id: 1,
      title: "Neural Network Approaches for Natural Language Processing",
      category: "Machine Learning",
      year: "2023",
      description: "Journal of Computational Linguistics, Vol. 49, Issue 2"
    },
    {
      id: 2,
      title: "Transformer Models for Educational Content Analysis",
      category: "Educational Technology",
      year: "2022",
      description: "IEEE Transactions on Learning Technologies"
    },
    {
      id: 3,
      title: "Sustainable Computing: Energy Efficient Algorithms for Mobile Applications",
      category: "Green Computing",
      year: "2021",
      description: "ACM Transactions on Computing Systems"
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Alexandre Martin",
      role: "Étudiant en Master",
      company: "Université Paris-Saclay",
      content: "Un professeur exceptionnel qui a su rendre complexes concepts d'IA accessibles et passionnants. Ses cours ont largement dépassé mes attentes."
    },
    {
      id: 2,
      name: "Sophie Dubois",
      role: "Doctorante",
      company: "CNRS",
      content: "Sa capacité à expliquer des concepts complexes de manière claire est remarquable. Grâce à son encadrement, j'ai pu mener à bien ma thèse dans les meilleures conditions."
    },
    {
      id: 3,
      name: "Thomas Bernard",
      role: "Ancien étudiant",
      company: "Google AI",
      content: "Les méthodes d'enseignement du Professeur m'ont donné une base solide qui m'a permis de réussir dans l'industrie de l'IA. Je lui serai éternellement reconnaissant."
    }
  ];

  const sections = [
    {
      id: "1",
      title: "À propos",
      component: <AboutSection content={aboutContent} />
    },
    {
      id: "2",
      title: "Domaines d'expertise",
      component: <ServicesSection services={services} />
    },
    {
      id: "3",
      title: "Publications récentes",
      component: <ProjectsSection projects={publications} />
    },
    {
      id: "4",
      title: "Parcours académique",
      component: <TimelineSection events={[
        { id: 1, title: "Professeur titulaire", description: "Université de Paris-Saclay", year: "2010" },
        { id: 2, title: "Maître de conférences", description: "Université de Lyon", year: "2005" },
        { id: 3, title: "Doctorat en informatique", description: "École Polytechnique Fédérale de Lausanne", year: "2003" },
        { id: 4, title: "Master en Computer Science", description: "Stanford University", year: "2000" },
      ]} />
    },
    {
      id: "5",
      title: "Témoignages d'étudiants",
      component: <TestimonialsSection testimonials={testimonials} />
    }
  ];

  return <PersonaLayout persona="professeur" sections={sections} />;
};

export default ProfesseurTemplate;
