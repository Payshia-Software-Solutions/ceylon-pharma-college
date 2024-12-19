import React from "react";
import { FaUniversity, FaBook, FaFileAlt } from "react-icons/fa";

function ImageCard() {
  return (
    <div className="max-w-sm sm:max-w-md lg:max-w-sm xl:max-w-sm rounded-lg max-h-[30rem] shadow-lg border relative border-gray-200 overflow-hidden">
      {/* Header with Date */}
      <div className="absolute bg-white left-1/2 top-[84%] transform -translate-x-1/2 -translate-y-1/2  flex flex-col rounded-full items-center ">
      <FaUniversity className="w-20 h-20 px-4 py-2"/>
      </div>

      <div className="w-full h-[12rem] sm:h-[15rem] lg:h-[25rem] p-1">
        <img
         src="/assets/images/cover.png" 
          className="h-full w-full object-cover"
          alt=""
        />
      </div>
      {/* Content */}
      <div className="p-6 mt-4">
        <h3 className="text-lg font-semibold mb-2">
          School Psychology Information Session
        </h3>
      </div>
    </div>
  );
}

export default ImageCard;
