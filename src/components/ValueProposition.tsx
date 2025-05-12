
import React from 'react';
import { Clock, Calendar, Share2 } from 'lucide-react';

const ValueProposition: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-2">Installation Instantanée</h3>
              <p className="text-gray-600">
                Lancez votre page professionnelle en moins de 5 minutes, sans aucun code requis.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Calendar className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-2">Réservation Intégrée</h3>
              <p className="text-gray-600">
                Intégration Google Calendar pour une planification fluide des rendez-vous avec vos clients.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Share2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-2">Partagez Partout</h3>
              <p className="text-gray-600">
                Un clic pour publier votre profil sur LinkedIn, Facebook ou Twitter.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              "Plus de 500 experts font confiance à Profelio pour présenter leurs services, collecter des informations clients et planifier des réunions, le tout depuis une seule page personnalisable."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
