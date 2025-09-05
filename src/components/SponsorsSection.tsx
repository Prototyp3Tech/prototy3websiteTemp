import { useState } from 'react';
// import nokiaSvg from '../assets/svgs/nokia.svg';
// import pixlnextSvg from '../assets/svgs/pixlnext.svg';
import SciSocSvg from '../assets/svgs/SciSoc.svg';
import CarletonSciSoc from '../assets/svgs/CalretonU.svg';
// import sportlinkSvg from '../assets/svgs/sportlink.svg';
import orangeBgSvg from '../assets/svgs/oragngebg.svg';
import tailedSvg from '../assets/svgs/tailed.svg';
import { useContactForm } from '../hooks/useSupabase';

const SponsorsSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const { submitContactForm, loading, error, success, resetForm } = useContactForm();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Reset success/error states when user starts typing
    if (success || error) {
      resetForm();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await submitContactForm(formData);
      // Reset form on successful submission
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (err) {
      // Error is handled by the hook
      console.error('Form submission error:', err);
    }
  };

  const partners = [
    // { name: "hayden's hub", logo: haydenSvg, alt: "Hayden's Hub" },
    // { name: "PixlNext", logo: pixlnextSvg, alt: "PixlNext" },
    // { name: "SportzLinkz", logo: sportlinkSvg, alt: "SportzLinkz" },
    { name: "Carleton University SciSoc", logo: SciSocSvg, alt: "Carleton University SciSoc" },
    { name: "Carleton University SciSoc", logo: CarletonSciSoc, alt: "Carleton University SciSoc" },
    // { name: "NOKIA", logo: nokiaSvg, alt: "NOKIA" },
    { name: "Tail'ed", logo: tailedSvg, alt: "Tail'ed" }
  ];



  return (
    <section className="sponsors-section">
      {/* Orange background blob */}
      <div className="orange-bg-shape">
        <img src={orangeBgSvg} alt="Orange background shape" />
      </div>
      
      {/* Main container */}
      <div className="sponsors-container">
        <div className="sponsors-card">
          {/* Title */}
          <h2 className="sponsors-title">
            Opportunities made possible by our partners and sponsors.
          </h2>
          
          {/* Partner logos */}
          <div className="partners-grid">
            <div className="partners-slider">
              {/* First set of logos */}
              {partners.map((partner, index) => (
                <div key={`first-${index}`} className="partner-logo-container">
                  <img 
                    src={partner.logo} 
                    alt={partner.alt}
                    className="partner-logo"
                  />
                </div>
              ))}
              {/* Duplicate logos for seamless loop */}
              {partners.map((partner, index) => (
                <div key={`second-${index}`} className="partner-logo-container">
                  <img 
                    src={partner.logo} 
                    alt={partner.alt}
                    className="partner-logo"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Descriptive text */}
          <p className="sponsors-description" id='contact'>
            We're grateful to our partners who share our commitment to putting students first to help create meaningful opportunities that make a real difference in education.
          </p>
          
          {/* Contact form */}
          <div className="contact-form-container" >
            <h3 className="contact-title">Get in touch</h3>
            <p className="contact-subtitle">
              Share our vision? We're excited to explore partnerships that put students first.
            </p>
            
            <form onSubmit={handleSubmit} className="contact-form">
              {/* Success Message */}
              {success && (
                <div className="form-message success-message">
                  <p>Thank you for your message! We'll get back to you soon.</p>
                </div>
              )}
              
              {/* Error Message */}
              {error && (
                <div className="form-message error-message">
                  <p>{error}</p>
                </div>
              )}
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                    disabled={loading}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email <span className="required">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                    disabled={loading}
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Leave us a message here! <span className="required">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="form-textarea"
                  rows={4}
                  required
                  disabled={loading}
                />
              </div>
              
              <button 
                type="submit" 
                className="submit-button group"
                disabled={loading}
              >
                <span className="transition-all duration-300">
                  {loading ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <span className="group-hover:hidden">Submit</span>
                      <span className="hidden group-hover:inline">{'{ Submit }'}</span>
                    </>
                  )}
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
