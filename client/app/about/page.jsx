import React from "react";
import SectionHeader from "@/components/Common/SectionHeader";
import Description from "@/components/About/Description";
import WhyChoose from "@/components/About/WhyChoose";
import ImageCard from "@/components/About/ImageCard";
import Counter from "@/components/About/Counter";
import WelcomeSection from "@/components/About/WelcomeSection";
import CommentCard from "@/components/Common/CommentCard";
import CommentSection from "@/components/About/CommentSection";
import Breadcrumb from "@/components/Breadcrumb.";

function page() {
  const breadcrumbs = [
    { href: "/", label: "Home", icon: true },
    { href: "/about", label: "About Us" },
   
  ];
  return (
    <div className="mt-24">
      <SectionHeader title={"About Us"} imgURL={"/assets/images/cover.png"} />
  


      <div className="px-4 md:px-16">
      <Breadcrumb crumbs={breadcrumbs} fontColor="" />
        <Description />
      </div>
      <div>
        <WhyChoose />
      </div>
      <Counter />
      <WelcomeSection />

      <div>
        <CommentSection />
      </div>
    </div>
  );
}

export default page;
