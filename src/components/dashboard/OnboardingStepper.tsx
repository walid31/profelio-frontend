
import { Steps, Step } from "@/components/ui/steps";

type Props = {
  currentStep: number;
};

const OnboardingStepper = ({ currentStep }: Props) => (
  <Steps currentStep={currentStep} className="mb-10">
    <Step title="Secteur & Sections" />
    <Step title="Informations professionnelles" />
    <Step title="Abonnement" />
  </Steps>
);

export default OnboardingStepper;
