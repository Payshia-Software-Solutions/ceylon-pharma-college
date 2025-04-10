"use client";
import React, { useState, useEffect } from "react";
import NameCard from "./Common/NameCard";
import CertificateConfirmation from "./CertificateConfirmation";
import config from "@/config";

function Certificate() {
  const [userCount, setUserCount] = useState(null);
  const [courseCount, setCourseCount] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState(null);
  const [selectedUserDetails, setSelectedUserDetails] = useState(null);
  const [selectedCourseDetails, setSelectedCourseDetails] = useState(null); // New state for course selection `${API_BASE_URL}/endpoint`   /parent-main-course/get/counts


  const COURSE_URL = `${config.API_BASE_URL}/parent-main-course/get/counts`;
  const USER_URL = `${config.API_BASE_URL}/users/count`;
  const USER_DETAILS_URL = `${config.API_BASE_URL}/certificate-verification?studentNumber`;
  const COURSE_DETAILS_URL = `${config.API_BASE_URL}/course/code/`;

  // Fetch user count
  useEffect(() => {
    fetch(USER_URL)
      .then((response) => response.json())
      .then((data) => setUserCount(data.user_count || null))
      .catch((error) => console.error("Error fetching user count:", error));
  }, []);

  // Fetch course count
  useEffect(() => {
    fetch(COURSE_URL)
      .then((response) => response.json())
      .then((data) => setCourseCount(data.total_courses || null))
      .catch((error) => console.error("Error fetching course count:", error));
  }, []);

  // Handle student search
  useEffect(() => {
    if (searchQuery.trim() !== "") {
      fetch(
        `${config.API_BASE_URL}/users/search/${searchQuery}`
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
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

  // Fetch selected user details with enriched enrollments
  const handleNameCardClick = async (username) => {
    try {
      const userResponse = await fetch(`${USER_DETAILS_URL}=${username}`);
      const userData = await userResponse.json();
      console.log(userData)

      if (userData && userData.userEnrollment) {
        const courseDetailsPromises = userData.userEnrollment.map(
          (enrollment) =>
            fetch(`${COURSE_DETAILS_URL}${enrollment.course_code}`).then(
              (response) => response.json()
            )
        );

        const courses = await Promise.all(courseDetailsPromises);

        const enrichedEnrollments = userData.userEnrollment.map(
          (enrollment, index) => ({
            ...enrollment,
            course_name: courses[index]?.course_name || "N/A",
          })
        );

        setSelectedUserDetails({
          ...userData,
          userEnrollment: enrichedEnrollments,
        });
      } else {
        console.error("No user details found.");
      }
    } catch (error) {
      console.error("Error fetching user details or course details:", error);
    }
  };

  const handleCourseClick = (courseCode) => {
    console.log("Clicked course code:", courseCode);
  
    try {
      if (!selectedUserDetails || !selectedUserDetails.CourseResultInfo) {
        console.warn("Selected user details or course results not available.");
        return;
      }
  
      // Ensure studentInfo and username exist
      const username = selectedUserDetails?.studentInfo?.username;
      if (!username) {
        console.warn("Username not available.");
        return;
      }
  
      // Retrieve the course result for the given courseCode
      const courseResult = selectedUserDetails.CourseResultInfo[username]?.find(
        (result) => result.courseCode === courseCode
      );
  
      // If no course result is found, set a default "Not Submitted" message
      setSelectedCourseDetails(
        courseResult || { courseCode, status: "Not Submitted" }
      );
  
      console.log("Course result:", courseResult || "Not Submitted");
    } catch (error) {
      console.error("Error handling course click:", error);
    }
  };
  
  
  // Handle reset
  const handleReset = () => {
    setSelectedUserDetails(null);
    setSelectedCourseDetails(null);
  };

  // Close the CertificateConfirmation component
  const closeCertificateConfirmation = () => {
    setSelectedUserDetails(null);
    setSelectedCourseDetails(null); 
  };

  return (
    <div className="bg-maincolor text-white h-auto min-h-[25rem] p-4 flex flex-col items-center justify-center py-12 lg:py-20">
      <h1 className="text-xl md:text-6xl font-bold mb-8">
        Certificate Verification
      </h1>

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

        {!selectedUserDetails && !selectedCourseDetails ? (
          searchResults && searchResults.length > 0 ? (
            <div className="flex justify-center mt-4">
              <div className="grid grid-cols-1 gap-2 w-full">
                {searchResults.map((result) => (
                  <NameCard
                    key={result.id}
                    username={result.username}
                    name={`${result.fname} ${result.lname}`}
                    onClick={() => handleNameCardClick(result.username)}
                  />
                ))}
              </div>
            </div>
          ) : (
            searchResults &&
            searchResults.length === 0 && (
              <p className="text-gray-500 mt-4">
                No results found. Try a different query.
              </p>
            )
          )
        ) : (
          <div>
            <h2 className="text-2xl font-semibold text-center my-4 border-white border-b-2">Enrolled Courses</h2>
            <div className="grid grid-cols-3 gap-4 mt-2  text-md md:text-xl">
              {selectedUserDetails?.userEnrollment.map((enrollment, index) => (
                <div
                  key={index}
                  className="bg-white shadow-lg rounded-lg p-4 hover:bg-blue-100 transition duration-300 cursor-pointer"
                  onClick={() => handleCourseClick(enrollment.course_code)} // Handle course click
                >
                  <p className="text-blue-600 font-bold text-center">
                    {enrollment.course_name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Show Certificate Confirmation when course is selected */}
        {selectedCourseDetails && (
          <CertificateConfirmation
            userData={selectedUserDetails}
            courseData={selectedCourseDetails}
  
          />
        )}
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        <div className="flex flex-col items-center bg-white bg-opacity-40 text-white p-6 rounded-lg shadow-lg">
          <h2 className="text-4xl font-bold">
            {userCount ? `${userCount}+` : "Loading..."}
          </h2>
          <p className="text-lg">Over {userCount || "Loading..."} students</p>
        </div>

        <div className="flex flex-col items-center bg-white bg-opacity-40 text-white p-6 rounded-lg shadow-lg">
          <h2 className="text-4xl font-bold">
            {courseCount ? `${courseCount}+` : "Loading..."}
          </h2>
          <p className="text-lg uppercase font-semibold">
            Over {courseCount || "Loading..."} Courses
          </p>
        </div>
      </div>
    </div>
  );
}

export default Certificate;
