import logo from '../assets/logo/logo.svg';


interface HeaderProps {
  onOpenInterestForm: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenInterestForm }) => {
  return (
    // full-width wrapper that sits on top of your hero background
    <header className="w-full sticky top-6 z-50 px-4 sm:px-6">
      <div className="mx-auto max-w-5xl">
        {/* the pill */}
        <div className="bg-white rounded-2xl shadow-lg px-6 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Logo */}
            <div className="flex items-center">
              <span className="inline-flex items-center">
                <img src={logo} alt="Prototyp3" className="w-10 h-10" />
                <span className="logoFont ml-[10px]" style={{ fontFamily: 'var(--font-headline)' }}>Prototyp3</span>
              </span>
            </div>

            {/* Nav */}
            <nav className="flex gap-6 md:gap-8 items-center">
              <a href="#about" className="text-gray-800 font-medium hover:text-teal-600 transition-colors">
                About
              </a>
              <a href="#projects" className="text-teal-800 font-medium hover:text-teal-600 transition-colors">
                Projects
              </a>
              <a href="#contact" className="text-gray-800 font-medium hover:text-teal-600 transition-colors">
                Contact
              </a>
            </nav>

            {/* CTA */}
            <button 
              onClick={onOpenInterestForm}
              className="group bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold cursor-pointer transition-all duration-300 hover:px-8 hover:bg-orange-500 hover:shadow-lg hover:-translate-y-0.5"
            >
              <span className="transition-all duration-300">
                <span className="group-hover:hidden">Fill out interest form</span>
                <span className="hidden group-hover:inline">{'{ Fill out interest form }'}</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
