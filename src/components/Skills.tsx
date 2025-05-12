
import React from 'react';
import { Badge } from "@/components/ui/badge";

type Skill = {
  name: string;
  level?: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  category?: string;
};

const Skills = () => {
  const categories = {
    design: "Design",
    development: "Development",
    soft: "Soft Skills"
  };

  const skills: Skill[] = [
    { name: "UX Research", level: "expert", category: "design" },
    { name: "UI Design", level: "expert", category: "design" },
    { name: "Figma", level: "expert", category: "design" },
    { name: "Adobe Suite", level: "advanced", category: "design" },
    { name: "React", level: "advanced", category: "development" },
    { name: "TypeScript", level: "intermediate", category: "development" },
    { name: "Tailwind CSS", level: "advanced", category: "development" },
    { name: "JavaScript", level: "expert", category: "development" },
    { name: "Project Management", level: "advanced", category: "soft" },
    { name: "Team Leadership", level: "intermediate", category: "soft" },
    { name: "Communication", level: "advanced", category: "soft" },
    { name: "Problem Solving", level: "expert", category: "soft" }
  ];

  // Group skills by category
  const skillsByCategory: Record<string, Skill[]> = {};
  skills.forEach(skill => {
    const category = skill.category || 'other';
    if (!skillsByCategory[category]) {
      skillsByCategory[category] = [];
    }
    skillsByCategory[category].push(skill);
  });

  return (
    <div className="max-w-xl">
      <h2 className="text-3xl font-light mb-6 relative after:content-[''] after:absolute after:w-12 after:h-0.5 after:bg-black after:bottom-0 after:left-0 pb-2">Skills & Expertise</h2>
      
      {Object.entries(skillsByCategory).map(([categoryKey, categorySkills]) => (
        <div key={categoryKey} className="mb-6">
          <h3 className="text-lg font-light mb-3">
            {categories[categoryKey as keyof typeof categories] || categoryKey}
          </h3>
          <div className="flex flex-wrap gap-2">
            {categorySkills.map((skill, index) => (
              <Badge 
                key={index} 
                variant={skill.level === 'expert' ? 'default' : 'outline'}
                className="px-3 py-1"
              >
                {skill.name}
              </Badge>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
