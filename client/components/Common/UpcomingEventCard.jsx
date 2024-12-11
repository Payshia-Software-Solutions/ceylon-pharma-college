import React from "react";

function UpcomingEventCard() {
  return (
    <div className="max-w-sm sm:max-w-md lg:max-w-sm xl:max-w-sm rounded-lg max-h-[30rem] shadow-lg border relative border-gray-200 overflow-hidden">
      {/* Header with Date */}
      <div className="bg-red-800 absolute left-5 text-white flex flex-col w-28 rounded-b-md items-center py-2">
        <span className="text-3xl font-bold">18</span>
        <span className="text-sm">Dec 2024</span>
      </div>

      <div className="w-full h-[12rem] sm:h-[15rem] lg:h-[15rem] p-1">
        <img
          src="/assets/explore/black-tea.webp"
          className="h-full w-full object-cover"
          alt=""
        />
      </div>
      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-2">
          School Psychology Information Session
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          Join us for a virtual information session to learn more about
          Alverno's Educational Specialist in School Psychology program!
        </p>
      </div>
      <button className="bg-red-800 text-white py-2 w-full hover:bg-red-700">
        LEARN MORE
      </button>
    </div>
  );
}

export default UpcomingEventCard;
