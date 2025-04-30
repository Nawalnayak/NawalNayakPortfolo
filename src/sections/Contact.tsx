import React from 'react';
import ContactForm from '../components/ContactForm';
import SocialLinks from '../components/SocialLinks';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300">
            Have a question or want to work together? Feel free to contact me.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Contact Information
            </h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="mr-4 p-3 bg-blue-100 dark:bg-blue-900/50 rounded-full">
                  <Mail className="text-blue-600 dark:text-blue-400" size={20} />
                </div>
                <div>
                  <h4 className="text-sm text-gray-500 dark:text-gray-400 mb-1">Email</h4>
                  <a 
                    href="mailto:nawalnayak2233@gmail.com" 
                    className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                  >
                    nawalnayak2233@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 p-3 bg-blue-100 dark:bg-blue-900/50 rounded-full">
                  <Phone className="text-blue-600 dark:text-blue-400" size={20} />
                </div>
                <div>
                  <h4 className="text-sm text-gray-500 dark:text-gray-400 mb-1">Phone</h4>
                  <a 
                    href="tel:+919165712276" 
                    className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                  >
                    +91 916 571 2276
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 p-3 bg-blue-100 dark:bg-blue-900/50 rounded-full">
                  <MapPin className="text-blue-600 dark:text-blue-400" size={20} />
                </div>
                <div>
                  <h4 className="text-sm text-gray-500 dark:text-gray-400 mb-1">Location</h4>
                  <p className="text-gray-800 dark:text-gray-200">
                    India
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-4">
                Connect with me
              </h4>
              <SocialLinks />
            </div>
            
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm">
              <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">
                Available for Opportunities
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                I'm currently open to new opportunities in frontend and full-stack development. If you have a position that matches my skills and experience, please get in touch.
              </p>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-sm p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Send Me a Message
            </h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact