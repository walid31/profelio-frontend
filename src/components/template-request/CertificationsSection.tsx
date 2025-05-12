
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Plus, Trash } from "lucide-react";
import { Certification } from "./types";

interface CertificationsSectionProps {
  certifications: Certification[];
  setCertifications: (certs: Certification[]) => void;
  addCertification: () => void;
  removeCertification: (index: number) => void;
  sectionIcon: React.ReactNode;
}

const CertificationsSection: React.FC<CertificationsSectionProps> = ({
  certifications,
  setCertifications,
  addCertification,
  removeCertification,
  sectionIcon,
}) => {
  return (
    <div>
      <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
        {sectionIcon}
        Section Certifications
      </h3>
      <div className="space-y-6">
        {certifications.map((cert, index) => (
          <div key={index} className="border rounded-md p-4 space-y-4 relative">
            <div className="absolute top-4 right-4">
              {certifications.length > 1 && (
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => removeCertification(index)}
                >
                  <Trash className="h-4 w-4 text-red-500" />
                </Button>
              )}
            </div>
            <h4 className="font-medium">Certification {index + 1}</h4>
            <div>
              <Label htmlFor={`cert-title-${index}`}>Titre</Label>
              <Input
                id={`cert-title-${index}`}
                value={cert.title}
                onChange={(e) => {
                  const updated = [...certifications];
                  updated[index].title = e.target.value;
                  setCertifications(updated);
                }}
                placeholder="Ex: AWS Certified Solutions Architect"
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor={`cert-issuer-${index}`}>Émetteur</Label>
              <Input
                id={`cert-issuer-${index}`}
                value={cert.issuer}
                onChange={(e) => {
                  const updated = [...certifications];
                  updated[index].issuer = e.target.value;
                  setCertifications(updated);
                }}
                placeholder="Ex: Amazon Web Services"
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor={`cert-year-${index}`}>Année d'obtention</Label>
              <Input
                id={`cert-year-${index}`}
                value={cert.year}
                onChange={(e) => {
                  const updated = [...certifications];
                  updated[index].year = e.target.value;
                  setCertifications(updated);
                }}
                placeholder="Ex: 2023"
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor={`cert-desc-${index}`}>Description</Label>
              <Textarea
                id={`cert-desc-${index}`}
                value={cert.description}
                onChange={(e) => {
                  const updated = [...certifications];
                  updated[index].description = e.target.value;
                  setCertifications(updated);
                }}
                placeholder="Description de cette certification..."
                className="mt-1"
                rows={2}
              />
            </div>
          </div>
        ))}
        
        <Button
          type="button"
          variant="outline"
          onClick={addCertification}
          className="w-full mt-2"
        >
          <Plus className="h-4 w-4 mr-2" /> Ajouter une certification
        </Button>
      </div>
    </div>
  );
};

export default CertificationsSection;
