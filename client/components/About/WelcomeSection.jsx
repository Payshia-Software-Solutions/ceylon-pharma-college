"use client";
import React from "react";
import { motion } from "framer-motion";

function WelcomeSection() {
  return (
    <section className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Section: Text Content */}
        <div className="flex bg-gray-100 rounded-r-xl px-12 py-8 justify-end">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, staggerChildren: 0.2 }}
            viewport={{ once: true }}
            className="w-[25rem] md:mr-10"
          >
            <motion.h1
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Welcome to Ceylon Pharma College!
            </motion.h1>
            <motion.p
              className="text-lg text-gray-600 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              It is a long established fact that a reader.
            </motion.p>
            <motion.p
              className="text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
                 In a world where educational institutions faced unprecedented
              challenges, Ceylon Pharma College emerged as a light of innovative
              distance learning. We take pride in our dedicated team of
              professionals who ensured that our students continued to receive
              the best education even in trying times. Our mission is simple yet
              impactful. It is to provide the best education through distance
              learning using online platforms. We are committed to empowering our
              community by equipping individuals with the knowledge and skills to
              shine as professionals. Our vision is to nurture excellence in
              every student.
            </motion.p>
            <motion.button
              className="mt-6 bg-yellow-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-yellow-600"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Read More
            </motion.button>
          </motion.div>
        </div>

        {/* Right Section: Video */}
        <div className="px-4 py-2">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="w-full max-w-xl h-auto md:-ml-28 bg-black rounded-lg shadow-md overflow-hidden"
          >
            <video
              controls
              className="w-full h-full object-cover"
              poster="/assets/images/video-placeholder.jpg"
            >
              <source src="/assets/videos/intro-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default WelcomeSection;
