import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faClock, faPhone } from "@fortawesome/free-solid-svg-icons";
import taxiBooking from "../../Images/taxi-booking.jpg";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "", email: "", passengers: "", pickup: "", dropoff: "", date: "", time: "",
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => { e.preventDefault(); alert("Booking submitted!"); };

  return (
    <div className="bg-gray-200">
      <div className="md:flex max-w-7xl mx-auto flex-col md:flex-row">
        {/* Left */}
        <div className="md:w-1/2 bg-gray-100 px-6 py-12 md:py-16 flex flex-col items-center">
          <img src={taxiBooking} alt="Taxi Service" className="rounded-lg mb-8 w-full"/>
          <p className="text-yellow-500 text-sm mb-2">• We’re the best in your town</p>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center">
            Welcome to the most trusted company
          </h1>
          <p className="text-gray-600 mb-6 text-center">
            Pick Quick Cabs offer instant and easy bookings straight from your phone. Enjoy the most affordable rides across India.
          </p>
          <div className="flex gap-6 font-bold text-2xl sm:text-4xl text-yellow-500 flex-wrap justify-center">
            <span>Safe.</span>
            <span>Fast.</span>
            <span>Quick.</span>
          </div>
        </div>

        {/* Right */}
        <div className="md:w-1/2 bg-black text-white px-6 py-12 md:py-16">
          <p className="text-yellow-500 text-sm mb-2">• Wanna Book Your Ride?</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Enjoy Seamless Booking</h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-lg mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input type="text" name="name" placeholder="Your name" value={formData.name} onChange={handleChange}
                className="w-full sm:w-1/2 bg-[#1c1c1c] text-white px-5 py-4 rounded-full outline-none"/>
              <input type="email" name="email" placeholder="Email address" value={formData.email} onChange={handleChange}
                className="w-full sm:w-1/2 bg-[#1c1c1c] text-white px-5 py-4 rounded-full outline-none"/>
            </div>
            <input type="number" name="passengers" placeholder="Passengers #" value={formData.passengers} onChange={handleChange}
              className="bg-[#1c1c1c] text-white px-5 py-4 rounded-full outline-none"/>
            <input type="text" name="pickup" placeholder="Pick up address" value={formData.pickup} onChange={handleChange}
              className="bg-[#1c1c1c] text-white px-5 py-4 rounded-full outline-none"/>
            <input type="text" name="dropoff" placeholder="Drop off address" value={formData.dropoff} onChange={handleChange}
              className="bg-[#1c1c1c] text-white px-5 py-4 rounded-full outline-none"/>

            <div className="relative">
              <input type="date" name="date" value={formData.date} onChange={handleChange}
                className="w-full bg-[#1c1c1c] text-white px-5 py-4 pr-10 rounded-full outline-none"/>
              <FontAwesomeIcon icon={faCalendar} className="absolute right-5 top-1/2 transform -translate-y-1/2 text-yellow-400"/>
            </div>

            <div className="relative">
              <select name="time" value={formData.time} onChange={handleChange}
                className="w-full bg-[#1c1c1c] text-white px-5 py-4 pr-10 rounded-full outline-none appearance-none">
                <option value="">Select Time</option>
                <option value="10AM–10.59AM">10AM–10.59AM</option>
                <option value="11AM–11.59AM">11AM–11.59AM</option>
                <option value="12PM–12.59PM">12PM–12.59PM</option>
              </select>
              <FontAwesomeIcon icon={faClock} className="absolute right-5 top-1/2 transform -translate-y-1/2 text-yellow-400"/>
            </div>

            <button type="submit" className="mt-4 bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 rounded-full w-full sm:w-auto">
              Book Now
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Call Box */}
      <div className="bg-yellow-400 py-6 px-6 flex flex-col md:flex-row items-center justify-between text-black gap-4">
        <div className="flex items-center gap-4 text-lg font-medium">
          <FontAwesomeIcon icon={faPhone} className="text-2xl"/>
          <span className="font-bold">Call and book emergency taxi</span>
        </div>
        <h2 className="text-3xl font-bold">84 47 43 38 52</h2>
      </div>
    </div>
  );
}
