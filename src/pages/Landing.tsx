import { useState } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import LeaderBoardSection from '../components/LeaderBoardSection';
import AboutSection from '../components/AboutSection';
import TeamSection from '../components/TeamSection';
import ShowcaseSection from '../components/ShowcaseSection';
import DiscordSection from '../components/DiscordSection';
import SponsorsSection from '../components/SponsorsSection';
import Footer from '../components/Footer';
import InterestForm from '../components/InterestForm';

const Landing: React.FC = () => {
  const [isInterestFormOpen, setIsInterestFormOpen] = useState(false);

  const openInterestForm = () => setIsInterestFormOpen(true);
  const closeInterestForm = () => setIsInterestFormOpen(false);

  return (
    <div className="font-['Inter',-apple-system,BlinkMacSystemFont,'Segoe_UI',Roboto,sans-serif] leading-relaxed text-gray-800">
      <Header onOpenInterestForm={openInterestForm} />
      <HeroSection onOpenInterestForm={openInterestForm} />
      <LeaderBoardSection onOpenInterestForm={openInterestForm} />
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
