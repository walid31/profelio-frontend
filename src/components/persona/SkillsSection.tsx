
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

type Skill = {
  name: string;
  level?: number;
  category?: string;
};

type SkillsSectionProps = {
  skills: Skill[];
  showLevel?: boolean;
  groupByCategory?: boolean;
};

const SkillsSection = ({ 
  skills, 
  showLevel = false, 
  groupByCategory = false 
}: SkillsSectionProps) => {
  
  const categories = groupByCategory 
    ? [...new Set(skills.map(skill => skill.category))]
    : [];
  
  if (groupByCategory && categories.length > 0) {
    return (
      <div className="space-y-8">
        {categories.map(category => {
          const categorySkills = skills.filter(skill => skill.category === category);
          return (
            <div key={category} className="space-y-4">
              {category && <h3 className="text-lg font-medium mb-3">{category}</h3>}
              {showLevel ? (
                <div className="space-y-3">
                  {categorySkills.map(skill => (
                    <div key={skill.name} className="space-y-1">
                      <div className="flex justify-between">
                        <span className="text-sm">{skill.name}</span>
                        {skill.level && <span className="text-sm text-gray-500">{skill.level}%</span>}
                      </div>
                      <Progress value={skill.level || 0} />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {categorySkills.map(skill => (
                    <Badge key={skill.name} variant="secondary">{skill.name}</Badge>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  }
  
  return (
    <div>
      {showLevel ? (
        <div className="space-y-3">
          {skills.map(skill => (
            <div key={skill.name} className="space-y-1">
              <div className="flex justify-between">
                <span className="text-sm">{skill.name}</span>
                {skill.level && <span className="text-sm text-gray-500">{skill.level}%</span>}
              </div>
              <Progress value={skill.level || 0} />
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-wrap gap-2">
          {skills.map(skill => (
            <Badge key={skill.name} variant="secondary">{skill.name}</Badge>
          ))}
        </div>
      )}
    </div>
  );
};

export default SkillsSection;
