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

  const TeaTypes = {
    1: "Tea Bag",
    2: "Pyramid Tea Bag",
    3: "Loose Leaf Tea",
  };

  const TeaIcons = {
    1: "/assets/icons/tea-bag.png", // Icon for Tea Bag
    2: "/assets/icons/teabag-icon.svg", // Icon for Pyramid Tea Bag
    3: "/assets/icons/loose-leaf-icon.svg", // Icon for Loose Leaf Tea
  };
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

  const toggleAboutDropdown = (state) => {
    setAboutDropdownVisible(state);
  };

  // Close mobile menu when a link is clicked
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
  const [isTeaDropdownVisible, setTeaDropdownVisible] = useState(false);
  const [isAboutDropdownVisible, setAboutDropdownVisible] = useState(false);
  const [isOurTeasDropdownVisible, setOurTeasDropdownVisible] = useState(false);

  const handleAboutMouseEnter = () => {
    setTeaDropdownVisible(false); // Close the Tea dropdown
    setAboutDropdownVisible(true); // Open the About dropdown
    setOurTeasDropdownVisible(false); // Close the Tea dropdown
  };

  const handleOurTeasMouseEnter = () => {
    setAboutDropdownVisible(false); // Open the About dropdown
    setTeaDropdownVisible(false); // Close the Tea dropdown
    setOurTeasDropdownVisible(true); // Close the Tea dropdown
  };

  const handleShopMouseEnter = () => {
    setAboutDropdownVisible(false); // Open the About dropdown
    setTeaDropdownVisible(true); // Close the Tea dropdown
  };

  // Search Function

  const [products, setProducts] = useState([]);
  const [isSearchDropdownVisible, setIsSearchDropdownVisible] = useState(false);
  // Fetch products on component mount

  // console.log(products);
  const [query, setQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);

  // Detect clicks outside of the search bar

  return (
    <div>
      <header
        className={`fixed top-0 left-0 w-full bg-white  text-black z-50 transition-transform duration-300 ${
          isVisible ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        {/* Top Bar */}
        <div className="flex  justify-center">
          <div className="bg-maincolor  w-full text-sm py-2 px-4 flex justify-center  text-white">
            {/* Links section */}

            <div className="flex gap-6">
              <Link href={"#"}>Athletics</Link>
              <Link href={"#"}>Athletics</Link>
              <Link href={"#"}>Athletics</Link>
              <Link href={"#"}>Athletics</Link>
              <Link href={"#"}>Athletics</Link>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="px-4 py-0 md:py-4 max-w-7xl mx-auto">
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
              <Link
                href="/"
                className="hover:text-gray-300"
                onMouseEnter={() => setTeaDropdownVisible(false)}
              >
                Home
              </Link>

              <Link href="/shop" className="relative">
                <button className="hover:text-gray-300">Shop</button>
              </Link>

              <div className="relative">
                <button
                  onMouseEnter={() => handleAboutMouseEnter(true)}
                  className="hover:text-gray-300"
                >
                  About Us
                </button>
                {isAboutDropdownVisible && (
                  <div
                    onMouseLeave={() => setAboutDropdownVisible(false)}
                    className="fixed w-screen left-0 bg-emerald-950 text-white  shadow-md"
                    style={{ top: "100%" }}
                  >
                    <div className="shadow-lg py-4 px-6 grid grid-cols-4 gap-6 max-w-7xl mx-auto">
                      {/* Column 1 */}
                      <div>
                        <ul className="space-y-2">
                          <li>
                            <Link
                              href="/tea-jar-story"
                              className="hover:text-gray-300"
                            >
                              Tea Jar Story
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="relative">
                <button
                  onMouseEnter={() => handleOurTeasMouseEnter(true)}
                  className="hover:text-gray-300"
                >
                  Our Teas
                </button>
              </div>

              <Link
                onMouseEnter={() => setOurTeasDropdownVisible(false)}
                href="/contact"
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
                  <button className="bg-[#00b67d] text-xl py-2 px-4  rounded-full w- h-auto">
                  Request info
                  </button>
                  <button className="bg-[#00b67d] text-xl py-2 px-4 rounded-full h-auto">
                    Apply
                  </button>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </header>

      {/* No results */}
      {isSearchDropdownVisible && products.length === 0 && (
        <div className="absolute bg-white border border-gray-300 mt-2 w-full rounded-lg shadow-lg z-50 p-4 text-gray-500">
          No products found.
        </div>
      )}
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
