import { useState, useEffect, useRef } from 'react';

interface InterestFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const InterestForm: React.FC<InterestFormProps> = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    enrollment: '',
    learningJourney: '',
    interests: [] as string[],
    activities: [] as string[],
    heardFrom: '',
    additionalInfo: ''
  });

  const [otherActivityText, setOtherActivityText] = useState('');
  const [otherInterestText, setOtherInterestText] = useState('');
  const [showInterestDropdown, setShowInterestDropdown] = useState(false);
  const [showActivityDropdown, setShowActivityDropdown] = useState(false);
  
  const interestDropdownRef = useRef<HTMLDivElement>(null);
  const activityDropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (interestDropdownRef.current && !interestDropdownRef.current.contains(event.target as Node)) {
        setShowInterestDropdown(false);
      }
      if (activityDropdownRef.current && !activityDropdownRef.current.contains(event.target as Node)) {
        setShowActivityDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };



  const removeInterest = (interestToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.filter(interest => interest !== interestToRemove)
    }));
  };

  const getInterestDisplayName = (value: string): string => {
    if (value.startsWith('other:')) {
      return value.substring(6); // Remove 'other:' prefix and show the custom text
    }
    const interestMap: { [key: string]: string } = {
      'blockchain-web3': 'Blockchain / Web3',
      'business-startup-strategy': 'Business / Startup Strategy',
      'cloud-computing': 'Cloud Computing',
      'computer-science': 'Computer Science',
      'cybersecurity': 'Cybersecurity',
      'devops-infrastructure': 'DevOps / Infrastructure',
      'hardware-robotics': 'Hardware / Robotics',
      'web-development': 'Web Development',
      'mobile-development': 'Mobile Development',
      'data-science': 'Data Science',
      'ai-machine-learning': 'AI & Machine Learning',
      'game-development': 'Game Development'
    };
    return interestMap[value] || value;
  };

  const removeActivity = (activityToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      activities: prev.activities.filter(activity => activity !== activityToRemove)
    }));
  };

  const getActivityDisplayName = (value: string): string => {
    if (value.startsWith('other:')) {
      return value.substring(6); // Remove 'other:' prefix and show the custom text
    }
    const activityMap: { [key: string]: string } = {
      'joining-project-cohort': 'Joining a project cohort',
      'mentorship-opportunities': 'Mentorship opportunities',
      'contributing-to-prototyp3': 'Contributing to Prototyp3',
      'stay-in-loop-updates': 'Stay in the loop with updates'
    };
    return activityMap[value] || value;
  };

  const handleContinue = () => {
    if (currentStep === 1) {
      // Validate required fields for step 1
      if (formData.fullName && formData.email && formData.enrollment && formData.learningJourney) {
        setCurrentStep(2);
      }
    }
  };

  const handleBack = () => {
    if (currentStep === 2) {
      setCurrentStep(1);
    } else {
      onClose();
    }
  };

  const handleSubmit = () => {
    // Handle form submission here
    console.log('Form submitted:', formData);
    onClose();
    setCurrentStep(1);
    setFormData({
      fullName: '',
      email: '',
      enrollment: '',
      learningJourney: '',
      interests: [],
      activities: [],
      heardFrom: '',
      additionalInfo: ''
    });
    setOtherActivityText('');
    setOtherInterestText('');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-100 rounded-lg p-8 max-w-md w-full mx-4">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Interest form</h2>
          <p className="text-gray-600">step {currentStep} of 2</p>
        </div>

        {currentStep === 1 ? (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Where are you currently enrolled? <span className="text-red-500">*</span>
              </label>
              <select
                name="enrollment"
                value={formData.enrollment}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white"
                required
              >
                <option value="">Select an option</option>
                <option value="carleton-university">Carleton University</option>
                <option value="university-of-ottawa">University of Ottawa</option>
                <option value="university-of-toronto">University of Toronto</option>
                <option value="university-of-manitoba">University of Manitoba</option>
                <option value="university-of-british-columbia">University of British Columbia</option>
                <option value="mcgill-university">McGill University</option>
                <option value="concordia-university">Concordia University</option>
                <option value="university-of-waterloo">University of Waterloo</option>
                <option value="algonquin-college">Algonquin College</option>
                <option value="other">Other:</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Where are you in your learning journey? <span className="text-red-500">*</span>
              </label>
              <select
                name="learningJourney"
                value={formData.learningJourney}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white"
                required
              >
                <option value="">Select an option</option>
                <option value="high-school-student">High school student</option>
                <option value="college-university-student">College/university student</option>
                <option value="recent-graduate">Recent graduate</option>
                <option value="early-career-professional">Early-career professional</option>
                <option value="educator-mentor">Educator or mentor</option>
                <option value="career-change-self-taught">Career change / self-taught</option>
                <option value="other">Other:</option>
              </select>
            </div>
          </div>
                 ) : (
           <div className="space-y-4">
                           <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  What are you interested in exploring? <span className="text-red-500">*</span>
                </label>
                
                                 {/* Custom dropdown for selecting interests */}
                 <div className="relative mb-3" ref={interestDropdownRef}>
                   <button
                     type="button"
                     onClick={() => setShowInterestDropdown(!showInterestDropdown)}
                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-left flex items-center justify-between"
                   >
                     <span className="text-gray-500">Select choices</span>
                     <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                     </svg>
                   </button>
                   
                   {showInterestDropdown && (
                     <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
                       <div className="p-2 space-y-1">
                         <button
                           type="button"
                           onClick={() => {
                             if (!formData.interests.includes('blockchain-web3')) {
                               setFormData(prev => ({
                                 ...prev,
                                 interests: [...prev.interests, 'blockchain-web3']
                               }));
                             }
                           }}
                           className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded text-sm"
                         >
                           Blockchain / Web3
                         </button>
                         <button
                           type="button"
                           onClick={() => {
                             if (!formData.interests.includes('business-startup-strategy')) {
                               setFormData(prev => ({
                                 ...prev,
                                 interests: [...prev.interests, 'business-startup-strategy']
                               }));
                             }
                           }}
                           className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded text-sm"
                         >
                           Business / Startup Strategy
                         </button>
                         <button
                           type="button"
                           onClick={() => {
                             if (!formData.interests.includes('cloud-computing')) {
                               setFormData(prev => ({
                                 ...prev,
                                 interests: [...prev.interests, 'cloud-computing']
                               }));
                             }
                           }}
                           className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded text-sm"
                         >
                           Cloud Computing
                         </button>
                         <button
                           type="button"
                           onClick={() => {
                             if (!formData.interests.includes('computer-science')) {
                               setFormData(prev => ({
                                 ...prev,
                                 interests: [...prev.interests, 'computer-science']
                               }));
                             }
                           }}
                           className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded text-sm"
                         >
                           Computer Science
                         </button>
                         <button
                           type="button"
                           onClick={() => {
                             if (!formData.interests.includes('cybersecurity')) {
                               setFormData(prev => ({
                                 ...prev,
                                 interests: [...prev.interests, 'cybersecurity']
                               }));
                             }
                           }}
                           className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded text-sm"
                         >
                           Cybersecurity
                         </button>
                         <button
                           type="button"
                           onClick={() => {
                             if (!formData.interests.includes('devops-infrastructure')) {
                               setFormData(prev => ({
                                 ...prev,
                                 interests: [...prev.interests, 'devops-infrastructure']
                               }));
                             }
                           }}
                           className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded text-sm"
                         >
                           DevOps / Infrastructure
                         </button>
                         <button
                           type="button"
                           onClick={() => {
                             if (!formData.interests.includes('hardware-robotics')) {
                               setFormData(prev => ({
                                 ...prev,
                                 interests: [...prev.interests, 'hardware-robotics']
                               }));
                             }
                           }}
                           className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded text-sm"
                         >
                           Hardware / Robotics
                         </button>
                         <button
                           type="button"
                           onClick={() => {
                             if (!formData.interests.includes('web-development')) {
                               setFormData(prev => ({
                                 ...prev,
                                 interests: [...prev.interests, 'web-development']
                               }));
                             }
                           }}
                           className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded text-sm"
                         >
                           Web Development
                         </button>
                         <button
                           type="button"
                           onClick={() => {
                             if (!formData.interests.includes('mobile-development')) {
                               setFormData(prev => ({
                                 ...prev,
                                 interests: [...prev.interests, 'mobile-development']
                               }));
                             }
                           }}
                           className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded text-sm"
                         >
                           Mobile Development
                         </button>
                         <button
                           type="button"
                           onClick={() => {
                             if (!formData.interests.includes('data-science')) {
                               setFormData(prev => ({
                                 ...prev,
                                 interests: [...prev.interests, 'data-science']
                               }));
                             }
                           }}
                           className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded text-sm"
                         >
                           Data Science
                         </button>
                         <button
                           type="button"
                           onClick={() => {
                             if (!formData.interests.includes('ai-machine-learning')) {
                               setFormData(prev => ({
                                 ...prev,
                                 interests: [...prev.interests, 'ai-machine-learning']
                               }));
                             }
                           }}
                           className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded text-sm"
                         >
                           AI & Machine Learning
                         </button>
                         <button
                           type="button"
                           onClick={() => {
                             if (!formData.interests.includes('game-development')) {
                               setFormData(prev => ({
                                 ...prev,
                                 interests: [...prev.interests, 'game-development']
                               }));
                             }
                           }}
                           className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded text-sm"
                         >
                           Game Development
                         </button>
                         
                         {/* Other option with inline text input */}
                         <div className="flex items-center space-x-2 px-3 py-2">
                           <span className="text-sm text-gray-600">Other:</span>
                           <input
                             type="text"
                             placeholder="Type here..."
                             value={otherInterestText}
                             onChange={(e) => setOtherInterestText(e.target.value)}
                             className="flex-1 px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                             onKeyPress={(e) => {
                               if (e.key === 'Enter' && otherInterestText.trim()) {
                                 setFormData(prev => ({
                                   ...prev,
                                   interests: [...prev.interests, `other:${otherInterestText.trim()}`]
                                 }));
                                 setOtherInterestText('');
                                 setShowInterestDropdown(false);
                               }
                             }}
                           />
                           {otherInterestText && (
                             <button
                               type="button"
                               onClick={() => {
                                 if (otherInterestText.trim()) {
                                   setFormData(prev => ({
                                     ...prev,
                                     interests: [...prev.interests, `other:${otherInterestText.trim()}`]
                                   }));
                                   setOtherInterestText('');
                                   setShowInterestDropdown(false);
                                 }
                               }}
                               className="px-2 py-1 text-xs bg-blue-600 text-white rounded hover:bg-blue-700"
                             >
                               Add
                             </button>
                           )}
                         </div>
                       </div>
                     </div>
                   )}
                 </div>

                {/* Display selected interests as chips */}
                {formData.interests.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-3">
                    {formData.interests.map((interest, index) => (
                      <div
                        key={index}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-100 text-green-800 border border-green-200"
                      >
                        {index === 0 && (
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        )}
                        <span>{getInterestDisplayName(interest)}</span>
                        <button
                          type="button"
                          onClick={() => removeInterest(interest)}
                          className="ml-2 text-green-600 hover:text-green-800"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

                           <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-medium text-gray-700">
                    What are you interested in doing? <span className="text-red-500">*</span>
                  </label>
                  <div className="flex items-center text-xs text-gray-500">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    Select as many as you'd like.
                  </div>
                </div>
                
                                 {/* Custom dropdown for selecting activities */}
                 <div className="relative mb-3" ref={activityDropdownRef}>
                   <button
                     type="button"
                     onClick={() => setShowActivityDropdown(!showActivityDropdown)}
                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-left flex items-center justify-between"
                   >
                     <span className="text-gray-500">Select choices</span>
                     <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                     </svg>
                   </button>
                   
                   {showActivityDropdown && (
                     <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
                       <div className="p-2 space-y-1">
                         <button
                           type="button"
                           onClick={() => {
                             if (!formData.activities.includes('joining-project-cohort')) {
                               setFormData(prev => ({
                                 ...prev,
                                 activities: [...prev.activities, 'joining-project-cohort']
                               }));
                             }
                           }}
                           className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded text-sm"
                         >
                           Joining a project cohort
                         </button>
                         <button
                           type="button"
                           onClick={() => {
                             if (!formData.activities.includes('mentorship-opportunities')) {
                               setFormData(prev => ({
                                 ...prev,
                                 activities: [...prev.activities, 'mentorship-opportunities']
                               }));
                             }
                           }}
                           className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded text-sm"
                         >
                           Mentorship opportunities
                         </button>
                         <button
                           type="button"
                           onClick={() => {
                             if (!formData.activities.includes('contributing-to-prototyp3')) {
                               setFormData(prev => ({
                                 ...prev,
                                 activities: [...prev.activities, 'contributing-to-prototyp3']
                               }));
                             }
                           }}
                           className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded text-sm"
                         >
                           Contributing to Prototyp3
                         </button>
                         <button
                           type="button"
                           onClick={() => {
                             if (!formData.activities.includes('stay-in-loop-updates')) {
                               setFormData(prev => ({
                                 ...prev,
                                 activities: [...prev.activities, 'stay-in-loop-updates']
                               }));
                             }
                           }}
                           className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded text-sm"
                         >
                           Stay in the loop with updates
                         </button>
                         
                         {/* Other option with inline text input */}
                         <div className="flex items-center space-x-2 px-3 py-2">
                           <span className="text-sm text-gray-600">Other:</span>
                           <input
                             type="text"
                             placeholder="Type here..."
                             value={otherActivityText}
                             onChange={(e) => setOtherActivityText(e.target.value)}
                             className="flex-1 px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                             onKeyPress={(e) => {
                               if (e.key === 'Enter' && otherActivityText.trim()) {
                                 setFormData(prev => ({
                                   ...prev,
                                   activities: [...prev.activities, `other:${otherActivityText.trim()}`]
                                 }));
                                 setOtherActivityText('');
                                 setShowActivityDropdown(false);
                               }
                             }}
                           />
                           {otherActivityText && (
                             <button
                               type="button"
                               onClick={() => {
                                 if (otherActivityText.trim()) {
                                   setFormData(prev => ({
                                     ...prev,
                                     activities: [...prev.activities, `other:${otherActivityText.trim()}`]
                                   }));
                                   setOtherActivityText('');
                                   setShowActivityDropdown(false);
                                 }
                               }}
                               className="px-2 py-1 text-xs bg-blue-600 text-white rounded hover:bg-blue-700"
                             >
                               Add
                             </button>
                           )}
                         </div>
                       </div>
                     </div>
                   )}
                 </div>

                 {/* Display selected activities as chips */}
                 {formData.activities.length > 0 && (
                   <div className="flex flex-wrap gap-2 mb-3">
                     {formData.activities.map((activity, index) => (
                       <div
                         key={index}
                         className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-100 text-green-800 border border-green-200"
                       >
                         {index === 0 && (
                           <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                         )}
                         <span>{getActivityDisplayName(activity)}</span>
                         <button
                           type="button"
                           onClick={() => removeActivity(activity)}
                           className="ml-2 text-green-600 hover:text-green-800"
                         >
                           ×
                         </button>
                       </div>
                     ))}
                   </div>
                 )}
              </div>

                           <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  How did you hear about Prototyp3? <span className="text-red-500">*</span>
                </label>
                <select
                  name="heardFrom"
                  value={formData.heardFrom}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white"
                  required
                >
                  <option value="">Select an option</option>
                  <option value="prototyp3-website">Prototyp3 website</option>
                  <option value="linkedin">LinkedIn</option>
                  <option value="instagram">Instagram</option>
                  <option value="discord">Discord</option>
                  <option value="friend-word-of-mouth">Friend / Word of mouth</option>
                  <option value="other">Other:</option>
                </select>
              </div>

             <div>
               <label className="block text-sm font-medium text-gray-700 mb-1">
                 Anything else you'd like to tell us?
               </label>
               <textarea
                 name="additionalInfo"
                 value={formData.additionalInfo}
                 onChange={handleInputChange}
                 placeholder="Leave a comment"
                 rows={4}
                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
               />
             </div>
           </div>
         )}

        <div className="flex justify-between mt-8">
          <button
            onClick={handleBack}
            className="px-6 py-2 bg-white text-gray-800 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
          >
            Back
          </button>
                     {currentStep === 1 ? (
             <button
               onClick={handleContinue}
               disabled={!formData.fullName || !formData.email || !formData.enrollment || !formData.learningJourney}
               className="px-6 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
             >
               Continue
             </button>
           ) : (
                            <button
                 onClick={handleSubmit}
                 disabled={formData.interests.length === 0 || formData.activities.length === 0 || !formData.heardFrom}
                 className="px-6 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
               >
                 Submit
               </button>
           )}
        </div>
      </div>
    </div>
  );
};

export default InterestForm;
