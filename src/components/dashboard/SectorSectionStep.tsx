
import React from "react";
import SectorPicker from "./SectorForm";
import SectionInput from "./SectionInput";
import { Button } from "@/components/ui/button";
import { 
  Award, 
  BookText, 
  Briefcase,
  Calendar,
  FileText, 
  GalleryHorizontal,
  GraduationCap,
  ListCheck,
  MessageSquare,
  User
} from "lucide-react";

type Props = {
  sector: string;
  setSector: (s: string) => void;
  sectors: { value: string; label: string; color?: string }[];
  availableSections: string[];
  selectedSections: string[];
  setSelectedSections: (s: string[]) => void;
  sectionContents: { [key: string]: any };
  setSectionContents: (c: { [key: string]: any }) => void;
  handleSectionChecked: (section: string) => void;
  handleSectionContentChange: (section: string, value: any) => void;
  SECTION_CONTENT_FIELDS: Record<string, string>;
  handleStep1Next: () => void;
  competenceOptions: { value: string; label: string }[];
};

// Section icons for visual enhancement
const sectionIcons: Record<string, React.ReactNode> = {
  "À propos": <User size={16} />,
  "Contact": <MessageSquare size={16} />,
  "Services": <ListCheck size={16} />,
  "Compétences": <Award size={16} />,
  "Projets": <Briefcase size={16} />,
  "Témoignages": <MessageSquare size={16} />,
  "Galerie": <GalleryHorizontal size={16} />,
  "Processus de travail": <ListCheck size={16} />,
  "Parcours": <Calendar size={16} />,
  "Affaires notables": <FileText size={16} />,
  "Publications": <BookText size={16} />,
  "Portfolio": <GalleryHorizontal size={16} />,
  "Certifications": <GraduationCap size={16} />
};

const SectorSectionStep: React.FC<Props> = ({
  sector,
  setSector,
  sectors,
  availableSections,
  selectedSections,
  setSelectedSections,
  sectionContents,
  setSectionContents,
  handleSectionChecked,
  handleSectionContentChange,
  SECTION_CONTENT_FIELDS,
  handleStep1Next,
  competenceOptions,
}) => (
  <div className="bg-white rounded-lg shadow-sm p-8">
    <h2 className="text-xl font-bold mb-4">Secteur d'activité & Sections du profil</h2>
    <div className="mb-6">
      <label className="block mb-2 font-medium">Sélectionnez votre secteur <span className="text-red-500">*</span></label>
      <SectorPicker
        sector={sector}
        setSector={setSector}
        sectors={sectors}
      />
    </div>
    <div>
      <label className="block mb-2 font-medium">Sélectionnez les sections à afficher</label>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {availableSections.map(section => (
          <div key={section} className="flex items-center space-x-2">
            <input
              type="checkbox"
              id={`section-${section}`}
              checked={selectedSections.includes(section)}
              onChange={() => handleSectionChecked(section)}
              disabled={section === "À propos" || section === "Contact"}
              className="rounded border-gray-300"
            />
            <label 
              htmlFor={`section-${section}`} 
              className={`flex items-center gap-1 ${(section === "À propos" || section === "Contact") ? "font-medium text-primary" : ""}`}
            >
              {sectionIcons[section]}
              <span>{section}</span>
              {(section === "À propos" || section === "Contact") && 
                <span className="text-xs text-red-500 ml-1">(Obligatoire)</span>
              }
            </label>
          </div>
        ))}
      </div>
      <div className="mt-6 space-y-6">
        {selectedSections.map(section => (
          <div key={section} className="border p-4 rounded-md">
            <h3 className="font-medium mb-3 flex items-center gap-2">
              {sectionIcons[section]}
              {SECTION_CONTENT_FIELDS[section]}
            </h3>
            <SectionInput
              section={section}
              value={sectionContents[section] || (section === 'Compétences' ? {skills: []} : "")}
              onChange={(val) => handleSectionContentChange(section, val)}
              options={section === "Compétences" ? competenceOptions : undefined}
            />
          </div>
        ))}
      </div>
    </div>
    <div className="flex justify-end mt-8">
      <Button onClick={handleStep1Next}>Suivant</Button>
    </div>
  </div>
);

export default SectorSectionStep;
