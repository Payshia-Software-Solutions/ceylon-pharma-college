"use client";
import React from "react";
import { motion } from "framer-motion";
import UpcomingEventCard from "./Common/UpcomingEventCard";
import NewEventCard from "./Common/NewEventCard";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const eventData = [
  {
    date: "25",
    monthYear: "Mar 2025",
    image: "/assets/event/eventp .webp",
    title: "AI & Machine Learning Conference",
    description:
      "A deep dive into the latest trends in AI and ML with industry experts.",
    location: "📍 San Francisco, CA",
    time: "⏰ 10:00 AM",
  },
  {
    date: "05",
    monthYear: "Jun 2025",
    image: "/assets/event/eventp2.webp",
    title: "Blockchain & Web3 Meetup",
    description:
      "Explore the future of decentralized applications and blockchain technology.",
    location: "📍 Online",
    time: "⏰ 6:30 PM",
  },
  {
    date: "05",
    monthYear: "Jun 2025",
    image: "/assets/event/eventp .webp",
    title: "Blockchain & Web3 Meetup",
    description:
      "Explore the future of decentralized applications and blockchain technology.",
    location: "📍 Online",
    time: "⏰ 6:30 PM",
  },
];

function EventToday() {
  const cards = [0, 1, 2];

  return (
    <div className="bg-gray-50 py-12 relative">
      {/* Heading Section */}

      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 hover:text-red-700 transition duration-300">
          Event Calender
        </h2>
        <p className="text-gray-600 mt-2 text-lg">
          Stay updated with our latest institute events.
        </p>
        <hr className="w-32 border-t-4 border-maincolor mx-auto mt-4" />
      </div>

      {/* Event Cards Section */}
      <div className="md:px-16 lg:px-24">
        <div className="shadow-xl p-10 rounded-[50px] bg-white">
          <div className="flex justify-center">
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.1 }}
              transition={{ staggerChildren: 0.3 }}
            >
              {eventData.map((event, index) => (
                <motion.div key={index} variants={cardVariants}>
                  <NewEventCard
                    date={event.date}
                    monthYear={event.monthYear}
                    image={event.image}
                    title={event.title}
                    description={event.description}
                    location={event.location}
                    time={event.time}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/*  Button */}
          <div className="mt-12 flex justify-center">
            <motion.button
              className="bg-gradient-to-r from-[#00b67d] to-[#008f65] text-white py-3 px-6 rounded-full shadow-md text-lg font-medium flex items-center gap-2 hover:scale-105 transition transform duration-300 relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Events
              <span className="ml-2">→</span>
              <span className="absolute inset-0 bg-white opacity-0 hover:opacity-10 transition" />
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventToday;
