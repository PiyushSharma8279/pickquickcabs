import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faClock, faPhone } from "@fortawesome/free-solid-svg-icons";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    passengers: "",
    pickup: "",
    dropoff: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking Data:", formData);
    alert("Booking submitted!");
  };

  return (
    <div className="bg-white">
      {/* Main container */}
      <div className="md:flex max-w-7xl mx-auto">
        {/* Left Section */}
        <div className="md:w-1/2 bg-white px-6 py-16">
          <img
            src="https://old3.commonsupport.com/wp/conexi/wp-content/uploads/2020/04/book-1-1.jpg"
            alt="Taxi Service"
            className="rounded-lg mb-8"
          />
          <p className="text-yellow-500 text-sm mb-2">
            • We’re the best in your town
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to the most trusted company
          </h1>
          <p className="text-gray-600 mb-6">
            There are many variations of passages of lorem ipsum available but
            the majority have suffered alteration in some form by injected humor
            or random word which don’t look even slightly believable you are
            going to use a passage.
          </p>
          <div className="flex gap-6 font-bold text-2xl text-yellow-500">
            <span>Safe.</span>
            <span>Fast.</span>
            <span>Quick.</span>
          </div>
        </div>

        {/* Right Section - Booking Form */}
        <div className="md:w-1/2 bg-black text-white px-6 py-16">
          <p className="text-yellow-500 text-sm mb-2">• Looking for taxi?</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Make your booking
          </h2>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 max-w-lg"
          >
            {/* Name & Email */}
            <div className="flex gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                className="w-1/2 bg-[#1c1c1c] text-white px-5 py-4 rounded-full outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
                className="w-1/2 bg-[#1c1c1c] text-white px-5 py-4 rounded-full outline-none"
              />
            </div>

            <input
              type="number"
              name="passengers"
              placeholder="Passengers #"
              value={formData.passengers}
              onChange={handleChange}
              className="bg-[#1c1c1c] text-white px-5 py-4 rounded-full outline-none"
            />

            <input
              type="text"
              name="pickup"
              placeholder="Pick up address"
              value={formData.pickup}
              onChange={handleChange}
              className="bg-[#1c1c1c] text-white px-5 py-4 rounded-full outline-none"
            />

            <input
              type="text"
              name="dropoff"
              placeholder="Drop off address"
              value={formData.dropoff}
              onChange={handleChange}
              className="bg-[#1c1c1c] text-white px-5 py-4 rounded-full outline-none"
            />

            <div className="relative">
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full bg-[#1c1c1c] text-white px-5 py-4 pr-10 rounded-full outline-none"
              />
              <FontAwesomeIcon
                icon={faCalendar}
                className="absolute right-5 top-1/2 transform -translate-y-1/2 text-yellow-400"
              />
            </div>

            <div className="relative">
              <select
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full bg-[#1c1c1c] text-white px-5 py-4 pr-10 rounded-full outline-none appearance-none"
              >
                <option value="">10AM–10.59AM</option>
                <option value="10AM–10.59AM">10AM–10.59AM</option>
                <option value="11AM–11.59AM">11AM–11.59AM</option>
                <option value="12PM–12.59PM">12PM–12.59PM</option>
              </select>
              <FontAwesomeIcon
                icon={faClock}
                className="absolute right-5 top-1/2 transform -translate-y-1/2 text-yellow-400"
              />
            </div>

            <button
              type="submit"
              className="mt-4 bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 rounded-full"
            >
              Book Now
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Yellow Bar */}
      <div className="bg-yellow-400 py-6 px-6 flex items-center justify-center md:justify-between text-black">
        <div className="flex items-center gap-4 text-lg font-medium">
          <FontAwesomeIcon icon={faPhone} className="text-2xl" />
          <span>Call and book emergency taxi</span>
        </div>
        <h2 className="text-3xl font-bold mt-2 md:mt-0">888 888 0000</h2>
      </div>
    </div>
  );
}
