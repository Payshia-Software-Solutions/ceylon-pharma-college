import React from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Accredition  from "@/components/Accredition ";
import TestMotion from "@/components/TestMotion";
import ExploreProgram from "@/components/ExploreProgram";
import Testimonial from "@/components/Testimonial";
import AllBelonge from "@/components/AllBelonge";
import AlvenroToday from "@/components/AlvenroToday";
import UpcomingEventCard from "@/components/Common/UpcomingEventCard";
import RedyForNext from "@/components/RedyForNext";
import Course from  "@/components/Course/Course";


function page() {
  return (
    <div>
      <Hero />

      <Accredition  />
      <ExploreProgram />
      <Testimonial />

      <AllBelonge />
      <AlvenroToday />
      <RedyForNext />
 
    </div>
  );
}

export default page;
