import discordSvg from '../assets/svgs/discord.svg';
import linkedinSvg from '../assets/svgs/linkedin.svg';
import emailSvg from '../assets/svgs/email.svg';
import logo from '../assets/logo/logo.svg';


const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left side - Logo and tagline */}
        <div className="footer-left">
          <div className="flex items-center">
              <a href="#hero">
                <span className="inline-flex items-center">
                  <img src={logo} alt="Prototyp3" className="w-8 h-8 sm:w-10 sm:h-10" />
                  <span className="logoFont ml-2 sm:ml-[10px] text-lg sm:text-xl md:text-2xl" style={{ fontFamily: 'var(--font-headline)' }}>Prototyp3</span>
                </span>
              </a>
          </div>
          <p className="footer-tagline">
            Join Fall 2025 Cohort. Where learning meets doing.
          </p>
        </div>
        
        {/* Right side - Social icons */}
        <div className="footer-right">
          <a href="https://discord.gg/AFbmtddjUz" className="social-icon" aria-label="Discord">
            <img src={discordSvg} alt="Discord" />
          </a>
          <a href="https://www.linkedin.com/company/prototyp3-org/" className="social-icon" aria-label="LinkedIn">
            <img src={linkedinSvg} alt="LinkedIn" />
          </a>
          <a href="mailto:prototyp3.org@gmail.com" className="social-icon" aria-label="Email">
            <img src={emailSvg} alt="Email" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
