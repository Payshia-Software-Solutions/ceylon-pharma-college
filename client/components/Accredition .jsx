import React from "react";
import IsoCertificateCard from "./Common/IsoCertificateCard";

function Accredition() {
  return (
    <div className="bg-white py-10 px-4 sm:px-8">
      <div className="text-black max-w-5xl mx-auto">
        {/* Main Heading */}
        <p className="text-2xl sm:text-3xl md:text-4xl leading-snug border-l-4 sm:border-l-8 border-maincolor">
          <span className="font-bold ml-2">
            Ceylon Pharma College is accredited by the
          </span>{" "}
          American Council of Training Development
        </p>{" "}
      </div>

      {/* Cards Section */}
      <div className="mt-10 flex justify-center  ">
        <div className="grid grid-cols-2 gap-4  justify-center sm:gap-6">
          <IsoCertificateCard imgUrl={"/assets/logo/skildevlopment.jpg"} />
          <IsoCertificateCard imgUrl={"/assets/logo/actd.png"} />
          <IsoCertificateCard imgUrl={"/assets/logo/iaf.jpg"} />
          <IsoCertificateCard imgUrl={"/assets/logo/scc.png"} />
        </div>
      </div>
    </div>
  );
}

export default Accredition;
