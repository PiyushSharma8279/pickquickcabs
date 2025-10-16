import React, { useState, useEffect } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import outStation from "../../Images/businessman-in-cab.jpg";
import useSEO from "../../Hooks/UseSeo";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // ✅ import navigation hook

const Outstation = () => {
  const navigate = useNavigate(); // ✅ create navigate function

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useSEO({
    title: "Hire Outstation Cab/Taxi Service in Delhi at Best Price | Pick Quick Cabs",
    description:
      "Enjoy smooth travel with our Outstation Cab/Taxi Service in Delhi. Comfortable rides, quick booking & great prices for every journey. Book Now.",
    url: "https://www.pickquickcabs.com/outstation-cab-service-near-me",
  });

  const [openIndex, setOpenIndex] = useState(null);

  // ✅ Add path for each route
  const fares = [
    { from: "Delhi", to: "Dehradun", oneWay: "₹3,700", roundTrip: "₹7,000", path: "/delhi-to-dehradun-taxi-service" },
    { from: "Delhi", to: "Rishikesh", oneWay: "₹3,300", roundTrip: "₹6,500", path: "/delhi-to-rishikesh-taxi-service" },
    { from: "Delhi", to: "Haridwar", oneWay: "₹3,300", roundTrip: "₹6,000", path: "/delhi-to-haridwar-taxi-service" },
    { from: "Delhi", to: "Nainital", oneWay: "₹4,500", roundTrip: "₹8,000", path: "/delhi-to-nanital-taxi-service" },
    { from: "Delhi", to: "Haldwani", oneWay: "₹3,800", roundTrip: "₹7,000", path: "/delhi-to-haldwani-taxi-service" },
    { from: "Delhi", to: "Rudrapur", oneWay: "₹3,500", roundTrip: "₹6,500", path: "/delhi-to-rudrapur-taxi-service" },
    { from: "Delhi", to: "Agra", oneWay: "₹2,700", roundTrip: "₹5,100", path: "/delhi-to-agra-taxi-service" },
    { from: "Delhi", to: "Mathura", oneWay: "₹2,500", roundTrip: "₹4,500", path: "/delhi-to-mathura-taxi-service" },
    { from: "Delhi", to: "Jaipur Old", oneWay: "₹3,500", roundTrip: "₹6,500", path: "/delhi-to-jaipur-taxi-service" },
    { from: "Delhi", to: "Jaipur New", oneWay: "₹4,000", roundTrip: "₹7,500", path: "/delhi-to-jaipur-taxi-service" },
    { from: "Delhi", to: "Kainchi Dham", oneWay: "₹4,500", roundTrip: "₹8,500", path: "/delhi-to-kainchi-dham-taxi-service" },
    { from: "Delhi", to: "Mussoorie", oneWay: "₹4,500", roundTrip: "₹8,000", path: "/delhi-to-mussoorie-taxi-service" },
    { from: "Delhi", to: "Shimla", oneWay: "₹5,500", roundTrip: "₹10,000", path: "/delhi-to-shimla-taxi-service" },
    { from: "Delhi", to: "Manali", oneWay: "₹7,500", roundTrip: "₹14,000", path: "/delhi-to-manali-taxi-service" },
  ];

  const faqs = [
    {
      question: "How do I book an outstation cab with Pick Quick Cabs?",
      answer:
        "Booking is simple! Go to Book A Ride page and select pickup and drop locations, travel dates, and choose your preferred vehicle type and fill your name or contact details. You’ll receive a call to confirm your booking online, by phone, or WhatsApp for added convenience.",
    },
    {
      question: "Is my fare inclusive of tolls, parking fees, and driver allowances?",
      answer:
        "We provide transparent pricing. Toll charges and driver allowances are not included in the fare at Pick Quick Cabs, but please check your estimate for any extra or excluded charges before confirming your trip.",
    },
    {
      question: "Can I book one-way trips, or are only round-trips available?",
      answer:
        "Pick Quick Cabs offers both one-way and round-trip bookings for outstation journeys. One-way trips can be more economical and convenient for customers who don’t plan to return immediately.",
    },
    {
      question: "What types of vehicles are available, and how do I choose the right one?",
      answer:
        "We have a range of vehicles from hatchbacks to SUVs and Tempo Travellers to suit your group size and luggage needs. Always match your party size and luggage requirements to the vehicle type when booking for maximum comfort.",
    },
    {
      question: "What is your cancellation and refund policy for outstation bookings?",
      answer:
        "Plans can change, and we understand that. Our cancellation policies are simple. You can cancel up to 24 hours before pickup for a full refund; cancellations within 24 hours are non-refundable.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Header />

      <div className="flex flex-col items-center bg-gray-50 text-gray-800 mt-32">
        {/* Hero Section */}
        <section className="w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-10 gap-10 max-w-7xl mx-auto">
          <div className="md:w-1/2 space-y-5">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              Lowest Fares for Outstation Cabs from Delhi NCR
            </h1>
            <p className="text-lg leading-relaxed">
              The cost of an outstation taxi from Delhi NCR starts at{" "}
              <strong>₹1,500*</strong>. Book your cab in advance and get your cab on time at your doorstep.
            </p>
          </div>

          <img
            src={outStation}
            alt="Cab Ride"
            className="md:w-1/2 rounded-2xl shadow-lg object-cover w-full max-h-[400px]"
          />
        </section>

        {/* Features Section */}
        <section className="w-full bg-white py-16 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-10">
              Why choose Pick Quick Cabs for Outstation Travels?
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
              <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
                <div className="text-green-600 text-5xl mb-3">🧾</div>
                <h3 className="text-xl font-semibold mb-2">Lower Fares</h3>
                <p>Travel at 5–10% lower rates than competitors. The most affordable taxi service in Delhi NCR for outstation trips.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
                <div className="text-green-600 text-5xl mb-3">⏰</div>
                <h3 className="text-xl font-semibold mb-2">Schedule in Advance</h3>
                <p>Pre-book your outstation cab and enjoy on-time doorstep pickup anywhere in the city.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
                <div className="text-green-600 text-5xl mb-3">💰</div>
                <h3 className="text-xl font-semibold mb-2">Transparent Pricing</h3>
                <p>No hidden charges. Transparent fares with tolls and taxes clearly mentioned.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Fares Table */}
        <section className="w-full max-w-5xl bg-gray-100 p-8 rounded-2xl my-10 shadow-md">
          <h2 className="text-3xl font-bold text-center mb-6">
            Quick Ride Fares for Outstation Taxi from Delhi NCR
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 bg-white rounded-lg overflow-hidden text-left">
              <thead className="bg-yellow-500 text-white">
                <tr>
                  <th className="p-3">From</th>
                  <th className="p-3">To</th>
                  <th className="p-3">One Way</th>
                  <th className="p-3">Round Trip</th>
                  <th className="p-3">For More Info.</th>
                </tr>
              </thead>
              <tbody>
                {fares.map((fare, idx) => (
                  <tr key={idx} className="border-t border-gray-200 hover:bg-yellow-50 transition">
                    <td className="p-3">{fare.from}</td>
                    <td className="p-3">{fare.to}</td>
                    <td className="p-3">{fare.oneWay}</td>
                    <td className="p-3">{fare.roundTrip}</td>
                    <td className="p-3">
                      <button
                        onClick={() => navigate(fare.path)}
                        className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition"
                      >
                        Visit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Notes Section */}
        <div className="w-full max-w-5xl mx-auto mb-10 text-sm text-gray-700 bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
          <p className="font-bold">Toll, Parking and State Tax Prices are not Included</p>
          <p><strong>Outstation Minimum:</strong> 250 KM</p>
          <p><strong>Per Day Night Charges:</strong> Rs.250</p>
          <p><strong>Cab Charges After Destination KM Complete :</strong> Rs.13/km</p>
          <p><strong>Above Prices Are according to 4+1 seat in Car. These prices will change according to car selection.</strong></p>
        </div>

        {/* FAQs Section */}
        <section className="py-16 bg-gray-100">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold">FAQs of Pick Quick Cabs</h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-5 cursor-pointer transition hover:shadow-lg"
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold">{faq.question}</h3>
                    <span className="text-yellow-500">
                      {openIndex === index ? <FaMinus /> : <FaPlus />}
                    </span>
                  </div>
                  {openIndex === index && (
                    <p className="mt-3 text-gray-700 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg">
                      {faq.answer}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Outstation;
