"use client";

import React, { useRef, useEffect, useState } from 'react';

type SectionProps = {
  id: string;
  className?: string;
  children: React.ReactNode;
};

const Section = ({ id, className = '', children }: SectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      id={id}
      ref={sectionRef}
      className={`px-8 py-12 transition-opacity duration-700 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default Section;
