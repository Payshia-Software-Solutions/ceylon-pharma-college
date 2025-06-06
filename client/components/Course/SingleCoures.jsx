"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation"; 
import SectionHeader from "../Common/SectionHeader";
import InstructorCard from "@/components/Course/InstructorCard";
import DescriptionCard from "./DescriptionCard";
import config from "@/config";
import Breadcrumb  from "../Breadcrumb.";

function SingleCourse() {
  const { slug } = useParams(); 

  const [course, setCourse] = useState(null);
  const [courseModules, setCourseModules] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!slug) return;

    const fetchCourse = async () => {
      try {
        console.log("Fetching course for slug:", slug);
        const response = await fetch(
          `${config.API_BASE_URL}/parent-main-course/${slug}`
        );
        if (!response.ok) throw new Error("Failed to fetch course details");

        const data = await response.json();
        console.log("Course Data:", data);

        if (data.module_list && typeof data.module_list === "string") {
          const moduleCodes = data.module_list
            .split(",")
            .map((code) => code.trim());
          console.log("Module Codes:", moduleCodes);

          const modulesResponse = await fetch(`${config.API_BASE_URL}/course-modules`);
          if (!modulesResponse.ok) throw new Error("Failed to fetch course modules");

          const modulesData = await modulesResponse.json();

          const filteredModules = modulesData.filter((module) =>
            moduleCodes.includes(module.module_code)
          );

          setCourseModules(filteredModules.length > 0 ? filteredModules : []);
        } else {
          setCourseModules([]); 
        }

        setCourse(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [slug]);

  useEffect(() => {
    if (courseModules && courseModules.length > 0) {
      console.log("Course Modules State Updated:", courseModules);
    }
  }, [courseModules]);

  if (loading) return <p>Loading course details...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!course) return <p>No course found</p>;


  const breadcrumbs = [
    { href: "/", label: "Home", icon: true },
    { href: "/course", label: "course" },
  ];

  return (
    <div>
      {/* Header Section */}
      <div>
        <SectionHeader
          imgURL={"/assets/testimonial/doctor1.jpg"}
          title={course.course_name || "Course Details"}
        />
      </div>

      <div className="mx-auto  container px-4 py-2 md:px-16 md:py-8">
        <div className="mt-8">
          {/* Heading */}
          <div className="mb-8">
            <h2 className="text-4xl font-bold">{course.course_name}</h2>
            <p className="text-xl text-gray-600">{course.mini_description}</p>
          </div>

          {/* Description Card for Small Screens */}
          <div className="block lg:hidden mb-8">
            <DescriptionCard />
          </div>

          {/* Overview and Course Description Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Overview Section */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="max-w-md">
                  <h1 className="text-2xl font-semibold mb-4">Overview</h1>

                  <ul className="space-y-4">
                    <li className="flex justify-between border-b pb-2">
                      <span className="font-medium">📚 Lectures</span>
                      <span>{course.lecture_count}</span>
                    </li>
                    <li className="flex justify-between border-b pb-2">
                      <span className="font-medium">⏱ Duration</span>
                      <span>{course.course_duration}</span>
                    </li>
                    <li className="flex justify-between border-b pb-2">
                      <span className="font-medium">✅ Assessments</span>
                      <span>{course.assessments}</span>
                    </li>
                    <li className="flex justify-between border-b pb-2">
                      <span className="font-medium">🌐 Language</span>
                      <span>{course.language}</span>
                    </li>
                    <li className="flex justify-between border-b pb-2">
                      <span className="font-medium">❓ Quizzes</span>
                      <span>{course.quizzes}</span>
                    </li>
                    <li className="flex justify-between border-b pb-2">
                      <span className="font-medium">📈 Skill Level</span>
                      <span>{course.skill_level}</span>
                    </li>
                    <li className="flex justify-between border-b pb-2">
                      <span className="font-medium">👥 Students</span>
                      <span>500</span>
                    </li>
                  </ul>

                  <div>
                    <h2 className="sm:text-3xl  text-sm mt-4 mb-6 font-bold">
                      Curriculum
                    </h2>
                    <h2 className="sm:text-3xl text-sm mt-4 mb-6 font-bold">
                      Curriculum
                    </h2>
                    <ul className="font-semibold">
                      {courseModules && courseModules.length > 0 ? (
                        <>
                          <li className="mt-4 text-xl">First Level</li>
                          <ul>
                            {courseModules.map((module) => (
                              <li
                                key={module.id}
                                className="flex justify-between mt-2 border-b pb-2"
                              >
                                <span className="font-medium">
                                  {module.module_name}
                                </span>
                                <span>{module.duration} mins</span>
                              </li>
                            ))}
                          </ul>
                          <li className="mt-4 text-xl">Second Level</li>
                          <li className="mt-4 text-xl">Final</li>
                        </>
                      ) : (
                        <p className="text-gray-600">No module codes</p> // Show this if there are no module codes
                      )}
                    </ul>
                  </div>
                </div>

                {/* Course Description Section */}
                <div className="flex justify-start">
                  <div>
                    <h1 className="text-2xl font-semibold mb-4">
                      Course Description
                    </h1>
                    <p className="text-gray-600 mb-8">
                      {course.mini_description || "No description available"}
                    </p>

                    <h1 className="text-2xl font-semibold mb-4">
                      Certification
                    </h1>
                    <p className="text-gray-600 mb-8">
                      {course.certification || "Not specified"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Instructor Card here */}
              <div className="mt-8">
                <InstructorCard />
              </div>
            </div>

            {/* Sticky Description Card for Large Screens */}
            <div className="hidden lg:block lg:col-span-1 h-full">
              <div className="sticky top-24">
                <DescriptionCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleCourse;
