"use client";
import React, { useRef } from "react";
import CommentCard from "../Common/CommentCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const commentData = [
  {
    name: "Gaguli Ashinshana",
    imgURL: "/assets/images/cover.png",
    status: "Student",
    comment: `Ceylon Pharma College is the best place to learn about medicine. A most successful course that can be done without fear. You can get knowledge through the latest methods, and you don't have to study to death. You can learn quickly. The best place that gives knowledge worth more than the money charged. Even those without a purpose get a purpose. Another good meaningful way to win in life. Thank you, sir, for giving us this knowledge.`,
  },
  {
    name: "John Doe",
    imgURL: "/assets/images/cover.png",
    status: "Graduate",
    comment: `The teaching methods are highly efficient, and the instructors are incredibly supportive. The environment motivates students to excel in their studies and achieve their career goals.`,
  },
  {
    name: "Jane Smith",
    imgURL: "/assets/images/cover.png",
    status: "Professional",
    comment: `A wonderful experience with great resources and mentors. The knowledge shared here is practical and valuable for building a solid foundation.`,
  },
  {
    name: "Gaguli Ashinshana",
    imgURL: "/assets/images/cover.png",
    status: "Student",
    comment: `Ceylon Pharma College is the best place to learn about medicine. A most successful course that can be done without fear. You can get knowledge through the latest methods, and you don't have to study to death. You can learn quickly. The best place that gives knowledge worth more than the money charged. Even those without a purpose get a purpose. Another good meaningful way to win in life. Thank you, sir, for giving us this knowledge.`,
  },
];

function CommentSection() {
  // Refs for navigation buttons
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="mt-5 px-4 md:px-16">
      {/* Heading Section */}
      <div className="text-black max-w-5xl mx-auto flex flex-col items-center md:flex-row md:justify-between md:items-center text-center">
        <p className="text-2xl sm:text-3xl md:text-4xl uppercase border-l-4 sm:border-l-8 border-maincolor">
          <span className="font-bold mx-2">what people</span>say
        </p>

        {/* Navigation Buttons */}
        <div className="flex gap-3 mt-8 md:mt-0">
          <button ref={prevRef}>
            <FaArrowAltCircleLeft className="w-12 h-12 cursor-pointer" />
          </button>
          <button ref={nextRef}>
            <FaArrowAltCircleRight className="w-12 h-12 cursor-pointer" />
          </button>
        </div>
      </div>

      {/* Swiper Section */}
      <div className="mt-6 mx-auto px-4 md:px-16">
        <div className="flex justify-center">
          <div className="mx-6 w-full md:w-3/4">
            <Swiper
              slidesPerView={1}
              spaceBetween={15}
              pagination={{ clickable: true }}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onSwiper={(swiper) => {
                // Swiper instance to update the refs after initialization
                setTimeout(() => {
                  swiper.params.navigation.prevEl = prevRef.current;
                  swiper.params.navigation.nextEl = nextRef.current;
                  swiper.navigation.init();
                  swiper.navigation.update();
                });
              }}
              breakpoints={{
                576: { slidesPerView: 1, spaceBetween: 20 },
                768: { slidesPerView: 2, spaceBetween: 30 },
                1200: { slidesPerView: 2, spaceBetween: 30 },
              }}
              modules={[Pagination, Navigation, A11y]}
              className="mySwiper mb-8"
            >
              {commentData.map((comment, index) => (
                <SwiperSlide key={index}>
                  <CommentCard
                    name={comment.name}
                    imgURL={comment.imgURL}
                    status={comment.status}
                    comment={comment.comment}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommentSection;
