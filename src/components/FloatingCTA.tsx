import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

interface FloatingCTAProps {
  templateId: string;
  variant?: "light" | "dark";
}

const FloatingCTA: React.FC<FloatingCTAProps> = ({
  templateId,
  variant = "light",
}) => {
  return (
    <div
      className={`fixed bottom-6 right-6 z-50 ${
        variant === "dark" ? "text-white" : ""
      }`}
    >
      <Link href={`/request-template/${templateId}`}>
        <Button
          size="lg"
          className={`shadow-lg animate-bounce-slow ${
            variant === "dark" ? "bg-white text-primary hover:bg-gray-100" : ""
          }`}
        >
          <span>Choisir ce template</span>
          <ExternalLink className="ml-2 h-4 w-4" />
        </Button>
      </Link>
    </div>
  );
};

export default FloatingCTA;
