import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa";
import { FiStar } from "react-icons/fi";
import { GiMoneyStack } from "react-icons/gi";

function ExploreCard({ title, description, buttontext, imgURL, rating,slug,price }) {
  return (
    <div className="max-w-full max-h-[38rem] sm:max-w-[20rem] md:max-w-[24rem] lg:max-w-[28rem] my-5 rounded-lg overflow-hidden shadow-lg border border-gray-200 bg-white hover:scale-105 transition-transform duration-300">
      {/* Image */}
      <img
        className="w-full h-[12rem] sm:h-[15rem] lg:h-[18rem] object-cover border-b-4 border-maincolor"
        src={imgURL}
        alt={title}
      />

      {/* Content */}
      <div className="p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#870024] mb-2">
          {title}
        </h3>

        {/* Star Rating */}
        <div className="flex gap-1 mb-3">
          {Array.from({ length: 5 }).map((_, index) => (
            <span key={index}>
              {index < Math.floor(rating) ? (
                <FaStar className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500" />
              ) : (
                <FiStar className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
              )}
            </span>
          ))}
        </div>

        <p className="text-sm sm:text-base text-gray-600 mb-4">{description}</p>

        {/* Icons */}
        <div className="flex justify-between items-center mb-4">
          {/* Money Icon */}
          <div className="flex items-center space-x-2">
            <GiMoneyStack className="w-6 h-6 sm:w-8 sm:h-8" />
            <span className="text-gray-700 text-sm sm:text-lg font-bold">
              {price}
            </span>
          </div>

       

          {/* Seat Icon */}
          <div className="flex items-center space-x-2">
            <img
              src="/assets/icon/seat.png"
              alt="Seats"
              className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
            />
            <span className="text-gray-700 text-sm sm:text-lg font-bold">
              15
            </span>
          </div>
        </div>

        {/* Right-Aligned ss */}
        <div className="flex justify-end">
     
          <button className="bg-[#870024] text-white uppercase text-xs sm:text-sm px-3 sm:px-4 py-2 rounded-full hover:bg-[#a0032e] transition">
            <Link href={`/course/${slug}`}>    Learn More </Link>     
          </button>
        </div>
      </div>
    </div>
  );
}

export default ExploreCard;
