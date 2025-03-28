import React from "react";

function SingleEvent({ title, description, image,label ,Date}) {
  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Image Section */}
      <img
        src={` /assets/event/${image}`}
        alt="Graduate"
        className="w-full rounded-lg shadow-lg"
      />

      {/* Content Section */}
      <div className="mt-6">
        <h3 className="text-sm bg-maincolor text-white px-4 py-2 w-20 font-semibold rounded-md  uppercase">{label}</h3>
        <h1 className="text-3xl font-bold mt-2">{title}</h1>
        <p className="text-gray-600 mt-2">
          held <span className="font-semibold">on</span> <span className="mx-4 font-bold text-xl">{Date}</span>
        </p>

        <p className="mt-4 text-gray-700 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export default SingleEvent;
