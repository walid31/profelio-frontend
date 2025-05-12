
import { useState } from "react";

export const usePlanSelection = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [plan, setPlan] = useState<any>(null);
  const [customDomain, setCustomDomain] = useState("");
  const [isDomainChecking, setIsDomainChecking] = useState(false);
  const [isDomainAvailable, setIsDomainAvailable] = useState(false);
  
  const checkDomain = () => {
    if (!customDomain) return;
    
    setIsDomainChecking(true);
    
    // Simulate domain check with a delay
    setTimeout(() => {
      // Simple mock check - domains with "test" are unavailable
      const available = !customDomain.includes("test");
      setIsDomainAvailable(available);
      setIsDomainChecking(false);
    }, 1000);
  };

  return {
    selectedPlan,
    setSelectedPlan,
    plan,
    setPlan,
    customDomain,
    setCustomDomain,
    isDomainChecking,
    isDomainAvailable,
    checkDomain
  };
};
