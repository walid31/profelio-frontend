"use client";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  Briefcase,
  Stethoscope,
  Scale,
  Camera,
  Code,
  Building,
  GraduationCap,
  FileText,
  Globe,
  ShoppingBag,
} from "lucide-react";
import Link from "next/link";

const personaTemplates = [
  {
    id: "consultant",
    title: "Consultant / Formateur / Coach",
    description:
      "Portfolio idéal pour les professionnels de l'accompagnement et de la formation.",
    icon: Briefcase,
    color: "#3b82f6",
    path: "/templates/consultant",
    stats: {
      bookings: "150+",
      coffeeChats: "95+",
    },
  },
  {
    id: "medecin",
    title: "Médecin 2.0",
    description:
      "Présence numérique pour les professionnels de santé en cabinet privé.",
    icon: Stethoscope,
    color: "#10b981",
    path: "/templates/medecin",
    stats: {
      bookings: "220+",
      coffeeChats: "75+",
    },
  },
  {
    id: "avocat",
    title: "Avocat Digital",
    description:
      "Vitrine web pour les avocats spécialisés en droit des affaires.",
    icon: Scale,
    color: "#8b5cf6",
    path: "/templates/avocat",
    stats: {
      bookings: "180+",
      coffeeChats: "65+",
    },
  },
  {
    id: "photographe",
    title: "Photographe Freelance",
    description: "Portfolio visuel pour les photographes B2B et événementiels.",
    icon: Camera,
    color: "#f59e0b",
    path: "/templates/photographe",
    stats: {
      bookings: "110+",
      coffeeChats: "90+",
    },
  },
  {
    id: "developpeur",
    title: "Développeur Freelance",
    description: "Showcase technique pour les développeurs full-stack.",
    icon: Code,
    color: "#ef4444",
    path: "/templates/developpeur",
    stats: {
      bookings: "140+",
      coffeeChats: "85+",
    },
  },
  {
    id: "architecte",
    title: "Architecte / Ingénieur",
    description:
      "Portfolio professionnel pour les bureaux d'études et d'architecture.",
    icon: Building,
    color: "#64748b",
    path: "/templates/architecte",
    stats: {
      bookings: "160+",
      coffeeChats: "60+",
    },
  },
  {
    id: "professeur",
    title: "Professeur Universitaire",
    description:
      "Profil académique pour enseignants et chercheurs universitaires.",
    icon: GraduationCap,
    color: "#0ea5e9",
    path: "/templates/professeur",
    stats: {
      bookings: "130+",
      coffeeChats: "110+",
    },
  },
  {
    id: "cv",
    title: "Demandeur d'emploi / CV",
    description:
      "CV digital moderne pour les chercheurs d'emploi et professionnels en reconversion.",
    icon: FileText,
    color: "#ec4899",
    path: "/templates/cv",
    stats: {
      bookings: "95+",
      coffeeChats: "120+",
    },
  },
  {
    id: "auto-entrepreneur",
    title: "Auto-Entrepreneur",
    description:
      "Idéal pour les indépendants et auto-entrepreneurs qui souhaitent présenter leurs services.",
    icon: ShoppingBag,
    color: "#f97316",
    path: "/templates/auto-entrepreneur",
    stats: {
      bookings: "125+",
      coffeeChats: "95+",
    },
  },
  {
    id: "rtl",
    title: "قالب باللغة العربية",
    description: "تصميم مخصص للغة العربية ولغات الشرق الأوسط الأخرى",
    icon: Globe,
    color: "#0ea5e9",
    path: "/templates/rtl",
    stats: {
      bookings: "80+",
      coffeeChats: "45+",
    },
  },
];

const Templates = () => {
  const router = useRouter();

  const requestTemplate = (templateId: string) => {
    router.push(`/request-template/${templateId}`);
  };

  return (
    <section id="templates" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-light mb-4">Our Templates</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Sélectionnez le modèle qui correspond à votre profession et
            personnalisez-le selon vos besoins.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {personaTemplates.map((template, index) => (
            <Card
              key={template.id}
              className="overflow-hidden hover:shadow-lg transition-all duration-300 group 
                          transform hover:scale-[1.02] opacity-0 animate-fade-up"
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: "forwards",
              }}
            >
              <div
                className="h-2"
                style={{ backgroundColor: template.color }}
              ></div>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div
                    className="p-2 rounded-full"
                    style={{ backgroundColor: `${template.color}20` }}
                  >
                    <template.icon size={24} color={template.color} />
                  </div>
                  <h3 className="text-xl font-medium ml-3">{template.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{template.description}</p>

                <div className="flex justify-between items-center">
                  <Link href={`/templates/${template.id}`} passHref prefetch={false}>
                    <Button
                      variant="outline"
                      className="flex items-center gap-2"
                      asChild
                    >
                      <span>
                        Preview Template{" "}
                        <ExternalLink size={16} className="ml-2 inline" />
                      </span>
                    </Button>
                  </Link>
                  <Button
                    variant="default"
                    onClick={() => requestTemplate(template.id)}
                  >
                    Select
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Templates;
