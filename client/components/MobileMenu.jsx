"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import config from "@/config"; // Import your configuration

const MobileMenu = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const [isTeasDropdownOpen, setIsTeasDropdownOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);

  const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false);
  const [isShopByTeaDropdownOpen, setIsShopByTeaDropdownOpen] = useState(false);
  const [isTeaFormatDropdownOpen, setIsTeaFormatDropdownOpen] = useState(false);
  const [isTeaEditsDropdownOpen, setIsTeaEditsDropdownOpen] = useState(false);

  const [departmentsLoading, setDepartmentsLoading] = useState(true);
  const [departmentsError, setDepartmentsError] = useState(null);
  const [departments, setDepartments] = useState([]);

  // Fetch departments
  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        setDepartmentsLoading(true);
        const res = await fetch(`${config.API_BASE_URL}/departments`);
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json();
        setDepartments(data);
      } catch (error) {
        setDepartmentsError("Failed to fetch Departments");
        console.error(error);
      } finally {
        setDepartmentsLoading(false);
      }
    };
    fetchDepartments();
  }, []);

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
          {/* Shop Dropdown (Modified) */}
          <div>
            <button
              className="flex items-center justify-between w-full py-2 text-lg font-medium transition hover:text-green-700 hover:bg-gray-100 hover:p-2"
              onClick={() => setIsShopDropdownOpen(!isShopDropdownOpen)}
            >
              Shop
              <svg
                className={`w-5 h-5 transition-transform ${
                  isShopDropdownOpen ? "rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isShopDropdownOpen && (
              <ul className="mt-2 space-y-2 pl-4">
                <li>
                  <Link
                    href="/shop"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-sm font-medium transition hover:text-green-700 hover:bg-gray-100 hover:p-2 mb-2"
                  >
                    Shop All Teas
                  </Link>
                </li>
              </ul>
            )}
          </div>

          {/* About Dropdown */}
          <div>
            <button
              className="flex items-center justify-between w-full py-2 text-lg font-medium transition hover:text-green-700 hover:bg-gray-100 hover:p-2"
              
            >
              <Link href="/about">
              About Us </Link>
           
            </button>

       
          </div>

          {/* courses Dropdown */}
          <div>
            <button
              className="flex items-center justify-between w-full py-2 text-lg font-medium transition hover:text-green-700 hover:bg-gray-100 hover:p-2"
              onClick={() => setIsTeasDropdownOpen(!isTeasDropdownOpen)}
            >
              Our Teas
              <svg
                className={`w-5 h-5 transition-transform ${
                  isTeasDropdownOpen ? "rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isTeasDropdownOpen && (
              <ul className="mt-2 space-y-2 pl-4">
                <li>
                  <Link
                    href="/our-teas/classic-teas"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-sm font-medium transition hover:text-green-700 hover:bg-gray-100 hover:p-2"
                  >
                    Classic Teas
                  </Link>
                </li>

              </ul>
            )}
          </div>

          <Link
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-2 text-lg font-medium transition hover:text-green-700 hover:bg-gray-100 hover:p-2"
          >
            Contact Us
          </Link>

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
