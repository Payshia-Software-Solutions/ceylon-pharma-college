"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function WelcomeSection() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const textElements = textRef.current.children;
    const button = buttonRef.current;
    const video = videoRef.current;

    // Text and button animation
    gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        scrub: false,
      },
    })
      .fromTo(
        textElements,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, stagger: 0.2 }
      )
      .fromTo(
        button,
        { opacity: 0, scale: 0.5 },
        { opacity: 1, scale: 1 },
        "-=0.5"
      );

    // Video animation
    gsap.fromTo(
      video,
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: video,
          start: "top 90%",
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Section: Text Content */}
        <div className="flex bg-gray-100 rounded-r-xl px-12 py-8 justify-end">
          <div ref={textRef} className="w-[25rem] md:mr-10">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Welcome to Ceylon Pharma College!
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              It is a long established fact that a reader.
            </p>
            <p className="text-gray-600 leading-relaxed">
              In a world where educational institutions faced unprecedented
              challenges, Ceylon Pharma College emerged as a light of innovative
              distance learning. We take pride in our dedicated team of
              professionals who ensured that our students continued to receive
              the best education even in trying times. Our mission is simple yet
              impactful. It is to provide the best education through distance
              learning using online platforms. We are committed to empowering our
              community by equipping individuals with the knowledge and skills to
              shine as professionals. Our vision is to nurture excellence in
              every student.
            </p>
            <button
              ref={buttonRef}
              className="mt-6 bg-yellow-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-yellow-600"
            >
              Read More
            </button>
          </div>
        </div>

        {/* Right Section: Video */}
        <div className="px-4 py-2">
          <div
            ref={videoRef}
            className="w-full max-w-xl h-auto md:-ml-28 bg-black rounded-lg shadow-md overflow-hidden"
          >
            <video
              controls
              className="w-full h-full object-cover"
              poster="/assets/images/video-placeholder.jpg"
            >
              <source src="/assets/videos/intro-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WelcomeSection;
