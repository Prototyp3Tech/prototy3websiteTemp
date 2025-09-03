// import heroRightSvg from '../assets/svgs/heroRight.svg';
import heroRightSvg2 from '../assets/svgs/heroSVG2.svg';

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
    <section className="text-gray-800 py-8 sm:py-12 md:py-20 min-h-screen relative overflow-hidden" id="hero">
      
      {/* <div className="mx-auto px-3 sm:px-5 grid grid-cols-1 lg:grid-cols-2 gridFixer gap-8 lg:gap-12"> */}
      <div className="mx-auto px-3 sm:px-5 absolute w-[40vw] left-[18vw] top-[30%]">
        <div className="flex justify-center order-2 lg:order-1">
          <div className="transWhite p-4 sm:p-6 md:p-12 pb-4 rounded-xl sm:rounded-2xl shadow-2xl heroLeft w-full max-w-lg lg:max-w-none">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight text-gray-700">
              <span className="text-orange-500 font-extrabold">{'{'}</span> From classroom to collaboration.
            </h1>
            <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 text-gray-600 leading-relaxed">
              Prototyp3 bridges the gap between school and the real world. Get paired with projects from real companies. Work with their team and mentors to grow your confidence as a builder one project at a time.
            </p>
            <button 
              onClick={onOpenInterestForm}
              className="group text-white border-none py-3 sm:py-4 px-6 sm:px-8 rounded-lg font-semibold text-sm sm:text-base cursor-pointer transition-all duration-300 mb-4 sm:mb-6 w-full sm:w-fit hover:sm:w-80 hover:shadow-lg hover:-translate-y-0.5"
              style={{ backgroundColor: '#1F2937' }}
              onMouseEnter={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#FA6400'}
              onMouseLeave={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#1F2937'}
            >
              <span className="transition-all duration-300">
                <span className="group-hover:hidden">Fill out Interest Form</span>
                <span className="hidden group-hover:inline">{'{ Fill out Interest Form }'}</span>
              </span>
            </button>
            <p className="text-xs sm:text-sm text-gray-400 text-center m-0">
              Let us know if you're interested to register when Fall 2025 cohorts go live.
            </p>
          </div>
        </div>
        
        <div className="absolute w-[28vw] right-[-25vw] bottom-[0%]">
          {illustrationSrc ? (
            <img 
              src={illustrationSrc} 
              alt={illustrationAlt}
              className="max-w-full h-auto rounded-xl sm:rounded-2xl w-full max-w-md lg:max-w-none"
            />
          ) : (
            <img 
              src={heroRightSvg2} 
              alt={illustrationAlt}
              className="max-w-full h-auto rounded-xl sm:rounded-2xl heroRight w-full max-w-md lg:max-w-none"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
