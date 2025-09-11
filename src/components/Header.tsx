import logo from '../assets/logo/logo.svg';
import { useState } from 'react';

interface HeaderProps {
  onOpenInterestForm: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenInterestForm }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    // full-width wrapper that sits on top of your hero background
    <header className="w-full sticky top-2 sm:top-4 md:top-6 z-50 px-2 sm:px-4 md:px-6 mobFixHeader">
      <div className="mx-auto max-w-5xl">
        {/* the pill */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg px-3 sm:px-4 md:px-6 py-3 sm:py-4 relative">
          <div className="header-content flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
            {/* Logo */}
            <div className="flex items-center">
              <a href="#hero">
                <span className="inline-flex items-center align-middle">
                  <img
                    src={logo}
                    alt="prototyp3"
                    className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                  />
                  <span className="logoFont ml-2 sm:ml-[10px] text-lg sm:text-xl md:text-2xl leading-none flex items-center">
                    prototyp3
                  </span>
                </span>
              </a>
            </div>

            {/* Desktop Nav */}
            <nav className="flex gap-4 sm:gap-6 md:gap-8 items-center">
              <a href="#about" className="text-gray-800 font-medium hover:text-teal-600 transition-colors text-sm sm:text-base">
                About
              </a>
              <a href="#projects" className="text-gray-800 font-medium hover:text-teal-600 transition-colors text-sm sm:text-base">
                Projects
              </a>
              <a href="#contact" className="text-gray-800 font-medium hover:text-teal-600 transition-colors text-sm sm:text-base">
                Contact
              </a>
            </nav>

            {/* Desktop CTA */}
            <button 
              onClick={onOpenInterestForm}
              className="desktop-cta group text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 text-sm sm:text-base w-full sm:w-auto"
              style={{ backgroundColor: '#1F2937' }}
              onMouseEnter={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#FA6400'}
              onMouseLeave={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#1F2937'}
            >
              <span className="transition-all duration-300">
                <span className="group-hover:hidden">Fill out interest form</span>
                <span className="hidden group-hover:inline">{'{ Fill out interest form }'}</span>
              </span>
            </button>

            {/* Hamburger Menu */}
            <div className={`hamburger-menu ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
            <a href="#about" className="text-gray-800 font-medium hover:text-teal-600 transition-colors">
              About
            </a>
            <a href="#projects" className="text-gray-800 font-medium hover:text-teal-600 transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-gray-800 font-medium hover:text-teal-600 transition-colors">
              Contact
            </a>
            <button 
              onClick={() => {
                onOpenInterestForm();
                setIsMobileMenuOpen(false);
              }}
              className="group text-white px-4 py-2 rounded-lg font-semibold cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 text-sm"
              style={{ backgroundColor: '#1F2937' }}
              onMouseEnter={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#FA6400'}
              onMouseLeave={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#1F2937'}
            >
              Fill out interest form
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
