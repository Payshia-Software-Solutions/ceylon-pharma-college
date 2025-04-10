"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import UpcomingEventCard from "./Common/UpcomingEventCard";
import NewEventCard from "./Common/NewEventCard";
import Link from "next/link";
import config from "@/config";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function EventToday() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768); // Example: below md breakpoint
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(
          `${config.API_BASE_URL}/events-page/latest`
        );
        if (!response.ok) throw new Error("Failed to fetch events");
        const data = await response.json();
        setEvents(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

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

      {/* Events Section */}
      <div className="md:px-16 lg:px-24">
        <div className="shadow-xl p-10 rounded-[50px] bg-white">
          <div className="flex justify-center">
            {isMobileView ? (
              // Swiper for Mobile View
              <Swiper
                spaceBetween={10}
                slidesPerView={1.2}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                loop={true}
                modules={[Pagination, Autoplay]}
              >
                {events.map((event, index) => (
                  <SwiperSlide key={index}>
                    <NewEventCard
                      key={event.id}
                      date={new Date(event.event_date).getDate()}
                      monthYear={new Date(event.event_date).toLocaleString(
                        "en-US",
                        {
                          month: "short",
                          year: "numeric",
                        }
                      )}
                      Label={event.label}
                      title={event.title}
                      minidescription={event.mini_description}
                      phone={event.phone}
                      image={`/assets/event/${event.image_url}`}
                      slug={event.slug}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              // Grid for Desktop View
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.1 }}
                transition={{ staggerChildren: 0.3 }}
              >
                {events.map((event, index) => (
                  <motion.div key={index} variants={cardVariants}>
                    <NewEventCard
                      key={event.id}
                      date={new Date(event.event_date).getDate()}
                      monthYear={new Date(event.event_date).toLocaleString(
                        "en-US",
                        {
                          month: "short",
                          year: "numeric",
                        }
                      )}
                      Label={event.label}
                      title={event.title}
                      minidescription={event.mini_description}
                      phone={event.phone}
                      image={`/assets/event/${event.image_url}`}
                      slug={event.slug}
                    />
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>

          {/* Button */}
          <div className="mt-12 flex justify-center">
            <Link href="/event">
              <motion.button
                className="bg-gradient-to-r from-[#00b67d] to-[#008f65] text-white py-3 px-6 rounded-full shadow-md text-lg font-medium flex items-center gap-2 hover:scale-105 transition-transform duration-300 relative"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View All Events
                <span className="ml-2">→</span>
                <span className="absolute inset-0 bg-white opacity-0 hover:opacity-10 transition" />
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventToday;
