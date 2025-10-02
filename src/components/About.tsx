import React from 'react';
import Slider from 'react-slick';
import { Award, Shield, Clock, Users, CheckCircle, Star } from 'lucide-react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./About.css";

const About: React.FC = () => {
  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "100% Plagiarism-Free",
      description: "Every piece of work is original and checked through advanced plagiarism detection tools."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Timely Delivery",
      description: "We respect deadlines and ensure your work is delivered on time, every time."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Expert Writers",
      description: "Our team consists of PhD holders and industry experts across various disciplines."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "24/7 Support",
      description: "Round-the-clock customer support to address your queries and concerns."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      university: "Harvard University",
      text: "Academic Ace helped me with my dissertation. The quality was exceptional and it was delivered right on time. Highly recommended!",
      rating: 5
    },
    {
      name: "Michael Chen",
      university: "Stanford University", 
      text: "I was struggling with my statistics assignment. Their expert not only solved it but also explained the methodology clearly.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      university: "MIT",
      text: "The research paper I received was well-researched, properly cited, and helped me understand the topic better. Great service!",
      rating: 5
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main About Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Why Choose Academic Ace?
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We are a global team of academic professionals dedicated to helping students achieve their educational goals. 
            With years of experience and a commitment to excellence, we provide reliable, high-quality academic support services.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">10,000+</div>
              <div className="text-gray-600 font-medium">Happy Students</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">500+</div>
              <div className="text-gray-600 font-medium">Expert Writers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-gray-600 font-medium">Subject Areas</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">98%</div>
              <div className="text-gray-600 font-medium">Success Rate</div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">What Our Students Say</h3>
            <p className="text-lg text-gray-600">Real feedback from students who achieved success with our help</p>
          </div>

          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-4">
                <div className="bg-white rounded-xl p-6 shadow-lg h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-4 italic leading-relaxed">
                      "{testimonial.text}"
                    </p>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.university}</div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Quality Assurance */}
        <div className="mt-20 bg-blue-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Quality Promise</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "Rigorous quality checks by senior editors",
              "Multiple plagiarism scans using premium tools", 
              "Unlimited revisions until you're satisfied"
            ].map((promise, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{promise}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
