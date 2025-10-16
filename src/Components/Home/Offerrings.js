import React from "react";
import blog1 from "../../Images/airport.jpg";
import blog2 from "../../Images/taxiSlider3.jpg";
import blog3 from "../../Images/cab-service-1.jpg";
import { useNavigate } from "react-router-dom";

export default function Offering() {
  const navigate = useNavigate();

  const blogs = [
    {
      id: 1,
      title: "Airport Pick-up and Drop",
      desc: "Airport pick-up and drop ensures comfortable, timely, and stress-free ride from home to airport destination.",
      img: blog1,
      path: "/our-taxi-service", // ✅ added path instead of onClick
    },
    {
      id: 2,
      title: "Inside City Cab Service",
      desc: "Inside-city cab service provides comfortable, safe, and direct rides between cities, with transparent pricing.",
      img: blog2,
      path: "/book-a-ride",
    },
    {
      id: 3,
      title: "Out Station Cab Service",
      desc: "Outstation cab service delivers convenient, safe, door-to-door travel for long distances beyond city limits.",
      img: blog3,
      path: "/outstation-cab-service-near-me", 
    },
  ];

  return (
    <div className="bg-gray-100 py-16">
      {/* Section Title */}
      <div className="text-center mb-12 px-4">
        <p className="text-gray-600 uppercase tracking-wider">
          Check out our benefits
        </p>
        <h2 className="text-3xl sm:text-5xl font-extrabold mt-2">
          What we’re offering
        </h2>
      </div>

      {/* Blog Cards */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition duration-300"
          >
            {/* Image */}
            <div
              className="overflow-hidden cursor-pointer"
              onClick={() => navigate(blog.path)} // ✅ click image to navigate
            >
              <img
                src={blog.img}
                alt={blog.title}
                className="w-full h-56 sm:h-64 object-cover transform hover:scale-110 transition duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h2
                className="text-xl font-bold text-gray-800 hover:text-yellow-500 cursor-pointer transition duration-300"
                onClick={() => navigate(blog.path)} // ✅ click title to navigate
              >
                {blog.title}
              </h2>
              <p className="text-gray-500 text-sm mt-3 leading-relaxed">
                {blog.desc}
              </p>

              {/* Button */}
              <button
                className="mt-5 inline-block bg-yellow-400 text-black font-semibold px-5 py-2 rounded-full hover:bg-yellow-500 transition duration-300"
                onClick={() => navigate(blog.path)} // ✅ click button to navigate
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
