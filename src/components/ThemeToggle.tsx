import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 
                transition-all duration-300 ease-in-out hover:bg-gray-300 dark:hover:bg-gray-600"
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {theme === 'dark' ? (
        <Sun size={20} className="transition-transform duration-300 hover:rotate-45" />
      ) : (
        <Moon size={20} className="transition-transform duration-300 hover:rotate-12" />
      )}
    </button>
  );
};

export default ThemeToggle;