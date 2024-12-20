import React from "react";
import { FaFileAlt, FaBook, FaUser, FaComments, FaStar } from "react-icons/fa";

function DescriptionCard() {
  return (
    <div className="w-full lg:max-w-sm mx-auto border rounded-lg shadow-lg p-6 bg-white">
      {/* Pricing Section */}
      <div className="text-center">
        <p className="text-gray-400 line-through text-sm md:text-base">Rs. 35,000</p>
        <p className="text-2xl md:text-3xl font-bold text-black">Rs. 25,000.00</p>
        <button className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full text-sm md:text-base">
          ENROLL TO THIS COURSE
        </button>
      </div>

      {/* Instructor Section */}
      <div className="mt-6 flex flex-col md:flex-row items-center justify-center">
        <img
          src="/assets/testimonial/doctor1.jpg"
          alt="Instructor"
          className="w-16 h-16 rounded-full"
        />
        <div className="mt-4 md:mt-0 md:ml-4 text-center md:text-left">
          <h3 className="text-base md:text-lg font-bold text-black">Dilip Fonseka</h3>
          <p className="text-sm md:text-base text-gray-600">Instructor</p>
        </div>
      </div>

      {/* Review and Category Section */}
      <div className="mt-6 flex flex-col md:flex-row justify-between items-center border-t-2 border-b-2 py-4 text-center md:text-left">
        <div className="md:border-r-2 md:pr-4 mb-4 md:mb-0">
          <p className="text-purple-600 font-bold text-lg">21 Reviews</p>
          <div className="flex justify-center md:justify-start text-yellow-500">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>
        </div>
        <div className="md:pl-4">
          <p className="text-gray-600 font-bold text-sm md:text-base">Categories</p>
          <p className="text-purple-600 text-sm md:text-base">Pharmacist</p>
        </div>
      </div>

      {/* Navigation Section */}
      <div className="mt-6 space-y-4">
        <div className="flex items-center space-x-4">
          <FaFileAlt className="text-purple-600 text-lg" />
          <span className="text-black font-semibold text-sm md:text-base">Overview</span>
        </div>
        <div className="flex items-center space-x-4">
          <FaBook className="text-purple-600 text-lg" />
          <span className="text-black font-semibold text-sm md:text-base">Curriculum</span>
        </div>
        <div className="flex items-center space-x-4">
          <FaUser className="text-purple-600 text-lg" />
          <span className="text-black font-semibold text-sm md:text-base">Instructor</span>
        </div>
        <div className="flex items-center space-x-4">
          <FaComments className="text-purple-600 text-lg" />
          <span className="text-black font-semibold text-sm md:text-base">Reviews</span>
        </div>
      </div>
    </div>
  );
}

export default DescriptionCard;
