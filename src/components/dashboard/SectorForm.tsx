
import React from 'react';
import { Card } from "@/components/ui/card";
import { Briefcase, Code, Stethoscope, Users, Image, Book, FileText, Building } from "lucide-react";

type SectorFormProps = {
  sector: string;
  setSector: (s: string) => void;
  sectors: { value: string; label: string; color?: string }[];
};

const sectorIcons: Record<string, React.ReactNode> = {
  consultant: <Briefcase className="mr-2" />,
  medecin: <Stethoscope className="mr-2" />,
  avocat: <FileText className="mr-2" />,
  photographe: <Image className="mr-2" />,
  developpeur: <Code className="mr-2" />,
  architecte: <Building className="mr-2" />,
  professeur: <Book className="mr-2" />,
  cv: <Users className="mr-2" />,
};

const SectorPicker: React.FC<SectorFormProps> = ({ sector, setSector, sectors }) => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    {sectors.map((s) => (
      <Card
        key={s.value}
        className={`cursor-pointer group p-4 transition-all border-2 
        ${sector === s.value ? 'border-primary bg-primary/10' : 'border-gray-200'}
        hover:shadow-md flex items-center justify-center min-h-[65px]`}
        onClick={() => setSector(s.value)}
      >
        <span className="flex items-center text-lg font-medium">
          {sectorIcons[s.value] || null}
          <span className={sector === s.value ? "text-primary" : ""}>{s.label}</span>
        </span>
      </Card>
    ))}
  </div>
);

export default SectorPicker;
