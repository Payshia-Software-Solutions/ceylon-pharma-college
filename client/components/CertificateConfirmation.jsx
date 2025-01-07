import React from "react";

// Function to generate grade and star rating
function generateGradeAndStarRating(finalPercentage) {
  let grade = "Not Graded";
  let gradeResult = "Not Graded";
  let starCount = 0;

  if (finalPercentage === "Not Graded") {
    grade = "Not Graded";
  } else if (finalPercentage >= 90) {
    grade = "A+";
  } else if (finalPercentage >= 80) {
    grade = "A";
  } else if (finalPercentage >= 75) {
    grade = "A-";
  } else if (finalPercentage >= 70) {
    grade = "B+";
  } else if (finalPercentage >= 65) {
    grade = "B";
  } else if (finalPercentage >= 60) {
    grade = "B-";
  } else if (finalPercentage >= 55) {
    grade = "C+";
  } else if (finalPercentage >= 45) {
    grade = "C";
  } else if (finalPercentage >= 40) {
    grade = "C-";
  } else if (finalPercentage >= 35) {
    grade = "D+";
  } else if (finalPercentage >= 30) {
    grade = "D";
  } else if (finalPercentage >= 0) {
    grade = "E";
  }

  if (finalPercentage === "Not Graded") {
    gradeResult = "Not Graded";
    starCount = 0;
  } else if (finalPercentage >= 80) {
    gradeResult = "Excellent";
    starCount = 5;
  } else if (finalPercentage >= 75) {
    gradeResult = "Good";
    starCount = 4;
  } else if (finalPercentage >= 60) {
    gradeResult = "Pretty Good";
    starCount = 3;
  } else if (finalPercentage >= 40) {
    gradeResult = "Poor";
    starCount = 2;
  } else {
    gradeResult = "Weak";
    starCount = 1;
  }

  return { grade, gradeResult, starCount };
}

function CertificateConfirmation({ userData, onClose, courseData }) {
  const { title, studentInfo, CourseResultInfo } = userData;

  // Ensure CourseResultInfo is an array before calling find
  const courseResults = Array.isArray(CourseResultInfo) ? CourseResultInfo : [];

  // Find course result related to the provided course code
  const courseResult = courseResults.find(
    (result) => result.course_code === courseData.course_code
  );

  // Extract result for the specific course or set default
  const courseGrade = courseResult?.result || "Not Submitted";

  // Generate grade details for the course result
  const gradeMessage = generateGradeAndStarRating(
    courseGrade !== "Not Submitted" ? parseFloat(courseGrade) : "Not Graded"
  );

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
          {courseData.course_name || "Not Available"}
        </div>

        {/* Course Code */}
        <div className="mb-2 border-b border-gray-300 pb-2">
          <span className="font-semibold">Course Code:</span>{" "}
          {courseData.course_code || "Not Available"}
        </div>

        {/* Course Result */}
        <div className="mb-2 border-b border-gray-300 pb-2">
          <span className="font-semibold">Course Result:</span>{" "}
          {courseGrade}
        </div>

        {/* Rating */}
        <div className="mt-4">
          <span className="font-semibold">Rating:</span>{" "}
          <span className="inline-block bg-green-200 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
            {gradeMessage.gradeResult}
          </span>
          <div className="flex items-center mt-2">

            {[...Array(5)].map((_, index) => (
              <span
                key={index}
                className={`text-xl ${
                  index < gradeMessage.starCount
                    ? "text-yellow-400"
                    : "text-gray-300"
                }`}
              >
                ★
              </span>
            ))}
          </div>
        </div>
      </div>


      <div className="mt-6 text-center">
        <button
          onClick={onClose}
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-medium text-lg"
        >
          View Full Report
        </button>
      </div>
    </div>
  );
}

export default CertificateConfirmation;
