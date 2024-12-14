"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y } from "swiper/modules";
import ExploreCard from "./Common/ExploreCard";

import "swiper/css";
import "swiper/css/pagination";

const exploreData = [
  {
    title: "Undergraduate First Year",
    description:
      "Explore our undergraduate major and minor programs for women.",
    buttontext: "LEARN MORE",
    imgURL: "/assets/explore/black-tea.webp",
    rating: "4.5", // Rating out of 5
  },
  {
    title: "Undergraduate First Year",
    description:
      "Explore our undergraduate major and minor programs for women.",
    buttontext: "LEARN MORE",
    imgURL: "/assets/explore/black-tea.webp",
  },
  {
    title: "Undergraduate First Year",
    description:
      "Explore our undergraduate major and minor programs for women.",
    buttontext: "LEARN MORE",
    imgURL: "/assets/explore/black-tea.webp",
  },
  {
    title: "Undergraduate First Year",
    description:
      "Explore our undergraduate major and minor programs for women.",
    buttontext: "LEARN MORE",
    imgURL: "/assets/explore/black-tea.webp",
  },
  {
    title: "Undergraduate First Year",
    description:
      "Explore our undergraduate major and minor programs for women.",
    buttontext: "LEARN MORE",
    imgURL: "/assets/explore/black-tea.webp",
  },
];

function ExploreProgram() {
  const cardRefs = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      cardRefs.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.3,
        scrollTrigger: {
          trigger: cardRefs.current[0]?.parentNode,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      gsap.killTweensOf(cardRefs.current);
    };
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

      {/* Swiper Section */}
      <div className="mt-6 lg:px-24">
        <Swiper
          slidesPerView={1.2}
          spaceBetween={5}
          pagination={{ clickable: true }}
          breakpoints={{
            576: { slidesPerView: 2, spaceBetween: 10 }, // Reduced gap for smaller screens
            768: { slidesPerView: 3, spaceBetween: 15 }, // Reduced gap for medium screens
            1024: { slidesPerView: 4, spaceBetween: 20 }, // Reduced gap for large screens
          }}
          modules={[Pagination, A11y]}
          className="mySwiper"
        >
          {exploreData.map((explore, index) => (
            <SwiperSlide key={index} className="p-2 mb-5">
              <div
                ref={(el) => (cardRefs.current[index] = el)}
                className="transform opacity-0 transition-all duration-500 ease-in-out"
              >
                <ExploreCard
                  title={explore.title}
                  description={explore.description}
                  buttontext={explore.buttontext}
                  imgURL={explore.imgURL}
                  rating={explore.rating}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default ExploreProgram;
