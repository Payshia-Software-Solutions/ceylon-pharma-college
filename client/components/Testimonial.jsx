import React from "react";

function Testimonial() {
  return (
    <div>
      {/* Desktop View */}
      <div className="hidden lg:flex items-center justify-center bg-maincolor text-white h-screen">
        {/* Content Wrapper */}
        <div className="relative h-[40rem] w-[60rem]">
          {/* Left Quote Mark */}
          <div className="absolute top-16 left-8 text-white text-9xl font-bold">
            “
          </div>

          {/* Image Section */}
          <div className="absolute top-32 left-16 w-[22rem] h-[25rem]">
            <img
              src="/assets/images/cover.png"
              alt="Person smiling in the foreground"
              className="w-full h-full rounded-lg object-cover"
            />
          </div>

          {/* Text Section */}
          <div className="absolute top-80 left-[22rem] bg-white text-gray-900 rounded-lg p-6 w-[28rem] shadow-lg">
            <p className="text-lg leading-relaxed">
              At Alverno, I’ve been able to develop my communication skills and
              learned how to work well independently and on a team. With the
              support of my professors, I’ve been able to gain valuable career
              experience on and off campus. Ultimately, I’m becoming a stronger
              leader.
            </p>
            <p className="text-right font-semibold mt-4">- ISABELLE</p>

            {/* Right Quote Mark */}
            <div className="absolute bottom-[-7rem] right-1 text-white text-9xl font-bold">
              ”
            </div>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="block lg:hidden">
        <div className="bg-maincolor text-white p-6 rounded-lg shadow-lg max-w-sm mx-auto relative">
          {/* Top Quote Icon */}
          <div className="absolute -top-1 left-6 text-yellow-400 text-5xl font-bold">
            &ldquo;
          </div>

          {/* Image Section */}
          <img
            src="/assets/images/cover.png" // Replace with actual image path
            alt="Profile of Isabelle"
            className="rounded-t-lg w-full object-cover"
          />

          {/* Content Section */}
          <div className="bg-white text-black p-6 rounded-b-lg">
            <p className="text-lg font-light">
              At Alverno, I’ve been able to develop my communication skills and
              learned how to work well independently and on a team. With the
              support of my professors, I’ve been able to gain valuable career
              experience on and off campus. Ultimately, I’m becoming a stronger
              leader.
            </p>

            {/* Name Section */}
            <p className="text-red-500 font-semibold text-right mt-4">
              - ISABELLE
            </p>
          </div>

          {/* Bottom Quote Icon */}
          <div className="absolute -bottom-5 right-6 text-pink-200 text-5xl font-bold">
            &rdquo;
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
