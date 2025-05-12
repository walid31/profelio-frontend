
import React, { useState, useEffect } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { CheckCircle, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CollapsibleSectionProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  isRequired?: boolean;
  isSelected: boolean;
  onToggle?: () => void;
  canToggle?: boolean;
  children?: React.ReactNode;
}

const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({
  title,
  description,
  icon,
  isRequired = false,
  isSelected,
  onToggle,
  canToggle = true,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Auto-open accordion when section is selected
  useEffect(() => {
    if (isSelected) {
      setIsOpen(true);
    }
  }, [isSelected]);

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onToggle && !isRequired) {
      onToggle();
      // Open automatically when selected
      if (!isSelected) {
        setIsOpen(true);
      }
    }
  };

  return (
    <div className={`mb-4 border rounded-lg ${isSelected ? "border-primary bg-primary/5" : "border-gray-200"}`}>
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <div className="flex items-center justify-between p-4">
          <div className="flex items-start gap-3 flex-1">
            <div className="mt-1">
              {isSelected ? (
                <CheckCircle className="h-5 w-5 text-primary" />
              ) : (
                icon || <div className="h-5 w-5" />
              )}
            </div>
            <div>
              <h3 className="text-base font-medium flex items-center">
                {title}
                {isRequired && (
                  <span className="ml-2 bg-primary/10 text-primary text-xs py-0.5 px-2 rounded-full">
                    Requis
                  </span>
                )}
              </h3>
              {description && <p className="text-sm text-gray-500">{description}</p>}
            </div>
          </div>
          <div className="flex items-center gap-3">
            {canToggle && (
              <Button
                type="button"
                variant={isSelected ? "default" : "outline"}
                size="sm"
                onClick={handleToggle}
                disabled={isRequired && isSelected}
                className={isRequired && isSelected ? "opacity-50 cursor-not-allowed" : ""}
              >
                {isSelected ? "Sélectionné" : "Sélectionner"}
              </Button>
            )}
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm" className="p-0 h-8 w-8">
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "transform rotate-180" : ""}`}
                />
                <span className="sr-only">Toggle</span>
              </Button>
            </CollapsibleTrigger>
          </div>
        </div>
        <CollapsibleContent className="px-4 pb-4">
          <div className="pt-2 border-t">{children}</div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default CollapsibleSection;
