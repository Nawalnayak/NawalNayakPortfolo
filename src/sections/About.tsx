import React from 'react';
import SkillBar from '../components/SkillBar';
import { skills } from '../data';
import { User, Briefcase, GraduationCap, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300">
            Learn about my journey, skills, and what drives me as a developer.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="mr-4 p-2 bg-blue-100 dark:bg-blue-900/50 rounded-full">
                <User size={24} className="text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Who am I?</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  I'm a passionate Frontend Developer and MCA student with a strong foundation in full-stack web development. 
                  I specialize in React.js and Django, focusing on creating responsive and user-friendly web applications. 
                  Currently contributing to live projects while pursuing my master's degree.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="mr-4 p-2 bg-blue-100 dark:bg-blue-900/50 rounded-full">
                <Briefcase size={24} className="text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Experience</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Currently working as a Web Development Intern at Adyant SoftTech, where I contribute to client projects
                  using React.js and Django. I'm gaining hands-on experience in both frontend and backend development,
                  working alongside senior developers to create scalable solutions.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="mr-4 p-2 bg-blue-100 dark:bg-blue-900/50 rounded-full">
                <GraduationCap size={24} className="text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Education</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Currently pursuing MCA at Shri Rawatpura Sarkar University (2023-Present). Completed BCA from 
                  Maharaja Agrasen International College with 7.2 CGPA (2023). Constantly enhancing my skills through 
                  practical projects and professional development.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="mr-4 p-2 bg-blue-100 dark:bg-blue-900/50 rounded-full">
                <Award size={24} className="text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Certifications</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Currently pursuing a 3-month Python Programming certification from GeeksforGeeks, focusing on
                  advanced Python concepts and best practices. Committed to continuous learning and professional growth.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Technical Skills</h3>
            {skills.map((skill) => (
              <SkillBar key={skill.id} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;