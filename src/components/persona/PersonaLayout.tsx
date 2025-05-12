"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import UserProfile from "@/components/UserProfile";
import MobileNav from "@/components/MobileNav";
import DesktopNav from "@/components/DesktopNav";
import Section from "@/components/Section";
import BookMeeting from "@/components/BookMeeting";
import RequestClientData from "@/components/RequestClientData";
import ThemeCustomizer from "@/components/ThemeCustomizer";
import WhatsAppBubble from "@/components/WhatsAppBubble";
import { useLanguage } from "@/context/LanguageContext";
import FloatingCTA from "../FloatingCTA";

export type PersonaSection = {
  id: string;
  title: string;
  icon?: React.ElementType;
  component: React.ReactNode;
};

type PersonaLayoutProps = {
  persona: string;
  sections: PersonaSection[];
};

const PersonaLayout: React.FC<PersonaLayoutProps> = ({ persona, sections }) => {
  const [activeSection, setActiveSection] = useState("about");
  const contentRef = useRef<HTMLDivElement>(null);
  const { isRTL } = useLanguage();

  // Generate section refs for navigation
  const sectionRefs: Record<string, React.RefObject<HTMLDivElement>> = {};
  sections.forEach((section) => {
    sectionRefs[section.id] = React.useRef<HTMLDivElement>(null);
  });

  return (
    <div
      className={`min-h-screen bg-gray-50 transition-all duration-300 ${
        isRTL ? "rtl" : "ltr"
      }`}
    >
      <Link
        href="/templates"
        className={`fixed top-4 ${
          isRTL ? "right-4" : "left-4"
        } z-50 bg-white p-2 rounded-full shadow-md flex items-center gap-2 text-sm`}
      >
        <ArrowLeft size={16} />
        <span className="hidden sm:inline">Retour aux templates</span>
      </Link>

      <div className="grid grid-cols-12 min-h-screen">
        <DesktopNav
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />

        <div className="col-span-12 md:col-span-4 bg-white border-r border-gray-200 md:sticky md:top-0 md:h-screen">
          <MobileNav
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />
          <UserProfile />
        </div>

        <div
          ref={contentRef}
          className="col-span-12 md:col-span-7 md:overflow-y-auto scroll-smooth"
        >
          {sections.map((section) => (
            <Section
              key={section.id}
              id={section.id}
              className={parseInt(section.id) % 2 === 0 ? "bg-white" : ""}
            >
              <div ref={sectionRefs[section.id]}>
                <h2 className="section-title">{section.title}</h2>
                {section.component}
              </div>
            </Section>
          ))}

          <Section id="contact" className="bg-gray-50">
            <h2 className="section-title">Contact</h2>
            <div className="max-w-xl">
              <p className="text-gray-600 mb-10">
                Je suis toujours disponible pour discuter de nouveaux projets,
                idées créatives ou opportunités de collaboration.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <BookMeeting />
                <RequestClientData />
              </div>
            </div>
          </Section>
        </div>
      </div>

      <ThemeCustomizer isTemplateMode={true} />
      <WhatsAppBubble />
      <FloatingCTA templateId={persona} />
    </div>
  );
};

export default PersonaLayout;
