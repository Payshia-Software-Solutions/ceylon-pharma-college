"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ExploreCard from "./Common/ExploreCard";

const exploreData = [
  {
    title: "Undergraduate First Year",
    description: "Explore our undergraduate major and minor programs for women.",
    buttontext: "LEARN MORE",
    imgURL: "/assets/explore/black-tea.webp"
  },
  {
    title: "Undergraduate First Year",
    description: "Explore our undergraduate major and minor programs for women.",
    buttontext: "LEARN MORE",
    imgURL: "/assets/explore/black-tea.webp"
  },
  {
    title: "Undergraduate First Year",
    description: "Explore our undergraduate major and minor programs for women.",
    buttontext: "LEARN MORE",
    imgURL: "/assets/explore/black-tea.webp"
  },
  {
    title: "Undergraduate First Year",
    description: "Explore our undergraduate major and minor programs for women.",
    buttontext: "LEARN MORE",
    imgURL: "/assets/explore/black-tea.webp"
  },
];

function ExploreProgram() {
  const cardRefs = useRef([]);

  useEffect(() => {
    // Register GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Animate cards on scroll using GSAP
    cardRefs.current.forEach((card, index) => {
      if (card) {
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
      }
    });

    // Cleanup ScrollTrigger when component unmounts
    return () => {
      gsap.killTweensOf(cardRefs.current); // Stop any ongoing tweens for cleanup
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

      {/* Card Section */}
      <div className="mt-6">
        <div className="card-container grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-4">
          {exploreData.map((explore, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)} // Store each card's reference
              className="transform opacity-0 transition-all duration-500 ease-in-out"
            >
              <ExploreCard
                title={explore.title}
                description={explore.description}
                buttontext={explore.buttontext}
                imgURL={explore.imgURL}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExploreProgram;
