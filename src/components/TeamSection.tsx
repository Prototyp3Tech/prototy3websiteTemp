import React from 'react';
import { useUsers } from '../hooks/useSupabase';
import faceSvg from '../assets/svgs/face.svg';

const TeamSection: React.FC = () => {
  const { users, loading, error } = useUsers();

  return (
    <section className="team-section w-full">
      <div className="w-full flex justify-center">
        {/* <h2 className="section-title">Meet Our Team</h2> */}
        {/* <p className="section-subtitle">The brilliant minds behind Prototyp3</p> */}
        
        {/* Team Section - Always visible */}
        <div className="mt-0 max-w-4xl">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8">
              The humans behind Prototyp3
            </h2>
            
            {/* Team Avatars */}
            <div className="flex justify-center items-center space-x-3 mb-8">
              {/* Fox Avatar (Highlighted) */}
              <div className="relative">
                <div className="w-20 h-20 rounded-full border-4 border-orange-500 overflow-hidden">
                  <img src={faceSvg} alt="Funny Fox" className="w-full h-full object-cover" />
                </div>
              </div>
              
              {/* Other Team Members */}
              {[1, 2, 3, 4].map((index) => (
                <div key={index} className="w-20 h-20 rounded-full border-4 border-gray-300 overflow-hidden">
                  <img src={faceSvg} alt={`Team Member ${index}`} className="w-full h-full object-cover grayscale" />
                </div>
              ))}
            </div>
            
            {/* Team Member Description */}
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Funny Fox</h3>
              <p className="text-gray-600 mb-4">The one that makes others laugh.</p>
              <p className="text-gray-700 leading-relaxed">
                It started with a joke that animals couldn't code, but soon realized the best joke of all would be to prove that animals could code. So, how did Fox do it without thumbs? Why not join in and ask Fox for yourself.
              </p>
            </div>
          </div>
        </div>

        {/* Additional Team Members from Database */}
        {loading && (
          <div className="mt-8 text-center">
            <p className="text-gray-600">Loading additional team members...</p>
          </div>
        )}

        {error && (
          <div className="mt-8 text-center">
            {/* <p className="text-red-600">Error loading additional team members: {error}</p> */}
          </div>
        )}

        {!loading && !error && users.length > 0 && (
          <div className="mt-8">
            <h3 className="text-2xl font-bold text-center mb-6">Additional Team Members</h3>
            <div className="team-grid">
              {users.slice(0, 4).map((member) => (
                <div key={member.id} className="team-member">
                  <div className="member-avatar">
                    {member.avatar_url ? (
                      <img src={member.avatar_url} alt={member.full_name} />
                    ) : (
                      <span className="avatar-emoji">👨‍💼</span>
                    )}
                  </div>
                  <h3 className="member-name">{member.full_name}</h3>
                  <p className="member-role">Team Member</p>
                  <p className="member-bio">Passionate contributor to Prototyp3</p>
                  
                  <div className="member-social">
                    <button className="social-btn">LinkedIn</button>
                    <button className="social-btn">Twitter</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        <div className="team-cta">
          {/* <p>Want to join our team?</p> */}
          {/* <button className="btn btn-primary">View Open Positions</button> */}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
