import heroRightSvg from '../assets/svgs/heroRight.svg';

interface HeroSectionProps {
  illustrationSrc?: string;
  illustrationAlt?: string;
  onOpenInterestForm: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ 
  illustrationSrc, 
  illustrationAlt = "Prototyp3 platform illustration",
  onOpenInterestForm
}) => {

  return (
    <section className="text-gray-800 py-12 md:py-20 min-h-screen flex items-center relative overflow-hidden">
      
      <div className="mx-auto px-5 grid grid-cols-1 lg:grid-cols-2 gridFixer">
        <div className="flex justify-center order-2 lg:order-1">
          <div className="transWhite p-6 pb-4 md:p-12 md:pb-4 rounded-2xl shadow-2xl heroLeft">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-gray-700">
              <span className="text-orange-500 font-extrabold">{'{'}</span> From classroom to collaboration.
            </h1>
            <p className="text-base md:text-lg mb-8 text-gray-600 leading-relaxed">
              Prototyp3 bridges the gap between school and the real world. Get paired with projects from real companies. Work with their team and mentors to grow your confidence as a builder one project at a time.
            </p>
            <button 
              onClick={onOpenInterestForm}
              className="group bg-blue-700 text-white border-none py-4 px-8 rounded-lg font-semibold text-base cursor-pointer transition-all duration-300 mb-6 w-fit hover:w-80 hover:bg-orange-500 hover:shadow-lg hover:-translate-y-0.5"
            >
              <span className="transition-all duration-300">
                <span className="group-hover:hidden">Fill out Interest Form</span>
                <span className="hidden group-hover:inline">{'{ Fill out Interest Form }'}</span>
              </span>
            </button>
            <p className="text-sm text-gray-400 text-center m-0">
              Let us know if you're interested to register when Fall 2025 cohorts go live.
            </p>
          </div>
        </div>
        
        <div className="flex order-1 lg:order-2">
          {illustrationSrc ? (
            <img 
              src={illustrationSrc} 
              alt={illustrationAlt}
              className="max-w-full h-auto rounded-2xl"
            />
          ) : (
            <img 
              src={heroRightSvg} 
              alt={illustrationAlt}
              className="max-w-full h-auto rounded-2xl heroRight"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
