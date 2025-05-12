
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
              <h3 className="text-xl font-medium mb-2">Instant Setup</h3>
              <p className="text-gray-600">
                Launch your branded page in under 5 minutes—no coding required.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Calendar className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-2">Built-in Booking</h3>
              <p className="text-gray-600">
                Google Calendar integration for seamless client scheduling.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Share2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-2">Share Everywhere</h3>
              <p className="text-gray-600">
                One click to publish your profile card on LinkedIn, Facebook, or Twitter.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              "Over 500 experts trust Profelio to showcase their services, collect client intake, and book meetings—all from a single customizable page."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
