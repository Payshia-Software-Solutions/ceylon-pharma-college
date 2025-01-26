import React from "react";

function AcadamicReport() {
  return (
    <div className="px-4 lg:px-28 py-6 mt-20">
      <div className="bg-white p-6">
        {/* Header Section */}
        <header className="text-center border-b border-gray-300 pb-6">
          <div className="flex justify-center">
            <div>
              {/* Logo Section */}
              <div className="flex justify-center items-center">
                <img src="/assets/images/logo.png" alt="Logo" className="h-12" />
              </div>
              {/* Main Details Section */}
              <div>
                <h1 className="text-3xl font-bold text-black">
                  Ceylon Pharma College
                </h1>
                <div className="mt-2 font-semibold">
                  <p className="text-gray-700">
                    L35, West Tower, World Trade Center, Colombo 01
                  </p>
                  <p className="text-gray-700">
                    Tel: 0704477555 / Email: info@pharmacollege.lk
                  </p>
                  <p className="text-gray-700">Visit us: www.pharmacollege.lk</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Academic Details Section */}
        <section className="mt-8">
          <h2 className="text-xl font-semibold text-gray-800 text-center">
            Academic Report
          </h2>
          <h3 className="text-lg font-medium text-gray-600 text-center">
            Certificate Course In Pharmacy Practice Batch 18
          </h3>

          <div className="flex flex-col lg:flex-row justify-between gap-8 mt-8 text-gray-700">
            {/* First Section */}
            <div className="flex-1">
              <p>
                <span className="font-bold">Index Number:</span> PA21346
              </p>
              <p>
                <span className="font-bold">Name of Student:</span> W.D Saubhgya
              </p>
              <p>
                <span className="font-bold">NIC:</span> 200081201562
              </p>
            </div>

            {/* Second Section */}
            <div className="flex-1">
              <p>
                <span className="font-bold">Address:</span> 304/1/A/...,
                Maharagama road...
              </p>
              <p>
                <span className="font-bold">Email:</span>{" "}
                weerappulige20001107@gmail.com
              </p>
              <p>
                <span className="font-bold">Complete Date:</span> Not Set
              </p>
            </div>
          </div>
        </section>

        {/* Final Grade Section */}
        <section className="mt-8 text-center bg-green-700 text-white py-4 rounded-md">
          <h2 className="text-lg font-bold">
            Final Grade: Result Not Submitted
          </h2>
          <p className="mt-2">
            <span className="font-bold">Status:</span> Result Not Submitted
          </p>
        </section>

        {/* Grade Scale Section */}
        <section className="mt-8">
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2">Grade</th>
                <th className="border border-gray-300 px-4 py-2">Scale</th>
                <th className="border border-gray-300 px-4 py-2">Grade</th>
                <th className="border border-gray-300 px-4 py-2">Scale</th>
                <th className="border border-gray-300 px-4 py-2">Grade</th>
                <th className="border border-gray-300 px-4 py-2">Scale</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">A+</td>
                <td className="border border-gray-300 px-4 py-2">
                  90.00 - 100.00
                </td>
                <td className="border border-gray-300 px-4 py-2">B+</td>
                <td className="border border-gray-300 px-4 py-2">
                  70.00 - 74.00
                </td>
                <td className="border border-gray-300 px-4 py-2">C+</td>
                <td className="border border-gray-300 px-4 py-2">
                  55.00 - 59.00
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">A</td>
                <td className="border border-gray-300 px-4 py-2">
                  80.00 - 89.00
                </td>
                <td className="border border-gray-300 px-4 py-2">B</td>
                <td className="border border-gray-300 px-4 py-2">
                  65.00 - 69.00
                </td>
                <td className="border border-gray-300 px-4 py-2">C</td>
                <td className="border border-gray-300 px-4 py-2">
                  45.00 - 54.00
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">A-</td>
                <td className="border border-gray-300 px-4 py-2">
                  75.00 - 79.00
                </td>
                <td className="border border-gray-300 px-4 py-2">B-</td>
                <td className="border border-gray-300 px-4 py-2">
                  60.00 - 64.00
                </td>
                <td className="border border-gray-300 px-4 py-2">C-</td>
                <td className="border border-gray-300 px-4 py-2">
                  40.00 - 44.00
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Footer Section */}
        <footer className="mt-6 text-center text-gray-600 text-sm">
          <p>
            Please note that this online result is provisional and should not be
            used as an official confirmation or a certification.
          </p>
          <p>
            Copyright © 2020-2022 - Department of Examination - Ceylon Pharma
            College
          </p>
        </footer>
      </div>
    </div>
  );
}

export default AcadamicReport;
