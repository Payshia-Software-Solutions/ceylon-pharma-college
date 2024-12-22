"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation"; // Use useParams for accessing dynamic route parameters
import SectionHeader from "../Common/SectionHeader";
import InstructorCard from "@/components/Course/InstructorCard";
import DescriptionCard from "./DescriptionCard";

function SingleCourse() {
  const { slug } = useParams(); // Get the slug from the dynamic route

  const [course, setCourse] = useState(null);
  const [courseModules, setCourseModules] = useState([]); // State to hold course modules
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!slug) return; // Wait until slug is available

    // Fetch course data based on the slug
    const fetchCourse = async () => {
      try {
        console.log("Fetching course for slug:", slug);
        const response = await fetch(
          `http://localhost/pharma-college-project/server/parent-main-course/${slug}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch course details");
        }
        const data = await response.json();

        console.log("Course Data:", data);

        if (data.module_list && typeof data.module_list === "string") {
          // Split the module_list string into an array of module codes
          const moduleCodes = data.module_list
            .split(",")
            .map((code) => code.trim());
          console.log("Module Codes from course module_list:", moduleCodes);

          // Fetch course modules
          const modulesResponse = await fetch(
            "http://localhost/pharma-college-project/server/course-modules"
          );
          if (!modulesResponse.ok) {
            throw new Error("Failed to fetch course modules");
          }
          const modulesData = await modulesResponse.json();

          console.log("Course Modules Data:", modulesData);

          // Filter course modules by matching module codes
          const filteredModules = modulesData.filter((module) =>
            moduleCodes.includes(module.module_code)
          );

          console.log("Filtered Course Modules:", filteredModules);

          setCourse(data); // Save course data to state
          setCourseModules(filteredModules); // Save filtered modules to state
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [slug]); // Trigger fetch when slug changes

  // Log the modules data when courseModules state updates
  useEffect(() => {
    if (courseModules.length > 0) {
      console.log("Course Modules State Updated:", courseModules);
    }
  }, [courseModules]);

  if (loading) return <p>Loading course details...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!course) return <p>No course found</p>;

  return (
    <div>
      {/* Header Section */}
      <div>
        <SectionHeader
          imgURL={course.course_img || "/assets/testimonial/doctor1.jpg"}
          title={course.course_name || "Course Details"}
        />
      </div>

      <div className="  container px-4 py-2 md:px-16 md:py-8">
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
                      <span>300</span>
                    </li>
                  </ul>

                  <div>
                    <h2 className="text-2xl mt-4 mb-6 font-bold">Curriculum</h2>
                    <ul className="uppercase font-semibold">
                      <li className="mt-4 text-xl">First Level</li>
                      <ul>
                        {courseModules.length > 0 &&
                          courseModules.map((module) => (
                            <li
                              key={module.id}
                              className="flex justify-between mt-2 border-b pb-2"
                            >
                              {/* Module Name */}
                              <span className="font-medium ">
                                {module.module_name}
                              </span>
                              {/* Module Duration */}
                              <span>{module.duration} mins</span>
                            </li>
                          ))}
                      </ul>
                      <li className="mt-4 text-xl">Second Level</li>
                      <li className="mt-4 text-xl">Final</li>
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
                      {course.course_description || "No description available"}
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
