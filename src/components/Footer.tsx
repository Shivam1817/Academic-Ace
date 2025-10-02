import React from 'react';
import { BookOpen, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Academic Ace</span>
            </div>
            <p className="text-gray-400 mb-4">
              Expert academic support and assignment help for students worldwide. 
              Plagiarism-free, timely, and reliable service you can trust.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Essay Writing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Research Papers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Mathematics Help</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Programming</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Business Studies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Science Projects</a></li>
            </ul>
          </div>

          {/* Academic Levels */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Academic Levels</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">High School</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Undergraduate</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Graduate</a></li>
              <li><a href="#" className="hover:text-white transition-colors">PhD</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Professional</a></li>
            </ul>
          </div>

          {/* Study Abroad */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Study Abroad</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">USA</a></li>
              <li><a href="#" className="hover:text-white transition-colors">UK</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Canada</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Australia</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Germany</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <a href="mailto:academicace08@gmail.com" className="text-gray-400 hover:text-white transition-colors">academicace08@gmail.com</a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <a href="tel:+919163366529" className="text-gray-400 hover:text-white transition-colors">+91 9163366529</a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="text-gray-400">Global Service Available</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Academic Ace. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Refund Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
