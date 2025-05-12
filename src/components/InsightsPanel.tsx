
import { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, BarChart3 } from "lucide-react";

// Mock data for the analytics
const data = [
  {
    name: 'Jan',
    visits: 400,
    pageviews: 600,
  },
  {
    name: 'Feb',
    visits: 500,
    pageviews: 800,
  },
  {
    name: 'Mar',
    visits: 600,
    pageviews: 1000,
  },
  {
    name: 'Apr',
    visits: 800,
    pageviews: 1200,
  },
  {
    name: 'May',
    visits: 700,
    pageviews: 900,
  },
  {
    name: 'Jun',
    visits: 900,
    pageviews: 1300,
  },
];

const InsightsPanel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(true); // Mock authentication state
  
  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="fixed top-4 right-4 z-50">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger asChild>
          <Button variant="outline" className="flex items-center gap-2 rounded-md shadow-md">
            <BarChart3 className="h-4 w-4" />
            <span>Insights</span>
            {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-2">
          <div className="bg-white rounded-lg shadow-lg p-4 w-80 sm:w-96">
            <h3 className="font-medium mb-3">Analytics Dashboard</h3>
            
            <div className="mb-4 h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={data}
                  margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Area type="monotone" dataKey="visits" stackId="1" stroke="#8884d8" fill="#8884d8" />
                  <Area type="monotone" dataKey="pageviews" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-3 rounded-md">
                <div className="text-sm text-gray-500">Total Visits</div>
                <div className="text-xl font-medium">3,900</div>
              </div>
              <div className="bg-gray-50 p-3 rounded-md">
                <div className="text-sm text-gray-500">Avg. Time</div>
                <div className="text-xl font-medium">1m 42s</div>
              </div>
              <div className="bg-gray-50 p-3 rounded-md">
                <div className="text-sm text-gray-500">Bounce Rate</div>
                <div className="text-xl font-medium">42%</div>
              </div>
              <div className="bg-gray-50 p-3 rounded-md">
                <div className="text-sm text-gray-500">Form Submissions</div>
                <div className="text-xl font-medium">86</div>
              </div>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default InsightsPanel;
