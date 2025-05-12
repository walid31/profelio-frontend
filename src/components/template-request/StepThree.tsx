
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Check, X, Loader2 } from "lucide-react";
import { Label } from "@/components/ui/label";

interface StepThreeProps {
  plan: any;
  setPlan?: (plan: any) => void; // Make this optional since we won't use it
  customDomain: string;
  setCustomDomain: (domain: string) => void;
  isDomainChecking: boolean;
  isDomainAvailable: boolean | null;
  checkDomain: () => void;
  prevStep: () => void;
  nextStep: () => void;
}

const StepThree: React.FC<StepThreeProps> = ({
  plan,
  customDomain,
  setCustomDomain,
  isDomainChecking,
  isDomainAvailable,
  checkDomain,
  prevStep,
  nextStep
}) => {
  const isPremiumPlan = plan?.id === "pro";
  
  return (
    <div className="py-6">
      <h3 className="text-xl font-semibold mb-4">Finaliser votre demande</h3>
      
      {/* Domain section - only shown for Premium plans */}
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
                    <X className="h-5 w-5 mr-2" />
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
      
      <div className="flex justify-between">
        <Button variant="outline" onClick={prevStep}>
          Retour
        </Button>
        <Button 
          onClick={nextStep} 
          disabled={isPremiumPlan && (!customDomain || isDomainAvailable !== true)}
        >
          Continuer
        </Button>
      </div>
    </div>
  );
};

export default StepThree;
