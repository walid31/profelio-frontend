
import React from 'react';
import { Badge } from "@/components/ui/badge";

type Project = {
  title: string;
  description: string;
  date: string;
  technologies: string[];
  imageUrl: string;
};

const Projects = () => {
  const projects: Project[] = [
    {
      title: "E-Commerce Redesign",
      description: "Complete overhaul of the user interface and checkout flow for an established online retailer, resulting in a 25% increase in conversion rates.",
      date: "2023",
      technologies: ["React", "Tailwind CSS", "Figma"],
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f"
    },
    {
      title: "Healthcare Dashboard",
      description: "Designed and developed an intuitive dashboard for healthcare providers to monitor patient data and schedule appointments.",
      date: "2022",
      technologies: ["TypeScript", "Chart.js", "Material UI"],
      imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
    },
    {
      title: "Mobile Banking App",
      description: "Created a seamless mobile banking experience with a focus on accessibility and security features.",
      date: "2021",
      technologies: ["React Native", "Redux", "Firebase"],
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
    }
  ];

  return (
    <div className="max-w-xl">
      <h2 className="text-3xl font-light mb-6 relative after:content-[''] after:absolute after:w-12 after:h-0.5 after:bg-black after:bottom-0 after:left-0 pb-2">Projects & Case Studies</h2>
      <div className="grid grid-cols-1 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg p-5 shadow-sm transition-all duration-300 hover:shadow-md">
            <div 
              className="h-48 rounded-lg mb-4 bg-cover bg-center transform transition-transform duration-300 hover:scale-[1.02]" 
              style={{ backgroundImage: `url(${project.imageUrl}?w=800&auto=format&fit=crop)` }}
            />
            <h3 className="text-lg font-light mb-1">{project.title}</h3>
            <p className="text-xs text-gray-500 mb-2">{project.date}</p>
            <p className="text-sm text-gray-600 mb-3">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <Badge key={idx} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
