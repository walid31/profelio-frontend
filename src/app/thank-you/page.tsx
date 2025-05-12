import React from "react";
import { Button } from "@/components/ui/button";
import { Check, Mail } from "lucide-react";
import Link from "next/link";

const ThankYou = () => {
  return (
    <div className="container max-w-4xl mx-auto py-12 px-4">
      <div className="text-center space-y-6">
        <div className="bg-green-100 rounded-full p-4 inline-flex">
          <Check className="h-12 w-12 text-green-500" />
        </div>

        <h1 className="text-3xl font-bold">Merci pour votre demande!</h1>

        <p className="text-gray-600 max-w-lg mx-auto">
          Votre demande de template a été reçue avec succès. Un résumé de votre
          demande a été envoyé à votre adresse email, ainsi que les instructions
          pour finaliser votre paiement.
        </p>

        <div className="bg-blue-50 border border-blue-100 rounded-md p-6 max-w-md mx-auto">
          <div className="flex items-center space-x-2 text-blue-700 mb-2">
            <Mail className="h-5 w-5" />
            <span className="font-medium">Email de confirmation envoyé</span>
          </div>
          <p className="text-sm text-gray-600">
            Consultez votre boîte de réception pour compléter votre paiement et
            finaliser votre commande.
          </p>
        </div>

        <div className="pt-6">
          <p className="text-sm text-gray-500 mb-4">
            Notre équipe examinera votre demande et commencera à travailler sur
            votre template dès réception du paiement.
          </p>

          <div className="space-x-4">
            <Button asChild>
              <Link href="/">Retour à l'accueil</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/templates">Explorer d'autres templates</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
