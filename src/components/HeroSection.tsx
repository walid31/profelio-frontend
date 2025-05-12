import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-white to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-10 md:py-20 lg:py-28">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="space-y-2">
              <div className="space-y-2">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 -tight">
                  Des templates professionnels pour votre présence en ligne
                </h1>
                <p className="text-lg text-gray-600 max-w-2xl font-normal">
                  Créez rapidement votre site web professionnel avec nos
                  templates élégants et personnalisables.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="px-6 py-6 text-lg bg-primary hover:bg-primary/50 text-white">
                  Découvrir nos templates
                </Button>
              </div>

              <div className="flex items-center text-sm text-gray-600">
                <div className="flex -space-x-2 mr-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white"
                    ></div>
                  ))}
                </div>
                <span>+2,000 professionnels nous font confiance</span>
              </div>
            </div>

            <div className="relative h-64 md:h-auto rounded-xl overflow-hidden shadow-2xl transform md:translate-y-0">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-xl"></div>
              <img
                src="/media/1.jpg"
                alt="Templates professionnels"
                className="w-full h-full object-cover rounded-xl mix-blend-overlay opacity-90"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur-md p-6 rounded-lg shadow-lg max-w-xs">
                  <p className="text-sm font-medium text-gray-900 mb-1">
                    Template le plus populaire
                  </p>
                  <h3 className="text-lg font-bold text-gray-900">
                    Consultant Pro
                  </h3>
                  <p className="text-gray-600 text-sm mt-2">
                    Idéal pour les consultants et experts indépendants
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
