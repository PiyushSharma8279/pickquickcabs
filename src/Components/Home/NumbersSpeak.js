import React, { useEffect, useState } from "react";
import { FaTachometerAlt, FaUsers, FaTaxi, FaSmile } from "react-icons/fa";

const stats = [
  { icon: <FaTachometerAlt className="text-yellow-500 text-4xl mb-4" />, value: 8700, label: "KM Driven" },
  { icon: <FaUsers className="text-yellow-500 text-4xl mb-4" />, value: 4978, label: "People Dropped" },
  { icon: <FaTaxi className="text-yellow-500 text-4xl mb-4" />, value: 800, label: "Taxis & Drivers" },
  { icon: <FaSmile className="text-yellow-500 text-4xl mb-4" />, value: 2480, label: "Happy People" },
];

function Counter({ target }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // total animation time (2s)
    const step = Math.ceil(target / (duration / 20)); // dynamic increment
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target); // stop exactly at target
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 20); // update every 20ms

    return () => clearInterval(timer);
  }, [target]);

  return <span>{count}</span>;
}

function NumbersSpeak() {
  return (
    <div className="bg-gray-100 py-16 px-6">
      <div className="text-center mb-12">
        <p className="text-gray-600">Our fun facts</p>
        <h2 className="text-4xl sm:text-5xl font-bold">Numbers speak</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md flex flex-col items-center justify-center p-8"
          >
            {item.icon}
            <h3 className="text-4xl font-bold">
              <Counter target={item.value} />
            </h3>
            <p className="text-gray-600 mt-2">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NumbersSpeak;
