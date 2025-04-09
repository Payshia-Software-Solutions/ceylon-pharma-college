"use client";
import { useState, useEffect } from 'react';

const courseDataMapping = {
  'certificate-course-in-pharmacy-practice': {
    title: 'Certificate Course in Pharmacy Practice',
    description: `The Certificate Course in Pharmacy Practice from Ceylon Pharma College gives you the basic knowledge and skills you need to work in the pharmacy field. This entry-level program helps you start a career as a pharmacy assistant or technician.`,
    features: [
      {
        title: 'Comprehensive Curriculum',
        description: 'Learn all aspects of pharmacy practice through a well-structured program.',
        iconPath: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
      },
      {
        title: 'Hands-on Practice',
        description: 'Gain practical experience through simulated pharmacy settings and real-world scenarios.',
        iconPath: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2'
      },
      {
        title: 'Recognized Certification',
        description: 'Earn a certificate recognized by ACTD and the Skill Development Council of Canada.',
        iconPath: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
      }
    ]
  },
  // You can add more courses here using slugs like 'certificate-course-in-tech', etc.
  'advanced-course-in-pharmacy-practice': {
    title: 'Advanced Course in Pharmacy Practice',
    description: `The Advanced Course in Pharmacy Practice offered by Ceylon Pharma College is designed to provide experienced pharmacy professionals with comprehensive knowledge and specialized skills necessary for advanced roles in the pharmaceutical industry and healthcare settings. This program builds on foundational knowledge to develop expertise in pharmacy practice, advanced therapeutics, and pharmaceutical management.`,
    features: [
      {
        title: 'Comprehensive Curriculum',
        description: 'Learn all aspects of pharmacy practice through a well-structured program.',
        iconPath: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
      },
      {
        title: 'Hands-on Practice',
        description: 'Gain practical experience through simulated pharmacy settings and real-world scenarios.',
        iconPath: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2'
      },
      {
        title: 'Recognized Certification',
        description: 'Earn a certificate recognized by ACTD and the Skill Development Council of Canada.',
        iconPath: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
      }
    ]
  }
};

export default function AboutCourse({ slug }) {
    // State for storing course data based on slug
    const [courseData, setCourseData] = useState(null);

    useEffect(() => {
      // Fetch course data based on slug
      const data = courseDataMapping[slug];
      
      if (data) {
        setCourseData(data);
      } else {
        // If no matching course data, set courseData to null
        setCourseData(null);
      }
    }, [slug]);
  
    if (!courseData) {
      return (
        <div>
          <h2>Course not found</h2>
          <p>The course you are looking for does not exist.</p>
        </div>
      );
    }

  return (
    <section>
      <div className="flex items-center mb-6">
        <div className="h-10 w-1 bg-green-600 mr-4"></div>
        <h2 className="text-3xl font-bold text-gray-800">{courseData.title}</h2>
      </div>
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <p className="text-lg leading-relaxed mb-4">{courseData.description}</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {courseData.features.map((feature, index) => (
            <div key={index} className="bg-green-50 p-6 rounded-lg">
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.iconPath} />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
