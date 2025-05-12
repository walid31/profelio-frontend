
import React from 'react';
import PersonaLayout, { PersonaSection } from '@/components/persona/PersonaLayout';
import AboutSection from '@/components/persona/AboutSection';
import ServicesSection from '@/components/persona/ServicesSection';
import TestimonialsSection from '@/components/persona/TestimonialsSection';
import { Clock, MapPin, Stethoscope, Clipboard } from 'lucide-react';

const MedecinTemplate = () => {
  // About section content
  const aboutContent = {
    description: "Médecin généraliste avec plus de 15 ans d'expérience, j'ai créé un cabinet moderne intégrant les dernières technologies pour offrir à mes patients un suivi personnalisé et des services de téléconsultation. Ma pratique se concentre sur une approche préventive et holistique de la santé.",
    skills: [
      "Médecine générale", "Suivi chronique", "Médecine préventive", 
      "Téléconsultation", "Prescription électronique", "Santé digitale", 
      "Pédiatrie", "Gériatrie"
    ]
  };

  // Services section content
  const services = [
    {
      icon: Stethoscope,
      title: "Consultations",
      description: "Consultations générales sur rendez-vous, urgences, suivi de patients chroniques et bilans de santé complets."
    },
    {
      icon: Clipboard,
      title: "Téléconsultation",
      description: "Consultations vidéo sécurisées pour les suivis, renouvellements d'ordonnance et questions médicales non urgentes."
    },
    {
      icon: Clock,
      title: "Horaires étendus",
      description: "Consultations disponibles en soirée et le samedi matin pour s'adapter à tous les emplois du temps."
    },
    {
      icon: MapPin,
      title: "Visites à domicile",
      description: "Service de visites à domicile pour les patients à mobilité réduite dans un rayon de 15km."
    }
  ];

  // Clinic info
  const clinicInfo = {
    hours: [
      { day: "Lundi - Vendredi", hours: "8h30 - 19h00" },
      { day: "Samedi", hours: "9h00 - 12h00" },
      { day: "Dimanche", hours: "Fermé" }
    ],
    address: "123 Avenue de la Santé, 75001 Paris",
    phone: "01 23 45 67 89",
    email: "contact@cabinet-medical.fr"
  };

  // Testimonials section content
  const testimonials = [
    {
      id: 1,
      name: "Pierre Dupont",
      content: "Je suis patient du Dr Martin depuis 5 ans. Sa disponibilité et son écoute en font un médecin exceptionnel. Le service de téléconsultation est très pratique.",
      rating: 5
    },
    {
      id: 2,
      name: "Marie Laurent",
      content: "Médecin à l'écoute qui prend le temps d'expliquer. Le cabinet est moderne et le système de prise de rendez-vous en ligne très efficace.",
      rating: 5
    },
    {
      id: 3,
      name: "Jean Moreau",
      content: "Excellent suivi de ma condition chronique. J'apprécie particulièrement la possibilité de consulter mes résultats d'analyse en ligne.",
      rating: 4
    },
    {
      id: 4,
      name: "Sophie Petit",
      content: "Une approche humaine et professionnelle. Le Dr Martin ne se contente pas de traiter les symptômes mais cherche toujours les causes profondes.",
      rating: 5
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
      id: "clinic-info",
      title: "Informations pratiques",
      component: (
        <div className="max-w-xl">
          <div className="space-y-6">
            <div className="border rounded-lg p-6 bg-white">
              <h3 className="font-medium mb-4 flex items-center gap-2">
                <Clock size={20} className="text-primary" /> Horaires d'ouverture
              </h3>
              <div className="space-y-2">
                {clinicInfo.hours.map((item, index) => (
                  <div key={index} className="flex justify-between">
                    <span>{item.day}</span>
                    <span className="font-medium">{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="border rounded-lg p-6 bg-white">
              <h3 className="font-medium mb-4 flex items-center gap-2">
                <MapPin size={20} className="text-primary" /> Coordonnées
              </h3>
              <div className="space-y-2">
                <p>{clinicInfo.address}</p>
                <p>Téléphone: {clinicInfo.phone}</p>
                <p>Email: {clinicInfo.email}</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "testimonials",
      title: "Avis des patients",
      component: <TestimonialsSection testimonials={testimonials} />
    }
  ];

  return <PersonaLayout persona="medecin" sections={sections} />;
};

export default MedecinTemplate;
