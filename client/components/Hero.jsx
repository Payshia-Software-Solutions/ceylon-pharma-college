"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

function Hero() {
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFading(true); // Start fade-out animation
      setTimeout(() => {
        setIsVisible(false); // Remove the logo after the animation
      }, 1500); // Match this to the animation duration (1 second)
    }, 3000); // Show logo for 2 seconds

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        // setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      className={`relative my-0 h-screen text-white transition-all duration-500 ease-in-out ${
        scrolled ? "m-0 lg:m-12" : ""
      }`}
    >
      <video
        className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-in-out ${
          scrolled ? "rounded-none md:rounded-3xl" : ""
        }`}
        src="/assets/videos/pharma-background.mp4" // Replace with the path to your video file
        autoPlay
        loop
        muted
      ></video>
      <div className="absolute bg-black w-full h-full bg-opacity-40">

      </div>
      <div className="relative z-10 flex h-screen items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[7rem] font-bold uppercase tracking-wide">
            Get Ready
          </h1>
          <p className="mt-4 text-2xl sm:text-3xl md:text-4xl">To Ignite Your Potential</p>
          <div className="mt-6 flex justify-center space-x-4">
            <button className="px-6 py-3 text-xl bg-[#00b67d] rounded-full text-white font-medium">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
