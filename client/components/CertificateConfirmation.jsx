import React, { useEffect, useState } from "react";

function CertificateConfirmation({ userData,  courseData }) {
  const { title, studentInfo, userGradeDetails } = userData;

  // Safe destructuring with fallback values
  const { finalGrade = "Not Submitted", gradeResult = "No Grade", starCount = 0 } = courseData || {};
  
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
        const response = await fetch(`http://localhost/pharma-college-project/server/course/code/${courseData?.courseCode}`);
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


  const handleViewReport = () => {
    // Construct the URL dynamically using the student_id and course_code
    const url = `http://localhost/textwritter/client/index.php/generate-certificate.php?student_id=${studentInfo.username}&course_code=${courseData.courseCode}`;
    
    // Redirect the user to the URL
    window.open(url, "_blank"); // Open the certificate generation URL in a new tab
  };
  
  console.log("this is course data", courseData);
  console.log("fetched course details", courseDetails);

  return (
    <div className="max-w-xl mx-auto bg-white my-6 p-6 text-maincolor rounded-lg shadow-lg">
      {/* Header */}
      <div className="bg-white p-4 rounded-lg text-center">
        <div className="flex justify-center items-center mb-4">
          <img
            src="/assets/images/logo.png"
            alt="Ceylon Pharma College Logo"
            className="object-cover w-24 h-auto"
          />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
      </div>

      {/* Details Section */}
      <div className="bg-white mt-6 p-6 rounded-lg">
        {/* Student Name */}
        <div className="flex gap-2 mb-2 border-b border-gray-300 pb-2">
          <span className="font-semibold">Student Name:</span>
          <p>{`${studentInfo.civil_status} ${studentInfo.first_name} ${studentInfo.last_name}`}</p>
        </div>

        {/* Name on Certificate */}
        <div className="mb-2 border-b border-gray-300 pb-2">
          <span className="font-semibold">Name on Certificate:</span>{" "}
          {studentInfo.name_on_certificate || "Not Available"}
        </div>

        {/* Index No */}
        <div className="mb-2 border-b border-gray-300 pb-2">
          <span className="font-semibold">Index No:</span>{" "}
          {studentInfo.username}
        </div>

        {/* Course Name */}
        <div className="mb-2 border-b border-gray-300 pb-2">
          <span className="font-semibold">Course Name:</span>{" "}
          {courseDetails?.course_name || "Loading..."} {/* Display loading state */}
        </div>

        {/* Course Code */}
        <div className="mb-2 border-b border-gray-300 pb-2">
          <span className="font-semibold">Course Code:</span>{" "}
          {courseData?.courseCode || "Not Available"}
        </div>

        {/* Course Result */}
        <div className="mb-2 border-b border-gray-300 pb-2">
          <span className="font-semibold">Course Result:</span>{" "}
          {finalGrade}
        </div>

        {/* Rating */}
        <div className="mt-4">
          <span className="font-semibold">Rating:</span>{" "}
          <span className="inline-block bg-green-200 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
            {gradeResult}
          </span>
          <div className="flex items-center mt-2">
            {[...Array(5)].map((_, index) => (
              <span
                key={index}
                className={`text-xl ${
                  index < starCount ? "text-yellow-400" : "text-gray-300"
                }`}
              >
                ★
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Button */}
      <div className="mt-6 text-center">
        <button
           onClick={handleViewReport}
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-medium text-lg"
        >
          View Full Report
        </button>
      </div>
    </div>
  );
}

export default CertificateConfirmation;
