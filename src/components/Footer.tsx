import discordSvg from '../assets/svgs/discord.svg';
import linkedinSvg from '../assets/svgs/linkedin.svg';
import emailSvg from '../assets/svgs/email.svg';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left side - Logo and tagline */}
        <div className="footer-left">
          <h2 className="footer-logo">
            Prototyp<span className="logo-accent">3</span>
          </h2>
          <p className="footer-tagline">
            Join Fall 2025 Cohort. Where learning meets doing.
          </p>
        </div>
        
        {/* Right side - Social icons */}
        <div className="footer-right">
          <a href="#" className="social-icon" aria-label="Discord">
            <img src={discordSvg} alt="Discord" />
          </a>
          <a href="#" className="social-icon" aria-label="LinkedIn">
            <img src={linkedinSvg} alt="LinkedIn" />
          </a>
          <a href="#" className="social-icon" aria-label="Email">
            <img src={emailSvg} alt="Email" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
