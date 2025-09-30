import React from "react";
import { SiMercedes, SiToyota, SiVolkswagen } from "react-icons/si";

const cars = [
  {
    img: "https://old3.commonsupport.com/wp/conexi/wp-content/uploads/2020/04/pricing-1-3.png",
    logo: <SiVolkswagen className="text-4xl text-black" />,
    name: "M5 2008 Model",
    baseRate: "$4.30",
    perMile: "$2.00",
    passengers: 4,
  },
  {
    img: "https://old3.commonsupport.com/wp/conexi/wp-content/uploads/2020/04/pricing-1-1.png",
    logo: <SiMercedes className="text-4xl text-black" />,
    name: "E Class 2010 Model",
    baseRate: "$4.30",
    perMile: "$2.00",
    passengers: 4,
  },
  {
    img: "https://old3.commonsupport.com/wp/conexi/wp-content/uploads/2020/04/pricing-1-2.png",
    logo: <SiToyota className="text-4xl text-black" />,
    name: "Yaris 2014 Model",
    baseRate: "$4.30",
    perMile: "$2.00",
    passengers: 4,
  },
];

function TaxiModels() {
  return (
    <div className="bg-white py-16 px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold">Choose Your Taxi</h2>
        <p className="text-gray-600 mt-2">Select the best ride for your needs</p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {cars.map((car, index) => (
          <div
            key={index}
            className="border border-yellow-400 rounded-xl shadow-md flex flex-col items-center p-6 transition hover:shadow-lg"
          >
            {/* Car Image */}
            <img src={car.img} alt={car.name} className="h-40 object-contain mb-4" />

            {/* Logo */}
            <div className="w-16 h-16 rounded-full bg-white border border-gray-300 flex items-center justify-center mb-4">
              {car.logo}
            </div>

            {/* Car Info */}
            <h3 className="text-lg font-bold mb-4">{car.name}</h3>
            <div className="text-gray-700 text-sm space-y-1">
              <p>
                <span className="font-semibold">Base Rate:</span> {car.baseRate}
              </p>
              <p>
                <span className="font-semibold">Per Mile/KM:</span> {car.perMile}
              </p>
              <p>
                <span className="font-semibold">Passengers:</span> {car.passengers}
              </p>
            </div>

            {/* Button */}
            <button className="mt-6 px-6 py-2 rounded-full bg-yellow-400 text-black font-semibold hover:bg-yellow-500 transition">
              Book Taxi
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaxiModels;
