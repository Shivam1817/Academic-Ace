import React from 'react';
import { FileText, Calculator, Microscope, Globe, Code, BookOpen, PenTool, TrendingUp } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Essay Writing",
      description: "Professional essays, research papers, and dissertations across all academic levels and subjects.",
      features: ["Original Content", "Proper Citations", "Multiple Formats"]
    },
    {
      icon: <Calculator className="w-8 h-8" />,
      title: "Mathematics & Statistics",
      description: "Expert help with complex mathematical problems, statistical analysis, and data interpretation.",
      features: ["Step-by-Step Solutions", "Data Analysis", "SPSS/R Support"]
    },
    {
      icon: <Microscope className="w-8 h-8" />,
      title: "Science Subjects",
      description: "Comprehensive support for Physics, Chemistry, Biology, and other scientific disciplines.",
      features: ["Lab Reports", "Research Projects", "Technical Writing"]
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Programming & IT",
      description: "Coding assignments, software development projects, and technical documentation.",
      features: ["Multiple Languages", "Code Documentation", "Project Development"]
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Business & Economics",
      description: "Business plans, case studies, market analysis, and economic research projects.",
      features: ["Market Research", "Financial Analysis", "Strategic Planning"]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Liberal Arts",
      description: "Literature analysis, history papers, philosophy essays, and humanities projects.",
      features: ["Critical Analysis", "Historical Research", "Creative Writing"]
    },
    {
      icon: <PenTool className="w-8 h-8" />,
      title: "Content Writing",
      description: "Professional content creation for blogs, websites, and marketing materials.",
      features: ["SEO Optimized", "Engaging Content", "Brand Voice"]
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Research Support",
      description: "Comprehensive research assistance, literature reviews, and methodology development.",
      features: ["Source Finding", "Data Collection", "Analysis Support"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Academic Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide expert assistance across all academic disciplines and levels. 
            From high school to PhD, our experienced team is here to help you succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-blue-600 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-sm text-gray-500 flex items-center">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h3>
            <p className="text-lg text-gray-600">Simple steps to get the academic help you need</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Submit Requirements", desc: "Share your assignment details and requirements" },
              { step: "2", title: "Get Quote", desc: "Receive a transparent quote with no hidden fees" },
              { step: "3", title: "Expert Assignment", desc: "We assign the best expert for your subject" },
              { step: "4", title: "Receive Solution", desc: "Get your completed work on time, every time" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
