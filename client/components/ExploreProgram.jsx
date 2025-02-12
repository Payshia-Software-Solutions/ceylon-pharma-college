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
        const response = await fetch(`${config.API_BASE_URL}/parent-main-course`);
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

      {/* Loading State */}
      {loading && (
        <div className="text-center mt-4" aria-live="polite">
          Loading programs...
        </div>
      )}

      {/* Swiper Section */}
      {!loading && !error && (
        <div className="mt-6  lg:py-8 lg:px-24">
          <Swiper
            slidesPerView={1.2}
            spaceBetween={5}
            pagination={{ clickable: true }}
            breakpoints={{
              576: { slidesPerView: 2, spaceBetween: 10 },
              768: { slidesPerView: 3, spaceBetween: 15 },
              1024: { slidesPerView: 4, spaceBetween: 20 },
            }}
            modules={[Pagination, A11y]}
            className="mySwiper"
          >
            {courses.map((course, index) => (
              <SwiperSlide key={index} className="p-2 mb-5">
                <motion.div
                  className="transform transition-all duration-500 ease-in-out"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.0, ease: "easeOut", delay: index * 0.4 }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <ExploreCard
                    title={course.course_name}
                    description={course.course_description}
                    buttontext="LEARN MORE"
                    imgURL={course.course_img?.trim() ? course.course_img : "/assets/explore/black-tea.webp"}
                    slug={course.slug}
                    price={course.course_fee}
                    seat={course.seat}
                  />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
}

export default ExploreProgram;
