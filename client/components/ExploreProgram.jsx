"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y } from "swiper/modules";
import ExploreCard from "./Common/ExploreCard";
import config from "@/config";

import "swiper/css";
import "swiper/css/pagination";

function ExploreProgram() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch(
          `${config.API_BASE_URL}/parent-main-course`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch courses");
        }
        const data = await response.json();
        setCourses(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
  }, []);

  return (
    <div className="mt-5 px-4 md:px-16">
      {/* Heading Section */}
      <div>
        <h1 className="text-center text-3xl md:text-5xl font-semibold">
          Explore our programs
        </h1>
        <hr className="w-24 md:w-32 border-t-4 border-maincolor mx-auto mt-4 md:mt-6" />
      </div>

      {/* Error Message */}
      {error && (
        <div className="text-red-500 text-center mt-4" aria-live="polite">
          {error}
        </div>
      )}

      {/* Swiper Section */}
      <div className="lg:py-8 lg:px-24">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{ clickable: true }}
          breakpoints={{
            576: { slidesPerView: 2, spaceBetween: 10 }, // Tablets: 2 placeholders
            768: { slidesPerView: 3, spaceBetween: 10 }, // Small laptops: 3 placeholders
            1024: { slidesPerView: 4, spaceBetween: 15 }, // Large screens: 4 placeholders
          }}
          modules={[Pagination, A11y]}
          className="mySwiper"
        >
          {/* Show Loading Placeholders with Responsive Count */}
          {loading &&
            Array.from({ length: 4 }).map((_, index) => (
              <SwiperSlide key={index} className="p-2 mb-5">
                <div className="animate-pulse bg-gray-200 p-4 rounded-lg">
                  <div className="w-full h-40 bg-gray-300 rounded-md mb-4"></div>
                  <div className="h-5 bg-gray-300 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                </div>
              </SwiperSlide>
            ))}

         {/* Show Courses When Loaded */}
{!loading &&
  !error &&
  courses
    .slice() // Create a shallow copy to avoid mutating the original array
    .reverse() // Reverse the copied array
    .map((course, index) => (
      <SwiperSlide key={index} className="p-2 mb-5">
        <motion.div
          className="transform transition-all duration-500 ease-in-out"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.0,
            ease: "easeOut",
            delay: index * 0.04,
          }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <ExploreCard
            title={course.course_name}
            description={course.mini_description}
            buttontext="LEARN MORE"
            imgURL={`${config.FTP_URL}/courses/${course.course_code}/${course.course_img}`}
            slug={course.slug}
            price={course.course_fee}
            seat={course.seat}
          />
        </motion.div>
      </SwiperSlide>
    ))}

        </Swiper>
      </div>
    </div>
  );
}

export default ExploreProgram;
