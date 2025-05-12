
import React from 'react';
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

type BookMeetingProps = {
  calendarLink?: string;
  buttonText?: string;
  buttonColor?: string;
};

const BookMeeting = ({
  calendarLink = "https://calendar.google.com/calendar/appointments",
  buttonText = "Book a Meeting",
  buttonColor
}: BookMeetingProps) => {
  return (
    <div className="flex flex-col items-center">
      <h3 className="text-xl font-light mb-4">Ready to discuss?</h3>
      <p className="text-gray-600 text-center mb-6 max-w-md">
        Schedule a convenient time for us to talk about your needs and how I can help bring your vision to life.
      </p>
      <Button
        onClick={() => window.open(calendarLink, '_blank')}
        className="flex items-center gap-2 rounded-full"
        style={buttonColor ? { backgroundColor: buttonColor } : {}}
      >
        <Calendar className="w-4 h-4" />
        <span>{buttonText}</span>
      </Button>
    </div>
  );
};

export default BookMeeting;
