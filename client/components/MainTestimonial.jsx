"use client";
import React, { useEffect, useRef } from "react";
import Testimonial from "./Testimonial";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonialData = [
  {
    name: "Yomal",
    description:
      "At Alverno, I’ve been able to develop my communication skills and learned how to work well independently and on a team. With the support of my professors, I’ve been able to gain valuable career experience on and off campus. Ultimately, I’m becoming a stronger leader.",
    imgURL: "/assets/images/cover.png",
    coverimgURL: "/assets/images/bg-convo.jpg"
  },
  {
    name: "Thilina",
    description:
      "At Alverno, I’ve been able to develop my communication skills and learned how to work well independently and on a team. With the support of my professors, I’ve been able to gain valuable career experience on and off campus. Ultimately, I’m becoming a stronger leader.",
    imgURL: "/assets/testimonial/doctor1.jpg",
    coverimgURL: "/assets/images/bg-convo.jpg",
  },
];

function MainTestimonial() {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (!swiperRef.current) return;

    const swiper = swiperRef.current.swiper;
    
    swiper.on("slideChange", () => {
      ScrollTrigger.refresh(); // Refresh GSAP animations on slide change
    });

    return () => {
      swiper.off("slideChange");
    };
  }, []);

  return (
    <div className="mt-0">
      
      <Swiper
        ref={swiperRef}
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
