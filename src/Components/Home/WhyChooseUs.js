import React from "react";
import { FaShieldAlt, FaUserCheck, FaClipboardList } from "react-icons/fa";

const features = [
  {
    icon: <FaShieldAlt className="text-black text-5xl" />,
    title: "Guaranteed Safety and Comfort ",
    desc: "At Pick Quick Cabs we promise you a safe and comfortable ride every time. ",
  },
  {
    icon: <FaUserCheck className="text-black text-5xl" />,
    title: "Experienced and Skilled Drivers ",
    desc: "We have employed skilled and professional drivers to make your ride safe and comfortable in every terrain. ",
  },
  {
    icon: <FaClipboardList className="text-black text-5xl" />,
    title: "Transparent Pricing",
    desc: "Transparent fares inclusive of tolls, parking, and taxes. ",
  },
];

function WhyChooseUs() {
  return (
    <div className="bg-black text-white py-20 px-6">
      {/* Heading */}
      <div className="text-center mb-12">
        <p className="uppercase tracking-wide text-sm text-gray-400">
         Pick Quick Cabs 
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold">Why choose us</h2>
      </div>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {features.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-8"
          >
            {/* Yellow Circle with Icon */}
            <div className="w-24 h-24 rounded-full bg-yellow-400 flex items-center justify-center mb-6 shadow-lg">
              {item.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold mb-4">{item.title}</h3>

            {/* Description */}
            <p className="text-gray-400 mb-6">{item.desc}</p>

            
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhyChooseUs;
