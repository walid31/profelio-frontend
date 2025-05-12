import React, { useState, useEffect } from "react";

type Testimonial = {
  text: string;
  author: string;
  position?: string;
  company?: string;
};

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      text: "Working with Jane was an incredible experience. Her attention to detail and creative approach transformed our product's user experience significantly.",
      author: "Michael Johnson",
      position: "Product Manager",
      company: "Tech Innovations",
    },
    {
      text: "Jane's unique blend of technical knowledge and design sensibility made her the perfect partner for our rebranding project. Highly recommended!",
      author: "Sarah Williams",
      position: "Marketing Director",
      company: "Creative Solutions",
    },
    {
      text: "The redesign of our mobile app exceeded all expectations. Jane has a rare ability to understand both user needs and business objectives.",
      author: "David Chen",
      position: "CEO",
      company: "MobileFirst",
    },
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="max-w-xl">
      <h2 className="text-3xl font-light mb-6 relative after:content-[''] after:absolute after:w-12 after:h-0.5 after:bg-primary after:bottom-0 after:left-0 pb-2">
        Témoignages
      </h2>
      <div className="space-y-8">
        <blockquote className="bg-neutral-50 border-l-4 border-primary p-6 rounded-xl">
          <div className="mb-6">
            <p className="text-gray-600 italic">
              "{testimonials[activeIndex].text}"
            </p>
          </div>

          <div>
            <p className="font-medium text-sm">
              {testimonials[activeIndex].author}
            </p>
            {testimonials[activeIndex].position && (
              <p className="text-sm text-gray-500">
                {testimonials[activeIndex].position}
                {testimonials[activeIndex].company &&
                  ` at ${testimonials[activeIndex].company}`}
              </p>
            )}
          </div>
          <div className="flex justify-center mt-4 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full ${
                  index === activeIndex ? "bg-gray-800" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </blockquote>
      </div>

      {/* Client logos could be added here */}
      <div className="mt-8 grid grid-cols-3 gap-4">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="h-16 bg-white rounded-lg shadow-sm flex items-center justify-center text-gray-400"
          >
            Logo {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
