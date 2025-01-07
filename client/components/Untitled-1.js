"use client";
import React, { useState, useEffect } from "react";
import NameCard from "./Common/NameCard";

function Certificate() {
  const [userCount, setUserCount] = useState(null);
  const [courseCount, setCourseCount] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState(null);
  const [selectedUserDetails, setSelectedUserDetails] = useState(null); // State to store selected user details


  const COURSE_URL = "http://localhost/pharma-college-project/server/parent-main-course/get/counts";
  const User_URL = "http://localhost/pharma-college-project/server/users/count";
  const User_Details_URL = "http://localhost/pharma-college-project/server/student-courses"; // Endpoint for user details

  // GET USER COUNT
  useEffect(() => {
    fetch(User_URL)
      .then((response) => response.json())
      .then((data) => setUserCount(data.user_count || null))
      .catch((error) => console.error("Error fetching user count:", error));
  }, []);

  // GET COURSE COUNT
  useEffect(() => {
    fetch(COURSE_URL)
      .then((response) => response.json())
      .then((data) => setCourseCount(data.total_courses || null))
      .catch((error) => console.error("Error fetching course count:", error));
  }, []);

  // Student search
  useEffect(() => {
    if (searchQuery.trim() !== "") {
      fetch(`http://localhost/pharma-college-project/server/users/search/${searchQuery}`)
        .then((response) => response.json())
        .then((data) => {
          console.log("api response",data)
          if (!data || data.error) {
            setSearchResults([]);
          } else {
            setSearchResults(data);
          }
        })
        .catch((error) => {
          console.error("Error searching user:", error);
          setSearchResults([]);
        });
    } else {
      setSearchResults(null);
    }
  }, [searchQuery]);

  // Handle name card click
  const handleNameCardClick = (userId) => {
    const selectedUser = userId;  // Assign the userId to a variable
    console.log("Selected User ID:", selectedUser); // Log the assigned userId variable
    fetch(`${User_Details_URL}/${userId}`) // Fetch details for the clicked user
      .then((response) => response.json())
      .then((data) => {
        if (data) {
     
          
          setSelectedUserDetails(data);
          console.log("student course data",data) // Set the user details
        } else {
          console.error("No user details found");
        }
      })
      .catch((error) => console.error("Error fetching user details:", error));
  };

  // Handle resetting the view
  const handleReset = () => {
    setSelectedUserDetails(null); // Reset the selected user details
  };

  return (
    <div className="bg-maincolor text-white h-auto min-h-[25rem] p-4 flex flex-col items-center justify-center">
      <h1 className="text-xl md:text-6xl font-bold mb-8">Certificate Verification</h1>

      <div className="bg-white my-6 px-2 py-2 w-full max-w-xl rounded-lg bg-opacity-40">
        <div className="relative w-full max-w-xl">
          <input
            type="text"
            id="search_input"
            placeholder="Enter Index Number or Your Name? Eg: PA07454 or A. K. D. Jayesinghe"
            className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-white text-gray-700"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {!selectedUserDetails ? (
          searchResults && searchResults.length > 0 ? (
            <div className="flex justify-center mt-4">
              <div className="grid grid-cols-1 gap-2 w-full">
                {searchResults.map((result) => (
                  <NameCard
                    key={result.id}
                    usename={result.username}
                    name={`${result.fname} ${result.lname}`}
                    onClick={() => handleNameCardClick(result.userid)}
                  />
                ))}
              </div>
            </div>
          ) : (
            searchResults && searchResults.length === 0 && (
              <p className="text-gray-500 mt-4">No results found. Try a different query.</p>
            )
          )
        ) : (
          <div className="text-center mt-4">
            <p className="text-xl font-bold text-gray-700 bg-white py-4 px-6 rounded-lg">
              User Details:
            </p>
            <div className="bg-white text-gray-800 py-4 px-6 rounded-lg shadow-lg">
              <p><strong>Userid:</strong> {selectedUserDetails.userid}</p>
              <p><strong>Full Name:</strong> {selectedUserDetails.fname} {selectedUserDetails.lname}</p>
              <p><strong>Email:</strong> {selectedUserDetails.email}</p>
              <p><strong>Status:</strong> {selectedUserDetails.status}</p>
            </div>
            <button
              onClick={handleReset}
              className="mt-4 bg-maincolor hover:bg-opacity-80 text-white px-4 py-2 rounded-lg"
            >
              Back to Results
            </button>
          </div>
        )}
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        <div className="flex flex-col items-center bg-white bg-opacity-40 text-white p-6 rounded-lg shadow-lg">
          <h2 className="text-4xl font-bold">{userCount ? `${userCount}+` : "Loading..."}</h2>
          <p className="text-lg">Over <span>{userCount || "Loading..."}</span> students</p>
        </div>

        <div className="flex flex-col items-center bg-white bg-opacity-40 text-white p-6 rounded-lg shadow-lg">
          <h2 className="text-4xl font-bold">{courseCount ? `${courseCount}+` : "Loading..."}</h2>
          <p className="text-lg uppercase font-semibold">Over <span>{courseCount || "Loading..."}</span> Courses</p>
        </div>

        <div className="flex flex-col items-center bg-white bg-opacity-40 text-white p-6 rounded-lg shadow-lg">
          <h2 className="text-4xl font-bold">20K</h2>
          <p className="text-lg">Learn Anything Online</p>
        </div>
      </div>
    </div>
  );
}

export default Certificate;
