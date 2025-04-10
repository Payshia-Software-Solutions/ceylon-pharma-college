import ContactUs from "@/components/ContactUs/ContactUs";
import React from "react";
import Breadcrumb from "@/components/Breadcrumb.";
import SectionHeader from "@/components/Common/SectionHeader";

function page() {
  const breadcrumbs = [
    { href: "/", label: "Home", icon: true },
    { href: "/about", label: "About Us" },
  ];
  return (
    <div className="mt-30">
      <SectionHeader title="Contact Us" imgURL="/assets/images/cover.png" />
      <div className="container mx-auto">
        <Breadcrumb crumbs={breadcrumbs} fontColor="" />
        <ContactUs />
      </div>
    </div>
  );
}

export default page;
