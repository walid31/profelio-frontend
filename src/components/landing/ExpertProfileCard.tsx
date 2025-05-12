
import React from 'react';
import { Button } from "@/components/ui/button";
import { Share2 } from "lucide-react";

const ExpertProfileCard: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light mb-4">Your Profile, Amplified</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Share your custom profile card on social media or send directly to prospects—instantly boosting your online credibility.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* Profile Card Preview */}
            <div className="w-full md:w-1/2 bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-primary h-12"></div>
              <div className="p-6">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gray-200 rounded-full mr-4 flex items-center justify-center text-gray-400">
                    DR
                  </div>
                  <div>
                    <h3 className="text-xl font-medium">Dr. Leila</h3>
                    <p className="text-gray-500">Médecin 2.0</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 mb-6">
                  <div className="bg-gray-100 px-3 py-1 rounded-full text-sm flex items-center">
                    <span className="font-medium text-gray-700 mr-1">250</span>
                    <span className="text-gray-500">Clients Booked</span>
                  </div>
                  <div className="bg-gray-100 px-3 py-1 rounded-full text-sm flex items-center">
                    <span className="font-medium text-gray-700 mr-1">40</span>
                    <span className="text-gray-500">Coffee Meets</span>
                  </div>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-500">Share Your Card</div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="ghost" className="rounded-full w-8 h-8 p-0">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                      </Button>
                      <Button size="sm" variant="ghost" className="rounded-full w-8 h-8 p-0">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                      </Button>
                      <Button size="sm" variant="ghost" className="rounded-full w-8 h-8 p-0">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Description */}
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-light mb-4">Connect with your audience</h3>
              <p className="text-gray-600 mb-6">
                Your Profelio profile is more than just a website—it's a complete digital presence for your professional brand.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span>Instantly share your profile card to boost visibility</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span>Showcase your expertise with social proof</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span>Display real-time stats to build credibility</span>
                </li>
              </ul>
              <Button className="gap-2">
                Share Your Profile <Share2 size={16} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertProfileCard;
