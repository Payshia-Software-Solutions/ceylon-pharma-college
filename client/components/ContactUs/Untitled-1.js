"use client";
import React, { useState } from "react";
import SectionHeader from "../Common/SectionHeader";
import Input from "../Common/Input";

function ContactUs() {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone_number: "",
    subject_topic: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState(null);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage(null);

    try {
      const response = await fetch("http://localhost/pharma-college-project/server/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      setLoading(false);

      if (response.ok) {
        setResponseMessage({ type: "success", text: "Message sent successfully!" });
        setFormData({ full_name: "", email: "", phone_number: "", subject_topic: "", message: "" });
      } else {
        setResponseMessage({ type: "error", text: result.error || "Failed to send message" });
      }
    } catch (error) {
      setLoading(false);
      setResponseMessage({ type: "error", text: "Network error, please try again" });
    }
  };

  return (
    <div>
      <SectionHeader title="Contact Us" imgURL="/assets/images/cover.png" />
      <div className="container max-w-7xl mx-auto my-8">
        <div className="flex flex-col md:flex-row gap-8 px-8 py-8 bg-white shadow-lg rounded-lg">
          {/* Contact Information */}
          <div className="w-full md:w-1/3 max-h-[35rem] bg-gray-200 bg-opacity-40 rounded-md p-8">
            <h2 className="text-xl font-semibold mb-6">Contact Information</h2>
            <div className="mb-6">
              <p className="font-bold text-lg">Phone number:</p>
              <p className="text-teal-600 text-lg">011 74 94 335</p>
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
                Ceylon Pharma College (PVT) LTD, L35, West Tower, World Trade
                Center, Colombo 01, Sri Lanka
              </p>
            </div>
            <div className="mb-6">
              <p className="font-bold text-lg">Factory Address:</p>
              <p className="text-base">
                L35, West Tower, World Trade Center, Colombo 01, Sri Lanka 0715
                884 884
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full md:w-2/3 bg-white rounded-md p-8">
            <h2 className="text-xl font-semibold mb-6">Get in Touch</h2>
            {responseMessage && (
              <div className={`p-3 mb-4 text-lg rounded-md ${responseMessage.type === "success" ? "bg-green-200 text-green-800" : "bg-red-200 text-red-800"}`}>
                {responseMessage.text}
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-6">
                <Input name="full_name" placeholder="Full Name" type="text" value={formData.full_name} onChange={handleChange} />
                <Input name="email" placeholder="Email" type="email" value={formData.email} onChange={handleChange} />
                <Input name="phone_number" placeholder="Phone Number" type="tel" value={formData.phone_number} onChange={handleChange} />
                <Input name="subject_topic" placeholder="Subject Topic" type="text" value={formData.subject_topic} onChange={handleChange} />
              </div>
              <textarea
                name="message"
                placeholder="Message"
                rows="6"
                className="border border-gray-300 p-3 rounded-md w-full mt-6 focus:ring-2 focus:ring-teal-500 focus:outline-none text-lg"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              <button type="submit" className="mt-6 bg-teal-600 text-white px-8 py-3 text-lg rounded-md hover:bg-teal-700 transition" disabled={loading}>
                {loading ? "Sending..." : "SEND"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
