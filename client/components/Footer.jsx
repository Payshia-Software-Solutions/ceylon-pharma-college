import Link from "next/link";
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    "Get In Touch": [
      { title: "Careers", href: "/tea-jar-story" },
      { title: "Courses", href: "/tea-heritage" },
      { title: "Profile", href: "/tea-heritage" },
      { title: "Certificate", href: "/#" },
    ],
    "Our Policies": [
      { title: "Privacy Policy", href: "/policies/privacy-policy" },
      { title: "Refund Policy", href: "/policies/refund-policy" },
      { title: "Terms of Service", href: "/policies/terms-and-conditions" },
      { title: "Shipping Policy", href: "/policies/shipping-policy" },
    ],
    " Company": [
      { title: "Home", href: "#" },
      { title: "About", href: "/contact" },
      { title: "Contact", href: "#" },
      { title: "Posts", href: "#" },
      { title: "Event", href: "#" },
    ],
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

                <p>Email: marketing@teajarceylon.com</p>
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
          <h3 className="text-white text-lg mt-8 mb-4">Tea Jar</h3>
          <div className="space-y-4 text-sm ">
            <p>
              Corporate Office: KDU Exports PVT LTD,
              <br />
              427 A, Galle Road, Colombo 03, Sri Lanka
            </p>

            <p>
              Factory: KDU Exports PVT LTD,
              <br />
              Galpadithanna Tea Factory, Lellopitiya,Rathnapura.
            </p>

            <div>
              <p className="mb-2">Customer Service: (+94)70 55 08 800</p>
              <p>Service Hours: Daily 9 am - 6 pm</p>
            </div>

            <div>
              <p className="mb-2">Wholesale Inquiries: (+94)70 55 08 800</p>
              <p>Email: marketing@teajarceylon.com</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-white">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white">
            <p>© {currentYear} Tea Jar. All rights reserved.</p>
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
