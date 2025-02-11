"use client"; // Ensures this component runs as a client component
import React, { useState } from "react";
import { FaBars } from "react-icons/fa"; // Icon for the hamburger menu
import { Italiana, Julius_Sans_One } from "next/font/google"; // Import Google Fonts

const italiana = Italiana({
  weight: "400", // Italiana only comes with regular weight (400)
  subsets: ["latin"],
});

const juliusSansOne = Julius_Sans_One({
  weight: "400", // Julius Sans One only has a regular weight
  subsets: ["latin"],
});

function SideBar() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the sidebar visibility
  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div>
      {/* Hamburger Icon for Mobile View */}
      <div className="md:hidden p-4">
        <button
          onClick={toggleSidebar}
          className="text-2xl fixed top-24 left-4  z-20"
        >
          <FaBars />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-24 left-0 h-full bg-white  z-10 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:static md:translate-x-0 w-64 md:w-80 p-8`}
      >
        <div className="text-black">
          {/* Close Button for Mobile View */}
          <div className="md:hidden mb-4">
            <button
              onClick={toggleSidebar}
              className="text-xl text-gray-800 float-right"
            >
              &times;
            </button>
          </div>

          {/* Sidebar Content */}
          <div className="my-3 border-b-2 border-black">
            <div className={italiana.className}>
              <h2 className="text-2xl font-bold my-3">ALL COURSES</h2>
            </div>

            <ul>
              <li className="my-1">
                <span className="text-lg hover:text-gray-600">Pharmacist</span>
              </li>
              <li className="my-1">
                <span className="text-lg hover:text-gray-600">English</span>
              </li>
              <li className="my-1">
                <span className="text-lg hover:text-gray-600">
                  IT & Software
                </span>
              </li>
              <li className="my-1">
                <span className="text-lg hover:text-gray-600">
                  Programming Language
                </span>
              </li>
            </ul>
          </div>

          {/* Another Section */}
          <div className="my-6 border-b-2 border-black">
            <div className={italiana.className}>
              <h2 className="text-2xl font-bold my-3">Recommendation</h2>
            </div>

            <ul>
              <li className="my-1">
                <span className="text-lg hover:text-gray-600">Pharmacist</span>
              </li>
              <li className="my-1">
                <span className="text-lg hover:text-gray-600">English</span>
              </li>
              <li className="my-1">
                <span className="text-lg hover:text-gray-600">
                  IT & Software
                </span>
              </li>
              <li className="my-1">
                <span className="text-lg hover:text-gray-600">
                  Programming Language
                </span>
              </li>
            </ul>
          </div>

          {/* Professional Pharmacy Section */}
          <div className="my-6 border-b-2 border-black">
            <div className={italiana.className}>
              <h2 className="text-2xl font-bold my-3">Professional Pharmacy</h2>
            </div>

            <ul>
              <li className="my-1">
                <span className="text-lg hover:text-gray-600">Pharmacist</span>
              </li>
              <li className="my-1">
                <span className="text-lg hover:text-gray-600">English</span>
              </li>
              <li className="my-1">
                <span className="text-lg hover:text-gray-600">
                  IT & Software
                </span>
              </li>
              <li className="my-1">
                <span className="text-lg hover:text-gray-600">
                  Programming Language
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
