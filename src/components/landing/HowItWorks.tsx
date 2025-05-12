
import React from 'react';

const HowItWorks: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light mb-4">How It Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Getting started with Profelio is quick and easy. Follow these simple steps to create your professional profile.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="absolute -left-4 top-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-medium z-10">
                1
              </div>
              <div className="pt-2 pl-8 relative">
                {/* Vertical line for desktop */}
                <div className="hidden md:block absolute top-4 right-0 h-0.5 w-full bg-gray-200 -z-10"></div>
                <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
                  <div className="w-16 h-16 bg-gray-200 rounded mb-4 flex items-center justify-center text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium mb-2">Pick a Template</h3>
                  <p className="text-gray-600">
                    Choose from 8 tailored layouts designed for your profession.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="relative">
              <div className="absolute -left-4 top-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-medium z-10">
                2
              </div>
              <div className="pt-2 pl-8 relative">
                {/* Vertical line for desktop */}
                <div className="hidden md:block absolute top-4 right-0 h-0.5 w-full bg-gray-200 -z-10"></div>
                <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
                  <div className="w-16 h-16 bg-gray-200 rounded mb-4 flex items-center justify-center text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium mb-2">Personalize</h3>
                  <p className="text-gray-600">
                    Adjust your colors and fonts in real time to match your brand.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="relative">
              <div className="absolute -left-4 top-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-medium z-10">
                3
              </div>
              <div className="pt-2 pl-8">
                <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
                  <div className="w-16 h-16 bg-gray-200 rounded mb-4 flex items-center justify-center text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium mb-2">Publish & Share</h3>
                  <p className="text-gray-600">
                    Go live, embed your Google Calendar, and post your card anywhere.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
