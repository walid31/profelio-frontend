"use client";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, AlertTriangle } from "lucide-react";
import Link from "next/link";

const NotFound = () => {
  useEffect(() => {
    // Ensure this only runs on the client side (browser)
    if (typeof window !== "undefined") {
      console.error("404 Error: User attempted to access non-existent route");

      // Redirect to templates page if accessing /template-request directly
      if (window.location.pathname === "/template-request") {
        window.location.href = "/templates";
      }
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="text-center max-w-md mx-auto p-6 bg-white rounded-lg shadow-sm">
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-red-100 rounded-full">
            <AlertTriangle size={42} className="text-red-500" />
          </div>
        </div>

        <h1 className="text-3xl font-semibold mb-2">Oops! Page introuvable</h1>
        <p className="text-gray-600 mb-8">
          Nous ne trouvons pas la page que vous cherchez. Elle a peut-être été
          déplacée ou n'existe plus.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild variant="default">
            <Link href="/" className="flex items-center gap-2" prefetch={false}>
              <Home size={18} />
              Retour à l'accueil
            </Link>
          </Button>

          <Button asChild variant="outline">
            <Link href="/templates" prefetch={false}>Explorer les templates</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
