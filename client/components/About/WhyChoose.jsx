"use client";
import React from 'react';
import { Target, Lightbulb } from 'lucide-react';

const WhyChoose = () => {
  return (
    <div className="bg-gray-50 py-20 px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
            Our Vision & Mission
          </h1>
          <div className="w-24 h-1.5 bg-maincolor mx-auto rounded-full shadow-lg transform transition-all duration-300 hover:w-32"></div>
          <div className="w-12 h-0.5 bg-maincolor mx-auto mt-2 rounded-full opacity-60"></div>
        </div>

        {/* Vision and Mission Cards */}
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Vision Card */}
          <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 p-10 transform transition-all duration-500 hover:-translate-y-2 hover:scale-105 relative overflow-hidden">
            {/* Card background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <div className="flex items-center mb-8">
                <div className="p-4 bg-maincolor rounded-2xl mr-6 shadow-lg transform transition-all duration-300 group-hover:rotate-6 group-hover:scale-110">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                  Vision
                </h2>
              </div>
              <div className="relative">
                <div className="absolute left-0 top-0 w-1 h-full bg-maincolor rounded-full transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>
                <p className="text-lg text-gray-700 leading-relaxed pl-6 transform transition-all duration-300 group-hover:pl-8">
                  To become one of the world's leading institutions in education, setting the standards for excellence in pharmaceutical education and innovation.
                </p>
              </div>
            </div>
          </div>

          {/* Mission Card */}
          <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 p-10 transform transition-all duration-500 hover:-translate-y-2 hover:scale-105 relative overflow-hidden">
            {/* Card background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <div className="flex items-center mb-8">
                <div className="p-4 bg-maincolor rounded-2xl mr-6 shadow-lg transform transition-all duration-300 group-hover:rotate-6 group-hover:scale-110">
                  <Lightbulb className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 group-hover:text-yellow-600 transition-colors duration-300">
                  Mission
                </h2>
              </div>
              <div className="relative">
                <div className="absolute left-0 top-0 w-1 h-full bg-maincolor rounded-full transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>
                <p className="text-lg text-gray-700 leading-relaxed pl-6 transform transition-all duration-300 group-hover:pl-8">
                  To deliver exceptional pharmaceutical education through innovative teaching and training, empowering future healthcare professionals to provide quality care and advance global health.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
};

export default WhyChoose;