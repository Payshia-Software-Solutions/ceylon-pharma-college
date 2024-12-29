"use client"
import React from "react";
import SectionHeader from "../Common/SectionHeader";
import Input from "../Common/Input";

function ContactUs() {
  return (
    <div>
      <div>
        <SectionHeader
          title={"Contact Us"}
          imgURL={"/assets/images/cover.png"}
        />
      </div>

      <div className="container max-w-7xl mx-auto my-8">
        <div className="flex flex-col md:flex-row gap-8 px-8 py-8 bg-white shadow-lg rounded-lg">
          {/* Contact Information */}
          <div className="w-full md:w-1/3 max-h-[35rem] bg-gray-200 bg-opacity-40 rounded-md p-8">
            <h2 className="text-xl font-semibold mb-6">Contact Information</h2>
            <div className="mb-6">
              <p className="font-bold text-lg">Phone number:</p>
              <p className="text-teal-600 text-lg">+9470 55 08 800</p>
            </div>
            <div className="mb-6">
              <p className="font-bold text-lg">Email:</p>
              <p className="text-teal-600 text-lg">
                marketing@teajarceylon.com
              </p>
            </div>
            <div className="mb-6">
              <p className="font-bold text-lg">Corporate Address:</p>
              <p className="text-base">
                KDU Exports PVT LTD, 427 A, Galle Road, Colombo 03, Sri Lanka.
              </p>
            </div>
            <div className="mb-6">
              <p className="font-bold text-lg">Factory Address:</p>
              <p className="text-base">
                Galpadithanna Tea Factory, Lellopitiya, Rathnapura.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full md:w-2/3 bg-white rounded-md p-8">
            <h2 className="text-xl font-semibold mb-6">Get in Touch</h2>
            <form>
              <div className="grid grid-cols-1 gap-6">
                <Input
                  id="fullName"
                  name="fullName"
                  placeholder="Full Name"
                  type="text"
                  value=""
                  onChange={() => {}}
                />
                <Input
                  id="email"
                  name="email"
                  placeholder="Email"
                  type="email"
                  value=""
                  onChange={() => {}}
                />
                <Input
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  type="tel"
                  value=""
                  onChange={() => {}}
                />
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Subject Topic"
                  type="text"
                  value=""
                  onChange={() => {}}
                />
              </div>
              <textarea
                placeholder="Message"
                rows="6"
                className="border border-gray-300 p-3 rounded-md w-full mt-6 focus:ring-2 focus:ring-teal-500 focus:outline-none text-lg"
              ></textarea>
              <div className="flex items-center gap-6 mt-6">
                <label className="flex items-center text-lg">
                  <input type="checkbox" className="mr-2" />
                  Signup for Our Newsletter
                </label>
                <label className="flex items-center text-lg">
                  <input type="checkbox" className="mr-2" />
                  Confirm acceptance of our Privacy Policy
                </label>
              </div>
              <button
                type="submit"
                className="mt-6 bg-teal-600 text-white px-8 py-3 text-lg rounded-md hover:bg-teal-700 transition"
              >
                SEND
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
