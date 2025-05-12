import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Globe, AlertCircle } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type SubscriptionPlanProps = {
  onSelect: (plan: string) => void;
  loading?: boolean;
};

const PLANS = [
  {
    id: 'profelio-branded',
    name: 'Gratuit',
    price: 0,
    priceDesc: 'Profil sous profelio.com',
    benefits: [
      "Accès à tous les templates",
      "Domaine en .profelio.com",
      "Prise de RDV limitée",
      "Support standard"
    ],
    color: 'bg-primary'
  },
  {
    id: 'expert-branded',
    name: 'Pro',
    price: 29,
    priceDesc: 'Domaine personnalisé',
    benefits: [
      "Domaine personnalisé inclus",
      "Template white-label",
      "Prise de RDV illimitée",
      "Analytics avancés",
      "Support prioritaire"
    ],
    color: 'bg-green-500'
  }
];

// Free domain API (simulates .fr/.com availability, use a real API for prod)
async function realCheckDomain(domain: string) {
  // We'll use domainsdb.info for demonstration (may be offline - replace with a good free one if desired)
  if (!domain) return null;
  try {
    const zone = domain.split('.').pop();
    const res = await fetch(`https://api.domainsdb.info/v1/domains/search?domain=${domain}&zone=${zone}`);
    const data = await res.json();
    if (!data.domains || data.domains.length === 0) return true;
    return false;
  } catch {
    // fallback simulation: unavailable if ends in popular TLD
    return !['.com', '.fr', '.io', '.dev'].some(ext => domain.endsWith(ext));
  }
}

const SubscriptionPlan: React.FC<SubscriptionPlanProps> = ({ onSelect, loading }) => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [customDomain, setCustomDomain] = useState('');
  const [isDomainAvailable, setIsDomainAvailable] = useState<boolean | null>(null);
  const [checkingDomain, setCheckingDomain] = useState(false);

  useEffect(() => {
    if (selectedPlan === "expert-branded" && customDomain) {
      const timer = setTimeout(() => {
        // On typing, auto check after debounce
        handleDomainCheck();
      }, 800);
      return () => clearTimeout(timer);
    }
  // eslint-disable-next-line
  }, [customDomain, selectedPlan]);

  async function handleDomainCheck() {
    setCheckingDomain(true);
    const available = await realCheckDomain(customDomain.trim());
    setIsDomainAvailable(available);
    setCheckingDomain(false);
  }

  function canConfirm() {
    if (!selectedPlan) return false;
    if (selectedPlan === 'profelio-branded') return true;
    if (selectedPlan === 'expert-branded') return isDomainAvailable === true;
    return false;
  }

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PLANS.map(plan => (
          <Card
            key={plan.id}
            className={`cursor-pointer group p-5 transition-all border-2 shadow-lg rounded-xl relative
            ${selectedPlan === plan.id ? "border-primary ring-4 ring-primary/10 scale-105" : "border-gray-200"}
            hover:shadow-xl`}
            onClick={() => setSelectedPlan(plan.id)}
          >
            <div className={`absolute top-3 right-3 rounded-full px-3 py-1 text-xs font-bold uppercase
            ${plan.id === "expert-branded" ? "bg-green-600 text-white" : "bg-primary text-white"}`}>
              {plan.id === "expert-branded" ? "Premium" : "Inclus"}
            </div>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center">
                <span className="text-2xl font-semibold">{plan.name}</span>
                <span className="ml-3 text-primary">
                  {plan.id === "profelio-branded" ? "🌟" : "🚀"}
                </span>
              </CardTitle>
              <CardDescription className="mt-1 text-base">{plan.priceDesc}</CardDescription>
              <div className="text-4xl font-bold my-2 text-black flex items-end gap-2">
                {plan.price === 0 ? "0€" : `${plan.price}€`}
                <span className="text-base text-gray-400 font-normal mb-1">/mois</span>
              </div>
            </CardHeader>
            <CardContent className="pb-3 pt-1">
              <ul className="space-y-2">
                {plan.benefits.map(benefit => (
                  <li key={benefit} className="flex items-center text-green-700 font-medium">
                    <span className="mr-2">✔️</span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Domain check for premium */}
      {selectedPlan === "expert-branded" && (
        <Card className="border border-muted p-6">
          <CardHeader>
            <CardTitle className="text-lg">Vérifier la disponibilité de votre domaine</CardTitle>
            <CardDescription>Choisissez le domaine personnalisé de votre futur profil.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <input
                type="text"
                className="flex-1 border rounded p-2"
                placeholder="votre-domaine.fr"
                value={customDomain}
                onChange={e => setCustomDomain(e.target.value)}
                disabled={checkingDomain}
              />
              <Button
                variant="outline"
                disabled={checkingDomain || !customDomain}
                onClick={handleDomainCheck}
              >
                {checkingDomain ? "Vérification..." : "Vérifier"}
              </Button>
              {isDomainAvailable === true && (
                <span className="ml-3 text-green-600 font-bold">✅ Disponible</span>
              )}
              {isDomainAvailable === false && (
                <span className="ml-3 text-red-600 font-bold">❌ Indisponible</span>
              )}
            </div>
          </CardContent>
        </Card>
      )}

      <div className="flex justify-center mt-4">
        <Button
          className="w-full md:w-auto min-w-[200px] text-lg"
          disabled={!canConfirm() || loading}
          onClick={() =>
            onSelect(JSON.stringify({ plan: selectedPlan, domain: selectedPlan === "expert-branded" ? customDomain.trim() : null }))
          }
        >
          {loading ? "Traitement..." : "Confirmer & Continuer"}
        </Button>
      </div>
    </div>
  );
};

export default SubscriptionPlan;
