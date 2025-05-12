"use client";
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

type RequestClientDataProps = {
  formLink?: string;
  buttonText?: string;
  buttonColor?: string;
};

const RequestClientData = ({
  formLink = "https://forms.google.com/",
  buttonText = "Submit Your Brief",
  buttonColor = "#FF6B00"
}: RequestClientDataProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col items-center">
      <h3 className="text-xl font-light mb-4">Need to share details?</h3>
      <p className="text-gray-600 text-center mb-6 max-w-md">
        Fill out a quick form with your project requirements so I can better understand how to assist you.
      </p>
      <Button
        onClick={openModal}
        variant="outline"
        className="flex items-center gap-2 rounded-full"
        style={buttonColor ? { borderColor: buttonColor, color: buttonColor } : {}}
      >
        <FileText className="w-4 h-4" />
        <span>{buttonText}</span>
      </Button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4" onClick={closeModal}>
          <div className="bg-white rounded-lg p-1 w-full max-w-3xl h-3/4" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-end p-2">
              <button 
                onClick={closeModal}
                className="bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center text-gray-800"
              >
                ×
              </button>
            </div>
            <iframe 
              src={formLink} 
              title="Client Data Form" 
              className="w-full h-full border-0 rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default RequestClientData;
