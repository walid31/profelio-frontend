import React from "react";
import { CheckCircle, Layout, Settings, Menu } from "lucide-react";

const features = [
  {
    title: "Templates personnalisables",
    description:
      "Chaque template peut être entièrement personnalisé selon vos besoins et votre identité visuelle.",
    icon: <Layout className="h-8 w-8 text-primary" />,
  },
  {
    title: "Optimisés pour les mobiles",
    description:
      "Tous nos templates s'adaptent parfaitement aux différents appareils pour une expérience optimale.",
    icon: <Settings className="h-8 w-8 text-primary" />,
  },
  {
    title: "Facile à configurer",
    description:
      "Aucune compétence technique n'est requise pour mettre en place votre site web professionnel.",
    icon: <Menu className="h-8 w-8 text-primary" />,
  },
  {
    title: "Support inclus",
    description:
      "Notre équipe est là pour vous accompagner dans la création de votre site web professionnel.",
    icon: <CheckCircle className="h-8 w-8 text-primary" />,
  },
];

const FeatureSection = () => {
  return (
    <div className="py-16 md:py-24 bg-white ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 ">
            Tout ce dont vous avez besoin pour réussir en ligne
          </h2>
          <p className="mt-4 text-lg text-gray-600  max-w-2xl mx-auto">
            Nos templates sont conçus pour vous aider à développer votre
            activité professionnelle et à atteindre vos objectifs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl transition-all hover:shadow-md"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900  mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
