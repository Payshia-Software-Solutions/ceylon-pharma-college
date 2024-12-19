"use client";
import React from "react";
import Testimonial from "./Testimonial";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const testimonialData = [
  {
    name: "Yomal",
    description:
      "At Alverno, I’ve been able to develop my communication skills and learned how to work well independently and on a team. With the support of my professors, I’ve been able to gain valuable career experience on and off campus. Ultimately, I’m becoming a stronger leader.",
    imgURL: "/assets/images/cover.png",
    coverimgURL: "/assets/images/cover2.jpg",
  },
  {
    name: "Thilina",
    description:
      "At Alverno, I’ve been able to develop my communication skills and learned how to work well independently and on a team. With the support of my professors, I’ve been able to gain valuable career experience on and off campus. Ultimately, I’m becoming a stronger leader.",
    imgURL: "/assets/testimonial/doctor1.jpg",
    coverimgURL: "/assets/images/cover2.jpg",
  },
];

function MainTestimonial() {
  return (
    <div className="w-screen mt-5">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6">
        Testimonials
      </h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        pagination={{ clickable: true }}
        breakpoints={{
          576: { slidesPerView: 1 },
          768: { slidesPerView: 1 },
        }}
        modules={[Pagination]}
        className="w-full"
      >
        {testimonialData.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="w-screen">
              <Testimonial
                name={testimonial.name}
                description={testimonial.description}
                imgURL={testimonial.imgURL}
                coverimgURL={testimonial.coverimgURL}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default MainTestimonial;
