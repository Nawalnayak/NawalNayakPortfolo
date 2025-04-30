import React from 'react';
import SocialLinks from './SocialLinks';
import { Code, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center mb-6 md:mb-0">
              <a href="#home" className="flex items-center text-2xl font-bold">
                <Code className="mr-2 text-blue-400" />
                <span className="text-blue-400">Port</span>
                <span>folio</span>
              </a>
            </div>
            
            <div>
              <SocialLinks />
            </div>
          </div>
          
          <hr className="border-gray-800 my-8" />
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} John Doe. All rights reserved.
            </p>
            
            <div className="flex flex-wrap justify-center space-x-4 text-sm text-gray-400">
              <a href="#" className="hover:text-blue-400 transition-colors duration-300 mb-2 md:mb-0">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors duration-300 mb-2 md:mb-0">
                Terms of Service
              </a>
              <p className="flex items-center">
                Made with <Heart size={14} className="mx-1 text-red-500" /> using React & Tailwind
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;