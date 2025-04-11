"use client";
import React, { useState, useRef } from "react";
import YouTube from "react-youtube";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const OurAchievements = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const videos = [
    { id: "fCFonZdEZGg", title: "Nugasewana" },
    { id: "XvazXU-saP4", title: "Ayubowan Sri Lanka" },
    { id: "pqPiXXjDyAE", title: "Advertisment" },
    { id: "wfDIn5WbywI", title: "Convocation" },
    { id: "d-aWudT5_3s", title: "Advertisment" },
    { id: "oRBmtQicXG4", title: "Convocation" },
  ];

  const onSwiper = (swiper) => {
    setSwiperInstance(swiper);
  };

  const handleVideoPlay = () => {
    if (swiperInstance) {
      swiperInstance.autoplay.stop(); // Stop the Swiper autoplay when the video is playing
    }
  };

  const handleVideoPause = () => {
    if (swiperInstance) {
      swiperInstance.autoplay.start(); // Start the Swiper autoplay when the video is paused
    }
  };

  const handleVideoEnd = () => {
    if (swiperInstance) {
      swiperInstance.autoplay.start(); // Restart Swiper autoplay when video ends
    }
  };

  return (
    <div className="container mx-auto py-10 px-4">
      <h2 className="text-4xl font-bold text-center mb-8">Our Achievements</h2>

      <Swiper
        slidesPerView={1}
        spaceBetween={15}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        breakpoints={{
          576: { slidesPerView: 2.5, spaceBetween: 15 },
          768: { slidesPerView: 2.5, spaceBetween: 15 },
          1024: { slidesPerView: 2.5, spaceBetween: 15 },
        }}
        modules={[Pagination, A11y, Autoplay]}
        onSwiper={onSwiper}
      >
        {videos.map((video, index) => (
          <SwiperSlide key={index} className="mb-10">
            <div className="video-item relative bg-gray-200 rounded-lg overflow-hidden shadow-lg flex justify-items-center">
              <div className="relative w-full pb-[56.25%]">
                <YouTube
                  videoId={video.id}
                  opts={{
                    height: "100%",
                    width: "100%",
                    playerVars: { autoplay: 0 },
                  }}
                  onPlay={handleVideoPlay}
                  onPause={handleVideoPause}
                  onEnd={handleVideoEnd}
                  className="absolute top-0 left-0 w-full h-full"
                />
              </div>
            </div>
            <p className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white py-2 text-center text-lg font-semibold">
              {video.title}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OurAchievements;
