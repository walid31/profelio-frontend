
import React from 'react';
import { Button } from "@/components/ui/button";
import { useLanguage } from '@/context/LanguageContext';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex gap-2">
      <Button 
        variant={language === 'fr' ? 'default' : 'outline'} 
        size="sm" 
        onClick={() => setLanguage('fr')}
        className="w-10"
      >
        FR
      </Button>
      <Button 
        variant={language === 'en' ? 'default' : 'outline'} 
        size="sm" 
        onClick={() => setLanguage('en')}
        className="w-10"
      >
        EN
      </Button>
      <Button 
        variant={language === 'ar' ? 'default' : 'outline'} 
        size="sm" 
        onClick={() => setLanguage('ar')}
        className="w-10"
      >
        AR
      </Button>
    </div>
  );
};

export default LanguageSwitcher;
