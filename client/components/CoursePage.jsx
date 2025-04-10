"use client"; // Ensure this is client-side only

import { useState, useEffect } from 'react';
import CourseHero from '@/components/our-course/CourseHero';
import CourseSidebar from '@/components/our-course/CourseSidebar';
import AboutCourse from '@/components/our-course/AboutCourse';
import LearningOutcomes from '@/components/our-course/LearningOutcomes';
import CourseTopics from '@/components/our-course/CourseTopics';
import AssessmentMethod from '@/components/our-course/AssessmentMethod';
import Certification from '@/components/our-course/Certification';
import EnrollmentSteps from '@/components/our-course/EnrollmentSteps';
import FullPageLoader from '@/components/FullPageLoader';
import Breadcrumb from './Breadcrumb.';

export default function CoursePage({ slug }) {
  const [loading, setLoading] = useState(true); // Set a loading state

  // Simulate loading the page content
  useEffect(() => {
    const fetchData = async () => {
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate data fetching
      setLoading(false); // Once data is fetched, stop the loading state
    };

    fetchData();
  }, []);

  if (loading) {
    return <FullPageLoader />; // Show the full-page loader while the page is loading
  }

  const breadcrumbs = [
    { href: "/", label: "Home", icon: true },
    { href: "/course", label: "course" },
    { href: ` /${slug}`, label: ` ${slug}` },


  ];

  return (
    <div className="bg-gray-50 min-h-screen mt-24">
      <CourseHero slug={slug} />
      
      <div className="container mx-auto px-4 md:px-8 py-12">
      <Breadcrumb crumbs={breadcrumbs} fontColor="" />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <AboutCourse slug={slug} />
            <LearningOutcomes slug={slug} />
            <CourseTopics slug={slug} />
            <AssessmentMethod slug={slug} />
            <Certification slug={slug} />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <CourseSidebar slug={slug} />
          </div>
        </div>

        {/* How to Enroll Section */}
        <EnrollmentSteps slug={slug} />
      </div>
    </div>
  );
}
