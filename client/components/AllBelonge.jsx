import React from "react";

function AllBelonge() {
  return (
    <div className="relative text-black">
      {/* Background image */}
      <div className="h-[25rem] sm:h-[25rem] md:h-[40rem] lg:h-[40rem] w-full">
        <img
          src="/assets/images/doctors.jpg"
          alt="Background"
          className="object-cover w-full h-full object-top"
        />
      </div>

      {/* Text Content */}
      <div className="absolute inset-0 bg-white bg-opacity-50 py-16 px-8 flex items-center justify-center">
        <div className="text-center max-w-4xl mx-auto px-4">
          {/* Main Heading */}

          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug">
              Think a world-class education is out of reach? <br /> Think again.
            </h2>
            <hr className="w-24 md:w-32 border-t-4 border-maincolor mx-auto mt-4 md:mt-6" />
          </div>

        

          {/* Subtext */}
          <p className="mt-6 text-sm sm:text-xl md:text-2xl leading-relaxed">
            Incoming first-year undergraduate students can earn between{" "}
            <span className="font-bold">$18,000</span> and{" "}
            <span className="font-bold">$23,000</span> in scholarships,
            renewable for four years.
          </p>

          {/* Button */}
          <div className="mt-8">
            <button className="bg-white hover:bg-yellow-500 text-[#00b67d] px-6 py-3 rounded-full font-semibold   sm:text-lg shadow-md transition">
              VIEW SCHOLARSHIPS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllBelonge;
