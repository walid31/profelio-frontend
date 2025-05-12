
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, ChevronRight } from "lucide-react";

interface HeroSectionProps {
  onDownloadCatalog?: () => void;
  onBrowseTemplates?: () => void;
}

const HeroSection = ({ onDownloadCatalog, onBrowseTemplates }: HeroSectionProps = {}) => (
  <section className="relative bg-gradient-to-r from-[#1A1F2C] to-[#6E59A5] text-white py-28 overflow-hidden">
    {/* Background Elements */}
    <div className="absolute inset-0 bg-[url('/media/bg.jpg')] bg-cover bg-center opacity-10"></div>
    <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl"></div>
    <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#9b87f5]/10 rounded-full filter blur-3xl"></div>
    
    <div className="container mx-auto px-4 relative z-10">
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-1 rounded-full mb-6 border border-white/20">
          <span className="text-sm font-medium text-white/90">Nouvelle génération de sites professionnels</span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
          Votre présence pro <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-blue-300">en quelques clics</span>
        </h1>
        
        <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
          Profelio propose la création instantanée de profils professionnels 
          <span className="block mt-2 font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#D6BCFA] to-[#9b87f5]">
            Sans code. Sans effort. Sans délai.
          </span>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white gap-2 text-lg shadow-xl hover:translate-y-[-2px] transition-all"
            onClick={onBrowseTemplates}
          >
            Découvrir les modèles
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="text-lg shadow-xl hover:bg-white/20 hover:translate-y-[-2px] transition-all border-white/40 hover:border-white"
            onClick={onDownloadCatalog}
          >
            <Download className="h-4 w-4 mr-2" />
            Voir un exemple
          </Button>
        </div>
        
        <div className="mt-16 flex items-center justify-center">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-12 text-white/70">
            <div className="flex items-center gap-2 group">
              <span className="bg-white/10 w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium">1</span>
              <span>Choisissez un modèle</span>
              <ChevronRight className="hidden md:block h-4 w-4" />
            </div>
            
            <div className="flex items-center gap-2 group">
              <span className="bg-white/10 w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium">2</span>
              <span>Personnalisez le contenu</span>
              <ChevronRight className="hidden md:block h-4 w-4" />
            </div>
            
            <div className="flex items-center gap-2 group">
              <span className="bg-white/10 w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium">3</span>
              <span>Publiez en ligne</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    {/* Wave shape at the bottom */}
    <div className="absolute bottom-0 left-0 right-0">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full">
        <path fill="#f9fafb" fillOpacity="1" d="M0,64L80,58.7C160,53,320,43,480,48C640,53,800,75,960,80C1120,85,1280,75,1360,69.3L1440,64L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"></path>
      </svg>
    </div>
  </section>
);

export default HeroSection;
