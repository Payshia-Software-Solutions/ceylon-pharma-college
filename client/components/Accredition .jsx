"use client";
import React from "react";
import IsoCertificateCard from "./Common/IsoCertificateCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

function Accredition() {
  return (
    <div className="bg-white py-10 px-4 sm:px-8">
      <div className="text-black max-w-5xl mx-auto text-center">
        {/* Main Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl leading-snug text-center">
          <span className="font-bold ml-2 text-center">
            Ceylon Pharma College is accredited by,
          </span>{" "}
        </h2>{" "}
        <p className="text-xl  my-6">
        At Ceylon Pharma College, we take pride in our strong collaborations with top-tier institutions and industry leaders, which enrich our academic programs and expand opportunities for our students. Our unwavering commitment to excellence in education has earned us numerous prestigious recognitions and esteemed accreditations, reinforcing our position as a leading institution in pharmaceutical education.
        </p>
      </div>

      {/* Swiper for small screens, Grid for large screens */}
      <div className="mt-10 mb-8 px-8 md:px-24">
        <Swiper
          slidesPerView={3}
          spaceBetween={40}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000, // 3 seconds per slide
            disableOnInteraction: false, // Keeps autoplay running even after user interaction
          }}
          loop={true} // Enables infinite scrolling
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 6 },
            1024: { slidesPerView: 8 },
          }}
          modules={[Pagination, Autoplay]}
          className="w-full sm:hidden " // Only show Swiper on small screens
        >
          <SwiperSlide className="mb-8">
            <IsoCertificateCard imgUrl={"/assets/logo/skildevlopment.jpg"} />
          </SwiperSlide>
          <SwiperSlide>
            <IsoCertificateCard imgUrl={"/assets/logo/actd.png"} />
          </SwiperSlide>
          <SwiperSlide>
            <IsoCertificateCard imgUrl={"/assets/logo/iaf.jpg"} />
          </SwiperSlide>
          <SwiperSlide>
            <IsoCertificateCard imgUrl={"/assets/logo/scc.png"} />
          </SwiperSlide>
          <SwiperSlide>
            <IsoCertificateCard imgUrl={"/assets/logo/iqa.png"} />
          </SwiperSlide>
          <SwiperSlide>
            <IsoCertificateCard imgUrl={"/assets/logo/wes.svg"} />
          </SwiperSlide>
          <SwiperSlide>
            <IsoCertificateCard imgUrl={"/assets/logo/acuk.png"} />
          </SwiperSlide>
          <SwiperSlide>
            <IsoCertificateCard imgUrl={"/assets/logo/gatehouse.png"} />
          </SwiperSlide>
       
        </Swiper>
      </div>
    </div>
  );
}

export default Accredition;
