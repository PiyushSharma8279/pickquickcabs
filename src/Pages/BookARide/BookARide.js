import React, { useState } from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import taxi3 from "../../Images/taxi-slider-3.jpeg"

function BookARide() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        passengers: "",
        pickup: "",
        dropoff: "",
        date: "",
        time: "",
        carTypes: [],
        carModel: "",
        driverAge: "",
        professionalDriver: "",
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === "checkbox") {
            // Handle Car Type checkboxes
            setFormData((prev) => {
                if (checked) {
                    return { ...prev, carTypes: [...prev.carTypes, value] };
                } else {
                    return { ...prev, carTypes: prev.carTypes.filter((t) => t !== value) };
                }
            });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Booking Data:", formData);
        alert("Booking submitted!");
    };

    const slide = {
        img: taxi3,
        title: "Book A Ride",
    };

    return (
        <>
            <Header />

            {/* Hero Section */}
            <div
                className="relative mt-32 h-[60vh] md:h-[80vh] flex items-center justify-center text-center text-white px-4"
                style={{
                    backgroundImage: `url(${slide.img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="max-w-3xl">
                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-snug drop-shadow-lg">
                        {slide.title}
                    </h1>
                </div>
            </div>

            {/* Booking Form */}
            <div className="max-w-4xl px-6 py-16">
                <p className="text-yellow-500 text-sm mb-2">• Looking for taxi?</p>
                <h2 className="text-4xl md:text-5xl font-bold mb-8">Make your booking</h2>

                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <input
                        type="text"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-gray-200 text-black px-5 py-4 rounded-full outline-none"
                    />

                    {/* Email */}
                    <input
                        type="email"
                        name="email"
                        placeholder="Email address"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-gray-200 text-black px-5 py-4 rounded-full outline-none"
                    />

                    {/* Passengers */}
                    <input
                        type="number"
                        name="passengers"
                        placeholder="Passengers #"
                        value={formData.passengers}
                        onChange={handleChange}
                        className="w-full bg-gray-200 text-black px-5 py-4 rounded-full outline-none"
                    />

                    {/* Pickup */}
                    <input
                        type="text"
                        name="pickup"
                        placeholder="Pick up address"
                        value={formData.pickup}
                        onChange={handleChange}
                        className="w-full bg-gray-200 text-black px-5 py-4 rounded-full outline-none"
                    />

                    {/* Dropoff */}
                    <input
                        type="text"
                        name="dropoff"
                        placeholder="Drop off address"
                        value={formData.dropoff}
                        onChange={handleChange}
                        className="w-full bg-gray-200 text-black px-5 py-4 rounded-full outline-none"
                    />

                    {/* Date */}
                    <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full bg-gray-200 text-black px-5 py-4 rounded-full outline-none"
                    />

                    {/* Time */}
                    <select
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        className="w-full bg-gray-200 text-black px-5 py-4 rounded-full outline-none"
                    >
                        <option value="">Select Time</option>
                        <option value="10AM–10.59AM">10AM–10.59AM</option>
                        <option value="11AM–11.59AM">11AM–11.59AM</option>
                        <option value="12PM–12.59PM">12PM–12.59PM</option>
                    </select>

                    {/* --- New Section: Car Type --- */}
                    <div className="md:col-span-2 mt-6">
                        <h3 className="text-xl font-bold mb-2">Select Car Type</h3>
                        <div className="flex flex-wrap gap-4">
                            {["Any type", "Hybrid", "SUV", "Luxury", "Vans"].map((type) => (
                                <label key={type} className="flex items-center space-x-2">
                                    <input
                                        type="checkbox"
                                        name="carTypes"
                                        value={type}
                                        checked={formData.carTypes.includes(type)}
                                        onChange={handleChange}
                                    />
                                    <span>{type}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* --- New Section: Other Information --- */}
                    <div className="md:col-span-2 mt-6">
                        <h3 className="text-xl font-bold mb-2">Other Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <select
                                name="carModel"
                                value={formData.carModel}
                                onChange={handleChange}
                                className="w-full bg-gray-200 text-black px-5 py-4 rounded-full outline-none"
                            >
                                <option value="">Car model</option>
                                <option value="Swift Dzire">Swift Dzire</option>
                                <option value="Innova">Innova</option>
                                <option value="Ertiga">Ertiga</option>
                                <option value="Honda City">Honda City</option>
                            </select>

                            <select
                                name="driverAge"
                                value={formData.driverAge}
                                onChange={handleChange}
                                className="w-full bg-gray-200 text-black px-5 py-4 rounded-full outline-none"
                            >
                                <option value="">Driver age</option>
                                <option value="20-30">20–30</option>
                                <option value="31-40">31–40</option>
                                <option value="41-50">41–50</option>
                                <option value="51+">51+</option>
                            </select>

                            <select
                                name="professionalDriver"
                                value={formData.professionalDriver}
                                onChange={handleChange}
                                className="w-full bg-gray-200 text-black px-5 py-4 rounded-full outline-none md:col-span-2"
                            >
                                <option value="">Professional driver</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="md:col-span-2">
                        <button
                            type="submit"
                            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 rounded-full"
                        >
                            Book Now
                        </button>
                    </div>
                </form>
            </div>

            <Footer />
        </>
    );
}

export default BookARide;
