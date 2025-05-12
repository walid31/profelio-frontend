
import React from 'react';
import { Button } from './ui/button';
import Link from 'next/link';

const CTASection = () => {
  return (
    <div className="bg-primary">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Prêt à lancer votre présence professionnelle en ligne ?
            </h2>
            <p className="mt-4 text-lg text-white/80 max-w-xl">
              Commencez dès maintenant avec l'un de nos templates premium et construisez le site web qui correspond parfaitement à votre activité.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button className="bg-white text-primary hover:bg-gray-100 px-6 py-6 text-lg">
                <Link href="/templates">Voir tous les templates</Link>
              </Button>
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-primary/80 px-6 py-6 text-lg">
                <Link href="#">Contactez-nous</Link>
              </Button>
            </div>
          </div>
          <div className="mt-10 lg:mt-0">
            <div className="flex justify-center lg:justify-end space-x-6">
              <div className="bg-white p-4 rounded-xl shadow-lg transform -rotate-3">
                <div className="w-32 h-48 sm:w-48 sm:h-64 bg-gray-200 rounded-md overflow-hidden">
                  <div className="h-1/2 bg-primary/10">
                    <div className="h-6 bg-primary/20 mx-3 mt-3 rounded"></div>
                    <div className="h-4 bg-primary/20 mx-3 mt-2 rounded w-2/3"></div>
                  </div>
                  <div className="p-3">
                    <div className="h-3 bg-gray-300 rounded mb-2"></div>
                    <div className="h-3 bg-gray-300 rounded mb-2"></div>
                    <div className="h-3 bg-gray-300 rounded w-2/3"></div>
                  </div>
                </div>
              </div>
              <div className="hidden sm:block bg-white p-4 rounded-xl shadow-lg transform rotate-3">
                <div className="w-32 h-48 sm:w-48 sm:h-64 bg-gray-200 rounded-md overflow-hidden">
                  <div className="h-1/2 bg-purple-100">
                    <div className="h-6 bg-purple-200 mx-3 mt-3 rounded"></div>
                    <div className="h-4 bg-purple-200 mx-3 mt-2 rounded w-2/3"></div>
                  </div>
                  <div className="p-3">
                    <div className="h-3 bg-gray-300 rounded mb-2"></div>
                    <div className="h-3 bg-gray-300 rounded mb-2"></div>
                    <div className="h-3 bg-gray-300 rounded w-2/3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
