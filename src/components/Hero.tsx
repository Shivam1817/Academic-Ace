import React from 'react';
import { CheckCircle, Star, Users, Clock } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          {/* Content */}
          <div className="mb-12 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Expert Academic Support for 
              <span className="text-blue-600"> Student Success</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Get professional assignment help and academic support from our team of experts. 
              Plagiarism-free content, timely delivery, and comprehensive assistance across all subjects.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700 font-medium">100% Plagiarism-Free</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-blue-500" />
                <span className="text-gray-700 font-medium">On-Time Delivery</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-purple-500" />
                <span className="text-gray-700 font-medium">Expert Writers</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToContact}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg shadow-lg"
              >
                Get Assignment Help Now
              </button>
              <button 
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-600 hover:text-white transition-colors font-semibold text-lg"
              >
                View Our Services
              </button>
            </div>
          </div>

          {/* Stats/Visual */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Why Students Trust Us</h3>
                <div className="flex justify-center items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                  <span className="ml-2 text-gray-600 font-medium">4.9/5 Rating</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">1,000+</div>
                  <div className="text-gray-600">Students Helped</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-1">98%</div>
                  <div className="text-gray-600">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-1">24/7</div>
                  <div className="text-gray-600">Support</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-1">10+</div>
                  <div className="text-gray-600">Expert Writers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
