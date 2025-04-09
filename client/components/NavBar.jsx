"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

import { usePathname } from "next/navigation";
import { Italiana, Julius_Sans_One } from "next/font/google";
import { SlArrowDown } from "react-icons/sl";
import CartSideBar from "@/components/Cart/CartSideBar";
import { IoCartOutline, IoPerson, IoMenu } from "react-icons/io5";
import MobileMenu from "./MobileMenu";
import { FaTruck } from "react-icons/fa";

import config from "@/config"; // Import your configuration

const juliusSansOne = Julius_Sans_One({
  weight: "400", // Julius Sans One only has a regular weight
  subsets: ["latin"],
});

function NavBar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const [isTeasDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const searchRef = useRef(null);

  // const [isAboutDropdownVisible, setAboutDropdownVisible] = useState(false);
  const [isTeasDropdownOpen, setIsTeasDropdownOpen] = React.useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = React.useState(false);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  const formatPrice = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "LKR",
      minimumFractionDigits: 2, // Ensures at least 2 decimal places
      maximumFractionDigits: 2, // Ensures no more than 2 decimal places
    })
      .format(amount)
      .replace("LKR", "Rs"); // Replaces 'LKR' with 'Rs'
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

  // Fetch departments

  useEffect(() => {
    if (pathname !== "/") {
      setIsVisible(false);
      return;
    }

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Drop down function
  const toggleTeasDropdown = (state) => {
    setIsDropdownVisible(state);
  };

  // Close mobile menu when a link is clicked
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Search Function

  const [products, setProducts] = useState([]);
  const [isSearchDropdownVisible, setIsSearchDropdownVisible] = useState(false);
  // Fetch products on component mount

  return (
    <div>
      <header
        className={`fixed top-0 left-0 w-full bg-white shadow text-black z-50 transition-transform duration-300 ${
          isVisible ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        {/* Top Bar */}
        <div className="flex justify-center">
          <div className="bg-maincolor w-full text-sm py-2 px-4 flex sm:justify-start md:justify-center text-white">
            {/* Links section */}
            <div className="flex gap-6">
              <Link href={"#"} className="font-semibold">
                Student Login
              </Link>

              <div className="hidden md:flex gap-6">
                <Link href={"#"}>Portal</Link>
                <Link href={"#"}>Graduation</Link>
                <Link href={"#"}>Certificate</Link>
                {/* <Link href={"#"}>POS</Link> */}
              </div>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="container mx-auto px-4 md:px-8 py-4">
          {/* Logo Row (Mobile-Responsive Centering) */}
          <div className="flex items-center justify-between md:hidden md:gap-4">
            {/* Logo */}
            <div className="w-full md:w-auto relative  hidden md:flex justify-center md:justify-start mb-4 md:mb-0">
              <Link
                href="/"
                className="text-2xl absolute font-bold text-orange-500"
              >
                <img src="/assets/images/logo.svg" alt="" className="h-12" />
              </Link>
            </div>
          </div>

          {/* Navigation and Actions */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="w-full md:w-auto hidden md:flex justify-center md:justify-start mb-4 md:mb-0">
              <Link href="/" className="text-2xl font-bold text-orange-500">
                <img src="/assets/images/logo.png" alt="" className="h-12" />
              </Link>
            </div>
            {/* Navigation */}
            <nav className="hidden md:flex gap-8 items-center">
              <Link href="/" className="hover:text-gray-300">
                Home
              </Link>

              <button
                onClick={scrollToCertificates}
                className="hover:text-gray-300"
              >
                Certificate
              </button>

              <div className="relative">
                <button>
                  <Link className="hover:text-gray-300" href="/about">
                    {" "}
                    About Us
                  </Link>
                </button>
              </div>

              <div className="relative">
                <Link href="/course" className="hover:text-gray-300">
                  Courses
                </Link>
                {/* <button
                  onMouseEnter={() => handleOurTeasMouseEnter(true)}
                  className="hover:text-gray-300"
                >
                  Our Teas
                </button> */}
              </div>

              <Link
                onMouseEnter={() => setOurTeasDropdownVisible(false)}
                href="/contactus"
                className="hover:text-gray-300"
              >
                Contact Us
              </Link>
            </nav>

            {/* Search and User Actions */}
            <div className="flex justify-between items-center gap-4">
              <div className="w-full md:w-auto  md:hidden justify-center md:justify-start mb-4 md:mb-0">
                <Link href="/" className="text-2xl font-bold text-orange-500">
                  <img
                    src="/assets/images/logo.png"
                    alt=""
                    className="h-8 mt-2"
                  />
                </Link>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex gap-4">
                  <button
                    className="hover:text-gray-300 flex md:hidden"
                    onClick={toggleMobileMenu}
                  >
                    <IoMenu className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
            <div className="hidden md:flex">
              <div className="md:flex justify-between items-center">
                <div className="text-white text-center flex justify-around gap-4">
                <button className="bg-gray-600 text-xl py-2 px-4 rounded-full h-auto">
                    <Link
                      href="https://lms.pharmacollege.lk/"
                      target="_blank"
                    >
                      Student Login
                    </Link>
                  </button>
                  <button className="bg-[#00b67d] text-xl py-2 px-4 rounded-full h-auto">
                    <Link
                      href="https://portal.pharmacollege.lk/register"
                      target="_blank"
                    >
                      Apply Now
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div>
        {/* Side Bar Cart */}
        {isMobileMenuOpen && (
          <MobileMenu
            isMobileMenuOpen={isMobileMenuOpen}
            setIsMobileMenuOpen={setIsMobileMenuOpen}
          />
        )}
        {/* Conditionally render the CartSideBar */}
        {isCartOpen && (
          <CartSideBar closeCart={closeCart} isCartOpen={isCartOpen} />
        )}
      </div>
    </div>
  );
}

export default NavBar;
