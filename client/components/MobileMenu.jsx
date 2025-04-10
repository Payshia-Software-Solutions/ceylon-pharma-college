"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const MobileMenu = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <div
      className={`fixed inset-0 z-50 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
        isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={() => setIsMobileMenuOpen(false)}
    >
      <div
        className={`fixed top-0 right-0 h-screen w-4/5 max-w-sm bg-white text-gray-800 shadow-lg transition-transform duration-300 ease-in-out overflow-y-auto ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Logo and Close Button */}
        <div className="flex items-center justify-between p-5 border-b border-gray-100">
          <Link href="./" className="block w-1/2">
            <Image
              src="/assets/images/logo.png"
              alt="Logo"
              width={250}
              height={250}
              className="h-auto w-full"
            />
          </Link>

          <button
            className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span className="sr-only">Close menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Navigation */}
        <nav className="p-5 space-y-1">
          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center py-3 px-4 rounded-lg font-medium transition hover:bg-gray-50 hover:text-green-600"
          >
            <span>Home</span>
          </Link>

          <Link
            href="/course"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center py-3 px-4 rounded-lg font-medium transition hover:bg-gray-50 hover:text-green-600"
          >
            <span>Courses</span>
          </Link>

          <Link
            href="/about"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center py-3 px-4 rounded-lg font-medium transition hover:bg-gray-50 hover:text-green-600"
          >
            <span>About Us</span>
          </Link>

          <Link
            href="/contactus"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center py-3 px-4 rounded-lg font-medium transition hover:bg-gray-50 hover:text-green-600"
          >
            <span>Contact Us</span>
          </Link>
        </nav>

        {/* Action Buttons */}
        <div className="px-5 py-6 mt-2 border-t border-gray-100">
          <div className="flex flex-col space-y-3">
            <Link
              href="https://lms.pharmacollege.lk/"
              target="_blank"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex justify-center py-3 px-6 rounded-full bg-green-600 text-white font-medium hover:bg-green-700 transition shadow-sm"
            >
              Request Info
            </Link>

            <Link
              href="https://portal.pharmacollege.lk/register"
              target="_blank"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex justify-center py-3 px-6 rounded-full border-2 border-green-600 text-green-600 font-medium hover:bg-green-50 transition"
            >
              Apply Now
            </Link>
          </div>
        </div>

        {/* Social Media Links (Optional) */}
        <div className="px-5 py-4 mt-auto">
          <div className="flex justify-center space-x-4">
            {/* Social media icons could go here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
