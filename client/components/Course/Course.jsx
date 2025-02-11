"use client";

import React, { useEffect, useState } from "react";
import SideBar from "@/components/Course/SideBar";

import ExploreCard from "../Common/ExploreCard";
import Image from "next/image";
import config from "@/config";

// Components  `${config.API_BASE_URL}/parent-main-course`
import ProductSectionHeader from "@/components/Course/CourseSectionheader";
import SectionHeader from "../Common/SectionHeader";

// Font imports
import { Italiana, Julius_Sans_One } from "next/font/google";

const italiana = Italiana({
  weight: "400",
  subsets: ["latin"],
});

const juliusSansOne = Julius_Sans_One({
  weight: "400",
  subsets: ["latin"],
});

function Course() {
  const [searchQuery, setSearchQuery] = useState("");
  const [courses, setCourses] = useState([]); // State to store fetched courses
  const [loading, setLoading] = useState(true); // State to handle loading status
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    // Fetch course data from the API
    const fetchCourses = async () => {
      try {
        const response = await fetch(`${config.API_BASE_URL}/parent-main-course`);
        if (!response.ok) {
          throw new Error("Failed to fetch courses");
        }
        const data = await response.json();
        setCourses(data); // Set the fetched data to the state
      } catch (err) {
        setError(err.message); // Handle any errors
      } finally {
        setLoading(false); // Set loading to false when data is fetched
      }
    };

    fetchCourses();
  }, []); // Empty dependency array ensures this runs only once on component mount

  return (
    <section className="h-full">
      {/* Section Header */}
      <SectionHeader
        imgURL={"/assets/images/cover.png"}
        title={"Our Courses"}
      />

      {/* Main Content */}
      <div className="px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Sidebar */}
          <div className="md:col-span-3">
            <div className="sticky top-24">
              <SideBar />
            </div>
          </div>

          {/* Main Grid Content */}
          <div className="md:col-span-9">
            <h2 className="text-3xl font-bold text-black mb-4">Courses</h2>
            <hr className="border-black border-t-2 mb-6" />

            {/* Loading state */}
            {loading && <p>Loading courses...</p>}

            {/* Error state */}
            {error && <p>Error: {error}</p>}

            {/* Responsive Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
              {courses.length > 0 ? (
                courses.map((course, index) => (
                  <ExploreCard
                    key={index}
                    title={course.course_name} // Assuming the field is 'course_name'
                    description={course.course_description} // Assuming the field is 'course_description'
                    buttontext="LEARN MORE"
                    imgURL={course.course_img || "/assets/explore/black-tea.webp"} // Default image if not provided
                    slug={course.slug} // Assuming the field is 'slug'
                    price={course.course_fee}
                  />
                ))
              ) : (
                <p>No courses found</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Course;
