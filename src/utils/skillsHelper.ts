
import { SKILLS_BY_SECTOR as RAW_SKILLS } from '../constants/sectorSkills';
import { Option } from "@/components/ui/multi-select";

// Convert raw string arrays to Option arrays
const convertToOptions = (skills: string[]): Option[] => {
  return skills.map(skill => ({
    value: skill.toLowerCase().replace(/\s+/g, '-'),
    label: skill
  }));
};

// Define skills by sector as Option arrays for use with MultiSelect
export const SKILLS_BY_SECTOR: Record<string, Option[]> = Object.entries(RAW_SKILLS).reduce(
  (acc, [sector, skills]) => ({
    ...acc,
    [sector]: convertToOptions(skills as string[])
  }), 
  {} as Record<string, Option[]>
);

// Helper function to get skills for a specific sector
export const getSkillsBySector = (sector: string): Option[] => {
  const sectorKey = sector.toLowerCase() as keyof typeof SKILLS_BY_SECTOR;
  
  if (sectorKey in SKILLS_BY_SECTOR) {
    return SKILLS_BY_SECTOR[sectorKey];
  }
  
  console.warn(`Skills for sector "${sector}" not found. Returning empty array.`);
  return [];
};

// Make SKILLS_BY_SECTOR available globally for legacy code
if (typeof window !== 'undefined') {
  (window as any).SKILLS_BY_SECTOR = SKILLS_BY_SECTOR;
}
