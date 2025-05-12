
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const plans = [
  {
    id: "basic",
    name: "Basic",
    price: "0€",
    description: "Pour démarrer votre présence en ligne",
    features: ["2 sections", "Design responsive", "Mise en ligne sous 3 jours"],
    includedSections: ["about", "contact"],
    maxSections: 2,
  },
  {
    id: "pro",
    name: "Pro",
    price: "19000DZD",
    description: "Solution complète et personnalisée",
    features: [
      "Toutes les sections",
      "Design premium",
      "Mise en ligne sous 24h",
      "Optimisation SEO avancée",
      "Support prioritaire",
    ],
    includedSections: ["about", "contact", "services"],
    maxSections: 10,
  },
];

interface StepOneProps {
  selectedPlan: string | null;
  setSelectedPlan: (planId: string) => void;
  plan: any;
  setPlan: (plan: any) => void;
  nextStep: () => void;
  customDomain: string;
  setCustomDomain: (domain: string) => void;
  isDomainChecking: boolean;
  isDomainAvailable: boolean | null;
  checkDomain: () => void;
}

const StepOne: React.FC<StepOneProps> = ({
  selectedPlan,
  setSelectedPlan,
  plan,
  setPlan,
  nextStep,
  customDomain,
  setCustomDomain,
  isDomainChecking,
  isDomainAvailable,
  checkDomain
}) => {
  useEffect(() => {
    if (selectedPlan) {
      const planDetails = plans.find((p) => p.id === selectedPlan);
      if (planDetails) {
        setPlan(planDetails);
      }
    }
  }, [selectedPlan, setPlan]);

  const handleSelectPlan = (planId: string) => {
    setSelectedPlan(planId);
    console.log(selectedPlan);
    toast.success(`Plan ${planId} sélectionné`);
  };

  const handleUpgradeToPro = () => {
    setSelectedPlan("pro");
    const proDetails = plans.find(p => p.id === "pro");
    if (proDetails) {
      setPlan(proDetails);
    }
    toast.success("Plan Pro sélectionné");
  };

  const handleNextStep = () => {
    if (!selectedPlan) {
      toast.error("Veuillez sélectionner un plan");
      return;
    }
    
    // For Pro plan, verify domain if provided
    if (selectedPlan === "pro" && customDomain && isDomainAvailable !== true) {
      toast.error("Veuillez vérifier votre nom de domaine");
      return;
    }
    
    nextStep();
  };

  const isPremiumPlan = selectedPlan === "pro";

  return (
    <div className="space-y-8 py-6">
      <div>
        <h3 className="text-xl font-semibold mb-2">Choisissez votre plan</h3>
        <p className="text-gray-500">
          Sélectionnez le plan qui correspond le mieux à vos besoins
          professionnels.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {plans.map((planOption) => (
          <Card
            key={planOption.id}
            className={`cursor-pointer transition-all duration-300 ${
              selectedPlan === planOption.id
                ? "border-primary border-2 shadow-lg transform scale-[1.02]"
                : "border hover:border-primary/50"
            }`}
            onClick={() => handleSelectPlan(planOption.id)}
          >
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                {planOption.name}
                {selectedPlan === planOption.id && (
                  <Check className="h-5 w-5 text-primary" />
                )}
              </CardTitle>
              <CardDescription>{planOption.description}</CardDescription>
              <div className="text-2xl font-bold text-primary">
                {planOption.price}
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {planOption.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" /> {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      {selectedPlan === "basic" && (
        <div className="bg-amber-50 border border-amber-200 rounded-md p-4 mt-4">
          <p className="text-amber-800">
            <strong>Note:</strong> Le plan Basic vous permet d'ajouter
            uniquement les sections About et Contact. Pour plus de sections,
            veuillez passer à un plan supérieur.
          </p>
          <Button
            variant="outline"
            className="mt-2 bg-amber-100 hover:bg-amber-200 text-amber-800 border-amber-300"
            onClick={handleUpgradeToPro}
          >
            Mettre à niveau
          </Button>
        </div>
      )}
      
      {/* Domain section moved from StepThree - only shown for Pro plan */}
      {isPremiumPlan && (
        <Card className="p-6 mb-6">
          <h4 className="text-lg font-medium mb-2">Nom de domaine personnalisé</h4>
          <p className="text-gray-500 mb-4">
            Avec le plan Pro, vous pouvez choisir un nom de domaine personnalisé pour votre site.
          </p>
          
          <div className="space-y-4">
            <div>
              <Label htmlFor="domain-input">Votre nom de domaine souhaité</Label>
              <div className="flex mt-1">
                <Input
                  id="domain-input"
                  type="text"
                  className="rounded-r-none"
                  placeholder="votre-domaine"
                  value={customDomain}
                  onChange={(e) => setCustomDomain(e.target.value)}
                  disabled={isDomainChecking}
                />
                <Button
                  type="button"
                  className="rounded-l-none"
                  onClick={checkDomain}
                  disabled={!customDomain || isDomainChecking}
                >
                  {isDomainChecking ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Vérification...
                    </>
                  ) : (
                    "Vérifier"
                  )}
                </Button>
              </div>
            </div>
            
            {isDomainAvailable !== null && (
              <div className={`flex items-center p-3 rounded-md ${isDomainAvailable ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}`}>
                {isDomainAvailable ? (
                  <>
                    <Check className="h-5 w-5 mr-2" />
                    <p>Domaine disponible ! Vous pourrez utiliser <strong>{customDomain}</strong></p>
                  </>
                ) : (
                  <>
                    <span className="h-5 w-5 mr-2">✗</span>
                    <p>Ce domaine n'est pas disponible. Veuillez en essayer un autre.</p>
                  </>
                )}
              </div>
            )}
            
            <p className="text-sm text-gray-500">
              Note: Le domaine sera enregistré après validation de votre commande et paiement.
            </p>
          </div>
        </Card>
      )}
      
      <div className="flex justify-end">
        <Button onClick={handleNextStep}>Continuer</Button>
      </div>
    </div>
  );
};

export default StepOne;
