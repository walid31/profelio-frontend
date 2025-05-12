
import React from "react";
import { Button } from "@/components/ui/button";
import SpecialtyMultiSelect from "./SpecialtyMultiSelect";

type Props = {
  professionalInfo: any;
  handleProfessionalInfoChange: (field: string, value: any) => void;
  handleStep2Submit: (e: React.FormEvent) => void;
  setCurrentStep: (n: number) => void;
  availableSpecialties: string[];
};

const ProfessionalInfoStep: React.FC<Props> = ({
  professionalInfo,
  handleProfessionalInfoChange,
  handleStep2Submit,
  setCurrentStep,
  availableSpecialties
}) => (
  <form className="bg-white rounded-lg shadow-sm p-8" onSubmit={handleStep2Submit}>
    <h2 className="text-xl font-bold mb-4">Informations professionnelles complémentaires</h2>
    <div className="mb-4">
      <label className="block font-medium mb-1">Titre professionnel</label>
      <input type="text" className="w-full border rounded p-2" value={professionalInfo.title || ""} onChange={e => handleProfessionalInfoChange("title", e.target.value)} placeholder="Ex: Coach Agile, Médecin Généraliste..." required />
    </div>
    <div className="mb-4">
      <label className="block font-medium mb-1">Spécialités / Domaines</label>
      <SpecialtyMultiSelect 
        value={professionalInfo.specialty || []}
        onChange={arr => handleProfessionalInfoChange("specialty", arr)}
        options={availableSpecialties}
        placeholder="Sélectionnez ou ajoutez vos spécialités"
      />
    </div>
    <div className="mb-4">
      <label className="block font-medium mb-1">Téléphone</label>
      <input type="text" className="w-full border rounded p-2" value={professionalInfo.phone || ""} onChange={e => handleProfessionalInfoChange("phone", e.target.value)} placeholder="+33..." />
    </div>
    <div className="mb-4">
      <label className="block font-medium mb-1">Lien Google Maps (adresse cabinet/bureau)</label>
      <input type="url" className="w-full border rounded p-2" value={professionalInfo.maps || ""} onChange={e => handleProfessionalInfoChange("maps", e.target.value)} placeholder="https://maps.google.com/..." />
    </div>
    <div className="mb-4 grid grid-cols-1 md:grid-cols-3 gap-2">
      <div>
        <label className="block font-medium mb-1">LinkedIn</label>
        <input type="url" className="w-full border rounded p-2" value={professionalInfo.linkedin || ""} onChange={e => handleProfessionalInfoChange("linkedin", e.target.value)} placeholder="https://linkedin.com/in/..." />
      </div>
      <div>
        <label className="block font-medium mb-1">Instagram</label>
        <input type="url" className="w-full border rounded p-2" value={professionalInfo.instagram || ""} onChange={e => handleProfessionalInfoChange("instagram", e.target.value)} placeholder="https://instagram.com/..." />
      </div>
      <div>
        <label className="block font-medium mb-1">Site web</label>
        <input type="url" className="w-full border rounded p-2" value={professionalInfo.website || ""} onChange={e => handleProfessionalInfoChange("website", e.target.value)} placeholder="https://..." />
      </div>
    </div>
    <div className="mb-4">
      <label className="block font-medium mb-1">Lien Calendrier (Prise de RDV)</label>
      <input type="url" className="w-full border rounded p-2" value={professionalInfo.calendarLink || ""} onChange={e => handleProfessionalInfoChange("calendarLink", e.target.value)} placeholder="Lien Calendly, Google Calendar..." />
    </div>
    <div className="mb-4">
      <label className="block font-medium mb-1">Lien Formulaire Client</label>
      <input type="url" className="w-full border rounded p-2" value={professionalInfo.clientFormLink || ""} onChange={e => handleProfessionalInfoChange("clientFormLink", e.target.value)} placeholder="Typeform, Google Forms..." />
    </div>
    <div className="flex justify-between mt-6">
      <Button variant="outline" type="button" onClick={() => setCurrentStep(0)}>Retour</Button>
      <Button type="submit">Suivant</Button>
    </div>
  </form>
);

export default ProfessionalInfoStep;
