import React from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Accredition from "@/components/Accredition ";
import TestMotion from "@/components/TestMotion";
import ExploreProgram from "@/components/ExploreProgram";
import Testimonial from "@/components/Testimonial";
import AllBelonge from "@/components/AllBelonge";
import AlvenroToday from "@/components/EventToday";
import UpcomingEventCard from "@/components/Common/UpcomingEventCard";
import RedyForNext from "@/components/RedyForNext";
import Course from "@/components/Course/Course";
import MainTestimonial from "@/components/MainTestimonial";

function page() {
  return (
    <div>
      <Hero />

      <Accredition />
      <ExploreProgram />
      <MainTestimonial />

      <AllBelonge />
      <AlvenroToday />
      <RedyForNext />
    </div>
  );
}

export default page;
