import leaderboardSvg from '../assets/svgs/leaderboard.svg';

interface LeaderBoardSectionProps {
  onOpenInterestForm: () => void;
}

const LeaderBoardSection: React.FC<LeaderBoardSectionProps> = ({ onOpenInterestForm }) => {
  // Mock data for the leading schools - this would come from your backend
  const leadingSchools = [
    { rank: 1, name: 'Carleton University', score: 721 },
    { rank: 2, name: 'University of Ottawa', score: 674 },
    { rank: 3, name: 'University of Toronto', score: 269 },
    { rank: 4, name: 'University of Manitoba', score: 182 },
    { rank: 5, name: 'University of British Columbia', score: 167 },
    { rank: 6, name: 'McGill University', score: 98 },
    { rank: 7, name: 'Concordia University', score: 68 },
    { rank: 8, name: 'University of Waterloo', score: 1 },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden">

      <div className="relative max-w-6xl mx-auto px-3 sm:px-5 pt-16 sm:pt-20 md:pt-28 pb-12 sm:pb-16 md:pb-20">
        {/* Main Leaderboard Card */}
        <div className="max-w-2xl mx-auto lg:ml-auto lg:mr-0 lg:pr-0">
          <div className="bg-gray-100 rounded-xl sm:rounded-2xl shadow-2xl p-6 sm:p-8 md:p-12 relative">
            {/* Leaderboard SVG in bottom left corner - hidden on mobile */}
            <img 
              src={leaderboardSvg} 
              alt="" 
              className="hidden md:block absolute -bottom-10 -left-30 w-48 h-auto opacity-100 pointer-events-none"
            />
            {/* Title */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 text-center mb-6 sm:mb-8">
              Leaderboard: Coming Soon!
            </h2>
            
            {/* Leading Schools Section */}
            <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 mb-6 sm:mb-8">
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <h3 className="text-base sm:text-lg font-semibold text-gray-700">Leading schools</h3>
                <div className="flex space-x-1 sm:space-x-2">
                  <button className="text-gray-400 hover:text-gray-600 transition-colors">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button className="text-gray-400 hover:text-gray-600 transition-colors">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
              
              {/* Schools List */}
              <div className="space-y-2 sm:space-y-3">
                {leadingSchools.map((school) => (
                  <div key={school.rank} className="flex items-center justify-between py-1.5 sm:py-2">
                    <div className="flex items-center space-x-2 sm:space-x-3 min-w-0 flex-1">
                      <span className="text-gray-500 font-medium min-w-[16px] sm:min-w-[20px] text-sm sm:text-base">{school.rank}.</span>
                      <span className="text-gray-700 font-medium text-sm sm:text-base truncate">
                        {school.name.length > (window.innerWidth < 640 ? 20 : 25)
                          ? `${school.name.substring(0, window.innerWidth < 640 ? 20 : 25)}...` 
                          : school.name
                        }
                      </span>
                    </div>
                    <span className="text-green-600 font-bold text-sm sm:text-base ml-2">{school.score}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* CTA Button */}
            <button 
              onClick={onOpenInterestForm}
              className="group w-full text-white py-3 sm:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 mx-auto"
              style={{ backgroundColor: '#1F2937' }}
              onMouseEnter={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#FA6400'}
              onMouseLeave={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#1F2937'}
            >
              <span className="transition-all duration-300">
                <span className="group-hover:hidden">Fill out Interest Form</span>
                <span className="hidden group-hover:inline">{'{ Fill out Interest Form }'}</span>
              </span>
            </button>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default LeaderBoardSection;
