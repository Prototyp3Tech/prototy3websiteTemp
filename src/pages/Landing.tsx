import { useState, useEffect } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
// import LeaderBoardSection from '../components/LeaderBoardSection';
import AboutSection from '../components/AboutSection';
import TeamSection from '../components/TeamSection';
import ShowcaseSection from '../components/ShowcaseSection';
import DiscordSection from '../components/DiscordSection';
import SponsorsSection from '../components/SponsorsSection';
import Footer from '../components/Footer';
import InterestForm from '../components/InterestForm';
import BackgroundGlyphs from '../components/BackgroundGlyphs';
import { PrivacyPolicyPage } from '../components/PrivacyPolicyPage';

const Landing: React.FC = () => {
  const [isInterestFormOpen, setIsInterestFormOpen] = useState(false);
  const [isPrivacyPolicy, setIsPrivacyPolicy] = useState(false);

  const openInterestForm = () => setIsInterestFormOpen(true);
  const closeInterestForm = () => setIsInterestFormOpen(false);

  // Check for URL hash on component mount and when hash changes
  useEffect(() => {
    const checkHash = () => {
      if (window.location.hash === '#interest-form') {
        openInterestForm();
      }
      setIsPrivacyPolicy(window.location.hash === '#/PrivacyPolicyPage');
    };

    // Run on mount
    checkHash();

    // Listen for hash changes
    window.addEventListener('hashchange', checkHash);

    return () => {
      window.removeEventListener('hashchange', checkHash);
    };
  }, []);

  if (isPrivacyPolicy) {
    return (
      <div className="leading-relaxed text-gray-800 relative min-h-screen bg-white">
        <Header onOpenInterestForm={openInterestForm} />
        <div className="max-w-4xl mx-auto px-4 py-12">
          <PrivacyPolicyPage />
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="leading-relaxed text-gray-800 relative min-h-screen" style={{
      background: 'linear-gradient(124deg, rgba(0, 137, 123, 0.40) 11.33%, rgba(2, 101, 128, 0.40) 97.05%), radial-gradient(93.25% 96.83% at 110.95% -15.29%, rgba(0, 81, 135, 0.95) 0%, #00897B 100%)'
    }}>
      <BackgroundGlyphs />
      <Header onOpenInterestForm={openInterestForm} />
      <HeroSection onOpenInterestForm={openInterestForm} />
      {/* <LeaderBoardSection onOpenInterestForm={openInterestForm} /> */}
      <AboutSection />
      <TeamSection />
      <ShowcaseSection />
      <DiscordSection />
      <SponsorsSection />
      <Footer />
      <InterestForm isOpen={isInterestFormOpen} onClose={closeInterestForm} />
    </div>
  );
};

export default Landing;
