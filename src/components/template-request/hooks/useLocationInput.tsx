
import { useState } from 'react';
import { searchCities } from '@/utils/locationService';

export const useLocationInput = (contactInfo: any, setContactInfo: (info: any) => void) => {
  const [locationSuggestions, setLocationSuggestions] = useState<string[]>([]);
  
  // Handle location input with suggestions
  const handleLocationInput = async (input: string) => {
    setContactInfo({...contactInfo, location: input});
    
    if (input.length > 1) {
      try {
        // Use the location service with API
        const suggestions = await searchCities(input);
        setLocationSuggestions(suggestions);
      } catch (error) {
        console.error("Error getting location suggestions:", error);
        setLocationSuggestions([]);
      }
    } else {
      setLocationSuggestions([]);
    }
  };
  
  return {
    locationSuggestions,
    handleLocationInput
  };
};
