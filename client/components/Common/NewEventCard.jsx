"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";

function NewEventCard({
  date,
  monthYear,
  Label,
  title,
  minidescription,
  phone,
  image,
  slug
}) {
  // Create variants for hover animations
  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  const dateVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const router = useRouter();

  const handleClick = () => {
    router.push(`/events/${slug}`); // Navigate to event details
  };


  return (
    <motion.div
      className="w-full sm:max-w-md rounded-tl-[2.5rem] rounded-br-[2.5rem] md:my-6 overflow-hidden shadow-lg relative hover:scale-95 duration-300"
      whileHover={"visible"}
      initial="hidden"
    >
      {/* Background Image */}
      <div className="relative w-full h-[350px] sm:h-[500px]">
        <img src={image} className="h-full w-full object-cover" alt="Event" />

        {/* Date Badge */}
        <motion.div
          className="bg-gradient-to-r from-[#00b67d] to-[#008f65] absolute right-3 sm:right-5 top-0 text-white flex flex-col w-20 sm:w-24 rounded-b-lg items-center py-2 sm:py-3 shadow-md z-10"
          variants={dateVariants}
          transition={{ duration: 0.4 }}
        >
          <span className="text-3xl sm:text-4xl font-bold">{date}</span>
          <span className="text-xs sm:text-sm font-medium">{monthYear}</span>
        </motion.div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black opacity-30 transition-opacity "></div>

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col p-4 sm:p-6 text-white">
          {/* Title */}
          <div className="text-center mb-2 mt-3 sm:mt-4">
            <div className="bg-gray-100 bg-opacity-40 backdrop-blur-sm rounded-xl p-2 sm:p-3 mx-2 sm:mx-4">
              <h2 className="text-2xl sm:text-3xl font-bold">{title}</h2>
            </div>
          </div>

          {/* Label */}
          <motion.div
            className="text-center mb-3 sm:mb-4"
            variants={itemVariants}
            transition={{ duration: 0.4 }}
          >
            <p className="text-lg sm:text-xl font-medium">{Label}</p>
          </motion.div>

          {/* Spacer */}
          <div className="flex-grow"></div>

          {/* Description */}
          <motion.div
            className="text-center mb-6 sm:mb-8"
            variants={itemVariants}
            transition={{ duration: 0.4 }}
          >
            <div className="bg-gray-100 bg-opacity-10 px-4 py-2 ">
              <p className="text-base sm:text-lg whitespace-pre-line">
                {minidescription}
              </p>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            className="text-center mb-5 sm:mb-6"
            variants={itemVariants}
            transition={{ duration: 0.4 }}
          >
            <button className="bg-gradient-to-r from-[#00b67d] to-[#008f65] text-white font-medium py-2 px-10 sm:py-3 sm:px-16 rounded-lg transition-colors duration-300">
             <Link href={ ` /event/${slug}`}> LEARN MORE</Link>
            </button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default NewEventCard;
