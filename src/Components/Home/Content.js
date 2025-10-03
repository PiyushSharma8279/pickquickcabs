import React from "react";
import { Play } from "lucide-react"; 
import contentImage from "../../Images/contentImage.png"
import videoImage from "../../Images/videoImage.jpg"

function Content() {
  return (
    <>
      {/* Top heading */}
      <div className="flex justify-center">
        <div className="w-[80%] p-10">
          <h3 className="text-center font-medium p-2 text-xl">
           Make Your Ride Comfortable with Pick Quick Cabs 
          </h3>
          <h1 className="text-5xl md:text-7xl text-center font-bold leading-tight">
            Reliable, Convenient, and Safe Journey Ahead 
          </h1>
        </div>
      </div>

      {/* Content section */}
      <div className="w-full px-4 sm:px-8 py-12 bg-white">
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
          {/* Left: Passenger image */}
          <div className="flex-shrink-0 md:w-1/2">
            <img
              src={contentImage}
              alt="Happy passenger"
              className="rounded-2xl shadow-lg object-cover w-full h-auto"
            />
          </div>

          {/* Right: Title, description, and Taxi image */}
          <div className="md:w-1/2 flex flex-col gap-6">
            {/* Title */}
            <h2 className="text-2xl sm:text-3xl font-bold">
              Witness the Most Affordable and Super Comfortable Taxi Rides All Over India 
            </h2>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed">
              Pick Quick Cabs offer instant and easy bookings straight from your phone. Give us a call or you can make your booking from our official website. We are also working on our app to make ride bookings effortless. Enjoy the most affordable rides across India. 
            </p>

            {/* Taxi image with play button */}
            <div className="relative w-full max-w-sm">
              <img
                src={videoImage}
                alt="Taxi service"
                className="rounded-2xl shadow-md w-full h-auto"
              />
              <button className="absolute inset-0 flex items-center justify-center">
                <div className="bg-yellow-400 text-black p-4 rounded-full shadow-lg hover:bg-yellow-500 transition">
                  <Play size={28} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;
