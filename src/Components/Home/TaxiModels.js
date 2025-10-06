import React from "react";
import {  SiSuzuki,} from "react-icons/si";
import { useNavigate } from "react-router-dom";

const cars = [
  {
    img: "https://www.varunmaruti.com/uploads/products/colors/wagonr-superior-white.png",
    logo: <SiSuzuki className="text-4xl text-black" />,
    name: "Wagonr",
    baseRate: "1800*",
    perMile: "9.5",
    passengers: 4,
  },
  {
    img: "https://imgd-ct.aeplcdn.com/664x415/n/cw/ec/170299/dzire-2024-right-front-three-quarter.jpeg?isig=0&q=80",
    logo: <SiSuzuki className="text-4xl text-black" />,
    name: "Swift Dzire",
    baseRate: "2000*",
    perMile: "10",
    passengers: 4,
  },
  {
    img: "https://htcms-prod-images.s3.ap-south-1.amazonaws.com/htmobile1/marutisuzuki_ertiga/images/colour_marutisuzuki-ertiga_pearl-metallic-arctic-white_600x400.jpg",
    logo: <SiSuzuki className="text-4xl text-black" />,
    name: "Ertiga",
    baseRate: "2900*",
    perMile: "15",
    passengers: 7,
  },
];

function TaxiModels() {
  const navigate = useNavigate()
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
            className="hover:border hover:border-yellow-500 rounded-xl shadow-md flex flex-col items-center p-6 transition hover:shadow-lg"
          >
            {/* Car Image */}
            <img src={car.img} alt={car.name} className="h-40 object-contain mb-4" />

            {/* Logo */}
            <div className="w-16 h-16 rounded-full bg-white border border-gray-300 flex items-center justify-center mb-4">
              {car.logo}
            </div>

            {/* Car Info */}
            <h3 className="text-xl font-bold mb-4">{car.name}</h3>
            <div className="text-gray-700 text-sm space-y-1">
              <div className=" flex justify-between text-lg gap-4">
                <p className="font-semibold">InterCity:</p>
                <p> {car.baseRate}</p>
              </div>
              <div className=" flex justify-between text-lg gap-4">
                <p className="font-semibold">Per Mile/KM:</p>
                <p> {car.perMile}</p>
              </div>
              <div className=" flex justify-between text-lg gap-4">
                <p className="font-semibold">Passengers:</p>
                <p> {car.passengers}</p>
              </div>
              
            </div>

            {/* Button */}
            <button className="mt-6 px-6 py-2 rounded-full bg-yellow-400 text-black font-semibold hover:bg-yellow-500 transition"
            onClick={()=> navigate('/book-a-ride')}
            >
              Book Cab
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaxiModels;
