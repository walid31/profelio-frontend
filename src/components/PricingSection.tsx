
import React from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-light mb-4">Nos Offres</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choisissez l'offre qui correspond à vos besoins. Sans engagement, avec un essai gratuit.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Basic Plan */}
          <div className="border border-gray-200 rounded-lg p-8 bg-white shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-medium mb-2">Basic</h3>
            <div className="text-3xl font-light mb-6">0€<span className="text-sm text-gray-500">/mois</span></div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-gray-600">
                <Check className="h-5 w-5 text-primary mr-2" />
                <span>Aperçu des templates de base</span>
              </li>
              <li className="flex items-center text-gray-600">
                <Check className="h-5 w-5 text-primary mr-2" />
                <span>Personnalisation limitée</span>
              </li>
              <li className="flex items-center text-gray-600">
                <Check className="h-5 w-5 text-primary mr-2" />
                <span>3 sections personnalisables</span>
              </li>
              <li className="flex items-center text-gray-600">
                <Check className="h-5 w-5 text-primary mr-2" />
                <span>Support par email</span>
              </li>
            </ul>
            <Button variant="outline" className="w-full">Démarrer</Button>
          </div>

          {/* Pro Plan */}
          <div className="border-2 border-primary border-solid rounded-lg p-8 bg-white shadow-md relative">
            <div className="absolute top-0 right-0 bg-primary text-white text-xs px-3 py-1 transform translate-y-[-50%]">
              RECOMMANDÉ
            </div>
            <h3 className="text-xl font-medium mb-2">Pro</h3>
            <div className="text-3xl font-light mb-6">29€<span className="text-sm text-gray-500">/mois</span></div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-gray-600">
                <Check className="h-5 w-5 text-primary mr-2" />
                <span>Tous les templates</span>
              </li>
              <li className="flex items-center text-gray-600">
                <Check className="h-5 w-5 text-primary mr-2" />
                <span>Domaine personnalisé</span>
              </li>
              <li className="flex items-center text-gray-600">
                <Check className="h-5 w-5 text-primary mr-2" />
                <span>6 sections personnalisables</span>
              </li>
              <li className="flex items-center text-gray-600">
                <Check className="h-5 w-5 text-primary mr-2" />
                <span>Intégration de calendrier</span>
              </li>
              <li className="flex items-center text-gray-600">
                <Check className="h-5 w-5 text-primary mr-2" />
                <span>Dashboard d'analytiques</span>
              </li>
              <li className="flex items-center text-gray-600">
                <Check className="h-5 w-5 text-primary mr-2" />
                <span>Support prioritaire</span>
              </li>
            </ul>
            <Button className="w-full">Essai Gratuit</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
