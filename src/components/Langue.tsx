
import { Badge } from "@/components/ui/badge";

type LanguageLevel = {
  language: string;
  level: string;
};

const Langue = () => {
  const languages: LanguageLevel[] = [
    { language: "Arabe", level: "Langue maternelle" },
    { language: "Français", level: "Avancé" },
  ];

  return (
    <div className="max-w-xl">
      <h2 className="text-3xl font-light mb-6 relative after:content-[''] after:absolute after:w-12 after:h-0.5 after:bg-black after:bottom-0 after:left-0 pb-2">Langues</h2>
      <div className="space-y-4">
        {languages.map((lang) => (
          <div key={lang.language} className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-light">{lang.language}</h3>
              <p className="text-sm text-gray-500">{lang.level}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Langue;
