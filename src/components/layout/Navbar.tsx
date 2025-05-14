import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Github, Linkedin } from 'lucide-react';
import ThemeToggle from '../ui/ThemeToggle';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavLinkClick = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed w-full top-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center h-16 md:h-20">
        {/* Logo */}
        <div 
          className="text-2xl font-bold text-primary-600 dark:text-primary-400 cursor-pointer"
          onClick={() => handleNavLinkClick('hero')}
        >
          Portfolio
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink onClick={() => handleNavLinkClick('projects')}>Projects</NavLink>
          <NavLink onClick={() => handleNavLinkClick('videos')}>Videos</NavLink>
          <NavLink onClick={() => handleNavLinkClick('skills')}>Skills</NavLink>
          <NavLink onClick={() => handleNavLinkClick('contact')}>Contact</NavLink>
          
          <div className="flex items-center space-x-4">
            <a 
              href="https://github.com/MucahidUsta" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-400 transition-colors"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/bahtiyar-m%C3%BCcahid-usta-2b60ba261/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-400 transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <ThemeToggle />
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-4 md:hidden">
          <ThemeToggle />
          <button
            className="text-gray-600 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-400"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden fixed inset-0 z-50 bg-white dark:bg-gray-900 transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-8">
            <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
              Portfolio
            </div>
            <button 
              className="text-gray-600 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-400"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={24} />
            </button>
          </div>
          
          <nav className="flex flex-col space-y-6">
            <MobileNavLink onClick={() => handleNavLinkClick('projects')}>Projects</MobileNavLink>
            <MobileNavLink onClick={() => handleNavLinkClick('videos')}>Videos</MobileNavLink>
            <MobileNavLink onClick={() => handleNavLinkClick('skills')}>Skills</MobileNavLink>
            <MobileNavLink onClick={() => handleNavLinkClick('contact')}>Contact</MobileNavLink>
            
            <div className="flex items-center space-x-6 pt-4">
              <a 
                href="https://github.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-400 transition-colors"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://linkedin.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-400 transition-colors"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

const NavLink: React.FC<{ children: React.ReactNode; onClick: () => void }> = ({ 
  children, 
  onClick 
}) => (
  <button
    className="relative text-gray-800 dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-400 font-medium transition-colors"
    onClick={onClick}
  >
    {children}
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full" />
  </button>
);

const MobileNavLink: React.FC<{ children: React.ReactNode; onClick: () => void }> = ({ 
  children, 
  onClick 
}) => (
  <button
    className="text-2xl text-gray-800 dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-400 font-medium transition-colors"
    onClick={onClick}
  >
    {children}
  </button>
);

export default Navbar;