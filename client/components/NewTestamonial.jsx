"use client";
import React, { useRef, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import Image from "next/image";
import TestamonialCard from "./Common/TestamonialCard";

const Testimonial = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  const cards = [
    {
      name: "Yomal",
      role: "Theekshan",
      image: "/assets/curriculum/card1.jpg",
      comment:
        "Assessment and Certification system of Skill Development Council Canada is simply amazing. They have a very transparent and fully digital system for all processes. We are very thankful to SDC Canada for our partnership.",
    },
    {
      name: "Alex",
      role: "Designer",
      image: "/assets/curriculum/card2.jpg",
      comment:
        "The best part of Skill Development Council Canada is their team of experts. Their team is wonderful and helped us solve our challenges in conducting assessments and awarding the qualifications. We recommend them to all training organizations worldwide.",
    },
    {
      name: "Emma",
      role: "Developer",
      image: "/assets/curriculum/card3.jpg",
      comment:
        "Assessment and Certification system of Skill Development Council Canada is simply amazing. They have a very transparent and fully digital system for all processes. We are very thankful to SDC Canada for our partnership.",
    },
  ];

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.navigation) {
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <section className="relative w-full bg-white px-8 flex justify-center items-center min-h-[700px]">
      {/* Background Image */}
      <div className="absolute inset-0 h-auto md:h-[700px] flex justify-center items-center">
        <Image
          src="/assets/images/cover.png"
          width={500}
          height={300}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Content */}
      <div className="grid text-white bg-maincolor/80 my-4  md:px-8 py-2 px-4 md:py-16 rounded-3xl min-h-[600px] grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-[100rem] relative items-center text-center md:text-left backdrop-blur-md">
        {/* Left Section */}
        <div className="col-span-1 flex flex-col justify-start items-center md:items-start text-start md:text-left">
          <p className="text-base my-6 md:my-0 uppercase">Testimonial</p>
          <div>
            <h2 className="text-3xl md:text-5xl  font-bold">
              23k+ Customers gave their <span>Feedback</span>
            </h2>
          </div>

          {/* Hide on small screens */}
          <div className="mt-8 gap-5 hidden md:flex">
            <button
              ref={prevRef}
              className="border border-white bg-white text-black rounded-lg p-4 hover:bg-black hover:text-white transition"
            >
              <ArrowLeft size={24} />
            </button>
            <button
              ref={nextRef}
              className="border border-white bg-white text-black rounded-lg p-4 hover:bg-black hover:text-white transition"
            >
              <ArrowRight size={24} />
            </button>
          </div>
        </div>

        {/* Right Section - Swiper */}
        <div className="col-span-2">
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 2 },
            }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            className="w-full"
            onSwiper={(swiper) => {
              swiperRef.current = swiper;

              if (swiper.params.navigation && prevRef.current && nextRef.current) {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }
            }}
          >
            {cards.map((card, index) => (
              <SwiperSlide key={index}>
                <TestamonialCard
                  name={card.name}
                  image={card.image}
                  role={card.role}
                  comment={card.comment}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
