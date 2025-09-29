import React, { useState } from "react";

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
            <div className="w-full md:flex justify-between gap-4">
                <div>
                    <h2 className="text-yellow-400 text-sm mb-2">Looking for taxi?</h2>
                    <h1 className="text-6xl font-bold mb-4">Make your booking</h1>
                    <p className="text-gray-400 mb-8">
                        Our taxis commit to make your trips unique by best answering your
                        needs.
                    </p>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 md:w-[70%]"
                >
                    <input
                        type="text"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-gray-800 text-white px-4 py-5 rounded-3xl outline-none"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email address"
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-gray-800 text-white  px-4 py-5 rounded-3xl outline-none"
                    />
                    <input
                        type="number"
                        name="passengers"
                        placeholder="Passengers"
                        value={formData.passengers}
                        onChange={handleChange}
                        className="bg-gray-800 text-white px-4 py-5 rounded-3xl outline-none"
                    />
                    <input
                        type="text"
                        name="pickup"
                        placeholder="Pick up address"
                        value={formData.pickup}
                        onChange={handleChange}
                        className="bg-gray-800 text-white px-4 py-5 rounded-3xl outline-none"
                    />
                    <input
                        type="text"
                        name="dropoff"
                        placeholder="Drop off address"
                        value={formData.dropoff}
                        onChange={handleChange}
                        className="bg-gray-800 text-white px-4 py-5 rounded-3xl outline-none"
                    />
                    <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="bg-gray-800 text-white px-4 py-5 rounded-3xl outline-none"
                    />
                    <select
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        className="bg-gray-800 text-white px-4 py-5 rounded-3xl outline-none md:col-span-2"
                    >
                        <option value="">Select Time Slot</option>
                        <option value="10AM-10:59AM">10AM–10:59AM</option>
                        <option value="11AM-11:59AM">11AM–11:59AM</option>
                        <option value="12PM-12:59PM">12PM–12:59PM</option>
                        <option value="1PM-1:59PM">1PM–1:59PM</option>
                    </select>

                    <button
                        type="submit"
                        className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 rounded-lg md:col-span-2"
                    >
                        Book Now
                    </button>
                </form>
            </div>
        </div>
    );
}
