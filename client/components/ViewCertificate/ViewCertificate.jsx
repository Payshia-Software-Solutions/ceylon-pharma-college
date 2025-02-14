"use client";
import React, { useEffect, useState } from "react";

const ViewCertificate = () => {
  const [studentId, setStudentId] = useState("");
  const [courseCode, setCourseCode] = useState("");
  const [certificateData, setCertificateData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const studentIdParam = params.get("student_id");
    const courseCodeParam = params.get("course_code");

    setStudentId(studentIdParam);
    setCourseCode(courseCodeParam);

    if (studentIdParam && courseCodeParam) {
      const apiUrl = `http://localhost/pharma-college-project/certificate-generator/?student_id=${studentIdParam}&course_code=${courseCodeParam}`;

      console.log("Fetching API:", apiUrl); // ✅ Log the URL

      fetch(apiUrl, {
        method: "GET",
      })
        .then((response) => {
          console.log("Response Status:", response.status); // ✅ Log status
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          console.log("API Response:", data); // ✅ Log the JSON response
          setCertificateData(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Fetch Error:", err);
          setError("Failed to fetch certificate data.");
          setLoading(false);
        });
    }
  }, []);

  return (
    <div className="mt-56">
      <h2>Certificate Details</h2>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {certificateData && (
        <div>
          <p>
            <strong>Success:</strong> {certificateData.success}
          </p>
          <p>
            <strong>Certificate Path:</strong> {certificateData.ftp_path}
          </p>
          <p>
            <strong>FTP Status:</strong> {certificateData.ftp_status}
          </p>
          <p>
            <strong>Database Status:</strong> {certificateData.database_status}
          </p>
          <p>
            <strong>messeage</strong> {certificateData.certificate_image}
          </p>
          <p>
            <strong>image name</strong> {certificateData.message}
          </p>

          {/* Display the certificate image from the FTP URL */}
          {certificateData?.ftp_path && (
            <div className="mt-4">
              <img
                src="/assets/images/cover2.jpg"
                alt="Generated Certificate"
                className="border rounded shadow-lg"
                onError={(e) => console.error("Image failed to load:", e)}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ViewCertificate;
