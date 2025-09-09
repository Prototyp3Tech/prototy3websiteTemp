// import heroRightSvg from '../assets/svgs/heroRight.svg';
import heroRightSvg2 from '../assets/svgs/heroSVG2.svg';

interface HeroSectionProps {
  illustrationSrc?: string;
  illustrationAlt?: string;
  onOpenInterestForm: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({  
  illustrationAlt = "Prototyp3 platform illustration",
  onOpenInterestForm
}) => {

  return (
    <section className="text-gray-800 sm:pt-20 pt-0 min-h-screen relative overflow-hidden" id="hero">
      <div className="mx-auto px-3 px-5 pt-5 max-w-[80vw] md:ml-[15vw]">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh] gap-[0px]">
          {/* Content Section */}
          <div className="flex justify-center align-top w-auto max-w-none max-h-[60vh] breakpointFix lg:max-h-[55vh] lg:justify-start order-1 lg:order-1 z-10">
            <div className="transWhite p-4 sm:p-6 md:p-8 lg:p-12 rounded-xl sm:rounded-2xl shadow-2xl">
              <div className="flex items-start">
                <span className="text-orange-500 font-extrabold text-4xl lg:text-6xl mr-4">{'{'}</span>
                <div className="flex-1">
                  <h1 className="breakpointFix text-4xl lg:text-6xl font-bold leading-tight text-gray-700" style={{color: '#1F2937'}}>
                   Zero Experience? 
                  </h1> 
                  <h1 className="breakpointFix text-4xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight text-gray-700 -mt-2" style={{color: '#1F2937'}}>
                   Perfect. Let's Build.
                  </h1>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 text-gray-600 leading-relaxed" style={{color: '#4C545F'}}>
                    Prototyp3 bridges the gap between school and the real world. Get paired with projects from real companies. Work with their team and mentors to grow your confidence as a builder one project at a time.
                  </p>
                  <button 
                    onClick={onOpenInterestForm}
                    className="group text-white border-none py-3 sm:py-4 px-6 sm:px-8 rounded-lg font-semibold text-sm sm:text-base lg:text-lg cursor-pointer transition-all duration-300 mb-4 sm:mb-6 w-full sm:w-fit hover:shadow-lg hover:-translate-y-0.5"
                    style={{ backgroundColor: '#1F2937' }}
                    onMouseEnter={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#FA6400'}
                    onMouseLeave={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#1F2937'}
                  >
                    <span className="transition-all duration-300">
                      <span className="group-hover:hidden">Fill out Interest Form</span>
                      <span className="hidden group-hover:inline">{'{ Fill out Interest Form }'}</span>
                    </span>
                  </button>
                  <p className="text-xs sm:text-sm text-gray-400 text-center lg:text-left m-0" style={{color: '#1F2937'}}>
                      Let us know if you're interested to register when Fall 2025 cohorts go live.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Illustration Section */}
          <div className="flex justify-center self-end lg:justify-start h-full md:ml-[-3vw] md:max-h-[55vh] order-2 lg:order-2">
            <div className="w-full max-w-md lg:max-w-lg xl:max-w-xl">
              { <img src={heroRightSvg2} alt={illustrationAlt} className="h-full w-[25vw] rounded-xl sm:rounded-2xl heroRightSvg"/>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
