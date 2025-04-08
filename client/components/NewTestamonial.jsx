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
import { FaPlusCircle } from "react-icons/fa";
import config from "@/config";


const FireworkParticle = ({ x, y, angle, distance, color, delay, size }) => {
  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        backgroundColor: color,
      }}
      initial={{ 
        width: 0, 
        height: 0, 
        opacity: 0,
        x: x,
        y: y,
      }}
      animate={{ 
        x: x + Math.cos(angle) * distance,
        y: y + Math.sin(angle) * distance,
        width: size,
        height: size,
        opacity: [0, 1, 0],
      }}
      transition={{ 
        duration: 1.5, 
        ease: "easeOut",
        delay: delay,
        times: [0, 0.2, 1]
      }}
    />
  );
};


const FireworkExplosion = ({ x, y }) => {
  const particleCount = 30 + Math.floor(Math.random() * 20);
  const baseColor = [
    "#FF5252",
    "#FFEB3B", 
    "#2196F3", 
    "#4CAF50", 
    "#9C27B0", 
    "#FF9800", 
    "#00BCD4", 
  ][Math.floor(Math.random() * 7)];
  
  const particles = [];
  
  for (let i = 0; i < particleCount; i++) {
    const angle = (Math.PI * 2 * i) / particleCount;
    const distance = 150 + Math.random() * 150; 
    const delay = Math.random() * 0.2;
    const size = 12 + Math.random() * 12;
    

    let color = baseColor;
    if (Math.random() > 0.7) {
    
      color = ["#FFD700", "#FFFFFF"][Math.floor(Math.random() * 2)];
    }
    
    particles.push(
      <FireworkParticle
        key={`particle-${i}`}
        x={x}
        y={y}
        angle={angle}
        distance={distance}
        color={color}
        delay={delay}
        size={size}
      />
    );
  }
  
  return <>{particles}</>;
};

const FireworkDisplay = ({ active }) => {
  const [explosions, setExplosions] = useState([]);
  
  useEffect(() => {
    if (!active) return;
    

    const interval = setInterval(() => {
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      

      const newExplosions = [];
      const count = 1 + Math.floor(Math.random() * 2);
      
      for (let i = 0; i < count; i++) {
        newExplosions.push({
          id: Date.now() + Math.random(),
          x: Math.random() * viewportWidth,
          y: Math.random() * (viewportHeight * 0.7), 
        });
      }
      
      setExplosions(prev => [...prev, ...newExplosions]);
    }, 250); 
    
   
    const cleanup = setInterval(() => {
      setExplosions((prev) => 
        prev.filter(exp => Date.now() - parseInt(exp.id) < 2000)
      );
    }, 1000);
    
    
    const timer = setTimeout(() => {
      clearInterval(interval);
      clearInterval(cleanup);
    }, 5000);
    
    return () => {
      clearInterval(interval);
      clearInterval(cleanup);
      clearTimeout(timer);
    };
  }, [active]);
  
  if (!active) return null;
  
  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {explosions.map((exp) => (
        <FireworkExplosion
          key={exp.id}
          x={exp.x}
          y={exp.y}
        />
      ))}
    </div>
  );
};

const TestamonialCard = ({ name, role, image, comment, rating }) => {
  return (
    <div className="bg-white text-black p-6 rounded-xl shadow-md h-full">
      <div className="flex items-center gap-4 mb-4">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
      <div className="flex text-yellow-400 text-xl mb-2">
        {[1, 2, 3, 4, 5].map((i) =>
          i <= Math.floor(rating) ? (
            <AiFillStar key={i} />
          ) : (
            <AiOutlineStar key={i} />
          )
        )}
      </div>
      <div className="text-sm text-gray-700">
        {comment.split("\n").map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>
    </div>
  );
};

const Testimonial = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  const [showModal, setShowModal] = useState(false);
  const [testimonials, setTestimonials] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    comment: "",
    rating: 0,
  });
  const [showCongrats, setShowCongrats] = useState(false);
  const [showFireworks, setShowFireworks] = useState(false);

  const fetchTestimonials = async () => {
    try {
      const res = await fetch(`${config.API_BASE_URL}/testimonials` );
      // `${config.API_BASE_URL}/users/search/${searchQuery}` testimonials
      const data = await res.json();
      setTestimonials(data);
    } catch (error) {
      console.error("Error fetching testimonials:", error);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRatingChange = (rating) => {
    setFormData((prev) => ({ ...prev, rating }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch(`${config.API_BASE_URL}/testimonials`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      setFormData({ name: "", role: "", comment: "", rating: 0 });
      setShowModal(false);
      
      // Show congratulations and fireworks
      setShowCongrats(true);
      setShowFireworks(true);
      
      // Hide congratulations after 6 seconds
      setTimeout(() => {
        setShowCongrats(false);
      }, 6000);
      
      // Hide fireworks after 5 seconds
      setTimeout(() => {
        setShowFireworks(false);
      }, 5000);
      
      fetchTestimonials(); // refresh
    } catch (error) {
      console.error("Error submitting feedback:", error);
    }
  };

  return (
    <section className="relative w-full bg-white px-8 flex justify-center items-center min-h-[700px]">
      <FireworkDisplay active={showFireworks} />
      
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

      <div className="grid text-white bg-maincolor/80 my-4 md:px-8 py-2 px-4 md:py-16 rounded-3xl min-h-[600px] grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-[100rem] relative items-center text-center md:text-left backdrop-blur-md">
        <div className="col-span-1 flex flex-col justify-start items-center md:items-start">
          <p className="text-base my-6 md:my-0 uppercase">Testimonial</p>
          <h2 className="text-3xl md:text-5xl font-bold">
            23k+ Customers gave their <span>Feedback</span>
          </h2>

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

          <div className="flex justify-start mt-4">
            <button
              onClick={() => setShowModal(true)}
              className="bg-white flex gap-2 text-black px-4 py-2 items-center capitalize border border-white hover:bg-maincolor hover:text-white rounded-lg font-bold my-4"
            >
              <FaPlusCircle className="w-4 h-4" /> Add your feedback
            </button>
          </div>
        </div>

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
            {testimonials.map((card, index) => (
              <SwiperSlide key={index}>
                <TestamonialCard
                  name={card.name}
                  image={`/assets/testimonial/${card.image_url}`|| "/assets/testimonial/doctor1.jp"}
                  role={card.role}
                  comment={card.comment}
                  rating={card.rating}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Feedback Form Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
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
                <input
                  type="text"
                  name="role"
                  placeholder="Your Role"
                  value={formData.role}
                  onChange={handleInputChange}
                  className="border border-maincolor rounded-md px-4 py-2"
                />
                <textarea
                  name="comment"
                  placeholder="Your Feedback"
                  rows={4}
                  value={formData.comment}
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

      {/* Congratulations Modal */}
      <AnimatePresence>
        {showCongrats && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ 
                scale: [0.8, 1.1, 1],
                opacity: 1, 
                y: 0 
              }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              transition={{ 
                duration: 0.5,
                times: [0, 0.6, 1],
                type: "spring",
                stiffness: 300,
                damping: 15
              }}
              className="bg-white p-8 rounded-2xl w-full max-w-md shadow-lg text-center"
            >
              <motion.div 
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ 
                  scale: [0.5, 1.2, 1],
                  opacity: 1,
                  rotate: [0, 10, -10, 0]
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  times: [0, 0.6, 0.8, 1]
                }}
                className="text-7xl mb-4"
              >
                🎉
              </motion.div>
              <motion.h3 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-3xl font-bold text-maincolor mb-2"
              >
                Thank You!
              </motion.h3>
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-gray-700 text-lg"
              >
                Your feedback has been submitted successfully!
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Testimonial;