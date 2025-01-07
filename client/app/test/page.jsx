import React from "react";
import ViewSchoalership from "@/components/Accredition ";
import ExploreCard from "@/components/Common/ExploreCard";
import ExploreProgram from "@/components/ExploreProgram";
import Alverno from "@/components/Alverno";
import Testimonial from "@/components/Testimonial";
import UpcomingEventCard from "@/components/Common/UpcomingEventCard";
import IsoCertificateCard from "@/components/Common/IsoCertificateCard";
import NameCard from "@/components/Common/NameCard";
import CertificateConfirmation from "@/components/CertificateConfirmation";

function page() {
  return (
    <div className="bg-maincolor">
      <div className="mt-48">
       <div className="mt-14">
       <CertificateConfirmation/>
       </div>
      </div>
    </div>
  );
}

export default page;
