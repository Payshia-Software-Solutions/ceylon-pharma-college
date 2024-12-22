import React from "react";
import SectionHeader from "../Common/SectionHeader";
import InstructorCard from "@/components/Course/InstructorCard";
import DescriptionCard from "./DescriptionCard";

function SingleCoures() {
  return (
    <div className="">
      {/* Header Section */}
      <div>
        <SectionHeader
          imgURL="/assets/testimonial/doctor1.jpg"
          title={"Course Details"}
        />
      </div>

      <div className="px-4 py-2 md:px-16 md:py-8">
        <div className="mt-8">
          {/* Heading */}
          <div className="mb-8">
            <h2 className="text-4xl font-bold">Professional Pharmacy Practice</h2>
            <p className="text-xl text-gray-600">Professional pharmacy practice</p>
          </div>

          {/* Description Card for Small Screens */}
          <div className="block lg:hidden mb-8">
            <DescriptionCard />
          </div>

          {/* Overview and Course Description Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Overview Section */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="max-w-md">
                  <h1 className="text-2xl font-semibold mb-4">Overview</h1>
                  <ul className="space-y-4">
                    <li className="flex justify-between border-b pb-2">
                      <span className="font-medium">📚 Lectures</span>
                      <span>40</span>
                    </li>
                    <li className="flex justify-between border-b pb-2">
                      <span className="font-medium">⏱ Duration</span>
                      <span>300 hours</span>
                    </li>
                    <li className="flex justify-between border-b pb-2">
                      <span className="font-medium">✅ Assessments</span>
                      <span>12</span>
                    </li>
                    <li className="flex justify-between border-b pb-2">
                      <span className="font-medium">🌐 Language</span>
                      <span>English</span>
                    </li>
                    <li className="flex justify-between border-b pb-2">
                      <span className="font-medium">❓ Quizzes</span>
                      <span>1</span>
                    </li>
                    <li className="flex justify-between border-b pb-2">
                      <span className="font-medium">📈 Skill Level</span>
                      <span>1</span>
                    </li>
                    <li className="flex justify-between border-b pb-2">
                      <span className="font-medium">👥 Students</span>
                      <span>300</span>
                    </li>
                  </ul>

                  <div>
                    <h2 className="text-2xl mt-4 mb-6 font-bold">Curriculum</h2>
                    <ul className="uppercase font-semibold">
                      <li className="mt-4 text-xl">First Level</li>
                      <li className="mt-4 text-xl">Second Level</li>
                      <li className="mt-4 text-xl">Final</li>
                    </ul>
                  </div>
                </div>

                {/* Course Description Section */}
                <div className="flex justify-start">
                  <div>
                    <h1 className="text-2xl font-semibold mb-4">Course Description</h1>
                    <p className="text-gray-600 mb-8">Available soon</p>

                    <h1 className="text-2xl font-semibold mb-4">Certification</h1>
                    <p className="text-gray-600 mb-8">To be announced</p>

                    <h1 className="text-2xl font-semibold mb-4">Learning Outcomes</h1>
                    <p className="text-gray-600">Details will be provided soon</p>
                  </div>
                </div>
              </div>

              {/* Instructor Card here */}
              <div className="mt-8">
                <InstructorCard />
              </div>
            </div>

            {/* Sticky Description Card for Large Screens */}
            <div className="hidden lg:block lg:col-span-1 h-full">
              <div className="sticky top-24">
                <DescriptionCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleCoures;
