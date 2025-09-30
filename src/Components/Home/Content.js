import React from "react";
import { Play } from "lucide-react"; // play icon

function Content() {
  return (
    <>
      {/* Top heading */}
      <div className="flex justify-center">
        <div className="w-[80%] p-10">
          <h3 className="text-center font-medium p-2 text-xl">
            Welcome to Conexi Company
          </h3>
          <h1 className="text-5xl md:text-7xl text-center font-bold leading-tight">
            Your first choice for traveling anywhere
          </h1>
        </div>
      </div>

      {/* Content section */}
      <div className="w-full px-4 sm:px-8 py-12 bg-white">
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
          {/* Left: Passenger image */}
          <div className="flex-shrink-0 md:w-1/2">
            <img
              src="https://old3.commonsupport.com/wp/conexi/wp-content/uploads/2020/04/choise-1-1.png"
              alt="Happy passenger"
              className="rounded-2xl shadow-lg object-cover w-full h-auto"
            />
          </div>

          {/* Right: Title, description, and Taxi image */}
          <div className="md:w-1/2 flex flex-col gap-6">
            {/* Title */}
            <h2 className="text-2xl sm:text-3xl font-bold">
              We’re specialized in providing a high quality service
            </h2>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed">
              There are many variations of passages of lorem ipsum available but
              the majority have suffered alteration in some form by injected
              humour or random words which don’t look even slightly believable.
              If you are going to use a passage of lorem ipsum you need to be
              sure there isn’t anything embarrassing.
            </p>

            {/* Taxi image with play button */}
            <div className="relative w-full max-w-sm">
              <img
                src="https://old3.commonsupport.com/wp/conexi/wp-content/uploads/2020/04/history-1-1.jpg"
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
