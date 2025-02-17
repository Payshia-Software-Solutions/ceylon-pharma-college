import React from 'react'

function AboutCourseCard({coursename,description}) {
  return (
    <div className="mx-4 md:mx-8 my-4 py-4 px-4 md:px-8 bg-gray-100">
    <h2 className="text-xl md:text-3xl font-bold">
      What you learn in{" "}
      <span>{coursename}</span>
    </h2>
    <div className="mt-4">
      <h2 className="text-xl md:text-2xl font-bold">About this course</h2>
      <p className="text-sm md:text-md mt-2">
           {description}
      </p>
    </div>
  </div>
  )
}

export default AboutCourseCard