
import { useState, useEffect } from 'react';

export const useDomainManagement = (customDomain: string, step: number, selectedPlan: string | null) => {
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

  // Check domain when it changes
  useEffect(() => {
    if (customDomain && step === 3 && selectedPlan === 'pro') {
      const timer = setTimeout(() => {
        checkDomain();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [customDomain, step, selectedPlan]);

  return {
    isDomainChecking,
    isDomainAvailable,
    checkDomain
  };
};
