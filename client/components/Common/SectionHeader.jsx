import React from "react";
import Image from "next/image";

function SectionHeader({ imgURL, title }) {
  return (
    <div className="mb-10 mt-4">
      <div className="flex flex-col items-center justify-center">
        <div className="relative w-full h-[60vh]">
          {/* Adjust height to 50% of the viewport */}
          <Image
            src={imgURL} // Replace with your image path
            alt="Exceptional"
            layout="fill" // Ensures the image fills the container
            objectFit="cover" // Makes the image behave like background-size: cover
            className="shadow-lg "
          />

          {/* Black overlay */}
          <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
          {/* Text */}

          <div
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-8xl font-bold`}
          >
            <div
              className={`$lowercase flex justify-center text-center  text-[45px] md:text-[75px]`}
            >
              {title}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionHeader;
