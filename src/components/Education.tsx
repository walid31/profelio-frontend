import React, { ReactNode } from "react";

type EducationItem = {
  degree: string;
  institution: string;
  year: string;
  description?: string | ReactNode;
};

const Education = () => {
  const educationItems: EducationItem[] = [
    {
      degree: "Diplôme d’ingénieur d’état en chimie industrielle",
      institution: "",
      year: "1993",
      description: "",
    },
    {
      degree: "Master en programmation neurolinguistique (PNL)",
      institution: "Centre canadien du développement humain",
      year: "2006",
      description: "",
    },
    {
      degree: "Coach agréé",
      institution: "Centre canadien du développement humain",
      year: "2006",
      description: "",
    },
    {
      degree: "Coach agréé en graphologie",
      institution: "Institut international du langage verbal et non verbal",
      year: "2006",
      description: "",
    },
    {
      degree: "Praticien agréé en graphologie, graphothérapie",
      institution: "",
      year: "2005",
      description: "",
    },
    {
      degree: "Formations professionnelles",
      institution: "",
      year: "2006-2010",
      description: (
        <ul className="list-disc pl-5 text-sm text-gray-600 mt-1">
          <li>
            Le suivi de l’application des normes ISO 9001, 14001, OHSAS 18001
          </li>
          <li>L’analyse des causes</li>
          <li>Traitement des non conformités</li>
          <li>Audit interne</li>
          <li>L’établissement du tableau de bord</li>
        </ul>
      ),
    },
  ];

  return (
    <div className="max-w-xl">
      <h2 className="text-3xl font-light mb-6 relative after:content-[''] after:absolute after:w-12 after:h-0.5 after:bg-black after:bottom-0 after:left-0 pb-2">
        Formation
      </h2>
      <div className="space-y-6">
        {educationItems.map((item, index) => (
          <div key={index} className="border-l-2 border-gray-200 pl-4">
            <h3 className="text-lg font-light">{item.degree}</h3>
            <p className="text-sm text-gray-500">
              {item.institution} • {item.year}
            </p>
            {item.description && (
              <p className="text-sm text-gray-600 mt-1">{item.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
