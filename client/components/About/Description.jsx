"use client";
import React, { useState, useEffect } from "react";
import { GraduationCap, Users, BookOpen, Heart, Award, TrendingUp } from "lucide-react";
import config from '@/config';

function Description() {
  // Counter states - starting with null to show loading state
  const [userCount, setUserCount] = useState(null);
  const [courseCount, setCourseCount] = useState(null);
  const [onlineCount, setOnlineCount] = useState(1234); // Keep this as static or make it dynamic too

  const COURSE_URL = `${config.API_BASE_URL}/parent-main-course/get/counts`;

  useEffect(() => {
    // Fetch user count from the API
    fetch(`${config.API_BASE_URL}/users/count`)
      .then(response => response.json())
      .then(data => {
        if (data.user_count) {
          setUserCount(data.user_count);
        }
      })
      .catch(error => console.error('Error fetching user count:', error));
  }, []);

  useEffect(() => {
    // Fetch course count from the API
    fetch(COURSE_URL)
      .then(response => response.json())
      .then(data => {
        if (data.total_courses) {
          setCourseCount(data.total_courses);
        }
      })
      .catch(error => console.error('Error fetching course count:', error));
  }, []);

  return (
    <div className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            What makes us <span className="text-maincolor relative">
              special
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-maincolor rounded-full transform scale-x-110"></div>
            </span>?
          </h1>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto mt-6">
            Discover why thousands of students choose us for their pharmaceutical education journey
          </p>
        </div>

     
        {/* Main Content */}
        <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl border border-gray-100">
          <div className="space-y-6 lg:space-y-8">
            
            <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6 p-4 sm:p-6 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors duration-300 group">
              <div className="bg-blue-500 p-3 sm:p-4 rounded-xl shadow-lg group-hover:shadow-xl transition-shadow duration-300 flex-shrink-0">
                <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Expert Education</h3>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  Our expert educators use modern teaching methods to give you a 
                  <span className="font-semibold text-blue-600"> strong foundation in pharmaceuticals</span>. 
                  Learn from anywhere in Sri Lanka through our 
                  <span className="font-semibold text-blue-600"> advanced online platform</span>!
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6 p-4 sm:p-6 rounded-xl bg-green-50 hover:bg-green-100 transition-colors duration-300 group">
              <div className="bg-green-500 p-3 sm:p-4 rounded-xl shadow-lg group-hover:shadow-xl transition-shadow duration-300 flex-shrink-0">
                <Users className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Career Connections</h3>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  We help connect you with 
                  <span className="font-semibold text-green-600"> trusted employers in healthcare</span> 
                  to kickstart your career with confidence and expert guidance.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6 p-4 sm:p-6 rounded-xl bg-purple-50 hover:bg-purple-100 transition-colors duration-300 group">
              <div className="bg-purple-500 p-3 sm:p-4 rounded-xl shadow-lg group-hover:shadow-xl transition-shadow duration-300 flex-shrink-0">
                <Heart className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Your Success Journey</h3>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  Ready to take your first step into healthcare? Join our community today 
                  and transform your career aspirations into reality with our comprehensive support system.
                </p>
              </div>
            </div>
            
          </div>

          {/* Simple Enhanced Statistics */}
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl mt-8 p-6 sm:p-8 shadow-lg border border-gray-100 mb-8 lg:mb-12">
            <div className="text-center mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Our Impact</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
              <div className="group hover:transform hover:scale-105 transition-all duration-300">
               
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-600 mb-2">
                  {userCount ? `${userCount.toLocaleString()}+` : (
                    <div className="flex items-center justify-center space-x-1">
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                  )}
                </div>
                 <div className="flex items-center justify-center mb-4">
                  <div className="bg-blue-500 p-4 rounded-full shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                </div>
                <p className="text-gray-700 font-semibold text-lg">Happy Students</p>
              </div>
              
              <div className="group hover:transform hover:scale-105 transition-all duration-300">
              
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-green-600 mb-2">
                  {courseCount ? `${courseCount}+` : (
                    <div className="flex items-center justify-center space-x-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                  )}
                </div>
                  <div className="flex items-center justify-center mb-4">
                  <div className="bg-green-500 p-4 rounded-full shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                </div>
                <p className="text-gray-700 font-semibold text-lg">Expert Courses</p>
              </div>
              
              <div className="group hover:transform hover:scale-105 transition-all duration-300">
               
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-purple-600 mb-2">
                  {onlineCount.toLocaleString()}+
                </div>
                 <div className="flex items-center justify-center mb-4">
                  <div className="bg-purple-500 p-4 rounded-full shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                </div>
                <p className="text-gray-700 font-semibold text-lg">Online Learners</p>
              </div>
            </div>
          </div>

        </div>
        
      </div>
    </div>
  );
}

export default Description;