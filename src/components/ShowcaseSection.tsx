import { useState } from 'react';
import { useShowcase } from '../hooks/useSupabase';

const ShowcaseSection: React.FC = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const { showcase, loading, error } = useShowcase();

  // Default placeholder data in case no data is available
  const defaultProject = {
    title: "StudyBuddy",
    description: "Help students at Carleton find the right time and place to study together by building a smart, low-pressure scheduling tool.",
    features: [
      "Create a responsive web app",
      "Allow users to share study time.",
      "Auto-match for study groups.",
      "Deploy and test MVP"
    ],
    technologies: [
      "HTML", "User interviews", "Firebase", "CSS", 
      "Version control", "Prototyping", "Javascript", "Git"
    ],
    images: [
      "",
      "", 
      ""
    ]
  };

  // Get current project data
  const currentProject = showcase.length > 0 ? showcase[currentProjectIndex] : null;
  
  // Parse technologies from comma-separated string
  const technologies = currentProject 
    ? currentProject.core_tech_COMMA_SEPRATED_ONLY.split(',').map(tech => tech.trim())
    : defaultProject.technologies;

  // Get features from database or use default
  const features = currentProject 
    ? [currentProject.bullet_1, currentProject.bullet_2, currentProject.bullet_3, currentProject.bullet_4].filter(Boolean)
    : defaultProject.features;

  // Get current project image or use default
  const currentImage = currentProject?.image_url || defaultProject.images[currentImageIndex];

  const nextProject = () => {
    if (showcase.length > 0) {
      setCurrentProjectIndex((prev) => 
        prev === showcase.length - 1 ? 0 : prev + 1
      );
      setCurrentImageIndex(0);
    }
  };

  const prevProject = () => {
    if (showcase.length > 0) {
      setCurrentProjectIndex((prev) => 
        prev === 0 ? showcase.length - 1 : prev - 1
      );
      setCurrentImageIndex(0);
    }
  };

  const nextImage = () => {
    // If we have projects from Supabase, navigate between projects
    if (showcase.length > 0) {
      nextProject();
    } else {
      // Otherwise, navigate between default images
      setCurrentImageIndex((prev) => 
        prev === defaultProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    // If we have projects from Supabase, navigate between projects
    if (showcase.length > 0) {
      prevProject();
    } else {
      // Otherwise, navigate between default images
      setCurrentImageIndex((prev) => 
        prev === 0 ? defaultProject.images.length - 1 : prev - 1
      );
    }
  };

  // Show loading state
  if (loading) {
    return (
      <section className="py-16 min-h-screen">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-gray-100 rounded-2xl p-12 shadow-lg">
            <div className="flex items-center justify-center h-96">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-800 mx-auto mb-4"></div>
                <p className="text-gray-600">Loading showcase projects...</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Show error state with detailed debugging
  if (error) {
    return (
      <section className="py-16 min-h-screen" id="projects">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-gray-100 rounded-2xl p-12 shadow-lg">
            <div className="space-y-6">
              <div className="text-center">
                <p className="text-red-600 mb-4">Error loading showcase projects</p>
                <p className="text-gray-600 text-sm mb-4">{error}</p>
                <button 
                  onClick={() => window.location.reload()} 
                  className="text-white px-4 py-2 rounded transition-colors"
                  style={{ backgroundColor: '#1F2937' }}
                  onMouseEnter={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#FA6400'}
                  onMouseLeave={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#1F2937'}
                >
                  Retry
                </button>
              </div>
              
              {/* Debug Information */}
              <div className="p-4 bg-white rounded-lg shadow-lg max-w-2xl mx-auto">
                <h3 className="text-lg font-bold mb-4">Debug Information</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Loading State:</h4>
                    <p className="text-sm">{loading ? 'Loading...' : 'Not loading'}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Showcase Data:</h4>
                    <pre className="text-xs bg-gray-100 p-2 rounded overflow-auto">
                      {JSON.stringify(showcase, null, 2)}
                    </pre>
                  </div>
                  <div>
                    <h4 className="font-semibold">Showcase Length:</h4>
                    <p className="text-sm">{showcase.length}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Current Project Index:</h4>
                    <p className="text-sm">{currentProjectIndex}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Current Project:</h4>
                    <pre className="text-xs bg-gray-100 p-2 rounded overflow-auto">
                      {JSON.stringify(currentProject, null, 2)}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-8 sm:py-12 md:py-16 min-h-screen" id="projects">
      <div className="container mx-auto px-3 sm:px-4 max-w-6xl">
        <div className="bg-gray-100 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 shadow-lg">
          <div className="space-y-6 sm:space-y-8">
            {/* Title and Description */}
            <div className="text-center space-y-3 sm:space-y-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
                Learning experiences
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
                The projects below show the kind of real-world challenges you'll work on during your cohort, built in teams, guided by mentors, and powered by your curiosity.
              </p>
            </div>

            {/* Project Image and Details */}
            <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12 items-start">
              {/* Image Section */}
              <div className="flex-shrink-0 w-full lg:w-auto">
                <div className="relative mx-auto lg:mx-0">
                  <div className="w-full max-w-sm sm:max-w-md lg:w-80 h-64 sm:h-80 lg:h-96 bg-gradient-to-br from-green-100 to-green-200 rounded-xl sm:rounded-2xl overflow-hidden relative shadow-lg">
                    <img 
                      src={currentImage} 
                      alt={currentProject ? currentProject.Title : defaultProject.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="flex-1 space-y-4 sm:space-y-6 w-full">
                <div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-3 sm:mb-4">
                    {currentProject ? currentProject.Title : defaultProject.title}
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                    {currentProject ? currentProject.description : defaultProject.description}
                  </p>
                </div>
                
                {/* Features List */}
                <div className="space-y-2 sm:space-y-3">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <span className="text-teal-500 mr-2 sm:mr-3 text-base sm:text-lg font-bold flex-shrink-0 mt-0.5">+</span>
                      <span className="text-gray-700 text-sm sm:text-base md:text-lg">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Technology Tags */}
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="bg-gray-200 text-gray-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-center space-x-4 sm:space-x-6 pt-6 sm:pt-8">
              <div className="flex-1 border-t-2 border-dotted border-gray-300"></div>
              
              <div className="flex items-center space-x-3 sm:space-x-4">
                <button 
                  onClick={prevImage}
                  className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded-full transition-colors text-gray-600 text-sm sm:text-base"
                >
                  ‹
                </button>
                
                <div className="flex space-x-1.5 sm:space-x-2">
                  {showcase.length > 0 ? (
                    // Show project dots if we have multiple projects
                    showcase.map((_, index) => (
                      <button
                        key={index}
                        className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-colors ${
                          index === currentProjectIndex ? 'bg-gray-800' : 'bg-gray-300'
                        }`}
                        onClick={() => {
                          setCurrentProjectIndex(index);
                          setCurrentImageIndex(0);
                        }}
                      />
                    ))
                  ) : (
                    // Show image dots if using default project
                    defaultProject.images.map((_, index) => (
                      <button
                        key={index}
                        className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-colors ${
                          index === currentImageIndex ? 'bg-gray-800' : 'bg-gray-300'
                        }`}
                        onClick={() => setCurrentImageIndex(index)}
                      />
                    ))
                  )}
                </div>
                
                <button 
                  onClick={nextImage}
                  className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded-full transition-colors text-gray-600 text-sm sm:text-base"
                >
                  ›
                </button>
              </div>
              
              <div className="flex-1 border-t-2 border-dotted border-gray-300"></div>
            </div>

            {/* Footer Text */}
            <div className="text-center pt-6 sm:pt-8">
              <div className="flex items-center justify-center space-x-2 text-gray-500">
                <span className="text-base sm:text-lg">ⓘ</span>
                <span className="text-xs sm:text-sm">
                  Fall 2025 Cohort will be the first to leave their footprint; trailblazers of the Prototyp3 program.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;

