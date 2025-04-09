"use client";
import { useState, useEffect } from 'react';

// Mapping slugs to assessment data
const assessmentDataMapping = {
  'certificate-course-in-pharmacy-practice': {
    title: 'Assessment Method for Pharmacy Course',
    description: 'Your progress in the Certificate Course in Pharmacy Practice will be evaluated through the following methods:',
    assessments: [
      {
        title: 'Assessments',
        description: 'Evaluations during the course to track your progress',
        value: 3,
      },
      {
        title: 'Quizzes',
        description: 'Regular quizzes to reinforce your knowledge',
        value: 12,
      },
      {
        title: 'Practical Exams',
        description: 'Hands-on evaluations of your practical skills',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
        ),
      }
    ]
  },
  'certificate-course-in-tech': {
    title: 'Assessment Method for Technology Course',
    description: 'Your progress in the Certificate Course in Technology will be evaluated through the following methods:',
    assessments: [
      {
        title: 'Assessments',
        description: 'Evaluations during the course to track your progress',
        value: 4,
      },
      {
        title: 'Quizzes',
        description: 'Regular quizzes to reinforce your knowledge',
        value: 10,
      },
      {
        title: 'Project Work',
        description: 'Evaluate your learning through project-based assignments',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v4m0 0l2-2m-2 2l-2-2M16 8l2-2m-4 4l-2 2M8 8L6 6M12 12l2 2M16 16l2 2" />
          </svg>
        ),
      }
    ]
  }
};

export default function AssessmentMethod({ slug }) {
  // State for storing assessment data based on slug
  const [assessmentData, setAssessmentData] = useState(null);

  useEffect(() => {
    // Fetch assessment data based on slug
    const data = assessmentDataMapping[slug];
    
    if (data) {
      setAssessmentData(data);
    } else {
      // If no matching assessment data, set assessmentData to null
      setAssessmentData(null);
    }
  }, [slug]);

  if (!assessmentData) {
    return (
      <div>
        <h2>Assessment Method Not Found</h2>
        <p>The assessment data for the selected course does not exist.</p>
      </div>
    );
  }

  return (
    <section>
      <div className="flex items-center mb-6">
        <div className="h-10 w-1 bg-green-600 mr-4"></div>
        <h2 className="text-3xl font-bold text-gray-800">{assessmentData.title}</h2>
      </div>
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <p className="text-lg mb-6">{assessmentData.description}</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {assessmentData.assessments.map((assessment, index) => (
            <div key={index} className="bg-green-50 p-6 rounded-lg text-center">
              <div className="h-16 w-16 rounded-full bg-green-600 text-white flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                {assessment.value || assessment.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{assessment.title}</h3>
              <p>{assessment.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
