import React, { useEffect, useRef } from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const heroElement = heroRef.current;
    if (heroElement) {
      observer.observe(heroElement);
    }

    return () => {
      if (heroElement) {
        observer.unobserve(heroElement);
      }
    };
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="hero" 
      ref={heroRef}
      className="relative h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-950 transition-colors duration-300 opacity-0"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" />
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            <span className="block">Hi, I'm </span>
            <span className="text-primary-600 dark:text-primary-400">
              Mücahid Usta
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8">
            I build <span className="text-accent-500 font-medium">Mobile</span> and 
            <span className="text-accent-500 font-medium"> Web</span> software solutions
          </p>
          
          <div className="flex justify-center space-x-4 mb-12">
            <SocialButton 
              href="https://github.com/MucahidUsta" 
              icon={<Github size={20} />}
              label="GitHub"
            />
            <SocialButton 
              href="https://www.linkedin.com/in/bahtiyar-m%C3%BCcahid-usta-2b60ba261/" 
              icon={<Linkedin size={20} />}
              label="LinkedIn"
            />
          </div>
          
          <button 
            onClick={scrollToProjects}
            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white font-medium transition-colors duration-300"
          >
            View My Work
          </button>
        </div>
      </div>
      
      <button 
        onClick={scrollToProjects}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={36} />
      </button>
    </section>
  );
};

const SocialButton: React.FC<{ 
  href: string; 
  icon: React.ReactNode;
  label: string;
}> = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 shadow-md hover:shadow-lg transition-all duration-300"
    aria-label={label}
  >
    {icon}
  </a>
);

export default Hero;