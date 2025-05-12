import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";

import { LanguageProvider } from "@/context/LanguageContext";
import { AuthProvider } from "@/context/AuthContext";
import { OnboardingProvider } from "@/context/OnboardingContext";
import ReactQueryProvider from "@/providers/ReactQueryProvider";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Mon App",
  description: "Votre description ici...",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`${poppins.variable} antialiased`}>
        <ReactQueryProvider>
          <TooltipProvider>
            <AuthProvider>
              <OnboardingProvider>
                <LanguageProvider>
                  <Toaster />
                  <Sonner />
                  {children}
                </LanguageProvider>
              </OnboardingProvider>
            </AuthProvider>
          </TooltipProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
