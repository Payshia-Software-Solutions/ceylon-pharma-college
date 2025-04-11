"use client";
import React, { useState, useEffect } from "react";
import NameCard from "./Common/NameCard";
import CertificateConfirmation from "./CertificateConfirmation";
import config from "@/config";
import debounce from "lodash.debounce";

function Certificate() {
  const [userCount, setUserCount] = useState(null);
  const [courseCount, setCourseCount] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState(null);
  const [selectedUserDetails, setSelectedUserDetails] = useState(null);
  const [selectedCourseDetails, setSelectedCourseDetails] = useState(null);
  const [loading, setLoading] = useState(false); // Track loading state for search results
  const [showCourses, setShowCourses] = useState(false); // State to toggle between showing courses and search results
  const [showCourseResult, setShowCourseResult] = useState(false); // State to toggle between showing course list and course result

  const COURSE_URL = `${config.API_BASE_URL}/parent-main-course/get/counts`;
  const USER_URL = `${config.API_BASE_URL}/users/count`;
  const USER_DETAILS_URL = `${config.API_BASE_URL}/certificate-verification?studentNumber`;
  const COURSE_DETAILS_URL = `${config.API_BASE_URL}/course/code/`;

  // Fetch user count
  useEffect(() => {
    const fetchUserCount = async () => {
      try {
        const response = await fetch(USER_URL);
        const data = await response.json();
        setUserCount(data.user_count || 0);
      } catch (error) {
        console.error("Error fetching user count:", error);
      }
    };
    fetchUserCount();
  }, []);

  // Fetch course count
  useEffect(() => {
    const fetchCourseCount = async () => {
      try {
        const response = await fetch(COURSE_URL);
        const data = await response.json();
        setCourseCount(data.total_courses || 0);
      } catch (error) {
        console.error("Error fetching course count:", error);
      }
    };
    fetchCourseCount();
  }, []);

  // Debounced search query effect
  const fetchSearchResults = async (query) => {
    if (query.trim() === "") {
      setSearchResults(null);
      setLoading(false);
      return;
    }

    setLoading(true); // Set loading state to true when starting a search

    try {
      const response = await fetch(
        `${config.API_BASE_URL}/users/search/${query}`
      );
      const data = await response.json();
      setSearchResults(data.error ? [] : data);
    } catch (error) {
      console.error("Error searching user:", error);
      setSearchResults([]);
    } finally {
      setLoading(false); // Reset loading state once search is done
    }
  };

  const debouncedSearch = debounce((query) => fetchSearchResults(query), 500);

  useEffect(() => {
    // Reset the previous data whenever searchQuery changes
    setSearchResults(null);
    setSelectedUserDetails(null);
    setSelectedCourseDetails(null);
    setShowCourses(false); // Hide courses when a new search query is made
    setShowCourseResult(false); // Hide course result when a new search query is made

    // Execute the debounced search
    debouncedSearch(searchQuery);
    return () => debouncedSearch.cancel(); // Cleanup debounced search on unmount
  }, [searchQuery]);

  // Fetch user and course details
  const handleNameCardClick = async (username) => {
    try {
      const userResponse = await fetch(`${USER_DETAILS_URL}=${username}`);
      const userData = await userResponse.json();

      if (userData?.userEnrollment) {
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
        setShowCourses(true); // Show the courses after fetching the details
      }
    } catch (error) {
      console.error("Error fetching user details or course details:", error);
    }
  };

  const handleCourseClick = (courseCode) => {
    if (!selectedUserDetails?.CourseResultInfo) {
      console.warn("Selected user details or course results not available.");
      return;
    }

    const username = selectedUserDetails?.studentInfo?.username;
    if (!username) {
      console.warn("Username not available.");
      return;
    }

    const courseResult = selectedUserDetails.CourseResultInfo[username]?.find(
      (result) => result.courseCode === courseCode
    );

    setSelectedCourseDetails(
      courseResult || { courseCode, status: "Not Submitted" }
    );
    setShowCourseResult(true); // Show course result
    setShowCourses(false); // Hide courses
  };

  const handleBackToCourses = () => {
    setShowCourseResult(false); // Hide course result
    setShowCourses(true); // Show courses again
    setSelectedCourseDetails(null); // Reset selected course details
  };

  const handleReset = () => {
    setSelectedUserDetails(null);
    setSelectedCourseDetails(null);
  };

  const closeCertificateConfirmation = () => {
    setSelectedUserDetails(null);
    setSelectedCourseDetails(null);
  };

  return (
    <div className="bg-maincolor text-white h-auto min-h-[25rem] p-4 flex flex-col items-center justify-center py-12 lg:py-20">
      <div className="flex justify-center items-center">
        <img
          src="/assets/logo/logo-cpc.png"
          alt="Ceylon Pharma College Logo"
          className="object-cover w-32 h-auto"
        />
      </div>
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold">
          Certificate Verification
        </h1>
        <p className="opacity-90 text-lg">
          Secure, Fast, and Reliable: Verify your certificates with ease through
          our online platform.
        </p>
      </div>

      <div className="bg-white my-6 px-2 py-2 w-full max-w-xl rounded-lg bg-opacity-40">
        <div className="relative w-full max-w-xl">
          <input
            type="text"
            id="search_input"
            autoComplete="off"
            placeholder="Enter Index Number or Your Name? Eg: PA07454 or A. K. D. Jayesinghe"
            className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-white text-gray-700 input-typing"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Show loading spinner if fetching search results */}
        {loading && (
          <div className="flex justify-center mt-4">
            <div className="spinner"></div>
          </div>
        )}

        {/* Toggle between courses and search results */}
        {!selectedUserDetails && !selectedCourseDetails ? (
          searchResults && searchResults.length > 0 ? (
            <div className="flex justify-center mt-4">
              <div className="grid grid-cols-1 gap-2 w-full fade-in">
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
          // Show Enrolled Courses first
          showCourses &&
          selectedUserDetails?.userEnrollment && (
            <div className="fade-in">
              <h2 className="text-2xl font-semibold text-center my-4 border-white border-b-2">
                Enrolled Courses
              </h2>
              <div className="grid grid-cols-3 gap-4 mt-2 text-md md:text-xl">
                {selectedUserDetails?.userEnrollment?.map(
                  (enrollment, index) => (
                    <div
                      key={index}
                      className="bg-white shadow-lg rounded-lg p-4 hover:bg-blue-100 transition duration-300 cursor-pointer"
                      onClick={() => handleCourseClick(enrollment.course_code)}
                    >
                      <p className="text-blue-600 font-bold text-center">
                        {enrollment.course_name}
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>
          )
        )}

        {/* Show "Back" button when showing course result */}
        {showCourseResult && (
          <div className="flex justify-end mb-2">
            <button
              className="bg-green-800 text-white p-2 rounded-lg mt-4 flex items-center"
              onClick={handleBackToCourses}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M11 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L12 5.414V15a1 1 0 11-2 0V5.414L6.707 7.707A1 1 0 015.293 6.293l3-3A1 1 0 0111 3z"
                  clipRule="evenodd"
                />
              </svg>
              Back to Courses
            </button>
          </div>
        )}

        {/* Show Certificate Confirmation when course is selected */}
        {selectedCourseDetails && (
          <CertificateConfirmation
            userData={selectedUserDetails}
            courseData={selectedCourseDetails}
            closeCertificateConfirmation={closeCertificateConfirmation}
          />
        )}
      </div>

      <div className="flex justify-center gap-2 px-2 lg:w-1/2">
        <p className="text-center">
          The Certificate Verification section enables users to confirm the
          authenticity of accreditation certificates issued by Ceylon Pharma
          College. By entering the unique certificate number or scanning the QR
          code, users can instantly access verified information such as the
          student’s name, course title, affiliated institute, date of issue, and
          current accreditation status. This system helps maintain the integrity
          of our certifications and builds trust among students, institutes, and
          external stakeholders.
        </p>
      </div>
    </div>
  );
}

export default Certificate;
