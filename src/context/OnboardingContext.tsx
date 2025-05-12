"use client";
import { createContext, useContext, useState, ReactNode, useEffect } from "react";

type ActivitySector =
  | "consultant"
  | "medecin"
  | "avocat"
  | "photographe"
  | "developpeur"
  | "architecte"
  | "professeur"
  | "cv";

type SubscriptionPlan = "profelio-branded" | "expert-branded";

type OnboardingData = {
  activitySector: ActivitySector | null;
  sectorData: Record<string, any>;
  subscriptionPlan: SubscriptionPlan | null;
  completed: boolean;
};

type OnboardingContextType = {
  onboardingData: OnboardingData;
  updateActivitySector: (sector: ActivitySector) => void;
  updateSectorData: (data: Record<string, any>) => void;
  updateSubscriptionPlan: (plan: SubscriptionPlan) => void;
  completeOnboarding: () => void;
  resetOnboarding: () => void;
};

const defaultOnboardingData: OnboardingData = {
  activitySector: null,
  sectorData: {},
  subscriptionPlan: null,
  completed: false,
};

const OnboardingContext = createContext<OnboardingContextType | undefined>(
  undefined
);

export const OnboardingProvider = ({ children }: { children: ReactNode }) => {
  const [onboardingData, setOnboardingData] = useState<OnboardingData>(defaultOnboardingData);

  useEffect(() => {
    // Check if window is defined (i.e., we're in the browser)
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("onboarding-data");
      if (saved) {
        setOnboardingData(JSON.parse(saved));
      }
    }
  }, []);

  const updateData = (updates: Partial<OnboardingData>) => {
    const newData = { ...onboardingData, ...updates };
    setOnboardingData(newData);

    // Only set to localStorage if we're in the browser
    if (typeof window !== "undefined") {
      localStorage.setItem("onboarding-data", JSON.stringify(newData));
    }
  };

  const updateActivitySector = (sector: ActivitySector) => {
    updateData({ activitySector: sector });
  };

  const updateSectorData = (data: Record<string, any>) => {
    updateData({ sectorData: { ...onboardingData.sectorData, ...data } });
  };

  const updateSubscriptionPlan = (plan: SubscriptionPlan) => {
    updateData({ subscriptionPlan: plan });
  };

  const completeOnboarding = () => {
    updateData({ completed: true });
  };

  const resetOnboarding = () => {
    setOnboardingData(defaultOnboardingData);
    if (typeof window !== "undefined") {
      localStorage.removeItem("onboarding-data");
    }
  };

  return (
    <OnboardingContext.Provider
      value={{
        onboardingData,
        updateActivitySector,
        updateSectorData,
        updateSubscriptionPlan,
        completeOnboarding,
        resetOnboarding,
      }}
    >
      {children}
    </OnboardingContext.Provider>
  );
};

export const useOnboarding = () => {
  const context = useContext(OnboardingContext);
  if (context === undefined) {
    throw new Error("useOnboarding must be used within an OnboardingProvider");
  }
  return context;
};
