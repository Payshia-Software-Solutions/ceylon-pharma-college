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
            Ceylon Pharma College is accredited by the
          </span>{" "}
        </h2>{" "}
        <p className="text-xl  my-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          dignissimos corrupti dolores mollitia eius consequuntur voluptas nobis
          sint quas nesciunt cumque, obcaecati unde rem placeat nisi,
          voluptatibus animi magni repudiandae.
        </p>
      </div>

      {/* Swiper for small screens, Grid for large screens */}
      <div className="mt-10 mb-8 px-24">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000, // 3 seconds per slide
            disableOnInteraction: false, // Keeps autoplay running even after user interaction
          }}
          loop={true} // Enables infinite scrolling
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 3 },
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
       
        </Swiper>
      </div>
    </div>
  );
}

export default Accredition;
