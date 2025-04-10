"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import config from "@/config";

function Heroabout() {
  const [userCount, setUserCount] = useState(null);
  const [courseCount, setCourseCount] = useState(null);

  const COURSE_URL = `${config.API_BASE_URL}/parent-main-course/get/counts`;
  const USER_URL = `${config.API_BASE_URL}/users/count`;

  useEffect(() => {
    fetch(USER_URL)
      .then((response) => response.json())
      .then((data) => setUserCount(data.user_count || null))
      .catch((error) => console.error("Error fetching user count:", error));
  }, []);

  useEffect(() => {
    fetch(COURSE_URL)
      .then((response) => response.json())
      .then((data) => setCourseCount(data.total_courses || null))
      .catch((error) => console.error("Error fetching course count:", error));
  }, []);

  return (
    <div className="">
      <div className="flex flex-col md:flex-row w-full overflow-hidden bg-white">
        {/* Left side with image - curved edge effect */}
        <div className="w-full md:w-1/2 relative h-60 md:h-auto">
          <div className="absolute inset-0 overflow-hidden">
            <div className="w-full h-full relative">
              <Image
                src="/assets/images/why-chose.jpg"
                alt="Graduate student receiving flowers"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Curved edge overlay */}
          <div
            className="absolute top-0 right-0 h-full w-10 md:w-16 bg-white hidden md:block"
            style={{
              borderTopLeftRadius: "100%",
              borderBottomLeftRadius: "100%",
            }}
          ></div>
        </div>

        {/* Right side with content */}
        <div className="w-full md:w-1/2 p-4 md:p-12 flex flex-col justify-center">
          <h1 className="text-3xl md:text-5xl font-bold text-maincolor mb-4 text-center md:text-left">
            Why Choose Us?
          </h1>

          <p className="text-gray-700 mb-4 text-center md:text-left">
            At Ceylone Pharma College, we believe in cultivating tomorrow's
            leaders today. Our commitment to excellence and innovation sets us
            apart. With a dedicated and talented academic staff, and a strong
            emphasis on practical learning, we provide a comprehensive education
            that prepares you for nothing but success in the real world.
          </p>

          <p className="text-gray-700 mb-6 text-center md:text-left">
            Choosing Ceylone Pharma College means choosing a future where your
            ambitions are realized. We're not just an institution; we're a
            launchpad for your dreams. At Ceylone Pharma College, you'll gain
            the knowledge, skills, and confidence needed to excel in your chosen
            field. Join us, and embark on a journey of personal and professional
            growth, all within an inspiring and supportive academic community.
          </p>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="flex flex-col items-center bg-white bg-opacity-40 p-4 md:p-6 rounded-lg">
              <h2 className="text-3xl md:text-4xl font-bold">
                {userCount ? `${userCount}+` : "Loading..."}
              </h2>
              <p className="text-sm md:text-lg text-maincolor font-semibold">
                Over {userCount || "Loading..."} students
              </p>
            </div>

            <div className="flex flex-col items-center bg-white bg-opacity-40 p-4 md:p-6 rounded-lg">
              <h2 className="text-3xl md:text-4xl font-bold">
                {courseCount ? `${courseCount}+` : "Loading..."}
              </h2>
              <p className="text-sm md:text-lg text-maincolor uppercase font-semibold">
                Over <span>{courseCount ? courseCount : "Loading..."}</span> Courses
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Heroabout;
