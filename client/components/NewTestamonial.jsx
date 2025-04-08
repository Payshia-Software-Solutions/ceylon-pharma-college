"use client";
import React, { useRef, useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import Image from "next/image";
import TestamonialCard from "./Common/TestamonialCard";
import { FaPlusCircle } from "react-icons/fa";

const Testimonial = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    feedback: "",
    rating: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRatingChange = (rating) => {
    setFormData((prev) => ({ ...prev, rating }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Feedback:", formData);

    setFormData({ name: "", feedback: "" });
    setShowModal(false);
  };

  const cards = [
    {
      name: "Yomal",
      role: "Theekshan",
      image: "/assets/images/cover.png",
      comment:
        "Assessment and Certification system of Skill Development Council Canada is simply amazing. They have a very transparent and fully digital system for all processes. We are very thankful to SDC Canada for our partnership.",
    },
    {
      name: "Alex",
      role: "Designer",
      image: "/assets/testimonial/doctor1.jpg",
      comment:
        "The best part of Skill Development Council Canada is their team of experts. Their team is wonderful and helped us solve our challenges in conducting assessments and awarding the qualifications. We recommend them to all training organizations worldwide.",
    },
    {
      name: "Emma",
      role: "Developer",
      image: "/assets/images/cover.png",
      comment:
        "Assessment and Certification system of Skill Development Council Canada is simply amazing. They have a very transparent and fully digital system for all processes. We are very thankful to SDC Canada for our partnership.",
    },
  ];

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.navigation) {
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <section className="relative w-full bg-white px-8 flex justify-center items-center min-h-[700px]">
      <div className="absolute inset-0 h-auto md:h-[700px] flex justify-center items-center">
        <Image
          src="/assets/images/cover.png"
          width={500}
          height={300}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Content */}
      <div className="grid text-white bg-maincolor/80 my-4 md:px-8 py-2 px-4 md:py-16 rounded-3xl min-h-[600px] grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-[100rem] relative items-center text-center md:text-left backdrop-blur-md">
        {/* Left Section */}
        <div className="col-span-1 flex flex-col justify-start items-center md:items-start text-start md:text-left">
          <p className="text-base my-6 md:my-0 uppercase">Testimonial</p>
          <div>
            <h2 className="text-3xl md:text-5xl font-bold">
              23k+ Customers gave their <span>Feedback</span>
            </h2>
          </div>

          <div className="mt-8 gap-5 hidden md:flex">
            <button
              ref={prevRef}
              className="border border-white bg-white text-black rounded-lg p-4 hover:bg-maincolor hover:text-white transition"
            >
              <ArrowLeft size={24} />
            </button>
            <button
              ref={nextRef}
              className="border border-white bg-white text-black rounded-lg p-4 hover:bg-maincolor hover:text-white transition"
            >
              <ArrowRight size={24} />
            </button>
          </div>

          {/* Description and Feedback Button */}
          <div className="mt-4">
            {/* <p className="text-sm font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A facilis
              soluta ipsam est libero eaque culpa deserunt, voluptatibus ab,
              molestiae ut cumque, deleniti iusto? Nam natus est fugit
              reiciendis ut?
            </p> */}

            <div className="flex justify-start mt-4">
              <button
                onClick={() => setShowModal(true)}
                className="bg-white flex gap-2 text-black px-4 py-2  items-center  capitalize border border-white hover:bg-maincolor hover:text-white rounded-lg font-bold my-4"
              >
                <FaPlusCircle className="w-4 h-4" /> Add your feedback
              </button>
            </div>
          </div>
        </div>

        {/* Right Section - Swiper */}
        <div className="col-span-2">
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 2 },
            }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            className="w-full"
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              if (
                swiper.params.navigation &&
                prevRef.current &&
                nextRef.current
              ) {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }
            }}
          >
            {cards.map((card, index) => (
              <SwiperSlide key={index}>
                <TestamonialCard
                  name={card.name}
                  image={card.image}
                  role={card.role}
                  comment={card.comment}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* pop up card */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-6 rounded-2xl w-full max-w-md shadow-lg relative"
            >
              <button
                className="absolute top-3 right-4 text-black font-bold text-xl"
                onClick={() => setShowModal(false)}
              >
                ×
              </button>
              <h3 className="text-2xl text-maincolor font-bold mb-4">
                Leave Your Feedback
              </h3>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="border border-maincolor rounded-md px-4 py-2"
                  required
                />

                <textarea
                  name="feedback"
                  placeholder="Your Feedback"
                  rows={4}
                  value={formData.feedback}
                  onChange={handleInputChange}
                  className="border border-maincolor rounded-md px-4 py-2"
                  required
                />

                <div className="flex gap-2 items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => handleRatingChange(star)}
                      className="text-yellow-400 text-2xl focus:outline-none"
                    >
                      {star <= formData.rating ? (
                        <AiFillStar />
                      ) : (
                        <AiOutlineStar />
                      )}
                    </button>
                  ))}
                </div>

                <button
                  type="submit"
                  className="bg-maincolor capitalize text-white py-2 px-4 rounded-md font-semibold transition"
                >
                  Submit your review
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Testimonial;
