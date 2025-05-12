import React from "react";

interface HeaderSectionProps {
  templateId?: string;
}

const HeaderSection: React.FC<HeaderSectionProps> = ({ templateId }) => {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-2 mb-2">
        <img
          src="/media/logo/icon-orange.png"
          alt="Profelio Logo"
          className="h-12"
        />
        <img
          src="/media/logo/orange.png"
          alt="Profelio Logo"
          className="h-12"
        />
      </div>
      <h1 className="text-3xl font-bold mb-2">
        Demande de template {templateId}
      </h1>
      <p className="text-gray-600">
        Construisez votre profil professionnel en quelques étapes simples
      </p>
    </div>
  );
};

export default HeaderSection;
