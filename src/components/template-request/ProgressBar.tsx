
import React from "react";

interface ProgressBarProps {
  step: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ step }) => {
  const totalSteps = 3;
  const progress = (step / totalSteps) * 100;

  return (
    <div className="mb-8">
      <div className="mb-2 flex justify-between text-xs">
        <span className="text-primary font-medium">Étape {step} sur {totalSteps}</span>
        <span className="text-gray-500">{Math.round(progress)}% complété</span>
      </div>
      <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="h-full bg-primary rounded-full transition-all duration-300 ease-in-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
