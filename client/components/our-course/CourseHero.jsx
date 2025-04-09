"use client";
import { useState, useEffect } from 'react';

// Mapping slugs to course data
const courseDataMapping = {
  'certificate-course-in-pharmacy-practice': {
    title: 'Pharmacy Practice Certificate',
    image: '/images/pharmacy-practice-hero.jpg',
    description: 'Start your career in pharmacy with our comprehensive certificate program.',
    breadcrumb: ['Home', 'Courses'],
  },
  'advanced-course-in-pharmacy-practice': {
    title: 'Advanced Course in Pharmacy Practice',
    image: '/images/pharmacy-practice-hero.jpg',
    description: 'Start your career in pharmacy with our comprehensive advanced certificate program.',
    breadcrumb: ['Home', 'Courses'],
  },
  'workshop-in-pharmacy-practice': {
    title: 'Workshop in Pharmacy Practice',
    image: '/images/pharmacy-practice-hero.jpg',
    description: 'Pharmacy Practice Workshop designed for pharmacy professionals looking to enhance their skills and knowledge in practical pharmacy applications.',
    breadcrumb: ['Home', 'Courses'],
  },
  'certificate-course-in-pharmaceuticals': {
    title: 'Certificate Course in Pharmaceuticals',
    image: '/images/pharmacy-practice-hero.jpg',
    description: 'Start your career in pharmacy with our comprehensive certificate program.',
    breadcrumb: ['Home', 'Courses'],
  },
  'advanced-certificate-course-in-pharmaceuticals': {
    title: 'Advanced Certificate Course in Pharmaceuticals',
    image: '/images/pharmacy-practice-hero.jpg',
    description: 'Start your career in pharmacy with our comprehensive advanced certificate program.',
    breadcrumb: ['Home', 'Courses'],
  },
};

export default function CourseHero({ slug }) {
  const [courseData, setCourseData] = useState(null);

  useEffect(() => {
    // Fetch the course data based on the slug
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
      <div className='container mx-auto px-4 md:px-8 relative z-20'>
        <h2>Course Not Found</h2>
        <p>The course details for the selected slug are not available.</p>
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-green-800 to-green-600 opacity-90 z-10"></div>
      <div 
        className="h-96 bg-cover bg-center" 
        style={{ backgroundImage: `url(${courseData.image || '/images/default-course.jpg'})` }}
      ></div>
      <div className="container mx-auto px-4 md:px-8 relative z-20">
        <div className="absolute bottom-12 left-0 right-0 px-4 md:px-8">
          <div className="flex items-center space-x-2 text-green-100 mb-4">
            {courseData.breadcrumb.map((item, index) => (
              <span key={index} className={index === courseData.breadcrumb.length - 1 ? 'font-medium' : ''}>
                {item}
                {index < courseData.breadcrumb.length - 1 && (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block mx-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                )}
              </span>
            ))}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{courseData.title}</h1>
          <p className="text-xl md:text-2xl text-green-100 max-w-3xl">
            {courseData.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="bg-white text-green-700 py-3 px-8 rounded-full font-bold hover:bg-green-50 transition duration-300 shadow-lg">
              Enroll Now
            </button>
            <button className="bg-transparent border-2 border-white text-white py-3 px-8 rounded-full font-bold hover:bg-white/10 transition duration-300">
              Download Syllabus
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
