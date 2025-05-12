
import React from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PricingSection: React.FC = () => {
  const navigate = useNavigate();
  
  const handleStartBasic = () => {
    navigate("/template-request", { state: { selectedPlan: "basic" } });
  };
  
  const handleStartPro = () => {
    navigate("/template-request", { state: { selectedPlan: "pro" } });
  };

  return (
    <section id="pricing" className="py-16 bg-gray-100">
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
                <span>2 sections (About, Contact)</span>
              </li>
              <li className="flex items-center text-gray-600">
                <Check className="h-5 w-5 text-primary mr-2" />
                <span>Personnalisation limitée</span>
              </li>
              <li className="flex items-center text-gray-600">
                <Check className="h-5 w-5 text-primary mr-2" />
                <span>Support par email</span>
              </li>
              <li className="flex items-center text-gray-600">
                <Check className="h-5 w-5 text-primary mr-2" />
                <span>Mise en ligne sous 3 jours</span>
              </li>
            </ul>
            <Button variant="outline" className="w-full" onClick={handleStartBasic}>Démarrer</Button>
          </div>

          {/* Pro Plan */}
          <div className="border-2 border-primary rounded-lg p-8 bg-white shadow-md relative">
            <div className="absolute top-0 right-0 bg-primary text-white text-xs px-3 py-1 transform translate-y-[-50%]">
              RECOMMANDÉ
            </div>
            <h3 className="text-xl font-medium mb-2">Pro</h3>
            <div className="text-3xl font-light mb-6">19000DZD<span className="text-sm text-gray-500">/an</span></div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-gray-600">
                <Check className="h-5 w-5 text-primary mr-2" />
                <span>Toutes les sections</span>
              </li>
              <li className="flex items-center text-gray-600">
                <Check className="h-5 w-5 text-primary mr-2" />
                <span>Domaine personnalisé</span>
              </li>
              <li className="flex items-center text-gray-600">
                <Check className="h-5 w-5 text-primary mr-2" />
                <span>Design premium</span>
              </li>
              <li className="flex items-center text-gray-600">
                <Check className="h-5 w-5 text-primary mr-2" />
                <span>Intégration de calendrier</span>
              </li>
              <li className="flex items-center text-gray-600">
                <Check className="h-5 w-5 text-primary mr-2" />
                <span>Support prioritaire</span>
              </li>
              <li className="flex items-center text-gray-600">
                <Check className="h-5 w-5 text-primary mr-2" />
                <span>Mise en ligne sous 24h</span>
              </li>
            </ul>
            <Button className="w-full" onClick={handleStartPro}>Démarrer</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
