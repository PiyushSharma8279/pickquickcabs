import React, { useState, useEffect } from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import taxi3 from "../../Images/taxi-slider-3.jpeg";
import emailjs from "@emailjs/browser";

function BookARide() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    passengers: "",
    pickup: "",
    dropoff: "",
    date: "",
    time: "",
    carTypes: [],
    carModel: "",
    tripType: "",
    carCarrier: "",
  });

  const [agreed, setAgreed] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox" && name === "carTypes") {
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

    if (!agreed) {
      alert("You must agree to the terms before booking!");
      return;
    }

    const serviceId = "service_q4c7kio";
    const templateId = "template_afskxin";
    const publicKey = "UN1tRImChgV6wg9Qc";

    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      passengers: formData.passengers,
      pickup: formData.pickup,
      dropoff: formData.dropoff,
      date: formData.date,
      time: formData.time,
      carTypes: formData.carTypes.join(", "),
      carModel: formData.carModel,
      tripType: formData.tripType,
      carCarrier: formData.carCarrier,
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
            time: "",
            carTypes: [],
            carModel: "",
            tripType: "",
            carCarrier: "",
          });
          setAgreed(false);
        },
        (error) => {
          console.error("FAILED...", error);
          setStatus("❌ Failed to send booking. Please try again.");
        }
      );
  };

  const slide = {
    img: taxi3,
    title: "Book A Ride",
  };

  return (
    <>
      <Header />

      {/* Banner */}
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
        <p className="text-yellow-500 text-sm mb-2">• Rides – Always on Time</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Explore Instant and Easy Bookings
        </h2>
        <p className="py-4">
          Pick Quick Cabs offer instant and easy bookings straight from your phone.
          Give us a call or make your booking from our official website. We’re also
          working on our app to make ride bookings effortless. Enjoy the most affordable
          rides across India.
        </p>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Basic Info */}
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full bg-gray-200 text-black px-5 py-4 rounded-full outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full bg-gray-200 text-black px-5 py-4 rounded-full outline-none"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone number"
            value={formData.phone}
            onChange={handleChange}
            required
            pattern="[0-9]{10}"
            maxLength={10}
            className="w-full bg-gray-200 text-black px-5 py-4 rounded-full outline-none"
          />

          <input
            type="number"
            name="passengers"
            placeholder="Passengers #"
            value={formData.passengers}
            onChange={handleChange}
            required
            className="w-full bg-gray-200 text-black px-5 py-4 rounded-full outline-none"
          />

          <input
            type="text"
            name="pickup"
            placeholder="Pick up address"
            value={formData.pickup}
            onChange={handleChange}
            required
            className="w-full bg-gray-200 text-black px-5 py-4 rounded-full outline-none"
          />

          <input
            type="text"
            name="dropoff"
            placeholder="Drop off address"
            value={formData.dropoff}
            onChange={handleChange}
            required
            className="w-full bg-gray-200 text-black px-5 py-4 rounded-full outline-none"
          />

          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="w-full bg-gray-200 text-black px-5 py-4 rounded-full outline-none"
          />

          <input
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
            type="text"
            placeholder="Type Time"
            className="w-full bg-gray-200 text-black px-5 py-4 rounded-full outline-none"
          />

          {/* Car Types */}
          <div className="md:col-span-2 mt-6">
            <h3 className="text-xl font-bold mb-2">Select Car Type</h3>
            <div className="flex flex-wrap gap-4">
              {["Any type", "Hatchback", "SUV", "Sedan", "Vans"].map((type) => (
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

          {/* Other Info */}
          <div className="md:col-span-2 mt-6">
            <h3 className="text-xl font-bold mb-2">Other Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <select
                name="carModel"
                value={formData.carModel}
                onChange={handleChange}
                required
                className="w-full bg-gray-200 text-black px-5 py-4 rounded-full outline-none"
              >
                <option value="">Car model</option>
                <option value="Wagonr">Wagonr</option>
                <option value="Kia Carens">Kia Carens</option>
                <option value="Innova">Innova</option>
                <option value="Swift Dzire">Swift Dzire</option>
                <option value="Ertiga">Ertiga</option>
                <option value="Force Traveller">Force Traveller</option>
              </select>

              <select
                name="tripType"
                value={formData.tripType}
                onChange={handleChange}
                required
                className="w-full bg-gray-200 text-black px-5 py-4 rounded-full outline-none"
              >
                <option value="">Trip type</option>
                <option value="Round Trip">Round Trip</option>
                <option value="One Way">One Way</option>
              </select>

              <select
                name="carCarrier"
                value={formData.carCarrier}
                onChange={handleChange}
                required
                className="w-full bg-gray-200 text-black px-5 py-4 rounded-full outline-none"
              >
                <option value="">Car Carrier</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          </div>

          {/* Terms */}
          <div className="md:col-span-2 flex items-center space-x-2">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              id="agree"
            />
            <label htmlFor="agree" className="text-sm">
              I agree to the terms and conditions
            </label>
          </div>

          {/* Submit */}
          <div className="md:col-span-2">
            <button
              type="submit"
              disabled={!agreed}
              className={`w-full font-bold py-4 rounded-full text-black ${
                agreed
                  ? "bg-yellow-400 hover:bg-yellow-500"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
            >
              Book Now
            </button>
            {status && (
              <p className="text-center mt-4 text-yellow-600 font-semibold">
                {status}
              </p>
            )}
          </div>
        </form>
      </div>

      <Footer />
    </>
  );
}

export default BookARide;
