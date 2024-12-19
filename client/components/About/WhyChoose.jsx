import React from "react";
import { FaUniversity, FaBook, FaFileAlt } from "react-icons/fa";

function WhyChoose() {
  return (
    <div className="bg-gray-100 px-4 py-8">
      {/* Section Title */}
      <div className="text-center py-2 px-8 my-6">
        <h2 className="uppercase text-4xl">
          <span className="font-bold">why choose</span> our institution
        </h2>
        <p className="text-center leading-snug mt-6 text-gray-600">
          At Ceylon Pharma College, our highly qualified educators do more than
          just teach—they train. We prepare you to be brilliant in the
          competitive field of pharmaceuticals. Our commitment doesn’t end with
          education; we connect you with responsible employers, offering
          opportunities to kickstart your career in the private healthcare
          sector.
        </p>
      </div>

      {/* Cards Section */}
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 py-6 px-4 md:px-16 lg:px-24 gap-4">
          {/* Card 1 */}
          <div className="max-w-sm bg-gray-50 px-1 py-1 rounded-t-xl sm:max-w-md lg:max-w-sm xl:max-w-sm rounded-lg max-h-[31rem] shadow-lg border relative border-gray-200 overflow-hidden ">
            <div className="absolute bg-white left-1/2  top-[66%] md:top-[82%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col rounded-full items-center">
              <FaUniversity className="w-20 h-20 px-4 py-2" />
            </div>
            <div className="w-full h-[20rem] sm:h-[20rem] lg:h-[25rem] p-1">
              <img
                src="/assets/images/cover.png"
                className="h-full w-full object-cover rounded-t-xl"
                alt="Expert Faculty"
              />
            </div>
            <div className="py-8 mt-6 mb-12 text-center">
              <h3 className="text-xl font-semibold mb-2">Expert Faculty</h3>
            </div>
          </div>

          {/* Card 2 */}
          <div className="px-1 py-1 rounded-t-xl max-w-sm sm:max-w-md bg-gray-50 lg:max-w-sm xl:max-w-sm rounded-lg max-h-[31rem] shadow-lg border relative border-gray-200 overflow-hidden">
            <div className="absolute bg-white left-1/2 top-[66%] md:top-[82%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col rounded-full items-center">
              <FaBook className="w-20 h-20 px-6 py-4" />
            </div>
            <div className="w-full h-[20rem] sm:h-[20rem] lg:h-[25rem] p-1">
              <img
                src="/assets/images/cover.png"
                className="h-full w-full object-cover rounded-t-xl"
                alt="Comprehensive Curriculum"
              />
            </div>
            <div className="py-8 mt-6 mb-12 text-center">
              <h3 className="text-xl font-semibold mb-2">
                Comprehensive Curriculum
              </h3>
            </div>
          </div>

          {/* Card 3 */}
          <div className="px-1 py-1 rounded-t-xl max-w-sm sm:max-w-md bg-gray-50 lg:max-w-sm xl:max-w-sm rounded-lg max-h-[31rem] shadow-lg border relative border-gray-200 overflow-hidden">
            <div className="absolute bg-white left-1/2  top-[66%] md:top-[82%]  transform -translate-x-1/2 -translate-y-1/2 flex flex-col rounded-full items-center">
              <FaFileAlt className="w-20 h-20 px-6 py-4" />
            </div>
            <div className="w-full h-[20rem] sm:h-[20rem] lg:h-[25rem] p-1">
              <img
                src="/assets/images/cover.png"
                className="h-full w-full object-cover rounded-t-xl"
                alt="Career Opportunities"
              />
            </div>
            <div className="py-8 mt-6 mb-12 text-center">
              <h3 className="text-xl font-semibold mb-2">
                Career Opportunities
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChoose;
