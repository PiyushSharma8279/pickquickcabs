import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faClock, faPhone } from "@fortawesome/free-solid-svg-icons";
import emailjs from "@emailjs/browser";
import taxiBooking from "../../Images/taxi-booking.jpg";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "", // ✅ new field
    passengers: "",
    pickup: "",
    dropoff: "",
    date: "",
    time: "",
    tripType: "",
  });

  const [status, setStatus] = useState("");

  // handle change
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace with your actual EmailJS IDs
    const serviceId = "service_q4c7kio";
    const templateId = "template_zzidn0p";
    const publicKey = "UN1tRImChgV6wg9Qc";

    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone, // ✅ added phone
      passengers: formData.passengers,
      pickup: formData.pickup,
      dropoff: formData.dropoff,
      date: formData.date,
      tripType: formData.tripType,
      time: formData.time,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatus("✅ Booking submitted successfully!");
          setFormData({
            name: "",
            email: "",
            phone: "",
            passengers: "",
            pickup: "",
            dropoff: "",
            date: "",
            tripType: "",
            time: "",
          });
        },
        (error) => {
          console.error("FAILED...", error);
          setStatus("❌ Failed to send booking. Please try again.");
        }
      );
  };

  return (
    <div className="bg-gray-200">
      <div className="md:flex max-w-7xl mx-auto flex-col md:flex-row">
        {/* Left Section */}
        <div className="md:w-1/2 bg-gray-100 px-6 py-12 md:py-16 flex flex-col items-center">
          <img
            src={taxiBooking}
            alt="Taxi Service"
            className="rounded-lg mb-8 w-full"
          />
          <p className="text-yellow-500 text-sm mb-2">• We’re the best in your town</p>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center">
            Welcome to the most trusted company
          </h1>
          <p className="text-gray-600 mb-6 text-center">
            Pick Quick Cabs offer instant and easy bookings straight from your
            phone. Enjoy the most affordable rides across India.
          </p>
          <div className="flex gap-6 font-bold text-2xl sm:text-4xl text-yellow-500 flex-wrap justify-center">
            <span>Safe.</span>
            <span>Fast.</span>
            <span>Quick.</span>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 bg-black text-white px-6 py-12 md:py-16">
          <p className="text-yellow-500 text-sm mb-2">• Wanna Book Your Ride?</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Enjoy Seamless Booking
          </h2>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 max-w-lg mx-auto"
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full sm:w-1/2 bg-[#1c1c1c] text-white px-5 py-4 rounded-full outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full sm:w-1/2 bg-[#1c1c1c] text-white px-5 py-4 rounded-full outline-none"
              />
            </div>

            {/* ✅ Phone Field */}
            <div className="relative">
              <input
                type="tel"
                name="phone"
                placeholder="Phone number"
                value={formData.phone}
                onChange={handleChange}
                required
                pattern="[0-9]{10}"
                maxLength="10"
                className="w-full bg-[#1c1c1c] text-white px-5 py-4 pr-10 rounded-full outline-none"
              />
              <FontAwesomeIcon
                icon={faPhone}
                className="absolute right-5 top-1/2 transform -translate-y-1/2 text-yellow-400"
              />
            </div>

            <input
              type="number"
              name="passengers"
              placeholder="Passengers #"
              value={formData.passengers}
              onChange={handleChange}
              required
              className="bg-[#1c1c1c] text-white px-5 py-4 rounded-full outline-none"
            />

            <input
              type="text"
              name="pickup"
              placeholder="Pick up address"
              value={formData.pickup}
              onChange={handleChange}
              required
              className="bg-[#1c1c1c] text-white px-5 py-4 rounded-full outline-none"
            />

            <input
              type="text"
              name="dropoff"
              placeholder="Drop off address"
              value={formData.dropoff}
              onChange={handleChange}
              required
              className="bg-[#1c1c1c] text-white px-5 py-4 rounded-full outline-none"
            />

            <div className="relative">
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full bg-[#1c1c1c] text-white px-5 py-4 pr-10 rounded-full outline-none"
              />
              <FontAwesomeIcon
                icon={faCalendar}
                className="absolute right-5 top-1/2 transform -translate-y-1/2 text-yellow-400"
              />
            </div>

            <div className="relative">
              <input
                name="time"
                value={formData.time}
                onChange={handleChange}
                type="text"
                placeholder="Type Time"
                required
                className="w-full bg-[#1c1c1c] text-white px-5 py-4 pr-10 rounded-full outline-none appearance-none"
              />
              <FontAwesomeIcon
                icon={faClock}
                className="absolute right-5 top-1/2 transform -translate-y-1/2 text-yellow-400"
              />
            </div>

            <select
              name="tripType"
              value={formData.tripType}
              onChange={handleChange}
              required
              className="w-full bg-[#1c1c1c] text-white px-5 py-4 rounded-full outline-none"
            >
              <option value="">Trip type</option>
              <option value="Round Trip">Round Trip</option>
              <option value="One Way">One Way</option>
            </select>

            <button
              type="submit"
              className="mt-4 bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 rounded-full w-full sm:w-auto"
            >
              Book Now
            </button>

            {status && (
              <p className="text-center mt-4 text-yellow-400 font-medium">
                {status}
              </p>
            )}
          </form>
        </div>
      </div>

      {/* Bottom Call Box */}
      <div className="bg-yellow-400 py-6 px-6 flex flex-col md:flex-row items-center justify-between text-black gap-4">
        <div className="flex items-center gap-4 text-lg font-medium">
          <FontAwesomeIcon icon={faPhone} className="text-2xl" />
          <span className="font-bold">Call and book emergency taxi</span>
        </div>
        <h2 className="text-3xl font-bold">84 47 43 38 52</h2>
      </div>
    </div>
  );
}
