"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PersonInfoCard from "./PersonInfoCard";
import AboutCourseCard from "./AboutCourseCard";
import Link from "next/link";

const ViewCertificate = () => {
  const [studentId, setStudentId] = useState("");
  const [courseCode, setCourseCode] = useState("");
  const [certificateData, setCertificateData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [studentName, setStudentName] = useState(""); // ✅ Store student name
  const [courseDetails, setCourseDetails] = useState(null);



  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const studentIdParam = params.get("student_id");
    const courseCodeParam = params.get("course_code");

    setStudentId(studentIdParam);
    setCourseCode(courseCodeParam);
    fetchStudentName(studentIdParam);
    fetchCourseData(courseCodeParam);


    if (studentIdParam && courseCodeParam) {
      const apiUrl = `http://localhost/pharma-college-project/certificate-generator/?student_id=${studentIdParam}&course_code=${courseCodeParam}`;

      console.log("Sending API Request:", apiUrl);

      fetch(apiUrl, {
        method: "POST",
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

          // ✅ Show Toastify with certificateData.message
          if (data.success) {
            toast.success(`🎉 ${data.message}`, {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
            });
          } else {
            toast.error(` ${data.message}`, {
              position: "top-right",
              autoClose: 3000,
            });
          }
        })
        .catch((err) => {
          console.error("Fetch Error:", err);
          setError("Failed to fetch certificate data.");
          setLoading(false);

          toast.error("🚨 Failed to load certificate!", {
            position: "top-right",
            autoClose: 3000,
          });
        });
    }
  }, []);


  // Fetch Student Name
  const fetchStudentName = (studentId) => {
    const studentApiUrl = `http://localhost/pharma-college-project/server/certificate-verification?studentNumber=${studentId}`;

    fetch(studentApiUrl)
      .then((response) => {
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        return response.json();
      })
      .then((data) => {
        if (data.studentInfo?.name_on_certificate) {
          setStudentName(data.studentInfo.name_on_certificate);
        }
      })
      .catch((err) => {
        console.error("Failed to fetch student name:", err);
      });
  };

  // fetch course details 
  const fetchCourseData = (courseCode) => {
    if (!courseCode) return;

    const courseApiUrl = `http://localhost/pharma-college-project/server/parent-main-course/code/${courseCode}`;

    fetch(courseApiUrl)
      .then((response) => {
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        return response.json();
      })
      .then((data) => {
        if (data) {
          console.log("Course Data:", data);
          setCourseDetails(data);
        }
      })
      .catch((err) => {
        console.error("Failed to fetch course data:", err);
      });
  };




  return (
    <div className="mt-56">
      <ToastContainer />

      {loading && (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
          <motion.div
            className="w-28 h-28 border-[10px] border-dotted border-maincolor rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          <motion.p
            className="mt-4 text-lg font-semibold text-gray-600"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            Please wait...
          </motion.p>
        </div>
      )}

      {error && <p className="text-red-500">{error}</p>}

      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center lg:flex-row lg:justify-center">
          <div className="flex justify-center lg:order-2">
            {certificateData && (
              <div className="max-w-[40rem]">
                {certificateData?.certificate_image_name && (
                  <div className="mt-4">
                    <img
                      src={`https://content-provider.pharmacollege.lk/content-provider/certificates/e-certificate/${studentId}/${certificateData.certificate_image_name}`}
                      alt="Generated Certificate"
                      className="border rounded shadow-lg w-full"
                      onError={(e) => console.error("Image failed to load:", e)}
                    />
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="mx-4 md:mx-8 py-4 px-4 md:px-8 lg:order-1">
            <h2 className="text-gray-500 text-lg md:text-xl">
              Course Certificate
            </h2>
            <h1 className="text-2xl md:text-3xl font-bold">
              Certificate Course in Pharmacy Practice
            </h1>

            {/*persone info card */}

            <PersonInfoCard name={studentName || "Loading..."} full_name={studentName || "Loading..."} />
            <div className="flex flex-col md:flex-row gap-4 justify-between">
              <div>
                <h2 className="text-xl md:text-2xl font-bold mb-2">
                  Certificate Course in Pharmacy Practice
                </h2>
                <h1 className="text-lg md:text-xl font-semibold">
                  Ceylon Pharma College
                </h1>
                <div className="flex gap-2 mt-2 text-sm md:text-base">
                  <span>45 Reviews</span>
                  <p className="mx-2">2154 Students Enrolled</p>
                </div>
              </div>
              <div>
               <Link href= {`/course/${courseDetails?.slug}` }   > <button className="mt-2 px-4 py-2 md:px-6 md:py-2 bg-orange-300 text-white">
                  View Course
                </button></Link>
              </div>
            </div>
          </div>
        </div>

        {/**about course card  Certificate Course in Pharmacy Practice */}

        <AboutCourseCard
          coursename={courseDetails?.course_name || "Certificate Course in Pharmacy Practice"}
          description={courseDetails?.course_description || "Course description is loading..."}
        />
      </div>
    </div>
  );
};

export default ViewCertificate;
