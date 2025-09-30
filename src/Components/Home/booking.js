import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faClock } from "@fortawesome/free-solid-svg-icons";

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
        <div className="bg-black text-white py-16 px-6 flex justify-center">
            <div className="w-full md:flex justify-between gap-4 max-w-6xl">
                {/* Left section - text */}
                <div className="mb-10 md:mb-0 md:w-[40%]">
                    <h2 className="text-yellow-400 text-lg mb-2">Looking for taxi?</h2>
                    <h1 className="text-7xl font-bold mb-4">Make your booking</h1>
                    <p className="text-gray-400 mb-8 text-xl">
                        Our taxis commit to make your trips unique by best answering your
                        needs.
                    </p>
                </div>

                {/* Right section - form (updated) */}
                <form
                    onSubmit={handleSubmit}
                    className="w-full md:w-[60%] grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                    {/* Name & Email */}
                    <input
                        type="text"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-[#1c1c1c] text-white px-5 py-4 rounded-full outline-none"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email address"
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-[#1c1c1c] text-white px-5 py-4 rounded-full outline-none"
                    />

                    {/* Passengers */}
                    <input
                        type="number"
                        name="passengers"
                        placeholder="Passengers #"
                        value={formData.passengers}
                        onChange={handleChange}
                        className="bg-[#1c1c1c] text-white px-5 py-4 rounded-full outline-none col-span-2"
                    />

                    {/* Pickup */}
                    <input
                        type="text"
                        name="pickup"
                        placeholder="Pick up address"
                        value={formData.pickup}
                        onChange={handleChange}
                        className="bg-[#1c1c1c] text-white px-5 py-4 rounded-full outline-none col-span-2"
                    />

                    {/* Dropoff */}
                    <input
                        type="text"
                        name="dropoff"
                        placeholder="Drop off address"
                        value={formData.dropoff}
                        onChange={handleChange}
                        className="bg-[#1c1c1c] text-white px-5 py-4 rounded-full outline-none col-span-2"
                    />

                    {/* Date */}
                    <div className="relative col-span-2">
                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            className="w-full bg-[#1c1c1c] text-white px-5 py-4 pr-10 rounded-full outline-none appearance-none"
                        />
                        <FontAwesomeIcon
                            icon={faCalendar}
                            className="absolute right-5 top-1/2 transform -translate-y-1/2 text-yellow-400"
                        />
                    </div>

                    {/* Time */}
                    <div className="relative col-span-2">
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

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="col-span-2 mt-4 bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 rounded-full"
                    >
                        Book Now
                    </button>
                </form>
            </div>
        </div>
    );
}
