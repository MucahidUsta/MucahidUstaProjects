import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-950 text-gray-600 dark:text-gray-400 transition-colors duration-300 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-2">
              Portfolio
            </h2>
            <p className="max-w-md text-sm">
              Showcasing my software projects, skills, and programming journey. 
              Feel free to reach out for collaboration or opportunities.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <SocialLink href="https://github.com/" aria-label="GitHub">
                <Github size={20} />
              </SocialLink>
              <SocialLink href="https://linkedin.com/" aria-label="LinkedIn">
                <Linkedin size={20} />
              </SocialLink>
              <SocialLink href="https://twitter.com/" aria-label="Twitter">
                <Twitter size={20} />
              </SocialLink>
              <SocialLink href="mailto:contact@example.com" aria-label="Email">
                <Mail size={20} />
              </SocialLink>
            </div>
            <p className="text-sm">
              &copy; {currentYear} Portfolio. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink: React.FC<{ 
  children: React.ReactNode; 
  href: string;
  'aria-label': string;
}> = ({ children, href, ...props }) => (
  <a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-600 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
    {...props}
  >
    {children}
  </a>
);

export default Footer;