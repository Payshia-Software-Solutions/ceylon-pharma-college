"use client";
import React, { useState, useEffect } from "react";
import Input from "./Common/Input";
import Swal from "sweetalert2";

function ApplyNow() {
  const API_URL = "http://localhost/pharma-college-project/server/temp-users";
  const CITIES_API_URL =
    "http://localhost/pharma-college-project/server/cities";

  const [formData, setFormData] = useState({
    email_address: "",
    civil_status: "Mr.",
    first_name: "",
    last_name: "",
    password: "",
    nic_number: "",
    phone_number: "",
    whatsapp_number: "",
    address_l1: "",
    address_l2: "",
    city: "",
    district: "kaduwela",
    postal_code: "10150",
    paid_amount: 2500,
    aprroved_status: "pending",
    created_at: new Date().toISOString(),
    full_name: "",
    name_with_initials: "",
    gender: "Male",
    index_number: "20240005",
    name_on_certificate: "",
    selected_course: "Pharmacy",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [cities, setCities] = useState([]);
  const [loadingCities, setLoadingCities] = useState(true);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredCities, setFilteredCities] = useState([]);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await fetch(CITIES_API_URL);
        if (!response.ok) {
          throw new Error("Failed to fetch cities");
        }
        const data = await response.json();
        setCities(data);
      } catch (error) {
        console.error("Error fetching cities:", error);
      } finally {
        setLoadingCities(false);
      }
    };

    fetchCities();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (name === "city") {
      const suggestions = cities.filter((city) =>
        city.name_en.toLowerCase().startsWith(value.toLowerCase())
      );
      setFilteredCities(suggestions);
      setShowSuggestions(true);
    }
  };

  const handleCitySelect = (cityName) => {
    setFormData((prevData) => ({
      ...prevData,
      city: cityName,
    }));
    setShowSuggestions(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const error = await response.json();
        console.error("Server Error:", error);
        Swal.fire({
          icon: "error",
          title: "Registration Failed",
          text: error.message || "Please check the input.",
        });
        return;
      }

      const result = await response.json();
      Swal.fire({
        icon: "success",
        title: "Registration Successful",
        text: "Welcome to Ceylon Pharma College!",
      });

      // Open a new page with success details

      // window.open(`applynow/success?user_id=${result.user_id}`);
      window.location.href = `applynow/success?user_id=${result.user_id}`;
    } catch (error) {
      console.error("Submission Error:", error);
      Swal.fire({
        icon: "error",
        title: "An Error Occurred",
        text: "Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen p-6 container mx-auto relative">
      {/* Overlay when submitting */}
      {isSubmitting && (
        <div className="absolute inset-0 bg-white bg-opacity-75 z-50 flex items-center justify-center">
          <div className="loader border-t-4 border-maincolor rounded-full w-16 h-16 animate-spin"></div>
        </div>
      )}

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1 max-h-[35rem] bg-maincolor text-white p-6 rounded-lg">
          <h1 className="text-3xl font-bold mb-4">User Registration</h1>
          <p className="mb-4">
            Unlock your Ceylon Pharma College experience! Complete our quick,
            secure registration for personalized services. Join us now!
          </p>
          <h2 className="text-xl font-bold mb-2">How to Register</h2>
          <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/VIDEO_ID"
              title="How to Register"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="md:col-span-2 bg-white p-6 rounded-lg shadow-md">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex gap-4">
              <div className="max-w-[5rem]">
                <label
                  htmlFor="civil_status"
                  className="block text-sm font-medium"
                >
                  Title
                </label>
                <select
                  id="civil_status"
                  name="civil_status"
                  value={formData.civil_status}
                  onChange={handleChange}
                  className="w-full border-black rounded-md"
                >
                  <option>Mr.</option>
                  <option>Mrs.</option>
                  <option>Miss</option>
                </select>
              </div>
              <Input
                name="first_name"
                placeholder="First Name"
                value={formData.first_name}
                onChange={handleChange}
                className="flex-grow"
              />
              <Input
                name="last_name"
                placeholder="Last Name"
                value={formData.last_name}
                onChange={handleChange}
                className="flex-grow"
              />
            </div>
            <Input
              name="full_name"
              placeholder="Full Name"
              value={formData.full_name}
              onChange={handleChange}
            />
            <Input
              name="name_with_initials"
              placeholder="Name with Initials"
              value={formData.name_with_initials}
              onChange={handleChange}
            />
            <Input
              name="name_on_certificate"
              placeholder="Name on Certificate"
              value={formData.name_on_certificate}
              onChange={handleChange}
            />
            <div className="grid grid-cols-2 gap-4">
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full border-gray-300 px-4 py-2 rounded-md"
              >
                <option>Male</option>
                <option>Female</option>
              </select>
              <Input
                name="nic_number"
                placeholder="NIC Number"
                value={formData.nic_number}
                onChange={handleChange}
              />
            </div>
            <select
              name="selected_course"
              value={formData.selected_course}
              onChange={handleChange}
              className="w-full border-gray-300 px-4 py-2 rounded-md"
            >
              <option>Pharmacy</option>
              <option>Medicine</option>
              <option>Nursing</option>
            </select>
            <Input
              name="password"
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
            <Input
              name="email_address"
              type="email"
              placeholder="Email Address"
              value={formData.email_address}
              onChange={handleChange}
            />
            <div className="grid grid-cols-2 gap-4">
              <Input
                name="phone_number"
                placeholder="Phone Number"
                value={formData.phone_number}
                onChange={handleChange}
              />
              <Input
                name="whatsapp_number"
                placeholder="WhatsApp Number"
                value={formData.whatsapp_number}
                onChange={handleChange}
              />
            </div>
            <Input
              name="address_l1"
              placeholder="Address Line 1"
              value={formData.address_l1}
              onChange={handleChange}
            />
            <Input
              name="address_l2"
              placeholder="Address Line 2"
              value={formData.address_l2}
              onChange={handleChange}
            />
            <Input
              name="city"
              placeholder="Enter City"
              value={formData.city}
              onChange={handleChange}
            />
            {showSuggestions && filteredCities.length > 0 && (
              <ul className="absolute z-10 bg-white border border-gray-300 w-full rounded-md shadow-lg">
                {filteredCities.map((city) => (
                  <li
                    key={city.id}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                    onClick={() => handleCitySelect(city.name_en)}
                  >
                    {city.name_en}
                  </li>
                ))}
              </ul>
            )}
            <button
              type="submit"
              className={`w-full bg-maincolor text-white py-2 rounded-md font-bold text-lg hover:bg-yellow-600 ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Join Now"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ApplyNow;
