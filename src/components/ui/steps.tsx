
import React from "react";
import { cn } from "@/lib/utils";

interface StepsProps extends React.HTMLAttributes<HTMLDivElement> {
  currentStep?: number;
  children: React.ReactNode;
}

interface StepProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
}

const Steps = ({ currentStep = 0, className, children, ...props }: StepsProps) => {
  const steps = React.Children.toArray(children) as React.ReactElement<StepProps>[];

  return (
    <div className={cn("flex w-full space-x-2", className)} {...props}>
      {steps.map((step, idx) => {
        const isActive = idx === currentStep;
        const isPast = idx < currentStep;
        const isFuture = idx > currentStep;

        return (
          <div key={idx} className="flex flex-1 items-center space-x-2">
            {idx > 0 && (
              <div
                className={cn("h-0.5 flex-1 bg-gray-200", {
                  "bg-primary": isPast,
                })}
              />
            )}
            
            <div
              className={cn(
                "flex items-center justify-center rounded-full border-2 border-gray-300 bg-white p-2 h-10 w-10 transition-all duration-200",
                {
                  "border-primary bg-primary text-white": isActive,
                  "border-primary bg-primary text-white border-opacity-80": isPast,
                  "border-gray-300 text-gray-500": isFuture,
                }
              )}
            >
              {isPast ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <span>{idx + 1}</span>
              )}
            </div>
            
            <div className="flex-col hidden md:flex">
              <span
                className={cn("text-sm font-medium", {
                  "text-primary": isActive || isPast,
                  "text-gray-500": isFuture,
                })}
              >
                {step.props.title}
              </span>
              {step.props.description && (
                <span className="text-xs text-gray-500">
                  {step.props.description}
                </span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

const Step = ({ title, description, ...props }: StepProps) => {
  return null; // This is just a marker component
};

export { Steps, Step };
