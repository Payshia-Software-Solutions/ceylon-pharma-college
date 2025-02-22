"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import config from "@/config"; // Import your configuration

const MobileMenu = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const [isTeasDropdownOpen, setIsTeasDropdownOpen] = useState(false);


  const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false);





  return (
    <div
      className={`fixed inset-0 z-50  backdrop-blur-sm transition-opacity duration-300 ${
        isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={() => setIsMobileMenuOpen(false)}
    >
      <div
        className={`fixed top-0 overflow-auto right-0 h-screen w-3/4 max-w-sm bg-white text-black shadow-lg transition-transform duration-300 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-100"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <span className="sr-only">Close menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Logo */}
        <div className="flex items-center justify-center py-6">
          <Image
              src="/assets/images/logo.png"
            alt="Logo"
            width={250}
            height={250}
            className="h-auto w-1/2"
          />
        </div>

        {/* Navigation */}
        <nav className="px-4 space-y-4 ">
          {/* Home */}
          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-2 text-lg font-medium transition hover:text-green-400"
          >
            Home
          </Link>

          {/* Other Links */}
       
          

          {/* About Dropdown */}
          <div>
            <button
              className="flex items-center justify-between w-full py-2 text-lg font-medium transition hover:text-green-700 hover:bg-gray-100 hover:p-2"
              
            >
            <Link
                 href ="/course"
                 className="hover:text-gray-300"
                 >
                  Courses
                </Link>
           
            </button>

       
          </div>

          {/* courses Dropdown */}
          <div>
            <button
              className="flex items-center justify-between w-full py-2 text-lg font-medium transition hover:text-green-700 hover:bg-gray-100 hover:p-2"
      
            >
              <Link
              
                href="/about"
                className="hover:text-gray-300"
              >
                About Us
              </Link>
          
            </button>
          
          </div>


          <div>
            <button
              className="flex items-center justify-between w-full py-2 text-lg font-medium transition hover:text-green-700 hover:bg-gray-100 hover:p-2"
      
            >
              <Link
               
                href="/contactus"
                className="hover:text-gray-300"
              >
                Contact Us
              </Link>
          
            </button>
          
          </div>

         
          <div className="md:flex justify-between items-center mt-5">
            <div className="text-white text-center flex justify-around gap-2">
              <button className="bg-[#00b67d] text-lg py-2 px-4  rounded-full  h-auto">
                Reqvest info
              </button>
              <button className="bg-[#00b67d] text-lg py-2 px-4 rounded-full h-auto">
                Apply
              </button>
            </div>
          </div>
        </nav>

        {/* Footer Actions */}
        {/* <div className="mt-6 px-4">
          <Link
            href="/login"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block w-full py-3 text-center text-sm font-medium text-white bg-teal-600 rounded-md shadow transition hover:bg-teal-500"
          >
            Login
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default MobileMenu;
