'use client';
import { useState, useEffect } from 'react';

// Mapping slugs to course topics
const courseTopicsDataMapping = {
  'certificate-course-in-pharmacy-practice': [
    {
      title: "Introduction to Pharmacy Practice",
      items: [
        "Role of a pharmacy assistant",
        "Types of pharmacies: community, hospital, and retail",
        "Pharmacy workflows and patient interactions"
      ]
    },
    {
      title: "Medical Terminology",
      items: [
        "Basic medical terms used in pharmacy",
        "Common abbreviations and symbols in prescriptions",
        "Medical terms for diseases and treatments"
      ]
    },
    {
      title: "Pharmaceutical Calculations",
      items: [
        "Basic dosage calculations",
        "Unit conversions (metric and household systems)",
        "Calculations for preparing medications"
      ]
    },
    {
      title: "Pharmacy Laws and Ethics",
      items: [
        "Legal responsibilities in pharmacy",
        "Patient rights and confidentiality",
        "Rules for controlled substances",
        "Ethical guidelines for pharmacy professionals"
      ]
    },
    {
      title: "Drug Types and Basic Pharmacology",
      items: [
        "Types of medications: pain relievers, antibiotics, blood pressure medications",
        "How medications work",
        "Common side effects and drug interactions"
      ]
    },
    {
      title: "Medication Dispensing and Labeling",
      items: [
        "Steps for filling prescriptions correctly",
        "Proper medication labeling",
        "Hands-on practice with sample prescriptions"
      ]
    },
    {
      title: "Drug Storage and Quality Control",
      items: [
        "Proper storage of medications",
        "Managing temperature-sensitive medications",
        "Handling expired medications"
      ]
    },
    {
      title: "Patient Communication",
      items: [
        "Effective communication techniques",
        "Helping patients understand their medications",
        "Practice through role-playing"
      ]
    },
    {
      title: "Health and Safety in the Pharmacy",
      items: [
        "Hygiene and infection control",
        "Handling dangerous chemicals",
        "Using protective equipment"
      ]
    },
    {
      title: "Practical Experience",
      items: [
        "Practice in simulated pharmacy settings",
        "Hands-on experience with dispensing and patient counseling"
      ]
    }
  ],
  // Add more courses with topics here
  'certificate-course-in-tech': [
    {
      title: "Introduction to Technology in Healthcare",
      items: [
        "Overview of health tech applications",
        "Tech advancements in healthcare systems",
        "Basic digital health records management"
      ]
    },
    {
      title: "Basic Programming for Healthcare Professionals",
      items: [
        "Introduction to programming languages",
        "Data structures and algorithms for health data",
        "Healthcare-related programming projects"
      ]
    },
    {
      title: "Digital Health Tools and Devices",
      items: [
        "Wearable health tech",
        "Monitoring devices in patient care",
        "The future of health devices and technology"
      ]
    },
    // Additional topics for the tech course
  ]
};

export default function CourseTopics({ slug }) {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    // Fetch the course topics based on the slug
    const courseTopics = courseTopicsDataMapping[slug];
    if (courseTopics) {
      setTopics(courseTopics);
    } else {
      // If no topics are found, set an empty array or display a fallback
      setTopics([]);
    }
  }, [slug]);

  if (topics.length === 0) {
    return (
      <section>
        <div className="flex items-center mb-6">
          <div className="h-10 w-1 bg-green-600 mr-4"></div>
          <h2 className="text-3xl font-bold text-gray-800">No Topics Available</h2>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <p className="text-center text-lg text-gray-500">Sorry, we couldn't find any topics for this course.</p>
        </div>
      </section>
    );
  }

  return (
    <section>
      <div className="flex items-center mb-6">
        <div className="h-10 w-1 bg-green-600 mr-4"></div>
        <h2 className="text-3xl font-bold text-gray-800">Course Topics</h2>
      </div>
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <div className="space-y-6">
          {topics.map((topic, index) => (
            <div key={index} className="border-b border-gray-200 pb-6 last:border-0 last:pb-0">
              <div className="flex items-center mb-4">
                <div className="bg-green-600 text-white rounded-full h-8 w-8 flex items-center justify-center mr-3">
                  <span className="font-bold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold">{topic.title}</h3>
              </div>
              <ul className="pl-11 space-y-2">
                {topic.items.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg className="h-5 w-5 text-green-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
