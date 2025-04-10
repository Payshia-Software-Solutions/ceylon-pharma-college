"use client";
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import toast styles
import config from "@/config";
import StudentCourseCard from "./StudentCourseCard";

function CertificateConfirmation({ userData, courseData }) {
  const { title, studentInfo } = userData;

  // Safe destructuring with fallback values
  const {
    finalGrade = "Not Submitted",
    gradeResult = "No Grade",
    starCount = 0,

    courseCode = "Not Available",
  } = courseData || {};

  // State to store fetched course details
  const [courseDetails, setCourseDetails] = useState(null);

  // Fetch course details by course code
  useEffect(() => {
    const fetchCourseDetails = async () => {
      if (!courseData?.courseCode) {
        console.error("Course code is missing.");
        return;
      }
      console.log("Course Code to Fetch:", courseData?.courseCode);

      try {
        const response = await fetch(
          `${config.API_BASE_URL}/course/code/${courseData?.courseCode}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch course data");
        }
        const data = await response.json();

        if (!data || !data.course_name) {
          console.error("Course data is empty or invalid:", data);
          return;
        }

        setCourseDetails(data); // Store the fetched data in state
      } catch (error) {
        console.error("Error fetching course details:", error);
      }
    };

    fetchCourseDetails();
  }, [courseData]); // Run when courseData changes

  // Handle certificate viewing
  const handleViewReport = () => {
    if (!courseData || finalGrade === "Not Submitted") {
      // Show error toast if no course data or exam not submitted
      toast.error("You have not submitted the exam!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }

    // Construct the URL dynamically
    const url = `http://localhost:3000/viewcertificate?student_id=${studentInfo.username}&course_code=${courseData.courseCode}`;
    window.open(url, "_blank"); // Open in new tab
  };

  console.log("this is course data", courseData);
  console.log("fetched course details", courseDetails);
  const studentSendInfo = {
    civil_status: studentInfo.civil_status,
    first_name: studentInfo.first_name,
    last_name: studentInfo.last_name,
    name_on_certificate: studentInfo.name_on_certificate,
    username: studentInfo.username
  }
  return (
    <div>
      <ToastContainer />
      <div className="bg-white text-maincolor rounded-lg shadow-lg p-2">
        {/* Header */}
        <div className="bg-white p-4 rounded-lg text-center">
          <div className="flex justify-center items-center">
            <img
              src="/assets/images/logo.png"
              alt="Ceylon Pharma College Logo"
              className="object-cover w-24 h-auto"
            />
          </div>
        </div>

        {/* Details Section */}
        <StudentCourseCard 
          studentInfo={studentSendInfo || "Not Available"}
          courseDetails={courseDetails || "Not Available"}
          courseCode= {courseCode}
          finalGrade={finalGrade}
          gradeResult={gradeResult} 
        />
        

        {/* Button */}
        {/* <div className="mt-6 text-center">
          <button
            onClick={handleViewReport}
            className={`px-6 py-3 rounded-lg font-medium text-lg ${
              !courseData || finalGrade === "Not Submitted"
                ? "bg-yellow-500"
                : "bg-yellow-500 hover:bg-yellow-600 text-white"
            }`}
          >
            View Certificate
          </button>
        </div> */}
      </div>
    </div>
  );
}

export default CertificateConfirmation;
