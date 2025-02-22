"use client";
import React from "react";
import { motion } from "framer-motion";

function UpcomingEventCard({ date, monthYear, image, title, description, location, time }) {
  return (
    <motion.div 
      className="max-w-sm sm:max-w-md lg:max-w-sm xl:max-w-sm rounded-xl max-h-[36rem] shadow-lg border relative bg-white border-gray-200 transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
      whileHover={{ scale: 0.95, boxShadow: "0px 5px 20px rgba(0, 0, 0, 0.3)" }}
    >
      {/* Header with Date */}
      <div className="bg-gradient-to-r from-[#00b67d] to-[#008f65] absolute left-5 top-0 text-white flex flex-col w-24 rounded-b-lg items-center py-3 shadow-md z-10">
        <span className="text-4xl font-bold">{date}</span>
        <span className="text-sm font-medium">{monthYear}</span>
      </div>

      {/* Image  */}
      <div className="w-full h-[14rem] sm:h-[17rem] lg:h-[17rem] relative z-0">
        <img
          src={image}
          className="h-full w-full object-cover rounded-t-xl"
          alt="Event"
        />
             <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div> 
      
      </div>

    
      <div className="p-6 flex flex-col">
        <h3 className="text-lg font-bold mb-2 text-gray-900 ">{title}</h3>
        <p className="text-sm text-gray-600 mb-4">{description}</p>
        <div className="flex items-center justify-between text-gray-500 text-sm font-medium">
          <span>{location}</span>
          <span>{time}</span>
        </div>
      </div>

      {/* CTA Button */}
      <button className="bg-gradient-to-r from-[#00b67d] to-[#008f65] text-white font-semibold py-3 w-full rounded-b-xl shadow-md hover:opacity-90 transition-all duration-300 flex justify-center items-center gap-2">
        LEARN MORE
      </button>
    </motion.div>
  );
}

export default UpcomingEventCard;