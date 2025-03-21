"use client";
import React from "react";
import { motion } from "framer-motion";

function Testimonial({ imgURL, coverimgURL, description, name }) {
  return (
    <>
      {/* Desktop View */}
      <div
        className="relative bg-cover bg-center bg-no-repeat h-1/2 hidden lg:flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${coverimgURL})` }}
      >

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="text-center text-white absolute top-4  font-semibold  text-4xl"> <span className="font-bold"> what people say </span><p className="text-end">about Ceylon Pharma College</p></div>

        <div className="relative z-10 h-[40rem] w-[60rem]">
          {/* Left Quote Mark */}
          <div className="absolute top-16 left-8 text-white text-9xl font-bold">“</div>

          {/* Image Section */}
          <motion.div
            className="absolute top-32 left-16 w-[22rem] h-[25rem]"
            initial={{ opacity: 0, x: -80, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <img src={imgURL} alt={name} className="w-full h-full rounded-lg object-cover" />
          </motion.div>

          {/* Text Section */}
          <motion.div
            className="absolute top-80 left-[22rem] bg-white text-gray-900 rounded-lg p-6 w-[28rem] shadow-lg"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <p className="text-lg leading-relaxed">{description}</p>
            <p className="text-right font-semibold mt-4">- {name}</p>

            {/* Right Quote Mark */}
            <div className="absolute bottom-[-7rem] right-1 text-white text-9xl font-bold">”</div>
          </motion.div>
        </div>
      </div>

      {/* Mobile & Tablet View */}
      <div
        className="relative bg-cover bg-center bg-no-repeat min-h-screen flex lg:hidden items-center justify-center px-4 sm:px-8"
        style={{ backgroundImage: `url(${coverimgURL})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content Wrapper */}
        <div className="relative z-10 text-white flex flex-col items-center max-w-4xl mx-auto text-center">
          {/* Image Section */}
          <motion.div
            className="w-40 h-40 sm:w-56 sm:h-56 rounded-lg overflow-hidden shadow-lg"
            initial={{ opacity: 0, y: -50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <img src={imgURL} alt={name} className="w-full h-full object-cover" />
          </motion.div>

          {/* Text Section */}
          <motion.div
            className="mt-6 bg-white text-gray-900 p-6 rounded-lg shadow-lg w-full max-w-md sm:max-w-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="text-4xl sm:text-6xl text-maincolor font-bold">“</div>
            <p className="text-base sm:text-lg leading-relaxed">{description}</p>
            <p className="text-right font-semibold mt-4">- {name}</p>
            <div className="text-4xl sm:text-6xl text-maincolor font-bold text-right">”</div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Testimonial;
