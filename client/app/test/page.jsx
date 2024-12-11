import React from "react";
import ViewSchoalership from "@/components/IsoCertificate";
import ExploreCard from "@/components/Common/ExploreCard";
import ExploreProgram from "@/components/ExploreProgram";
import Alverno from "@/components/Alverno";
import Testimonial from "@/components/Testimonial";
import UpcomingEventCard from "@/components/Common/UpcomingEventCard";
function page() {
  return (
    <div>
      <div className="mt-48">
        <ViewSchoalership />

        <ExploreProgram />
        <Testimonial />
        <UpcomingEventCard />
      </div>
    </div>
  );
}

export default page;
