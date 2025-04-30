import React from 'react';
import { Experience } from '../types';
import { Briefcase } from 'lucide-react';

interface ExperienceCardProps {
  experience: Experience;
  isLast: boolean;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, isLast }) => {
  return (
    <div className="relative pl-8 pb-8">
      {/* Timeline */}
      <div className="absolute top-0 left-0 h-full w-0.5 bg-blue-200 dark:bg-blue-900"></div>
      
      {/* Icon */}
      <div className="absolute top-0 left-0 -translate-x-1/2 w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-950 border-2 border-blue-500 dark:border-blue-600 flex items-center justify-center">
        <Briefcase size={16} className="text-blue-600 dark:text-blue-400" />
      </div>
      
      {/* Content */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 ml-4">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{experience.role}</h3>
          <span className="text-blue-600 dark:text-blue-400 font-medium text-sm mt-1 sm:mt-0">
            {experience.duration}
          </span>
        </div>
        <p className="text-gray-700 dark:text-gray-300 font-medium mb-3">{experience.company}</p>
        <ul className="space-y-2">
          {experience.description.map((item, index) => (
            <li key={index} className="text-gray-600 dark:text-gray-400 text-sm flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceCard;