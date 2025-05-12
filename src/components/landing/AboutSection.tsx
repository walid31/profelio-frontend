
import React from 'react';
import { Clock, Palette, Globe, Hexagon } from "lucide-react";

const AboutSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-light mb-4">À propos de TemplatesPro</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nous créons des templates professionnels personnalisables pour valoriser votre expertise
            et vous démarquer dans votre domaine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="mx-auto w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full mb-4">
              <Clock className="text-primary" size={24} />
            </div>
            <h3 className="text-xl font-medium mb-2">Gain de temps</h3>
            <p className="text-gray-600">
              Déployez votre site en minutes plutôt qu'en semaines avec nos templates prêts à l'emploi.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="mx-auto w-12 h-12 flex items-center justify-center bg-green-100 rounded-full mb-4">
              <Palette className="text-green-600" size={24} />
            </div>
            <h3 className="text-xl font-medium mb-2">Personnalisation</h3>
            <p className="text-gray-600">
              Adaptez les couleurs, polices et contenus à votre identité de marque.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="mx-auto w-12 h-12 flex items-center justify-center bg-purple-100 rounded-full mb-4">
              <Globe className="text-purple-600" size={24} />
            </div>
            <h3 className="text-xl font-medium mb-2">Multilingue</h3>
            <p className="text-gray-600">
              Support natif pour le français, l'anglais et l'arabe avec modes RTL.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="mx-auto w-12 h-12 flex items-center justify-center bg-amber-100 rounded-full mb-4">
              <Hexagon className="text-amber-600" size={24} />
            </div>
            <h3 className="text-xl font-medium mb-2">Design moderne</h3>
            <p className="text-gray-600">
              Interfaces élégantes et responsive adaptées à tous les appareils.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
