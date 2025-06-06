"use client"
import { on } from "events";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    "Get In Touch": [
      { title: "Careers", href: "/tea-jar-story" },
      { title: "Courses", href: "/course" },
      { title: "Profile", href: "/tea-heritage" },
      // { title: "Certificate", href: "/#", onclick:"scrollToCertificates" },
    ],
    "Our Policies": [
      { title: "Privacy Policy", href: "/policies/privacy-policy" },
      { title: "Refund Policy", href: "/policies/refund-policy" },
      { title: "Terms of Service", href: "/policies/terms-and-conditions" },
      { title: "Shipping Policy", href: "/policies/shipping-policy" },
    ],
    " Company": [
      { title: "Home", href: "#" },
      { title: "About", href: "/about" },
      { title: "Contact", href: "/contactus" },
      { title: "Blogs", href: "/blog" },
      { title: "Event", href: "/event" },
    ],
  };


    // Scroll to Certificates section
    const scrollToCertificates = () => {
      const element = document.getElementById("certificates");
      if (element) {
        window.scrollTo({
          top: element.offsetTop,
          behavior: "smooth", // smooth scroll
        });
      }
    };
  

  return (
    <footer className="bg-maincolor text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Footer Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-white  text-lg mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.title}>
                    <Link
                      href={link.href}
                      className="text-white hover:text-gray-300 text-sm transition-colors"
                   
                    >
                      {link.title}
                    </Link>

                  </li>
                  
                ))}


               
             
              </ul>
            </div>
          ))}
          {/* Company Information */}
          <div className="hidden md:block text-start  ">
            <div className="space-y-4 text-sm ">
              <h1 className="text-xl font-bold">Head Office</h1>
              <p>
                Ceylon Pharma College (PVT) LTD,
                <br />
                L35, West Tower, World Trade Center, Colombo 01, Sri Lanka
              </p>

              <div>
                <p className="mb-1">Customer Service: 011 74 94 335</p>

                <p>Email: info@phamacollege.lk</p>
              </div>

              <div className="my-2">
                <h1 className="text-xl font-bold">Operation Branch</h1>

                <p>
                  L35, West Tower, World Trade Center, Colombo 01, Sri Lanka
                </p>

                <p className="mb-2"> 0715 884 884</p>
              </div>
            </div>
          </div>
        </div>
        {/* Company Information */}
        <div className="md:hidden text-center md:text-start ">
          <h3 className="text-white text-lg mt-8 mb-4">Head Office</h3>
          <div className="space-y-4 text-sm ">
          <p>
                Ceylon Pharma College (PVT) LTD,
                <br />
                L35, West Tower, World Trade Center, Colombo 01, Sri Lanka
              </p>

            <p>
              <p className="mb-1">Customer Service: 011 74 94 335</p>
              <br />
        
            </p>

            {/* <div>
              <p className="mb-2">Customer Service: 011 74 94 335</p>
              
            </div> */}

            
            <div className="my-2">
                <h1 className="text-xl font-bold">Operation Branch</h1>

                <p>
                  L35, West Tower, World Trade Center, Colombo 01, Sri Lanka
                </p>

                <p className="mb-2"> 0715 884 884</p>
              </div>

            <div>

              <p>Email: info@phamacollege.lk</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-white">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white">
            <p>© {currentYear} Ceylon Pharma College. All rights reserved.</p>
            <div className="flex items-center gap-2">
              <span>Powered by</span>
              <Link
                href="https://www.payshia.com"
                className="text-white hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Payshia Software Solutions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
