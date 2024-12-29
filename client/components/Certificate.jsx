"use client";
import React, { useState, useEffect } from "react";
import NameCard from "./Common/NameCard";

function Certificate() {
  const [userCount, setUserCount] = useState(null);
  const [courseCount, setCourseCount] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState(null);

  const COURSE_URL = "http://localhost/pharma-college-project/server/parent-main-course/get/counts";
  const User_URL = "http://localhost/pharma-college-project/server/users/count";

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

  // student search (No debounce, runs immediately on each keystroke)
  useEffect(() => {
    if (searchQuery.trim() !== "") {
      fetch(`http://localhost/pharma-college-project/server/users/search/${searchQuery}`)
        .then((response) => response.json())
        .then((data) => {
          console.log("API Response:", data); // Log API response
          if (!data || data.error) {
            setSearchResults([]); // Handle no results or errors
          } else {
            setSearchResults(data); // Set the full array of results
          }
        })
        .catch((error) => {
          console.error("Error searching user:", error);
          setSearchResults([]); // Handle error
        });
    } else {
      setSearchResults(null); // Reset search results if input is empty
    }
  }, [searchQuery]); // Depend on the searchQuery directly (no debouncing)

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

        {searchResults && searchResults.length > 0 && (
        <div className="flex justify-center mt-4">
          <div className="grid grid-cols-1 gap-2 w-full">
            {searchResults.map((result, index) => (
              <NameCard
                key={index}
                usename={result.username} // Or use 'username' if it matches
                name={`${result.fname} ${result.lname}`} // Combine first and last name
              />
            ))}
          </div>
        </div>
      )}

      {searchResults && searchResults.length === 0 && (
        <p className="text-gray-500">
          No results found. Try a different query.
        </p>
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
