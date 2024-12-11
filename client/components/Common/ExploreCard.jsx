import React from "react";

function ExploreCard({ title, description, buttontext, imgURL }) {
  return (
    <div className="max-w-full sm:max-w-[20rem] my-5 mx-auto rounded-lg overflow-hidden shadow-lg border border-gray-200 bg-white hover:scale-105 duration-300">
      {/* Image */}
      <img
        className="w-full h-[12rem] sm:h-[15rem] object-cover border-b-4 border-maincolor"
        src={imgURL}
        alt="Undergraduate First Year"
      />

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-bold text-[#870024] mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>

        {/* Button */}
        <button className="bg-[#870024] text-white uppercase text-sm px-4 py-2 rounded-full hover:bg-[#a0032e] transition">
          {buttontext}
        </button>
      </div>
    </div>
  );
}

export default ExploreCard;
