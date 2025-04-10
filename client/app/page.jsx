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
import Certificate from "@/components/Certificate";
import NewEventCard from "@/components/Common/NewEventCard";
import Heroabout from "@/components/Heroabout";
import ApplyNowBottemBar from "@/components/ApplyNowBottemBar";
import NewTestamonial from "@/components/NewTestamonial";
import OurAchievements from "@/components/OurArchivements";

function page() {
  return (
    <div>
      <Hero />
      <ExploreProgram />
      <section id="certificates">
        <Certificate />
      </section>
      <Heroabout />
      <OurAchievements />
      <NewTestamonial />
      <AlvenroToday />
      <Accredition />
      <ApplyNowBottemBar />
    </div>
  );
}

export default page;
