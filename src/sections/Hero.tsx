import React, { useEffect, useRef } from 'react';
import SocialLinks from '../components/SocialLinks';
import { ArrowDown, Download } from 'lucide-react';

const Hero: React.FC = () => {
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let interval: number | null = null;
    
    const targetText = "Frontend Developer";
    
    const startAnimation = () => {
      let iteration = 0;
      
      if (textRef.current) {
        clearInterval(interval as number);
        
        interval = setInterval(() => {
          if (textRef.current) {
            textRef.current.innerText = targetText
              .split("")
              .map((letter, index) => {
                if (index < iteration) {
                  return targetText[index];
                }
                
                return letters[Math.floor(Math.random() * 26)];
              })
              .join("");
            
            if (iteration >= targetText.length) {
              clearInterval(interval as number);
            }
            
            iteration += 1 / 3;
          }
        }, 30) as unknown as number;
      }
    };
    
    startAnimation();
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 pt-16">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 top-1/4 w-64 h-64 rounded-full bg-blue-200 dark:bg-blue-900/30 blur-3xl opacity-60 dark:opacity-30"></div>
        <div className="absolute right-0 bottom-1/4 w-80 h-80 rounded-full bg-purple-200 dark:bg-purple-900/30 blur-3xl opacity-60 dark:opacity-30"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 inline-block">
            <span className="text-sm sm:text-base font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/50 px-4 py-1.5 rounded-full">
              Hello, I'm
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
            <span className="animate-fadeIn">Nawal Kishor Nayak</span>
          </h1>
          
          <h2 ref={textRef} className="text-xl sm:text-2xl md:text-3xl text-blue-600 dark:text-blue-400 font-medium mb-8">
            Frontend Developer
          </h2>
          
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Results-driven MCA student with expertise in React.js and Django. Passionate about creating 
            elegant, efficient, and user-friendly web applications that solve real-world problems.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="#contact"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md 
                        shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
            >
              Contact Me
            </a>
            <a
              href="src\sections\resume.pdf"
              className="px-6 py-3 bg-transparent border-2 border-blue-600 text-blue-600 dark:text-blue-400
                        hover:bg-blue-600/10 font-medium rounded-md flex items-center justify-center
                        transition-all duration-300 w-full sm:w-auto"
            >
              <Download size={18} className="mr-2" />
              Download CV
            </a>
          </div>
          
          <SocialLinks className="justify-center mb-16" />
          
          <a
            href="#about"
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-10 h-10 flex items-center justify-center
                       bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg animate-bounce"
            aria-label="Scroll down"
          >
            <ArrowDown size={20} className="text-blue-600 dark:text-blue-400" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero