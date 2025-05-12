
import React from 'react';

export type TimelineEvent = {
  id?: number;
  title: string;
  description: string;
  date?: string;
  year?: string; // Add compatibility with year prop
  icon?: React.ReactNode;
};

type TimelineSectionProps = {
  events?: TimelineEvent[];
  items?: TimelineEvent[]; // For backward compatibility
};

const TimelineSection = ({ events, items }: TimelineSectionProps) => {
  // Use events or items prop for backward compatibility
  const timelineEvents = events || items || [];
  
  return (
    <div className="max-w-xl">
      <div className="space-y-6">
        {timelineEvents.map((event, index) => (
          <div key={event.id || index} className="relative pl-6">
            {/* Timeline line */}
            <div className="absolute left-0 top-0 h-full">
              <div className="h-full w-0.5 bg-gray-200"></div>
            </div>
            
            {/* Timeline dot */}
            <div className="absolute left-[-8px] top-1.5 w-4 h-4 rounded-full border-2 border-primary bg-white z-10"></div>
            
            <div className="pb-6">
              {(event.date || event.year) && (
                <p className="text-sm text-gray-500 mb-1">{event.date || event.year}</p>
              )}
              <h3 className="text-lg font-medium mb-2">{event.title}</h3>
              <p className="text-gray-600">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelineSection;
