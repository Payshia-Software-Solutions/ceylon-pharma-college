import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGoogle } from "react-icons/fa";

function InstructorCard() {
  return (
    <div className="w-full lg:max-w-full mx-auto">
      <div className="mt-8 p-4 border rounded-lg shadow-md bg-white">
        <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center md:text-left">
          Instructor
        </h2>
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <img
            src="/assets/testimonial/doctor1.jpg"
            alt="Instructor"
            className="w-20 h-20 md:w-24 md:h-24 rounded-full mb-4 md:mb-0 md:mr-6"
          />
          <div className="text-center md:text-left">
            <h3 className="text-lg md:text-xl font-bold">Dilip Fonseka</h3>
            <p className="text-gray-600 text-sm md:text-base">Instructor</p>
            <div className="mt-4 flex justify-center md:justify-start space-x-4">
              <a
                href="#"
                className="text-blue-600 hover:text-blue-700 text-lg transition"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="text-blue-400 hover:text-blue-500 text-lg transition"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="text-blue-700 hover:text-blue-800 text-lg transition"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="#"
                className="text-red-600 hover:text-red-700 text-lg transition"
                aria-label="Google"
              >
                <FaGoogle />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InstructorCard;
