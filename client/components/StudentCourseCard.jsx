import { Award, User, BookOpen, Star, GraduationCap } from "lucide-react";
import { useState } from "react";

export default function StudentCourseCard({ studentInfo, courseDetails, courseCode, finalGrade, gradeResult }) {
  // Fallback for demo purposes if props aren't provided
  const student = studentInfo || {
    civil_status: "Mr.",
    first_name: "John",
    last_name: "Doe",
    name_on_certificate: "John A. Doe",
    username: "JD2025"
  };
  
  const course = courseDetails?.course_name || "Not Available";
  const code = courseCode || "CS301";
  const grade = finalGrade || "85%";
  const result = gradeResult || "Excellent";
  
  // Calculate star count based on result
  const getStarCount = (result) => {
    const resultMap = {
      "Excellent": 5,
      "Very Good": 4,
      "Good": 3, 
      "Satisfactory": 2,
      "Pass": 1
    };
    return resultMap[result] || 3;
  };
  
  const starCount = getStarCount(result);
  
  // Get appropriate color for result
  const getResultColor = (result) => {
    const colorMap = {
      "Excellent": "bg-emerald-100 text-emerald-800",
      "Very Good": "bg-green-100 text-green-800",
      "Good": "bg-green-100 text-green-700",
      "Satisfactory": "bg-yellow-100 text-yellow-800",
      "Pass": "bg-orange-100 text-orange-800",
      "Fail": "bg-red-100 text-red-800"
    };
    return colorMap[result] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 px-4 py-3">
        <div className="flex items-center">
          <GraduationCap className="text-white mr-2" size={20} />
          <h2 className="text-lg font-bold text-white">Certificate Verification</h2>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-4">
        {/* Student Info Section */}
        <div className="bg-green-50 rounded-lg p-3 mb-3">
          <div className="flex items-center mb-1">
            <User className="text-green-600 mr-2" size={18} />
            <span className="font-medium text-gray-700">Student Information</span>
          </div>
          
          <div className="grid grid-cols-2 gap-2 mt-1">
            <div className="flex flex-col">
              <span className="text-xs text-gray-500">Full Name</span>
              <span className="font-medium text-sm">{`${student.civil_status} ${student.first_name} ${student.last_name}`}</span>
            </div>
            
            <div className="flex flex-col">
              <span className="text-xs text-gray-500">Certificate Name</span>
              <span className="font-medium text-sm">{student.name_on_certificate || "Not Available"}</span>
            </div>
            
            <div className="flex flex-col col-span-2">
              <span className="text-xs text-gray-500">Index Number</span>
              <span className="font-medium text-sm">{student.username}</span>
            </div>
          </div>
        </div>
        
        {/* Course Info Section */}
        <div className="grid grid-cols-2 gap-3">
          {/* Course Details */}
          <div className="bg-green-50 rounded-lg p-3">
            <div className="flex items-center mb-1">
              <BookOpen className="text-green-600 mr-2" size={18} />
              <span className="font-medium text-gray-700">Course Details</span>
            </div>
            
            <div className="mt-1">
              <div className="flex flex-col mb-1">
                <span className="text-xs text-gray-500">Course Name</span>
                <span className="font-medium text-sm">{course}</span>
              </div>
              
              <div className="flex flex-col">
                <span className="text-xs text-gray-500">Course Code</span>
                <span className="font-medium text-sm">{code}</span>
              </div>
            </div>
          </div>
          
          {/* Results Section */}
          <div className="bg-green-50 rounded-lg p-3">
            <div className="flex items-center mb-1">
              <Award className="text-green-600 mr-2" size={18} />
              <span className="font-medium text-gray-700">Results</span>
            </div>
            
            <div className="flex flex-col">
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">Final Grade</span>
                <span className="text-lg font-bold text-gray-800">{grade}</span>
              </div>
              
              <div className="mt-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">Rating</span>
                  <span className={`inline-block ${getResultColor(result)} px-2 py-0.5 rounded-full text-xs font-medium`}>
                    {result}
                  </span>
                </div>
                <div className="flex items-center mt-1">
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      size={16}
                      className={index < starCount ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Small footer */}
      <div className="bg-gray-50 px-4 py-2 border-t border-gray-100">
        <p className="text-xs text-gray-500 text-center">
          Generated {new Date().toLocaleDateString()}
        </p>
      </div>
    </div>
  );
}