"use client";
import { useState, useEffect } from 'react';

// Mapping slugs to course data, materials, and entry requirements
const courseSidebarDataMapping = {
  'certificate-course-in-pharmacy-practice': {
    duration: '6 Months',
    schedule: 'Weekends, 9 AM - 12 PM',
    level: 'Intermediate',
    price: 'LKR 15,000',
    materials: [
      "Printed study materials",
      "Notebooks",
      "Mobile phone mount",
      "Games book",
      "Pen",
      "Exam book",
      "Image book"
    ],
    entryRequirements: {
      education: [
        "Pass in Mathematics OR Science in GCE O/L",
        "Pass in Mathematics, Science, OR Health Sciences in London O/L",
        "Diploma or Certificate in Allied Health Sciences"
      ],
      workExperience: [
        "At least 3 months experience as a Pharmacy Assistant",
        "Experience as a Caregiver with medication management skills",
        "Experience in a healthcare facility or pharmacy"
      ]
    }
  },
  'advanced-course-in-pharmacy-practice': {
    duration: '6 Months',
    schedule: 'Weekdays, 6 PM - 9 PM',
    level: 'Advanced',
    price: 'LKR 15,000',
    materials: [
      "Printed study materials",
      "Notebooks",
      "Mobile phone mount",
      "Games book",
      "Pen",
      "Exam book",
      "Image book"
    ],
    entryRequirements: {
      education: [
        "Should complete certificate course in pharmacy practice",
        "03 passes in Advanced Level Exam With Chemistry",
      ],
      workExperience: [
        "At least 6 months experience as a Pharmacy Assistant",
      ]
    }
  },
  // Add more courses as necessary
};

export default function CourseSidebar({ slug }) {
  const [courseData, setCourseData] = useState(null);

  useEffect(() => {
    // Fetch the course data based on the slug
    const data = courseSidebarDataMapping[slug];

    if (data) {
      setCourseData(data);
    } else {
      // If no matching course data, set courseData to null
      setCourseData(null);
    }
  }, [slug]);

  if (!courseData) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-6">
        <p className="text-center text-lg text-gray-500">Course information not available.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden sticky top-24">
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <span className="text-3xl font-bold text-green-800">{courseData.price}</span>
          <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">Limited Seats</span>
        </div>
        
        <hr className="my-6" />
        
        <div className="space-y-6 mb-6">
          <div className="flex items-start">
            <div className="flex items-center justify-center bg-green-100 h-12 w-12 rounded-full mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="font-medium text-gray-500">Duration</p>
              <p className="font-semibold text-gray-800">{courseData.duration}</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="flex items-center justify-center bg-green-100 h-12 w-12 rounded-full mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <p className="font-medium text-gray-500">Schedule</p>
              <p className="font-semibold text-gray-800">{courseData.schedule}</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="flex items-center justify-center bg-green-100 h-12 w-12 rounded-full mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <p className="font-medium text-gray-500">Level</p>
              <p className="font-semibold text-gray-800">{courseData.level}</p>
            </div>
          </div>
        </div>
        
        <hr className="my-6" />
        
        <h4 className="font-bold text-gray-800 mb-4">Entry Requirements</h4>
        <div className="mb-6">
          {/* Education Requirements */}
          <div className="mb-4">
            <p className="font-semibold text-gray-700 mb-2">Education (one of):</p>
            <ul className="space-y-2">
              {courseData.entryRequirements.education.map((item, index) => (
                <li key={index} className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Work Experience Requirements */}
          <div>
            <p className="font-semibold text-gray-700 mb-2">OR Work Experience (one of):</p>
            <ul className="space-y-2">
              {courseData.entryRequirements.workExperience.map((item, index) => (
                <li key={index} className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <button className="w-full bg-green-600 text-white py-4 px-6 rounded-lg font-bold hover:bg-green-700 transition duration-300 shadow-md flex items-center justify-center">
          <span>Enroll Now</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
        
        <p className="text-center mt-4 text-sm text-gray-600">
          For inquiries, call: <span className="font-medium">071 5 884 884</span>
        </p>
      </div>
      
      <div className="bg-green-50 p-6">
        <h4 className="font-bold text-gray-800 mb-4">Materials Provided</h4>
        <ul className="space-y-2">
          {courseData.materials.map((item, index) => (
            <li key={index} className="flex items-start">
              <svg className="h-5 w-5 text-green-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
