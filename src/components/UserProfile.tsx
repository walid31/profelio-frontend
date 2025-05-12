"use client";
import { Linkedin, Mail, Phone, Calendar } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const UserProfile = () => {
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
    <div className="col-span-12 md:col-span-4 bg-gray-50 sticky top-0 h-screen flex flex-col overflow-y-auto md:overflow-y-visible pt-[88px] md:pt-0">
      <div className="relative mb-10">
        {/* Bigger Profile Image */}
        <div className="transform translate-y-1/2">
          <div className="w-48 h-48 rounded-full mx-auto border-4 border-primary overflow-hidden shadow-md">
            <img
              src="/media/1.jpg"
              alt="Profile"
              className="object-cover w-full h-full rounded-full"
            />
          </div>
        </div>
      </div>

      <div className="mt-20 px-8 text-center space-y-4">
        <h1 className="text-4xl font-medium text-gray-900">Jon Doe</h1>
        <p className="text-md font-normal text-primary mt-1 min-h-[20px]">
          <span className="inline-block">{displayText}</span>
          <span className="animate-blink">|</span>
        </p>
        <p className="text-sm text-neutral-600">
          Alger, Algérie · Disponible à l'international
        </p>

        <div className="flex space-x-4 mt-4 justify-center">
          <a
            href="#"
            className="text-gray-400 hover:text-gray-900 transition-colors"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-gray-900 transition-colors"
          >
            <Phone size={18} />
          </a>

          <a
            href="#"
            className="text-gray-400 hover:text-gray-900 transition-colors"
          >
            <Mail size={18} />
          </a>
        </div>
        <div className="flex flex-col items-center py-5">
          <Button className="flex items-center rounded-full gap-2">
            <Calendar className="w-4 h-4" />
            <span>Réserver une session</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
