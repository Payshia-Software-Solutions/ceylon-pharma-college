"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import UpcomingEventCard from "./Common/UpcomingEventCard";

function AlvenroToday() {
  const cardRefs = useRef([]);

  useEffect(() => {
    // Register ScrollTrigger with GSAP
    gsap.registerPlugin(ScrollTrigger);

    // Animate cards on scroll one by one
    gsap.fromTo(
      cardRefs.current,
      { opacity: 0, y: 20 }, // Initial state
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.3, // Delay between each card animation
        scrollTrigger: {
          trigger: cardRefs.current[0]?.parentNode, // Trigger animation when the parent container comes into view
          start: "top 80%", // Start animation when parent reaches 80% of the viewport
          end: "bottom 20%", // End animation when parent leaves 20% of the viewport
          toggleActions: "play none none reverse", // Play on scroll down, reverse on scroll up
        },
      }
    );
  }, []);

  const cards = [0, 1, 2]; // Array for mapping cards

  return (
    <div>
      {/* Heading */}
      <div className="my-5">
        <h2 className="text-2xl text-center sm:text-3xl md:text-4xl font-bold leading-snug">
           Today Events
        </h2>
        <hr className="w-24 md:w-32 border-t-4 border-maincolor mx-auto mt-4 md:mt-6" />
      </div>

      {/* Cards Section */}
      <div className="px-4 sm:px-6 md:px-24">
        <div className="shadow-2xl p-8 my-5">
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {cards.map((_, index) => (
                <div
                  key={index}
                  ref={(el) => (cardRefs.current[index] = el)} // Attach refs to cards
                >
                  <UpcomingEventCard />
                </div>
              ))}
            </div>
          </div>

          {/* Button */}
          <div className="mt-10 flex justify-center">
            <button className="uppercase border-black border-2 hover:bg-maincolor hover:text-white hover:border-none p-3 rounded-full text-sm sm:text-base md:text-lg">
              See All Events
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AlvenroToday;
