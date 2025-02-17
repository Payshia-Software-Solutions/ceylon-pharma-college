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

      console.log("Sending API Request:", apiUrl);

      fetch(apiUrl, {
        method: "POST",  // ✅ Use POST instead of GET
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          student_id: studentIdParam,
          course_code: courseCodeParam,
        }),
      })
        .then((response) => {
          console.log("Response Status:", response.status);
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          console.log("API Response:", data);
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
          <p><strong>Success:</strong> {certificateData.success}</p>
          <p><strong>Certificate Path:</strong> {certificateData.ftp_path}</p>
          <p><strong>FTP Status:</strong> {certificateData.ftp_status}</p>
          <p><strong>Database Status:</strong> {certificateData.database_status}</p>
          <p><strong>Message:</strong> {certificateData.certificate_image}</p>
          <p><strong>Image Name:</strong> {certificateData.certificate_image_name}</p>

          {/* Display the certificate image */}
          {certificateData?.certificate_image_name && (
            <div className="mt-4">
              <img
                src={`https://content-provider.pharmacollege.lk/content-provider/certificates/e-certificate/${studentId}/${certificateData.certificate_image_name}`}
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
