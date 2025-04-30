import React from 'react';
import { socials } from '../data';
import { Github as GitHub, Linkedin, Twitter, Instagram } from 'lucide-react';

const SocialLinks: React.FC<{ className?: string }> = ({ className = '' }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'github':
        return <GitHub />;
      case 'linkedin':
        return <Linkedin />;
      case 'twitter':
        return <Twitter />;
      case 'instagram':
        return <Instagram />;
      default:
        return null;
    }
  };

  return (
    <div className={`flex space-x-4 ${className}`}>
      {socials.map((social) => (
        <a
          key={social.id}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center rounded-full 
                   bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300
                   hover:bg-blue-500 dark:hover:bg-blue-600 hover:text-white dark:hover:text-white
                   transition-all duration-300 transform hover:scale-110"
          aria-label={social.name}
        >
          {getIcon(social.icon)}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;