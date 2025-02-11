"use client";
import React from "react";
import { motion } from "framer-motion";
import UpcomingEventCard from "./Common/UpcomingEventCard";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function EventToday() {
  const cards = [0, 1, 2];

  return (
    <div>
      {/* Heading */}
      <div className="my-5">
        <h2 className="text-2xl text-center sm:text-3xl md:text-4xl font-bold leading-snug">
          Today Events
        </h2>
        <hr className="w-24 md:w-32 border-t-4 border-maincolor mx-auto mt-4 md:mt-6" />
      </div>

      {/* Cards Section */}
      <div className="px-4 sm:px-6 md:px-24">
        <div className="shadow-2xl p-8 my-5">
          <div className="flex justify-center">
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.1 }} // More sensitive to scrolling
              transition={{ staggerChildren: 0.3 }} // Delay between cards
            >
              {cards.map((_, index) => (
                <motion.div key={index} variants={cardVariants}>
                  <UpcomingEventCard />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Button with Animation */}
          <div className="mt-10 flex justify-center">
            <motion.button
              className="uppercase border-black border-2 hover:bg-maincolor hover:text-white hover:border-none p-3 rounded-full text-sm sm:text-base md:text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              See All Events
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventToday;
