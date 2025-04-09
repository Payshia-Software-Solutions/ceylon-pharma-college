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
  'advanced-course-in-pharmacy-practice': [
  {
    title: "Pharmacology and Therapeutics",
    items: [
      "Pharmacodynamics and Pharmacokinetics",
      "Advanced Pathophysiology and Therapeutic Considerations",
      "Complex Drug Interactions and Management Strategies"
    ]
  },
  {
    title: "Advanced Clinical Pharmacy Practice",
    items: [
      "Evidence-based Medicine and Clinical Decision Support",
      "Clinical Pharmacy Interventions and Documentation",
      "Medication Therapy Management for Complex Patients",
      "Pharmacist-led Disease State Management"
    ]
  },
  {
    title: "Advanced Pharmaceutical Calculations and Compounding",
    items: [
      "Complex Dosing Calculations for Special Populations",
      "Drug Formulation and Calculations",
      "Advanced Sterile Compounding Techniques"
    ]
  },
  {
    title: "Pharmacy Management and Leadership",
    items: [
      "Pharmacy Operations Management and Workflow Optimization",
      "Quality Assurance and Continuous Improvement Methodologies",
      "Pharmacy Team Leadership and Professional Development",
      "Financial Management in Pharmacy Settings"
    ]
  },
  {
    title: "Medication Safety and Risk Management",
    items: [
      "Systematic Approaches to Medication Error Prevention",
      "Root Cause Analysis and Medication Incident Investigation",
      "Implementation of Medication Safety Technologies"
    ]
  },
  {
    title: "Interprofessional Collaboration and Communication",
    items: [
      "Advanced Patient Counseling and Motivational Interviewing Techniques",
      "Interdisciplinary Care Coordination and Team-Based Practice",
      "Health Literacy Considerations in Complex Medication Regimens",
      "Pharmaceutical Care Plan Development and Communication"
    ]
  }
  ],
  'certificate-course-in-pharmaceuticals': [
  {
    title: "Introduction to Pharmaceuticals",
    items: [
      "Basic concepts and terminology in the world of medicines"
    ]
  },
  {
    title: "Common Medication Classes",
    items: [
      "Overview of frequently prescribed medications and their purposes"
    ]
  },
  {
    title: "Reading Medication Labels",
    items: [
      "How to understand important information on prescription and over-the-counter products"
    ]
  },
  {
    title: "Proper Medication Storage and Disposal",
    items: [
      "Best practices for keeping medicines safe and effective"
    ]
  },
  {
    title: "Drug Interactions",
    items: [
      "Understanding how medications can interact with foods, supplements, and other drugs"
    ]
  },
  {
    title: "Recognizing Side Effects",
    items: [
      "How to identify common medication reactions and when to seek help"
    ]
  },
  {
    title: "Communicating with Healthcare Providers",
    items: [
      "Asking the right questions about your medications"
    ]
  },
  {
    title: "Medication Adherence",
    items: [
      "Strategies for taking medications as prescribed"
    ]
  }
],
'advanced-certificate-course-in-pharmaceuticals': [
  {
    title: "Advanced Pharmacology",
    items: [
      "Deeper understanding of how drugs work in the body and factors affecting drug response"
    ]
  },
  {
    title: "Specialized Medication Categories",
    items: [
      "In-depth exploration of medications for complex conditions including autoimmune disorders, cancer therapies, and rare diseases"
    ]
  },
  {
    title: "Therapeutic Substitutions",
    items: [
      "Understanding medication alternatives, generics vs. brand names, and their implications"
    ]
  },
  {
    title: "Medication Therapy Management",
    items: [
      "Advanced strategies for optimizing complex medication regimens"
    ]
  },
  {
    title: "Critical Evaluation of Medication Information",
    items: [
      "How to assess medication information from various sources"
    ]
  },
  {
    title: "Advanced Drug Interactions",
    items: [
      "Complex interactions between multiple medications and health conditions"
    ]
  },
  {
    title: "Pharmacogenomics Basics",
    items: [
      "Introduction to how genetics influence medication response"
    ]
  },
  {
    title: "Current Trends in Pharmaceutical Development",
    items: [
      "Overview of emerging therapies and medication technologies"
    ]
  }
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
