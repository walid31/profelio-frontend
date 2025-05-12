// Simple location service that provides location autocomplete
// using a free API or local data as fallback

import { CITY_SUGGESTIONS } from '@/constants/templateData';

// City search with local fallback
export const searchCities = async (query: string): Promise<string[]> => {
  if (!query || query.length < 2) return [];

  try {
    // First try with local data (faster and no API limit)
    const localMatches = CITY_SUGGESTIONS.filter(
      city => city.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 5);

    // If we have enough local results, use them
    if (localMatches.length >= 3) {
      return localMatches;
    }
    
    // Otherwise, try using the free Nominatim API (OpenStreetMap)
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&city=${encodeURIComponent(query)}&limit=5`,
      { headers: { 'Accept-Language': 'fr' } }
    );
    
    if (!response.ok) throw new Error('Network response was not ok');
    
    const data = await response.json();
    const apiResults = data
      .filter((item: any) => item.type === 'city' || item.type === 'administrative')
      .map((item: any) => item.display_name.split(',')[0]);
    
    // Combine and deduplicate results
    const combinedResults = [...new Set([...apiResults, ...localMatches])].slice(0, 5);
    return combinedResults;
  } catch (error) {
    console.error("Error fetching location data:", error);
    // Fallback to local data if API fails
    return CITY_SUGGESTIONS.filter(
      city => city.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 5);
  }
};
