"use client"
import React, { useState, useEffect } from 'react';

function Counter() {
  const [userCount, setUserCount] = useState(null); // State to store user count
  const [courseCount,setcourseCount] = useState(null);



  const COURSE_URL = "http://localhost/pharma-college-project/server/parent-main-course/get/counts";

  useEffect(() => {
    // Fetch user count from the API
    fetch('http://localhost/pharma-college-project/server/users/count')
      .then(response => response.json())
      .then(data => {
        if (data.user_count) {
          setUserCount(data.user_count); // Set the user count from the response
        }
      })
      .catch(error => console.error('Error fetching user count:', error));
  }, []); // Empty dependency array ensures this runs only once on component mount


  useEffect(() => {
    // Fetch user count from the API
    fetch(COURSE_URL)
      .then(response => response.json())
      .then(data => {
        if (data.total_courses) {
          setcourseCount(data.total_courses); // Set the user count from the response
        }
      })
      .catch(error => console.error('Error fetching user count:', error));
  }, []); // Empty dependency array ensures this runs only once on component mount


  return (
    <div>
      <div className="w-full flex justify-center px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 justify-center gap-4 md:gap-[150px]">
          {/* User Count */}
          <div>
            <h2 className="text-4xl font-bold mt-4">
              {userCount ? `${userCount}+` : 'Loading...'}
            </h2>
            <p className="text-lg uppercase font-semibold">
              Over <span>{userCount ? userCount : 'Loading...'}</span> students
            </p>
          </div>

          {/* 2 */}
          <div>
            <h2 className="text-4xl font-bold mt-4"> {courseCount ? `${courseCount}+` : 'Loading...'}</h2>
            <p className="text-lg uppercase font-semibold">
              Over <span>{courseCount ? courseCount : 'Loading...'}</span> Courses
            </p>
          </div>

          {/* 3 */}
          <div>
            <h2 className="text-4xl font-bold mt-4">1234 +</h2>
            <p className="text-lg uppercase font-semibold">
              Over <span>12345</span> online
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;
