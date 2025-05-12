
import React from "react";

interface TemplateRequestLayoutProps {
  children: React.ReactNode;
}

const TemplateRequestLayout: React.FC<TemplateRequestLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {children}
      </div>
    </div>
  );
};

export default TemplateRequestLayout;
