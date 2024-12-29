"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

function Page() {
  const searchParams = useSearchParams();
  const userId = searchParams.get("user_id"); 
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading process
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Set loading to false after a delay
    }, 1500); // Adjust time as needed (1500ms = 1.5 seconds)

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white">

        <div className="animate-spin rounded-full h-24 w-24 border-t-4 border-b-4 border-gray-800 mb-4"></div>

        <p className="text-xl text-gray-800 font-medium">Please wait...</p>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen relative flex flex-col justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/applynow/doctors.webp')" }}
    >
      {/* Colored overlay */}
      <div className="absolute inset-0 bg-white bg-opacity-40"></div>
      
      {/* Content */}
      <div className="relative bg-maincolor bg-opacity-70 text-white rounded-lg shadow-lg p-8 max-w-lg text-center">
        <h1 className="text-4xl font-bold mb-4"> Congratulations! </h1>
        <p className="text-lg mb-6">
          Your registration was successful. Welcome to the family!
        </p>
        <div className="bg-gray-100 p-4 rounded-md shadow-sm">
          <p className="text-xl">
            <span className="font-bold text-black">Your Reference Number:</span>{" "}
            <span className="text-black">{userId || "Not Found"}</span>
          </p>
        </div>
        <p className="text-sm text-white mt-4">
          Please keep this ID safe for future reference.
        </p>
        <button className="mt-6 bg-white font-semibold  text-black py-2 px-4 rounded-md transition duration-200">
          <Link href="../">Back To Home </Link>
        </button>
      </div>
    </div>
  );
}

export default Page;
