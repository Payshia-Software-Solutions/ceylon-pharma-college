"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function Testimonial({ imgURL, coverimgURL, description, name }) {
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // Pop-up animation for text (fade in + scale up)
    gsap.fromTo(
      textRef.current,
      { opacity: 0, scale: 0.8 },  // initial state
      {
        opacity: 1,                // final opacity
        scale: 1,                  // final scale
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%", // Start the animation when the element is 80% from the top of the viewport
          end: "top 60%",   // End the animation when the element is 60% from the top of the viewport
          once: true,       // Trigger only once
        },
      }
    );

    // Pop-up animation for image (fade in + scale up)
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, scale: 0.8 },  // initial state
      {
        opacity: 1,                // final opacity
        scale: 1,                  // final scale
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%", // Start the animation when the element is 80% from the top of the viewport
          end: "top 60%",   // End the animation when the element is 60% from the top of the viewport
          once: true,       // Trigger only once
        },
      }
    );
  }, []);

  return (
    <div className="relative bg-cover bg-center bg-no-repeat h-screen" style={{ backgroundImage: `url(${coverimgURL})` }}>
      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Desktop View */}
      <div className="hidden lg:flex items-center justify-center text-white h-screen relative z-10">
        {/* Content Wrapper */}
        <div className="relative h-[40rem] w-[60rem]">
          <h3 className="text-6xl font-bold text-center"></h3>

          {/* Left Quote Mark */}
          <div className="absolute top-16 left-8 text-white text-9xl font-bold">“</div>

          {/* Image Section */}
          <div ref={imageRef} className="absolute top-32 left-16 w-[22rem] h-[25rem]">
            <img
              src={imgURL}
              alt="Person smiling in the foreground"
              className="w-full h-full rounded-lg object-cover"
            />
          </div>

          {/* Text Section */}
          <div ref={textRef} className="absolute top-80 left-[22rem] bg-white text-gray-900 rounded-lg p-6 w-[28rem] shadow-lg">
            <p className="text-lg leading-relaxed">{description}</p>
            <p className="text-right font-semibold mt-4">- {name}</p>

            {/* Right Quote Mark */}
            <div className="absolute bottom-[-7rem] right-1 text-white text-9xl font-bold">”</div>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="block lg:hidden relative mt-14 z-10">
        <div className="bg-white text-black p-6 rounded-lg shadow-lg max-w-sm mx-auto relative">
          {/* Top Quote Icon */}
          <div className="absolute -top-1 left-6 text-yellow-400 text-5xl font-bold">&ldquo;</div>

          {/* Image Section */}
          <img
            src={imgURL}
            alt="Profile of Isabelle"
            className="rounded-t-lg w-full object-cover"
          />

          {/* Content Section */}
          <div className="bg-white text-black p-6 rounded-b-lg">
            <p className="text-lg font-light">{description}</p>

            {/* Name Section */}
            <p className="text-red-500 font-semibold text-right mt-4">- {name}</p>
          </div>

          {/* Bottom Quote Icon */}
          <div className="absolute -bottom-5 right-6 text-pink-200 text-5xl font-bold">&rdquo;</div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
