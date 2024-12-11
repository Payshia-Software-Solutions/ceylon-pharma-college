import React from "react";

function IsoCertificateCard({imgUrl}) {
  return (
    <div>
      <div className="max-w-full sm:max-w-[30rem] my-5 mx-auto rounded-lg overflow-hidden bg-white shadow-md">
        {/* Image */}
        <img
          className="w-full h-[12rem] sm:h-[12rem] object-contain"
          src={imgUrl}
          alt="Undergraduate First Year"
        />

        {/* Content */}
        <div className="p-6">
          {/* Description */}
          <p className="text-gray-600 text-xs sm:text-base mb-4 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero
            porro culpa accusamus corrupti debitis saepe officia dolorum
            inventore veritatis, ipsum accusantium soluta in expedita facilis
            laboriosam ipsam totam maiores repellendus.
          </p>

          {/* Button */}
          <div className="flex justify-center">
          <button className="bg-[#870024] text-white uppercase  text-sm px-4 py-2 rounded hover:bg-[#a0032e] transition">
            learn more
          </button></div>
        </div>
      </div>
    </div>
  );
}

export default IsoCertificateCard;
