
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Plus, Trash } from "lucide-react";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

interface TimelineSectionProps {
  timelineItems: TimelineItem[];
  setTimelineItems: (items: TimelineItem[]) => void;
  addTimelineItem: () => void;
  removeTimelineItem: (index: number) => void;
  sectionIcon: React.ReactNode;
}

const TimelineSection: React.FC<TimelineSectionProps> = ({
  timelineItems,
  setTimelineItems,
  addTimelineItem,
  removeTimelineItem,
  sectionIcon,
}) => {
  return (
    <div>
      <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
        {sectionIcon}
        Section Parcours professionnel
      </h3>
      <div className="space-y-6">
        {timelineItems.map((item, index) => (
          <div key={index} className="border rounded-md p-4 space-y-4 relative">
            <div className="absolute top-4 right-4">
              {timelineItems.length > 1 && (
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => removeTimelineItem(index)}
                >
                  <Trash className="h-4 w-4 text-red-500" />
                </Button>
              )}
            </div>
            <h4 className="font-medium">Expérience {index + 1}</h4>
            <div>
              <Label htmlFor={`timeline-year-${index}`}>Année / Période</Label>
              <Input
                id={`timeline-year-${index}`}
                value={item.year}
                onChange={(e) => {
                  const updated = [...timelineItems];
                  updated[index].year = e.target.value;
                  setTimelineItems(updated);
                }}
                placeholder="Ex: 2020 - 2022"
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor={`timeline-title-${index}`}>Titre</Label>
              <Input
                id={`timeline-title-${index}`}
                value={item.title}
                onChange={(e) => {
                  const updated = [...timelineItems];
                  updated[index].title = e.target.value;
                  setTimelineItems(updated);
                }}
                placeholder="Ex: Développeur Senior chez Entreprise"
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor={`timeline-desc-${index}`}>Description</Label>
              <Textarea
                id={`timeline-desc-${index}`}
                value={item.description}
                onChange={(e) => {
                  const updated = [...timelineItems];
                  updated[index].description = e.target.value;
                  setTimelineItems(updated);
                }}
                placeholder="Description de cette expérience..."
                className="mt-1"
                rows={3}
              />
            </div>
          </div>
        ))}
        
        <Button
          type="button"
          variant="outline"
          onClick={addTimelineItem}
          className="w-full mt-2"
        >
          <Plus className="h-4 w-4 mr-2" /> Ajouter une expérience
        </Button>
      </div>
    </div>
  );
};

export default TimelineSection;
