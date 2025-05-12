"use client";
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Settings, Brush, Type } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { hexToHSL } from '@/lib/utils';

type ThemeSettings = {
  primaryColor: string;
  typographyScale: 'small' | 'medium' | 'large';
  layoutWidth: 'boxed' | 'full';
  fontFamily: string;
};

type ThemeCustomizerProps = {
  isTemplateMode?: boolean;
};

const ThemeCustomizer = ({ isTemplateMode = true }: ThemeCustomizerProps) => {
  const [open, setOpen] = useState(isTemplateMode);
  const [theme, setTheme] = useState<ThemeSettings>({
    primaryColor: '#FF6B00', // Default blue
    typographyScale: 'medium',
    layoutWidth: 'boxed',
    fontFamily: 'Poppins'
  });

  const colorOptions = [
    { name: 'Orange', value: '#FF6B00' },
    { name: 'Blue', value: '#3b82f6' },
    { name: 'Purple', value: '#8b5cf6' },
    { name: 'Green', value: '#10b981' },
    { name: 'Red', value: '#ef4444' },
    { name: 'Amber', value: '#f59e0b' },
    { name: 'Slate', value: '#64748b' }
  ];

  const fontOptions = [
    { name: 'Poppins', value: 'Poppins, sans-serif' },
    { name: 'Roboto', value: 'Roboto, sans-serif' },
    { name: 'Lato', value: 'Lato, sans-serif' },
    { name: 'Open Sans', value: 'Open Sans, sans-serif' },
    { name: 'Montserrat', value: 'Montserrat, sans-serif' },
    { name: 'Merriweather', value: 'Merriweather, serif' }
  ];

  useEffect(() => {
    // Load saved theme from session storage
    const savedTheme = sessionStorage.getItem('portfolio-theme');
    if (savedTheme) {
      setTheme(JSON.parse(savedTheme));
    }
  }, []);

  useEffect(() => {
    const hslValue = hexToHSL(theme.primaryColor);

    // Apply theme changes and save to session storage
    document.documentElement.style.setProperty('--primary-color', hslValue);

    // Apply font family
    document.documentElement.style.setProperty('--font-family', theme.fontFamily);
    document.body.style.fontFamily = theme.fontFamily;
    
    sessionStorage.setItem('portfolio-theme', JSON.stringify(theme));
  }, [theme]);

  const handleColorChange = (color: string) => {
    setTheme({...theme, primaryColor: color});
  };

  const handleCustomColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTheme({...theme, primaryColor: e.target.value});
  };

  return (
    <div className={`fixed ${isTemplateMode ? 'top-4' : 'bottom-4'} right-4 z-50`}>
      <Collapsible open={open} onOpenChange={setOpen}>
        <CollapsibleTrigger asChild>
          <Button variant="outline" size="icon" className="rounded-full shadow-md bg-white">
            <Settings className="h-4 w-4" />
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-2">
          <div className="bg-white rounded-lg shadow-lg p-4 w-80">
            <h3 className="font-medium mb-3">Personnaliser</h3>
            
            <Tabs defaultValue="colors">
              <TabsList className="grid grid-cols-2 mb-4">
                <TabsTrigger value="colors" className="flex items-center gap-2">
                  <Brush className="h-4 w-4" />
                  <span>Couleurs</span>
                </TabsTrigger>
                <TabsTrigger value="typography" className="flex items-center gap-2">
                  <Type className="h-4 w-4" />
                  <span>Typographie</span>
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="colors">
                <div className="mb-4">
                  <label className="text-sm text-gray-500 block mb-2">Couleur principale</label>
                  <div className="flex flex-wrap gap-2">
                    {colorOptions.map(color => (
                      <button
                        key={color.value}
                        className={`w-6 h-6 rounded-full ${
                          theme.primaryColor === color.value ? 'ring-2 ring-offset-2 ring-gray-400' : ''
                        }`}
                        style={{ backgroundColor: color.value }}
                        onClick={() => handleColorChange(color.value)}
                        aria-label={`Set color to ${color.name}`}
                      />
                    ))}
                  </div>
                </div>
                
                <div className="mb-4">
                  <label className="text-sm text-gray-500 block mb-2">Couleur personnalisée (HEX)</label>
                  <div className="flex items-center gap-2">
                    <Input 
                      type="text" 
                      value={theme.primaryColor}
                      onChange={handleCustomColorChange}
                      className="h-8 text-sm"
                      maxLength={7}
                    />
                    <div 
                      className="w-6 h-6 rounded-full"
                      style={{ backgroundColor: theme.primaryColor }}
                    />
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="typography">
                <div className="mb-4">
                  <label className="text-sm text-gray-500 block mb-2">Police</label>
                  <div className="flex flex-col gap-2">
                    {fontOptions.map(font => (
                      <button
                        key={font.name}
                        className={`text-left px-3 py-2 rounded-md border ${
                          theme.fontFamily === font.name ? 'border-primary bg-primary/10' : 'border-transparent hover:bg-gray-100'
                        }`}
                        style={{ fontFamily: font.value }}
                        onClick={() => setTheme({...theme, fontFamily: font.name})}
                      >
                        {font.name}
                      </button>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
            
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default ThemeCustomizer;
