"use client";
import React from "react";
import { motion } from "framer-motion";

function WelcomeSection() {
  return (
    <section className="py-">
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
              At Ceylon Pharma College, we're passionate about providing high-quality education in pharmacy practice. Our goal is to help you build a successful and meaningful career in healthcare.
            </motion.p>
            <motion.div
              className="text-gray-600 leading-relaxed mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >  
              <p className="mb-3">We offer four practical and career focused programs:</p>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <li>Certificate Course in Pharmacy Practice</li>
                <li>Advanced Course in Pharmacy Practice</li>
                <li>Professional Pharmacist Training</li>
                <li>Workshops for Skill Development</li>
              </ul>
              <p>Whether you want to become a pharmacist, pharmacy assistant, caregiver, or healthcare professional, our courses are designed just for you.</p>
            </motion.div>
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