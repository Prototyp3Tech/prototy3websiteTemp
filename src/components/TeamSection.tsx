import { useState, useEffect } from 'react'
import { useTeam } from '../hooks/useSupabase';
import faceSvg from '../assets/svgs/face.svg';

const TeamSection: React.FC = () => {
  const { team, loading, error } = useTeam();
  const [selectedIndex, setSelectedIndex] = useState(0)

  // Define position hierarchy for ordering
  const positionOrder = [
    'Founder & CEO',
    'Tech Lead',
    'UI/UX Design Coordinator',
    'Marketing Lead',
    'Developer'
  ];

  // Sort team members by position hierarchy, then by name
  const sortedTeam = [...team].sort((a, b) => {
    // Normalize positions (trim whitespace and normalize case)
    const normalizePosition = (pos: string) => pos.trim().toLowerCase();
    const normalizedPositionOrder = positionOrder.map(pos => normalizePosition(pos));
    
    const aIndex = normalizedPositionOrder.indexOf(normalizePosition(a.position));
    const bIndex = normalizedPositionOrder.indexOf(normalizePosition(b.position));
    
    // If both positions are in the hierarchy, sort by hierarchy
    if (aIndex !== -1 && bIndex !== -1) {
      return aIndex - bIndex;
    }
    
    // If only one is in hierarchy, prioritize it
    if (aIndex !== -1) return -1;
    if (bIndex !== -1) return 1;
    
    // If neither is in hierarchy, sort alphabetically by name
    return a.Name.localeCompare(b.Name);
  });

  useEffect(() => {
    if (sortedTeam.length > 0) setSelectedIndex(0)
  }, [sortedTeam.length])

  // Auto-rotate through team members every 7 seconds
  useEffect(() => {
    if (sortedTeam.length <= 1) return;

    const interval = setInterval(() => {
      setSelectedIndex(current => (current + 1) % sortedTeam.length);
    }, 14000); // 14 seconds

    return () => clearInterval(interval);
  }, [sortedTeam.length])

  return (
    <section className="team-section w-full">
      <div className="w-full flex justify-center">
        {/* <h2 className="section-title">Meet Our Team</h2> */}
        {/* <p className="section-subtitle">The brilliant minds behind Prototyp3</p> */}
        
        {/* Team Section - Always visible */}
        <div className="mt-0 w-full max-w-4xl px-3 sm:px-4">
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-6 sm:p-8 md:p-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 text-center mb-6 sm:mb-8">
              The humans behind Prototyp3
            </h2>
            
            {/* Team Avatars (dynamic) */}
            <div className="flex justify-center items-center flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
              {sortedTeam.length === 0 && (
                <div className="w-16 h-16 sm:w-[4.5rem] sm:h-[4.5rem] md:w-[5.35rem] md:h-[5.35rem] rounded-full border-4 border-gray-300 overflow-hidden">
                  <img src={faceSvg} alt="Team" className="w-full h-full object-cover" />
                </div>
              )}
              {sortedTeam.map((member, index) => {
                const isSelected = index === selectedIndex
                return (
                  <button
                    key={member.id}
                    type="button"
                    onClick={() => setSelectedIndex(index)}
                    className={`w-16 h-16 sm:w-[4.5rem] sm:h-[4.5rem] md:w-[5.35rem] md:h-[5.35rem] rounded-full border-4 overflow-hidden focus:outline-none transition-all duration-300 ${
                      isSelected ? 'border-orange-500' : 'border-gray-300'
                    }`}
                    aria-label={member.Name}
                  >
                    <img
                      src={member.image_url || faceSvg}
                      alt={member.Name}
                      className={`w-full h-full object-cover transition-all duration-300 ${isSelected ? '' : 'grayscale'}`}
                    />
                  </button>
                )
              })}
            </div>

            {/* Selected Team Member Details */}
            {sortedTeam.length > 0 && (
              <div className="text-center max-w-2xl mx-auto px-2">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-1">{sortedTeam[selectedIndex].Name}</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">{sortedTeam[selectedIndex].position}</p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{sortedTeam[selectedIndex].description}</p>
              </div>
            )}
          </div>
        </div>

        {/* Team Members from Supabase Team table */}
        {loading && (
          <div className="mt-8 text-center">
            <p className="text-gray-600">Loading team...</p>
          </div>
        )}

        {error && (
          <div className="mt-8 text-center">
            {/* error intentionally hidden from UI */}
          </div>
        )}

        {/* Removed duplicate cards grid */}
        
        <div className="team-cta">
          {/* <p>Want to join our team?</p> */}
          {/* <button className="btn btn-primary">View Open Positions</button> */}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
