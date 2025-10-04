// File: Outstation.jsx
import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

const Outstation = () => {
  const fares = [
    { from: "Delhi", to: "Jaipur", oneWay: "₹3,791", roundTrip: "₹7,641" },
    { from: "Delhi", to: "Agra", oneWay: "₹2,965", roundTrip: "₹6,516" },
    { from: "Delhi", to: "Kanpur", oneWay: "₹7,342", roundTrip: "₹12,326" },
    { from: "Delhi", to: "Lucknow", oneWay: "₹6,886", roundTrip: "₹13,627" },
    { from: "Delhi", to: "Ludhiana", oneWay: "₹3,928", roundTrip: "₹7,960" },
    { from: "Delhi", to: "Indore", oneWay: "₹15,871", roundTrip: "₹19,845" },
    { from: "Delhi", to: "Haridwar", oneWay: "₹3,389", roundTrip: "₹6,637" },
    { from: "Noida", to: "Moradabad", oneWay: "₹2,736", roundTrip: "₹6,794" },
    { from: "Delhi", to: "Patiala", oneWay: "₹3700", roundTrip: "₹7000" },
    { from: "Delhi", to: "Dehradun", oneWay: "₹2,736", roundTrip: "₹6,794" },
    { from: "Noida", to: "Patiala", oneWay: "₹2,840", roundTrip: "₹6,994" },
    { from: "Gurgaon", to: "Sikar", oneWay: "₹3,736", roundTrip: "₹7,794" },
    { from: "Gurgaon", to: "Jodhpur", oneWay: "₹2,636", roundTrip: "₹5,794" },
    { from: "Noida", to: "Kedarnath", oneWay: "₹2,736", roundTrip: "₹6,794" },
  ];

  return (
    <>
    <Header/>
    <div className="flex flex-col items-center bg-gray-50 text-gray-800 mt-32">
      {/* Hero Section */}
      <section className="w-full  flex flex-col md:flex-row items-center justify-between p-6 md:p-10 gap-10">
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold">
            Outstation Cabs from Delhi NCR at Lowest Fares
          </h1>
          <p className="text-lg">
            Outstation Taxi from Delhi NCR starts at <strong>₹1,500/-</strong>.
            Book your cab in advance and get 5–10% cheaper fares.
          </p>
          <div className="bg-white p-4 rounded-2xl shadow-md space-y-3">
            <input
              type="text"
              placeholder="Pickup"
              className="w-full border border-gray-300 rounded-lg p-2"
            />
            <input
              type="text"
              placeholder="Drop"
              className="w-full border border-gray-300 rounded-lg p-2"
            />
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-600">
                04-Oct-2025, 11:17 AM
              </p>
              <button className="bg-yellow-400 text-white px-5 py-2 rounded-lg hover:bg-yellow-700">
                Search Cabs
              </button>
            </div>
          </div>
        </div>

        <img
          src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=600&q=80"
          alt="Cab Ride"
          className="md:w-1/2 rounded-2xl shadow-lg mt-6 md:mt-0"
        />
      </section>

      {/* Why Choose Section */}
      <section className="w-full bg-white py-10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">
            Why choose Outstation Taxi from Quick Ride for your intercity travels?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-green-600 text-4xl mb-3">🧾</div>
              <h3 className="text-xl font-semibold mb-2">Lower Fares</h3>
              <p>
                Travel at 5–10% lower fares than other outstation cabs.
                Cheapest outstation taxi in Bangalore you can find.
              </p>
            </div>
            <div>
              <div className="text-green-600 text-4xl mb-3">⏰</div>
              <h3 className="text-xl font-semibold mb-2">
                Schedule in Advance. Get On-Time Pickup
              </h3>
              <p>
                Pre-book outstation cabs and enjoy on-time doorstep pickup from
                anywhere in the city.
              </p>
            </div>
            <div>
              <div className="text-green-600 text-4xl mb-3">💰</div>
              <h3 className="text-xl font-semibold mb-2">Transparent Pricing</h3>
              <p>
                Transparent fares inclusive of tolls, parking, and taxes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fares Table */}
      <section className="w-full max-w-5xl bg-gray-100 p-8 rounded-2xl mb-12">
        <h2 className="text-3xl font-bold text-center mb-6">
          Quick Ride Fares for Outstation Taxi from Delhi NCR
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 bg-white rounded-lg overflow-hidden">
            <thead className="bg-yellow-400 text-white">
              <tr>
                <th className="p-3 text-left">From</th>
                <th className="p-3 text-left">To</th>
                <th className="p-3 text-left">Fare (One Way)</th>
                <th className="p-3 text-left">Fare (Round Trip)</th>
              </tr>
            </thead>
            <tbody>
              {fares.map((fare, idx) => (
                <tr
                  key={idx}
                  className="border-t border-gray-200 hover:bg-gray-50"
                >
                  <td className="p-3">{fare.from}</td>
                  <td className="p-3">{fare.to}</td>
                  <td className="p-3">{fare.oneWay}</td>
                  <td className="p-3">{fare.roundTrip}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
    <Footer/>
    </>
  );
};

export default Outstation;
