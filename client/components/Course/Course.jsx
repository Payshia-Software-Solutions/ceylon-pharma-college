"use client";

import React, { useEffect, useState } from "react";
import SideBar from "@/components/Course/SideBar";
import config from "@/config";
import ExploreCard from "../Common/ExploreCard";
import Image from "next/image";

// Components
import ProductSectionHeader from "@/components/Course/CourseSectionheader";
import SectionHeader from "../Common/SectionHeader";

// Font imports
import { Italiana, Julius_Sans_One } from "next/font/google";

const italiana = Italiana({
  weight: "400",
  subsets: ["latin"],
});

const juliusSansOne = Julius_Sans_One({
  weight: "400",
  subsets: ["latin"],
});

const exploreData = [
  {
    title: "Undergraduate First Year",
    description:
      "Explore our undergraduate major and minor programs for women.",
    buttontext: "LEARN MORE",
    imgURL: "/assets/explore/black-tea.webp",
    rating: "4.5", // Rating out of 5
  },
  {
    title: "Undergraduate First Year",
    description:
      "Explore our undergraduate major and minor programs for women.",
    buttontext: "LEARN MORE",
    imgURL: "/assets/explore/black-tea.webp",
  },
  {
    title: "Undergraduate First Year",
    description:
      "Explore our undergraduate major and minor programs for women.",
    buttontext: "LEARN MORE",
    imgURL: "/assets/explore/black-tea.webp",
  },
  {
    title: "Undergraduate First Year",
    description:
      "Explore our undergraduate major and minor programs for women.",
    buttontext: "LEARN MORE",
    imgURL: "/assets/explore/black-tea.webp",
  },
  {
    title: "Undergraduate First Year",
    description:
      "",
    buttontext: "LEARN MORE",
    imgURL: "/assets/explore/black-tea.webp",
  },
];

// Backend connection
function Course() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section className="h-full">
      {/* Section Header */}
      <SectionHeader
        imgURL={"/assets/images/cover.png"}
        title={"Our Courses"}
      />

      {/* Main Content */}
      <div className="px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Sidebar */}
          <div className="md:col-span-3">
            <div className="sticky top-24">
              <SideBar />
            </div>
          </div>

          {/* Main Grid Content */}
          <div className="md:col-span-9">
            <h2 className="text-3xl font-bold text-black mb-4">Courses</h2>
            <hr className="border-black border-t-2 mb-6" />

            {/* Responsive Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4  gap-2  md:gap-4">
              {exploreData.map((explore, index) => (
                <ExploreCard
                  key={index}
                  title={explore.title}
                  description={explore.description}
                  buttontext={explore.buttontext}
                  imgURL={explore.imgURL}
                  rating={explore.rating}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Course;