"use client";
import NavLink from "./NavLink";
import { useEffect, useState } from "react";
import { User, Briefcase, Mail, LayoutDashboard } from "lucide-react";

const MobileNav = ({
  activeSection,
  setActiveSection,
}: {
  activeSection: string;
  setActiveSection: (section: string) => void;
}) => {
  const roles = [
    "Ingénieur en chimie industrielle",
    "Coach",
    "Formatrice",
    "Consultante en développement personnel",
  ];
  const [displayText, setDisplayText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timer: NodeJS.Timeout;

    if (isTyping) {
      if (displayText.length < currentRole.length) {
        timer = setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        }, 100);
      } else {
        timer = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      if (displayText.length > 0) {
        timer = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50);
      } else {
        setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, roleIndex, isTyping]);
  return (
    <div className="md:hidden fixed top-0 left-0 w-full bg-white z-10 border-b border-gray-200 px-4 py-2">
      <div className="flex justify-between items-center">
        <div className="">
          <h1 className="text-3xl font-medium text-gray-900">Mourad Muslim</h1>
          <p className="text-md font-light text-primary mt-1 min-h-[30px]">
            <span className="inline-block">{displayText}</span>
            <span className="animate-blink">|</span>
          </p>
        </div>
      </div>

      {/* Add horizontal NavLinks below the text */}
      <div className="flex justify-center space-x-7 py-4 border-t border-gray-200">
        <NavLink
          sectionId="home"
          icon={User}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
        <NavLink
          sectionId="about"
          icon={Briefcase}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
        <NavLink
          sectionId="education"
          icon={LayoutDashboard}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
        <NavLink
          sectionId="contact"
          icon={Mail}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
      </div>
    </div>
  );
};

export default MobileNav;
