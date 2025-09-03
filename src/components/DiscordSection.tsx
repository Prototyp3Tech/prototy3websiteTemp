

import React from 'react';
import randomlinesSvg from '../assets/svgs/randomlines.svg';
import smallrocketSvg from '../assets/svgs/smallrocket.svg';

const DiscordSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
      {/* Decorative elements - hidden on mobile */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        {/* Random lines on the left - positioned behind the rockets */}
        <img 
          src={randomlinesSvg} 
          alt="" 
          className="absolute left-0 top-0 h-3/4 w-auto opacity-60 z-10"
        />
        
        {/* 3 Small rockets on the left - positioned in front of the lines */}
        <img 
          src={smallrocketSvg} 
          alt="" 
          className="absolute left-[8%] top-[10%] w-[70px] h-auto opacity-80 z-20"
        />
        <img 
          src={smallrocketSvg} 
          alt="" 
          className="absolute left-[12%] top-[25%] w-[70px] h-auto opacity-80 z-20"
        />
        <img 
          src={smallrocketSvg} 
          alt="" 
          className="absolute left-[8%] top-[40%] w-[70px] h-auto opacity-80 z-20"
        />
      </div>
      
      <div className="container mx-auto px-3 sm:px-4 relative z-10">
        <div className="max-w-4xl mx-auto lg:ml-auto lg:mr-0 lg:pr-0">
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
            <div className="grid lg:grid-cols-2">
              {/* Left Section - Text Content */}
              <div className="bg-blue-50 p-6 sm:p-8 lg:p-12 flex flex-col justify-center order-2 lg:order-1">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
                  Let's build together
                </h2>
                <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                  We hang out, help each other out, and sometimes just vibe.
                </p>
                <button 
                  className="group text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg cursor-pointer transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 w-full sm:w-fit" 
                  style={{ backgroundColor: '#1F2937' }}
                  onMouseEnter={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#FA6400'}
                  onMouseLeave={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#1F2937'}
                >
                  <span className="transition-all duration-300">
                    <span className="group-hover:hidden">Join our Discord</span>
                    <span className="hidden group-hover:inline">{'{ Join our Discord }'}</span>
                  </span>
                </button>
              </div>

              {/* Right Section - Discord Logo */}
              <div className="p-6 sm:p-8 lg:p-12 flex items-center justify-center order-1 lg:order-2">
                <div className="relative">
                  {/* Purple background container - more subtle and contained */}
                  <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 bg-purple-200 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg">
                    {/* 3D Discord Logo */}
                    <div className="relative transform rotate-12 hover:rotate-0 transition-transform duration-500">
                      {/* Discord Logo Container */}
                      <div className="w-36 h-36 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-blue-500 rounded-xl sm:rounded-2xl shadow-2xl flex items-center justify-center transform perspective-1000 rotate-y-12">
                        {/* Discord Icon */}
                        <svg 
                          className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 text-white" 
                          viewBox="0 0 24 24" 
                          fill="currentColor"
                        >
                          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                        </svg>
                      </div>
                      
                      {/* Subtle shadow for 3D effect */}
                      <div className="absolute -bottom-2 -right-2 w-36 h-36 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-blue-600 rounded-xl sm:rounded-2xl opacity-30 transform rotate-y-12"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscordSection;
