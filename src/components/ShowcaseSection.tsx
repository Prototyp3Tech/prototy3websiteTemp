import React, { useState } from 'react';

const ShowcaseSection: React.FC = () => {
  // Using static data for now to see the design
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Sample project data structure that matches the design
  const sampleProjects = [
    {
      id: 1,
      number: "01",
      title: "StudyBuddy",
      subtitle: "Social Scheduler for Science Students",
      description: "Ever struggle to coordinate study sessions with your friends? Help students at Carleton find the right time and place to study together by building a smart, low-pressure scheduling tool.",
      isActive: true,
      images: [
        "https://via.placeholder.com/256x384/4F46E5/FFFFFF?text=StudyBuddy+1",
        "https://via.placeholder.com/256x384/7C3AED/FFFFFF?text=StudyBuddy+2", 
        "https://via.placeholder.com/256x384/059669/FFFFFF?text=StudyBuddy+3",
        "https://via.placeholder.com/256x384/DC2626/FFFFFF?text=StudyBuddy+4"
      ]
    },
    {
      id: 2,
      number: "02",
      title: "Hack the Handbook",
      subtitle: "AI-Powered Course Navigator",
      description: "Build an intelligent course recommendation system that helps students navigate their academic journey with AI-powered insights and personalized guidance.",
      isActive: false,
      images: [
        "https://via.placeholder.com/256x384/7C3AED/FFFFFF?text=Handbook+1",
        "https://via.placeholder.com/256x384/4F46E5/FFFFFF?text=Handbook+2",
        "https://via.placeholder.com/256x384/059669/FFFFFF?text=Handbook+3",
        "https://via.placeholder.com/256x384/DC2626/FFFFFF?text=Handbook+4"
      ]
    },
    {
      id: 3,
      number: "03",
      title: "Urban Eye",
      subtitle: "AI Detection of Micro-Infrastructure Gaps",
      description: "Develop computer vision solutions to identify and map infrastructure gaps in urban environments, helping cities become more accessible and efficient.",
      isActive: false,
      images: [
        "https://via.placeholder.com/256x384/059669/FFFFFF?text=UrbanEye+1",
        "https://via.placeholder.com/256x384/7C3AED/FFFFFF?text=UrbanEye+2",
        "https://via.placeholder.com/256x384/4F46E5/FFFFFF?text=UrbanEye+3",
        "https://via.placeholder.com/256x384/DC2626/FFFFFF?text=UrbanEye+4"
      ]
    }
  ];

  const handleProjectSelect = (index: number) => {
    setSelectedProjectIndex(index);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    const currentProject = sampleProjects[selectedProjectIndex];
    setCurrentImageIndex((prev) => 
      prev === currentProject.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    const currentProject = sampleProjects[selectedProjectIndex];
    setCurrentImageIndex((prev) => 
      prev === 0 ? currentProject.images.length - 1 : prev - 1
    );
  };



  const selectedProject = sampleProjects[selectedProjectIndex];

  return (
    <section className="py-16 bg-teal-50">
      <div className="container mx-auto px-4">
        <div className="bg-gray-100 rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Section - Project List */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800">
                The type of projects you'll work on.
              </h2>
              <p className="text-gray-600 leading-relaxed">
                The projects below show the kind of real-world challenges you'll work on during your cohort, 
                built in teams, guided by mentors, and powered by your curiosity.
              </p>
              
              <div className="space-y-4">
                {sampleProjects.map((project, index) => (
                  <div 
                    key={project.id} 
                    className={`p-4 rounded-lg cursor-pointer transition-all duration-200 ${
                      index === selectedProjectIndex 
                        ? 'bg-white shadow-md border-l-4 border-orange-500' 
                        : 'hover:bg-gray-50'
                    }`}
                    onClick={() => handleProjectSelect(index)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <span className="text-lg font-semibold text-gray-700">{project.number}</span>
                        <div>
                          <h3 className={`font-semibold ${
                            index === selectedProjectIndex ? 'text-gray-800' : 'text-gray-500'
                          }`}>
                            {project.title}
                          </h3>
                          <p className={`text-sm ${
                            index === selectedProjectIndex ? 'text-gray-600' : 'text-gray-400'
                          }`}>
                            {project.subtitle}
                          </p>
                        </div>
                      </div>
                      <div className={`text-2xl font-bold ${
                        index === selectedProjectIndex ? 'text-orange-500' : 'text-gray-400'
                      }`}>
                        {index === selectedProjectIndex ? '»' : '›'}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Center Section - Image Carousel */}
            <div className="flex flex-col items-center space-y-4">
              <div className="relative">
                <button 
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-gray-50 transition-colors"
                  onClick={prevImage}
                >
                  ‹
                </button>
                
                <div className="w-64 h-96 bg-gray-200 rounded-lg overflow-hidden">
                  <img 
                    src={selectedProject.images[currentImageIndex]} 
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <button 
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-gray-50 transition-colors"
                  onClick={nextImage}
                >
                  ›
                </button>
              </div>
              
              <div className="flex space-x-2">
                {selectedProject.images.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentImageIndex ? 'bg-gray-800' : 'bg-gray-300'
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>
            </div>

            {/* Right Section - Project Details */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-800">{selectedProject.title}</h3>
              <p className="text-gray-600 leading-relaxed">{selectedProject.description}</p>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-700">Our development team</h4>
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-sm">👨‍💻</div>
                  <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-sm">👩‍💻</div>
                  <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-sm">🧑‍💻</div>
                  <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-sm">👨‍💻</div>
                </div>
              </div>
              
              <button className="group bg-gray-800 text-white px-6 py-2 rounded-lg transition-all duration-300 hover:w-80 hover:bg-orange-500 hover:shadow-lg hover:-translate-y-0.5 w-fit">
                <span className="transition-all duration-300">
                  <span className="group-hover:hidden">More details</span>
                  <span className="hidden group-hover:inline">{'{ More details }'}</span>
                </span>
              </button>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-8 text-gray-600">
          Fall 2025 Cohort will be the first to leave their footprint; trailblazers of the Prototyp3 program.
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;

